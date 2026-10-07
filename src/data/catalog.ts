import { Question, QuizQuestion } from '@/types';
import { quizQuestions, mysteryQuestions, trueFalseQuestions, quoteQuestions, intruderQuestions, timesUpQuestions } from './questions';

export const allGameQuestions: Question[] = [
  ...quizQuestions,
  ...mysteryQuestions,
  ...trueFalseQuestions,
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
  'Récits bibliques',
  'Comprendre la Bible',
  'Mieux connaître Jéhovah',
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
  'histoire biblique': 'Récits bibliques',
  histoire: 'Récits bibliques',
  'la bible et l’histoire': 'Récits bibliques',
  'grande chronologie': 'Récits bibliques',
  'exil et retour': 'Récits bibliques',
  exil: 'Récits bibliques',
  exode: 'Récits bibliques',
  évangiles: 'Récits bibliques',
  evangiles: 'Récits bibliques',
  miracles: 'Récits bibliques',
  'femmes-evangiles': 'Récits bibliques',
  'rois et prophètes': 'Récits bibliques',
  'rois & prophètes': 'Récits bibliques',
  'prophètes-ecritures': 'Récits bibliques',
  genèse: 'Récits bibliques',
  lieux: 'Récits bibliques',
  villes: 'Récits bibliques',
  objets: 'Récits bibliques',
  actes: 'Récits bibliques',
  'miracles-anciens': 'Récits bibliques',

  // 3 — Bible & enseignements : comprendre le texte, les livres et les notions bibliques.
  bible: 'Comprendre la Bible',
  'questions bibliques': 'Comprendre la Bible',
  versets: 'Comprendre la Bible',
  'versets bibliques': 'Comprendre la Bible',
  'que veulent dire ces versets ?': 'Comprendre la Bible',
  'expressions bibliques': 'Comprendre la Bible',
  concepts: 'Comprendre la Bible',
  repentance: 'Comprendre la Bible',
  prophéties: 'Comprendre la Bible',
  propheties: 'Comprendre la Bible',
  prophétie: 'Comprendre la Bible',
  prophetie: 'Comprendre la Bible',
  'prophéties bibliques': 'Comprendre la Bible',
  'la bible et la science': 'Comprendre la Bible',
  science: 'Comprendre la Bible',
  création: 'Comprendre la Bible',
  evolution: 'Comprendre la Bible',
  évolution: 'Comprendre la Bible',
  'exactitude scientifique': 'Comprendre la Bible',
  manuscrits: 'Comprendre la Bible',
  traductions: 'Comprendre la Bible',
  archéologie: 'Comprendre la Bible',
  archeologie: 'Comprendre la Bible',
  'exactitude historique': 'Comprendre la Bible',
  livres: 'Comprendre la Bible',
  'livres-hebreux': 'Comprendre la Bible',

  // 4 — Jéhovah & la foi : qualités, foi, conduite et enseignements spirituels.
  'jéhovah & la foi': 'Mieux connaître Jéhovah',
  'jehovah & la foi': 'Mieux connaître Jéhovah',
  foi: 'Mieux connaître Jéhovah',
  courage: 'Mieux connaître Jéhovah',
  confiance: 'Mieux connaître Jéhovah',
  sagesse: 'Mieux connaître Jéhovah',
  amour: 'Mieux connaître Jéhovah',
  humilité: 'Mieux connaître Jéhovah',
  fidélité: 'Mieux connaître Jéhovah',
  qualites: 'Mieux connaître Jéhovah',
  prédication: 'Mieux connaître Jéhovah',
  persévérance: 'Mieux connaître Jéhovah',
  défis: 'Comprendre la Bible',
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
  return /^(qui|quel homme|quelle femme|quel roi|quelle reine|quel prophète|quelle prophétesse|quel disciple|quel apôtre|quel juge|quel personnage|quelle personne)\b/i.test(text)
    || /\b(qui a|qui était|qui fut|qui a été|quel homme|quelle femme|quel roi|quel prophète|quel disciple|quel apôtre|quelle personne|quelles personnes|citez? \d+ personnes|cite \d+ personnes|citez? \d+ personnages|cite \d+ personnages)\b/i.test(text)
    || /\b(vivait|était de|était un|était une|il a été|elle a été|il reçoit|elle reçoit|il doit|elle doit|marchande|collaborateur|compagnon|compagnonne|disciple|apôtre|prophète|prophétesse|roi|reine|juge)\b/i.test(text);
};

export function normalizeQuestionCategory(q: Question): string {
  const source = typeof q.category === 'string' ? q.category.trim().toLowerCase() : '';
  const text = getQuestionText(q).toLowerCase();

  if (source === 'défis') {
    if (/personnage|prophète|apôtre|disciple|juge|femme|roi|reine|patriarche/.test(text)) return 'Personnages';
    if (/lieu|ville|événement|histoire|miracle|voyagé|voyage|vie de|racontez|objet|arche|temple|mer|prison|naufrage/.test(text)) return 'Récits bibliques';
    if (/foi|amour|confiance|courage|prière|jéhovah|dieu|qualité|vertu|conseil/.test(text)) return 'Mieux connaître Jéhovah';
    return 'Comprendre la Bible';
  }

  if (['rois & prophètes', 'rois', 'prophètes', 'prophètes-ecritures'].includes(source)) {
    if (/événement|événements|réforme|réformes|histoire|chronologie|bataille|guerre|exil|voyagé|voyage|raconte|récit/.test(text)) {
      return 'Récits bibliques';
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
    return 'Récits bibliques';
  }

  return normalizeCategory(q.category);
}

export function normalizeCategory(value: unknown) {
  if (typeof value !== 'string') return 'Comprendre la Bible';
  const key = value.trim().toLowerCase();
  if (!key) return 'Comprendre la Bible';
  return CATEGORY_MAP[key] || 'Comprendre la Bible';
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
