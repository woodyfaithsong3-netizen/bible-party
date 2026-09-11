import AsyncStorage from '@react-native-async-storage/async-storage';
const KEY = 'bible-party-settings-v2';
export type AppSettings = { sounds: boolean; haptics: boolean; animations: boolean; highContrast: boolean };
const defaults: AppSettings = { sounds: true, haptics: true, animations: true, highContrast: false };
export async function getSettings(): Promise<AppSettings> { try { const raw = await AsyncStorage.getItem(KEY); return raw ? { ...defaults, ...JSON.parse(raw) } : defaults; } catch { return defaults; } }
export async function saveSettings(next: AppSettings) { await AsyncStorage.setItem(KEY, JSON.stringify(next)); return next; }
