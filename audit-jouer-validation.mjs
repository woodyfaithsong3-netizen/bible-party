import fs from 'node:fs';
import crypto from 'node:crypto';

const manifest = fs.readFileSync(new URL('./JOUER_VALIDATION_MANIFEST.md', import.meta.url), 'utf8');
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
const tick = String.fromCharCode(96);
function gitBlobSha(content) {
  const bytes = Buffer.from(content, 'utf8');
  return crypto.createHash('sha1').update(Buffer.concat([
    Buffer.from('blob ' + bytes.length + '\0'),
    bytes,
  ])).digest('hex');
}
function readSource(file) {
  return fs.readFileSync(new URL(file, import.meta.url), 'utf8');
}
function sourceBankCount(sourceText) {
  let total = 0;
  const banks = [];
  const exportMatches = [...sourceText.matchAll(/export const\s+([A-Za-z0-9_]+)\s*(?::\s*[^=]+)?=\s*\[/g)];
  for (let i = 0; i < exportMatches.length; i++) {
    const name = exportMatches[i][1];
    if (!/(?:Quiz|TrueFalse|Mystery|TimesUp|Quotes?|Chronology|Intruders?|Challenges?|Questions|Complete|Expansion|Forbidden|character)/i.test(name)) continue;
    const start = exportMatches[i].index;
    const end = i + 1 < exportMatches.length ? exportMatches[i + 1].index : sourceText.length;
    const ids = [...sourceText.slice(start, end).matchAll(/\bid\s*:\s*['"]([^'"]+)['"]/g)].map(match => match[1]);
    if (!ids.length) continue;
    banks.push({ name, count: ids.length });
    total += ids.length;
  }
  const mappedExports = [...sourceText.matchAll(
    /export const\s+([A-Za-z0-9_]+)\s*(?::\s*[^=]+)?=\s*([A-Za-z0-9_]+)\.map\(\s*(?:\(\[([^\]]+)\]\)|\(([A-Za-z0-9_]+)(?:\s*,\s*([A-Za-z0-9_]+))?\))\s*=>/g
  )];
  for (const match of mappedExports) {
    const name = match[1];
    const tupleSourceName = match[2];
    const tupleSourceMatch = new RegExp('(?:const|let|var)\\s+' + tupleSourceName + '\\s*(?::[^=]+)?=\\s*\\[').exec(sourceText);
    if (!tupleSourceMatch) continue;
    const start = tupleSourceMatch.index;
    const close = sourceText.indexOf('\n];', start);
    if (close < 0) continue;
    const tupleText = sourceText.slice(start, close + 3);
    const tupleValues = [...tupleText.matchAll(/^\s*\[\s*['"]([^'"]+)['"]\s*,/gm)].map(item => item[1]);
    if (!tupleValues.length) continue;
    banks.push({ name, count: tupleValues.length });
    total += tupleValues.length;
  }
  return { total, banks };
}
const sections = manifest.split(/(?=^#{2,3} )/m);
function matchingValidatedCoverage(file, currentSha) {
  let covered = 0;
  const evidence = [];
  for (const section of sections) {
    const manifestFile = file.replace(/^\.\//, '');
    const sourceLine = '- Source : ' + tick + manifestFile + tick;
    if (!section.split('\n').some(line => line.trim() === sourceLine)) continue;
    const validated = /\bVALIDATED\b/i.test(section) || /^\s*-\s*État\s*:\s*VALIDATED\b/im.test(section);
    if (!validated) continue;
    const shaLines = [...section.matchAll(new RegExp('^\\s*-\\s*SHA[^:]*:\\s*' + tick + '([a-f0-9]{40})' + tick, 'gim'))].map(match => match[1]);
    if (!shaLines.includes(currentSha)) continue;
    let count = Number(section.match(/^\s*-\s*Taille\s*:\s*(\d+)\s*cartes/im)?.[1] ?? 0);
    if (!count) {
      const perimeter = section.match(/^\s*-\s*Périmètre(?:\s+[^:]*)?\s*:\s*(.+)$/im)?.[1] ?? '';
      if (/\bIDs? déclarés\b/i.test(perimeter)) count = Number(perimeter.match(/(\d+)\s*IDs?\s+déclarés/i)?.[1] ?? 0);
      if (!count) {
        const matches = [...perimeter.matchAll(/(\d+)\s*cartes?/gi)];
        if (matches.length) count = Number(matches[matches.length - 1][1]);
      }
    }
    if (!count) count = Number(section.match(/^\s*-\s*(\d+)\s*cartes\b/im)?.[1] ?? 0);
    if (count > 0) {
      covered += count;
      const title = section.match(/^#{2,3} (.+)$/m)?.[1] ?? 'bloc';
      evidence.push(title + ' (' + count + ')');
    }
  }
  return { covered, evidence };
}

const failures = [];
const rows = [];
let extraSourceCards = 0;
let extraBankCount = 0;
let validatedExtraCards = 0;
let pendingExtraCards = 0;
for (const file of playableSourceFiles) {
  const content = readSource(file);
  const sha = gitBlobSha(content);
  const inventory = sourceBankCount(content);
  const coverage = matchingValidatedCoverage(file, sha);
  const validated = Math.min(inventory.total, coverage.covered);
  const pending = Math.max(0, inventory.total - validated);
  extraSourceCards += inventory.total;
  extraBankCount += inventory.banks.length;
  validatedExtraCards += validated;
  pendingExtraCards += pending;
  rows.push({ file, sha, banks: inventory.banks.length, total: inventory.total, validated, pending, evidence: coverage.evidence.join('; ') });
  if (inventory.total === 0) failures.push(file + ': aucune banque reconnue par l’inventaire');
  if (pending > 0) failures.push(file + ': ' + pending + '/' + inventory.total + ' cartes sans couverture VALIDATED sur le SHA courant');
}

const questionsFile = './src/data/questions.ts';
const questionsText = readSource(questionsFile);
const questionsSha = gitBlobSha(questionsText);
const baseIds = [...questionsText.matchAll(/\bid\s*:\s*['"]([^'"]+)['"]/g)].map(match => match[1]);
const removedIds = new Set(
  [...questionsText.matchAll(/editorialRemove\w+Ids\s*=\s*new Set\(\[([\s\S]*?)\]\)/g)]
    .flatMap(match => [...match[1].matchAll(/['"]([^'"]+)['"]/g)].map(item => item[1]))
);
const basePlayable = baseIds.filter(id => !removedIds.has(id)).length;
const baseCoverage = matchingValidatedCoverage(questionsFile, questionsSha);
const baseValidated = baseCoverage.covered >= baseIds.length ? basePlayable : 0;
const basePending = basePlayable - baseValidated;
if (basePending > 0) failures.push(questionsFile + ': couverture insuffisante (' + baseCoverage.covered + '/' + baseIds.length + '; ' + basePending + ' cartes uniques jouables à valider)');

const totalUniquePlayable = extraSourceCards + basePlayable;
const totalValidated = validatedExtraCards + baseValidated;
const totalPending = pendingExtraCards + basePending;
console.log('Bible Party — réconciliation éditoriale JOUER');
console.log('Banques sources supplémentaires: ' + extraBankCount);
console.log('Cartes supplémentaires inventoriées: ' + extraSourceCards);
console.log('Cartes de base: ' + baseIds.length + '; IDs d’exclusion déclarés: ' + removedIds.size + '; copies réellement retirées: ' + (baseIds.length - basePlayable) + '; cartes uniques conservées: ' + basePlayable);
console.log('TOTAL UNIQUE JOUABLE: ' + totalUniquePlayable);
console.log('VALIDÉES selon les blocs VALIDATED dont le SHA correspond exactement: ' + totalValidated + '/' + totalUniquePlayable);
console.log('RESTE À VALIDER / COUVERTURE MANQUANTE: ' + totalPending);
console.log('');
console.log('Détail par source:');
for (const row of rows) {
  console.log(row.file + ': ' + row.validated + '/' + row.total + ' VALIDATED; ' + row.pending + ' restantes; ' + row.banks + ' banques; SHA ' + row.sha + (row.evidence ? '; blocs: ' + row.evidence : ''));
}
console.log(questionsFile + ': ' + baseValidated + '/' + basePlayable + ' VALIDATED uniques; ' + basePending + ' restantes; SHA ' + questionsSha + '; blocs: ' + (baseCoverage.evidence.join('; ') || 'aucun'));
if (totalUniquePlayable !== 3640) failures.push('le total courant (' + totalUniquePlayable + ') diffère du total de référence documenté (3640); mettre à jour le registre après vérification');
if (failures.length) {
  console.error('\nÉCHEC DE RÉCONCILIATION:');
  for (const failure of failures) console.error('- ' + failure);
  process.exit(1);
}
console.log('\nPASS — chaque source de contenu a une couverture VALIDATED correspondant au SHA courant et le total est réconcilié.');
