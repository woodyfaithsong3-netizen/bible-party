import React, { useMemo, useState } from 'react';
import { Linking, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { router, useFocusEffect } from 'expo-router';
import { characterProfiles, CharacterProfile } from '@/data/characterProfiles';
import { characterLearning } from '@/data/characterLearning';
import { colors } from '@/theme/colors';
import { styles } from '@/theme/styles';
import { ScenicScreen } from '@/components/ScenicScreen';
import { getLearnedCharacters, markCharacterLearned } from '@/lib/storage';
import { CharacterMastery, loadCharacterMastery } from '@/data/characterReview';

function ProfileCard({ item, onPress, learned, mastery }: { item: CharacterProfile; onPress: () => void; learned: boolean; mastery?: CharacterMastery }) {
  const level = mastery?.level ?? 0;
  const due = !mastery || mastery.nextReviewAt <= Date.now();
  const status = due ? 'À revoir' : level >= 4 ? 'Maîtrisé' : 'En cours';
  const statusColor = due ? colors.muted : level >= 4 ? '#75E2C1' : colors.accent;
  return <Pressable onPress={onPress} style={({ pressed }) => [styles.card, { marginBottom: 10 }, pressed && { opacity: 0.82 }]}>
    <Text style={{ color: colors.accent, fontSize: 11, fontWeight: '900', letterSpacing: 1 }}>{item.era.toUpperCase()}</Text>
    <Text style={{ color: colors.text, fontSize: 19, fontWeight: '900', marginTop: 4 }}>{item.name}</Text>
    <Text style={{ color: colors.muted, fontSize: 12, fontWeight: '800', marginTop: 3 }}>{item.role}</Text>
    <Text style={{ color: colors.muted, lineHeight: 20, marginTop: 8 }} numberOfLines={3}>{item.summary}</Text>
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 9 }}><Text style={{ color: learned ? colors.accent : colors.muted, fontWeight: '900' }}>{learned ? '✓ Fiche étudiée' : 'Fiche à étudier'}</Text><Text style={{ color: statusColor, fontSize: 11, fontWeight: '900' }}>{status} · {level}/5</Text></View><View style={{ height: 5, backgroundColor: colors.border, borderRadius: 6, overflow: 'hidden', marginTop: 7 }}><View style={{ width: `${level * 20}%`, height: '100%', backgroundColor: statusColor }} /></View><Text style={{ color: colors.muted, fontSize: 11, fontWeight: '700', marginTop: 6 }}>✓ {mastery?.correct ?? 0} bonnes · ✕ {mastery?.wrong ?? 0} erreurs{mastery && mastery.nextReviewAt > Date.now() ? ` · prochaine révision ${new Date(mastery.nextReviewAt).toLocaleDateString('fr-FR')}` : ''}</Text>
  </Pressable>;
}

function Section({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) {
  return <View style={{ marginTop: 18, paddingTop: 16, borderTopWidth: 1, borderTopColor: colors.border }}>
    <Text style={{ color: colors.text, fontSize: 16, fontWeight: '900' }}>{icon} {title}</Text>
    <View style={{ marginTop: 8, gap: 5 }}>{children}</View>
  </View>;
}

function CharacterDetail({ item, onBack }: { item: CharacterProfile; onBack: () => void }) {
  React.useEffect(() => { void markCharacterLearned(item.id); }, [item.id]);

  const learning = characterLearning[item.id];

  const familyAndEntourage = item.relations.length
    ? item.relations.join(' · ')
    : 'Aucun proche ou personnage associé n’est indiqué dans la fiche actuelle.';

  const lessons = learning?.lessonPoints?.length
    ? learning.lessonPoints.join(' ')
    : 'Le récit permet surtout de réfléchir aux choix et aux conséquences présentés dans la Bible.';

  const relationshipWithJehovah = learning?.relationshipWithJehovah
    ?? (item.qualities.some(q => /foi|fidélité|prière|obéissance|zèle|confiance|repentir|humilité|espérance/i.test(q))
      ? `Son récit permet d’observer sa relation avec Jéhovah notamment sous l’angle de : ${item.qualities.filter(q => /foi|fidélité|prière|obéissance|zèle|confiance|repentir|humilité|espérance/i.test(q)).join(', ')}.`
      : item.warnings?.length
        ? 'Son récit montre aussi les conséquences de choix qui n’étaient pas en accord avec la volonté de Jéhovah.'
        : 'Le récit biblique permet d’examiner comment ses choix et ses actions s’inscrivent dans le cadre du culte de Jéhovah.');

  const didYouKnow = learning?.didYouKnow
    ?? 'Aucun fait supplémentaire n’est ajouté ici lorsque les ressources étudiées ne permettent pas d’en vérifier un précisément.';

  return <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
    <Pressable onPress={onBack}><Text style={{ color: colors.accent, fontWeight: '900' }}>‹ Tous les personnages</Text></Pressable>
    <Text style={[styles.eyebrow, { marginTop: 22 }]}>{item.era}</Text>
    <Text style={[styles.title, { marginTop: 5 }]}>{item.name}</Text>
    <Text style={[styles.subtitle, { marginTop: 4 }]}>{item.role}</Text>

    <View style={[styles.card, { marginTop: 20 }]}>
      <Section icon="📖" title="Qui était-il / elle ?">
        <Text style={{ color: colors.muted, lineHeight: 22 }}>{item.summary}</Text>
      </Section>

      <Section icon="🕰️" title="À quelle époque ?">
        <Text style={{ color: colors.muted, lineHeight: 21 }}>{item.era}</Text>
      </Section>

      <Section icon="🌍" title="Où vivait-il / elle ?">
        <Text style={{ color: colors.muted, lineHeight: 21 }}>
          {learning?.location ?? 'Les lieux précis ne sont pas encore détaillés dans cette fiche. Consulte les références bibliques et les ressources JW.org ci-dessous.'}
        </Text>
      </Section>

      <Section icon="👨‍👩‍👦" title="Sa famille et son entourage">
        <Text style={{ color: colors.muted, lineHeight: 21 }}>{familyAndEntourage}</Text>
      </Section>

      <Section icon="📚" title="Ce que la Bible raconte">
        {item.keyActions.map((x, i) => <Text key={i} style={{ color: colors.muted, lineHeight: 21 }}>• {x}</Text>)}
      </Section>

      <Section icon="💪" title="Ses qualités">
        <Text style={{ color: colors.muted, lineHeight: 21 }}>
          {item.qualities.length ? item.qualities.join(' · ') : 'La fiche actuelle ne présente pas de qualité particulière comme point central.'}
        </Text>
      </Section>

      {item.warnings?.length ? <Section icon="⚠️" title="Ses difficultés / erreurs">
        {item.warnings.map((x, i) => <Text key={i} style={{ color: colors.muted, lineHeight: 21 }}>• {x}</Text>)}
      </Section> : <Section icon="⚠️" title="Ses difficultés / erreurs">
        <Text style={{ color: colors.muted, lineHeight: 21 }}>La fiche actuelle ne signale pas d’erreur particulière. Les difficultés du récit sont à découvrir dans les textes indiqués.</Text>
      </Section>}

      {learning ? <Section icon="🧭" title="Repères d’étude JW.org">
        <Text style={{ color: colors.muted, lineHeight: 21 }}>{learning.studyFocus}</Text>
      </Section> : null}

      <Section icon="🙏" title="Sa relation avec Jéhovah">
        <Text style={{ color: colors.muted, lineHeight: 21 }}>{relationshipWithJehovah}</Text>
      </Section>

      <Section icon="💡" title="Ce que son exemple nous apprend">
        <Text style={{ color: colors.muted, lineHeight: 21 }}>{lessons}</Text>
      </Section>

      <Section icon="📍" title="Textes bibliques à lire">
        <Text style={{ color: colors.accent, lineHeight: 21 }}>{item.references}</Text>
      </Section>

      <Section icon="🔎" title="À approfondir">
        <Text style={{ color: colors.muted, lineHeight: 21 }}>
          Commence par lire les références ci-dessus, puis approfondis ce personnage dans les ressources JW.org. L’objectif est de comprendre le récit, le contexte, les qualités, les erreurs éventuelles et les leçons bibliques plutôt que de retenir seulement quelques faits.
        </Text>
        <Pressable onPress={() => router.push({ pathname: '/training', params: { category: 'Personnages' } })} style={{ marginTop: 8 }}>
          <Text style={{ color: colors.accent, fontWeight: '900' }}>🔎 Continuer avec les questions « Personnages » ›</Text>
        </Pressable>
        <Text style={{ color: colors.muted, lineHeight: 19, marginTop: 8 }}>
          Sources d’étude : uniquement JW.org. Les ressources ci-dessous servent à vérifier le contexte, les récits bibliques et les enseignements associés à ce personnage.
        </Text>
        {learning?.jwResources.map(source => <Pressable key={source.url} onPress={() => void Linking.openURL(source.url)} style={{ marginTop: 7 }}>
          <Text style={{ color: colors.accent, fontWeight: '900' }}>↗ {source.title}</Text>
        </Pressable>)}
      </Section>

      <View style={{ marginTop: 18, padding: 15, borderRadius: 16, backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.accent }}>
        <Text style={{ color: colors.accent, fontSize: 15, fontWeight: '900' }}>💡 Le savais-tu ?</Text>
        <Text style={{ color: colors.text, lineHeight: 21, marginTop: 7 }}>{didYouKnow}</Text>
        <Text style={{ color: colors.muted, lineHeight: 19, marginTop: 7 }}>
          Ce fait est conservé comme point de départ d’une lecture : ouvre la ressource JW.org associée pour vérifier le contexte.
        </Text>
      </View>

      <Pressable onPress={() => router.push({ pathname: '/revision', params: { characterId: item.id } })} style={[styles.card, { marginTop: 18, backgroundColor: colors.accent }]}>
        <Text style={{ color: colors.bg, fontWeight: '900' }}>🎯 Tester mes connaissances</Text>
        <Text style={{ color: colors.bg, marginTop: 4, opacity: 0.82 }}>Retrouver les personnages dans les questions d’entraînement.</Text>
      </Pressable>
    </View>
  </ScrollView>;
}

export default function CharactersScreen() {
  const [query, setQuery] = useState('');
  const [learned, setLearned] = useState<string[]>([]);
  const [selectedEra, setSelectedEra] = useState('Tous');
  const [onlyUnlearned, setOnlyUnlearned] = useState(false);
  const [masteryFilter, setMasteryFilter] = useState<'Tous' | 'À revoir' | 'En cours' | 'Maîtrisés'>('Tous');
  const [mastery, setMastery] = useState<Record<string, CharacterMastery>>({});
  const [selected, setSelected] = useState<CharacterProfile | null>(null);
  useFocusEffect(React.useCallback(() => {
    void getLearnedCharacters().then(setLearned);
    void loadCharacterMastery().then(setMastery);
  }, []));
  const eras = useMemo(() => ['Tous', ...Array.from(new Set(characterProfiles.map(x => x.era)))], []);
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return characterProfiles.filter(x => {
      const matchesEra = selectedEra === 'Tous' || x.era === selectedEra;
      const matchesQuery = !q || [x.name, x.era, x.role, x.summary, ...x.qualities].join(' ').toLowerCase().includes(q);
      const matchesStudy = !onlyUnlearned || !learned.includes(x.id);
      const level = mastery[x.id]?.level ?? 0;
      const due = !mastery[x.id] || mastery[x.id].nextReviewAt <= Date.now();
      const status = due ? 'À revoir' : level >= 4 ? 'Maîtrisés' : 'En cours';
      const matchesMastery = masteryFilter === 'Tous' || status === masteryFilter;
      return matchesEra && matchesQuery && matchesStudy && matchesMastery;
    });
  }, [query, selectedEra, onlyUnlearned, learned, mastery, masteryFilter]);
  if (selected) return <ScenicScreen><CharacterDetail item={selected} onBack={() => { setSelected(null); void getLearnedCharacters().then(setLearned); }} /></ScenicScreen>;
  return <ScenicScreen><ScrollView style={styles.screen} contentContainerStyle={styles.content}>
    <Text style={styles.eyebrow}>APPRENDRE</Text>
    <Text style={[styles.title, { marginTop: 7 }]}>Personnages bibliques</Text>
    <Text style={styles.subtitle}>Qui ils sont, ce qu’ils ont fait, leurs qualités, leurs difficultés et ce que leurs récits permettent d’apprendre.</Text>
    <TextInput value={query} onChangeText={setQuery} placeholder="Rechercher un personnage…" placeholderTextColor={colors.muted} style={[styles.input, { marginTop: 18 }]} />
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 8, paddingVertical: 12 }}>
      {eras.map(era => <Pressable key={era} onPress={() => setSelectedEra(era)} style={{ paddingHorizontal: 12, paddingVertical: 9, borderRadius: 16, borderWidth: 1, borderColor: selectedEra === era ? colors.accent : colors.border, backgroundColor: selectedEra === era ? colors.accent : colors.surface }}><Text style={{ color: selectedEra === era ? colors.bg : colors.text, fontSize: 11, fontWeight: '900' }}>{era}</Text></Pressable>)}
    </ScrollView>
    <View style={{ marginBottom: 12 }}>
      <Text style={{ color: colors.muted, fontSize: 12, fontWeight: '800' }}>{filtered.length} fiches affichées · {learned.length}/{characterProfiles.length} étudiées · {Object.values(mastery).filter(x => x.level >= 4).length} maîtrisées</Text>
      <View style={{ height: 7, backgroundColor: colors.border, borderRadius: 8, overflow: 'hidden', marginTop: 8 }}><View style={{ width: `${Math.round((learned.length / Math.max(1, characterProfiles.length)) * 100)}%`, height: '100%', backgroundColor: colors.accent }} /></View>
    </View>
    <View style={{ flexDirection: 'row', gap: 8, marginBottom: 10 }}>
      <Pressable onPress={() => router.push({ pathname: '/revision', params: { errors: '1' } })} style={{ flex: 1, minHeight: 46, borderRadius: 16, backgroundColor: colors.accent, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: colors.bg, fontSize: 12, fontWeight: '900' }}>🧠 RÉVISER MES ERREURS</Text>
      </Pressable>
      <Pressable onPress={() => router.push('/revision')} style={{ flex: 1, minHeight: 46, borderRadius: 16, borderWidth: 1, borderColor: colors.accent, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: colors.text, fontSize: 12, fontWeight: '900' }}>🎯 SESSION À REVOIR</Text>
      </Pressable>
    </View>
    <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap', marginBottom: 12 }}><Pressable onPress={() => setOnlyUnlearned(x => !x)} style={{ paddingHorizontal: 12, paddingVertical: 9, borderRadius: 16, borderWidth: 1, borderColor: onlyUnlearned ? colors.accent : colors.border, backgroundColor: onlyUnlearned ? colors.accent : colors.surface }}><Text style={{ color: onlyUnlearned ? colors.bg : colors.text, fontSize: 11, fontWeight: '900' }}>{onlyUnlearned ? '✓ À étudier' : 'À étudier'}</Text></Pressable>{(['Tous', 'À revoir', 'En cours', 'Maîtrisés'] as const).map(status => <Pressable key={status} onPress={() => setMasteryFilter(status)} style={{ paddingHorizontal: 12, paddingVertical: 9, borderRadius: 16, borderWidth: 1, borderColor: masteryFilter === status ? colors.accent : colors.border, backgroundColor: masteryFilter === status ? colors.accent : colors.surface }}><Text style={{ color: masteryFilter === status ? colors.bg : colors.text, fontSize: 11, fontWeight: '900' }}>{status}</Text></Pressable>)}</View>
    {filtered.map(item => <ProfileCard key={item.id} item={item} learned={learned.includes(item.id)} mastery={mastery[item.id]} onPress={() => setSelected(item)} />)}
    <View style={{ marginTop: 8 }}><Pressable onPress={() => router.push({ pathname: '/training', params: { category: 'Personnages' } })} style={styles.card}><Text style={{ color: colors.text, fontWeight: '900' }}>Tester mes connaissances ›</Text><Text style={{ color: colors.muted, marginTop: 4 }}>Retrouver les personnages dans les questions d’entraînement.</Text></Pressable></View>
  </ScrollView></ScenicScreen>;
}
