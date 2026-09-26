import { Question, QuizQuestion } from '@/types';
import { quizQuestions, mysteryQuestions, trueFalseQuestions, challenges, quoteQuestions, intruderQuestions, timesUpQuestions } from './questions';

export const allGameQuestions: Question[] = [
  ...quizQuestions,
  ...mysteryQuestions,
  ...trueFalseQuestions,
  ...challenges,
  ...quoteQuestions,
  ...intruderQuestions,
  ...timesUpQuestions,
];

/**
 * Quatre familles éditoriales du mode Jouer.
 *
 * Chaque question possède encore sa catégorie source historique dans les banques,
 * mais normalizeCategory() la range dans une seule de ces quatre familles.
 * Ainsi, les milliers de questions existantes peuvent être reclassées sans modifier
 * inutilement toutes les banques historiques.
 */
export const categoryLabels = [
  'Personnages',
  'Récits & événements',
  'Bible & enseignements',
  'Jéhovah & la foi',
];

export const setupCategoryFilters = [...categoryLabels];

const CATEGORY_MAP: Record<string, string> = {
  // 1 — Personnages : une personne est le sujet principal de la carte.
  personnages: 'Personnages',
  'personnages bibliques': 'Personnages',
  'révision des 125 fiches': 'Personnages',
  femmes: 'Personnages',
  jeunes: 'Personnages',
  disciples: 'Personnages',
  rois: 'Personnages',
  prophètes: 'Personnages',
  juges: 'Personnages',

  // 2 — Récits & événements : histoires, périodes, événements et actions racontées.
  'histoire biblique': 'Récits & événements',
  histoire: 'Récits & événements',
  'la bible et l’histoire': 'Récits & événements',
  'grande chronologie': 'Récits & événements',
  'exil et retour': 'Récits & événements',
  exil: 'Récits & événements',
  exode: 'Récits & événements',
  évangiles: 'Récits & événements',
  evangiles: 'Récits & événements',
  miracles: 'Récits & événements',
  'femmes-evangiles': 'Récits & événements',
  'rois et prophètes': 'Récits & événements',
  'rois & prophètes': 'Récits & événements',
  'prophètes-ecritures': 'Récits & événements',
  genèse: 'Récits & événements',
  lieux: 'Récits & événements',
  villes: 'Récits & événements',
  objets: 'Récits & événements',
  actes: 'Récits & événements',
  'miracles-anciens': 'Récits & événements',

  // 3 — Bible & enseignements : comprendre le texte, les livres et les notions bibliques.
  bible: 'Bible & enseignements',
  'questions bibliques': 'Bible & enseignements',
  versets: 'Bible & enseignements',
  'versets bibliques': 'Bible & enseignements',
  'que veulent dire ces versets ?': 'Bible & enseignements',
  'expressions bibliques': 'Bible & enseignements',
  concepts: 'Bible & enseignements',
  repentance: 'Bible & enseignements',
  prophéties: 'Bible & enseignements',
  propheties: 'Bible & enseignements',
  prophétie: 'Bible & enseignements',
  prophetie: 'Bible & enseignements',
  'prophéties bibliques': 'Bible & enseignements',
  'la bible et la science': 'Bible & enseignements',
  science: 'Bible & enseignements',
  création: 'Bible & enseignements',
  evolution: 'Bible & enseignements',
  évolution: 'Bible & enseignements',
  'exactitude scientifique': 'Bible & enseignements',
  manuscrits: 'Bible & enseignements',
  traductions: 'Bible & enseignements',
  archéologie: 'Bible & enseignements',
  archeologie: 'Bible & enseignements',
  'exactitude historique': 'Bible & enseignements',
  livres: 'Bible & enseignements',
  'livres-hebreux': 'Bible & enseignements',

  // 4 — Jéhovah & la foi : qualités, foi, conduite et enseignements spirituels.
  'jéhovah & la foi': 'Jéhovah & la foi',
  'jehovah & la foi': 'Jéhovah & la foi',
  foi: 'Jéhovah & la foi',
  courage: 'Jéhovah & la foi',
  confiance: 'Jéhovah & la foi',
  sagesse: 'Jéhovah & la foi',
  amour: 'Jéhovah & la foi',
  humilité: 'Jéhovah & la foi',
  fidélité: 'Jéhovah & la foi',
  qualites: 'Jéhovah & la foi',
  prédication: 'Jéhovah & la foi',
  persévérance: 'Jéhovah & la foi',
  défis: 'Bible & enseignements',
};

const getQuestionText = (q: Question): string => {
  const candidate = q as Question & {
    question?: string;
    statement?: string;
    prompt?: string;
    quote?: string;
    answer?: string;
  };
  return [
    candidate.question,
    candidate.statement,
    candidate.prompt,
    candidate.quote,
    candidate.answer,
  ].filter((value): value is string => typeof value === 'string').join(' ');
};

const isCharacterFocused = (q: Question): boolean => {
  const text = getQuestionText(q).trim();
  return /^(qui|quel homme|quelle femme|quel roi|quelle reine|quel prophète|quelle prophétesse|quel disciple|quel apôtre|quel juge|quelle personne)\b/i.test(text)
    || /\b(qui a|qui était|qui fut|qui a été|quel homme|quelle femme|quel roi|quel prophète|quel disciple|quel apôtre|quelle personne|quelles personnes|citez? \d+ personnes|cite \d+ personnes|citez? \d+ personnages|cite \d+ personnages)\b/i.test(text);
};

export function normalizeQuestionCategory(q: Question): string {
  const source = typeof q.category === 'string' ? q.category.trim().toLowerCase() : '';
  const text = getQuestionText(q).toLowerCase();

  if (source === 'défis') {
    if (/personnage|prophète|apôtre|disciple|juge|femme|roi|reine|patriarche/.test(text)) return 'Personnages';
    if (/lieu|ville|événement|histoire|miracle|voyagé|voyage|vie de|racontez/.test(text)) return 'Récits & événements';
    if (/foi|amour|confiance|courage|prière|jéhovah|dieu|qualité|vertu|conseil/.test(text)) return 'Jéhovah & la foi';
    return 'Bible & enseignements';
  }

  if (['rois & prophètes', 'rois', 'prophètes', 'prophètes-ecritures'].includes(source)) {
    if (/événement|événements|réforme|réformes|histoire|chronologie|bataille|guerre|exil|voyagé|voyage|raconte|récit/.test(text)) {
      return 'Récits & événements';
    }
    return 'Personnages';
  }

  if (['disciples', 'juges', 'jeunes'].includes(source)) {
    return 'Personnages';
  }

  if ([
    'évangiles', 'evangiles', 'actes', 'la bible et l’histoire', 'histoire biblique', 'genèse', 'exode',
    'questions bibliques', 'que veulent dire ces versets ?', 'prophéties', 'propheties', 'prophétie', 'prophetie',
    'bible', 'foi', 'courage', 'repentance',
    'prédication', 'persévérance', 'fidélité', 'amour', 'humilité'
  ].includes(source) && isCharacterFocused(q)) {
    return 'Personnages';
  }

  if (['lieux', 'villes', 'exil', 'exode', 'genèse', 'histoire biblique', 'objets'].includes(source)) {
    return 'Récits & événements';
  }

  return normalizeCategory(q.category);
}

export function normalizeCategory(value: unknown) {
  if (typeof value !== 'string') return 'Bible & enseignements';
  const key = value.trim().toLowerCase();
  if (!key) return 'Bible & enseignements';
  return CATEGORY_MAP[key] || 'Bible & enseignements';
}

export function getCategoryQuestionCount(category: string) {
  return allGameQuestions.filter(q => normalizeQuestionCategory(q) === category).length;
}

export function getQuizCatalog() {
  return quizQuestions.map(q => ({ ...q, category: normalizeQuestionCategory(q) }));
}

export function findQuestion(id: string): Question | undefined {
  return allGameQuestions.find(q => q.id === id);
}

export function selectTrainingQuestions(category: string, difficulty: string, missedIds: string[] = [], count = 10): QuizQuestion[] {
  const normalized = category === 'Toutes' ? 'Toutes' : (categoryLabels.includes(category) ? category : normalizeCategory(category));
  const all = getQuizCatalog();
  const matches = (q: QuizQuestion) =>
    (normalized === 'Toutes' || normalizeQuestionCategory(q) === normalized) &&
    (difficulty === 'all' || q.difficulty === difficulty);
  const base = all.filter(matches);
  const shuffle = <T,>(items: T[]) => [...items].sort(() => Math.random() - 0.5);
  const preferred = base.filter(q => missedIds.includes(q.id));
  const fresh = base.filter(q => !missedIds.includes(q.id));
  return [...shuffle(preferred), ...shuffle(fresh)].slice(0, count);
}
