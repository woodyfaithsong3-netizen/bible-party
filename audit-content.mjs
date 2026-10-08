import fs from 'node:fs';

const sourceFiles = [
  './src/data/questions.ts',
  './src/data/characterQuestionsL1.ts',
  './src/data/characterQuestionsL2.ts',
  './src/data/characterQuestionsL3.ts',
  './src/data/characterQuestionsL4.ts',
  './src/data/characterQuestionsL5.ts',
  './src/data/characterQuestionsL6.ts',
];
const source = sourceFiles.map(file => fs.readFileSync(new URL(file, import.meta.url), 'utf8')).join('\n');
const dedicatedSource = sourceFiles.slice(1).map(file => fs.readFileSync(new URL(file, import.meta.url), 'utf8')).join('\n');

const ids = [...source.matchAll(/id:\s*['"]([^'"+]+)['"]/g)].map(m => m[1].trim()).filter(id => !id.endsWith('-'));
const counts = new Map();
for (const id of ids) counts.set(id, (counts.get(id) ?? 0) + 1);

const editorialIds = new Set(
  [...source.matchAll(/editorialRemoveQuizIds\s*=\s*new Set\(\[([\s\S]*?)\]\)/g)]
    .flatMap(m => [...m[1].matchAll(/['"]([^'"]+)['"]/g)].map(x => x[1]))
);
const duplicateIds = [...counts.entries()].filter(([id, count]) => count > 1 && !editorialIds.has(id));

const references = [...source.matchAll(/reference:\s*['"]([^'"]+)['"]/g)].map(m => m[1].trim());
const emptyReferences = references.length !== references.filter(Boolean).length;

const quizBlocks = [...dedicatedSource.matchAll(
  /type:\s*['"]quiz['"][\s\S]{0,900}?answers:\s*\[([^\]]+)\],\s*correctAnswer:\s*(\d+)/g
)].filter(m => /^\s*['"]/.test(m[1]));
const invalidQuizIndexes = quizBlocks.filter(m => {
  const answerCount = (m[1].match(/['"]/g) ?? []).length / 2;
  return Number(m[2]) < 0 || Number(m[2]) >= answerCount;
});

const expertCards = [...dedicatedSource.matchAll(/difficulty:\s*['"]expert['"]/g)].length;
const characterIds = [...dedicatedSource.matchAll(/characterId:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
const characterCounts = new Map();
for (const id of characterIds) characterCounts.set(id, (characterCounts.get(id) ?? 0) + 1);
const characterCoverage = characterCounts.size;
const characterCountFailures = [...characterCounts.entries()].filter(([, n]) => n < 13 || n > 16);

const cardRecords = [...dedicatedSource.matchAll(
  /type:\s*['"](quiz|truefalse|mystery)['"][\s\S]{0,900}?characterId:\s*['"]([^'"]+)['"][\s\S]{0,300}?difficulty:\s*['"](easy|medium|hard|expert)['"]/g
)].map(m => ({ type: m[1], characterId: m[2], difficulty: m[3] }));

const perCharacterTypeFailures = [];
const perCharacterDifficultyFailures = [];
for (const id of new Set(characterIds)) {
  const cards = cardRecords.filter(card => card.characterId === id);
  const typeCounts = Object.fromEntries(['quiz','truefalse','mystery'].map(type => [
    type, cards.filter(card => card.type === type).length,
  ]));
  const diffCounts = Object.fromEntries(['easy','medium','hard','expert'].map(diff => [
    diff, cards.filter(card => card.difficulty === diff).length,
  ]));
  if (typeCounts.quiz !== 10 || typeCounts.truefalse < 1 || typeCounts.truefalse > 4 || typeCounts.mystery !== 2) {
    perCharacterTypeFailures.push({ id, ...typeCounts });
  }
  if (diffCounts.easy < 1 || diffCounts.easy > 3 || diffCounts.medium < 3 || diffCounts.medium > 4 || diffCounts.hard < 3 || diffCounts.hard > 5 || diffCounts.expert < 2 || diffCounts.expert > 4) {
    perCharacterDifficultyFailures.push({ id, ...diffCounts });
  }
}

const quizCount = [...dedicatedSource.matchAll(/type:\s*['"]quiz['"]/g)].length;
const trueFalseCount = [...dedicatedSource.matchAll(/type:\s*['"]truefalse['"]/g)].length;
const mysteryCount = [...dedicatedSource.matchAll(/type:\s*['"]mystery['"]/g)].length;
const trueFalseLines = dedicatedSource.split('\n').filter(line => /type:\s*['"]truefalse['"]/.test(line));
const trueTrueFalseCount = trueFalseLines.filter(line => /answer:\s*true\b/.test(line)).length;
const falseTrueFalseCount = trueFalseLines.filter(line => /answer:\s*false\b/.test(line)).length;

const malformedNumericArtifacts = [...dedicatedSource.matchAll(/[A-Za-zÀ-ÿ]\d{3,}/g)].map(m => m[0]);
const quizLines = dedicatedSource.split('\n').filter(line => /type:\s*['"]quiz['"]/.test(line));
const answerPositionCounts = [0,1,2,3].map(i => ({
  index: i,
  count: quizLines.filter(line => new RegExp(`correctAnswer:\\s*${i}(?:\\D|$)`).test(line)).length,
}));

const malformedQuestionStrings = dedicatedSource.split('\n')
  .filter(line => line.includes('question:') && line.includes(', answers:'))
  .filter(line => {
    const q = line.indexOf('question:');
    const a = line.indexOf(', answers:');
    const value = line.slice(q + 9, a).trim();
    let quotes = 0;
    for (let i = 0; i < value.length; i++) if (value[i] === "'" && value[i - 1] !== "\\") quotes++;
    return !value.startsWith("'") || !value.endsWith("'") || quotes !== 2;
  });

const duplicateOptionBlocks = quizBlocks.filter(m => {
  const options = [...m[1].matchAll(/['"]([^'"]*)['"]/g)].map(x => x[1].trim().toLowerCase());
  return options.length >= 2 && new Set(options).size !== options.length;
});

const semanticQuizRecords = dedicatedSource.split('\n')
  .filter(line => /type:\s*['"]quiz['"]/.test(line))
  .map(line => {
    const characterId = line.match(/characterId:\s*['"]([^'"]+)['"]/)?.[1] ?? '';
    const question = line.match(/question:\s*'([^']+)'/)?.[1] ?? '';
    const correctAnswerIndex = Number(line.match(/correctAnswer:\s*(\d+)/)?.[1] ?? -1);
    const answersRaw = line.match(/answers:\s*\[([^\]]+)\]/)?.[1] ?? '';
    const answers = [...answersRaw.matchAll(/'([^']*)'/g)].map(match => match[1]);
    return { characterId, question, answer: answers[correctAnswerIndex] ?? '' };
  });

const personQuestionPattern = /^(qui|à qui|a qui|avec qui|quel personnage|quelle personne|quel prophète|quelle prophétesse|quel roi|quelle reine|quel homme|quelle femme|quel fils|quelle fille|quel apôtre|quel disciple|quel prêtre|quel juge|quel gouverneur|quel centurion|quel patriarche|quel chrétien|quelle chrétienne|quel collecteur|quel chef|quel commandant|quel compagnon|quel prédicateur|quel pharisien|quel rédempteur)\b/i;
const nonPersonQuestionPattern = /^(où|d'où|dans quelle (ville|région|province|contrée|pays|fleuve|mer)|sur quoi|combien|qu'est-ce que|quelles conséquences|quel avertissement|quel événement|quel danger|quel défi|quel objet|quelle qualité|quel problème|quel rôle|quel poste|quel métier|quel âge|quel effet|quel sujet|quelles consignes|quels thèmes|quels signes|quel privilège|quelles difficultés|quel fleuve|quelle ville|quelles mesures|quelles réformes)\b/i;

const personAnswersByCharacter = new Map();
for (const card of semanticQuizRecords) {
  if (!personQuestionPattern.test(card.question) || !card.answer) continue;
  if (!personAnswersByCharacter.has(card.characterId)) personAnswersByCharacter.set(card.characterId, new Set());
  personAnswersByCharacter.get(card.characterId).add(card.answer.trim().toLowerCase());
}
const semanticCharacterAnswerMismatches = semanticQuizRecords.filter(card =>
  card.characterId && card.answer && nonPersonQuestionPattern.test(card.question) &&
  personAnswersByCharacter.get(card.characterId)?.has(card.answer.trim().toLowerCase())
);

const malformedWhoAnswers = semanticQuizRecords.filter(card =>
  /^(qui|quel personnage|quelle personne|quel prophète|quelle prophétesse|quel roi|quelle reine|quel homme|quelle femme|quel apôtre|quel disciple|quel prêtre|quel juge|quel gouverneur|quel centurion|quel patriarche|quel chrétien|quelle chrétienne)\b/i.test(card.question) &&
  /^(à|a)\s+/i.test(card.answer)
);

const malformedDreamAnswers = semanticQuizRecords.filter(card =>
  /^(quels rêves|quel rêve)\b/i.test(card.question) && /^(à|a|pour|vers|dans)\s+/i.test(card.answer)
);

const metaExplanations = dedicatedSource.split('\n').filter(line =>
  /type:\s*['"]quiz['"]/.test(line) &&
  /explanation:\s*['"](Examiner|Observer|Étudier|Etudier|Approfondir|Découvrir|Analyser|Comprendre)\b/i.test(line)
);

const duplicateQuestions = [...new Map(
  semanticQuizRecords.map(card => [card.question.trim().toLowerCase(), card])
)].length !== semanticQuizRecords.length;

const failures = [];
if (semanticCharacterAnswerMismatches.length) failures.push('character answer used for a non-person question: ' + semanticCharacterAnswerMismatches.map(card => card.characterId + ' / ' + card.question + ' -> ' + card.answer).join(' | '));
if (malformedWhoAnswers.length) failures.push('who/person question has an answer shaped like a non-person response: ' + malformedWhoAnswers.map(card => card.characterId + ' / ' + card.question + ' -> ' + card.answer).join(' | '));
if (malformedDreamAnswers.length) failures.push('dream question has a non-dream answer shape: ' + malformedDreamAnswers.map(card => card.characterId + ' / ' + card.question + ' -> ' + card.answer).join(' | '));
if (metaExplanations.length) failures.push('meta/instructional explanations remain in quiz cards: ' + metaExplanations.length);
if (duplicateQuestions) failures.push('duplicate quiz questions remain in the dedicated character corpus');
if (duplicateIds.length) failures.push('duplicate ids: ' + duplicateIds.map(([id, n]) => id + ' x' + n).join(', '));
if (emptyReferences) failures.push('empty references detected');
if (invalidQuizIndexes.length) failures.push('invalid quiz correctAnswer indexes: ' + invalidQuizIndexes.length);
if (expertCards < 400) failures.push('dedicated expert card count unexpectedly low: ' + expertCards);
if (characterCoverage !== 125) failures.push('character coverage unexpectedly changed: ' + characterCoverage);
if (characterCountFailures.length) failures.push('character question count outside 13-16 after editorial removals: ' + characterCountFailures.map(([id,n]) => id + ' x' + n).join(', '));
if (perCharacterTypeFailures.length) failures.push('per-character type distribution outside 10 quiz + 1-4 truefalse + 2 mystery: ' + JSON.stringify(perCharacterTypeFailures.slice(0, 10)));
if (perCharacterDifficultyFailures.length) failures.push('per-character difficulty distribution outside current editorial range: ' + JSON.stringify(perCharacterDifficultyFailures.slice(0, 10)));

if (quizCount < 1000) failures.push('dedicated quiz count unexpectedly low: ' + quizCount);
if (trueFalseCount < 300) failures.push('dedicated true/false count unexpectedly low: ' + trueFalseCount);
if (mysteryCount < 200) failures.push('dedicated mystery count unexpectedly low: ' + mysteryCount);
if (trueFalseLines.length && (falseTrueFalseCount / trueFalseLines.length) < 0.25) failures.push('true/false split has too few false statements: ' + JSON.stringify({true:trueTrueFalseCount,false:falseTrueFalseCount}));

if (malformedNumericArtifacts.length) failures.push('numeric artifacts detected: ' + [...new Set(malformedNumericArtifacts)].slice(0, 10).join(', '));
if (duplicateOptionBlocks.length) failures.push('quiz cards with duplicate options: ' + duplicateOptionBlocks.length);
if (malformedQuestionStrings.length) failures.push('malformed quiz question strings: ' + malformedQuestionStrings.length);

const rawCategories = [...dedicatedSource.matchAll(/category:\s*['"]([^'"]+)['"]/g)].map(m => m[1].trim());
const characterCategoriesOutsidePersonnages = rawCategories.filter(c => c === 'Révision des 125 fiches');
if (characterCategoriesOutsidePersonnages.length) failures.push('dedicated character questions still use the old revision category: ' + characterCategoriesOutsidePersonnages.length);

const answerPositionTotal = answerPositionCounts.reduce((sum, item) => sum + item.count, 0);
if (answerPositionTotal !== quizCount || answerPositionCounts.some(item => item.count < Math.floor(quizCount * 0.20))) {
  failures.push('unbalanced correct answer positions: ' + JSON.stringify(answerPositionCounts));
}


/**
 * Routage exhaustif : chaque banque de cartes exportée doit atteindre un
 * pool réellement jouable. Les cartes historiques peuvent être transformées
 * (citation/intrus/chronologie/Time's Up -> Quiz ou Mystère), mais leur banque
 * source doit obligatoirement être référencée par le pipeline de gameplay.
 */
const playableSourceFiles = [
  './src/data/jw_enrichment_v53.ts',
  './src/data/jw_enrichment_v54.ts',
  './src/data/jw_enrichment_v55.ts',
  './src/data/jw_enrichment_v56.ts',
  './src/data/jw_enrichment_v57.ts',
  './src/data/jw_enrichment_v58.ts',
  './src/data/jw_enrichment_v61.ts',
  './src/data/jw_enrichment_v104.ts',
  './src/data/jw_enrichment_v105.ts',
  './src/data/jw_enrichment_v106_characters.ts',
  './src/data/jw_enrichment_v107_characters.ts',
  './src/data/jw_enrichment_v108_characters.ts',
  './src/data/jwCategories.ts',
  './src/data/chronologyQuestions.ts',
  './src/data/preachingTruthQuestions.ts',
  './src/data/completeTheVerseQuestions.ts',
  './src/data/characterQuestionsL1.ts',
  './src/data/characterQuestionsL2.ts',
  './src/data/characterQuestionsL3.ts',
  './src/data/characterQuestionsL4.ts',
  './src/data/characterQuestionsL5.ts',
  './src/data/characterQuestionsL6.ts',
];
const routingQuestions = fs.readFileSync(new URL('./src/data/questions.ts', import.meta.url), 'utf8');
const routingGameContent = fs.readFileSync(new URL('./src/data/gameContent.ts', import.meta.url), 'utf8');
const routingCode = routingQuestions + '\n' + routingGameContent;

// Contrôle runtime des quatre modes officiels : une banque ne suffit pas d'être
// importée ; elle doit être injectée dans un pool effectivement consommé par getGamePool.
// Les cartes Défi/Time's Up restent compatibles via leurs handlers historiques,
// mais aucune carte Vrai/Faux ne peut être supprimée au moment de construire le deck.
const runtimeRoutingFailures = [];
const requiredRoutingFragments = [
  ['Quiz ← quizQuestions', /\.\.\.quizQuestions\b/],
  ['Quiz ← quoteQuestions transformées', /\.\.\.quoteQuestions\.map\(/],
  ['Quiz ← intruderQuestions transformées', /\.\.\.intruderQuestions\.map\(/],
  ['Quiz ← challenges historiques', /\.\.\.challenges\b/],
  ['Qui est-ce ? ← mysteryQuestions', /mystery:\s*\[\.\.\.mysteryQuestions\.map\(/],
  ['Qui est-ce ? ← timesUpQuestions transformées', /\.\.\.timesUpQuestions\.map\(/],
  ['Vrai/Faux ← toutes les trueFalseQuestions', /const all = trueFalseQuestions\.map\(prepareTrueFalse\)/],
  ['Compléter ← completeTheVerseQuestions', /\.\.\.completeTheVerseQuestions\b/],
  ['Compléter ← completeTheSongQuestions', /\.\.\.completeTheSongQuestions\b/],
  ['getGamePool ← GAME_CONTENT', /getGamePool\s*=.*GAME_CONTENT\[mode\]/],
];
for (const [label, pattern] of requiredRoutingFragments) {
  if (!pattern.test(routingGameContent)) runtimeRoutingFailures.push(label);
}
if (/trueFalseQuestions\.filter\(isObjectiveTrueFalse\)/.test(routingGameContent)) {
  runtimeRoutingFailures.push('Vrai/Faux filtre encore des cartes avant le pool');
}
if (/slice\(0,\s*maxTruths\)/.test(routingGameContent)) {
  runtimeRoutingFailures.push('Vrai/Faux tronque encore le sous-pool des VRAI');
}
if (runtimeRoutingFailures.length) {
  failures.push('runtime routing failures: ' + runtimeRoutingFailures.join(', '));
}

const importedBankNames = [...routingQuestions.matchAll(/import\s*\{([^}]+)\}\s*from\s*['"][^'"]+['"]/g)]
  .flatMap(match => match[1].split(',').map(part => part.trim().split(/\s+as\s+/i)[0].trim()))
  .filter(Boolean);
const localBankNames = [...routingQuestions.matchAll(/(?:const|let|var)\s+([A-Za-z0-9_]+)\s*(?::[^=]+)?=\s*\[/g)]
  .map(match => match[1])
  .filter(name => /(?:Quiz|TrueFalse|Mystery|TimesUp|Quotes?|Chronology|Intruders?|Challenges?|Questions|Complete|Expansion|Expert|Forbidden|Facts|Supplement)/i.test(name));
const pipelineBankNames = [...new Set([...importedBankNames, ...localBankNames])];
const routingQuestionUsage = routingQuestions.replace(/^import.*$/gm, '');
const pipelineBankRoutes = pipelineBankNames.map(name => ({
  name,
  referencedInAggregator: routingQuestionUsage.includes(name),
  referencedInGameContent: routingGameContent.includes(name),
}));
const unroutedPipelineBanks = pipelineBankRoutes.filter(bank => !bank.referencedInAggregator && !bank.referencedInGameContent);
if (unroutedPipelineBanks.length) {
  failures.push('unrouted imported/local card banks: ' + unroutedPipelineBanks.map(bank => bank.name).join(', '));
}

const exportedCardBanks = [];
const routedBankNames = new Set();
for (const file of playableSourceFiles) {
  const sourceText = fs.readFileSync(new URL(file, import.meta.url), 'utf8');
  const exportMatches = [...sourceText.matchAll(/export const\s+([A-Za-z0-9_]+)\s*(?::\s*[^=]+)?=\s*\[/g)];
  for (let i = 0; i < exportMatches.length; i++) {
    const name = exportMatches[i][1];
    if (!/(?:Quiz|TrueFalse|Mystery|TimesUp|Quotes?|Chronology|Intruders?|Challenges?|Questions|Complete|Expansion|character)/i.test(name)) continue;
    const start = exportMatches[i].index;
    const end = i + 1 < exportMatches.length ? exportMatches[i + 1].index : sourceText.length;
    const segment = sourceText.slice(start, end);
    const idsInBank = [...segment.matchAll(/\bid\s*:\s*['"]([^'"]+)['"]/g)].map(match => match[1]);
    if (!idsInBank.length) continue;
    const duplicateIdsInBank = [...new Set(idsInBank.filter((id, index) => idsInBank.indexOf(id) !== index))];
    exportedCardBanks.push({
      file,
      name,
      cardCount: idsInBank.length,
      duplicateIds: duplicateIdsInBank,
    });
    const occurrences = routingCode.match(new RegExp('\\b' + name + '\\b', 'g')) || [];
    if (occurrences.length >= 2) routedBankNames.add(name);
  }
}
const unroutedCardBanks = exportedCardBanks.filter(bank => !routedBankNames.has(bank.name));
const duplicateIdsWithinBank = exportedCardBanks.filter(bank => bank.duplicateIds.length);
const sourceIds = [];
for (const bank of exportedCardBanks) {
  const sourceText = fs.readFileSync(new URL(bank.file, import.meta.url), 'utf8');
  const exportMatch = [...sourceText.matchAll(new RegExp('export const\\s+' + bank.name + '\\s*(?::\\s*[^=]+)?=\\s*\\[', 'g'))][0];
  if (!exportMatch) continue;
  const nextExport = sourceText.indexOf('export const ', exportMatch.index + exportMatch[0].length);
  const segment = sourceText.slice(exportMatch.index, nextExport < 0 ? sourceText.length : nextExport);
  for (const match of segment.matchAll(/\\bid\\s*:\s*['"]([^'"]+)['"]/g)) sourceIds.push(match[1]);
}
const sourceIdCounts = new Map();
for (const id of sourceIds) sourceIdCounts.set(id, (sourceIdCounts.get(id) ?? 0) + 1);
const duplicateSourceIds = [...sourceIdCounts.entries()].filter(([, count]) => count > 1);

if (unroutedCardBanks.length) {
  failures.push('unrouted playable source banks: ' + unroutedCardBanks.map(bank => bank.name + ' (' + bank.cardCount + ')').join(', '));
}
if (duplicateIdsWithinBank.length) {
  failures.push('duplicate ids inside source banks: ' + duplicateIdsWithinBank.map(bank => bank.name + ': ' + bank.duplicateIds.join(', ')).join(' | '));
}
if (duplicateSourceIds.length) {
  failures.push('duplicate source card ids across playable banks: ' + duplicateSourceIds.map(([id, count]) => id + ' x' + count).join(', '));
}
if (!exportedCardBanks.length) failures.push('global playability audit found no exported card banks');

const sourceCardTotal = exportedCardBanks.reduce((sum, bank) => sum + bank.cardCount, 0);
const routedSourceCardTotal = exportedCardBanks
  .filter(bank => routedBankNames.has(bank.name))
  .reduce((sum, bank) => sum + bank.cardCount, 0);
if (routedSourceCardTotal !== sourceCardTotal) {
  failures.push('source cards not fully routed: ' + routedSourceCardTotal + '/' + sourceCardTotal);
}

const sourceIdCounts = new Map();
for (const id of sourceIds) sourceIdCounts.set(id, (sourceIdCounts.get(id) ?? 0) + 1);
const duplicateSourceIds = [...sourceIdCounts.entries()].filter(([, count]) => count > 1);
if (unroutedCardBanks.length) {
  failures.push('unrouted playable source banks: ' + unroutedCardBanks.map(bank => bank.name + ' (' + bank.cardCount + ')').join(', '));
}
if (duplicateSourceIds.length) {
  failures.push('duplicate source card ids across playable banks: ' + duplicateSourceIds.map(([id, count]) => id + ' x' + count).join(', '));
}
if (!exportedCardBanks.length) failures.push('global playability audit found no exported card banks');

console.log('- Global playable source banks:', exportedCardBanks.length);
console.log('- Unrouted source banks:', unroutedCardBanks.length);
console.log('- Source card IDs audited:', sourceIds.length);
console.log('- Source cards routed:', routedSourceCardTotal + '/' + sourceCardTotal);
console.log('- Imported/local card banks mapped:', pipelineBankRoutes.length);
console.log('- Unrouted imported/local card banks:', unroutedPipelineBanks.length);


console.log('Bible Party content audit');
console.log('- ID occurrences:', ids.length);
console.log('- References:', references.length);
console.log('- Quiz blocks checked:', quizBlocks.length);
console.log('- Dedicated true/false split:', { true: trueTrueFalseCount, false: falseTrueFalseCount });
console.log('- Expert cards:', expertCards);
console.log('- Character coverage:', characterCoverage);
console.log('- Difficulty counts:', Object.fromEntries(['easy','medium','hard','expert'].map(d => [
  d, [...dedicatedSource.matchAll(new RegExp(`difficulty:\\s*['"]${d}['"]`, 'g'))].length
])));

if (failures.length) {
  console.error('FAIL');
  for (const failure of failures) console.error('  - ' + failure);
  process.exit(1);
}
console.log('PASS');
