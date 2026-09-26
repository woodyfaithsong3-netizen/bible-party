import React, { useCallback, useMemo, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { router, useFocusEffect } from 'expo-router';
import { ScenicScreen } from '@/components/ScenicScreen';
import { colors } from '@/theme/colors';
import { styles } from '@/theme/styles';
import { characterProfiles } from '@/data/characterProfiles';
import { CHARACTER_ANNEXES } from '@/data/characterAnnexes';
import { SEASON_1 } from '@/data/adventure';
import { SEASON_2 } from '@/data/adventureSeason2';
import { SEASON_3 } from '@/data/adventureSeason3';
import { SEASON_4 } from '@/data/adventureSeason4';
import { SEASON_5 } from '@/data/adventureSeason5';
import { SEASON_6 } from '@/data/adventureSeason6';
import { SEASON_7 } from '@/data/adventureSeason7';
import { SEASON_8 } from '@/data/adventureSeason8';
import { getAdventureProgress, getCharacterAnnexProgress } from '@/lib/storage';

const SEASONS = [SEASON_1, SEASON_2, SEASON_3, SEASON_4, SEASON_5, SEASON_6, SEASON_7, SEASON_8];
const FINAL_CHARACTER_ARCHIVE_IDS = new Set(['eve','cain','abel','henoch','lot','rebecca','rachel','benjamin','dinah','aaron','miriam','caleb','rahab','deborah','barak','jael','gideon','jephthah','jonathan','goliath','abigail','nabal','jezebel','mordecai','haman','nicodeme','lazare','judas_iscariote','matthias','matthew','marc','luc','gad','nathan','sons_korah','asaph','heman','ethan','agur','lemuel','job','pharaoh','jochebed','pharaoh_daughter','jesus','absalom','rehoboam','jeroboam','shadrach','meshach','abednego','nebuchadnezzar']);

export default function BibleCharactersScreen() {
  const [completed, setCompleted] = useState<string[]>([]);
  const [annexes, setAnnexes] = useState<string[]>([]);
  useFocusEffect(useCallback(() => {
    void Promise.all([getAdventureProgress(), getCharacterAnnexProgress()]).then(([a, x]) => { setCompleted(a); setAnnexes(x); });
  }, []));
  const unlocked = useMemo(() => {
    const done = new Set(completed);
    const adventureComplete = SEASONS.every(s => s.episodes.length > 0 && s.episodes.every(e => done.has(e.id)));
    return new Set([
      ...SEASONS.flatMap(s => s.episodes.filter(e => done.has(e.id)).flatMap(e => e.characterIds ?? [])),
      ...CHARACTER_ANNEXES.filter(a => annexes.includes(a.id)).map(a => a.characterId),
      ...(adventureComplete ? Array.from(FINAL_CHARACTER_ARCHIVE_IDS) : []),
    ]);
  }, [completed, annexes]);
  const count = characterProfiles.filter(c => unlocked.has(c.id)).length;
  return <ScenicScreen><ScrollView style={styles.screen} contentContainerStyle={styles.content}>
    <Pressable onPress={() => router.back()}><Text style={{ color: colors.accent, fontWeight: '900' }}>‹ Ma Bible</Text></Pressable>
    <Text style={[styles.eyebrow, { marginTop: 20 }]}>👤 COLLECTION</Text>
    <Text style={[styles.title, { marginTop: 7 }]}>Personnages</Text>
    <Text style={styles.subtitle}>Découvre les personnages au fil de l’Aventure.</Text>
    <View style={[styles.glowCard, { marginTop: 18 }]}>
      <Text style={{ color: colors.accent, fontSize: 12, fontWeight: '900', letterSpacing: 1.2 }}>TA COLLECTION</Text>
      <Text style={{ color: colors.text, fontSize: 28, fontWeight: '900', marginTop: 5 }}>{count}/{characterProfiles.length}</Text>
      <View style={{ height: 7, backgroundColor: colors.border, borderRadius: 8, overflow: 'hidden', marginTop: 10 }}><View style={{ width: `${Math.round(count / characterProfiles.length * 100)}%`, height: '100%', backgroundColor: colors.accent }} /></View>
      <Text style={{ color: colors.muted, fontSize: 11, marginTop: 6 }}>{characterProfiles.length - count} personnages restent à découvrir.</Text>
    </View>
    <Text style={[styles.sectionTitle, { marginTop: 24 }]}>Ta collection</Text>
    <View style={{ gap: 9 }}>{characterProfiles.map(character => {
      const ok = unlocked.has(character.id);
      return <Pressable key={character.id} disabled={!ok} onPress={() => router.push({ pathname: '/characters', params: { characterId: character.id } })} style={[styles.card, !ok && { opacity: .58 }]}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ width: 44, height: 44, borderRadius: 22, backgroundColor: ok ? colors.surface2 : colors.bg, borderWidth: 1, borderColor: ok ? colors.accent : colors.border, alignItems: 'center', justifyContent: 'center' }}><Text style={{ fontSize: 21 }}>{ok ? '👤' : '🔒'}</Text></View>
          <View style={{ flex: 1, marginLeft: 12 }}><Text style={{ color: ok ? colors.text : colors.muted, fontSize: 15, fontWeight: '900' }}>{ok ? character.name : '???'}</Text><Text style={{ color: colors.muted, fontSize: 11, marginTop: 2 }}>{ok ? character.role : 'Personnage à découvrir dans l’Aventure'}</Text></View>
          {ok ? <Text style={{ color: colors.accent, fontSize: 20 }}>›</Text> : null}
        </View>
      </Pressable>;
    })}</View>
  </ScrollView></ScenicScreen>;
}
