import React, { useEffect, useMemo } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { ScenicScreen } from '@/components/ScenicScreen';
import { saveScore } from '@/lib/storage';

const trophyIcon = require('../../assets/images/ui/trophy.png');
const crownIcon = require('../../assets/images/ui/crown.png');

export default function ResultScreen() {
  const { scores = '' } = useLocalSearchParams<{ scores?: string }>();
  const parsed = useMemo(() => {
    try {
      const x = JSON.parse(decodeURIComponent(scores || '[]'));
      return Array.isArray(x)
        ? x.filter((v: any) => v && typeof v.name === 'string').map((v: any) => ({ name: v.name, score: Number(v.score) || 0 })).sort((a, b) => b.score - a.score)
        : [];
    } catch { return []; }
  }, [scores]);

  useEffect(() => { void (async () => { for (const t of parsed) await saveScore({ teamName: t.name, score: t.score, playedAt: new Date().toISOString() }); })(); }, [parsed]);
  const winner = parsed[0];

  return <ScenicScreen showTopCrown={false}>
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={s.content}>
      <View style={s.hero}>
        <View style={s.crownWrap}><Image source={crownIcon} style={s.crown} resizeMode="contain" /></View>
        <Image source={trophyIcon} style={s.trophy} resizeMode="contain" />
        <Text style={s.kicker}>PARTIE TERMINÉE</Text>
        <Text style={s.title}>VICTOIRE !</Text>
        <Text style={s.winner}>{winner?.name || 'Partie terminée'}</Text>
        {winner ? <Text style={s.winnerScore}>{winner.score} points</Text> : null}
      </View>

      <View style={s.scoreCard}>
        <View style={s.scoreHeader}><Text style={s.scoreLabel}>CLASSEMENT FINAL</Text><Text style={s.scoreHint}>{parsed.length} équipes</Text></View>
        <View style={s.rows}>{parsed.map((t, i) => <View key={`${t.name}-${i}`} style={[s.row, i === 0 && s.rowWinner]}>
          <View style={[s.rank, i === 0 && s.rankWinner]}><Text style={[s.rankText, i === 0 && s.rankWinnerText]}>{i + 1}</Text></View>
          <View style={s.teamCopy}><Text style={s.teamName}>{t.name}</Text>{i === 0 ? <Text style={s.teamHint}>Équipe gagnante</Text> : null}</View>
          <Text style={[s.points, i === 0 && s.pointsWinner]}>{t.score}</Text>
        </View>)}</View>
      </View>

      <View style={s.actions}>
        <Action title="Rejouer" subtitle="Même ambiance, nouvelle partie" onPress={() => router.replace('/setup')} />
        <Action title="Entraînement" subtitle="S'échauffer avant la prochaine partie" secondary onPress={() => router.replace('/training')} />
        <Action title="Retour à l'accueil" secondary onPress={() => router.replace('/')} />
      </View>
    </ScrollView>
  </ScenicScreen>;
}

function Action({ title, subtitle, onPress, secondary = false }: { title: string; subtitle?: string; onPress: () => void; secondary?: boolean }) {
  return <Pressable onPress={onPress} style={({ pressed }) => [s.action, secondary && s.actionSecondary, pressed && s.pressed]} accessibilityRole="button">
    <View style={s.actionCopy}><Text style={[s.actionTitle, secondary && s.actionTitleSecondary]}>{title}</Text>{subtitle ? <Text style={s.actionSubtitle}>{subtitle}</Text> : null}</View><Text style={[s.actionArrow, secondary && s.actionArrowSecondary]}>›</Text>
  </Pressable>;
}

const s = StyleSheet.create({
  content: { paddingHorizontal: 22, paddingTop: 22, paddingBottom: 138, width: '100%', maxWidth: 760, alignSelf: 'center' },
  hero: { alignItems: 'center', paddingTop: 4 }, crownWrap: { width: 62, height: 52, borderRadius: 18, backgroundColor: 'rgba(242,201,76,.13)', borderWidth: 1, borderColor: 'rgba(242,201,76,.48)', alignItems: 'center', justifyContent: 'center' }, crown: { width: 48, height: 40 }, trophy: { width: 112, height: 112, marginTop: 8 }, kicker: { color: '#FFE58A', fontSize: 10, fontWeight: '900', letterSpacing: 2, marginTop: 2 }, title: { color: '#FFFDF5', fontSize: 43, fontWeight: '900', letterSpacing: -1.2, marginTop: 1, textShadowColor: 'rgba(0,0,0,.25)', textShadowRadius: 8 }, winner: { color: '#FFE58A', fontSize: 19, fontWeight: '900', marginTop: 2 }, winnerScore: { color: '#F4FBF8', fontSize: 13, fontWeight: '800', marginTop: 3 },
  scoreCard: { marginTop: 24, padding: 16, borderRadius: 28, borderWidth: 1, borderColor: 'rgba(255,226,119,.68)', backgroundColor: 'rgba(5,48,60,.72)', shadowColor: '#00151D', shadowOpacity: .34, shadowRadius: 22 }, scoreHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }, scoreLabel: { color: '#FFE58A', fontSize: 10, fontWeight: '900', letterSpacing: 1.7 }, scoreHint: { color: 'rgba(225,240,236,.68)', fontSize: 10, fontWeight: '800' }, rows: { gap: 8 }, row: { minHeight: 62, borderRadius: 19, borderWidth: 1, borderColor: 'rgba(138,223,240,.34)', backgroundColor: 'rgba(2,35,46,.64)', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 11 }, rowWinner: { borderColor: '#FFE17A', backgroundColor: 'rgba(242,201,76,.14)' }, rank: { width: 36, height: 36, borderRadius: 12, backgroundColor: 'rgba(255,255,255,.08)', alignItems: 'center', justifyContent: 'center' }, rankWinner: { backgroundColor: '#F2C94C' }, rankText: { color: '#FFE58A', fontWeight: '900' }, rankWinnerText: { color: '#153A38' }, teamCopy: { flex: 1, marginLeft: 10 }, teamName: { color: '#FFF', fontSize: 14, fontWeight: '900' }, teamHint: { color: '#FFE58A', fontSize: 9.5, fontWeight: '800', marginTop: 2 }, points: { color: '#FFF', fontSize: 20, fontWeight: '900' }, pointsWinner: { color: '#FFE58A' },
  actions: { gap: 10, marginTop: 18 }, action: { minHeight: 64, borderRadius: 20, borderWidth: 1, borderColor: '#FFE58A', backgroundColor: '#F2C94C', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 18 }, actionSecondary: { borderColor: 'rgba(138,223,240,.46)', backgroundColor: 'rgba(3,39,50,.74)' }, actionCopy: { flex: 1 }, actionTitle: { color: '#153A38', fontSize: 15, fontWeight: '900' }, actionTitleSecondary: { color: '#FFF' }, actionSubtitle: { color: 'rgba(22,58,56,.72)', fontSize: 10, fontWeight: '700', marginTop: 2 }, actionArrow: { color: '#153A38', fontSize: 32 }, actionArrowSecondary: { color: '#FFE58A' }, pressed: { opacity: .82, transform: [{ scale: .99 }] },
});
