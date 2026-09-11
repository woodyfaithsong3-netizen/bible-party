import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { router } from 'expo-router';
import { AppButton } from '@/components/AppButton';
import { colors } from '@/theme/colors';
import { styles } from '@/theme/styles';
import { getScores, LocalScore } from '@/lib/storage';

export default function ScoresScreen() {
  const [scores, setScores] = useState<LocalScore[]>([]);
  useEffect(() => { getScores().then(setScores); }, []);
  return <View style={[styles.screen, styles.content]}>
    <Text style={styles.title}>Classement local</Text>
    <Text style={styles.subtitle}>Les meilleurs scores enregistrés sur cet appareil.</Text>
    <View style={{ marginTop: 24, gap: 10 }}>{scores.length ? scores.map((x,i) => <View key={`${x.playedAt}-${i}`} style={[styles.card, { flexDirection: 'row', justifyContent: 'space-between' }]}><Text style={{ color: colors.text, fontWeight: '800' }}>{i+1}. {x.teamName}</Text><Text style={{ color: colors.accent, fontWeight: '900' }}>{x.score}</Text></View>) : <View style={styles.card}><Text style={{ color: colors.muted }}>Aucun score pour le moment. Lance une partie !</Text></View>}</View>
    <View style={{ marginTop: 24 }}><AppButton title="Retour" onPress={() => router.back()} variant="secondary" /></View>
  </View>;
}
