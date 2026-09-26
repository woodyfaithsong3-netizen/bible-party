import { BIBLE_BOOKS } from '@/data/bibleBooks';
export function getDiscoveredBibleBookIds(completedEpisodeIds: string[], completedAnnexIds: string[], _completedFinalBookIds: string[] = []) {
  const completed = new Set(completedEpisodeIds);
  const episodeNumbers = new Set<number>();
  for (const id of completed) {
    const match = id.match(/(?:^|[^0-9])([0-9]+)$/);
    if (match) episodeNumbers.add(Number(match[1]));
  }
  return BIBLE_BOOKS.filter(book =>
    (book.adventureEpisodes ?? []).some(number => episodeNumbers.has(number)) ||
    (!!book.annexId && completedAnnexIds.includes(book.annexId)) ||
    false
  ).map(book => book.id);
}
