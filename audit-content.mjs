import fs from 'node:fs';

const source = fs.readFileSync(new URL('./src/data/questions.ts', import.meta.url), 'utf8');

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

const quizBlocks = [...source.matchAll(
  /type:\s*['"]quiz['"][\s\S]{0,900}?answers:\s*\[([^\]]+)\],\s*correctAnswer:\s*(\d+)/g
)].filter(m => /^\s*['"]/.test(m[1]));
const invalidQuizIndexes = quizBlocks.filter(m => {
  const answerCount = (m[1].match(/['"]/g) ?? []).length / 2;
  return Number(m[2]) < 0 || Number(m[2]) >= answerCount;
});

const expertCards = [...source.matchAll(/difficulty:\s*['"]expert['"]/g)].length;
const characterIds = [...source.matchAll(/characterId:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
const characterCounts = new Map();
for (const id of characterIds) characterCounts.set(id, (characterCounts.get(id) ?? 0) + 1);
const characterCoverage = characterCounts.size;
const characterCountFailures = [...characterCounts.entries()].filter(([, n]) => n !== 16);
const difficultyCounts = Object.fromEntries(['easy','medium','hard','expert'].map(d => [d, [...source.matchAll(new RegExp(`difficulty:\\s*['"]${d}['"]`, 'g'))].length]));

const failures = [];
if (duplicateIds.length) failures.push('duplicate ids: ' + duplicateIds.map(([id, n]) => id + ' x' + n).join(', '));
if (emptyReferences) failures.push('empty references detected');
if (invalidQuizIndexes.length) failures.push('invalid quiz correctAnswer indexes: ' + invalidQuizIndexes.length);
if (expertCards < 90) failures.push('expert card count unexpectedly low: ' + expertCards);
if (characterCoverage < 125) failures.push('character coverage unexpectedly low: ' + characterCoverage);
if (characterCountFailures.length) failures.push('character question count != 16: ' + characterCountFailures.map(([id,n]) => id + ' x' + n).join(', '));

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
