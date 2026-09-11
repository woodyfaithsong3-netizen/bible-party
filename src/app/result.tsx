import React, { useEffect, useMemo } from 'react';
import { Animated, ScrollView, Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { AppButton } from '@/components/AppButton';
import { colors } from '@/theme/colors';
import { styles } from '@/theme/styles';
import { saveScore } from '@/lib/storage';

export default function ResultScreen() {
  const { scores = '' } = useLocalSearchParams<{ scores?: string }>();
  const parsed = useMemo(() => {
    try {
      const decoded = JSON.parse(decodeURIComponent(scores || '[]'));
      if (!Array.isArray(decoded)) return [];
      return decoded.filter(item => item && typeof item.name === 'string')
        .map(item => ({ name: item.name, score: Number(item.score) || 0 }))
        .sort((a, b) => b.score - a.score);
    } catch {
      return scores.split('|').filter(Boolean).map(x => {
        const separator = x.lastIndexOf(':');
        return { name: decodeURIComponent(separator >= 0 ? x.slice(0, separator) : x), score: Number(separator >= 0 ? x.slice(separator + 1) : 0) || 0 };
      }).sort((a, b) => b.score - a.score);
    }
  }, [scores]);

  useEffect(() => {
    let cancelled = false;
    const persist = async () => { for (const team of parsed) { if (cancelled) return; await saveScore({ teamName: team.name, score: team.score, playedAt: new Date().toISOString() }); } };
    void persist(); return () => { cancelled = true; };
  }, [parsed]);

  const winner = parsed[0];
  const trophyScale = React.useRef(new Animated.Value(0.65)).current;
  useEffect(() => { Animated.spring(trophyScale, { toValue: 1, useNativeDriver: true, friction: 5 }).start(); }, []);

  return (
    <ScrollView style={styles.screen} contentContainerStyle={[styles.content, { paddingTop: 42 }]}>
      <Animated.View style={{ alignItems: 'center', transform: [{ scale: trophyScale }] }}>
        <View style={{ width: 94, height: 94, borderRadius: 47, backgroundColor: colors.surface2, borderWidth: 1, borderColor: colors.accent, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 44 }}>🏆</Text>
        </View>
        <Text style={[styles.eyebrow, { marginTop: 22 }]}>PARTIE TERMINÉE</Text>
        <Text style={{ color: colors.text, fontSize: 38, fontWeight: '900', letterSpacing: -1.5, textAlign: 'center', marginTop: 5 }}>Victoire.</Text>
        <Text style={{ color: colors.accent, fontSize: 19, fontWeight: '900', textAlign: 'center', marginTop: 7 }}>{winner?.name || 'Gagnant'} · {winner?.score || 0} pts</Text>
      </Animated.View>

      <View style={[styles.glowCard, { marginTop: 30, padding: 17 }]}>
        <Text style={styles.eyebrow}>CLASSEMENT FINAL</Text>
        <View style={{ gap: 8, marginTop: 12 }}>
          {parsed.map((x, i) => (
            <View key={`${x.name}-${i}`} style={{ backgroundColor: i === 0 ? colors.surface3 : colors.surface, borderColor: i === 0 ? colors.accent : colors.border, borderWidth: 1, borderRadius: 17, padding: 14, flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ width: 30, height: 30, borderRadius: 15, backgroundColor: colors.bg, alignItems: 'center', justifyContent: 'center', marginRight: 11 }}>
                <Text style={{ color: i === 0 ? colors.accent : colors.muted, fontWeight: '900' }}>{i + 1}</Text>
              </View>
              <Text style={{ color: colors.text, fontWeight: '800', flex: 1 }}>{x.name}</Text>
              <Text style={{ color: colors.accent, fontWeight: '900', fontSize: 18 }}>{x.score}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={{ marginTop: 18, gap: 9 }}>
        <AppButton title="Rejouer  →" onPress={() => router.replace('/setup')} />
        <AppButton title="Entraînement" onPress={() => router.replace('/training')} variant="secondary" />
        <AppButton title="Accueil" onPress={() => router.replace('/')} variant="secondary" />
      </View>
    </ScrollView>
  );
}
