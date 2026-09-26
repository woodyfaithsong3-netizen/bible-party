import React, { useMemo, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { ScenicScreen } from '@/components/ScenicScreen';
import { colors } from '@/theme/colors';
import { styles } from '@/theme/styles';
import { CHARACTER_ANNEXES } from '@/data/characterAnnexes';
import { characterProfiles } from '@/data/characterProfiles';
import { getAdventureProgress, getCharacterAnnexProgress, markCharacterAnnexComplete } from '@/lib/storage';
import { SEASON_1 } from '@/data/adventure';
import { SEASON_2 } from '@/data/adventureSeason2';
import { SEASON_3 } from '@/data/adventureSeason3';
import { SEASON_4 } from '@/data/adventureSeason4';
import { SEASON_5 } from '@/data/adventureSeason5';
import { SEASON_6 } from '@/data/adventureSeason6';
import { SEASON_7 } from '@/data/adventureSeason7';
import { SEASON_8 } from '@/data/adventureSeason8';

export default function CharacterAnnexesScreen() {
  const params = useLocalSearchParams<{ id?: string }>();
  const [completed, setCompleted] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [finished, setFinished] = useState(false);
  const [adventureCompleted, setAdventureCompleted] = useState<string[]>([]);
  const annex = useMemo(() => CHARACTER_ANNEXES.find(x => x.id === params.id), [params.id]);
  const profile = annex ? characterProfiles.find(x => x.id === annex.characterId) : null;

  React.useEffect(() => {
    void Promise.all([getCharacterAnnexProgress(), getAdventureProgress()]).then(([annexProgress, adventureProgress]) => {
      setCompleted(annexProgress);
      setAdventureCompleted(adventureProgress);
    });
  }, []);

  const seasons = [SEASON_1, SEASON_2, SEASON_3, SEASON_4, SEASON_5, SEASON_6, SEASON_7, SEASON_8];
  const isAvailable = (item: typeof CHARACTER_ANNEXES[number]) => {
    const season = seasons.find(s => s.number === item.seasonNumber);
    const required = season?.episodes.find(ep => ep.number === item.afterEpisode);
    return !required || adventureCompleted.includes(required.id);
  };

  const answer = async (index: number) => {
    if (!annex || finished) return;
    setSelectedAnswer(index);
    if (index === annex.questions[0].correct) {
      const next = await markCharacterAnnexComplete(annex.id);
      setCompleted(next);
      setFinished(true);
    }
  };

  if (annex && profile && !isAvailable(annex) && !completed.includes(annex.id)) {
    return <ScenicScreen><View style={styles.content}>
      <Pressable onPress={() => router.replace('/adventure/annexes')}><Text style={{ color: colors.accent, fontWeight: '900' }}>‹ Découvertes annexes</Text></Pressable>
      <View style={[styles.glowCard, { marginTop: 24, alignItems: 'center' }]}>
        <Text style={{ fontSize: 42 }}>🔒</Text>
        <Text style={[styles.title, { textAlign: 'center', marginTop: 10 }]}>Découverte encore verrouillée</Text>
        <Text style={{ color: colors.muted, textAlign: 'center', lineHeight: 21, marginTop: 8 }}>Termine d’abord l’histoire {annex.afterEpisode} de la saison {annex.seasonNumber}. Cette annexe apparaîtra ensuite dans ton parcours.</Text>
        <Pressable onPress={() => router.replace('/adventure')} style={[styles.button, styles.buttonPrimary, { width: '100%', marginTop: 18 }]}><Text style={styles.buttonText}>Retour à l’Aventure ›</Text></Pressable>
      </View>
    </View></ScenicScreen>;
  }

  if (annex && profile) {
    const question = annex.questions[0];
    return <ScenicScreen><ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Pressable onPress={() => router.replace('/adventure/annexes')}><Text style={{ color: colors.accent, fontWeight: '900' }}>‹ Découvertes annexes</Text></Pressable>
      <View style={{ marginTop: 24, alignItems: 'center' }}>
        <Text style={{ fontSize: 46 }}>📜</Text>
        <Text style={{ color: colors.accent, fontSize: 10, fontWeight: '900', letterSpacing: 1.7, marginTop: 10 }}>ANNEXE DE DÉCOUVERTE</Text>
        <Text style={[styles.title, { textAlign: 'center', marginTop: 6 }]}>{annex.title}</Text>
        <Text style={[styles.subtitle, { textAlign: 'center', marginTop: 5 }]}>{annex.period}</Text>
      </View>
      <View style={[styles.glowCard, { marginTop: 22 }]}>
        <Text style={{ color: colors.text, lineHeight: 23 }}>{annex.story}</Text>
      </View>
      {!finished ? <View style={[styles.card, { marginTop: 14 }]}>
        <Text style={{ color: colors.accent, fontSize: 10, fontWeight: '900', letterSpacing: 1.4 }}>❓ QUESTION RAPIDE</Text>
        <Text style={{ color: colors.text, fontSize: 17, fontWeight: '900', lineHeight: 23, marginTop: 8 }}>{question.prompt}</Text>
        <View style={{ marginTop: 12, gap: 8 }}>
          {question.choices.map((choice, index) => <Pressable key={choice} onPress={() => answer(index)} style={{ padding: 13, borderRadius: 15, borderWidth: 1, borderColor: selectedAnswer === index ? colors.accent : colors.border, backgroundColor: selectedAnswer === index ? colors.surface2 : colors.surface }}>
            <Text style={{ color: colors.text, fontWeight: '800' }}>{choice}</Text>
          </Pressable>)}
        </View>
      </View> : <View style={[styles.glowCard, { marginTop: 14, alignItems: 'center' }]}>
        <Text style={{ fontSize: 38 }}>✨</Text>
        <Text style={{ color: colors.accent, fontSize: 11, fontWeight: '900', letterSpacing: 1.5, marginTop: 6 }}>NOUVEAU PERSONNAGE DÉBLOQUÉ</Text>
        <Text style={{ color: colors.text, fontSize: 24, fontWeight: '900', marginTop: 6, textAlign: 'center' }}>{profile.name}</Text>
        <Text style={{ color: colors.muted, textAlign: 'center', marginTop: 5 }}>Sa fiche est maintenant disponible dans Ma Bible.</Text>
        <Pressable onPress={() => router.push({ pathname: '/characters', params: { characterId: profile.id } })} style={[styles.button, styles.buttonPrimary, { width: '100%', marginTop: 18 }]}>
          <Text style={styles.buttonText}>Voir la fiche ›</Text>
        </Pressable>
      </View>}
    </ScrollView></ScenicScreen>;
  }

  return <ScenicScreen><ScrollView style={styles.screen} contentContainerStyle={styles.content}>
    <Pressable onPress={() => router.back()}><Text style={{ color: colors.accent, fontWeight: '900' }}>‹ Aventure</Text></Pressable>
    <Text style={[styles.eyebrow, { marginTop: 22 }]}>📜 ANNEXES</Text>
    <Text style={[styles.title, { marginTop: 7 }]}>Découvertes de personnages</Text>
    <Text style={styles.subtitle}>De courtes histoires complémentaires pour rencontrer des personnages qui ne trouvent pas naturellement leur place dans les 116 histoires principales.</Text>
    <View style={{ marginTop: 18, padding: 14, borderRadius: 18, backgroundColor: colors.surface2, borderWidth: 1, borderColor: colors.borderStrong }}>
      <Text style={{ color: colors.text, fontWeight: '900' }}>{completed.length}/{CHARACTER_ANNEXES.length} découvertes</Text>
      <Text style={{ color: colors.muted, lineHeight: 19, marginTop: 5 }}>Chaque annexe est volontairement courte : une histoire, une question rapide, puis le personnage rejoint ta collection.</Text>
    </View>
    <View style={{ marginTop: 16, gap: 9 }}>
      {CHARACTER_ANNEXES.map(item => {
        const done = completed.includes(item.id);
        const p = characterProfiles.find(x => x.id === item.characterId);
        const available = isAvailable(item);
        return <Pressable key={item.id} disabled={!available} onPress={() => available && router.push({ pathname: '/adventure/annexes', params: { id: item.id } })} style={[styles.card, { padding: 14, opacity: available ? 1 : .52 }]}>
          <Text style={{ color: colors.accent, fontSize: 9, fontWeight: '900', letterSpacing: 1.2 }}>{done ? '✓ DÉCOUVERT' : available ? '📜 À DÉCOUVRIR' : '🔒 VERROUILLÉ'}</Text>
          <Text style={{ color: colors.text, fontSize: 17, fontWeight: '900', marginTop: 5 }}>{p?.name ?? item.characterId}</Text>
          <Text numberOfLines={2} style={{ color: colors.muted, lineHeight: 19, marginTop: 4 }}>{item.story}</Text>
          <Text style={{ color: colors.accent, fontWeight: '900', marginTop: 8 }}>{!available ? ('Après l’histoire ' + item.afterEpisode + ' ›') : done ? 'Rejouer ›' : 'Découvrir ›'}</Text>
        </Pressable>;
      })}
    </View>
  </ScrollView></ScenicScreen>;
}
