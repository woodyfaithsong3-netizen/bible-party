import {
  intruderQuestions, mysteryQuestions, quizQuestions, quoteQuestions, timesUpQuestions, trueFalseQuestions,
} from '@/data/questions';
import { Question, GameType, QuizQuestion } from '@/types';
import { completeTheVerseQuestions, completeTheSongQuestions } from '@/data/completeTheVerseQuestions';

/** Les banques historiques sont transformées en contenu pour les 4 modes officiels. */

const canonicalGameCategory = (value: string): string => {
  const key = String(value || '').trim().toLowerCase();
  if (['personnages','personnage','jeunes','prophètes','prophète','disciples','rois','rois & prophètes'].includes(key)) {
    return 'Personnages';
  }
  if ([
    'jéhovah & la foi','foi','repentance','persévérance','fidélité','amour','humilité',
    'courage','prédication',
  ].includes(key)) {
    return 'Mieux connaître Jéhovah';
  }
  if ([
    'que veulent dire ces versets ?','la bible et la science','prophéties','bible & enseignements',
    'bible','concepts','questions bibliques',
  ].includes(key)) {
    return 'Comprendre la Bible';
  }
  if ([
    'personnages','personnage','jeunes','prophètes','prophète','disciples','rois','rois & prophètes',
  ].includes(key)) {
    return 'Personnages';
  }
  return 'Récits bibliques';
};

function prepareQuiz(q: QuizQuestion): QuizQuestion {
  return {
    ...q,
    category: canonicalGameCategory(q.category),
    question: String(q.question || '').replace(/\s+/g, ' ').trim(),
    answers: q.answers.map((a) => String(a).replace(/\s+/g, ' ').trim()),
  };
}

function prepareMystery(q: Extract<Question, { type: 'mystery' }>) {
  return {
    ...q,
    category: canonicalGameCategory(q.category),
    clues: q.clues.map((clue) => String(clue || '').replace(/\s+/g, ' ').trim()),
  };
}

const integratedQuizQuestions: QuizQuestion[] = [
  ...quizQuestions,
  ...quoteQuestions.map((q) => ({ id:q.id, type:'quiz' as const, category:q.category, difficulty:q.difficulty, question:q.quote, answers:q.answers, correctAnswer:q.correctAnswer, explanation:q.explanation, reference:q.reference })),
  ...intruderQuestions.map((q) => ({ id:q.id, type:'quiz' as const, category:q.category, difficulty:q.difficulty, question:'Quel élément est l’intrus ?', answers:q.items, correctAnswer:q.intruder, explanation:q.explanation, reference:q.reference })),
];

const integratedMysteryQuestions = [
  ...mysteryQuestions,
  ...timesUpQuestions.map((q) => ({
    id: q.id,
    type: 'mystery' as const,
    category: q.category,
    difficulty: q.difficulty,
    answer: q.answer,
    clues: q.clues,
    explanation: 'Les trois indices convergent vers cette réponse biblique.',
    reference: q.reference,
  })),
];

const completeTheParolesQuestions: QuizQuestion[] = [
  ...completeTheVerseQuestions,
  ...completeTheSongQuestions,
];

const SUBJECTIVE_TRUE_FALSE_PATTERNS = [
  /quelle qualité/i,
  /qualité/i,
  /manifeste(?:-t-il|-t-elle)?/i,
  /manifeste la qualité/i,
  /fait preuve de/i,
  /preuve de (?:courage|foi|fidélité|endurance|patience|persévérance|générosité|humilité|compassion|zèle)/i,
  /était (?:fidèle|courageux|courageuse|généreux|généreuse|humble|patient|patiente|persévérant|persévérante)/i,
  /montre(?:-t-il|-t-elle)? .*?(?:courage|fidélité|foi|endurance|patience|générosité|humilité|compassion|zèle)/i,
  /a montré .*?(?:courage|fidélité|foi|endurance|patience|générosité|humilité|compassion|zèle)/i,
  /a manifesté .*?(?:courage|fidélité|foi|endurance|patience|générosité|humilité|compassion|zèle)/i,
];

function isObjectiveTrueFalse(q: Question): boolean {
  if (q.type !== 'truefalse') return true;
  return !SUBJECTIVE_TRUE_FALSE_PATTERNS.some((pattern) => pattern.test(String(q.statement || '')));
}

function prepareTrueFalse(q: Extract<Question, { type: 'truefalse' }>) {
  return {
    ...q,
    category: canonicalGameCategory(q.category),
    statement: String(q.statement || '').replace(/\s+/g, ' ').trim(),
  };
}

function buildTrueFalseDeck(): Question[] {
  const objective = trueFalseQuestions.filter(isObjectiveTrueFalse).map(prepareTrueFalse);
  const truths = objective.filter((q) => q.answer);
  const falses = objective.filter((q) => !q.answer);

  // Les FAUX doivent être réellement présents dans les parties, sans supprimer
  // définitivement les VRAI : on sélectionne une majorité de FAUX et on mélange
  // les cartes à chaque nouvelle partie.
  const maxTruths = Math.min(truths.length, Math.floor(falses.length * 0.8));
  const selectedTruths = [...truths].sort(() => Math.random() - 0.5).slice(0, maxTruths);
  const shuffledFalses = [...falses].sort(() => Math.random() - 0.5);
  const deck: Question[] = [];
  let ti = 0;
  let fi = 0;
  while (fi < shuffledFalses.length || ti < selectedTruths.length) {
    for (let n = 0; n < 5 && fi < shuffledFalses.length; n += 1) deck.push(shuffledFalses[fi++]);
    for (let n = 0; n < 4 && ti < selectedTruths.length; n += 1) deck.push(selectedTruths[ti++]);
  }
  return deck;
}

export const GAME_CONTENT: Record<GameType, Question[]> = {
  quiz: integratedQuizQuestions.map(prepareQuiz),
  mystery: integratedMysteryQuestions.map(prepareMystery),
  truefalse: buildTrueFalseDeck(),
  complete: completeTheParolesQuestions.map(prepareQuiz),
};

export type PlayableGameMode = GameType;

export const getGamePool = (mode: GameType): Question[] => GAME_CONTENT[mode] ?? GAME_CONTENT.quiz;

/** Toutes les cartes distribuables dans les 4 expériences. */
export const allPlayableQuestions: Question[] = Object.values(GAME_CONTENT).flat();