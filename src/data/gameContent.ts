import {
  challenges, intruderQuestions, mysteryQuestions, quizQuestions, quoteQuestions, timesUpQuestions, trueFalseQuestions,
} from '@/data/questions';
import { Question, GameType, QuizQuestion, Challenge } from '@/types';

/** Les banques historiques restent conservées, mais le joueur ne voit plus que 5 expériences principales. */
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
  forbidden: mysteryQuestions.filter((q) => (q.forbiddenWords?.length ?? 0) >= 3),
} as const;

export type PlayableGameMode = keyof typeof GAME_CONTENT;

export const getGamePool = (mode: GameType): Question[] => {
  switch (mode) {
    case 'quiz': return GAME_CONTENT.quiz;
    case 'mystery': return GAME_CONTENT.mystery;
    case 'truefalse': return GAME_CONTENT.truefalse;
    case 'challenge': return GAME_CONTENT.challenge;
    case 'forbidden': return GAME_CONTENT.forbidden;
    case 'quote': case 'intruder': case 'faceoff': case 'risk': return GAME_CONTENT.quiz;
    case 'timesup': return GAME_CONTENT.challenge;
    case 'threeclues': return GAME_CONTENT.mystery;
    case 'finale': return GAME_CONTENT.quiz;
    default: return GAME_CONTENT.quiz;
  }
};

/** Toutes les cartes distribuables dans les 5 expériences. */
export const allPlayableQuestions: Question[] = Object.values(GAME_CONTENT).flat();