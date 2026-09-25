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
const source = sourceFiles
  .map(file => fs.readFileSync(new URL(file, import.meta.url), 'utf8'))
  .join('\n');
const dedicatedSource = sourceFiles.slice(1)
  .map(file => fs.readFileSync(new URL(file, import.meta.url), 'utf8'))
  .join('\n');

const ids = [...source.matchAll(/id:\s*['"]([^'"+]+)['"]/g)]
  .map(m => m[1].trim())
  .filter(id => !id.endsWith('-'));
const counts = new Map();
for (const id of ids) counts.set(id, (counts.get(id) ?? 0) + 1);

const editorialIds = new Set(
  [...source.matchAll(/editorialRemoveQuizIds\s*=\s*new Set\(\[([\s\S]*?)\]\)/g)]
    .flatMap(m => [...m[1].matchAll(/['"]([^'"]+)['"]/g)].map(x => x[1]))
);

const duplicateIds = [...counts.entries()]
  .filter(([id, count]) => count > 1 && !editorialIds.has(id));

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
const characterCountFailures = [...characterCounts.entries()].filter(([, n]) => n !== 16);

const cardRecords = [...dedicatedSource.matchAll(
  /type:\s*['"](quiz|truefalse|mystery)['"][\s\S]{0,900}?characterId:\s*['"]([^'"]+)['"][\s\S]{0,300}?difficulty:\s*['"](easy|medium|hard|expert)['"]/g
)].map(m => ({ type: m[1], characterId: m[2], difficulty: m[3] }));

const perCharacterTypeFailures = [];
const perCharacterDifficultyFailures = [];
for (const id of new Set(characterIds)) {
  const cards = cardRecords.filter(card => card.characterId === id);
  const typeCounts = Object.fromEntries(['quiz','truefalse','mystery'].map(type => [
    type,
    cards.filter(card => card.type === type).length,
  ]));
  const diffCounts = Object.fromEntries(['easy','medium','hard','expert'].map(diff => [
    diff,
    cards.filter(card => card.difficulty === diff).length,
  ]));
  if (typeCounts.quiz !== 10 || typeCounts.truefalse !== 4 || typeCounts.mystery !== 2) {
    perCharacterTypeFailures.push({ id, ...typeCounts });
  }
  if (diffCounts.easy !== 3 || diffCounts.medium !== 4 || diffCounts.hard !== 5 || diffCounts.expert !== 4) {
    perCharacterDifficultyFailures.push({ id, ...diffCounts });
  }
}
const characterTypeDifficulty = new Map();
for (const block of dedicatedSource.matchAll(/characterId:\s*['"]([^'"]+)['"][\s\S]{0,180}?type:\s*['"]([^'"]+)['"][\s\S]{0,180}?difficulty:\s*['"]([^'"]+)['"]/g)) {
  const [, characterId, type, difficulty] = block;
  if (!characterTypeDifficulty.has(characterId)) characterTypeDifficulty.set(characterId, { quiz: 0, truefalse: 0, mystery: 0, easy: 0, medium: 0, hard: 0, expert: 0 });
  const counts = characterTypeDifficulty.get(characterId);
  if (counts[type] !== undefined) counts[type]++;
  if (counts[difficulty] !== undefined) counts[difficulty]++;
}
const characterDistributionFailures = [...characterTypeDifficulty.entries()].filter(([, c]) =>
  c.quiz !== 10 || c.truefalse !== 4 || c.mystery !== 2 || c.easy !== 3 || c.medium !== 4 || c.hard !== 5 || c.expert !== 4
);
const difficultyCounts = Object.fromEntries(['easy','medium','hard','expert'].map(d => [d, [...dedicatedSource.matchAll(new RegExp(`difficulty:\\s*['"]${d}['"]`, 'g'))].length]));


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
const malformedQuestionStrings = dedicatedSource.split('\n').filter(line => line.includes('question:') && line.includes(', answers:')).filter(line => { 
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

const failures = [];
if (difficultyCounts.easy !== 375 || difficultyCounts.medium !== 500 || difficultyCounts.hard !== 625 || difficultyCounts.expert !== 500) failures.push('dedicated difficulty counts changed: ' + JSON.stringify(difficultyCounts));
if (duplicateIds.length) failures.push('duplicate ids: ' + duplicateIds.map(([id, n]) => id + ' x' + n).join(', '));
if (emptyReferences) failures.push('empty references detected');
if (invalidQuizIndexes.length) failures.push('invalid quiz correctAnswer indexes: ' + invalidQuizIndexes.length);
if (expertCards !== 500) failures.push('dedicated expert card count unexpectedly changed: ' + expertCards);
if (characterCoverage !== 125) failures.push('character coverage unexpectedly changed: ' + characterCoverage);
if (characterCountFailures.length) failures.push('character question count != 16: ' + characterCountFailures.map(([id,n]) => id + ' x' + n).join(', '));
if (characterDistributionFailures.length) failures.push('per-character type/difficulty distribution changed: ' + characterDistributionFailures.map(([id,c]) => id + ' ' + JSON.stringify(c)).join(', '));
if (perCharacterTypeFailures.length) failures.push('per-character type distribution != 10 quiz + 4 truefalse + 2 mystery: ' + JSON.stringify(perCharacterTypeFailures.slice(0, 10)));
if (perCharacterDifficultyFailures.length) failures.push('per-character difficulty distribution != 3 easy + 4 medium + 5 hard + 4 expert: ' + JSON.stringify(perCharacterDifficultyFailures.slice(0, 10)));

if (quizCount !== 1250) failures.push('dedicated quiz count unexpectedly changed: ' + quizCount);
if (trueFalseCount !== 500) failures.push('dedicated true/false count unexpectedly changed: ' + trueFalseCount);
if (mysteryCount !== 250) failures.push('dedicated mystery count unexpectedly changed: ' + mysteryCount);
// The global true/false split is allowed to vary; each character still has the required 4 true/false cards.

if (malformedNumericArtifacts.length) failures.push('numeric artifacts detected: ' + [...new Set(malformedNumericArtifacts)].slice(0, 10).join(', '));
if (duplicateOptionBlocks.length) failures.push('quiz cards with duplicate options: ' + duplicateOptionBlocks.length);
if (malformedQuestionStrings.length) failures.push('malformed quiz question strings: ' + malformedQuestionStrings.length);

// Toutes les catégories affichées par le jeu doivent appartenir au catalogue éditorial.
const allowedCategories = new Set([
  'Questions bibliques',
  'Que veulent dire ces versets ?',
  'La Bible et l’Histoire',
  'La Bible et la science',
  'Personnages',
  'Évangiles',
  'Rois & prophètes',
  'Prophéties',
]);
const rawCategories = [...dedicatedSource.matchAll(/category:\s*['"]([^'"]+)['"]/g)].map(m => m[1].trim());
const characterCategoriesOutsidePersonnages = rawCategories.filter(c => c === 'Révision des 125 fiches');
if (characterCategoriesOutsidePersonnages.length) failures.push('dedicated character questions still use the old revision category: ' + characterCategoriesOutsidePersonnages.length);
const answerPositionTotal = answerPositionCounts.reduce((sum, item) => sum + item.count, 0);
if (answerPositionTotal !== 1250 || answerPositionCounts.some(item => item.count < 250)) failures.push('unbalanced correct answer positions: ' + JSON.stringify(answerPositionCounts));


console.log('Bible Party content audit');
console.log('- ID occurrences:', ids.length);
console.log('- References:', references.length);
console.log('- Quiz blocks checked:', quizBlocks.length);
console.log('- Expert cards:', expertCards);
console.log('- Character coverage:', characterCoverage);
console.log('- Difficulty counts:', difficultyCounts);

if (failures.length) {
  console.error('FAIL');
  for (const failure of failures) console.error('  - ' + failure);
  process.exit(1);
}
console.log('PASS');
