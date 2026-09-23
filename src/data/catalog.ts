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
  'Questions bibliques',
  'Que veulent dire ces versets ?',
  'La Bible et l’Histoire',
  'La Bible et la science',
  'Personnages',
  'Évangiles',
  'Rois & prophètes',
  'Prophéties',
];

/** Toutes les catégories affichées sont de vrais thèmes de contenu. */
export const setupCategoryFilters = [...categoryLabels];

/**
 * Classification éditoriale : les anciennes catégories restent reconnues afin de ne
 * pas perdre le contenu historique de la base. Les nouvelles catégories correspondent
 * aux grands axes « Que dit la Bible ? » de JW.org, enrichis par les familles de jeu.
 */
const CATEGORY_MAP: Record<string, string> = {
  // Questions bibliques
  bible: 'Questions bibliques',
  'questions bibliques': 'Questions bibliques',
  'histoire biblique': 'La Bible et l’Histoire',
  genèse: 'Questions bibliques',
  israël: 'Questions bibliques',
  'grande chronologie': 'Questions bibliques',
  'exil et retour': 'La Bible et l’Histoire',
  exil: 'La Bible et l’Histoire',
  exode: 'Questions bibliques',
  lieux: 'Questions bibliques',
  livres: 'Questions bibliques',
  'livres-hebreux': 'Questions bibliques',
  villes: 'Questions bibliques',
  objets: 'Questions bibliques',
  actes: 'Questions bibliques',
  prédication: 'Questions bibliques',
  persévérance: 'Questions bibliques',
  // Versets
  versets: 'Que veulent dire ces versets ?',
  'versets bibliques': 'Que veulent dire ces versets ?',
  'que veulent dire ces versets ?': 'Que veulent dire ces versets ?',
  'expressions bibliques': 'Que veulent dire ces versets ?',
  concepts: 'Que veulent dire ces versets ?',
  repentance: 'Que veulent dire ces versets ?',
  // Histoire
  histoire: 'La Bible et l’Histoire',
  'la bible et l’histoire': 'La Bible et l’Histoire',
  manuscrits: 'La Bible et l’Histoire',
  traductions: 'La Bible et l’Histoire',
  archéologie: 'La Bible et l’Histoire',
  archeologie: 'La Bible et l’Histoire',
  'exactitude historique': 'La Bible et l’Histoire',
  // Science
  science: 'La Bible et la science',
  'la bible et la science': 'La Bible et la science',
  création: 'La Bible et la science',
  evolution: 'La Bible et la science',
  évolution: 'La Bible et la science',
  'exactitude scientifique': 'La Bible et la science',
  // Personnages
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
  // Évangiles
  évangiles: 'Évangiles',
  evangiles: 'Évangiles',
  disciples: 'Évangiles',
  miracles: 'Évangiles',
  'femmes-evangiles': 'Évangiles',
  // Rois & prophètes
  'rois et prophètes': 'Rois & prophètes',
  'rois & prophètes': 'Rois & prophètes',
  rois: 'Rois & prophètes',
  'prophètes-ecritures': 'Rois & prophètes',
  prophètes: 'Rois & prophètes',
  juges: 'Rois & prophètes',
  confiance: 'Rois & prophètes',
  'miracles-anciens': 'Rois & prophètes',
  // Prophéties
  prophéties: 'Prophéties',
  propheties: 'Prophéties',
  prophétie: 'Prophéties',
  prophetie: 'Prophéties',
  'prophéties bibliques': 'Prophéties',
  défis: 'Questions bibliques',
};

export function normalizeCategory(value: unknown) {
  // Les anciennes questions peuvent avoir une catégorie absente ou non textuelle.
  // Ne jamais appeler toLowerCase() avant d'avoir vérifié le type.
  if (typeof value !== 'string') return 'Questions bibliques';
  const key = value.trim().toLowerCase();
  if (!key) return 'Questions bibliques';
  const mapped = CATEGORY_MAP[key];
  if (mapped) return mapped;
  // eslint-disable-next-line no-console
  console.warn(`[catalog] Catégorie non mappée : "${value}" — vérifier CATEGORY_MAP dans catalog.ts`);
  return 'Questions bibliques';
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
