import React, { useCallback, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useFocusEffect, router } from 'expo-router';
import { AppButton } from '@/components/AppButton';
import { colors } from '@/theme/colors';
import { styles } from '@/theme/styles';
import { getTrainingStats, TrainingStats } from '@/lib/storage';
import { getQuizCatalog, categoryLabels, normalizeCategory } from '@/data/catalog';

export default function ProgressScreen() {
  const [stats, setStats] = useState<TrainingStats | null>(null);
  useFocusEffect(useCallback(() => { getTrainingStats().then(setStats); }, []));
  const s = stats || { answered: 0, correct: 0, bestStreak: 0, totalPoints: 0, categoryStats: {}, missedIds: [] };
  const accuracy = s.answered ? Math.round((s.correct / s.answered) * 100) : 0;
  const available = getQuizCatalog();

  return <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
    <Text style={{ color: colors.accent, fontSize: 12, fontWeight: '900', letterSpacing: 2 }}>PROGRESSION</Text>
    <Text style={styles.title}>Mes progrès</Text>
    <Text style={styles.subtitle}>Une progression locale, simple et privée, enregistrée uniquement sur cet appareil.</Text>

    <View style={{ flexDirection: 'row', gap: 10, marginTop: 24 }}>
      {[[String(s.answered), 'Réponses'], [accuracy + '%', 'Réussite'], [String(s.bestStreak), 'Meilleure série']].map(([value, label]) => <View key={label} style={[styles.card, { flex: 1, padding: 14 }]}><Text style={{ color: colors.accent, fontSize: 22, fontWeight: '900' }}>{value}</Text><Text style={{ color: colors.muted, marginTop: 5, fontSize: 12 }}>{label}</Text></View>)}
    </View>

    <View style={[styles.card, { marginTop: 12 }]}><Text style={{ color: colors.muted, fontSize: 12 }}>TOTAL DE POINTS</Text><Text style={{ color: colors.text, fontSize: 30, fontWeight: '900', marginTop: 4 }}>{s.totalPoints}</Text></View>

    <Text style={[styles.sectionTitle, { marginTop: 30 }]}>Maîtrise par catégorie</Text>
    <View style={{ gap: 12, marginTop: 12 }}>
      {categoryLabels.map(category => {
        const stat = s.categoryStats[category] || s.categoryStats[category.toLowerCase()] || { answered: 0, correct: 0, points: 0 };
        const pool = available.filter(q => normalizeCategory(q.category) === category).length;
        const rate = stat.answered ? Math.round((stat.correct / stat.answered) * 100) : 0;
        return <View key={category} style={styles.card}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}><Text style={{ color: colors.text, fontWeight: '800' }}>{category}</Text><Text style={{ color: colors.accent, fontWeight: '900' }}>{rate}%</Text></View>
          <View style={{ height: 7, backgroundColor: colors.border, borderRadius: 7, marginTop: 10, overflow: 'hidden' }}><View style={{ width: `${rate}%`, height: 7, backgroundColor: colors.accent, borderRadius: 7 }} /></View>
          <Text style={{ color: colors.muted, marginTop: 8, fontSize: 12 }}>{stat.answered} réponse(s) · {pool} question(s) disponibles</Text>
        </View>;
      })}
    </View>

    <View style={{ marginTop: 24, gap: 10 }}>
      <AppButton title={`Réviser mes erreurs (${s.missedIds.length})`} onPress={() => router.push('/review')} disabled={!s.missedIds.length} />
      <AppButton title="Retour à l'accueil" onPress={() => router.replace('/')} variant="secondary" />
    </View>
  </ScrollView>;
}
