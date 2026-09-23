import {
  challenges, intruderQuestions, mysteryQuestions, quizQuestions, quoteQuestions, timesUpQuestions, trueFalseQuestions,
} from '@/data/questions';
import { Question, GameType, QuizQuestion, Challenge } from '@/types';

/** Les banques historiques sont transformées en contenu pour les 4 modes officiels. */

function compactGameText(value: string, max = 110): string {
  const text = String(value || '').replace(/\s+/g, ' ').trim();
  if (text.length <= max) return text;

  const questionLead = text.match(/^(Qui est-ce \?|Qui suis-je \?|À quel personnage[^?]*\?)/i);
  if (questionLead) {
    const rest = text.slice(questionLead[0].length).trim();
    const sentence = rest.match(/^(.+?[.!?])(?:\s|$)/)?.[1]?.trim();
    if (sentence && sentence.length <= max - questionLead[0].length - 1) {
      return questionLead[0] + ' ' + sentence;
    }
    const comma = rest.indexOf(',');
    if (comma >= 35 && comma <= max - questionLead[0].length - 1) {
      return questionLead[0] + ' ' + rest.slice(0, comma).trim() + '.';
    }
  }

  const sentence = text.match(/^(.+?[.!?])(?:\s|$)/)?.[1]?.trim();
  if (sentence && sentence.length >= 35 && sentence.length <= max) return sentence;

  const separators = [', ', '; ', ' — ', ' : '];
  const cuts = separators.map((s) => text.indexOf(s, 45)).filter((n) => n > 0 && n <= max);
  if (cuts.length) return text.slice(0, Math.min(...cuts)).trim() + ' ?';

  return text.slice(0, max - 1).trimEnd() + '…';
}

function prepareQuiz(q: QuizQuestion): QuizQuestion {
  return {
    ...q,
    question: compactGameText(q.question),
    answers: q.answers.map((a) => String(a).replace(/\s+/g, ' ').trim()),
  };
}

function prepareMystery(q: Extract<Question, { type: 'mystery' }>) {
  return {
    ...q,
    clues: q.clues.map((clue) => compactGameText(clue, 85)),
  };
}

function prepareChallenge(q: Challenge): Challenge {
  return {
    ...q,
    prompt: compactGameText(q.prompt, 120),
  };
}

const integratedQuizQuestions: QuizQuestion[] = [
  ...quizQuestions,
  ...quoteQuestions.map((q) => ({ id:q.id, type:'quiz' as const, category:q.category, difficulty:q.difficulty, question:q.quote, answers:q.answers, correctAnswer:q.correctAnswer, explanation:q.explanation, reference:q.reference })),
  ...intruderQuestions.map((q) => ({ id:q.id, type:'quiz' as const, category:q.category, difficulty:q.difficulty, question:'Quel élément est l’intrus ?', answers:q.items, correctAnswer:q.intruder, explanation:q.explanation, reference:q.reference })),
];

const integratedChallenges: Challenge[] = [
  ...challenges,
  ...timesUpQuestions.map((q) => ({ id:q.id, type:'challenge' as const, category:q.category, difficulty:q.difficulty, prompt:'Faites deviner la carte grâce à ces indices : ' + q.clues.join(' · '), seconds:30, acceptedAnswers:[q.answer] })),
];

export const GAME_CONTENT: Record<GameType, Question[]> = {
  quiz: integratedQuizQuestions.map(prepareQuiz),
  mystery: mysteryQuestions.map(prepareMystery),
  truefalse: trueFalseQuestions.map((q) => ({ ...q, statement: compactGameText(q.statement, 100) })),
  challenge: integratedChallenges.map(prepareChallenge),
};

export type PlayableGameMode = GameType;

export const getGamePool = (mode: GameType): Question[] => GAME_CONTENT[mode] ?? GAME_CONTENT.quiz;

/** Toutes les cartes distribuables dans les 4 expériences. */
export const allPlayableQuestions: Question[] = Object.values(GAME_CONTENT).flat();