import React, { useMemo, useState } from 'react';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { router, useFocusEffect } from 'expo-router';
import { characterProfiles, CharacterProfile } from '@/data/characterProfiles';
import { characterLearning } from '@/data/characterLearning';
import { colors } from '@/theme/colors';
import { styles } from '@/theme/styles';
import { ScenicScreen } from '@/components/ScenicScreen';
import { getLearnedCharacters, markCharacterLearned } from '@/lib/storage';

const CHRONOLOGICAL_GROUPS = [
  { title: 'Les origines et les patriarches', ids: ['adam','noe','abraham','melchizedek','sarah','hagar','isaac','esau','jacob','leah','joseph'] },
  { title: 'Moïse et l’Exode', ids: ['moise','zipporah','jethro','korah','balaam','balak','josue'] },
  { title: 'L’époque des Juges', ids: ['naomi','ruth','boaz','manoah_father','samson','hannah','eli','samuel'] },
  { title: 'Saül, David et Salomon', ids: ['saul_king','david','michal','joab','salomon'] },
  { title: 'Israël et Juda : rois et prophètes', ids: ['elie','jehoshaphat','elisha','naaman','jonah','joel','amos','isaiah','micah','hezekiah','josiah','zephaniah','jeremiah','nahum','habakkuk'] },
  { title: 'L’exil à Babylone', ids: ['daniel','ezekiel','obadiah'] },
  { title: 'Le retour d’exil', ids: ['zerubbabel','haggai','zechariah','esther','ezra','nehemie','malachi'] },
  { title: 'La période avant Jésus', ids: ['elizabeth','zechariah_priest','joseph_jesus_father','marie','jean-baptiste','herod_antipas'] },
  { title: 'Jésus et son ministère', ids: ['roman_centurion','samaritan_woman','pierre','jean','philip_apostle','bartholomew','james_zebedee','thomas','james_alphaaeus','simon_zealot','mary_magdalen','joanna','woman_issue_blood','jairus','jairus_daughter','gerasene_man','samaritan_leper','martha','mary_bethany','blind_bartimaeus','zacchaeus','joseph_caiaphas','pilate','joseph_arimathea','mary_mother_james'] },
  { title: 'Les débuts du christianisme', ids: ['barnabas','gamaliel','stephen','philip_evangelizer','paul','ananias_damascus','tabitha','cornelius','mary_mark_mother','john_mark','james_brother_jesus','titus','silas','lydia','jason_thessalonica','priscilla','apollos'] },
  { title: 'Paul et les premières congrégations', ids: ['gaius_macedonian','aristarchus','euodia','syntyche','phoebe','claudius_lycias','felix','tychicus','eutychus','festus','agrippa_ii','berenice','julius_centurion','onesimus','philemon','apphia','archippus','onesiphorus','demas','jude_brother_jesus','epaphroditus'] },
] as const;

function ProfileCard({ item, onPress, learned }: { item: CharacterProfile; onPress: () => void; learned: boolean }) {
  return <Pressable onPress={onPress} style={({ pressed }) => [styles.card, { marginBottom: 10 }, pressed && { opacity: 0.82 }]}>
    <Text style={{ color: colors.accent, fontSize: 11, fontWeight: '900', letterSpacing: 1 }}>{item.era.toUpperCase()}</Text>
    <Text style={{ color: colors.text, fontSize: 19, fontWeight: '900', marginTop: 4 }}>{item.name}</Text>
    <Text style={{ color: colors.muted, fontSize: 12, fontWeight: '800', marginTop: 3 }}>{item.role}</Text>
    <Text style={{ color: colors.muted, lineHeight: 20, marginTop: 8 }} numberOfLines={3}>{item.summary}</Text>
    <Text style={{ color: learned ? colors.accent : colors.muted, fontWeight: '900', marginTop: 9 }}>{learned ? '✓ Fiche étudiée' : 'Fiche à étudier'}</Text>
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
          Commence par lire les références ci-dessus, puis approfondis ce personnage dans les références bibliques et les ressources d’étude JW.org. L’objectif est de comprendre le récit, le contexte, les qualités, les erreurs éventuelles et les leçons bibliques plutôt que de retenir seulement quelques faits.
        </Text>\n      </Section>

      <View style={{ marginTop: 18, padding: 15, borderRadius: 16, backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.accent }}>
        <Text style={{ color: colors.accent, fontSize: 15, fontWeight: '900' }}>💡 Le savais-tu ?</Text>
        <Text style={{ color: colors.text, lineHeight: 21, marginTop: 7 }}>{didYouKnow}</Text>
        <Text style={{ color: colors.muted, lineHeight: 19, marginTop: 7 }}>
          Ce fait est conservé comme point de départ d’une lecture : ouvre la ressource JW.org associée pour vérifier le contexte.
        </Text>
      </View>
    </View>
  </ScrollView>;
}

export default function CharactersScreen() {
  const [query, setQuery] = useState('');
  const [learned, setLearned] = useState<string[]>([]);
  const [selectedEra, setSelectedEra] = useState('Tous');
  const [onlyUnlearned, setOnlyUnlearned] = useState(false);
  const [selected, setSelected] = useState<CharacterProfile | null>(null);
  useFocusEffect(React.useCallback(() => {
    void getLearnedCharacters().then(setLearned);
  }, []));
  const eras = useMemo(() => ['Tous', ...Array.from(new Set(characterProfiles.map(x => x.era)))], []);
  const groupedProfiles = useMemo(() => {
    const byId = new Map(characterProfiles.map(item => [item.id, item]));
    return CHRONOLOGICAL_GROUPS.map(group => ({
      title: group.title,
      profiles: group.ids
        .map(id => byId.get(id))
        .filter((item): item is CharacterProfile => Boolean(item)),
    }));
  }, []);

  const filteredGroups = useMemo(() => {
    const q = query.trim().toLowerCase();
    return groupedProfiles.map(group => ({
      ...group,
      profiles: group.profiles.filter(x => {
        const matchesEra = selectedEra === 'Tous' || x.era === selectedEra;
        const matchesQuery = !q || [x.name, x.era, x.role, x.summary, ...x.qualities].join(' ').toLowerCase().includes(q);
        const matchesStudy = !onlyUnlearned || !learned.includes(x.id);
        return matchesEra && matchesQuery && matchesStudy;
      }),
    })).filter(group => group.profiles.length > 0);
  }, [query, selectedEra, onlyUnlearned, learned, groupedProfiles]);
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return orderedProfiles.filter(x => {
      const matchesEra = selectedEra === 'Tous' || x.era === selectedEra;
      const matchesQuery = !q || [x.name, x.era, x.role, x.summary, ...x.qualities].join(' ').toLowerCase().includes(q);
      const matchesStudy = !onlyUnlearned || !learned.includes(x.id);
      return matchesEra && matchesQuery && matchesStudy;
    });
  }, [query, selectedEra, onlyUnlearned, learned, orderedProfiles]);
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
      <Text style={{ color: colors.muted, fontSize: 12, fontWeight: '800' }}>{filtered.length} fiches affichées · {learned.length}/{characterProfiles.length} étudiées</Text>
      <View style={{ height: 7, backgroundColor: colors.border, borderRadius: 8, overflow: 'hidden', marginTop: 8 }}><View style={{ width: `${Math.round((learned.length / Math.max(1, characterProfiles.length)) * 100)}%`, height: '100%', backgroundColor: colors.accent }} /></View>
    </View>
    <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap', marginBottom: 12 }}><Pressable onPress={() => setOnlyUnlearned(x => !x)} style={{ paddingHorizontal: 12, paddingVertical: 9, borderRadius: 16, borderWidth: 1, borderColor: onlyUnlearned ? colors.accent : colors.border, backgroundColor: onlyUnlearned ? colors.accent : colors.surface }}><Text style={{ color: onlyUnlearned ? colors.bg : colors.text, fontSize: 11, fontWeight: '900' }}>{onlyUnlearned ? '✓ À étudier' : 'À étudier'}</Text></Pressable></View>
    {filteredGroups.map(group => <View key={group.title} style={{ marginTop: 18 }}>
      <Text style={{ color: colors.accent, fontSize: 17, fontWeight: '900', marginBottom: 9 }}>{group.title}</Text>
      {group.profiles.map(item => <ProfileCard key={item.id} item={item} learned={learned.includes(item.id)} onPress={() => setSelected(item)} />)}
    </View>)}
  </ScrollView></ScenicScreen>;
}
