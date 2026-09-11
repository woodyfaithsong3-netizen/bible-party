import { MysteryQuestion, QuoteQuestion } from '@/types';

// Audit contenu V61 : cartes ciblées pour supprimer les derniers trous de jouabilité
// et rendre « Mot interdit » disponible dans chacune des 8 rubriques.
export const jwV61Quote: QuoteQuestion[] = [
  {
    id: 'v61-q-001', type: 'quote', category: 'Que veulent dire ces versets ?', difficulty: 'hard',
    quote: 'Quel apôtre a expliqué que l’amour véritable ne se limite pas à des paroles, mais se reconnaît à ses qualités et à ses actions ?',
    answers: ['Paul', 'Pierre', 'Jean', 'Jacques'], correctAnswer: 0,
    explanation: 'Paul décrit les qualités concrètes de l’amour dans sa lettre aux Corinthiens.',
    reference: '1 Corinthiens 13:4-7',
  },
];

export const jwV61Forbidden: MysteryQuestion[] = [
  {
    id: 'v61-m-001', type: 'mystery', category: 'Questions bibliques', difficulty: 'easy', answer: 'Noé',
    clues: ['J’ai reçu une mission avant une catastrophe mondiale.', 'J’ai construit un grand moyen de transport.', 'J’ai fait entrer ma famille et des animaux à l’intérieur.'],
    explanation: 'Noé a construit l’arche sur l’ordre de Dieu et a survécu au Déluge avec sa famille.',
    reference: 'Genèse 6:13-22; 7:1-7', forbiddenWords: ['arche', 'Déluge', 'animaux'],
  },
  {
    id: 'v61-m-002', type: 'mystery', category: 'Que veulent dire ces versets ?', difficulty: 'medium', answer: 'Psaume 119:105',
    clues: ['Je compare la parole de Dieu à quelque chose qui éclaire le chemin.', 'Je parle de direction pour la conduite.', 'Je me trouve dans un long psaume.'],
    explanation: 'Psaume 119:105 utilise l’image d’une lampe pour illustrer le rôle de la parole de Dieu dans la conduite.',
    reference: 'Psaume 119:105', forbiddenWords: ['lampe', 'parole', 'chemin'],
  },
  {
    id: 'v61-m-003', type: 'mystery', category: 'La Bible et l’Histoire', difficulty: 'medium', answer: 'Cyrus',
    clues: ['J’étais un roi d’un empire qui a succédé à Babylone.', 'J’ai publié un décret permettant à des exilés de retourner à Jérusalem.', 'Mon nom avait été annoncé dans une prophétie d’Isaïe.'],
    explanation: 'Cyrus, roi de Perse, a autorisé le retour des Juifs et la reconstruction du temple.',
    reference: 'Isaïe 44:28–45:1; Esdras 1:1-4', forbiddenWords: ['Perse', 'décret', 'Jérusalem'],
  },
  {
    id: 'v61-m-004', type: 'mystery', category: 'La Bible et la science', difficulty: 'medium', answer: 'Job 36:27-28',
    clues: ['Je décris un processus observé dans la nature.', 'J’évoque la formation de gouttes.', 'Je parle de l’eau qui retombe en pluie.'],
    explanation: 'Le passage décrit sous une forme poétique la formation des gouttes et la pluie.',
    reference: 'Job 36:27-28', forbiddenWords: ['eau', 'gouttes', 'pluie'],
  },
  {
    id: 'v61-m-005', type: 'mystery', category: 'Personnages', difficulty: 'medium', answer: 'Rahab',
    clues: ['J’habitais à Jéricho.', 'J’ai accueilli deux espions israélites.', 'J’ai demandé que ma famille soit épargnée.'],
    explanation: 'Rahab a caché les espions et a demandé la protection de sa famille.',
    reference: 'Josué 2:1-14; 6:22-25', forbiddenWords: ['Jéricho', 'espions', 'famille'],
  },
  {
    id: 'v61-m-006', type: 'mystery', category: 'Évangiles', difficulty: 'medium', answer: 'Zachée',
    clues: ['J’étais collecteur d’impôts.', 'Je voulais voir Jésus malgré la foule.', 'Je suis monté dans un arbre pour mieux le voir.'],
    explanation: 'Zachée est monté sur un sycomore pour voir Jésus à Jéricho.',
    reference: 'Luc 19:1-10', forbiddenWords: ['impôts', 'arbre', 'Jéricho'],
  },
  {
    id: 'v61-m-007', type: 'mystery', category: 'Rois & prophètes', difficulty: 'easy', answer: 'Samson',
    clues: ['J’étais juge en Israël.', 'Ma force exceptionnelle était liée à mon vœu de naziréat.', 'Mes ennemis ont cherché le secret de ma force.'],
    explanation: 'Samson était naziréen dès sa naissance et Jéhovah lui a accordé une force exceptionnelle.',
    reference: 'Juges 13:5; 16:15-22', forbiddenWords: ['force', 'cheveux', 'Dalila'],
  },
  {
    id: 'v61-m-008', type: 'mystery', category: 'Prophéties', difficulty: 'medium', answer: 'Michée 5:2',
    clues: ['Je parle d’un futur dirigeant.', 'Je situe son origine dans une petite ville de Juda.', 'Je mentionne Bethléem.'],
    explanation: 'Michée 5:2 annonce qu’un dirigeant sortirait de Bethléem.',
    reference: 'Michée 5:2; Matthieu 2:5-6', forbiddenWords: ['dirigeant', 'Bethléem', 'Juda'],
  },
];
