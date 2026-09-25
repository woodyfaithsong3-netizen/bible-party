import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'bible-party-local-scores-v1';
const GAMES_KEY = 'bible-party-games-v1';
const CHARACTERS_KEY = 'bible-party-characters-v1';
const ADVENTURE_KEY = 'bible-party-adventure-v1';

export type LocalScore = { teamName: string; score: number; playedAt: string };
export async function getLearnedCharacters(): Promise<string[]> {
  try { const raw = await AsyncStorage.getItem(CHARACTERS_KEY); return raw ? JSON.parse(raw) as string[] : []; } catch { return []; }
}
export async function markCharacterLearned(id: string) {
  const current = await getLearnedCharacters();
  const next = Array.from(new Set([id, ...current]));
  await AsyncStorage.setItem(CHARACTERS_KEY, JSON.stringify(next));
  return next;
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
  await AsyncStorage.multiRemove([KEY, GAMES_KEY, CHARACTERS_KEY, ADVENTURE_KEY]);
}
