export type Difficulty = 'easy' | 'medium' | 'hard' | 'expert';
export type GameType = 'quiz' | 'mystery' | 'truefalse' | 'challenge' | 'quote' | 'intruder' | 'timesup' | 'threeclues' | 'forbidden' | 'faceoff' | 'risk' | 'finale';

export type QuizQuestion = {
  id: string;
  characterId?: string;
  type: 'quiz';
  category: string;
  difficulty: Difficulty;
  question: string;
  answers: string[];
  correctAnswer: number;
  explanation: string;
  reference: string;
};

export type MysteryQuestion = {
  id: string;
  characterId?: string;
  type: 'mystery';
  category: string;
  difficulty: Difficulty;
  answer: string;
  clues: string[];
  explanation: string;
  reference: string;
  forbiddenWords?: string[];
};

export type TrueFalseQuestion = {
  id: string;
  characterId?: string;
  type: 'truefalse';
  category: string;
  difficulty: Difficulty;
  statement: string;
  answer: boolean;
  explanation: string;
  reference: string;
};

export type QuoteQuestion = {
  id: string;
  type: 'quote';
  category: string;
  difficulty: Difficulty;
  quote: string;
  answers: string[];
  correctAnswer: number;
  explanation: string;
  reference: string;
};

export type IntruderQuestion = {
  id: string;
  type: 'intruder';
  category: string;
  difficulty: Difficulty;
  items: string[];
  intruder: number;
  explanation: string;
  reference: string;
};

export type TimesUpQuestion = {
  id: string;
  type: 'timesup';
  category: string;
  difficulty: Difficulty;
  answer: string;
  clues: string[];
  reference: string;
};

export type Challenge = {
  id: string;
  type: 'challenge';
  category: string;
  difficulty: Difficulty;
  prompt: string;
  seconds: number;
  acceptedAnswers?: string[];
};

export type Question = QuizQuestion | MysteryQuestion | TrueFalseQuestion | Challenge | QuoteQuestion | IntruderQuestion | TimesUpQuestion;

export type Team = { id: string; name: string; score: number };
