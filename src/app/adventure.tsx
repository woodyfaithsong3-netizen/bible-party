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
import { getAdventureProgress, getCharacterAnnexProgress } from '@/lib/storage';
import { CHARACTER_ANNEXES } from '@/data/characterAnnexes';

const SEASONS = [SEASON_1, SEASON_2, SEASON_3, SEASON_4, SEASON_5, SEASON_6, SEASON_7, SEASON_8];

export default function AdventureScreen() {
  const [completed, setCompleted] = useState<string[]>([]);
  const [completedAnnexes, setCompletedAnnexes] = useState<string[]>([]);
  const [selectedSeason, setSelectedSeason] = useState(0);
  const [showSeasonIntro, setShowSeasonIntro] = useState(false);

  useFocusEffect(useCallback(() => {
    void getAdventureProgress().then(setCompleted);
    void getCharacterAnnexProgress().then(setCompletedAnnexes);
  }, []));

  const activeSeason = SEASONS[selectedSeason];
  const activeCompletedCount = activeSeason.episodes.filter(ep => completed.includes(ep.id)).length;
  const progress = Math.round((activeCompletedCount / activeSeason.episodes.length) * 100);

  const selectSeason = (seasonIndex: number) => {
    setSelectedSeason(seasonIndex);
    setShowSeasonIntro(true);
  };

  const startSeason = () => {
    const firstEpisode = activeSeason.episodes[0];
    if (!firstEpisode) return;
    router.replace({ pathname: '/adventure/episode', params: { id: firstEpisode.id } });
  };

  if (showSeasonIntro) {
    return (
      <ScenicScreen>
        <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
          <Pressable onPress={() => setShowSeasonIntro(false)}>
            <Text style={{ color: colors.accent, fontWeight: '900' }}>‹ Saisons</Text>
          </Pressable>

          <View style={{ marginTop: 26, alignItems: 'center' }}>
            <Text style={{ fontSize: 46 }}>{['🌍','🌈','🏜️','👑','🏛️','🕊️','🔥','🌳'][selectedSeason]}</Text>
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

          {(() => {
            const seasonAnnexes = CHARACTER_ANNEXES
              .filter(item => item.seasonNumber === activeSeason.number)
              .sort((a, b) => a.afterEpisode - b.afterEpisode);
            if (!seasonAnnexes.length) return null;
            return (
              <View style={{ marginTop: 18 }}>
                <Text style={styles.sectionTitle}>📜 DÉCOUVERTES DANS CETTE SAISON</Text>
                <Text style={{ color: colors.muted, lineHeight: 20, marginTop: 6 }}>
                  Ces petites histoires s’insèrent dans la chronologie de la saison et débloquent des personnages supplémentaires.
                </Text>
                <View style={{ marginTop: 10, gap: 9 }}>
                  {seasonAnnexes.map(item => {
                    const done = completedAnnexes.includes(item.id);
                    const episodeAfter = activeSeason.episodes.find(ep => ep.number === item.afterEpisode);
                    const available = !episodeAfter || completed.includes(episodeAfter.id);
                    return (
                      <Pressable
                        key={item.id}
                        disabled={!available}
                        onPress={() => available && router.push({ pathname: '/adventure/annexes', params: { id: item.id } })}
                        style={[styles.card, { padding: 14, opacity: available ? 1 : .55 }]}
                      >
                        <Text style={{ color: colors.accent, fontSize: 9, fontWeight: '900', letterSpacing: 1.1 }}>
                          {available ? '📜 APRÈS L’HISTOIRE' : '🔒 APRÈS L’HISTOIRE'} {item.afterEpisode}
                        </Text>
                        <Text style={{ color: colors.text, fontSize: 16, fontWeight: '900', marginTop: 5 }}>{item.title}</Text>
                        <Text numberOfLines={2} style={{ color: colors.muted, lineHeight: 19, marginTop: 4 }}>{item.story}</Text>
                        <Text style={{ color: colors.accent, fontWeight: '900', marginTop: 7 }}>{!available ? 'Termine d’abord cette histoire ›' : done ? 'Rejouer ›' : 'Découvrir ›'}</Text>
                      </Pressable>
                    );
                  })}
                </View>
              </View>
            );
          })()}

          <Pressable onPress={startSeason} style={[styles.button, styles.buttonPrimary, { marginTop: 22 }]}>
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
          <Text style={styles.sectionTitle}>LE VOYAGE BIBLIQUE</Text>
          <View style={{ marginTop: 10, padding: 16, borderRadius: 22, backgroundColor: colors.surface2, borderWidth: 1, borderColor: colors.borderStrong }}>
            <Text style={{ color: colors.accent, fontSize: 11, fontWeight: '900', letterSpacing: 1.4 }}>🧵 8 ÉTAPES • 116 HISTOIRES</Text>
            <Text style={{ color: colors.text, fontSize: 17, fontWeight: '900', lineHeight: 23, marginTop: 7 }}>De la création jusqu’aux promesses pour l’avenir.</Text>
            <Text style={{ color: colors.muted, lineHeight: 20, marginTop: 6 }}>Chaque étape reprend une période de l’histoire biblique. Choisis ton point de départ, puis avance histoire après histoire.</Text>
          </View>

          <View style={{ marginTop: 12 }}>
            {SEASONS.map((season, seasonIndex) => {
              const count = season.episodes.filter(ep => completed.includes(ep.id)).length;
              const first = season.episodes[0]?.number ?? 0;
              const last = season.episodes[season.episodes.length - 1]?.number ?? 0;
              const done = season.episodes.length > 0 && count === season.episodes.length;
              const icon = ['🌍','🌈','🏜️','👑','🏛️','🕊️','🔥','🌳'][seasonIndex];
              return (
                <View key={season.id} style={{ flexDirection: 'row', minHeight: 92 }}>
                  <View style={{ width: 42, alignItems: 'center' }}>
                    <View style={{ width: 34, height: 34, borderRadius: 17, backgroundColor: done ? colors.success : colors.surface2, borderWidth: 1, borderColor: done ? colors.success : colors.borderStrong, alignItems: 'center', justifyContent: 'center' }}>
                      <Text style={{ fontSize: 16 }}>{done ? '✓' : icon}</Text>
                    </View>
                    {seasonIndex < SEASONS.length - 1 ? <View style={{ width: 2, flex: 1, backgroundColor: colors.border, marginVertical: 4 }} /> : null}
                  </View>
                  <Pressable onPress={() => selectSeason(seasonIndex)} style={({ pressed }) => [{ flex: 1, marginLeft: 10, marginBottom: 10, padding: 14, borderRadius: 18, borderWidth: 1, borderColor: colors.border, backgroundColor: colors.surface2 }, pressed && { transform: [{ scale: .985 }] }]}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Text style={{ color: colors.accent, fontSize: 9, fontWeight: '900', letterSpacing: 1.2 }}>SAISON {season.number} • {first}–{last}</Text>
                      <Text style={{ color: colors.muted, fontSize: 10, fontWeight: '800' }}>{count}/{season.episodes.length}</Text>
                    </View>
                    <Text style={{ color: colors.text, fontSize: 16, fontWeight: '900', lineHeight: 21, marginTop: 5 }}>{season.title}</Text>
                    <Text numberOfLines={2} style={{ color: colors.muted, lineHeight: 18, marginTop: 4 }}>{season.description}</Text>
                    <Text style={{ color: colors.accent, fontSize: 11, fontWeight: '900', marginTop: 8 }}>{done ? 'Rejouer la saison ›' : count > 0 ? 'Continuer l’aventure ›' : 'Commencer ›'}</Text>
                  </Pressable>
                </View>
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
