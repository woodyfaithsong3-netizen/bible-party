import React, { useCallback, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { router, useFocusEffect } from 'expo-router';
import { ScenicScreen } from '@/components/ScenicScreen';
import { colors } from '@/theme/colors';
import { styles } from '@/theme/styles';
import { SEASON_1 } from '@/data/adventure';
import { SEASON_2 } from '@/data/adventureSeason2';
import { SEASON_3 } from '@/data/adventureSeason3';
import { getAdventureProgress } from '@/lib/storage';

const SEASONS = [SEASON_1, SEASON_2, SEASON_3];

export default function AdventureScreen() {
  const [completed, setCompleted] = useState<string[]>([]);
  useFocusEffect(useCallback(() => { void getAdventureProgress().then(setCompleted); }, []));
  const seasonComplete = (seasonIndex: number) => seasonIndex === 0 || SEASONS[seasonIndex - 1].episodes.every(ep => completed.includes(ep.id));

  return (
    <ScenicScreen>
      <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
        <Pressable onPress={() => router.back()}><Text style={{ color: colors.accent, fontWeight: '900' }}>‹ Retour</Text></Pressable>
        <View style={{ marginTop: 22 }}>
          <Text style={styles.eyebrow}>🗺️ AVENTURE</Text>
          <Text style={[styles.title, { marginTop: 7 }]}>Ton histoire biblique</Text>
          <Text style={styles.subtitle}>116 histoires, organisées selon les 8 parties officielles du Recueil d’histoires bibliques.</Text>
        </View>

        {SEASONS.map((season, seasonIndex) => {
          const locked = !seasonComplete(seasonIndex);
          const completedCount = season.episodes.filter(ep => completed.includes(ep.id)).length;
          const complete = completedCount === season.episodes.length;
          return (
            <View key={season.id} style={{ marginTop: 20 }}>
              <View style={[styles.glowCard, locked && { opacity: .55 }]}>
                <Text style={{ color: colors.accent, fontSize: 11, fontWeight: '900', letterSpacing: 1.5 }}>SAISON {season.number}</Text>
                <Text style={{ color: colors.text, fontSize: 24, fontWeight: '900', marginTop: 5 }}>{season.title}</Text>
                <Text style={{ color: colors.muted, marginTop: 3 }}>{season.subtitle}</Text>
                <Text style={{ color: colors.muted, lineHeight: 19, marginTop: 9 }}>{season.description}</Text>
                <View style={{ height: 8, backgroundColor: colors.border, borderRadius: 8, overflow: 'hidden', marginTop: 15 }}>
                  <View style={{ width: `${Math.round((completedCount / season.episodes.length) * 100)}%`, height: '100%', backgroundColor: colors.accent }} />
                </View>
                <Text style={{ color: colors.muted, fontSize: 11, fontWeight: '800', marginTop: 8 }}>{locked ? '🔒 Termine la saison précédente pour débloquer cette partie.' : `${completedCount}/${season.episodes.length} épisodes terminés`}</Text>
              </View>

              {!locked ? (
                <>
                  <View style={[styles.card, { marginTop: 12 }]}>
                    <Text style={{ color: colors.accent, fontSize: 12, fontWeight: '900', letterSpacing: 1.3 }}>🎬 INTRODUCTION</Text>
                    <Text style={{ color: colors.text, fontSize: 21, fontWeight: '900', marginTop: 7 }}>{season.seasonIntro.title}</Text>
                    <Text style={{ color: colors.muted, lineHeight: 20, marginTop: 8 }}>{season.seasonIntro.story}</Text>
                    <Text style={{ color: colors.text, lineHeight: 20, marginTop: 10 }}>{season.seasonIntro.transition}</Text>
                  </View>

                  <View style={{ marginTop: 20 }}>
                    <Text style={styles.sectionTitle}>PROGRESSION</Text>
                    {season.episodes.map((episode, index) => {
                      const done = completed.includes(episode.id);
                      const canPlay = index === 0 || completed.includes(season.episodes[index - 1].id);
                      return (
                        <Pressable key={episode.id} disabled={!canPlay} onPress={() => router.push({ pathname: '/adventure/episode', params: { id: episode.id } })}
                          style={({ pressed }) => [{ marginBottom: 10, padding: 15, borderRadius: 22, borderWidth: 1, borderColor: done ? colors.success : canPlay ? colors.borderStrong : colors.border, backgroundColor: done ? 'rgba(22,70,53,.72)' : canPlay ? colors.surface2 : 'rgba(5,25,30,.55)', flexDirection: 'row', alignItems: 'center', gap: 13, opacity: canPlay ? 1 : .52 }, pressed && { transform: [{ scale: .985 }] }]}>
                          <View style={{ width: 48, height: 48, borderRadius: 17, alignItems: 'center', justifyContent: 'center', backgroundColor: done ? 'rgba(143,224,166,.15)' : 'rgba(242,201,76,.12)', borderWidth: 1, borderColor: done ? colors.success : colors.borderStrong }}>
                            <Text style={{ fontSize: 22 }}>{done ? '✓' : canPlay ? episode.icon : '🔒'}</Text>
                          </View>
                          <View style={{ flex: 1 }}>
                            <Text style={{ color: colors.accent, fontSize: 10, fontWeight: '900', letterSpacing: 1 }}>ÉPISODE {episode.number}</Text>
                            <Text style={{ color: colors.text, fontSize: 16, fontWeight: '900', marginTop: 3 }}>{episode.title}</Text>
                            <Text style={{ color: colors.muted, fontSize: 11, marginTop: 3 }} numberOfLines={2}>{episode.keyPoint}</Text>
                          </View>
                          <Text style={{ color: done ? colors.success : colors.accent2, fontSize: 27 }}>›</Text>
                        </Pressable>
                      );
                    })}
                  </View>

                  {complete ? (
                    <View style={[styles.card, { marginTop: 12, borderColor: colors.accent }]}>
                      <Text style={{ color: colors.accent, fontSize: 12, fontWeight: '900', letterSpacing: 1.3 }}>💡 CE QUE TU DÉCOUVRES SUR JÉHOVAH</Text>
                      <Text style={{ color: colors.text, fontSize: 21, fontWeight: '900', marginTop: 7 }}>{season.seasonSummary.title}</Text>
                      {season.seasonSummary.qualities.map(q => (
                        <View key={q.title} style={{ marginTop: 12 }}>
                          <Text style={{ color: colors.text, fontWeight: '900' }}>{q.title}</Text>
                          <Text style={{ color: colors.muted, lineHeight: 19, marginTop: 3 }}>{q.text}</Text>
                        </View>
                      ))}
                      <Text style={{ color: colors.accent, fontSize: 12, fontWeight: '900', letterSpacing: 1.3, marginTop: 18 }}>🧵 LE FIL ROUGE</Text>
                      <Text style={{ color: colors.text, lineHeight: 20, marginTop: 7 }}>{season.seasonIntro.thread}</Text>
                    </View>
                  ) : null}
                </>
              ) : null}
            </View>
          );
        })}
      </ScrollView>
    </ScenicScreen>
  );
}
