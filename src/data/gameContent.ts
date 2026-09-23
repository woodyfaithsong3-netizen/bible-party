import {
  challenges, intruderQuestions, mysteryQuestions, quizQuestions, quoteQuestions, timesUpQuestions, trueFalseQuestions,
} from '@/data/questions';
import { Question, GameType, QuizQuestion, Challenge } from '@/types';

/** Les banques historiques sont transformées en contenu pour les 4 modes officiels. */
const integratedQuizQuestions: QuizQuestion[] = [
  ...quizQuestions,
  ...quoteQuestions.map((q) => ({ id:q.id, type:'quiz' as const, category:q.category, difficulty:q.difficulty, question:q.quote, answers:q.answers, correctAnswer:q.correctAnswer, explanation:q.explanation, reference:q.reference })),
  ...intruderQuestions.map((q) => ({ id:q.id, type:'quiz' as const, category:q.category, difficulty:q.difficulty, question:'Quel élément est l’intrus ?', answers:q.items, correctAnswer:q.intruder, explanation:q.explanation, reference:q.reference })),
];

const integratedChallenges: Challenge[] = [
  ...challenges,
  ...timesUpQuestions.map((q) => ({ id:q.id, type:'challenge' as const, category:q.category, difficulty:q.difficulty, prompt:'Faites deviner la carte grâce à ces indices : ' + q.clues.join(' · '), seconds:30, acceptedAnswers:[q.answer] })),
];

export const GAME_CONTENT = {
  quiz: integratedQuizQuestions,
  mystery: mysteryQuestions,
  truefalse: trueFalseQuestions,
  challenge: integratedChallenges,
} as const;

export type PlayableGameMode = keyof typeof GAME_CONTENT;

export const getGamePool = (mode: GameType): Question[] => GAME_CONTENT[mode] ?? GAME_CONTENT.quiz;

/** Toutes les cartes distribuables dans les 4 expériences. */
export const allPlayableQuestions: Question[] = Object.values(GAME_CONTENT).flat();