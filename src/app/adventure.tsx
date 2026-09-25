import React, { useCallback, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { router, useFocusEffect } from 'expo-router';
import { ScenicScreen } from '@/components/ScenicScreen';
import { colors } from '@/theme/colors';
import { styles } from '@/theme/styles';
import { SEASON_1 } from '@/data/adventure';
import { getAdventureProgress } from '@/lib/storage';

export default function AdventureScreen() {
  const [completed, setCompleted] = useState<string[]>([]);
  useFocusEffect(useCallback(() => { void getAdventureProgress().then(setCompleted); }, []));

  const completedCount = SEASON_1.episodes.filter(ep => completed.includes(ep.id)).length;
  const unlocked = (index: number) => index === 0 || completed.includes(SEASON_1.episodes[index - 1].id);

  return (
    <ScenicScreen>
      <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
        <Pressable onPress={() => router.back()}><Text style={{ color: colors.accent, fontWeight: '900' }}>‹ Retour</Text></Pressable>

        <View style={{ marginTop: 22 }}>
          <Text style={styles.eyebrow}>🗺️ AVENTURE</Text>
          <Text style={[styles.title, { marginTop: 7 }]}>Les commencements</Text>
          <Text style={styles.subtitle}>{SEASON_1.description}</Text>
        </View>

        <View style={[styles.glowCard, { marginTop: 20 }]}>
          <Text style={{ color: colors.accent, fontSize: 11, fontWeight: '900', letterSpacing: 1.5 }}>SAISON {SEASON_1.number}</Text>
          <Text style={{ color: colors.text, fontSize: 25, fontWeight: '900', marginTop: 5 }}>{SEASON_1.title}</Text>
          <Text style={{ color: colors.muted, marginTop: 3 }}>{SEASON_1.subtitle}</Text>
          <View style={{ height: 8, backgroundColor: colors.border, borderRadius: 8, overflow: 'hidden', marginTop: 15 }}>
            <View style={{ width: `${Math.round((completedCount / SEASON_1.episodes.length) * 100)}%`, height: '100%', backgroundColor: colors.accent }} />
          </View>
          <Text style={{ color: colors.muted, fontSize: 11, fontWeight: '800', marginTop: 8 }}>{completedCount}/{SEASON_1.episodes.length} épisodes terminés</Text>
        </View>

        <View style={[styles.card, { marginTop: 20 }]}>
          <Text style={{ color: colors.accent, fontSize: 12, fontWeight: '900', letterSpacing: 1.3 }}>🎬 INTRODUCTION</Text>
          <Text style={{ color: colors.text, fontSize: 21, fontWeight: '900', marginTop: 7 }}>{SEASON_1.seasonIntro.title}</Text>
          <Text style={{ color: colors.muted, lineHeight: 20, marginTop: 8 }}>{SEASON_1.seasonIntro.story}</Text>
          <Text style={{ color: colors.text, lineHeight: 20, marginTop: 10 }}>{SEASON_1.seasonIntro.transition}</Text>
        </View>

        <View style={[styles.card, { marginTop: 12 }]}>
          <Text style={{ color: colors.accent, fontSize: 12, fontWeight: '900', letterSpacing: 1.3 }}>💡 CE QUE TU DÉCOUVRES SUR JÉHOVAH</Text>
          {SEASON_1.seasonIntro.qualities.map((quality) => (
            <View key={quality.title} style={{ marginTop: 12 }}>
              <Text style={{ color: colors.text, fontWeight: '900' }}>{quality.title}</Text>
              <Text style={{ color: colors.muted, lineHeight: 19, marginTop: 3 }}>{quality.text}</Text>
            </View>
          ))}
        </View>

        <View style={[styles.card, { marginTop: 12, borderColor: colors.accent }]}>
          <Text style={{ color: colors.accent, fontSize: 12, fontWeight: '900', letterSpacing: 1.3 }}>🧵 LE FIL ROUGE</Text>
          <Text style={{ color: colors.text, lineHeight: 20, marginTop: 7 }}>{SEASON_1.seasonIntro.thread}</Text>
        </View>

        <View style={{ marginTop: 22 }}>
          <Text style={styles.sectionTitle}>PROGRESSION</Text>
          {SEASON_1.episodes.map((episode, index) => {
            const done = completed.includes(episode.id);
            const canPlay = unlocked(index);
            return (
              <Pressable
                key={episode.id}
                disabled={!canPlay}
                onPress={() => router.push({ pathname: '/adventure/episode', params: { id: episode.id } })}
                style={({ pressed }) => [{
                  marginBottom: 10,
                  padding: 15,
                  borderRadius: 22,
                  borderWidth: 1,
                  borderColor: done ? colors.success : canPlay ? colors.borderStrong : colors.border,
                  backgroundColor: done ? 'rgba(22,70,53,.72)' : canPlay ? colors.surface2 : 'rgba(5,25,30,.55)',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 13,
                  opacity: canPlay ? 1 : .52,
                }, pressed && { transform: [{ scale: .985 }] }]}
              >
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

        <View style={[styles.card, { marginTop: 8 }]}>
          <Text style={{ color: colors.accent, fontSize: 14, fontWeight: '900' }}>🧵 LA PROMESSE</Text>
          <Text style={{ color: colors.text, fontSize: 16, fontWeight: '900', marginTop: 6 }}>Genèse 3:15</Text>
          <Text style={{ color: colors.muted, lineHeight: 20, marginTop: 5 }}>
            Le fil rouge commence à l’épisode 5. Il reste volontairement à découvrir au fil de l’histoire.
          </Text>
        </View>
      </ScrollView>
    </ScenicScreen>
  );
}
