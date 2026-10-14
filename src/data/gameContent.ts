import { intruderQuestions, mysteryQuestions, quizQuestions, quoteQuestions, timesUpQuestions, trueFalseQuestions } from '@/data/questions';
import { completeTheVerseQuestions, completeTheSongQuestions } from '@/data/completeTheVerseQuestions';
import { GameType, Question, QuizQuestion } from '@/types';

/** Les quatre modes de jeu officiels : Quiz, Vrai / Faux, Qui est-ce ? et Compléter les paroles. */

const canonicalGameCategory = (value: string): string => {
  const key = String(value || '').trim().toLowerCase();
  if (['personnages','personnage','jeunes','prophètes','prophète','disciples','rois','rois & prophètes'].includes(key)) return 'Personnages';
  if (['jéhovah & la foi','foi','repentance','persévérance','fidélité','amour','humilité','courage','prédication'].includes(key)) return 'Mieux connaître Jéhovah';
  if (['que veulent dire ces versets ?','la bible et la science','prophéties','bible & enseignements','bible','concepts','questions bibliques'].includes(key)) return 'Comprendre la Bible';
  return 'Récits bibliques';
};

function prepareQuiz(q: QuizQuestion): QuizQuestion {
  return { ...q, category: canonicalGameCategory(q.category), question: String(q.question || '').replace(/\s+/g, ' ').trim(), answers: q.answers.map((a) => String(a).replace(/\s+/g, ' ').trim()) };
}
function prepareMystery(q: Extract<Question, { type: 'mystery' }>) {
  return { ...q, category: canonicalGameCategory(q.category), clues: q.clues.map((clue) => String(clue || '').replace(/\s+/g, ' ').trim()) };
}
// Les 139 cartes historiques de type challenge sont volontairement retirees du gameplay final.
// Les quatre modes officiels ne doivent plus exposer de Defi 10 s / 30 s.
const integratedQuizQuestions: Question[] = [
  ...quizQuestions,
  ...quoteQuestions.map((q) => ({ id:q.id, type:'quiz' as const, category:q.category, difficulty:q.difficulty, question:q.quote, answers:q.answers, correctAnswer:q.correctAnswer, explanation:q.explanation, reference:q.reference })),
  ...intruderQuestions.map((q) => ({ id:q.id, type:'quiz' as const, category:q.category, difficulty:q.difficulty, question:'Quel élément est l’intrus ?', answers:q.items, correctAnswer:q.intruder, explanation:q.explanation, reference:q.reference })),
];
const integratedCompleteQuestions: QuizQuestion[] = [...completeTheVerseQuestions, ...completeTheSongQuestions];

type TimesUpCard = (typeof timesUpQuestions)[number];

const TIMES_UP_NON_PERSON_QUIZ_OPTIONS: Record<string, string[]> = {
  'jwcat-timesup-2': ['Genèse', 'Exode', 'Psaumes', 'Isaïe'],
  'jwcat-timesup-4': ['Lévitique 13', 'Lévitique 11', 'Nombres 19', 'Deutéronome 23'],
  'v53-tu-010': ['Psaume 23', 'Psaume 1', 'Psaume 19', 'Psaume 37'],
  'v56-t-001': ['Psaume 23', 'Psaume 1', 'Psaume 19', 'Psaume 37'],
  'v56-t-002': ['Proverbes 3:5-6', 'Psaume 37:5', 'Isaïe 41:10', 'Philippiens 4:6-7'],
  'v56-t-005': ['Nuages', 'Pluie', 'Vent', 'Foudre'],
  'v56-t-006': ['Deutéronome', 'Lévitique', 'Nombres', 'Exode'],
  'v57-t-005': ['Jérusalem', 'Jéricho', 'Ninive', 'Bethléem'],
  'v57-t-006': ['Matthieu 6:33', 'Matthieu 5:3', 'Matthieu 7:7', 'Matthieu 24:14'],
  'v57-t-007': ['Psaume 119', 'Psaume 23', 'Psaume 27', 'Psaume 37'],
  'v57-t-008': ['Philippiens 4:13', 'Philippiens 4:6-7', 'Romains 8:28', '2 Corinthiens 12:9'],
  'v57-t-009': ['Josué 1:9', 'Isaïe 41:10', 'Psaume 27:14', 'Deutéronome 31:6'],
  'v57-t-010': ['Matthieu 6:33', 'Matthieu 5:3', 'Matthieu 7:7', 'Matthieu 24:14'],
  'v57-t-011': ['Philippiens 4:6-7', 'Philippiens 4:13', '1 Pierre 5:7', 'Psaume 55:22'],
  'v57-t-012': ['Révélation 21:4', 'Isaïe 65:17', 'Psaume 37:29', 'Révélation 7:17'],
  'v57-t-016': ['Babylone', 'Ninive', 'Jérusalem', 'Samarie'],
  'v57-t-021': ['Lévitique 13–15', 'Deutéronome 23:12-14', 'Lévitique 17:10-14', 'Nombres 5:1-4'],
  'v57-t-023': ['Genèse 1:1', 'Jean 1:1', 'Psaume 90:2', 'Révélation 4:11'],
  'v57-t-044': ['Vision de Daniel 7', 'Vision de Daniel 2', 'Vision de Daniel 8', 'Vision d’Ézéchiel 1'],
  'v90-tu-007': ['Jéricho', 'Jérusalem', 'Bethléem', 'Ninive'],
  'v90-tu-008': ['Bethléem', 'Jérusalem', 'Nazareth', 'Jéricho'],
  'v90-tu-009': ['Césarée', 'Joppé', 'Jérusalem', 'Antioche'],
  'v90-tu-010': ['Arche de l’Alliance', 'Tabernacle', 'Autel', 'Table des pains'],
  'v90-tu-011': ['Manne', 'Pains sans levain', 'Cailles', 'Eau du rocher'],
  'v102-tu-02': ['Psaume 1', 'Psaume 23', 'Psaume 19', 'Psaume 37'],
  'v102-tu-03': ['Psaume 19', 'Psaume 1', 'Psaume 22', 'Psaume 119'],
  'v102-tu-04': ['1 Corinthiens', 'Romains', 'Galates', 'Éphésiens'],
  'v102-tu-05': ['Premier jour', 'Deuxième jour', 'Sixième jour', 'Septième jour'],
};

const prepareTimesUpQuiz = (q: TimesUpCard): QuizQuestion | null => {
  const answers = TIMES_UP_NON_PERSON_QUIZ_OPTIONS[q.id];
  if (!answers) return null;
  const correctAnswer = answers.indexOf(q.answer);
  if (correctAnswer < 0) return null;
  return {
    id: q.id,
    type: 'quiz',
    category: canonicalGameCategory(q.category),
    difficulty: q.difficulty,
    question: `Quel élément biblique correspond aux indices « ${q.clues.join(' · ')} » ?`,
    answers,
    correctAnswer,
    explanation: `Les indices renvoient à ${q.answer}. La référence biblique permet de vérifier la réponse.`,
    reference: q.reference,
  };
};

const SUBJECTIVE_TRUE_FALSE_PATTERNS = [
  /quelle qualité/i, /qualité/i, /manifeste(?:-t-il|-t-elle)?/i, /manifeste la qualité/i, /fait preuve de/i,
  /preuve de (?:courage|foi|fidélité|endurance|patience|persévérance|générosité|humilité|compassion|zèle)/i,
  /était (?:fidèle|courageux|courageuse|généreux|généreuse|humble|patient|patiente|persévérant|persévérante)/i,
  /montre(?:-t-il|-t-elle)? .*?(?:courage|fidélité|foi|endurance|patience|générosité|humilité|compassion|zèle)/i,
  /a montré .*?(?:courage|fidélité|foi|endurance|patience|persévérance|générosité|humilité|compassion|zèle)/i,
  /a manifesté .*?(?:courage|fidélité|foi|endurance|patience|persévérance|générosité|humilité|compassion|zèle)/i,
];
function isObjectiveTrueFalse(q: Question): boolean {
  if (q.type !== 'truefalse') return true;
  return !SUBJECTIVE_TRUE_FALSE_PATTERNS.some((pattern) => pattern.test(String(q.statement || '')));
}
function prepareTrueFalse(q: Extract<Question, { type: 'truefalse' }>) {
  return { ...q, category: canonicalGameCategory(q.category), statement: String(q.statement || '').replace(/\s+/g, ' ').trim() };
}
function buildTrueFalseDeck(): Question[] {
  // Toutes les cartes Vrai/Faux éditoriales doivent rester atteignables.
  // On équilibre uniquement leur ordre, sans supprimer une partie des VRAI
  // pour obtenir un ratio artificiel.
  const all = trueFalseQuestions.map(prepareTrueFalse);
  const truths = [...all.filter((q) => q.answer)].sort(() => Math.random() - 0.5);
  const falses = [...all.filter((q) => !q.answer)].sort(() => Math.random() - 0.5);
  const deck: Question[] = [];
  let ti = 0; let fi = 0;
  while (fi < falses.length || ti < truths.length) {
    for (let n = 0; n < 5 && fi < falses.length; n += 1) deck.push(falses[fi++]);
    for (let n = 0; n < 4 && ti < truths.length; n += 1) deck.push(truths[ti++]);
  }
  return deck;
}
export const GAME_CONTENT: Record<GameType, Question[]> = {
  quiz: [...integratedQuizQuestions.map((q) => q.type === 'quiz' ? prepareQuiz(q) : q), ...timesUpQuestions.map(prepareTimesUpQuiz).filter((q): q is QuizQuestion => q !== null)],
  mystery: [...mysteryQuestions.map(prepareMystery), ...timesUpQuestions.filter((q) => !TIMES_UP_NON_PERSON_QUIZ_OPTIONS[q.id]).map((q) => ({ id:q.id, type:'mystery' as const, category:canonicalGameCategory(q.category), difficulty:q.difficulty, answer:q.answer, clues:q.clues.map((clue) => String(clue || '').replace(/\s+/g, ' ').trim()), explanation:`Les indices renvoient à ${q.answer}. La référence biblique permet de vérifier la réponse.`, reference:q.reference }))],
  truefalse: buildTrueFalseDeck(),
  complete: integratedCompleteQuestions.map(prepareQuiz),
};
export type PlayableGameMode = GameType;
export const getGamePool = (mode: GameType): Question[] => GAME_CONTENT[mode] ?? GAME_CONTENT.quiz;
export const allPlayableQuestions: Question[] = Object.values(GAME_CONTENT).flat();
