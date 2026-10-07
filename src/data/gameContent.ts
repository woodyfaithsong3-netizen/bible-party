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
  if (['jéhovah & la foi','foi','repentance','persévérance','fidélité','amour','humilité'].includes(key)) {
    return 'Mieux connaître Jéhovah';
  }
  if (['que veulent dire ces versets ?','la bible et la science','prophéties','bible & enseignements','bible'].includes(key)) {
    return 'Comprendre la Bible';
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

export const GAME_CONTENT: Record<GameType, Question[]> = {
  quiz: integratedQuizQuestions.map(prepareQuiz),
  mystery: integratedMysteryQuestions.map(prepareMystery),
  truefalse: trueFalseQuestions.map((q) => ({ ...q, category: canonicalGameCategory(q.category), statement: String(q.statement || '').replace(/\s+/g, ' ').trim() })),
  complete: completeTheParolesQuestions.map(prepareQuiz),
};

export type PlayableGameMode = GameType;

export const getGamePool = (mode: GameType): Question[] => GAME_CONTENT[mode] ?? GAME_CONTENT.quiz;

/** Toutes les cartes distribuables dans les 4 expériences. */
export const allPlayableQuestions: Question[] = Object.values(GAME_CONTENT).flat();