import React, { useMemo, useState } from 'react';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { router, useFocusEffect, useLocalSearchParams } from 'expo-router';
import { characterProfiles, CharacterProfile } from '@/data/characterProfiles';
import { characterLearning } from '@/data/characterLearning';
import { colors } from '@/theme/colors';
import { styles } from '@/theme/styles';
import { ScenicScreen } from '@/components/ScenicScreen';
import { getAdventureProgress, getCharacterAnnexProgress } from '@/lib/storage';
import { CHARACTER_ANNEXES } from '@/data/characterAnnexes';
import { SEASON_1 } from '@/data/adventure';
import { SEASON_2 } from '@/data/adventureSeason2';
import { SEASON_3 } from '@/data/adventureSeason3';
import { SEASON_4 } from '@/data/adventureSeason4';
import { SEASON_5 } from '@/data/adventureSeason5';
import { SEASON_6 } from '@/data/adventureSeason6';
import { SEASON_7 } from '@/data/adventureSeason7';
import { SEASON_8 } from '@/data/adventureSeason8';

const FINAL_CHARACTER_ARCHIVE_IDS = new Set(['eve','cain','abel','henoch','lot','rebecca','rachel','benjamin','dinah','aaron','miriam','caleb','rahab','deborah','barak','jael','gideon','jephthah','jonathan','goliath','abigail','nabal','jezebel','mordecai','haman','nicodeme','lazare','judas_iscariote','matthias','matthew','marc','luc','gad','nathan','sons_korah','asaph','heman','ethan','agur','lemuel','job','pharaoh','jochebed','pharaoh_daughter','jesus','absalom','rehoboam','jeroboam','shadrach','meshach','abednego','nebuchadnezzar']);

const CHRONOLOGICAL_BLOCKS = [
  {
    label: 'Origines & patriarches',
    ids: ['adam', 'eve', 'cain', 'abel', 'noe', 'henoch', 'abraham', 'sarah', 'melchizedek', 'hagar', 'lot', 'isaac', 'rebecca', 'esau', 'jacob', 'leah', 'rachel', 'joseph', 'benjamin'],
  },
  {
    label: 'Moïse & l’Exode',
    ids: ['moise', 'jethro', 'zipporah', 'jochebed', 'pharaoh_daughter', 'pharaoh', 'aaron', 'miriam', 'korah', 'josue', 'caleb', 'rahab', 'balaam', 'balak', 'gad', 'nathan', 'job'],
  },
  {
    label: 'Époque des Juges',
    ids: ['ruth', 'naomi', 'manoah_father', 'samson', 'boaz', 'hannah', 'eli', 'samuel', 'dinah', 'deborah', 'barak', 'jael', 'gideon', 'jephthah'],
  },
  {
    label: 'Saül, David & Salomon',
    ids: ['saul_king', 'david', 'michal', 'jonathan', 'goliath', 'asaph', 'heman', 'ethan', 'abigail', 'nabal', 'joab', 'absalom', 'salomon', 'sons_korah', 'agur', 'lemuel'],
  },
  {
    label: 'Rois & prophètes',
    ids: ['elie', 'jehoshaphat', 'naaman', 'elisha', 'jonah', 'joel', 'amos', 'isaiah', 'micah', 'hezekiah', 'josiah', 'zephaniah', 'jeremiah', 'nahum', 'habakkuk', 'daniel', 'shadrach', 'meshach', 'abednego', 'nebuchadnezzar', 'ezekiel', 'obadiah', 'jezebel', 'rehoboam', 'jeroboam'],
  },
  {
    label: 'Exil & retour',
    ids: ['zerubbabel', 'haggai', 'zechariah', 'esther', 'mordecai', 'haman', 'ezra', 'nehemie', 'malachi'],
  },
  {
    label: 'Avant Jésus',
    ids: ['elizabeth', 'zechariah_priest', 'joseph_jesus_father', 'marie', 'jesus', 'mary_bethany', 'mary_magdalen', 'herod_antipas', 'jean-baptiste'],
  },
  {
    label: 'Jésus & son ministère',
    ids: ['joseph_caiaphas', 'pilate', 'joanna', 'samaritan_leper', 'martha', 'pierre', 'jean', 'philip_apostle', 'bartholomew', 'james_alphaaeus', 'simon_zealot', 'james_zebedee', 'matthew', 'roman_centurion', 'samaritan_woman', 'woman_issue_blood', 'gerasene_man', 'jairus', 'jairus_daughter', 'thomas', 'blind_bartimaeus', 'zacchaeus', 'nicodeme', 'lazare', 'judas_iscariote', 'joseph_arimathea', 'mary_mother_james'],
  },
  {
    label: 'Débuts du christianisme',
    ids: ['gamaliel', 'stephen', 'philip_evangelizer', 'mary_mark_mother', 'barnabas', 'james_brother_jesus', 'jude_brother_jesus', 'paul', 'ananias_damascus', 'cornelius', 'tabitha', 'john_mark', 'matthias', 'marc', 'luc', 'silas', 'jason_thessalonica', 'priscilla'],
  },
  {
    label: 'Congrégations chrétiennes',
    ids: ['lydia', 'titus', 'euodia', 'syntyche', 'aristarchus', 'apollos', 'gaius_macedonian', 'phoebe', 'felix', 'eutychus', 'claudius_lycias', 'onesimus', 'philemon', 'apphia', 'archippus', 'tychicus', 'onesiphorus', 'demas', 'festus', 'agrippa_ii', 'berenice', 'julius_centurion', 'epaphroditus'],
  },
] as const;

const CHRONOLOGICAL_CHARACTER_IDS = CHRONOLOGICAL_BLOCKS.flatMap(block => block.ids);

const CHRONOLOGICAL_BLOCK_BY_ID = new Map<string, string>();
for (const block of CHRONOLOGICAL_BLOCKS) {
  for (const id of block.ids) CHRONOLOGICAL_BLOCK_BY_ID.set(id, block.label);
}

function ProfileCard({ item, onPress, unlocked }: { item: CharacterProfile; onPress: () => void; unlocked: boolean }) {
  const chronologyBlock = CHRONOLOGICAL_BLOCK_BY_ID.get(item.id) ?? 'Chronologie';
  return <Pressable disabled={!unlocked} onPress={onPress} style={({ pressed }) => [styles.card, { marginBottom: 10, opacity: unlocked ? 1 : .62 }, pressed && unlocked && { opacity: 0.82 }]}>
    <Text style={{ color: colors.accent, fontSize: 11, fontWeight: '900', letterSpacing: 1 }}>{chronologyBlock.toUpperCase()}</Text>
    <Text style={{ color: colors.text, fontSize: 19, fontWeight: '900', marginTop: 4 }}>{unlocked ? item.name : '???'}</Text>
    <Text style={{ color: colors.muted, fontSize: 12, fontWeight: '800', marginTop: 3 }}>{unlocked ? item.role : 'Personnage verrouillé'}</Text>
    <Text style={{ color: colors.muted, lineHeight: 20, marginTop: 8 }} numberOfLines={3}>{item.summary}</Text>
    <Text style={{ color: unlocked ? colors.accent : colors.muted, fontWeight: '900', marginTop: 9 }}>{!unlocked ? '🔒 À découvrir dans l’Aventure' : '✓ Personnage découvert'}</Text>
  </Pressable>;
}

function Section({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) {
  return <View style={{ marginTop: 18, paddingTop: 16, borderTopWidth: 1, borderTopColor: colors.border }}>
    <Text style={{ color: colors.text, fontSize: 16, fontWeight: '900' }}>{icon} {title}</Text>
    <View style={{ marginTop: 8, gap: 5 }}>{children}</View>
  </View>;
}

function CharacterDetail({ item, onBack, returnEpisodeId }: { item: CharacterProfile; onBack: () => void; returnEpisodeId?: string }) {
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
    <Pressable onPress={onBack}><Text style={{ color: colors.accent, fontWeight: '900' }}>{returnEpisodeId ? '‹ Retour à l’histoire' : '‹ Tous les personnages'}</Text></Pressable>
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
  const [selectedEra, setSelectedEra] = useState('Tous');
  const params = useLocalSearchParams<{ characterId?: string; returnEpisodeId?: string }>();
  const [selected, setSelected] = useState<CharacterProfile | null>(null);
  const [unlockedIds, setUnlockedIds] = useState<string[]>([]);
  useFocusEffect(React.useCallback(() => {
    void Promise.all([getAdventureProgress(), getCharacterAnnexProgress()]).then(([progress, annexProgress]) => {
      const done = new Set(progress);
      const seasons = [SEASON_1, SEASON_2, SEASON_3, SEASON_4, SEASON_5, SEASON_6, SEASON_7, SEASON_8];
      const adventureComplete = seasons.every(season => season.episodes.length > 0 && season.episodes.every(ep => done.has(ep.id)));
      const ids = Array.from(new Set([
        ...seasons.flatMap(season => season.episodes.filter(ep => done.has(ep.id)).flatMap(ep => ep.characterIds ?? [])),
        ...CHARACTER_ANNEXES.filter(annex => annexProgress.includes(annex.id)).map(annex => annex.characterId),
        ...(adventureComplete ? Array.from(FINAL_CHARACTER_ARCHIVE_IDS) : []),
      ]));
      setUnlockedIds(ids);
      if (params.characterId && ids.includes(params.characterId)) {
        const target = characterProfiles.find(item => item.id === params.characterId);
        if (target) setSelected(target);
      }
    });
  }, []));
  const eras = useMemo(() => ['Tous', ...CHRONOLOGICAL_BLOCKS.map(block => block.label)], []);
  const orderedProfiles = useMemo(() => {
    const byId = new Map(characterProfiles.map(item => [item.id, item]));
    return CHRONOLOGICAL_CHARACTER_IDS
      .map(id => byId.get(id))
      .filter((item): item is CharacterProfile => Boolean(item));
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return orderedProfiles.filter(x => {
      const matchesEra = selectedEra === 'Tous' || CHRONOLOGICAL_BLOCK_BY_ID.get(x.id) === selectedEra;
      const matchesQuery = !q || [x.name, x.era, x.role, x.summary, ...x.qualities].join(' ').toLowerCase().includes(q);
      return matchesEra && matchesQuery;
    });
  }, [query, selectedEra, orderedProfiles]);
  if (selected && unlockedIds.includes(selected.id)) return <ScenicScreen><CharacterDetail item={selected} returnEpisodeId={params.returnEpisodeId} onBack={() => { if (params.returnEpisodeId) router.replace({ pathname: '/adventure/episode', params: { id: params.returnEpisodeId } }); else setSelected(null); }} /></ScenicScreen>;
  return <ScenicScreen><ScrollView style={styles.screen} contentContainerStyle={styles.content}>
    <Text style={styles.eyebrow}>APPRENDRE</Text>
    <Text style={[styles.title, { marginTop: 7 }]}>Personnages bibliques</Text>
    <Text style={styles.subtitle}>Qui ils sont, ce qu’ils ont fait, leurs qualités, leurs difficultés et ce que leurs récits permettent d’apprendre.</Text>
    <TextInput value={query} onChangeText={setQuery} placeholder="Rechercher un personnage…" placeholderTextColor={colors.muted} style={[styles.input, { marginTop: 18 }]} />
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 8, paddingVertical: 12 }}>
      {eras.map(era => <Pressable key={era} onPress={() => setSelectedEra(era)} style={{ paddingHorizontal: 12, paddingVertical: 9, borderRadius: 16, borderWidth: 1, borderColor: selectedEra === era ? colors.accent : colors.border, backgroundColor: selectedEra === era ? colors.accent : colors.surface }}><Text style={{ color: selectedEra === era ? colors.bg : colors.text, fontSize: 11, fontWeight: '900' }}>{era}</Text></Pressable>)}
    </ScrollView>
    <View style={{ marginBottom: 12 }}>
      <Text style={{ color: colors.muted, fontSize: 12, fontWeight: '800' }}>{filtered.length} fiches affichées · {unlockedIds.length}/{characterProfiles.length} découvertes</Text>
      <View style={{ height: 7, backgroundColor: colors.border, borderRadius: 8, overflow: 'hidden', marginTop: 8 }}><View style={{ width: `${Math.round((unlockedIds.length / Math.max(1, characterProfiles.length)) * 100)}%`, height: '100%', backgroundColor: colors.accent }} /></View>
    </View>
    {filtered.map(item => <ProfileCard key={item.id} item={item} unlocked={unlockedIds.includes(item.id)} onPress={() => setSelected(item)} />)}
  </ScrollView></ScenicScreen>;
}
