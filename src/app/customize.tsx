import React, { useMemo, useState } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { ScenicScreen } from '@/components/ScenicScreen';
import { colors } from '@/theme/colors';
import { styles } from '@/theme/styles';
import { categoryLabels } from '@/data/catalog';

const modeOptions = [
  ['quiz', 'Quiz'],
  ['mystery', 'Qui est-ce ?'],
  ['truefalse', 'Vrai / Faux'],
  ['challenge', 'Défi'],
  ['forbidden', 'Mot interdit'],
] as const;
const difficultyOptions = [['all', 'Tous'], ['easy', 'Facile'], ['medium', 'Intermédiaire'], ['hard', 'Difficile'], ['expert', 'Expert']] as const;
const modeIcon = require('../../assets/images/ui/card.png');

export default function CustomizeScreen() {
  const params = useLocalSearchParams<{ teams?: string; teamsCount?: string; duration?: string; modes?: string; categories?: string; difficulty?: string }>();
  const [modes, setModes] = useState<string[]>((params.modes || modeOptions.map(x => x[0]).join(',')).split(',').filter(Boolean));
  const [categories, setCategories] = useState<string[]>((params.categories || '').split(',').filter(Boolean));
  const [difficulty, setDifficulty] = useState(params.difficulty || 'all');
  const toggleMode = (id: string) => setModes(current => current.includes(id) ? current.filter(x => x !== id) : [...current, id]);
  const toggleCategory = (id: string) => setCategories(current => current.includes(id) ? current.filter(x => x !== id) : [...current, id]);
  const canSave = modes.length > 0;
  const difficultyLabel = difficultyOptions.find(([id]) => id === difficulty)?.[1] ?? 'Tous';
  const summary = useMemo(() => `${modes.length} modes · ${categories.length ? `${categories.length} catégories` : 'toutes les catégories'} · ${difficulty === 'all' ? 'toutes difficultés' : difficultyLabel.toLowerCase()}`, [modes, categories, difficulty, difficultyLabel]);
  const save = () => { if (!canSave) return; router.replace({ pathname: '/ready', params: { teams: String(params.teams || ''), teamsCount: String(params.teamsCount || ''), duration: String(params.duration || 20), modes: modes.join(','), categories: categories.join(','), difficulty } }); };
  return <ScenicScreen>
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={[styles.flowContent, { paddingBottom: 150 }]}> 
      <View style={styles.flowHeader}><Pressable onPress={() => router.back()} style={styles.flowBack}><Text style={styles.flowBackText}>‹</Text></Pressable><View style={{ flex: 1 }}><Text style={styles.eyebrow}>NOUVELLE PARTIE</Text><Text style={styles.flowTitle}>Personnaliser</Text></View><View style={styles.stepBadge}><Text style={styles.stepBadgeText}>04</Text></View></View>
      <Text style={styles.flowSubtitle}>Choisissez les jeux et le niveau qui rythmeront votre partie.</Text>
      <Text style={styles.flowSection}>MODES DE JEU</Text>
      <View style={styles.wrapRow}>{modeOptions.map(([id, label]) => { const active = modes.includes(id); return <Pressable key={id} onPress={() => toggleMode(id)} style={[styles.modeChip, active && styles.modeChipActive]}><Image source={modeIcon} style={{ width: 20, height: 20 }} resizeMode="contain"/><Text style={[styles.modeChipText, active && { color: colors.bg }]}>{label}</Text></Pressable>; })}</View>
      <Text style={[styles.flowSection, { marginTop: 24 }]}>CATÉGORIES</Text>
      <View style={styles.wrapRow}><Pressable onPress={() => setCategories([])} style={[styles.filterChip, categories.length === 0 && styles.filterChipActive]}><Text style={[styles.filterChipText, categories.length === 0 && { color: colors.bg }]}>Toutes</Text></Pressable>{categoryLabels.map(category => { const active = categories.includes(category); return <Pressable key={category} onPress={() => toggleCategory(category)} style={[styles.filterChip, active && styles.filterChipActive]}><Text style={[styles.filterChipText, active && { color: colors.bg }]}>{category}</Text></Pressable>; })}</View>
      <Text style={[styles.flowSection, { marginTop: 24 }]}>DIFFICULTÉ</Text>
      <View style={styles.wrapRow}>{difficultyOptions.map(([id, label]) => <Pressable key={id} onPress={() => setDifficulty(id)} style={[styles.smallChoice, { flex: 0, flexGrow: 1, flexBasis: '30%' }, difficulty === id && styles.smallChoiceActive]}><Text style={[styles.smallChoiceText, difficulty === id && { color: colors.bg }]}>{label}</Text></Pressable>)}</View>
      <View style={styles.startSummary}><Text style={styles.eyebrow}>VOTRE CONFIGURATION</Text><Text style={styles.summaryTitle}>{summary}</Text><Text style={styles.summaryText}>Les réglages sont utilisés pour la prochaine partie uniquement.</Text></View>
      <Pressable disabled={!canSave} onPress={save} style={[styles.flowPrimaryButton, !canSave && { opacity: 0.45 }]}><Text style={styles.flowPrimaryText}>Enregistrer</Text><Text style={styles.flowPrimaryArrow}>›</Text></Pressable>
      <Text style={styles.flowFooter}>Étape 4 sur 4</Text>
    </ScrollView>
  </ScenicScreen>;
}
