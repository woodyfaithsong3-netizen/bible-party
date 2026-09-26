import React, { useCallback, useMemo, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { router, useFocusEffect } from 'expo-router';
import { ScenicScreen } from '@/components/ScenicScreen';
import { colors } from '@/theme/colors';
import { styles } from '@/theme/styles';
import { characterProfiles } from '@/data/characterProfiles';
import { BIBLE_BOOKS } from '@/data/bibleBooks';
import { SEASON_1 } from '@/data/adventure';
import { SEASON_2 } from '@/data/adventureSeason2';
import { SEASON_3 } from '@/data/adventureSeason3';
import { SEASON_4 } from '@/data/adventureSeason4';
import { SEASON_5 } from '@/data/adventureSeason5';
import { SEASON_6 } from '@/data/adventureSeason6';
import { SEASON_7 } from '@/data/adventureSeason7';
import { SEASON_8 } from '@/data/adventureSeason8';
import { BADGES, BADGE_CATEGORIES, getBadgeProgress } from '@/data/badges';
import { getAdventureProgress, getCharacterAnnexProgress, getBibleBookProgress, getFinalBibleBookProgress, getGamesPlayed, markBibleBookDiscovered } from '@/lib/storage';
import { CHARACTER_ANNEXES } from '@/data/characterAnnexes';
import { getDiscoveredBibleBookIds } from '@/lib/bibleBookProgress';

const SEASONS = [SEASON_1, SEASON_2, SEASON_3, SEASON_4, SEASON_5, SEASON_6, SEASON_7, SEASON_8];
function getCompletedEpisodeIds(completed: string[]) {
  const validIds = new Set(SEASONS.flatMap(season => season.episodes.map(ep => ep.id)));
  return Array.from(new Set(completed.filter(id => validIds.has(id))));
}

function getUnlockedCharacterIds(completed: string[]) {
  const done = new Set(completed);
  return Array.from(new Set(SEASONS.flatMap(season => season.episodes.filter(ep => done.has(ep.id)).flatMap(ep => ep.characterIds ?? []))));
}

export default function BibleScreen() {
  const [completed, setCompleted] = useState<string[]>([]);
  const [games, setGames] = useState(0);
  const [completedAnnexes, setCompletedAnnexes] = useState<string[]>([]);
  const [bibleBooks, setBibleBooks] = useState(0);
  const load = useCallback(async () => {
    const [a, g, annexProgress, storedBooks, finalBooks] = await Promise.all([getAdventureProgress(), getGamesPlayed(), getCharacterAnnexProgress(), getBibleBookProgress(), getFinalBibleBookProgress()]);
    const discoveredIds = getDiscoveredBibleBookIds(a, annexProgress, finalBooks);
    let nextBooks = storedBooks;
    for (const id of discoveredIds) nextBooks = await markBibleBookDiscovered(id);
    setCompleted(a); setGames(g);
    setCompletedAnnexes(annexProgress);
    setBibleBooks(Object.keys(nextBooks).filter(id => BIBLE_BOOKS.some(book => book.id === id)).length);
  }, []);
  useFocusEffect(useCallback(() => { void load(); }, [load]));
  const completedIds = useMemo(() => getCompletedEpisodeIds(completed), [completed]);
  const unlockedIds = useMemo(() => Array.from(new Set([
    ...getUnlockedCharacterIds(completedIds),
    ...CHARACTER_ANNEXES.filter(annex => completedAnnexes.includes(annex.id)).map(annex => annex.characterId),
  ])), [completedIds, completedAnnexes]);
  const unlockedCharacters = useMemo(() => characterProfiles.filter(c => unlockedIds.includes(c.id)), [unlockedIds]);
  const totalEpisodes = SEASONS.reduce((sum, season) => sum + season.episodes.length, 0);
  const adventureComplete = completedIds.length === totalEpisodes && totalEpisodes === 116;
  const seasonsCompleted = SEASONS.filter(season => season.episodes.length > 0 && season.episodes.every(ep => completedIds.includes(ep.id))).length;
  const ctx = { episodes: completedIds.length, characters: unlockedIds.length, games, adventureComplete, seasonsCompleted, books: bibleBooks };
  const unlockedBadges = BADGES.filter(b => b.unlocked(ctx));
  const badgeGroups = BADGE_CATEGORIES.map(category => ({ ...category, badges: BADGES.filter(b => b.category === category.id) }));
  const recentStories = SEASONS.flatMap(s => s.episodes).filter(e => completedIds.includes(e.id)).slice(-6).reverse();
  return <ScenicScreen><ScrollView style={styles.screen} contentContainerStyle={styles.content}>
    <Pressable onPress={() => router.back()}><Text style={{ color: colors.accent, fontWeight: '900' }}>‹ Retour</Text></Pressable>
    <View style={{ marginTop: 20 }}><Text style={styles.eyebrow}>📖 COLLECTION</Text><Text style={[styles.title, { marginTop: 7 }]}>Ma Bible</Text><Text style={styles.subtitle}>Tout ce que ton aventure t’a permis de découvrir, réuni au même endroit.</Text></View>
    <View style={[styles.glowCard, { marginTop: 18, paddingBottom: 15 }]}>
      <Text style={{ color: colors.accent, fontSize: 10, fontWeight: '900', letterSpacing: 1.5 }}>TON PARCOURS</Text>
      <Text style={{ color: colors.text, fontSize: 22, fontWeight: '900', marginTop: 7 }}>Tu construis ta collection</Text>
      <View style={{ height: 7, backgroundColor: colors.border, borderRadius: 8, overflow: 'hidden', marginTop: 12 }}><View style={{ width: (Math.round((completedIds.length / 116) * 100) + '%') as any, height: '100%', backgroundColor: colors.accent }} /></View>
      <Text style={{ color: colors.muted, fontSize: 11, marginTop: 5 }}>{completedIds.length}/116 histoires</Text>
      <View style={{ flexDirection: 'row', gap: 8, marginTop: 12 }}><Stat value={unlockedIds.length + '/'+ characterProfiles.length} label="personnages" /><Stat value={bibleBooks + '/66'} label="livres" /><Stat value={unlockedBadges.length + '/' + BADGES.length} label="badges" /></View>
    </View>
    <Pressable onPress={() => router.push('/bible/books')} style={[styles.glowCard, { marginTop: 14 }]}>
      <Text style={{ color: colors.accent, fontSize: 10, fontWeight: '900', letterSpacing: 1.4 }}>📖 MON PARCOURS BIBLIQUE</Text>
      <Text style={{ color: colors.text, fontSize: 21, fontWeight: '900', marginTop: 6 }}>{bibleBooks}/66 livres découverts</Text>
      <Text style={{ color: colors.muted, lineHeight: 19, marginTop: 5 }}>Découvre les livres rencontrés dans ton parcours, puis lis-les en entier sur JW.org.</Text>
      <Text style={{ color: colors.accent, fontWeight: '900', marginTop: 10 }}>Voir les 66 livres ›</Text>
    </Pressable>
    <SectionTitle title="👤 Personnages découverts" action="Voir les personnages ›" onPress={() => router.push('/characters')} />
    <View style={{ gap: 9 }}>{unlockedCharacters.slice(-6).reverse().map(character => <Pressable key={character.id} onPress={() => router.push({ pathname: '/characters', params: { characterId: character.id } })} style={styles.card}><View style={{ flexDirection: 'row', alignItems: 'center' }}><View style={{ width: 42, height: 42, borderRadius: 21, backgroundColor: colors.surface2, borderWidth: 1, borderColor: colors.accent, alignItems: 'center', justifyContent: 'center' }}><Text style={{ fontSize: 20 }}>👤</Text></View><View style={{ flex: 1, marginLeft: 12 }}><Text style={{ color: colors.text, fontSize: 16, fontWeight: '900' }}>{character.name}</Text><Text style={{ color: colors.muted, fontSize: 11, marginTop: 2 }}>{character.role}</Text></View><Text style={{ color: colors.accent, fontSize: 20 }}>›</Text></View></Pressable>)}{unlockedCharacters.length === 0 ? <Empty text="Termine une histoire qui présente un personnage pour commencer ta collection." /> : null}</View>
    <SectionTitle title="🏅 Tes badges" action="" onPress={() => {}} />
    <Text style={{ color: colors.muted, fontSize: 12, lineHeight: 18, marginBottom: 2 }}>Des récompenses pour avancer, collectionner et jouer.</Text>
    <View style={{ gap: 18 }}>{badgeGroups.map(group => {
      const groupUnlocked = group.badges.filter(b => b.unlocked(ctx)).length;
      return <View key={group.id}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 9 }}>
          <Text style={{ fontSize: 20 }}>{group.icon}</Text>
          <View style={{ marginLeft: 8, flex: 1 }}><Text style={{ color: colors.text, fontSize: 16, fontWeight: '900' }}>{group.title}</Text><Text style={{ color: colors.muted, fontSize: 10, marginTop: 1 }}>{groupUnlocked}/{group.badges.length} débloqués</Text></View>
        </View>
        <View style={{ gap: 8 }}>{group.badges.map(badge => {
          const ok = badge.unlocked(ctx); const progress = getBadgeProgress(badge, ctx);
          return <View key={badge.id} style={[styles.card, { paddingVertical: 11 }, !ok && { opacity: .62 }]}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: ok ? colors.surface2 : colors.background, alignItems: 'center', justifyContent: 'center' }}><Text style={{ fontSize: 22 }}>{ok ? badge.icon : '🔒'}</Text></View>
              <View style={{ flex: 1, marginLeft: 10 }}><Text style={{ color: ok ? colors.text : colors.muted, fontSize: 14, fontWeight: '900' }}>{ok ? badge.title : (badge.secret ? '???' : badge.title)}</Text><Text style={{ color: colors.muted, fontSize: 11, lineHeight: 16, marginTop: 2 }}>{ok || !badge.secret ? badge.description : 'Découvre comment obtenir ce badge.'}</Text></View>
            </View>
            {!ok ? <View style={{ height: 4, backgroundColor: colors.border, borderRadius: 5, overflow: 'hidden', marginTop: 9 }}><View style={{ width: (Math.round(progress * 100) + '%') as any, height: '100%', backgroundColor: colors.accent }} /></View> : null}
          </View>;
        })}</View>
      </View>;
    })}</View>
    <SectionTitle title="📚 Dernières histoires" action="Continuer l’Aventure ›" onPress={() => router.push('/adventure')} /><View style={{ gap: 9 }}>{recentStories.map(ep => <Pressable key={ep.id} onPress={() => router.push({ pathname: '/adventure/episode', params: { id: ep.id } })} style={styles.card}><Text style={{ color: colors.accent, fontSize: 10, fontWeight: '900', letterSpacing: 1.2 }}>HISTOIRE {ep.number}</Text><Text style={{ color: colors.text, fontSize: 15, fontWeight: '900', marginTop: 4 }}>{ep.title}</Text></Pressable>)}{!recentStories.length ? <Empty text="Ton parcours apparaîtra ici dès ta première histoire." /> : null}</View>
    <SectionTitle title="🎮 Tes parties" action="" onPress={() => {}} />
    <View style={[styles.glowCard, { marginTop: 2 }]}>
      <Text style={{ color: colors.text, fontSize: 28, fontWeight: '900' }}>{games}</Text>
      <Text style={{ color: colors.muted, fontSize: 12, fontWeight: '800', marginTop: 3 }}>parties de Bible Party terminées</Text>
      <Text style={{ color: colors.muted, lineHeight: 19, marginTop: 8 }}>Chaque partie terminée fait progresser ta collection et peut débloquer de nouveaux badges.</Text>
    </View>
  </ScrollView></ScenicScreen>;
}
function Stat({ value, label }: { value: string; label: string }) { return <View style={{ flex: 1, padding: 12, borderRadius: 15, backgroundColor: colors.surface2, borderWidth: 1, borderColor: colors.border }}><Text style={{ color: colors.accent, fontSize: 17, fontWeight: '900' }}>{value}</Text><Text style={{ color: colors.muted, fontSize: 10, fontWeight: '800', marginTop: 2 }}>{label}</Text></View>; }
function SectionTitle({ title, action, onPress }: { title: string; action: string; onPress: () => void }) { return <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 22, marginBottom: 9 }}><Text style={styles.sectionTitle}>{title}</Text>{action ? <Pressable onPress={onPress}><Text style={{ color: colors.accent, fontSize: 11, fontWeight: '900' }}>{action}</Text></Pressable> : null}</View>; }
function Empty({ text }: { text: string }) { return <View style={[styles.card, { alignItems: 'center' }]}><Text style={{ color: colors.muted, textAlign: 'center', lineHeight: 20 }}>{text}</Text></View>; }