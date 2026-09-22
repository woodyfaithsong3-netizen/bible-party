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
const difficultyCounts = Object.fromEntries(['easy','medium','hard','expert'].map(d => [d, [...dedicatedSource.matchAll(new RegExp(`difficulty:\\s*['"]${d}['"]`, 'g'))].length]));


const quizCount = [...dedicatedSource.matchAll(/type:\s*['"]quiz['"]/g)].length;
const trueFalseCount = [...dedicatedSource.matchAll(/type:\s*['"]truefalse['"]/g)].length;
const mysteryCount = [...dedicatedSource.matchAll(/type:\s*['"]mystery['"]/g)].length;
const trueFalseLines = dedicatedSource.split('\n').filter(line => /type:\s*['"]truefalse['"]/.test(line));
const trueTrueFalseCount = trueFalseLines.filter(line => /answer:\s*true\b/.test(line)).length;
const falseTrueFalseCount = trueFalseLines.filter(line => /answer:\s*false\b/.test(line)).length;
const malformedNumericArtifacts = [...dedicatedSource.matchAll(/[A-Za-zÀ-ÿ]\d{3,}/g)].map(m => m[0]);
const answerPositionCounts = [0,1,2,3].map(i => ({
  index: i,
  count: [...source.matchAll(new RegExp(`type:\\s*['"]quiz['"][\\s\\S]{0,900}?correctAnswer:\\s*${i}(?:\\D|$)`, 'g'))].length,
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
if (duplicateIds.length) failures.push('duplicate ids: ' + duplicateIds.map(([id, n]) => id + ' x' + n).join(', '));
if (emptyReferences) failures.push('empty references detected');
if (invalidQuizIndexes.length) failures.push('invalid quiz correctAnswer indexes: ' + invalidQuizIndexes.length);
if (expertCards < 90) failures.push('expert card count unexpectedly low: ' + expertCards);
if (characterCoverage < 125) failures.push('character coverage unexpectedly low: ' + characterCoverage);
if (characterCountFailures.length) failures.push('character question count != 16: ' + characterCountFailures.map(([id,n]) => id + ' x' + n).join(', '));

if (quizCount !== 1250) failures.push('dedicated quiz count unexpectedly changed: ' + quizCount);
if (trueFalseCount !== 500) failures.push('dedicated true/false count unexpectedly changed: ' + trueFalseCount);
if (mysteryCount !== 250) failures.push('dedicated mystery count unexpectedly changed: ' + mysteryCount);
if (trueTrueFalseCount !== 250) failures.push('true true/false count unexpectedly changed: ' + trueTrueFalseCount);
if (falseTrueFalseCount !== 250) failures.push('false true/false count unexpectedly changed: ' + falseTrueFalseCount);
if (malformedNumericArtifacts.length) failures.push('numeric artifacts detected: ' + [...new Set(malformedNumericArtifacts)].slice(0, 10).join(', '));
if (duplicateOptionBlocks.length) failures.push('quiz cards with duplicate options: ' + duplicateOptionBlocks.length);
if (malformedQuestionStrings.length) failures.push('malformed quiz question strings: ' + malformedQuestionStrings.length);
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
