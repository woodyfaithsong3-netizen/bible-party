import React, { useMemo, useState } from 'react';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { router } from 'expo-router';
import { characterProfiles, CharacterProfile } from '@/data/characterProfiles';
import { colors } from '@/theme/colors';
import { styles } from '@/theme/styles';
import { ScenicScreen } from '@/components/ScenicScreen';
import { getLearnedCharacters, markCharacterLearned } from '@/lib/storage';

function ProfileCard({ item, onPress }: { item: CharacterProfile; onPress: () => void }) {
  return <Pressable onPress={onPress} style={({ pressed }) => [styles.card, { marginBottom: 10 }, pressed && { opacity: 0.82 }]}>
    <Text style={{ color: colors.accent, fontSize: 11, fontWeight: '900', letterSpacing: 1 }}>{item.era.toUpperCase()}</Text>
    <Text style={{ color: colors.text, fontSize: 19, fontWeight: '900', marginTop: 4 }}>{item.name}</Text>
    <Text style={{ color: colors.muted, fontSize: 12, fontWeight: '800', marginTop: 3 }}>{item.role}</Text>
    <Text style={{ color: colors.muted, lineHeight: 20, marginTop: 8 }} numberOfLines={3}>{item.summary}</Text>
    <Text style={{ color: colors.accent, fontWeight: '900', marginTop: 8 }}>{learned.includes(item.id) ? '✓ Fiche étudiée' : 'Voir la fiche ›'}</Text>
  </Pressable>;
}

function CharacterDetail({ item, onBack, onLearned }: { item: CharacterProfile; onBack: () => void; onLearned: () => void }) {
  React.useEffect(() => { void markCharacterLearned(item.id).then(onLearned); }, [item.id, onLearned]);
  return <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
    <Pressable onPress={onBack}><Text style={{ color: colors.accent, fontWeight: '900' }}>‹ Tous les personnages</Text></Pressable>
    <Text style={[styles.eyebrow, { marginTop: 22 }]}>{item.era}</Text>
    <Text style={[styles.title, { marginTop: 5 }]}>{item.name}</Text>
    <Text style={[styles.subtitle, { marginTop: 4 }]}>{item.role}</Text>
    <View style={[styles.card, { marginTop: 20, gap: 12 }]}>
      <Text style={{ color: colors.text, fontSize: 16, fontWeight: '900' }}>Qui est-ce ?</Text>
      <Text style={{ color: colors.muted, lineHeight: 22 }}>{item.summary}</Text>
      <Text style={{ color: colors.text, fontSize: 16, fontWeight: '900', marginTop: 4 }}>Ce qu’il / elle a fait</Text>
      {item.keyActions.map((x, i) => <Text key={i} style={{ color: colors.muted, lineHeight: 21 }}>• {x}</Text>)}
      <Text style={{ color: colors.text, fontSize: 16, fontWeight: '900', marginTop: 4 }}>Qualités à retenir</Text>
      <Text style={{ color: colors.muted, lineHeight: 21 }}>{item.qualities.join(' · ')}</Text>
      {item.warnings?.length ? <><Text style={{ color: colors.text, fontSize: 16, fontWeight: '900', marginTop: 4 }}>Points d’attention</Text><Text style={{ color: colors.muted, lineHeight: 21 }}>{item.warnings.join(' ')}</Text></> : null}
      <Text style={{ color: colors.text, fontSize: 16, fontWeight: '900', marginTop: 4 }}>Relations</Text>
      <Text style={{ color: colors.muted, lineHeight: 21 }}>{item.relations.join(' · ')}</Text>
      <Text style={{ color: colors.text, fontSize: 16, fontWeight: '900', marginTop: 4 }}>Références</Text>
      <Text style={{ color: colors.accent, lineHeight: 21 }}>{item.references}</Text>
    </View>
  </ScrollView>;
}

export default function CharactersScreen() {
  const [query, setQuery] = useState('');
  const [learned, setLearned] = useState<string[]>([]);
  const [selectedEra, setSelectedEra] = useState('Tous');
  const [selected, setSelected] = useState<CharacterProfile | null>(null);
  React.useEffect(() => { void getLearnedCharacters().then(setLearned); }, []);
  const eras = useMemo(() => ['Tous', ...Array.from(new Set(characterProfiles.map(x => x.era)))], []);
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return characterProfiles.filter(x => {
      const matchesEra = selectedEra === 'Tous' || x.era === selectedEra;
      const matchesQuery = !q || [x.name, x.era, x.role, x.summary, ...x.qualities].join(' ').toLowerCase().includes(q);
      return matchesEra && matchesQuery;
    });
  }, [query, selectedEra]);
  if (selected) return <ScenicScreen><CharacterDetail item={selected} onBack={() => setSelected(null)} onLearned={() => setLearned(prev => prev.includes(selected.id) ? prev : [selected.id, ...prev])} /></ScenicScreen>;
  return <ScenicScreen><ScrollView style={styles.screen} contentContainerStyle={styles.content}>
    <Text style={styles.eyebrow}>APPRENDRE</Text>
    <Text style={[styles.title, { marginTop: 7 }]}>Personnages bibliques</Text>
    <Text style={styles.subtitle}>Qui ils sont, ce qu’ils ont fait, leurs qualités et ce que leurs récits permettent d’apprendre.</Text>
    <TextInput value={query} onChangeText={setQuery} placeholder="Rechercher un personnage…" placeholderTextColor={colors.muted} style={[styles.input, { marginTop: 18 }]} />
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 8, paddingVertical: 12 }}>
      {eras.map(era => <Pressable key={era} onPress={() => setSelectedEra(era)} style={{ paddingHorizontal: 12, paddingVertical: 9, borderRadius: 16, borderWidth: 1, borderColor: selectedEra === era ? colors.accent : colors.border, backgroundColor: selectedEra === era ? colors.accent : colors.surface }}><Text style={{ color: selectedEra === era ? colors.bg : colors.text, fontSize: 11, fontWeight: '900' }}>{era}</Text></Pressable>)}
    </ScrollView>
    <Text style={{ color: colors.muted, fontSize: 12, fontWeight: '800', marginBottom: 12 }}>{filtered.length} fiches disponibles · {learned.length}/{characterProfiles.length} étudiées</Text>
    {filtered.map(item => <ProfileCard key={item.id} item={item} onPress={() => setSelected(item)} />)}
    <View style={{ marginTop: 8 }}><Pressable onPress={() => router.push('/training')} style={styles.card}><Text style={{ color: colors.text, fontWeight: '900' }}>Tester mes connaissances ›</Text><Text style={{ color: colors.muted, marginTop: 4 }}>Retrouver les personnages dans les questions d’entraînement.</Text></Pressable></View>
  </ScrollView></ScenicScreen>;
}
