import { characterProfiles } from './characterProfiles';
import { BIBLE_BOOKS } from './bibleBooks';

export type BadgeCategory = 'aventure' | 'collection' | 'bibliotheque' | 'party' | 'special';

export type Badge = {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: BadgeCategory;
  secret?: boolean;
  unlocked: (ctx: { episodes: number; characters: number; games: number; adventureComplete?: boolean; seasonsCompleted?: number; books?: number }) => boolean;
};

export const BADGE_CATEGORIES: { id: BadgeCategory; title: string; icon: string }[] = [
  { id: 'aventure', title: 'Aventure', icon: '🗺️' },
  { id: 'collection', title: 'Personnages', icon: '👤' },
  { id: 'bibliotheque', title: 'Bibliothèque', icon: '📖' },
  { id: 'party', title: 'Party', icon: '🎮' },
  { id: 'special', title: 'Spéciaux', icon: '✨' },
];

export const BADGES: Badge[] = [
  { id:'first-story', category:'aventure', title:'Le premier pas', description:'Termine ta première histoire de l’Aventure.', icon:'🌱', unlocked:c=>c.episodes>=1 },
  { id:'five-stories', category:'aventure', title:'Premiers pas', description:'Termine 5 histoires.', icon:'👣', unlocked:c=>c.episodes>=5 },
  { id:'ten-stories', category:'aventure', title:'En route', description:'Termine 10 histoires.', icon:'🗺️', unlocked:c=>c.episodes>=10 },
  { id:'twenty-five-stories', category:'aventure', title:'Le voyage avance', description:'Termine 25 histoires.', icon:'🥾', unlocked:c=>c.episodes>=25 },
  { id:'fifty-stories', category:'aventure', title:'Grand voyageur', description:'Termine 50 histoires.', icon:'🏔️', unlocked:c=>c.episodes>=50 },
  { id:'hundred-stories', category:'aventure', title:'Presque au bout', description:'Termine 100 histoires.', icon:'🌄', unlocked:c=>c.episodes>=100 },
  { id:'all-stories', category:'aventure', title:'Toute l’histoire', description:'Termine les 116 histoires.', icon:'🌟', unlocked:c=>c.adventureComplete===true },
  { id:'first-season', category:'aventure', title:'Première saison', description:'Termine tous les épisodes d’une saison.', icon:'🏅', unlocked:c=>(c.seasonsCompleted??0)>=1 },
  { id:'four-seasons', category:'aventure', title:'À mi-parcours', description:'Termine 4 saisons.', icon:'🧭', unlocked:c=>(c.seasonsCompleted??0)>=4 },
  { id:'eight-seasons', category:'aventure', title:'Aventure complète', description:'Termine les 8 saisons.', icon:'🌟', unlocked:c=>(c.seasonsCompleted??0)>=8 },

  { id:'first-character', category:'collection', title:'Première rencontre', description:'Découvre ton premier personnage.', icon:'👤', unlocked:c=>c.characters>=1 },
  { id:'ten-characters', category:'collection', title:'Visages connus', description:'Découvre 10 personnages.', icon:'👥', unlocked:c=>c.characters>=10 },
  { id:'twenty-five-characters', category:'collection', title:'Belle collection', description:'Découvre 25 personnages.', icon:'📚', unlocked:c=>c.characters>=25 },
  { id:'fifty-characters', category:'collection', title:'Grande collection', description:'Découvre 50 personnages.', icon:'🗂️', unlocked:c=>c.characters>=50 },
  { id:'hundred-characters', category:'collection', title:'Cent visages', description:'Découvre 100 personnages.', icon:'🏛️', unlocked:c=>c.characters>=100 },
  { id:'all-characters', category:'collection', title:'Les 177', description:'Découvre les 177 personnages.', icon:'🏆', unlocked:c=>c.characters>=characterProfiles.length },

  { id:'first-book', category:'bibliotheque', title:'Premier livre', description:'Découvre ton premier livre de la Bible.', icon:'📖', unlocked:c=>(c.books??0)>=1 },
  { id:'ten-books', category:'bibliotheque', title:'La bibliothèque grandit', description:'Découvre 10 livres.', icon:'📚', unlocked:c=>(c.books??0)>=10 },
  { id:'thirty-three-books', category:'bibliotheque', title:'À mi-chemin', description:'Découvre 33 livres.', icon:'🗺️', unlocked:c=>(c.books??0)>=33 },
  { id:'fifty-books', category:'bibliotheque', title:'Grande bibliothèque', description:'Découvre 50 livres.', icon:'🏛️', unlocked:c=>(c.books??0)>=50 },
  { id:'all-books', category:'bibliotheque', title:'Les 66 livres', description:'Découvre les 66 livres de la Bible.', icon:'🏆', unlocked:c=>(c.books??0)>=BIBLE_BOOKS.length },

  { id:'first-game', category:'party', title:'Première partie', description:'Termine une partie de Bible Party.', icon:'🎮', unlocked:c=>c.games>=1 },
  { id:'ten-games', category:'party', title:'Habitué de la Party', description:'Termine 10 parties.', icon:'🎉', unlocked:c=>c.games>=10 },
  { id:'twenty-five-games', category:'party', title:'Toujours partant', description:'Termine 25 parties.', icon:'🔥', unlocked:c=>c.games>=25 },
  { id:'fifty-games', category:'party', title:'Grande soirée', description:'Termine 50 parties.', icon:'🎊', unlocked:c=>c.games>=50 },
  { id:'hundred-games', category:'party', title:'Cent parties', description:'Termine 100 parties.', icon:'💎', unlocked:c=>c.games>=100 },
  { id:'two-hundred-fifty-games', category:'party', title:'Infatigable', description:'Termine 250 parties.', icon:'⚡', unlocked:c=>c.games>=250 },

  { id:'secret-journey', category:'special', title:'Le fil continue', description:'Découvre au moins un personnage et termine une histoire.', icon:'🔮', secret:true, unlocked:c=>c.characters>=1&&c.episodes>=1 },
  { id:'secret-library', category:'special', title:'Entre les rayons', description:'Découvre au moins 10 livres et 10 personnages.', icon:'✨', secret:true, unlocked:c=>(c.books??0)>=10&&c.characters>=10 },
  { id:'secret-complete', category:'special', title:'Collection légendaire', description:'Termine l’Aventure et complète les 66 livres et 125 personnages.', icon:'👑', secret:true, unlocked:c=>c.adventureComplete===true&&(c.books??0)>=BIBLE_BOOKS.length&&c.characters>=characterProfiles.length },
];

export function getBadgeProgress(badge: Badge, ctx: Parameters<Badge['unlocked']>[0]) {
  if (badge.unlocked(ctx)) return 1;
  const targets: Record<string, number> = {
    'first-story':1,'five-stories':5,'ten-stories':10,'twenty-five-stories':25,'fifty-stories':50,'hundred-stories':100,'all-stories':116,'first-season':1,'four-seasons':4,'eight-seasons':8,
    'first-character':1,'ten-characters':10,'twenty-five-characters':25,'fifty-characters':50,'hundred-characters':100,'all-characters':characterProfiles.length,
    'first-book':1,'ten-books':10,'thirty-three-books':33,'fifty-books':50,'all-books':BIBLE_BOOKS.length,
    'first-game':1,'ten-games':10,'twenty-five-games':25,'fifty-games':50,'hundred-games':100,'two-hundred-fifty-games':250,
    'secret-journey':1,'secret-library':10,'secret-complete':1,
  };
  const target=targets[badge.id]??1;
  const value=badge.id.includes('season')?(ctx.seasonsCompleted??0):badge.id.includes('character')?ctx.characters:badge.id.includes('book')?(ctx.books??0):badge.id.includes('story')?ctx.episodes:badge.id.includes('game')?ctx.games:0;
  return Math.min(1,value/target);
}
