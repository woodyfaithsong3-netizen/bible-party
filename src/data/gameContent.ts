import {
  challenges,
  chronologyQuestions,
  intruderQuestions,
  mysteryQuestions,
  quizQuestions,
  quoteQuestions,
  timesUpQuestions,
  trueFalseQuestions,
} from '@/data/questions';
import { Question, GameType } from '@/types';

/**
 * Source unique du contenu jouable de Bible Party.
 *
 * Les fiches personnages restent une bibliothèque de référence.
 * Toutes les questions destinées au jeu passent ici avant d'être distribuées
 * aux différents modes. Cela évite de recréer une "banque de révision"
 * parallèle aux parties.
 */
export const GAME_CONTENT = {
  quiz: quizQuestions,
  mystery: mysteryQuestions,
  truefalse: trueFalseQuestions,
  challenge: challenges,
  quote: quoteQuestions,
  chronology: chronologyQuestions,
  intruder: intruderQuestions,
  timesup: timesUpQuestions,
} as const;

export type PlayableGameMode = keyof typeof GAME_CONTENT;

export const getGamePool = (mode: GameType): Question[] => {
  switch (mode) {
    case 'threeclues':
      return mysteryQuestions.filter(
        (q) => q.clues.length >= 3,
      );
    case 'forbidden':
      return mysteryQuestions.filter(
        (q) => (q.forbiddenWords?.length ?? 0) >= 3,
      );
    case 'faceoff':
    case 'risk':
    case 'finale':
      return quizQuestions;
    case 'quiz':
    case 'mystery':
    case 'truefalse':
    case 'challenge':
    case 'quote':
    case 'chronology':
    case 'intruder':
    case 'timesup':
      return GAME_CONTENT[mode];
    default:
      return quizQuestions;
  }
};

/**
 * Toutes les cartes actuellement jouables, sans créer de copie du contenu.
 * Utile pour les audits, statistiques et futurs sélecteurs intelligents.
 */
export const allPlayableQuestions: Question[] = Object.values(GAME_CONTENT).flat();
