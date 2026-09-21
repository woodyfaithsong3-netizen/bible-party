import React, { useMemo, useState } from 'react';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { router } from 'expo-router';
import { characterProfiles, CharacterProfile } from '@/data/characterProfiles';
import { colors } from '@/theme/colors';
import { styles } from '@/theme/styles';
import { ScenicScreen } from '@/components/ScenicScreen';

function ProfileCard({ item, onPress }: { item: CharacterProfile; onPress: () => void }) {
  return <Pressable onPress={onPress} style={({ pressed }) => [styles.card, { marginBottom: 10 }, pressed && { opacity: 0.82 }]}>
    <Text style={{ color: colors.accent, fontSize: 11, fontWeight: '900', letterSpacing: 1 }}>{item.era.toUpperCase()}</Text>
    <Text style={{ color: colors.text, fontSize: 19, fontWeight: '900', marginTop: 4 }}>{item.name}</Text>
    <Text style={{ color: colors.muted, fontSize: 12, fontWeight: '800', marginTop: 3 }}>{item.role}</Text>
    <Text style={{ color: colors.muted, lineHeight: 20, marginTop: 8 }} numberOfLines={3}>{item.summary}</Text>
    <Text style={{ color: colors.accent, fontWeight: '900', marginTop: 8 }}>Voir la fiche ›</Text>
  </Pressable>;
}

function CharacterDetail({ item, onBack }: { item: CharacterProfile; onBack: () => void }) {
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
  const [selected, setSelected] = useState<CharacterProfile | null>(null);
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return characterProfiles;
    return characterProfiles.filter(x => [x.name, x.era, x.role, x.summary, ...x.qualities].join(' ').toLowerCase().includes(q));
  }, [query]);
  if (selected) return <ScenicScreen><CharacterDetail item={selected} onBack={() => setSelected(null)} /></ScenicScreen>;
  return <ScenicScreen><ScrollView style={styles.screen} contentContainerStyle={styles.content}>
    <Text style={styles.eyebrow}>APPRENDRE</Text>
    <Text style={[styles.title, { marginTop: 7 }]}>Personnages bibliques</Text>
    <Text style={styles.subtitle}>Qui ils sont, ce qu’ils ont fait, leurs qualités et ce que leurs récits permettent d’apprendre.</Text>
    <TextInput value={query} onChangeText={setQuery} placeholder="Rechercher un personnage…" placeholderTextColor={colors.muted} style={[styles.input, { marginTop: 18 }]} />
    <Text style={{ color: colors.muted, fontSize: 12, fontWeight: '800', marginVertical: 12 }}>{filtered.length} fiches disponibles</Text>
    {filtered.map(item => <ProfileCard key={item.id} item={item} onPress={() => setSelected(item)} />)}
    <View style={{ marginTop: 8 }}><Pressable onPress={() => router.push('/training')} style={styles.card}><Text style={{ color: colors.text, fontWeight: '900' }}>Tester mes connaissances ›</Text><Text style={{ color: colors.muted, marginTop: 4 }}>Retrouver les personnages dans les questions d’entraînement.</Text></Pressable></View>
  </ScrollView></ScenicScreen>;
}
