import React, { useCallback, useMemo, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { router, useFocusEffect } from 'expo-router';
import { ScenicScreen } from '@/components/ScenicScreen';
import { colors } from '@/theme/colors';
import { styles } from '@/theme/styles';
import { BADGES, BADGE_CATEGORIES, getBadgeProgress } from '@/data/badges';
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
import { getAdventureProgress, getBibleBookProgress, getCharacterAnnexProgress, getFinalBibleBookProgress, getGamesPlayed, markBibleBookDiscovered } from '@/lib/storage';
import { CHARACTER_ANNEXES } from '@/data/characterAnnexes';
import { getDiscoveredBibleBookIds } from '@/lib/bibleBookProgress';

const SEASONS = [SEASON_1,SEASON_2,SEASON_3,SEASON_4,SEASON_5,SEASON_6,SEASON_7,SEASON_8];
const FINAL_CHARACTER_ARCHIVE_IDS = new Set(['eve','cain','abel','henoch','lot','rebecca','rachel','benjamin','dinah','aaron','miriam','caleb','rahab','deborah','barak','jael','gideon','jephthah','jonathan','goliath','abigail','nabal','jezebel','mordecai','haman','nicodeme','lazare','judas_iscariote','matthias','matthew','marc','luc','gad','nathan','sons_korah','asaph','heman','ethan','agur','lemuel','job','pharaoh','jochebed','pharaoh_daughter','jesus','absalom','rehoboam','jeroboam','shadrach','meshach','abednego','nebuchadnezzar']);

export default function BibleBadgesScreen() {
  const [ctx, setCtx] = useState({ episodes: 0, characters: 0, games: 0, adventureComplete: false, seasonsCompleted: 0, books: 0 });
  const load = useCallback(async () => {
    const [completed, games, annexes, storedBooks, finalBooks] = await Promise.all([getAdventureProgress(), getGamesPlayed(), getCharacterAnnexProgress(), getBibleBookProgress(), getFinalBibleBookProgress()]);
    const validEpisodes = SEASONS.flatMap(s => s.episodes);
    const ids = new Set(completed);
    const episodes = validEpisodes.filter(e => ids.has(e.id));
    const adventureComplete = validEpisodes.length === 116 && validEpisodes.every(e => ids.has(e.id));
    const characters = new Set([
      ...episodes.flatMap(e => e.characterIds ?? []),
      ...CHARACTER_ANNEXES.filter(a => annexes.includes(a.id)).map(a => a.characterId),
      ...(adventureComplete ? Array.from(FINAL_CHARACTER_ARCHIVE_IDS) : []),
    ]).size;
    const seasonsCompleted = SEASONS.filter(s => s.episodes.length > 0 && s.episodes.every(e => ids.has(e.id))).length;
    const discovered = getDiscoveredBibleBookIds(completed, annexes, finalBooks);
    let nextBooks = storedBooks;
    for (const id of discovered) nextBooks = await markBibleBookDiscovered(id);
    setCtx({ episodes: episodes.length, characters, games, adventureComplete, seasonsCompleted, books: Object.keys(nextBooks).filter(id => BIBLE_BOOKS.some(b => b.id === id)).length });
  }, []);
  useFocusEffect(useCallback(() => { void load(); }, [load]));
  const unlocked = useMemo(() => BADGES.filter(b => b.unlocked(ctx)).length, [ctx]);
  return <ScenicScreen><ScrollView style={styles.screen} contentContainerStyle={styles.content}>
    <Pressable onPress={() => router.back()}><Text style={{ color: colors.accent, fontWeight: '900' }}>‹ Ma Bible</Text></Pressable>
    <Text style={[styles.eyebrow, { marginTop: 20 }]}>🏅 RÉCOMPENSES</Text>
    <Text style={[styles.title, { marginTop: 7 }]}>Badges</Text>
    <Text style={styles.subtitle}>Des récompenses pour avancer, collectionner et jouer.</Text>
    <View style={[styles.glowCard, { marginTop: 18 }]}>
      <Text style={{ color: colors.accent, fontSize: 12, fontWeight: '900', letterSpacing: 1.2 }}>TA COLLECTION</Text>
      <Text style={{ color: colors.text, fontSize: 28, fontWeight: '900', marginTop: 5 }}>{unlocked}/{BADGES.length}</Text>
      <Text style={{ color: colors.muted, fontSize: 11, marginTop: 4 }}>badges débloqués</Text>
    </View>
    <View style={{ gap: 20, marginTop: 22 }}>{BADGE_CATEGORIES.map(category => {
      const badges = BADGES.filter(b => b.category === category.id);
      const done = badges.filter(b => b.unlocked(ctx)).length;
      return <View key={category.id}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 9 }}><Text style={{ fontSize: 22 }}>{category.icon}</Text><View style={{ flex: 1, marginLeft: 9 }}><Text style={{ color: colors.text, fontSize: 17, fontWeight: '900' }}>{category.title}</Text><Text style={{ color: colors.muted, fontSize: 11, marginTop: 1 }}>{done}/{badges.length} débloqués</Text></View></View>
        <View style={{ gap: 8 }}>{badges.map(badge => {
          const ok = badge.unlocked(ctx); const progress = getBadgeProgress(badge, ctx);
          return <View key={badge.id} style={[styles.card, !ok && { opacity: .62 }]}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}><View style={{ width: 42, height: 42, borderRadius: 21, backgroundColor: ok ? colors.surface2 : colors.bg, alignItems: 'center', justifyContent: 'center' }}><Text style={{ fontSize: 22 }}>{ok ? badge.icon : '🔒'}</Text></View><View style={{ flex: 1, marginLeft: 11 }}><Text style={{ color: ok ? colors.text : colors.muted, fontSize: 14, fontWeight: '900' }}>{ok || !badge.secret ? badge.title : '???'}</Text><Text style={{ color: colors.muted, fontSize: 11, lineHeight: 16, marginTop: 2 }}>{ok || !badge.secret ? badge.description : 'Badge secret à découvrir.'}</Text></View></View>
            {!ok ? <View style={{ height: 4, backgroundColor: colors.border, borderRadius: 5, overflow: 'hidden', marginTop: 9 }}><View style={{ width: `${Math.round(progress * 100)}%`, height: '100%', backgroundColor: colors.accent }} /></View> : null}
          </View>;
        })}</View>
      </View>;
    })}</View>
  </ScrollView></ScenicScreen>;
}
