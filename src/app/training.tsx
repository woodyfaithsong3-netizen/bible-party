import React, { useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, Text, View } from 'react-native';
import { router } from 'expo-router';
import { AppButton } from '@/components/AppButton';
import { colors } from '@/theme/colors';
import { styles } from '@/theme/styles';
import { selectTrainingQuestions, categoryLabels } from '@/data/catalog';
import { getTrainingStats, recordTrainingAnswer } from '@/lib/storage';
import { QuizQuestion } from '@/types';
import { ScenicScreen } from '@/components/ScenicScreen';

const categories = ['Toutes', ...categoryLabels];
const difficulties = [['all', 'Tous'], ['easy', 'Facile'], ['medium', 'Intermédiaire'], ['hard', 'Difficile'], ['expert', 'Expert']] as const;
const DECK_SIZE = 10;

function shuffleAnswers(question: QuizQuestion): QuizQuestion {
  const indexed = question.answers.map((answer, index) => ({ answer, index }));
  for (let i = indexed.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [indexed[i], indexed[j]] = [indexed[j], indexed[i]];
  }
  return {
    ...question,
    answers: indexed.map(item => item.answer),
    correctAnswer: indexed.findIndex(item => item.index === question.correctAnswer),
  };
}

function TrainingScreen() {
  const [category, setCategory] = useState('Toutes');
  const [difficulty, setDifficulty] = useState<'all' | 'easy' | 'medium' | 'hard' | 'expert'>('all');
  const [started, setStarted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [missed, setMissed] = useState<QuizQuestion[]>([]);
  const [answered, setAnswered] = useState<number | null>(null);
  const [deck, setDeck] = useState<QuizQuestion[]>([]);
  const [error, setError] = useState<string | null>(null);

  const current = deck[index];
  const answeredCount = index + (answered !== null ? 1 : 0);
  const accuracy = answeredCount > 0 ? Math.round((correct / answeredCount) * 100) : 0;
  const finalAccuracy = deck.length > 0 ? Math.round((correct / deck.length) * 100) : 0;
  const progress = deck.length > 0 ? ((index + (answered !== null ? 1 : 0)) / deck.length) * 100 : 0;

  useEffect(() => {
    if (!started) return;
    // Nothing to load here: the deck is created explicitly by start().
  }, [started]);

  const start = async () => {
    setLoading(true);
    setError(null);
    try {
      const stats = await getTrainingStats();
      const selectedDeck = selectTrainingQuestions(category, difficulty, stats.missedIds, DECK_SIZE);
      const nextDeck = selectedDeck.map(shuffleAnswers);
      if (nextDeck.length === 0) {
        setError('Aucune question disponible pour cet entraînement.');
        return;
      }
      setDeck(nextDeck);
      setIndex(0); setScore(0); setCorrect(0); setStreak(0); setBestStreak(0); setMissed([]); setAnswered(null);
      setStarted(true);
    } catch (e) {
      setError('Impossible de charger l’entraînement. Réessaie.');
    } finally {
      setLoading(false);
    }
  };

  const answer = async (choice: number) => {
    if (!current || answered !== null) return;
    const good = choice === current.correctAnswer;
    const nextStreak = good ? streak + 1 : 0;
    const points = good ? 200 + (nextStreak >= 3 ? 50 : 0) : 0;
    setAnswered(choice);
    setCorrect(v => v + (good ? 1 : 0));
    setStreak(nextStreak);
    setBestStreak(v => Math.max(v, nextStreak));
    setScore(v => v + points);
    if (!good) setMissed(v => (v.some(q => q.id === current.id) ? v : [...v, current]));
    try {
      await recordTrainingAnswer({ id: current.id, category: current.category, correct: good, points, streak: nextStreak });
    } catch {
      // The training remains playable even if local statistics cannot be saved.
    }
  };

  const next = () => { setIndex(v => v + 1); setAnswered(null); };
  const restart = () => { setStarted(false); setIndex(0); setDeck([]); setAnswered(null); setError(null); };

  if (!started) return <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
    <Text style={{ color: colors.accent, fontSize: 12, fontWeight: '800', letterSpacing: 2 }}>ENTRAÎNEMENT</Text>
    <Text style={styles.title}>Entraîne-toi</Text>
    <Text style={styles.subtitle}>10 questions, un score personnel et une progression enregistrée sur cet appareil.</Text>
    <View style={[styles.autoCard,{marginTop:18}]}><View style={styles.autoBadge}><Text style={{color:colors.bg,fontWeight:'900'}}>✓</Text></View><View style={{flex:1}}><Text style={styles.rowTitle}>Session intelligente</Text><Text style={styles.rowSubtitle}>Les questions déjà ratées sont privilégiées pour vous aider à progresser.</Text></View></View>

    <Text style={[styles.sectionTitle, { marginTop: 24 }]}>Catégorie</Text>
    <View style={styles.wrapRow}>{categories.map(x => <Pressable key={x} onPress={() => setCategory(x)} style={[styles.filterChip, category===x && styles.filterChipActive]}><Text style={[styles.filterChipText,category===x&&{color:colors.bg}]}>{x}</Text></Pressable>)}</View>
    <Text style={[styles.sectionTitle, { marginTop: 24 }]}>Difficulté</Text>
    <View style={{ flexDirection: 'row', gap: 8 }}>{difficulties.map(([id, label]) => <AppButton key={id} title={label} onPress={() => setDifficulty(id)} variant={difficulty === id ? 'primary' : 'secondary'} style={{ flex: 1 }} />)}</View>
    {error && <View style={[styles.card, { marginTop: 18, borderColor: colors.danger }]}><Text style={{ color: colors.danger, fontWeight: '800' }}>{error}</Text></View>}
    <View style={{ marginTop: 28 }}>{loading ? <View style={{ alignItems: 'center', padding: 18 }}><ActivityIndicator color={colors.accent} /><Text style={{ color: colors.muted, marginTop: 8 }}>Préparation des questions…</Text></View> : <AppButton title="Commencer l'entraînement →" onPress={start} />}</View>
    <View style={{ marginTop: 10 }}><AppButton title="Retour" onPress={() => router.back()} variant="secondary" /></View>
  </ScrollView>;

  if (!current) return <ScrollView style={styles.screen} contentContainerStyle={[styles.content, { paddingTop: 36 }]}>
    <Text style={styles.eyebrow}>ENTRAÎNEMENT TERMINÉ</Text>
    <Text style={[styles.title, { marginTop: 7 }]}>Bien joué !</Text>
    <View style={{ flexDirection: 'row', gap: 10, marginTop: 20 }}>
      {[[String(score), 'Points'], [finalAccuracy + '%', 'Réussite'], [String(bestStreak), 'Meilleure série']].map(([value, label]) => <View key={label} style={[styles.card, { flex: 1, padding: 14 }]}><Text style={{ color: colors.accent, fontSize: 22, fontWeight: '900' }}>{value}</Text><Text style={{ color: colors.muted, marginTop: 5, fontSize: 12 }}>{label}</Text></View>)}
    </View>
    <Text style={[styles.sectionTitle, { marginTop: 26 }]}>Questions ratées</Text>
    {missed.length === 0 ? <View style={styles.card}><Text style={{ color: colors.muted }}>Aucune erreur cette fois-ci !</Text></View> : <View style={{ gap: 9 }}>{missed.map(q => <View key={q.id} style={styles.card}><Text style={{ color: colors.text, fontWeight: '700', lineHeight: 21 }}>{q.question}</Text><Text style={{ color: colors.accent, marginTop: 6, fontSize: 12, fontWeight: '700' }}>Réponse : {q.answers[q.correctAnswer]}</Text></View>)}</View>}
    <View style={{ marginTop: 24, gap: 10 }}>
      {missed.length > 0 && <AppButton title="Réviser mes erreurs" onPress={() => router.push('/review')} />}
      <AppButton title="Recommencer" onPress={restart} variant="secondary" />
      <AppButton title="Accueil" onPress={() => router.replace('/')} variant="secondary" />
    </View>
  </ScrollView>;

  const good = answered === current.correctAnswer;
  return <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}><Text style={{ color: colors.accent, fontWeight: '800' }}>QUESTION {index + 1}/{deck.length}</Text><Text style={{ color: colors.text, fontWeight: '900' }}>{score} pts</Text></View>
    <View style={{ height: 5, borderRadius: 3, backgroundColor: colors.surface2, marginTop: 12, overflow: 'hidden' }}><View style={{ width: `${Math.max(0, Math.min(100, progress))}%`, height: 5, backgroundColor: colors.accent }} /></View>
    <Text style={[styles.sectionTitle, { marginTop: 20 }]}>{current.category} · {current.difficulty}</Text>
    <View style={[styles.card, { marginTop: 12 }]}> 
      <Text style={{ color: colors.text, fontSize: 25, lineHeight: 34, fontWeight: '800' }}>{current.question}</Text>
      <View style={{ gap: 9, marginTop: 24 }}>{current.answers.map((a, i) => <AppButton key={`${current.id}-${i}`} title={`${String.fromCharCode(65 + i)}  ${a}`} onPress={() => answer(i)} variant={answered === i ? (good ? 'primary' : 'secondary') : 'secondary'} disabled={answered !== null} />)}</View>
      {answered !== null && <View style={{ marginTop: 18, padding: 14, borderRadius: 16, backgroundColor: colors.bg, borderWidth: 1, borderColor: good ? colors.success : colors.danger }}><Text style={{ color: good ? colors.success : colors.danger, fontWeight: '900' }}>{good ? '✓ Bonne réponse' : '✗ Pas tout à fait'}</Text><Text style={{ color: colors.text, fontWeight: '800', marginTop: 7 }}>Réponse : {current.answers[current.correctAnswer]}</Text><Text style={{ color: colors.muted, marginTop: 7, lineHeight: 20 }}>{current.explanation}</Text><Text style={{ color: colors.accent, marginTop: 7, fontWeight: '700' }}>{current.reference}</Text></View>}
    </View>
    <View style={{ marginTop: 18 }}><AppButton title={answered === null ? 'Choisis une réponse' : index + 1 >= deck.length ? 'Terminer' : 'Question suivante →'} onPress={next} disabled={answered === null} /></View>
    <Text style={{ color: colors.muted, textAlign: 'center', marginTop: 14 }}>Série : ×{streak} · Réussite : {accuracy}%</Text>
  </ScrollView>;
}

export default function TrainingScreenWithScenic() {
  return <ScenicScreen><TrainingScreen /></ScenicScreen>;
}
