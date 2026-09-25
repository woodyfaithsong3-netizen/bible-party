import React, { useCallback, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { router, useFocusEffect } from 'expo-router';
import { ScenicScreen } from '@/components/ScenicScreen';
import { colors } from '@/theme/colors';
import { styles } from '@/theme/styles';
import { SEASON_1 } from '@/data/adventure';
import { SEASON_2 } from '@/data/adventureSeason2';
import { SEASON_3 } from '@/data/adventureSeason3';
import { SEASON_4 } from '@/data/adventureSeason4';
import { SEASON_5 } from '@/data/adventureSeason5';
import { SEASON_6 } from '@/data/adventureSeason6';
import { SEASON_7 } from '@/data/adventureSeason7';
import { SEASON_8 } from '@/data/adventureSeason8';
import { getAdventureProgress } from '@/lib/storage';

const SEASONS = [SEASON_1, SEASON_2, SEASON_3, SEASON_4, SEASON_5, SEASON_6, SEASON_7, SEASON_8];

export default function AdventureScreen() {
  const [completed, setCompleted] = useState<string[]>([]);
  const [selectedSeason, setSelectedSeason] = useState(0);
  const [showSeasonIntro, setShowSeasonIntro] = useState(false);

  useFocusEffect(useCallback(() => {
    void getAdventureProgress().then(setCompleted);
  }, []));

  const activeSeason = SEASONS[selectedSeason];
  const activeCompletedCount = activeSeason.episodes.filter(ep => completed.includes(ep.id)).length;
  const progress = Math.round((activeCompletedCount / activeSeason.episodes.length) * 100);

  const selectSeason = (seasonIndex: number) => {
    setSelectedSeason(seasonIndex);
    setShowSeasonIntro(true);
  };

  if (showSeasonIntro) {
    return (
      <ScenicScreen>
        <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
          <Pressable onPress={() => setShowSeasonIntro(false)}>
            <Text style={{ color: colors.accent, fontWeight: '900' }}>‹ Saisons</Text>
          </Pressable>

          <View style={{ marginTop: 26, alignItems: 'center' }}>
            <Text style={{ fontSize: 46 }}>{['🌍','🌈','🏜️','👑','🏛️','✝️','🔥','🌳'][selectedSeason]}</Text>
            <Text style={{ color: colors.accent, fontSize: 11, fontWeight: '900', letterSpacing: 2, marginTop: 14 }}>SAISON {activeSeason.number}</Text>
            <Text style={[styles.title, { textAlign: 'center', marginTop: 7 }]}>{activeSeason.title}</Text>
            <Text style={[styles.subtitle, { textAlign: 'center', marginTop: 6 }]}>{activeSeason.subtitle}</Text>
          </View>

          <View style={[styles.glowCard, { marginTop: 24 }]}>
            <Text style={{ color: colors.accent, fontSize: 11, fontWeight: '900', letterSpacing: 1.5 }}>🎬 AVANT DE COMMENCER</Text>
            <Text style={{ color: colors.text, fontSize: 22, fontWeight: '900', lineHeight: 28, marginTop: 8 }}>{activeSeason.seasonIntro.title}</Text>
            <Text style={{ color: colors.text, lineHeight: 22, marginTop: 12 }}>{activeSeason.seasonIntro.story}</Text>
            <Text style={{ color: colors.muted, lineHeight: 21, marginTop: 12 }}>{activeSeason.seasonIntro.transition}</Text>
          </View>

          <View style={{ marginTop: 14, padding: 16, borderRadius: 20, backgroundColor: colors.surface2, borderWidth: 1, borderColor: colors.borderStrong }}>
            <Text style={{ color: colors.accent, fontSize: 10, fontWeight: '900', letterSpacing: 1.5 }}>🧵 LE FIL DE LA SAISON</Text>
            <Text style={{ color: colors.muted, lineHeight: 20, marginTop: 7 }}>{activeSeason.seasonIntro.thread}</Text>
          </View>

          <View style={{ marginTop: 14, padding: 16, borderRadius: 20, backgroundColor: colors.surface2, borderWidth: 1, borderColor: colors.border }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: colors.text, fontWeight: '900' }}>{activeCompletedCount}/{activeSeason.episodes.length} épisodes</Text>
              <Text style={{ color: colors.accent, fontWeight: '900' }}>{progress}%</Text>
            </View>
            <View style={{ height: 7, backgroundColor: colors.border, borderRadius: 8, overflow: 'hidden', marginTop: 10 }}>
              <View style={{ width: `${progress}%`, height: '100%', backgroundColor: colors.accent }} />
            </View>
          </View>

          <Pressable onPress={() => setShowSeasonIntro(false)} style={[styles.button, styles.buttonPrimary, { marginTop: 22 }]}>
            <Text style={styles.buttonText}>Commencer les épisodes ›</Text>
          </Pressable>
        </ScrollView>
      </ScenicScreen>
    );
  }

  return (
    <ScenicScreen>
      <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
        <Pressable onPress={() => router.back()}><Text style={{ color: colors.accent, fontWeight: '900' }}>‹ Retour</Text></Pressable>

        <View style={{ marginTop: 22 }}>
          <Text style={styles.eyebrow}>🗺️ AVENTURE</Text>
          <Text style={[styles.title, { marginTop: 7 }]}>Les saisons</Text>
          <Text style={styles.subtitle}>Choisis une saison pour découvrir son histoire.</Text>
        </View>

        <View style={{ marginTop: 22 }}>
          <Text style={styles.sectionTitle}>CHOISIR UNE SAISON</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 9, marginTop: 10 }}>
            {SEASONS.map((season, seasonIndex) => {
              const count = season.episodes.filter(ep => completed.includes(ep.id)).length;
              return (
                <Pressable
                  key={season.id}
                  onPress={() => selectSeason(seasonIndex)}
                  style={({ pressed }) => [{
                    width: '23%',
                    minWidth: 72,
                    flexGrow: 1,
                    paddingVertical: 12,
                    paddingHorizontal: 8,
                    borderRadius: 16,
                    borderWidth: 1,
                    borderColor: colors.border,
                    backgroundColor: colors.surface2,
                  }, pressed && { transform: [{ scale: .97 }] }]}
                >
                  <Text style={{ color: colors.muted, fontSize: 9, fontWeight: '900', letterSpacing: 1, textAlign: 'center' }}>SAISON</Text>
                  <Text style={{ color: colors.text, fontSize: 20, fontWeight: '900', textAlign: 'center', marginTop: 2 }}>{season.number}</Text>
                  <Text style={{ color: colors.muted, fontSize: 9, marginTop: 2, textAlign: 'center' }}>{count}/{season.episodes.length}</Text>
                </Pressable>
              );
            })}
          </View>
        </View>

        <View style={[styles.card, { marginTop: 18 }]}>
          <Text style={{ color: colors.accent, fontSize: 12, fontWeight: '900', letterSpacing: 1.3 }}>🧭 COMMENT ÇA MARCHE</Text>
          <Text style={{ color: colors.text, fontSize: 16, fontWeight: '900', lineHeight: 22, marginTop: 7 }}>Découvre l’histoire, joue, puis retiens l’essentiel.</Text>
          <Text style={{ color: colors.muted, lineHeight: 20, marginTop: 6 }}>Chaque saison commence par une courte introduction. Ensuite, chaque épisode te fait découvrir une histoire avant de passer aux questions.</Text>
        </View>
      </ScrollView>
    </ScenicScreen>
  );
}
