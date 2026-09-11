import React, { useMemo, useState } from 'react';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { router } from 'expo-router';
import { AppButton } from '@/components/AppButton';
import { colors } from '@/theme/colors';
import { styles } from '@/theme/styles';
import { getCategoryQuestionCount, setupCategoryFilters } from '@/data/catalog';

const gameModeGroups = [
  {
    title: 'CONNAISSANCE',
    subtitle: 'Répondre, reconnaître et réfléchir',
    modes: [
      ['quiz', 'Quiz', 'Questions à choix multiples', 'Q'],
      ['truefalse', 'Vrai / Faux', 'Répondre en un geste', 'V/F'],
      ['quote', 'Qui est-ce ?', 'Reconnaître le personnage', '“”'],
      ['chronology', 'Chronologie', 'Remettre dans l’ordre', '↕'],
    ],
  },
  {
    title: 'FAIRE DEVINER',
    subtitle: 'Indices, cartes et mots à faire trouver',
    modes: [
      ['mystery', 'Qui suis-je ?', 'Indices progressifs', 'M'],
      ['timesup', 'Time’s Up', 'Faire deviner une carte', 'T'],
      ['threeclues', '3 indices', 'Trouver le plus vite possible', '3'],
      ['forbidden', 'Mot interdit', 'Faire deviner sans certains mots', '✕'],
    ],
  },
  {
    title: 'DÉFIS',
    subtitle: 'Pression, duel et prise de risque',
    modes: [
      ['challenge', 'Défi 10 secondes', 'Le chrono met la pression', '10'],
      ['intruder', 'Intrus', 'Trouver l’élément différent', '✦'],
      ['faceoff', 'Face-à-face', 'Deux équipes, une réponse', 'VS'],
      ['risk', 'Mise à risque', 'Miser avant de répondre', '⚡'],
    ],
  },
] as const;
const gameModes = gameModeGroups.flatMap(group => group.modes.map(mode => mode[0]));
const difficulties = [['all', 'Tous'], ['easy', 'Facile'], ['medium', 'Intermédiaire'], ['hard', 'Expert']] as const;

export default function SetupScreen() {
  const [hostName, setHostName] = useState('Maître de jeu');
  const [teamsCount, setTeamsCount] = useState(2);
  const [teamNames, setTeamNames] = useState(['Équipe David', 'Équipe Paul', 'Équipe Ruth', 'Équipe Esther']);
  const [duration, setDuration] = useState(45);
  const [selected, setSelected] = useState<string[]>(['quiz', 'mystery', 'truefalse']);
  const [categories, setCategories] = useState<string[]>([]);
  const [difficulty, setDifficulty] = useState<'all' | 'easy' | 'medium' | 'hard'>('all');
  const names = useMemo(() => teamNames.slice(0, teamsCount), [teamNames, teamsCount]);

  const toggle = (id: string) => setSelected(v => v.includes(id) ? v.filter(x => x !== id) : [...v, id]);
  const toggleCategory = (id: string) => setCategories(v => v.includes(id) ? v.filter(x => x !== id) : [...v, id]);
  const start = () => {
    if (!selected.length) return;
    const clean = names.map((x, i) => (x.trim().replace(/[|]/g, ' ') || `Équipe ${String.fromCharCode(65 + i)}`).slice(0, 28));
    router.push({ pathname: '/game', params: { modes: selected.join(','), teams: clean.join('|'), duration: String(duration), categories: categories.join(','), difficulty, host: hostName.trim() || 'Maître de jeu' } });
  };

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <View style={[styles.topRow, { marginBottom: 24 }]}>
        <View><Text style={styles.eyebrow}>NOUVELLE PARTIE</Text><Text style={{ color: colors.text, fontSize: 12, fontWeight: '700', marginTop: 4 }}>CONFIGURATION RAPIDE</Text></View>
        <Text style={{ color: colors.accent, fontSize: 22, fontWeight: '900' }}>01</Text>
      </View>
      <Text style={styles.title}>Prépare la soirée.</Text>
      <Text style={styles.subtitle}>Quelques choix, puis on lance. Tu peux tout changer avant de commencer.</Text>

      <Text style={[styles.sectionTitle, { marginTop: 30 }]}>01 · Maître de jeu</Text>
      <View style={styles.card}>
        <Text style={{ color: colors.muted, fontSize: 12, lineHeight: 18, marginBottom: 10 }}>Cette personne garde le téléphone pendant toute la partie.</Text>
        <TextInput value={hostName} onChangeText={setHostName} placeholder="Nom du maître de jeu" placeholderTextColor={colors.muted} style={{ backgroundColor: colors.bg, borderColor: colors.border, borderWidth: 1, borderRadius: 15, paddingHorizontal: 14, height: 52, color: colors.text, fontSize: 15, fontWeight: '700' }} />
      </View>

      <Text style={[styles.sectionTitle, { marginTop: 26 }]}>02 · Équipes</Text>
      <View style={styles.card}>
        <View style={{ flexDirection: 'row', gap: 8 }}>
          {[2, 3, 4].map(n => (
            <Pressable key={n} onPress={() => setTeamsCount(n)} style={{ flex: 1, minHeight: 50, borderRadius: 15, borderWidth: 1, borderColor: teamsCount === n ? colors.accent : colors.border, backgroundColor: teamsCount === n ? colors.accent : colors.surface2, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: teamsCount === n ? colors.bg : colors.text, fontSize: 17, fontWeight: '900' }}>{n}</Text>
            </Pressable>
          ))}
        </View>
        <View style={{ gap: 9, marginTop: 12 }}>
          {names.map((name, i) => <TextInput key={i} value={name} onChangeText={v => setTeamNames(old => old.map((x, j) => j === i ? v : x))} placeholder={`Équipe ${i + 1}`} placeholderTextColor={colors.muted} style={{ backgroundColor: colors.bg, borderColor: colors.border, borderWidth: 1, borderRadius: 15, paddingHorizontal: 14, height: 52, color: colors.text, fontSize: 15, fontWeight: '700' }} />)}
        </View>
      </View>

      <Text style={[styles.sectionTitle, { marginTop: 26 }]}>03 · Durée</Text>
      <View style={{ flexDirection: 'row', gap: 8 }}>
        {[20, 30, 45, 60].map(n => <AppButton key={n} title={`${n} min`} onPress={() => setDuration(n)} variant={duration === n ? 'primary' : 'secondary'} style={{ flex: 1, paddingHorizontal: 5 }} />)}
      </View>

      <Text style={[styles.sectionTitle, { marginTop: 26 }]}>04 · Catégories</Text>
      <Text style={{ color: colors.muted, fontSize: 12, marginBottom: 10 }}>Aucune sélection = tout le catalogue.</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
        {setupCategoryFilters.map(category => {
          const active = categories.includes(category);
          return <Pressable key={category} onPress={() => toggleCategory(category)} style={{ minHeight: 46, paddingHorizontal: 14, borderRadius: 15, borderWidth: 1, borderColor: active ? colors.accent : colors.border, backgroundColor: active ? colors.accent : colors.surface2, justifyContent: 'center' }}>
            <Text style={{ color: active ? colors.bg : colors.text, fontWeight: '800', fontSize: 13 }}>{active ? '✓  ' : ''}{category} · {getCategoryQuestionCount(category)}</Text>
          </Pressable>;
        })}
      </View>

      <Text style={[styles.sectionTitle, { marginTop: 26 }]}>05 · Difficulté</Text>
      <View style={{ flexDirection: 'row', gap: 8 }}>
        {difficulties.map(([id, label]) => <AppButton key={id} title={label} onPress={() => setDifficulty(id)} variant={difficulty === id ? 'primary' : 'secondary'} style={{ flex: 1, paddingHorizontal: 5 }} />)}
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', marginTop: 30, marginBottom: 12 }}>
        <View><Text style={styles.sectionTitle}>06 · Modes</Text><Text style={{ color: colors.muted, fontSize: 12 }}>{selected.length} sélectionné(s)</Text></View>
        <AppButton title="Tout choisir" onPress={() => setSelected(gameModes)} variant="secondary" style={{ minHeight: 40, paddingHorizontal: 12 }} />
      </View>

      <View style={{ gap: 22 }}>
        {gameModeGroups.map(group => (
          <View key={group.title}>
            <Text style={{ color: colors.accent, fontSize: 11, fontWeight: '900', letterSpacing: 1.5 }}>{group.title}</Text>
            <Text style={{ color: colors.muted, fontSize: 12, marginTop: 4, marginBottom: 10 }}>{group.subtitle}</Text>
            <View style={{ gap: 9 }}>
              {group.modes.map(([id, label, desc, icon]) => {
                const active = selected.includes(id);
                return (
                  <Pressable key={id} onPress={() => toggle(id)} style={{ flexDirection: 'row', alignItems: 'center', padding: 14, minHeight: 72, borderRadius: 19, borderWidth: 1, borderColor: active ? colors.accent : colors.border, backgroundColor: active ? colors.surface3 : colors.surface }}>
                    <View style={{ width: 42, height: 42, borderRadius: 13, backgroundColor: active ? colors.accent : colors.bg, alignItems: 'center', justifyContent: 'center', marginRight: 12 }}>
                      <Text style={{ color: active ? colors.bg : colors.accent, fontWeight: '900', fontSize: icon.length > 2 ? 10 : 16 }}>{icon}</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text style={{ color: colors.text, fontSize: 15, fontWeight: '900' }}>{label}</Text>
                      <Text style={{ color: colors.muted, fontSize: 11, marginTop: 3 }}>{desc}</Text>
                    </View>
                    <View style={{ width: 24, height: 24, borderRadius: 12, borderWidth: 1, borderColor: active ? colors.accent : colors.border, backgroundColor: active ? colors.accent : 'transparent', alignItems: 'center', justifyContent: 'center' }}>
                      {active && <Text style={{ color: colors.bg, fontSize: 13, fontWeight: '900' }}>✓</Text>}
                    </View>
                  </Pressable>
                );
              })}
            </View>
          </View>
        ))}
      </View>

      <View style={[styles.glowCard, { marginTop: 20, padding: 17 }]}>
        <Text style={styles.eyebrow}>RÉSUMÉ</Text>
        <Text style={{ color: colors.text, fontSize: 16, fontWeight: '900', marginTop: 6 }}>{teamsCount} équipes · {duration} min</Text>
        <Text style={{ color: colors.muted, marginTop: 3, fontSize: 12 }}>{selected.length} modes · {difficulty === 'all' ? 'toutes difficultés' : difficulty}</Text>
      </View>

      <View style={{ marginTop: 12 }}><AppButton title="Lancer la soirée  →" onPress={start} disabled={!selected.length} /></View>
      <View style={{ marginTop: 9 }}><AppButton title="Retour" onPress={() => router.back()} variant="secondary" /></View>
    </ScrollView>
  );
}
