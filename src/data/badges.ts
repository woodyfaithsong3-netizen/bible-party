import { characterProfiles } from './characterProfiles';

export type Badge = {
  id: string;
  title: string;
  description: string;
  icon: string;
  secret?: boolean;
  unlocked: (ctx: { episodes: number; characters: number; games: number; adventureComplete?: boolean; seasonsCompleted?: number }) => boolean;
};

export const BADGES: Badge[] = [
  { id:'first-story', title:'Le premier pas', description:'Termine ta première histoire de l’Aventure.', icon:'🌱', unlocked: c => c.episodes >= 1 },
  { id:'ten-stories', title:'En route', description:'Termine 10 histoires.', icon:'🗺️', unlocked: c => c.episodes >= 10 },
  { id:'fifty-stories', title:'Grand voyageur', description:'Termine 50 histoires.', icon:'🏔️', unlocked: c => c.episodes >= 50 },
  { id:'all-stories', title:'Toute l’histoire', description:'Termine les 116 histoires.', icon:'🌟', unlocked: c => c.adventureComplete === true },
  { id:'first-character', title:'Première rencontre', description:'Découvre ton premier personnage dans l’Aventure.', icon:'👤', unlocked: c => c.characters >= 1 },
  { id:'ten-characters', title:'Visages connus', description:'Découvre 10 personnages.', icon:'👥', unlocked: c => c.characters >= 10 },
  { id:'fifty-characters', title:'Belle collection', description:'Découvre 50 personnages.', icon:'📚', unlocked: c => c.characters >= 50 },
  { id:'all-characters', title:'Les 125', description:'Découvre les 125 personnages.', icon:'🏆', unlocked: c => c.characters >= characterProfiles.length },
  { id:'first-game', title:'Première partie', description:'Termine une partie de Bible Party.', icon:'🎮', unlocked: c => c.games >= 1 },
  { id:'ten-games', title:'Habitué de la Party', description:'Termine 10 parties.', icon:'🎉', unlocked: c => c.games >= 10 },
  { id:'twenty-five-games', title:'Toujours partant', description:'Termine 25 parties de Bible Party.', icon:'🔥', unlocked: c => c.games >= 25 },
  { id:'fifty-games', title:'Grande soirée', description:'Termine 50 parties de Bible Party.', icon:'🎊', unlocked: c => c.games >= 50 },
  { id:'hundred-games', title:'Cent parties', description:'Termine 100 parties de Bible Party.', icon:'💎', unlocked: c => c.games >= 100 },
  { id:'first-season', title:'Première saison', description:'Termine tous les épisodes d’une saison.', icon:'🏅', unlocked: c => (c.seasonsCompleted ?? 0) >= 1 },
  { id:'secret-journey', title:'Le fil continue', description:'Découvre au moins un personnage et termine une histoire.', icon:'🔮', secret: true, unlocked: c => c.characters >= 1 && c.episodes >= 1 },
];

export function getBadgeProgress(badge: Badge, ctx: Parameters<Badge['unlocked']>[0]) {
  if (badge.unlocked(ctx)) return 1;
  const targets: Record<string, number> = {
    'first-story':1,'ten-stories':10,'fifty-stories':50,'all-stories':116,
    'first-character':1,'ten-characters':10,'fifty-characters':50,'all-characters':characterProfiles.length,
    'first-game':1,'ten-games':10,'twenty-five-games':25,'fifty-games':50,'hundred-games':100,'first-season':1,'secret-journey':1,
  };
  const target = targets[badge.id] ?? 1;
  const value = badge.id === 'all-stories' ? ctx.episodes : badge.id === 'first-season' ? (ctx.seasonsCompleted ?? 0) : badge.id.includes('character') ? ctx.characters : badge.id.includes('story') ? ctx.episodes : badge.id.includes('game') ? ctx.games : 0;
  return Math.min(1, value / target);
}
