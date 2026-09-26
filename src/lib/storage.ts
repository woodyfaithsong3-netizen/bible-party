import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'bible-party-local-scores-v1';
const GAMES_KEY = 'bible-party-games-v1';
const ADVENTURE_KEY = 'bible-party-adventure-v1';
const ANNEX_KEY = 'bible-party-character-annex-v1';
const BIBLE_BOOKS_KEY = 'bible-party-bible-books-v1';
const FINAL_BIBLE_BOOKS_KEY = 'bible-party-final-bible-books-v1';

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


export async function getCharacterAnnexProgress(): Promise<string[]> {
  try { const raw = await AsyncStorage.getItem(ANNEX_KEY); return raw ? JSON.parse(raw) as string[] : []; } catch { return []; }
}

export async function markCharacterAnnexComplete(id: string): Promise<string[]> {
  const current = await getCharacterAnnexProgress();
  const next = Array.from(new Set([...current, id]));
  await AsyncStorage.setItem(ANNEX_KEY, JSON.stringify(next));
  return next;
}


export async function getBibleBookProgress(): Promise<Record<string, string>> {
  try {
    const raw = await AsyncStorage.getItem(BIBLE_BOOKS_KEY);
    return raw ? JSON.parse(raw) as Record<string, string> : {};
  } catch { return {}; }
}

export async function markBibleBookDiscovered(id: string): Promise<Record<string, string>> {
  const current = await getBibleBookProgress();
  if (!current[id]) current[id] = new Date().toISOString();
  await AsyncStorage.setItem(BIBLE_BOOKS_KEY, JSON.stringify(current));
  return current;
}

export async function getFinalBibleBookProgress(): Promise<string[]> {
  try { const raw = await AsyncStorage.getItem(FINAL_BIBLE_BOOKS_KEY); return raw ? JSON.parse(raw) as string[] : []; } catch { return []; }
}
export async function markFinalBibleBookDiscovered(id: string): Promise<string[]> {
  const current = await getFinalBibleBookProgress();
  const next = Array.from(new Set([...current, id]));
  await AsyncStorage.setItem(FINAL_BIBLE_BOOKS_KEY, JSON.stringify(next));
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
  await AsyncStorage.multiRemove([KEY, GAMES_KEY, ADVENTURE_KEY, ANNEX_KEY, BIBLE_BOOKS_KEY, FINAL_BIBLE_BOOKS_KEY]);
}
