import AsyncStorage from '@react-native-async-storage/async-storage';
import { characterLearning } from './characterLearning';

export type ReviewMode = 'mix' | 'account' | 'lesson' | 'relationship' | 'qualities' | 'mystery';

export type ReviewCard = {
  id: string;
  characterId: string;
  characterName: string;
  mode: ReviewMode;
  prompt: string;
  answer: string;
  choices: string[];
  explanation: string;
  reference: string;
};

export type CharacterMastery = {
  correct: number;
  wrong: number;
  streak: number;
  level: number;
  nextReviewAt: number;
  lastSeenAt: number;
};

const STORAGE_KEY = '@bible-party/character-review/mastery/v1';

const nameOverrides: Record<string, string> = {
  mary_magdalen: 'Marie Madeleine',
  mary_bethany: 'Marie de Béthanie',
  mary_mother_james: 'Marie mère de Jacques',
  mary_mark_mother: 'Marie mère de Jean-Marc',
  joseph_arimathea: 'Joseph d’Arimathie',
  joseph_jesus_father: 'Joseph, père adoptif de Jésus',
  joseph_caiaphas: 'Joseph Caïphe',
  james_zebedee: 'Jacques fils de Zébédée',
  james_brother_jesus: 'Jacques frère de Jésus',
  james_alphaaeus: 'Jacques fils d’Alphée',
  jude_brother_jesus: 'Jude frère de Jésus',
  philip_evangelizer: 'Philippe l’évangélisateur',
  philip_apostle: 'Philippe l’apôtre',
  bartholomew: 'Barthélemy',
  simon_zealot: 'Simon le Zélote',
  jairus_daughter: 'Fille de Jaïrus',
  zechariah_priest: 'Zacharie père de Jean',
};

function characterName(id: string, identity: string): string {
  if (nameOverrides[id]) return nameOverrides[id];
  const beforeDash = identity.split(/\s+[—–-]\s+/)[0].trim();
  return beforeDash || id.replace(/_/g, ' ');
}

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

const entries = Object.entries(characterLearning);

export function buildReviewDeck(mode: ReviewMode = 'mix', count = 10, preferredIds: string[] = []): ReviewCard[] {
  const preferred = preferredIds.length ? preferredIds.map((id) => entries.find(([entryId]) => entryId === id)).filter((entry): entry is [string, typeof entries[number][1]] => Boolean(entry)) : [];
  const fallback = entries.filter(([id]) => !preferredIds.includes(id));
  const picked = [...shuffle(preferred), ...shuffle(fallback)].slice(0, Math.min(count, entries.length));

  return picked.map(([id, data], index) => {
    const name = characterName(id, data.identity);
    const nextNames = shuffle(entries.filter(([otherId]) => otherId !== id))
      .slice(0, 3)
      .map(([otherId, other]) => characterName(otherId, other.identity));

    const actualMode = mode === 'mix'
      ? (['account', 'lesson', 'relationship', 'qualities', 'mystery'] as ReviewMode[])[index % 5]
      : mode;

    if (actualMode === 'account') {
      const clue = data.bibleAccount.slice(0, 2).join(' ');
      return {
        id: 'review-account-' + id + '-' + index,
        characterId: id,
        characterName: name,
        mode: actualMode,
        prompt: 'Quel personnage correspond à ce récit ? ' + clue,
        answer: name,
        choices: shuffle([name, ...nextNames]),
        explanation: data.lessonPoints[0] ?? data.studyFocus,
        reference: data.keyReading,
      };
    }

    if (actualMode === 'lesson') {
      const lesson = data.lessonPoints[index % data.lessonPoints.length];
      return {
        id: 'review-lesson-' + id + '-' + index,
        characterId: id,
        characterName: name,
        mode: actualMode,
        prompt: 'Quel personnage illustre cette leçon ? ' + lesson,
        answer: name,
        choices: shuffle([name, ...nextNames]),
        explanation: data.relationshipWithJehovah,
        reference: data.keyReading,
      };
    }

    if (actualMode === 'relationship') {
      return {
        id: 'review-relationship-' + id + '-' + index,
        characterId: id,
        characterName: name,
        mode: actualMode,
        prompt: 'Que retenir de la relation de ce personnage avec Jéhovah ?',
        answer: name,
        choices: shuffle([name, ...nextNames]),
        explanation: data.relationshipWithJehovah,
        reference: data.keyReading,
      };
    }

    if (actualMode === 'qualities') {
      return {
        id: 'review-quality-' + id + '-' + index,
        characterId: id,
        characterName: name,
        mode: actualMode,
        prompt: 'Quel personnage est associé à cette qualité ou à cet aspect de personnalité ? ' + data.qualities[0],
        answer: name,
        choices: shuffle([name, ...nextNames]),
        explanation: data.difficulties[0] ?? data.studyFocus,
        reference: data.keyReading,
      };
    }

    const clues = shuffle([
      data.qualities[0],
      data.location,
      data.era,
    ]);
    return {
      id: 'review-mystery-' + id + '-' + index,
      characterId: id,
      characterName: name,
      mode: actualMode,
      prompt: 'Qui suis-je ? Indices : ' + clues.join(' • '),
      answer: name,
      choices: shuffle([name, ...nextNames]),
      explanation: data.didYouKnow,
      reference: data.keyReading,
    };
  });
}

export async function loadCharacterMastery(): Promise<Record<string, CharacterMastery>> {
  try {
    const raw = await AsyncStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export async function recordReviewResult(characterId: string, correct: boolean): Promise<CharacterMastery> {
  const all = await loadCharacterMastery();
  const previous = all[characterId] ?? {
    correct: 0,
    wrong: 0,
    streak: 0,
    level: 0,
    nextReviewAt: 0,
    lastSeenAt: 0,
  };

  const now = Date.now();
  const streak = correct ? previous.streak + 1 : 0;
  const level = correct ? Math.min(5, previous.level + 1) : Math.max(0, previous.level - 1);
  const intervals = [0, 10 * 60 * 1000, 24 * 60 * 60 * 1000, 3 * 24 * 60 * 60 * 1000, 7 * 24 * 60 * 60 * 1000, 21 * 24 * 60 * 60 * 1000];

  const updated: CharacterMastery = {
    correct: previous.correct + (correct ? 1 : 0),
    wrong: previous.wrong + (correct ? 0 : 1),
    streak,
    level,
    nextReviewAt: now + intervals[level],
    lastSeenAt: now,
  };

  all[characterId] = updated;
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(all));
  return updated;
}

export async function getReviewStats(): Promise<{ total: number; due: number; mastered: number; learning: number }> {
  const mastery = await loadCharacterMastery();
  const now = Date.now();
  const due = entries.filter(([id]) => !mastery[id] || mastery[id].nextReviewAt <= now).length;
  const mastered = entries.filter(([id]) => (mastery[id]?.level ?? 0) >= 4).length;
  return { total: entries.length, due, mastered, learning: entries.length - mastered };
}

export async function getDueCharacterIds(): Promise<string[]> {
  const mastery = await loadCharacterMastery();
  const now = Date.now();
  return entries
    .filter(([id]) => !mastery[id] || mastery[id].nextReviewAt <= now)
    .sort((a, b) => (mastery[a[0]]?.nextReviewAt ?? 0) - (mastery[b[0]]?.nextReviewAt ?? 0))
    .map(([id]) => id);
}



export async function getErrorCharacterIds(): Promise<string[]> {
  const mastery = await loadCharacterMastery();
  return entries
    .filter(([id]) => (mastery[id]?.wrong ?? 0) > 0)
    .sort((a, b) => {
      const wrongDiff = (mastery[b[0]]?.wrong ?? 0) - (mastery[a[0]]?.wrong ?? 0);
      if (wrongDiff !== 0) return wrongDiff;
      return (mastery[a[0]]?.nextReviewAt ?? 0) - (mastery[b[0]]?.nextReviewAt ?? 0);
    })
    .map(([id]) => id);
}

export function buildCharacterReviewDeck(characterId: string, mode: ReviewMode = 'mix', count = 10): ReviewCard[] {
  const data = characterLearning[characterId];
  if (!data) return [];
  const modes: ReviewMode[] = mode === 'mix'
    ? ['account', 'lesson', 'relationship', 'qualities', 'mystery']
    : [mode];
  return Array.from({ length: count }, (_, index) => {
    const card = buildReviewDeck(modes[index % modes.length], 1, [characterId])[0];
    return card;
  }).filter(Boolean);
}
