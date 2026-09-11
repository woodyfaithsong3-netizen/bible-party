import React, { useMemo, useState } from 'react';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { router } from 'expo-router';
import { AppButton } from '@/components/AppButton';
import { colors } from '@/theme/colors';
import { styles } from '@/theme/styles';
import { getCategoryQuestionCount, setupCategoryFilters } from '@/data/catalog';

const gameModeGroups = [
  { title: 'CONNAISSANCE', subtitle: 'Répondre, reconnaître et réfléchir', modes: [['quiz','Quiz','Q'],['truefalse','Vrai / Faux','✓'],['quote','Qui est-ce ?','“”'],['chronology','Chronologie','↕']] },
  { title: 'FAIRE DEVINER', subtitle: 'Indices, cartes et mots à faire trouver', modes: [['mystery','Qui suis-je ?','M'],['timesup','Time’s Up','T'],['threeclues','3 indices','3'],['forbidden','Mot interdit','✕']] },
  { title: 'DÉFIS', subtitle: 'Pression, duel et prise de risque', modes: [['challenge','Défi 10 secondes','10'],['intruder','Intrus','✦'],['faceoff','Face-à-face','VS'],['risk','Mise à risque','⚡']] },
] as const;
const gameModes = gameModeGroups.flatMap(group => group.modes.map(mode => mode[0]));
const difficulties = [['all','Tous'],['easy','Facile'],['medium','Intermédiaire'],['hard','Expert']] as const;

export default function SetupScreen() {
  const [teamsCount, setTeamsCount] = useState(2);
  const [teamNames, setTeamNames] = useState(['Équipe David', 'Équipe Paul', 'Équipe Ruth', 'Équipe Esther']);
  const [duration, setDuration] = useState(45);
  const [categories, setCategories] = useState<string[]>([]);
  const [difficulty, setDifficulty] = useState<'all'|'easy'|'medium'|'hard'>('all');
  const [selected, setSelected] = useState<string[]>(gameModes);
  const [hostName, setHostName] = useState('Maître de jeu');
  const [customize, setCustomize] = useState(false);
  const [renameTeams, setRenameTeams] = useState(false);
  const names = useMemo(() => teamNames.slice(0, teamsCount), [teamNames, teamsCount]);

  const toggle = (id: string) => setSelected(v => v.includes(id) ? v.filter(x => x !== id) : [...v, id]);
  const toggleCategory = (id: string) => setCategories(v => v.includes(id) ? v.filter(x => x !== id) : [...v, id]);
  const start = () => {
    const modes = selected.length ? selected : gameModes;
    const clean = names.map((x, i) => (x.trim().replace(/[|]/g, ' ') || `Équipe ${String.fromCharCode(65 + i)}`).slice(0, 28));
    router.push({ pathname: '/game', params: { modes: modes.join(','), teams: clean.join('|'), duration: String(duration), categories: categories.join(','), difficulty, host: hostName.trim() || 'Maître de jeu' } });
  };

  return (
    <ScrollView style={styles.screen} contentContainerStyle={[styles.content, { paddingBottom: 50 }]}>
      <View style={styles.setupHeader}><Pressable onPress={() => router.back()}><Text style={styles.backText}>‹</Text></Pressable><View style={{ flex: 1, marginLeft: 12 }}><Text style={styles.eyebrow}>NOUVELLE PARTIE</Text><Text style={styles.setupHeaderTitle}>C’est parti.</Text></View><Text style={styles.setupStep}>01</Text></View>
      <Text style={styles.subtitle}>Quelques choix. Puis le jeu prend le relais.</Text>

      <Text style={[styles.sectionTitle, { marginTop: 28 }]}>QUI JOUE ?</Text>
      <View style={styles.choiceGrid}>
        {[2,3,4].map(n => <Pressable key={n} onPress={() => setTeamsCount(n)} style={[styles.choiceCard, teamsCount === n && styles.choiceCardActive]}><Text style={[styles.choiceNumber, teamsCount === n && { color: colors.bg }]}>{n}</Text><Text style={[styles.choiceLabel, teamsCount === n && { color: colors.bg }]}>équipes</Text></Pressable>)}
      </View>

      <View style={styles.cardRow}><View style={{ flex: 1 }}><Text style={styles.rowTitle}>Équipes</Text><Text style={styles.rowSubtitle}>{names.join(' · ')}</Text></View><Pressable onPress={() => setRenameTeams(v => !v)}><Text style={styles.linkText}>{renameTeams ? 'Fermer' : 'Renommer'}</Text></Pressable></View>
      {renameTeams && <View style={styles.card}><View style={{ gap: 9 }}>{names.map((name,i) => <TextInput key={i} value={name} onChangeText={v => setTeamNames(old => old.map((x,j) => j===i ? v : x))} placeholder={`Équipe ${i+1}`} placeholderTextColor={colors.muted} style={styles.input} />)}</View></View>}

      <Text style={[styles.sectionTitle, { marginTop: 25 }]}>COMBIEN DE TEMPS ?</Text>
      <View style={styles.durationGrid}>
        {[20,30,45,60].map(n => <Pressable key={n} onPress={() => setDuration(n)} style={[styles.durationCard, duration === n && styles.choiceCardActive]}><Text style={[styles.durationNumber, duration === n && { color: colors.bg }]}>{n}</Text><Text style={[styles.durationUnit, duration === n && { color: colors.bg }]}>MIN</Text><Text style={[styles.durationHint, duration === n && { color: colors.bg }]}>{n===20?'Rapide':n===30?'Classique':n===45?'Grande soirée':'Marathon'}</Text></Pressable>)}
      </View>

      <View style={styles.autoCard}><View style={styles.autoBadge}><Text style={{ color: colors.bg, fontWeight: '900' }}>✦</Text></View><View style={{ flex: 1 }}><Text style={styles.rowTitle}>Mélange automatique</Text><Text style={styles.rowSubtitle}>Bible Party choisit les manches pour garder la partie variée.</Text></View><Text style={{ color: colors.success, fontWeight: '900' }}>AUTO</Text></View>

      <Pressable onPress={() => setCustomize(v => !v)} style={styles.customizeBar}><View><Text style={styles.rowTitle}>Personnaliser</Text><Text style={styles.rowSubtitle}>{categories.length ? `${categories.length} catégories` : 'Toutes les catégories'} · {difficulty === 'all' ? 'toutes difficultés' : difficulty}</Text></View><Text style={{ color: colors.accent2, fontSize: 22 }}>{customize ? '⌃' : '⌄'}</Text></Pressable>

      {customize && <View style={{ marginTop: 8 }}>
        <View style={styles.card}><Text style={styles.eyebrow}>MAÎTRE DE JEU</Text><TextInput value={hostName} onChangeText={setHostName} placeholder="Nom du maître de jeu" placeholderTextColor={colors.muted} style={[styles.input, { marginTop: 10 }]} /></View>
        <Text style={[styles.sectionTitle, { marginTop: 20 }]}>CATÉGORIES</Text><Text style={styles.helper}>Aucune sélection = tout le catalogue.</Text>
        <View style={styles.wrapRow}>{setupCategoryFilters.map(category => { const active=categories.includes(category); return <Pressable key={category} onPress={() => toggleCategory(category)} style={[styles.filterChip, active && styles.filterChipActive]}><Text style={[styles.filterChipText, active && { color: colors.bg }]}>{active ? '✓ ' : ''}{category} · {getCategoryQuestionCount(category)}</Text></Pressable>; })}</View>
        <Text style={[styles.sectionTitle, { marginTop: 20 }]}>DIFFICULTÉ</Text><View style={{ flexDirection:'row', gap:8 }}>{difficulties.map(([id,label]) => <Pressable key={id} onPress={() => setDifficulty(id)} style={[styles.smallChoice, difficulty===id && styles.smallChoiceActive]}><Text style={[styles.smallChoiceText, difficulty===id && {color:colors.bg}]}>{label}</Text></Pressable>)}</View>
        <Text style={[styles.sectionTitle, { marginTop: 20 }]}>MODES</Text><Text style={styles.helper}>Par défaut, tous les modes sont mélangés automatiquement.</Text>
        {gameModeGroups.map(group => <View key={group.title} style={{ marginTop: 13 }}><Text style={styles.modeGroupLabel}>{group.title}</Text><View style={styles.wrapRow}>{group.modes.map(([id,label,icon]) => { const active=selected.includes(id); return <Pressable key={id} onPress={() => toggle(id)} style={[styles.modeChip, active && styles.modeChipActive]}><Text style={[styles.modeChipIcon, active && {color:colors.bg}]}>{icon}</Text><Text style={[styles.modeChipText, active && {color:colors.bg}]}>{label}</Text></Pressable>; })}</View></View>)}
      </View>}

      <View style={styles.startSummary}><Text style={styles.eyebrow}>VOTRE SOIRÉE</Text><Text style={styles.summaryTitle}>{teamsCount} équipes · {duration} min</Text><Text style={styles.summaryText}>{selected.length === gameModes.length ? 'Mélange automatique · toutes les difficultés' : `${selected.length} modes · ${difficulty === 'all' ? 'toutes difficultés' : difficulty}`}</Text></View>
      <AppButton title="Lancer la soirée  →" onPress={start} style={{ marginTop: 14, minHeight: 62 }} />
      <Text style={styles.helperCenter}>Les réglages avancés restent disponibles dans « Personnaliser ».</Text>
    </ScrollView>
  );
}
