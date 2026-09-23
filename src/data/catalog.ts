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
 * Buckets thématiques (« topics »). Ce sont les seules catégories qui peuvent apparaître
 * comme valeur de `category` sur une question, une fois normalisées via normalizeCategory().
 * Elles couvrent TOUTES les valeurs brutes présentes dans questions.ts, quel que soit le
 * mode (quiz, qui suis-je, vrai/faux, qui a dit ça, chronologie, intrus, time's up, défi).
 */
export const categoryLabels = [
  'Personnages',
  'Récits bibliques',
  'Comprendre la Bible',
  'Mieux connaître Jéhovah',
];

export const setupCategoryFilters = [...categoryLabels];

const CATEGORY_MAP: Record<string, string> = {
  personnages: 'Personnages',
  'personnages bibliques': 'Personnages',
  'révision des 125 fiches': 'Personnages',
  femmes: 'Personnages',
  jeunes: 'Personnages',
  courage: 'Personnages',
  foi: 'Personnages',
  sagesse: 'Personnages',
  amour: 'Personnages',
  humilité: 'Personnages',
  fidélité: 'Personnages',
  qualites: 'Personnages',

  'histoire biblique': 'Récits bibliques',
  histoire: 'Récits bibliques',
  'la bible et l’histoire': 'Récits bibliques',
  'grande chronologie': 'Récits bibliques',
  'exil et retour': 'Récits bibliques',
  exil: 'Récits bibliques',
  exode: 'Récits bibliques',
  évangiles: 'Récits bibliques',
  evangiles: 'Récits bibliques',
  disciples: 'Récits bibliques',
  miracles: 'Récits bibliques',
  'femmes-evangiles': 'Récits bibliques',
  'rois et prophètes': 'Récits bibliques',
  'rois & prophètes': 'Récits bibliques',
  rois: 'Récits bibliques',
  'prophètes-ecritures': 'Récits bibliques',
  prophètes: 'Récits bibliques',
  juges: 'Récits bibliques',
  confiance: 'Récits bibliques',
  'miracles-anciens': 'Récits bibliques',

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
  genèse: 'Comprendre la Bible',
  lieux: 'Comprendre la Bible',
  livres: 'Comprendre la Bible',
  'livres-hebreux': 'Comprendre la Bible',
  villes: 'Comprendre la Bible',
  objets: 'Comprendre la Bible',
  actes: 'Comprendre la Bible',
  prédication: 'Comprendre la Bible',
  persévérance: 'Comprendre la Bible',
  défis: 'Comprendre la Bible',

  bible: 'Mieux connaître Jéhovah',
  'questions bibliques': 'Mieux connaître Jéhovah',
};

export function normalizeCategory(value: unknown) {
  if (typeof value !== 'string') return 'Mieux connaître Jéhovah';
  const key = value.trim().toLowerCase();
  if (!key) return 'Mieux connaître Jéhovah';
  return CATEGORY_MAP[key] || 'Mieux connaître Jéhovah';
}

export function getCategoryQuestionCount(category: string) {
  return allGameQuestions.filter(q => normalizeCategory(q.category) === category).length;
}

export function getQuizCatalog() {
  return quizQuestions.map(q => ({ ...q, category: normalizeCategory(q.category) }));
}

export function findQuestion(id: string): Question | undefined {
  return allGameQuestions.find(q => q.id === id);
}

export function selectTrainingQuestions(category: string, difficulty: string, missedIds: string[] = [], count = 10): QuizQuestion[] {
  const normalized = category === 'Toutes' ? 'Toutes' : normalizeCategory(category);
  const all = getQuizCatalog();
  const matches = (q: QuizQuestion) =>
    (normalized === 'Toutes' || q.category === normalized) &&
    (difficulty === 'all' || q.difficulty === difficulty);
  const base = all.filter(matches);
  // Training must respect the selected filters: never silently replace a category
  // or difficulty with unrelated questions. Missed questions are still prioritized.
  const shuffle = <T,>(items: T[]) => [...items].sort(() => Math.random() - 0.5);
  const preferred = base.filter(q => missedIds.includes(q.id));
  const fresh = base.filter(q => !missedIds.includes(q.id));
  return [...shuffle(preferred), ...shuffle(fresh)].slice(0, count);
}
