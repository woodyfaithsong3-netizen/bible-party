import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'bible-party-local-scores-v1';
const GAMES_KEY = 'bible-party-games-v1';
const ADVENTURE_KEY = 'bible-party-adventure-v1';

export type LocalScore = { teamName: string; score: number; playedAt: string };

export async function saveScore(score: LocalScore) {
  const current = await getScores();
  const next = [score, ...current].sort((a, b) => b.score - a.score).slice(0, 20);
  await AsyncStorage.setItem(KEY, JSON.stringify(next));
}
export async function getScores(): Promise<LocalScore[]> {
  try { const raw = await AsyncStorage.getItem(KEY); return raw ? JSON.parse(raw) as LocalScore[] : []; } catch { return []; }
}
export async function getAdventureProgress(): Promise<string[]> {
  try { const raw = await AsyncStorage.getItem(ADVENTURE_KEY); return raw ? JSON.parse(raw) as string[] : []; } catch { return []; }
}

export async function markAdventureEpisodeComplete(id: string): Promise<string[]> {
  const current = await getAdventureProgress();
  const next = Array.from(new Set([...current, id]));
  await AsyncStorage.setItem(ADVENTURE_KEY, JSON.stringify(next));
  return next;
}

export async function getGamesPlayed(): Promise<number> {
  try { return Number((await AsyncStorage.getItem(GAMES_KEY)) || 0); } catch { return 0; }
}
export async function recordGamePlayed(): Promise<number> {
  const next = (await getGamesPlayed()) + 1;
  await AsyncStorage.setItem(GAMES_KEY, String(next));
  return next;
}

export async function resetProgress() {
  await AsyncStorage.multiRemove([KEY, GAMES_KEY, ADVENTURE_KEY]);
}
