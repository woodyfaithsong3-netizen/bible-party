import { BIBLE_BOOKS } from '@/data/bibleBooks';
import { CHARACTER_ANNEXES } from '@/data/characterAnnexes';
import { SEASON_1 } from '@/data/adventure';
import { SEASON_2 } from '@/data/adventureSeason2';
import { SEASON_3 } from '@/data/adventureSeason3';
import { SEASON_4 } from '@/data/adventureSeason4';
import { SEASON_5 } from '@/data/adventureSeason5';
import { SEASON_6 } from '@/data/adventureSeason6';
import { SEASON_7 } from '@/data/adventureSeason7';
import { SEASON_8 } from '@/data/adventureSeason8';

const SEASONS = [SEASON_1, SEASON_2, SEASON_3, SEASON_4, SEASON_5, SEASON_6, SEASON_7, SEASON_8];

export function getDiscoveredBibleBookIds(completedEpisodeIds: string[], completedAnnexIds: string[]) {
  const completed = new Set(completedEpisodeIds);
  const episodeNumbers = new Set(
    SEASONS.flatMap(s => s.episodes.filter(e => completed.has(e.id)).map(e => e.number))
  );
  const allEpisodes = SEASONS.flatMap(s => s.episodes);
  const adventureComplete = allEpisodes.length === 116 && allEpisodes.every(e => completed.has(e.id));
  const allCharacterAnnexes = CHARACTER_ANNEXES.every(a => completedAnnexIds.includes(a.id));

  return BIBLE_BOOKS.filter(book =>
    (book.adventureEpisodes ?? []).some(number => episodeNumbers.has(number)) ||
    (!!book.annexId && completedAnnexIds.includes(book.annexId)) ||
    (book.status === 'new-annex' && adventureComplete && allCharacterAnnexes)
  ).map(book => book.id);
}
