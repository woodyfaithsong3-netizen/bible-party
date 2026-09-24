import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Image, ImageBackground, Modal, Platform, Pressable, ScrollView, StyleSheet, Text, View, Vibration, useWindowDimensions } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '@/theme/colors';
import { getSettings, AppSettings } from '@/lib/settings';
import { normalizeCategory } from '@/data/catalog';
import { getGamePool } from '@/data/gameContent';
import { Question, Team } from '@/types';

const scenic = require('../../assets/images/backgrounds/home-valley-exact-source.png');
const modeIcons: Record<string, number> = {
  quiz: require('../../assets/images/ui/card.png'),
  mystery: require('../../assets/images/ui/question.png'),
  truefalse: require('../../assets/images/ui/star.png'),
  challenge: require('../../assets/images/ui/bolt.png'),
};
const modeAccent: Record<string, string> = {
  quiz: '#4FD8F5', mystery: '#4FD8F5', truefalse: '#FFE05A', challenge: '#FFD43B',
};

const ROUND_TARGETS: Record<number, number> = { 1: 4, 20: 10, 30: 14, 45: 20, 60: 28 };
const MODE_LABELS: Record<string, string> = {
  quiz: 'QUIZ', mystery: 'QUI EST-CE ?', truefalse: 'VRAI OU FAUX', challenge: 'DÉFI 10 SECONDES'
};

const shuffle = <T,>(a: T[]) => {
  const r = [...a]; for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; } return r;
};
const clock = (s: number) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

function Glass({ children, strong = false, style = {} }: { children: React.ReactNode; strong?: boolean; style?: any }) {
  return <View style={[{ borderRadius: 24, borderWidth: 1, borderColor: strong ? 'rgba(255,229,138,.72)' : 'rgba(164,232,247,.48)', backgroundColor: strong ? 'rgba(13,64,77,.72)' : 'rgba(7,43,55,.64)', padding: 18, shadowColor: '#00131A', shadowOpacity: .32, shadowRadius: 20 }, style]}>{children}</View>;
}
function Gold({ title, onPress, disabled = false, secondary = false, style = {} }: { title: string; onPress: () => void; disabled?: boolean; secondary?: boolean; style?: any }) {
  return <Pressable disabled={disabled} onPress={onPress} style={({ pressed }) => [{ minHeight: 54, borderRadius: 20, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 18, borderWidth: 1, borderColor: secondary ? 'rgba(119,221,241,.5)' : '#FFEAA0', backgroundColor: secondary ? 'rgba(5,49,62,.76)' : '#F4C62D', opacity: disabled ? .42 : pressed ? .82 : 1 }, style]}><Text style={{ color: secondary ? '#F4FBFA' : '#153A38', fontSize: 16, fontWeight: '900' }}>{title}</Text></Pressable>;
}
function ModeTitle({ icon, title, subtitle }: { icon: string | number; title: string; subtitle: string }) {
  const source = typeof icon === 'number' ? icon : modeIcons[icon] || modeIcons.quiz;
  const accent = modeAccent[typeof icon === 'string' ? icon : 'quiz'] || '#FFE05A';
  return <View style={{ alignItems: 'center', marginBottom: 16 }}>
    <View style={{ width: 76, height: 76, borderRadius: 24, alignItems: 'center', justifyContent: 'center', borderWidth: 1.5, borderColor: accent, backgroundColor: 'rgba(4,42,54,.72)', shadowColor: accent, shadowOpacity: .32, shadowRadius: 16 }}>
      <Image source={source} style={{ width: 52, height: 52 }} resizeMode="contain" />
    </View>
    <Text style={{ color: '#FFFDF4', fontSize: 27, fontWeight: '900', marginTop: 9, textAlign: 'center', letterSpacing: .3 }}>{title}</Text>
    <Text style={{ color: '#E2F3F0', fontSize: 13, fontWeight: '700', marginTop: 3, textAlign: 'center' }}>{subtitle}</Text>
  </View>;
}
function ScoreStrip({ teams, active }: { teams: Team[]; active: number }) {
  return <View style={{ flexDirection: 'row', borderRadius: 18, overflow: 'hidden', borderWidth: 1, borderColor: 'rgba(157,229,242,.46)', backgroundColor: 'rgba(3,35,44,.78)', marginTop: 12 }}>{teams.map((t, i) => <View key={t.id} style={{ flex: 1, paddingVertical: 8, paddingHorizontal: 9, alignItems: 'center', borderRightWidth: i < teams.length - 1 ? 1 : 0, borderRightColor: 'rgba(157,229,242,.24)', backgroundColor: i === active ? 'rgba(242,201,76,.10)' : 'transparent' }}><Text style={{ color: i === active ? '#FFE58A' : '#D7ECE8', fontSize: 10, fontWeight: '800' }}>{t.name}</Text><Text style={{ color: '#FFFDF5', fontSize: 18, fontWeight: '900', marginTop: 1 }}>{t.score}</Text></View>)}</View>;
}
function Dots({ current, total }: { current: number; total: number }) { return <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 6, marginTop: 5 }}>{Array.from({ length: Math.min(total, 8) }, (_, i) => <View key={i} style={{ width: i === ((current - 1) % 8) ? 22 : 7, height: 7, borderRadius: 5, backgroundColor: i === ((current - 1) % 8) ? '#FFE17A' : 'rgba(255,255,255,.55)' }} />)}</View>; }

export default function GameScreen() {
  const { width, height } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const compact = width < 390 || height < 760;
  const params = useLocalSearchParams<{ modes?: string; teams?: string; duration?: string; categories?: string; difficulty?: string; solo?: string }>();
  const allowedModes = new Set(['quiz', 'mystery', 'truefalse', 'challenge']);
  const requestedModes = (params.modes || '').split(',').filter((m): m is string => allowedModes.has(m));
  const modes = requestedModes.length ? requestedModes : ['quiz', 'mystery', 'truefalse', 'challenge'];
  const teamNames = (params.teams || 'Équipe A|Équipe B').split('|').filter(Boolean);
  const duration = Math.max(1, Number(params.duration || 45));
  const selectedCategories = (params.categories || '').split(',').filter(Boolean);
  const difficulty = params.difficulty || 'all';
  const solo = params.solo === '1';
  const target = ROUND_TARGETS[duration] || Math.max(4, Math.round(duration * .45));
  const [teams, setTeams] = useState<Team[]>(teamNames.map((name, i) => ({ id: String(i), name, score: 0 })));
  const teamsRef = useRef(teams); useEffect(() => { teamsRef.current = teams; }, [teams]);
  const [round, setRound] = useState(0); const [active, setActive] = useState(0);
  const [selected, setSelected] = useState<number | null>(null); const [tf, setTf] = useState<boolean | null>(null);
  const [clue, setClue] = useState(0);
  const [revealed, setRevealed] = useState(false); const [validated, setValidated] = useState(false); const [showMaster, setShowMaster] = useState(false); const [correct, setCorrect] = useState<boolean | null>(null); const [delta, setDelta] = useState(0);
  const [timer, setTimer] = useState(10); const [running, setRunning] = useState(false); const [timedStarted, setTimedStarted] = useState(false); const [paused, setPaused] = useState(false); const [confirmQuit, setConfirmQuit] = useState(false);
  const [roundIntro, setRoundIntro] = useState(true);
  const [gameLeft, setGameLeft] = useState(duration * 60); const deadline = useRef(0); const roundDeadline = useRef<number | null>(null);
  const [settings, setSettings] = useState<AppSettings>({ sounds: true, haptics: true, animations: true, highContrast: false });
  const ended = useRef(false);

  const decks = useMemo<Record<string, Question[]>>(() => {
    const base: Record<string, Question[]> = Object.fromEntries(modes.map((m) => [m, getGamePool(m as any)]));
    const out: Record<string, Question[]> = {};
    Object.entries(base).forEach(([mode, pool]) => {
      let p = pool;
      if (selectedCategories.length) p = p.filter(q => selectedCategories.includes(normalizeCategory(q.category)) || (selectedCategories.includes('Défis') && (q.type === 'challenge' || q.type === 'timesup')));
      const d = difficulty === 'all' ? p : p.filter(q => q.difficulty === difficulty);
      out[mode] = shuffle(d);
    }); return out;
  }, [selectedCategories.join(','), difficulty]);
  const playable = useMemo(() => modes.filter(m => (decks[m] || []).length), [modes.join(','), decks]);
  const mode = playable.length ? playable[round % playable.length] : 'quiz';
  const question = useMemo<Question>(() => {
    const fallback = getGamePool('quiz');
    const usedIds = new Set<string>();
    const usedReferences = new Set<string>();

    // Rejoue mentalement les manches précédentes pour construire une sélection
    // sans répétition prématurée entre les 4 modes, pas seulement à l'intérieur
    // de chaque petit pool.
    let raw: Question | undefined;
    for (let r = 0; r <= round; r += 1) {
      const currentMode = playable.length ? playable[r % playable.length] : 'quiz';
      const deck = decks[currentMode] || fallback;
      const occurrence = playable.slice(0, r).filter((m) => m === currentMode).length;
      if (!deck.length) continue;

      let index = occurrence % deck.length;
      let candidate = deck[index];
      for (let attempts = 0; attempts < deck.length; attempts += 1) {
        const id = String(candidate.id);
        const reference = 'reference' in candidate ? String(candidate.reference || '').trim().toLowerCase() : '';
        if (!usedIds.has(id) && (!reference || !usedReferences.has(reference))) break;
        index = (index + 1) % deck.length;
        candidate = deck[index];
      }
      usedIds.add(String(candidate.id));
      if ('reference' in candidate && candidate.reference) usedReferences.add(String(candidate.reference).trim().toLowerCase());
      if (r === round) raw = candidate;
    }

    raw = raw || fallback[0];
    // Mélange les propositions à chaque manche et recalcule l'index de la bonne réponse.
    if (raw.type === 'quiz') {
      const indexed = raw.answers.map((answer, index) => ({ answer, index }));
      const shuffled = shuffle(indexed);
      return {
        ...raw,
        answers: shuffled.map((item) => item.answer),
        correctAnswer: shuffled.findIndex((item) => item.index === raw.correctAnswer),
      } as Question;
    }
    return raw;
  }, [decks, mode, round, playable, target]);

  const reset = useCallback(() => {
    setSelected(null); setTf(null); setClue(0); setShowMaster(false); setRevealed(false); setValidated(false); setCorrect(null); setDelta(0);
    const seconds = mode === 'challenge' && question.type === 'challenge' ? question.seconds : 0;
    setTimer(seconds); setRunning(false); setTimedStarted(false); roundDeadline.current = null; setRoundIntro(true);
  }, [mode, question]);
  useEffect(() => { reset(); }, [round, mode, question.id, reset]);
  useEffect(() => { getSettings().then(setSettings); }, []);
  useEffect(() => { if (paused || roundIntro || ended.current || !deadline.current) return; const id = setInterval(() => { const left = Math.max(0, Math.ceil((deadline.current - Date.now()) / 1000)); setGameLeft(left); if (!left && !ended.current) { ended.current = true; finish(); } }, 250); return () => clearInterval(id); }, [paused, roundIntro]);
  useEffect(() => { if (!running || paused || validated || !roundDeadline.current) return; const id = setInterval(() => { const left = Math.max(0, Math.ceil((roundDeadline.current! - Date.now()) / 1000)); setTimer(left); if (!left) { setRunning(false); roundDeadline.current = null; if (settings.haptics) Vibration.vibrate(55); } }, 100); return () => clearInterval(id); }, [running, paused, validated, settings.haptics]);

  function finish() { const score = encodeURIComponent(JSON.stringify(teamsRef.current.map(t => ({ name: t.name, score: t.score })))); router.replace({ pathname: '/result', params: { scores: score } }); }
  function buzz(ok: boolean) { if (settings.haptics) Vibration.vibrate(ok ? 30 : 65); }
  function validate(isCorrect: boolean, points: number, penalty = 0) {
    if (validated) return; const total = isCorrect ? points : -penalty; const nextTeams = teamsRef.current.map((t, i) => i === active ? { ...t, score: Math.max(0, t.score + total) } : t); teamsRef.current = nextTeams; setTeams(nextTeams); setCorrect(isCorrect); setDelta(total); setValidated(true); setRunning(false); roundDeadline.current = null; buzz(isCorrect);
  }
  function revealAnswer() { if (!paused) { setRevealed(true); setRunning(false); roundDeadline.current = null; } }
  function nextRound() { if (round + 1 >= target) { finish(); return; } setRound(r => r + 1); setActive(a => solo ? a : (a + 1) % Math.max(1, teamsRef.current.length)); }
  function pauseToggle() { if (paused) { deadline.current = Date.now() + gameLeft * 1000; if (running) roundDeadline.current = Date.now() + timer * 1000; setPaused(false); } else setPaused(true); }
  function startTimed() {
    if (validated || paused || timedStarted) return;
    const seconds = mode === 'challenge' && question.type === 'challenge' ? question.seconds : 10;
    setTimer(seconds);
    setTimedStarted(true);
    setRevealed(false);
    roundDeadline.current = Date.now() + seconds * 1000;
    setRunning(true);
  }
  function stopTimed() {
    if (validated || paused || !running) return;
    setRunning(false);
    roundDeadline.current = null;
    setRevealed(true);
  }

  const chosenReady = mode === 'truefalse' ? tf !== null : selected !== null;

  const activeTeam = teams[active];
  const header = <><View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}><Pressable onPress={() => setConfirmQuit(true)} style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(3,35,45,.66)', borderWidth: 1, borderColor: 'rgba(255,255,255,.25)', alignItems: 'center', justifyContent: 'center' }}><Text style={{ color: '#FFF', fontSize: 22 }}>‹</Text></Pressable><View style={{ alignItems: 'center' }}><Text style={{ color: '#FFFDF5', fontWeight: '900', fontSize: 14 }}>MANCHE {round + 1}/{target}</Text><Dots current={round + 1} total={target}/></View><Pressable onPress={pauseToggle} style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(3,35,45,.66)', borderWidth: 1, borderColor: 'rgba(255,229,138,.52)', alignItems: 'center', justifyContent: 'center' }}><Text style={{ color: '#FFE58A', fontWeight: '900' }}>{paused ? '▶' : 'Ⅱ'}</Text></Pressable></View><Text style={{ color: '#FFFDF5', textAlign: 'center', fontSize: 18, fontWeight: '900', marginTop: 7 }}>{MODE_LABELS[mode]}</Text><View style={{ alignSelf: 'center', marginTop: 7, paddingHorizontal: 11, paddingVertical: 5, borderRadius: 14, backgroundColor: 'rgba(242,201,76,.12)', borderWidth: 1, borderColor: 'rgba(242,201,76,.40)' }}><Text style={{ color: '#FFE58A', fontSize: 10, fontWeight: '900' }}>AU TOUR DE {activeTeam?.name?.toUpperCase() || 'L’ÉQUIPE'}</Text></View></>;

  const masterAnswer = useMemo(() => {
    if (question.type === 'mystery') return question.answer;
    if (question.type === 'challenge') return question.acceptedAnswers?.join(' · ') || 'Le maître de jeu juge la réussite à partir de la consigne.';
    if (question.type === 'truefalse') return question.answer ? 'VRAI' : 'FAUX';
    if (question.type === 'quiz') return question.answers[question.correctAnswer];
    return '';
  }, [question]);

  const masterPanel = (extra?: React.ReactNode) => <View style={{ marginTop: 12, borderRadius: 18, borderWidth: 1, borderColor: 'rgba(255,229,138,.38)', backgroundColor: 'rgba(10,40,48,.58)', overflow: 'hidden' }}>
    <Pressable onPress={() => setShowMaster(v => !v)} style={{ paddingHorizontal: 14, paddingVertical: 11, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
      <View><Text style={{ color: '#FFE58A', fontSize: 10, fontWeight: '900', letterSpacing: 1.2 }}>MAÎTRE DE JEU</Text><Text style={{ color: '#DCEDEA', fontSize: 11, fontWeight: '700', marginTop: 2 }}>À garder hors de vue des joueurs</Text></View>
      <Text style={{ color: '#FFE58A', fontSize: 18, fontWeight: '900' }}>{showMaster ? '⌃' : '⌄'}</Text>
    </Pressable>
    {showMaster && <View style={{ padding: 14, paddingTop: 2, borderTopWidth: 1, borderTopColor: 'rgba(255,255,255,.08)' }}>
      <Text style={{ color: '#FFE58A', fontSize: 10, fontWeight: '900', letterSpacing: 1.1, marginBottom: 4 }}>{question.type === 'mystery' ? 'RÉPONSE / PERSONNAGE' : question.type === 'challenge' ? 'REPÈRE DE CORRECTION' : 'RÉPONSE CORRECTE'}</Text><Text style={{ color: '#FFFDF5', fontSize: 18, lineHeight: 25, fontWeight: '900' }}>{masterAnswer}</Text>
            {question.type === 'mystery' && <View style={{ marginTop: 10 }}><Text style={{ color: '#FFE58A', fontSize: 10, fontWeight: '900', letterSpacing: 1 }}>INDICES</Text>{question.clues.map((c, i) => <Text key={i} style={{ color: '#E6F2EF', fontSize: 13, lineHeight: 19, marginTop: 5 }}>{i + 1}. {c}</Text>)}</View>}
      {'reference' in question && question.reference ? <Text style={{ color: 'rgba(225,240,236,.68)', fontSize: 10, lineHeight: 15, marginTop: 10 }}>Référence : {question.reference}</Text> : null}
      {extra}
    </View>}
  </View>;

  const revealPanel = (answer: string, points: number, penalty = 0) => revealed && !validated ? <Glass strong style={{ marginTop: 14 }}><Text style={{ color: '#FFE58A', fontSize: 10, fontWeight: '900', letterSpacing: 1.4 }}>RÉPONSE RÉVÉLÉE</Text><Text style={{ color: '#FFFDF5', fontSize: 24, lineHeight: 30, fontWeight: '900', marginTop: 6 }}>{answer}</Text><Text style={{ color: '#D6E9E5', fontSize: 12, lineHeight: 18, marginTop: 7 }}>Le groupe valide la réponse avant l’attribution des points.</Text><View style={{ flexDirection: 'row', gap: 10, marginTop: 13 }}><Gold title="✓ OUI" onPress={() => validate(true, points)} style={{ flex: 1 }}/><Gold title="✕ NON" secondary onPress={() => validate(false, penalty)} style={{ flex: 1 }}/></View></Glass> : validated ? <View style={{ marginTop: 14 }}><Glass style={{ borderColor: correct ? 'rgba(93,226,169,.75)' : 'rgba(255,110,110,.7)' }}><Text style={{ color: correct ? '#6DE0A7' : '#FF8A8A', fontWeight: '900' }}>{correct ? 'RÉPONSE VALIDÉE' : 'RÉPONSE NON VALIDÉE'}</Text><Text style={{ color: '#FFFDF5', fontSize: 19, fontWeight: '900', marginTop: 4 }}>{delta > 0 ? `+${delta} points` : delta < 0 ? `${delta} points` : 'Pas de point'}</Text></Glass>{'explanation' in question && question.explanation ? <Glass style={{ marginTop: 10, padding: 14 }}><Text style={{ color: '#FFE58A', fontSize: 10, fontWeight: '900', letterSpacing: 1.2 }}>À RETENIR</Text><Text style={{ color: '#E6F2EF', fontSize: 12.5, lineHeight: 19, marginTop: 5 }}>{question.explanation}</Text>{'reference' in question && question.reference ? <Text style={{ color: 'rgba(225,240,236,.62)', fontSize: 10, lineHeight: 15, marginTop: 7 }}>📖 {question.reference}</Text> : null}</Glass> : null}</View> : null;

  const noCompatibleQuestions = playable.length === 0;

  if (noCompatibleQuestions) return <ImageBackground source={scenic} resizeMode="cover" style={gameStyles.root} imageStyle={gameStyles.image}>
    <View pointerEvents="none" style={gameStyles.overlay} />
    <View style={{ flex: 1, justifyContent: 'center', padding: 24 }}>
      <Glass strong>
        <Text style={{ color: '#FFE58A', fontSize: 11, fontWeight: '900', letterSpacing: 1.2 }}>FILTRES TROP RESTRICTIFS</Text>
        <Text style={{ color: '#FFFDF5', fontSize: 24, lineHeight: 30, fontWeight: '900', marginTop: 8 }}>Aucune question ne correspond à cette sélection.</Text>
        <Text style={{ color: '#D6E9E5', fontSize: 13, lineHeight: 20, marginTop: 10 }}>Aucune question d'une difficulté et d'une catégorie compatibles avec les modes choisis n'est disponible.</Text>
        <Gold title="← Modifier la partie" onPress={() => router.back()} style={{ marginTop: 18 }} />
      </Glass>
    </View>
  </ImageBackground>;

  return <ImageBackground source={scenic} resizeMode="cover" style={gameStyles.root} imageStyle={gameStyles.image}>
  <View pointerEvents="none" style={gameStyles.overlay} />
  <View style={{ flex: 1, opacity: paused ? .58 : 1 }}>
  <ScrollView contentContainerStyle={{ paddingHorizontal: compact ? 11 : 14, paddingTop: Math.max(10, insets.top + 4), paddingBottom: 46 + insets.bottom + (Platform.OS === 'android' ? 8 : 0), width: '100%', maxWidth: 620, alignSelf: 'center' }} showsVerticalScrollIndicator={false}>
    {header}
    <View style={{ height: 5, borderRadius: 5, backgroundColor: 'rgba(255,255,255,.18)', overflow: 'hidden', marginTop: 9 }}><View style={{ height: 5, width: `${Math.min(100, ((round + 1) / target) * 100)}%`, backgroundColor: '#F6D35C' }}/></View>
    <View style={{ marginTop: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 3 }}><Text style={{ color: '#E6F3EF', fontSize: 10.5, fontWeight: '800' }}>Objectif : répondre puis valider avec le maître de jeu</Text><Text style={{ color: '#FFE58A', fontSize: 11, fontWeight: '900' }}>200 PTS</Text></View>
    <Glass style={{ marginTop: 8, padding: compact ? 13 : 16 }}>
      {mode === 'quiz' && question.type === 'quiz' && <><Text style={{ color: '#FFE58A', textAlign: 'center', fontSize: 10, fontWeight: '900', letterSpacing: 1.2 }}>{normalizeCategory(question.category)}</Text><Text style={{ color: '#FFFDF5', fontSize: 25, lineHeight: 32, fontWeight: '900', textAlign: 'center', marginTop: 9 }}>{question.question}</Text><View style={{ gap: 8, marginTop: 16 }}>{question.answers.map((a, i) => <Pressable key={i} disabled={validated || paused || revealed} onPress={() => setSelected(i)} style={{ minHeight: 55, borderRadius: 17, borderWidth: 1, borderColor: selected === i ? '#FFE17A' : 'rgba(138,223,240,.46)', backgroundColor: selected === i ? 'rgba(242,201,76,.17)' : 'rgba(3,39,50,.67)', flexDirection: 'row', alignItems: 'center', padding: 10 }}><View style={{ width: 31, height: 31, borderRadius: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(255,255,255,.08)' }}><Text style={{ color: '#FFE58A', fontWeight: '900' }}>{String.fromCharCode(65+i)}</Text></View><Text style={{ flex: 1, color: '#FFF', fontSize: 13, fontWeight: '800', marginLeft: 9 }}>{a}</Text><Text style={{ color: '#FFE58A', fontSize: 20 }}>{selected === i ? '✓' : '›'}</Text></Pressable>)}</View>{chosenReady&&!revealed&&!validated&&<Gold title="Révéler la réponse" onPress={revealAnswer} style={{ marginTop: 12 }}/>} {revealPanel(question.answers[question.correctAnswer], 200)}</>}

      {mode === 'truefalse' && question.type === 'truefalse' && <><ModeTitle icon="truefalse" title="VRAI OU FAUX" subtitle="Répondez en un geste !"/><Glass strong><Text style={{ color: '#FFFDF5', fontSize: 23, lineHeight: 31, fontWeight: '900', textAlign: 'center' }}>{question.statement}</Text></Glass><View style={{ flexDirection: 'row', gap: 10, marginTop: 15 }}><Pressable disabled={validated||paused||revealed} onPress={() => setTf(true)} style={{ flex: 1, minHeight: 82, borderRadius: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: tf === true ? '#F2C94C' : 'rgba(25,145,101,.76)', borderWidth: 1, borderColor: '#B7F3D7' }}><Text style={{ fontSize: 26 }}>✓</Text><Text style={{ color: '#FFF', fontWeight: '900', fontSize: 17 }}>VRAI</Text></Pressable><Pressable disabled={validated||paused||revealed} onPress={() => setTf(false)} style={{ flex: 1, minHeight: 82, borderRadius: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: tf === false ? '#F2C94C' : 'rgba(208,61,76,.76)', borderWidth: 1, borderColor: '#FFD1D5' }}><Text style={{ fontSize: 26 }}>✕</Text><Text style={{ color: '#FFF', fontWeight: '900', fontSize: 17 }}>FAUX</Text></Pressable></View>{chosenReady&&!revealed&&!validated&&<Gold title="Révéler la réponse" onPress={revealAnswer} style={{ marginTop: 12 }}/>} {revealPanel(question.answer ? 'VRAI' : 'FAUX', 200)}</>}

      {mode === 'mystery' && question.type === 'mystery' && <><ModeTitle icon="mystery" title="QUI EST-CE ?" subtitle="Fais deviner la carte secrète."/><View style={{ alignItems: 'center', marginVertical: 8 }}><View style={{ width: 142, height: 142, borderRadius: 28, transform: [{ rotate: '-4deg' }], backgroundColor: 'rgba(6,45,58,.84)', borderWidth: 2, borderColor: 'rgba(255,218,91,.7)', alignItems: 'center', justifyContent: 'center' }}><Text style={{ color: '#FFE58A', fontSize: 70, fontWeight: '900' }}>?</Text></View><Text style={{ color: '#FFE58A', fontSize: 10, fontWeight: '900', marginTop: 8 }}>CARTE SECRÈTE</Text></View>{masterPanel()}<Glass strong style={{ marginTop: 10 }}><Text style={{ color: '#FFE58A', fontSize: 10, fontWeight: '900' }}>INDICE {clue+1} · {Math.max(100, 300-clue*100)} POINTS</Text><Text style={{ color: '#FFFDF5', fontSize: 22, lineHeight: 29, fontWeight: '900', textAlign: 'center', marginTop: 8 }}>{question.clues[Math.min(clue, question.clues.length-1)]}</Text></Glass><View style={{ flexDirection: 'row', gap: 8, marginTop: 10 }}>{clue < question.clues.length-1 && <Gold title="Indice suivant" secondary onPress={() => setClue(c => c+1)} style={{ flex: 1 }}/>}<Gold title="Révéler" onPress={revealAnswer} style={{ flex: 1 }}/></View>{revealPanel(question.answer, Math.max(100, 300-clue*100))}</>}



      {mode === 'challenge' && question.type === 'challenge' && <><ModeTitle icon="challenge" title="DÉFI" subtitle="Tout le groupe valide la réussite."/><View style={{ alignItems:'center', marginVertical: 9 }}><Text style={{ color: timer<=3&&running?'#FF7676':'#FFE58A', fontSize: 74, fontWeight:'900' }}>{timer}</Text><Text style={{ color:'#E5F3EF', fontWeight:'900', letterSpacing:2 }}>SECONDES</Text></View><Glass strong><Text style={{ color:'#FFFDF5', fontSize:22, lineHeight:30, fontWeight:'900', textAlign:'center' }}>{question.prompt}</Text></Glass>{masterPanel(question.type === 'challenge' && question.acceptedAnswers?.length ? <View style={{ marginTop: 10 }}><Text style={{ color: '#FFE58A', fontSize: 10, fontWeight: '900' }}>RÉPONSES / REPÈRES ACCEPTÉS</Text><Text style={{ color: '#E6F2EF', fontSize: 13, lineHeight: 19, marginTop: 5 }}>{question.acceptedAnswers.join(' · ')}</Text></View> : undefined)}{!validated&&<View style={{ flexDirection:'row', gap:8, marginTop:12 }}><Gold title={running ? "Arrêter" : "Lancer"} onPress={running ? stopTimed : startTimed} disabled={paused} style={{flex:1}}/>{!running&&(timer===0||revealed)&&<Gold title="Réussi" onPress={()=>validate(true,200)} style={{flex:1}}/>}</View>}{!validated&&!running&&(timer===0||revealed)&&<Gold title="Échoué" secondary onPress={()=>validate(false,0)} style={{marginTop:8}}/>}</>}



    </Glass>
    <ScoreStrip teams={teams} active={active}/>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:9}}><Text style={{color:'#FFF',fontSize:11,fontWeight:'800'}}>Temps total {clock(gameLeft)}</Text>{mode==='challenge'&&<Text style={{color:timer<=5?'#FF7676':'#FFE58A',fontSize:13,fontWeight:'900'}}>{timer}s</Text>}</View>
    {validated&&<Gold title={round+1>=target?'Voir la victoire':'Manche suivante →'} onPress={nextRound} style={{marginTop:10}}/>}
    {!validated&&mode!=='challenge'&&<Gold title={revealed?'Réponse révélée':'Passer'} secondary onPress={revealed?()=>{}:nextRound} disabled={revealed||paused} style={{marginTop:10}}/>}
  </ScrollView>
  <Modal visible={roundIntro && !paused && !confirmQuit} transparent animationType="fade"><View style={{ flex:1, backgroundColor:'rgba(0,15,21,.72)', alignItems:'center', justifyContent:'center', padding:20 }}><Glass strong style={{ width:'100%', maxWidth:520, alignItems:'center', padding:24 }}><Text style={{ color:'#FFE58A', fontSize:10, fontWeight:'900', letterSpacing:2 }}>MANCHE {round+1} / {target}</Text><Text style={{ color:'#FFFDF5', fontSize:31, lineHeight:36, fontWeight:'900', textAlign:'center', marginTop:8 }}>{MODE_LABELS[mode]}</Text><View style={{ width:82, height:82, borderRadius:25, marginTop:14, borderWidth:1.5, borderColor:modeAccent[mode] || '#FFE05A', backgroundColor:'rgba(4,42,54,.78)', alignItems:'center', justifyContent:'center' }}><Image source={modeIcons[mode] || modeIcons.quiz} style={{ width:54, height:54 }} resizeMode="contain" /></View><Text style={{ color:'#E1F0EC', fontSize:13, lineHeight:20, textAlign:'center', marginTop:14 }}>À vous, <Text style={{ color:'#FFE58A', fontWeight:'900' }}>{activeTeam?.name || 'l’équipe'}</Text>. Prenez quelques secondes pour expliquer la règle, puis lancez la manche.</Text><Gold title="C’est parti !" onPress={()=>{ if (!deadline.current) deadline.current = Date.now() + duration * 60000; setGameLeft(duration * 60); setRoundIntro(false); }} style={{ marginTop:18, width:'100%' }} /><Text style={{ color:'rgba(225,240,236,.62)', fontSize:10, marginTop:9 }}>Le maître de jeu garde le contrôle de la validation et des points.</Text></Glass></View></Modal>
  <Modal visible={paused} transparent animationType="fade"><View style={{flex:1,backgroundColor:'rgba(0,0,0,.68)',alignItems:'center',justifyContent:'center',padding:24}}><Glass strong><Text style={{color:'#FFFDF5',fontSize:26,fontWeight:'900'}}>Pause</Text><Text style={{color:'#D8ECE8',marginTop:7}}>Les chronomètres sont arrêtés.</Text><Gold title="Reprendre" onPress={pauseToggle} style={{marginTop:16}}/><Gold title="Quitter" secondary onPress={()=>{setPaused(false);setConfirmQuit(true)}} style={{marginTop:8}}/></Glass></View></Modal>
  <Modal visible={confirmQuit} transparent animationType="fade"><View style={{flex:1,backgroundColor:'rgba(0,0,0,.68)',alignItems:'center',justifyContent:'center',padding:24}}><Glass strong><Text style={{color:'#FFFDF5',fontSize:26,fontWeight:'900'}}>Quitter la partie ?</Text><Text style={{color:'#D8ECE8',marginTop:7}}>La partie en cours ne sera pas enregistrée comme terminée.</Text><Gold title="Rester" onPress={()=>setConfirmQuit(false)} style={{marginTop:16}}/><Gold title="Quitter" secondary onPress={()=>router.replace('/')} style={{marginTop:8}}/></Glass></View></Modal>
  </View>
  </ImageBackground>;
}


const gameStyles = StyleSheet.create({
  root: { flex: 1, minHeight: '100%', backgroundColor: '#063947' },
  image: { width: '100%', height: '100%' },
  overlay: { ...StyleSheet.absoluteFill, backgroundColor: 'rgba(0,24,32,.16)' },
});
