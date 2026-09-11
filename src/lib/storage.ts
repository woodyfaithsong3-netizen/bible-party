import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'bible-party-local-scores-v1';
const TRAINING_KEY = 'bible-party-training-v1';

export type LocalScore = { teamName: string; score: number; playedAt: string };
export type TrainingStats = {
  answered: number;
  correct: number;
  bestStreak: number;
  totalPoints: number;
  categoryStats: Record<string, { answered: number; correct: number; points: number }>;
  missedIds: string[];
};

const emptyTraining: TrainingStats = { answered: 0, correct: 0, bestStreak: 0, totalPoints: 0, categoryStats: {}, missedIds: [] };

export async function saveScore(score: LocalScore) {
  const current = await getScores();
  const next = [score, ...current].sort((a, b) => b.score - a.score).slice(0, 20);
  await AsyncStorage.setItem(KEY, JSON.stringify(next));
}
export async function getScores(): Promise<LocalScore[]> {
  try { const raw = await AsyncStorage.getItem(KEY); return raw ? JSON.parse(raw) as LocalScore[] : []; } catch { return []; }
}
export async function getTrainingStats(): Promise<TrainingStats> {
  try { const raw = await AsyncStorage.getItem(TRAINING_KEY); return raw ? { ...emptyTraining, ...JSON.parse(raw) } as TrainingStats : emptyTraining; } catch { return emptyTraining; }
}
export async function recordTrainingAnswer(input: { id: string; category: string; correct: boolean; points: number; streak: number }) {
  const current = await getTrainingStats();
  const category = current.categoryStats[input.category] || { answered: 0, correct: 0, points: 0 };
  const next: TrainingStats = {
    answered: current.answered + 1,
    correct: current.correct + (input.correct ? 1 : 0),
    bestStreak: Math.max(current.bestStreak, input.streak),
    totalPoints: current.totalPoints + input.points,
    categoryStats: { ...current.categoryStats, [input.category]: { answered: category.answered + 1, correct: category.correct + (input.correct ? 1 : 0), points: category.points + input.points } },
    missedIds: input.correct ? current.missedIds : Array.from(new Set([input.id, ...current.missedIds])).slice(0, 100),
  };
  await AsyncStorage.setItem(TRAINING_KEY, JSON.stringify(next));
  return next;
}
export async function clearTrainingMissed(id: string) {
  const current = await getTrainingStats();
  const next = { ...current, missedIds: current.missedIds.filter(x => x !== id) };
  await AsyncStorage.setItem(TRAINING_KEY, JSON.stringify(next));
  return next;
}
export async function resetProgress() {
  await AsyncStorage.multiRemove([KEY, TRAINING_KEY]);
}
