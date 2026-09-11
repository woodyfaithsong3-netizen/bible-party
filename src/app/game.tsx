import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Animated, Modal, ScrollView, Text, View, Vibration } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { AppButton } from '@/components/AppButton';
import { ScoreBar } from '@/components/ScoreBar';
import { quizQuestions, mysteryQuestions, trueFalseQuestions, challenges, quoteQuestions, chronologyQuestions, intruderQuestions, timesUpQuestions } from '@/data/questions';
import { colors } from '@/theme/colors';
import { styles } from '@/theme/styles';
import { getSettings, AppSettings } from '@/lib/settings';
import { normalizeCategory } from '@/data/catalog';
import { Question, Team } from '@/types';

const CHALLENGE_SECONDS = 10;
const TIMES_UP_SECONDS = 30;
const STREAK_BONUS = 50;
const ROUND_TARGETS: Record<number, number> = { 1: 4, 20: 10, 30: 14, 45: 20, 60: 28 };
const labels: Record<string, string> = {
  quiz: 'Quiz', mystery: 'Qui suis-je ?', truefalse: 'Vrai / Faux', challenge: 'Défi 10 secondes', quote: 'Qui est-ce ?',
  chronology: 'Chronologie', intruder: 'Intrus', timesup: 'Time’s Up biblique', threeclues: '3 indices', forbidden: 'Mot interdit',
  faceoff: 'Face-à-face', risk: 'Mise à risque', finale: 'Finale'
};

function shuffle<T>(items: T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
function formatClock(total: number) { return `${String(Math.floor(total / 60)).padStart(2, '0')}:${String(total % 60).padStart(2, '0')}`; }
function matchesCategory(category: unknown, type: string, filters: string[]) {
  return filters.some(filter => {
    if (filter === 'Chronologie') return type === 'chronology';
    if (filter === 'Défis') return type === 'challenge' || type === 'timesup';
    return normalizeCategory(category) === filter;
  });
}

function targetLabel(question: Extract<Question, { type: 'mystery' | 'timesup' }>) {
  const c = normalizeCategory(question.category).toLowerCase();
  if (c.includes('verset')) return 'VERSET / PASSAGE';
  if (c.includes('personnage')) return 'PERSONNAGE';
  if (c.includes('évang')) return 'ÉVÉNEMENT / PERSONNAGE';
  if (c.includes('prophét')) return 'PROPHÉTIE';
  if (c.includes('rois')) return 'ROI / PROPHÈTE';
  if (c.includes('histoire')) return 'ÉLÉMENT HISTORIQUE';
  if (c.includes('science')) return 'THÈME BIBLIQUE / SCIENCE';
  return 'ÉLÉMENT BIBLIQUE';
}

function isQuizQuestion(q: Question | undefined): q is Extract<Question, { type: 'quiz' }> {
  return !!q && q.type === 'quiz' && Array.isArray(q.answers) && typeof q.question === 'string';
}

function isTrueFalseQuestion(q: Question | undefined): q is Extract<Question, { type: 'truefalse' }> {
  return !!q && q.type === 'truefalse' && typeof q.statement === 'string' && typeof q.answer === 'boolean';
}

function challengeSeconds(question: Extract<Question, { type: 'challenge' }> | undefined) {
  return question?.seconds && question.seconds > 0 ? question.seconds : CHALLENGE_SECONDS;
}

export default function GameScreen() {
  const params = useLocalSearchParams<{ modes?: string; teams?: string; duration?: string; categories?: string; difficulty?: string; solo?: string; host?: string }>();
  const modes = (params.modes || 'quiz').split(',').filter(Boolean);
  const teamNames = (params.teams || 'Équipe A|Équipe B').split('|');
  const durationMinutes = Math.max(1, Number(params.duration || 45));
  const solo = params.solo === '1';
  const hostName = params.host || 'Maître de jeu';
  const selectedCategories = (params.categories || '').split(',').filter(Boolean);
  const selectedDifficulty = params.difficulty || 'all';
  const roundTarget = ROUND_TARGETS[durationMinutes] || Math.max(4, Math.round(durationMinutes * 0.45));

  const [teams, setTeams] = useState<Team[]>(teamNames.map((name, i) => ({ id: String(i), name, score: 0 })));
  const teamsRef = useRef(teams);
  const finishRef = useRef(false);
  const usedQuestionIds = useRef(new Set<string>());
  const gameDeadline = useRef(Date.now() + durationMinutes * 60_000);
  const roundDeadline = useRef<number | null>(null);
  const [activeTeam, setActiveTeam] = useState(0);
  const [roundIndex, setRoundIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [selectedTF, setSelectedTF] = useState<boolean | null>(null);
  const [clueIndex, setClueIndex] = useState(0);
  const [roundTimer, setRoundTimer] = useState(CHALLENGE_SECONDS);
  const [roundRunning, setRoundRunning] = useState(false);
  const [roundExpired, setRoundExpired] = useState(false);
  const [chronologyOrder, setChronologyOrder] = useState<number[]>([]);
  const [intruderSelected, setIntruderSelected] = useState<number | null>(null);
  const [riskStake, setRiskStake] = useState<number | null>(null);
  const [riskAnswer, setRiskAnswer] = useState<number | null>(null);
  const [timesUpClue, setTimesUpClue] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [roundCorrect, setRoundCorrect] = useState<boolean | null>(null);
  const [roundDelta, setRoundDelta] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [streak, setStreak] = useState(0);
  const [gameSecondsLeft, setGameSecondsLeft] = useState(durationMinutes * 60);
  const [gameEnded, setGameEnded] = useState(false);
  const [paused, setPaused] = useState(false);
  const [confirmQuit, setConfirmQuit] = useState(false);
  const [appSettings, setAppSettings] = useState<AppSettings>({ sounds: true, haptics: true, animations: true, highContrast: false });
  const scorePulse = useRef(new Animated.Value(1)).current;

  const isFinale = roundIndex === roundTarget - 1;
  const questionDecks = useMemo<Record<string, Question[]>>(() => {
    const pools: Record<string, Question[]> = {
      quiz: quizQuestions, mystery: mysteryQuestions, truefalse: trueFalseQuestions, challenge: challenges,
      quote: quoteQuestions, chronology: chronologyQuestions, intruder: intruderQuestions, timesup: timesUpQuestions,
      threeclues: mysteryQuestions, forbidden: mysteryQuestions, faceoff: quizQuestions, risk: quizQuestions, finale: quizQuestions
    };
    return Object.fromEntries(Object.entries(pools).map(([key, base]) => {
      // Important : ne jamais remplacer silencieusement une rubrique sélectionnée
      // par une autre rubrique. On préfère un mode sans deck, qui sera sauté, plutôt
      // qu'une question hors sujet.
      let source = base;
      // Les modes de devinette ont des contraintes propres : une carte sans
      // mots interdits ne doit jamais devenir une manche « Mot interdit » vide,
      // et une carte avec moins de 3 indices ne doit pas devenir une manche 3 indices.
      if (key === 'forbidden') {
        source = base.filter(item => item.type === 'mystery' && Array.isArray(item.forbiddenWords) && item.forbiddenWords.length >= 3);
      } else if (key === 'threeclues') {
        source = base.filter(item => item.type === 'mystery' && Array.isArray(item.clues) && item.clues.length >= 3);
      }
      const categoryPool = selectedCategories.length === 0
        ? source
        : source.filter(item => matchesCategory(item.category, item.type, selectedCategories));
      const filtered = categoryPool.filter(item => selectedDifficulty === 'all' || item.difficulty === selectedDifficulty);
      // Si la difficulté demandée n'existe pas dans cette rubrique/mode,
      // rester dans la même rubrique plutôt que prendre une carte hors sujet.
      return [key, shuffle(filtered.length ? filtered : categoryPool)];
    }));
  }, [selectedCategories.join(','), selectedDifficulty]);

  const playableModes = useMemo(() => {
    const available = modes.filter(requestedMode => (questionDecks[requestedMode] || []).length > 0);
    // Si une combinaison extrême (catégorie + difficulté + mode) ne laisse aucun
    // mode disponible, on garde toujours une partie jouable avec le Quiz.
    return available.length ? available : ['quiz'];
  }, [modes.join(','), questionDecks]);

  const mode = isFinale ? 'finale' : (playableModes[roundIndex % playableModes.length] || 'quiz');

  const question = useMemo<Question>(() => {
    const deck = questionDecks[mode] || questionDecks.quiz || quizQuestions;
    if (!deck.length) return quizQuestions[0];
    return deck.find(q => !usedQuestionIds.current.has(q.id)) || deck[roundIndex % deck.length];
  }, [mode, roundIndex, questionDecks]);
  const chronologyDisplayOrder = useMemo(() => {
    if (mode !== 'chronology' || !('events' in question)) return [];
    return shuffle(question.events.map((_, i) => i));
  }, [mode, question?.id]);
  const intruderDisplayOrder = useMemo(() => {
    if (mode !== 'intruder' || !('items' in question)) return [];
    return shuffle(question.items.map((_, i) => i));
  }, [mode, question?.id]);

  useEffect(() => { teamsRef.current = teams; }, [teams]);
  useEffect(() => { getSettings().then(setAppSettings); }, []);
  useEffect(() => { if (question?.id) usedQuestionIds.current.add(question.id); }, [question?.id]);

  const resetRound = useCallback(() => {
    setSelectedAnswer(null); setSelectedTF(null); setClueIndex(0);
    const autoTimedMode = mode === 'challenge' || mode === 'timesup';
    const seconds = mode === 'timesup'
      ? TIMES_UP_SECONDS
      : mode === 'challenge' && question.type === 'challenge'
        ? challengeSeconds(question)
        : CHALLENGE_SECONDS;
    setRoundTimer(seconds);
    setRoundExpired(false);
    // Le chrono doit démarrer immédiatement à l'ouverture d'une manche chronométrée.
    // La deadline est posée avant setRoundRunning pour éviter une première frame à 0 s.
    roundDeadline.current = autoTimedMode ? Date.now() + seconds * 1000 : null;
    setRoundRunning(autoTimedMode);
    setChronologyOrder([]); setIntruderSelected(null); setRiskStake(null); setRiskAnswer(null); setTimesUpClue(0); setAnswered(false); setRoundCorrect(null); setRoundDelta(null); setRevealed(false);
  }, [mode, question]);
  useEffect(() => { resetRound(); }, [question.id, resetRound]);

  const syncTeams = useCallback((nextTeams: Team[]) => { teamsRef.current = nextTeams; setTeams(nextTeams); }, []);
  const finishGame = useCallback((finalTeams: Team[]) => {
    if (finishRef.current) return;
    finishRef.current = true; setGameEnded(true);
    const scoreParam = encodeURIComponent(JSON.stringify(finalTeams.map(team => ({ name: team.name, score: team.score }))));
    router.replace({ pathname: '/result', params: { scores: scoreParam } });
  }, []);

  useEffect(() => {
    if (gameEnded || paused) return;
    const id = setInterval(() => {
      const remaining = Math.max(0, Math.ceil((gameDeadline.current - Date.now()) / 1000));
      setGameSecondsLeft(remaining);
      if (remaining === 0) finishGame(teamsRef.current);
    }, 250);
    return () => clearInterval(id);
  }, [gameEnded, paused, finishGame]);

  useEffect(() => {
    if (!roundRunning || gameEnded || paused || answered || roundExpired) return;
    if (!roundDeadline.current) roundDeadline.current = Date.now() + roundTimer * 1000;
    const id = setInterval(() => {
      const remaining = Math.max(0, Math.ceil((roundDeadline.current! - Date.now()) / 1000));
      setRoundTimer(remaining);
      if (remaining === 0) {
        setRoundRunning(false); setRoundExpired(true); roundDeadline.current = null;
        if (appSettings.haptics) Vibration.vibrate(45);
      }
    }, 100);
    return () => clearInterval(id);
  }, [roundRunning, gameEnded, paused, answered, roundExpired, appSettings.haptics]);

  const buzz = (type: 'success' | 'warning') => { if (appSettings.haptics) Vibration.vibrate(type === 'success' ? 35 : 70); };
  const award = useCallback((base: number) => {
    if (answered || gameEnded) return;
    const bonus = streak >= 2 ? STREAK_BONUS : 0;
    const total = base + bonus;
    const nextTeams = teamsRef.current.map((team, i) => i === activeTeam ? { ...team, score: team.score + total } : team);
    syncTeams(nextTeams);
    if (appSettings.animations) Animated.spring(scorePulse, { toValue: 1.06, useNativeDriver: true, friction: 5 }).start(() => Animated.spring(scorePulse, { toValue: 1, useNativeDriver: true, friction: 6 }).start());
    setStreak(v => v + 1); setRoundCorrect(true); setRoundDelta(total); setAnswered(true); setRoundRunning(false); roundDeadline.current = null; buzz('success');
  }, [activeTeam, answered, appSettings.animations, gameEnded, scorePulse, streak, syncTeams]);
  const miss = useCallback((penalty = 0) => {
    if (answered || gameEnded) return;
    const nextTeams = penalty > 0
      ? teamsRef.current.map((team, i) => i === activeTeam ? { ...team, score: Math.max(0, team.score - penalty) } : team)
      : teamsRef.current;
    if (penalty > 0) syncTeams(nextTeams);
    setRoundCorrect(false); setRoundDelta(penalty > 0 ? -penalty : 0); setAnswered(true); setStreak(0); setRoundRunning(false); roundDeadline.current = null; buzz('warning');
  }, [activeTeam, answered, gameEnded, syncTeams]);

  const submitQuiz = useCallback((value: number) => {
    if (answered || gameEnded || paused || !isQuizQuestion(question)) return;
    setSelectedAnswer(value);
    const correct = value === question.correctAnswer;
    setAnswered(true);
    setRoundCorrect(correct);
    setRevealed(true);
    setRoundRunning(false);
    roundDeadline.current = null;
    if (correct) {
      const bonus = streak >= 2 ? STREAK_BONUS : 0;
      const total = 200 + bonus;
      setRoundDelta(total);
      const nextTeams = teamsRef.current.map((team, i) => i === activeTeam ? { ...team, score: team.score + total } : team);
      syncTeams(nextTeams);
      setStreak(v => v + 1);
      buzz('success');
      if (appSettings.animations) Animated.spring(scorePulse, { toValue: 1.06, useNativeDriver: true, friction: 5 }).start(() => Animated.spring(scorePulse, { toValue: 1, useNativeDriver: true, friction: 6 }).start());
    } else {
      setRoundDelta(0);
      setStreak(0);
      buzz('warning');
    }
  }, [activeTeam, answered, appSettings.animations, gameEnded, paused, question, scorePulse, streak, syncTeams]);

  const submitTrueFalse = useCallback((value: boolean) => {
    if (answered || gameEnded || paused || !('answer' in question)) return;
    const correct = value === Boolean(question.answer);
    setSelectedTF(value);
    setAnswered(true);
    setRoundCorrect(correct);
    setRoundDelta(correct ? (200 + (streak >= 2 ? STREAK_BONUS : 0)) : 0);
    setRoundRunning(false);
    setRoundExpired(false);
    roundDeadline.current = null;
    if (correct) {
      const bonus = streak >= 2 ? STREAK_BONUS : 0;
      const total = 200 + bonus;
      setRoundDelta(total);
      const nextTeams = teamsRef.current.map((team, i) => i === activeTeam ? { ...team, score: team.score + total } : team);
      syncTeams(nextTeams);
      setStreak(v => v + 1);
      buzz('success');
      if (appSettings.animations) Animated.spring(scorePulse, { toValue: 1.06, useNativeDriver: true, friction: 5 }).start(() => Animated.spring(scorePulse, { toValue: 1, useNativeDriver: true, friction: 6 }).start());
    } else {
      setStreak(0);
      buzz('warning');
    }
  }, [activeTeam, answered, appSettings.animations, gameEnded, paused, question, scorePulse, streak, syncTeams]);

  const next = useCallback(() => {
    if (gameEnded || paused || finishRef.current) return;
    if (roundIndex + 1 >= roundTarget) { finishGame(teamsRef.current); return; }
    const nextRoundIndex = roundIndex + 1;
    const nextTeam = solo ? activeTeam : (activeTeam + 1) % Math.max(1, teamsRef.current.length);
    // Passage immédiat : le maître de jeu voit directement la manche suivante.
    // Il n’y a plus de modal intermédiaire qui peut donner l’impression que la partie est bloquée.
    setRoundIndex(nextRoundIndex);
    setActiveTeam(nextTeam);
  }, [activeTeam, finishGame, gameEnded, paused, roundIndex, roundTarget, solo]);

  const startRoundTimer = () => {
    if (answered || roundExpired || paused) return;
    if (roundRunning) { setRoundRunning(false); roundDeadline.current = null; return; }
    const seconds = mode === 'timesup' ? TIMES_UP_SECONDS : mode === 'challenge' && question.type === 'challenge' ? challengeSeconds(question) : CHALLENGE_SECONDS;
    setRoundTimer(seconds);
    roundDeadline.current = Date.now() + seconds * 1000;
    setRoundRunning(true);
  };
  const reveal = () => { if (!answered && !paused) { setRevealed(true); setRoundRunning(false); roundDeadline.current = null; } };
  const togglePause = () => {
    if (paused) {
      gameDeadline.current = Date.now() + gameSecondsLeft * 1000;
      if (roundRunning) roundDeadline.current = Date.now() + roundTimer * 1000;
      setPaused(false);
    } else setPaused(true);
  };

  const chronologyTotal = 'events' in question ? question.events.length : 0;
  const roundHasTimer = mode === 'challenge' || mode === 'timesup';
  const timerDanger = roundTimer <= 3;
  const selectedForAnswer = mode === 'risk' ? riskAnswer !== null : mode === 'truefalse' ? selectedTF !== null : mode === 'chronology' ? chronologyOrder.length === chronologyTotal : mode === 'intruder' ? intruderSelected !== null : selectedAnswer !== null;

  const revealReady = (() => {
    if (mode === 'challenge') return roundExpired;
    if (mode === 'timesup') return roundExpired || (!roundRunning && roundTimer < TIMES_UP_SECONDS);
    if (mode === 'mystery' || mode === 'threeclues' || mode === 'forbidden') return true;
    return selectedForAnswer;
  })();

  const primaryAction = () => {
    if (answered) return next();
    if (mode === 'challenge') {
      if (roundRunning) { setRoundRunning(false); roundDeadline.current = null; setRoundExpired(true); }
      else if (!roundExpired) startRoundTimer();
      return;
    }
    if (mode === 'timesup') {
      if (roundRunning) { setRoundRunning(false); roundDeadline.current = null; setRoundExpired(true); return; }
      if (!roundExpired) startRoundTimer();
      return;
    }
    if (!revealed && revealReady) { reveal(); return; }
  };

  const primaryText = answered ? 'Manche suivante →' : mode === 'challenge' ? (roundExpired ? 'Validation ci-dessus' : roundRunning ? 'Chrono en cours…' : 'Lancer le chrono') : mode === 'timesup' ? (roundExpired ? 'Résultat ci-dessus' : roundRunning ? 'J’ai trouvé · arrêter' : 'Prêt') : revealed ? 'Réponse révélée' : revealReady ? 'Révéler la réponse' : 'Sélectionner une réponse';

  const renderValidation = (answerText: string, basePoints: number, extra?: React.ReactNode) => {
    if (answered) return <Feedback good={roundCorrect === true} text={roundDelta !== null && roundDelta > 0 ? `Réponse validée · +${roundDelta} points` : roundDelta !== null && roundDelta < 0 ? `Réponse non validée · ${roundDelta} points` : 'Pas de point · réponse non validée'} />;
    if (!revealed) return null;
    return <RevealPanel answer={answerText} extra={extra} onSuccess={() => award(basePoints)} onMiss={() => miss(0)} disabled={paused} />;
  };

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={[styles.content, { paddingTop: 10, paddingBottom: 28 }]}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
          <View style={{ flex: 1, paddingRight: 10 }}>
            <Text style={styles.eyebrow}>{isFinale ? '⚡ FINALE' : `MANCHE ${roundIndex + 1} / ${roundTarget}`}</Text>
            <Animated.Text style={{ color: colors.text, fontSize: 25, lineHeight: 29, fontWeight: '900', transform: [{ scale: scorePulse }] }}>{teams[activeTeam]?.name}</Animated.Text>
            <Text style={{ color: colors.accent2, fontSize: 12, fontWeight: '900', marginTop: 2 }}>{labels[mode]} · {teams[activeTeam]?.score ?? 0} PTS</Text>
            <Text style={{ color: colors.muted, fontSize: 10, marginTop: 3 }}>Maître : {hostName}</Text>
          </View>
          <View style={{ minWidth: 82, alignItems: 'center', backgroundColor: colors.surface2, borderWidth: 1, borderColor: gameSecondsLeft <= 60 ? colors.danger : colors.border, borderRadius: 15, paddingHorizontal: 10, paddingVertical: 7 }}>
            <Text style={{ color: colors.muted, fontSize: 8, fontWeight: '900', letterSpacing: 1.1 }}>TEMPS</Text>
            <Text style={{ color: gameSecondsLeft <= 60 ? colors.danger : colors.accent, fontSize: 21, fontWeight: '900' }}>{formatClock(gameSecondsLeft)}</Text>
          </View>
        </View>
        <ScoreBar teams={teams} activeTeam={activeTeam} />
        <View style={{ height: 4, backgroundColor: colors.surface2, borderRadius: 3, overflow: 'hidden', marginBottom: 14 }}><View style={{ height: 4, width: `${Math.min(100, ((roundIndex + 1) / roundTarget) * 100)}%`, backgroundColor: colors.accent, borderRadius: 3 }} /></View>

        <View style={[styles.glowCard, { minHeight: 390, justifyContent: 'center', opacity: paused ? 0.45 : 1 }]}>
          {mode === 'quiz' && isQuizQuestion(question) && <>
            <Text style={styles.eyebrow}>🎯 QUIZ · {normalizeCategory(question.category)}</Text>
            <Text style={bigText}>{question.question}</Text>
            <View style={{ gap: 9 }}>
              {question.answers.map((a, i) => {
                const isCorrect = i === question.correctAnswer;
                const isChosen = selectedAnswer === i;
                const title = answered && isCorrect ? `✓ ${String.fromCharCode(65 + i)}  ${a}` : `${isChosen ? '✓  ' : ''}${String.fromCharCode(65 + i)}  ${a}`;
                return <AppButton key={`${question.id}-${i}`} title={title} onPress={() => submitQuiz(i)} variant={isChosen ? 'primary' : 'secondary'} disabled={answered || paused} />;
              })}
            </View>
            {answered && selectedAnswer !== null && <View style={{ marginTop: 16 }}>
              <Feedback good={selectedAnswer === question.correctAnswer} text={selectedAnswer === question.correctAnswer ? '✓ Bonne réponse · +200 points' : `✕ Mauvaise réponse · La bonne réponse était ${question.answers[question.correctAnswer]}`} />
              <View style={{ marginTop: 10, padding: 14, borderRadius: 16, backgroundColor: colors.surface2, borderWidth: 1, borderColor: colors.border }}>
                <Text style={smallMuted}>{question.explanation}</Text>
                <Text style={[smallMuted, { marginTop: 7, color: colors.accent2 }]}>Référence : {question.reference}</Text>
              </View>
            </View>}
          </>}

          {mode === 'finale' && 'question' in question && <>
            <Text style={[styles.eyebrow, { color: colors.accent2 }]}>⚡ FINALE · +400</Text><Text style={headline}>Le classement peut encore changer.</Text><Text style={bigText}>{question.question}</Text>
            <View style={{ gap: 9 }}>{question.answers.map((a, i) => <AppButton key={`${question.id}-${i}`} title={`${selectedAnswer === i ? '✓  ' : ''}${String.fromCharCode(65 + i)}  ${a}`} onPress={() => !answered && !revealed && !paused && setSelectedAnswer(i)} variant={selectedAnswer === i ? 'primary' : 'secondary'} disabled={answered || revealed || paused} />)}</View>
            {renderValidation(question.answers[question.correctAnswer], 400, <Text style={smallMuted}>Choix du joueur : {selectedAnswer !== null ? question.answers[selectedAnswer] : '—'}</Text>)}
          </>}

          {mode === 'truefalse' && isTrueFalseQuestion(question) && <>
            <Text style={styles.eyebrow}>VRAI OU FAUX</Text><Text style={bigText}>{question.statement}</Text>
            <Text style={[smallMuted, { marginBottom: 10 }]}>Appuie sur VRAI ou FAUX : la correction apparaît tout de suite.</Text>
            <View style={{ flexDirection: 'row', gap: 9 }}>
              <AppButton title="✓ VRAI" onPress={() => submitTrueFalse(true)} variant={selectedTF === true ? 'primary' : 'secondary'} style={{ flex: 1, minHeight: 54 }} disabled={answered || paused} />
              <AppButton title="✕ FAUX" onPress={() => submitTrueFalse(false)} variant={selectedTF === false ? 'primary' : 'secondary'} style={{ flex: 1, minHeight: 54 }} disabled={answered || paused} />
            </View>
            {answered && selectedTF !== null && <View style={{ marginTop: 16 }}>
              <Feedback good={selectedTF === Boolean(question.answer)} text={selectedTF === Boolean(question.answer) ? '✓ Bonne réponse · +200 points' : `✕ Mauvaise réponse · La bonne réponse était ${Boolean(question.answer) ? 'VRAI' : 'FAUX'}`} />
              <View style={{ marginTop: 10, padding: 14, borderRadius: 16, backgroundColor: colors.surface2, borderWidth: 1, borderColor: colors.border }}>
                <Text style={smallMuted}>{question.explanation}</Text>
                <Text style={[smallMuted, { marginTop: 7, color: colors.accent2 }]}>Référence : {question.reference}</Text>
              </View>
            </View>}
          </>}

          {(mode === 'mystery' || mode === 'threeclues' || mode === 'forbidden') && question.type === 'mystery' && <>
            <Text style={styles.eyebrow}>{mode === 'mystery' ? 'PERSONNAGE MYSTÈRE' : mode === 'threeclues' ? '3 INDICES' : 'MOT INTERDIT'}</Text>
            <Text style={headline}>{mode === 'forbidden' ? 'Fais deviner la réponse sans prononcer les mots interdits.' : mode === 'threeclues' ? 'Donne les indices un par un et fais deviner la bonne carte.' : 'Fais deviner la réponse sans prononcer les mots affichés ci-dessous.'}</Text>
            <View style={infoBox}>
              <Text style={styles.eyebrow}>MAÎTRE DE JEU · RÉPONSE À FAIRE DEVINER</Text>
              <Text style={{ color: colors.accent2, fontSize: 12, fontWeight: '900', marginTop: 5 }}>{targetLabel(question)}</Text>
              <Text style={{ color: colors.accent2, fontSize: 12, fontWeight: '900', marginTop: 5 }}>RÉPONSE</Text><Text style={{ color: colors.text, fontSize: 27, fontWeight: '900', marginTop: 3 }}>{question.answer}</Text>
            </View>
            {mode === 'forbidden' && <View style={[infoBox, { marginTop: 10 }]}>
              <Text style={styles.eyebrow}>MOTS INTERDITS</Text>
              <Text style={[smallMuted, { marginTop: 4 }]}>{question.forbiddenWords?.join(' · ') || 'Aucun mot interdit renseigné.'}</Text>
            </View>}
            <Text style={[styles.eyebrow, { marginTop: 16 }]}>INDICE {clueIndex + 1} · {300 - clueIndex * 100} POINTS</Text>
            <Text style={bigText}>{question.clues[clueIndex]}</Text>
            {!answered && !revealed && <View style={{ gap: 9, marginTop: 8 }}>
              {clueIndex < question.clues.length - 1 && <AppButton title="Indice suivant" onPress={() => setClueIndex(v => v + 1)} variant="secondary" disabled={paused} />}
              <AppButton title="Valider la réussite" onPress={() => award(Math.max(100, 300 - clueIndex * 100))} disabled={paused} />
              <AppButton title="Pas trouvé" onPress={() => miss(0)} variant="secondary" disabled={paused} />
            </View>}
            {revealed && renderValidation(question.answer, Math.max(100, 300 - clueIndex * 100), <Text style={smallMuted}>{question.explanation}

Référence : {question.reference}</Text>)}
          </>}

          {mode === 'quote' && 'quote' in question && <>
            <Text style={styles.eyebrow}>QUI EST-CE ?</Text><Text style={bigText}>{question.quote}</Text>
            <View style={{ gap: 9 }}>{question.answers.map((a, i) => <AppButton key={`${question.id}-${i}`} title={a} onPress={() => !answered && !revealed && !paused && setSelectedAnswer(i)} variant={selectedAnswer === i ? 'primary' : 'secondary'} disabled={answered || revealed || paused} />)}</View>
            {renderValidation(question.answers[question.correctAnswer], 200, <Text style={smallMuted}>Choix du joueur : {selectedAnswer !== null ? question.answers[selectedAnswer] : '—'}</Text>)}
          </>}

          {mode === 'challenge' && 'prompt' in question && <>
            <Text style={styles.eyebrow}>DÉFI 10 SECONDES</Text>
            <Text style={bigText}>{question.prompt}</Text>
            <View style={[infoBox, { marginTop: 2 }]}>
              <Text style={styles.eyebrow}>MAÎTRE DE JEU · RÉPONSES DE RÉFÉRENCE</Text>
              {question.acceptedAnswers?.length ? (
                <Text style={{ color: colors.text, fontSize: 17, lineHeight: 25, fontWeight: '800', marginTop: 6 }}>{question.acceptedAnswers.join(' · ')}</Text>
              ) : (
                <Text style={[smallMuted, { marginTop: 5 }]}>Défi à réponse ouverte : valider si le joueur respecte le nombre demandé, le thème et les éventuelles contraintes de la consigne.</Text>
              )}
            </View>
            <Text style={{ color: timerDanger && roundRunning ? colors.danger : colors.accent, fontSize: 64, fontWeight: '900', textAlign: 'center', marginVertical: 8 }}>{roundTimer}</Text>
            <Text style={smallMuted}>{roundExpired ? 'Temps écoulé. Le maître de jeu vérifie la réponse.' : roundRunning ? 'Chrono en cours · fais réaliser le défi au joueur.' : 'Chrono en pause. Appuie pour le relancer.'}</Text>
            {!roundExpired && <AppButton title={roundRunning ? '⏹ Arrêter le chrono' : '▶ Lancer le chrono'} onPress={startRoundTimer} variant="secondary" style={{ marginTop: 12 }} disabled={paused || answered} />}
            {roundExpired && !revealed && <View style={infoBox}>
              <Text style={styles.eyebrow}>VALIDATION DU MAÎTRE DE JEU</Text>
              <Text style={smallMuted}>Le défi a-t-il été réussi dans les {question.seconds || CHALLENGE_SECONDS} secondes ?</Text>
              <View style={{ flexDirection: 'row', gap: 9, marginTop: 12 }}>
                <AppButton title="✓ Réussi · +200" onPress={() => award(200)} style={{ flex: 1 }} disabled={paused} />
                <AppButton title="✕ Raté" onPress={() => miss(0)} variant="secondary" style={{ flex: 1 }} disabled={paused} />
              </View>
            </View>}
          </>}

          {mode === 'chronology' && 'events' in question && <>
            <Text style={styles.eyebrow}>CHRONOLOGIE</Text><Text style={bigText}>Remets les événements du plus ancien au plus récent.</Text>
            <Text style={smallMuted}>Les cartes sont volontairement mélangées à chaque manche.</Text>
            <View style={{ gap: 9 }}>{chronologyDisplayOrder.map(i => { const event = question.events[i]; return <AppButton key={`${question.id}-${i}`} title={`${chronologyOrder.includes(i) ? `${chronologyOrder.indexOf(i) + 1}. ` : ''}${event}`} onPress={() => !answered && !revealed && !paused && !chronologyOrder.includes(i) && setChronologyOrder(v => [...v, i])} variant={chronologyOrder.includes(i) ? 'primary' : 'secondary'} disabled={answered || revealed || paused || chronologyOrder.includes(i)} />; })}</View>
            {!revealed && chronologyOrder.length > 0 && <AppButton title="↺ Recommencer l’ordre" onPress={() => setChronologyOrder([])} variant="secondary" style={{ marginTop: 9 }} disabled={paused} />}
            {revealed && <RevealPanel answer="Ordre correct" extra={<Text style={smallMuted}>{question.correctOrder.map((idx, i) => `${i + 1}. ${question.events[idx]}`).join('\n')}\n\n${question.reference}</Text>} onSuccess={() => award(300)} onMiss={miss} disabled={paused} />}
            {answered && <Feedback good={roundCorrect === true} text={roundCorrect === true ? '✓ Chronologie validée · points attribués' : '✕ Chronologie non validée · pas de point'} />}
          </>}

          {mode === 'intruder' && 'items' in question && <>
            <Text style={styles.eyebrow}>TROUVE L’INTRUS</Text><Text style={bigText}>Quel élément n’appartient pas au groupe ?</Text>
            <Text style={smallMuted}>Les propositions sont mélangées à chaque manche.</Text>
            <View style={{ gap: 9 }}>{intruderDisplayOrder.map(i => { const item = question.items[i]; return <AppButton key={`${question.id}-${i}`} title={item} onPress={() => !answered && !revealed && !paused && setIntruderSelected(i)} variant={intruderSelected === i ? 'primary' : 'secondary'} disabled={answered || revealed || paused} />; })}</View>
            {revealed && <RevealPanel answer={question.items[question.intruder]} extra={<Text style={smallMuted}>Réponse attendue : {question.items[question.intruder]} · {question.reference}</Text>} onSuccess={() => award(200)} onMiss={miss} disabled={paused} />}
            {answered && <Feedback good={roundCorrect === true} text={roundCorrect === true ? `✓ Intrus trouvé · points attribués` : `✕ Intrus non trouvé · la réponse était ${question.items[question.intruder]}`} />}
          </>}

          {mode === 'timesup' && question.type === 'timesup' && <>
            <Text style={styles.eyebrow}>TIME’S UP BIBLIQUE</Text>
            <Text style={headline}>Une carte à faire deviner en 30 secondes.</Text>
            <View style={infoBox}>
              <Text style={styles.eyebrow}>MAÎTRE DE JEU · RÉPONSE À FAIRE DEVINER</Text>
              <Text style={{ color: colors.accent2, fontSize: 12, fontWeight: '900', marginTop: 5 }}>{targetLabel(question)}</Text>
              <Text style={{ color: colors.text, fontSize: 29, lineHeight: 35, fontWeight: '900', marginTop: 4 }}>{question.answer}</Text>
              <Text style={[smallMuted, { marginTop: 6 }]}>Le maître de jeu garde cette réponse en tête et utilise les indices ci-dessous.</Text>
            </View>
            <View style={{ alignItems: 'center', marginVertical: 12 }}>
              <Text style={{ color: timerDanger && roundRunning ? colors.danger : colors.accent, fontSize: 58, fontWeight: '900' }}>{roundTimer}s</Text>
              <Text style={smallMuted}>{roundRunning ? 'Chrono en cours · fais deviner la carte' : roundExpired ? 'Temps écoulé' : 'Chrono en pause. Appuie pour le lancer.'}</Text>
            </View>
            <View style={infoBox}>
              <Text style={styles.eyebrow}>INDICE {timesUpClue + 1} / {question.clues.length}</Text>
              <Text style={[bigText, { marginVertical: 8, textAlign: 'center' }]}>{question.clues[timesUpClue]}</Text>
              <Text style={[smallMuted, { textAlign: 'center' }]}>Les autres indices restent cachés pour conserver le principe du Time’s Up.</Text>
            </View>
            {!answered && <View style={{ gap: 9, marginTop: 12 }}>
              {!roundExpired && <AppButton title={roundRunning ? '⏹ J’ai trouvé · arrêter' : '▶ Lancer le chrono'} onPress={startRoundTimer} variant="secondary" disabled={paused || answered} />}
              {!roundExpired && timesUpClue < question.clues.length - 1 && <AppButton title="Indice suivant" onPress={() => setTimesUpClue(v => v + 1)} variant="secondary" disabled={paused} />}
              {(roundExpired || !roundRunning) && <View style={infoBox}>
                <Text style={styles.eyebrow}>RÉSULTAT</Text>
                <Text style={smallMuted}>La carte a-t-elle été trouvée ?</Text>
                <View style={{ flexDirection: 'row', gap: 9, marginTop: 12 }}>
                  <AppButton title="✓ Trouvé · +200" onPress={() => award(200)} style={{ flex: 1 }} disabled={paused} />
                  <AppButton title="✕ Raté" onPress={() => miss(0)} variant="secondary" style={{ flex: 1 }} disabled={paused} />
                </View>
              </View>}
            </View>}
          </>}

          {(mode === 'faceoff' || mode === 'risk') && 'question' in question && <>
            <Text style={styles.eyebrow}>{mode === 'risk' ? 'MISE À RISQUE' : 'FACE-À-FACE'}</Text>
            {mode === 'risk' && <><Text style={headline}>Choisis la mise avant de répondre.</Text><View style={{ flexDirection: 'row', gap: 8, marginVertical: 10 }}>{[100, 200, 300].map(v => <AppButton key={v} title={`${v}`} onPress={() => !answered && !revealed && !paused && setRiskStake(v)} variant={riskStake === v ? 'primary' : 'secondary'} style={{ flex: 1 }} disabled={answered || revealed || paused} />)}</View></>}
            <Text style={bigText}>{question.question}</Text>
            <View style={{ gap: 9 }}>{question.answers.map((a, i) => <AppButton key={`${question.id}-${i}`} title={`${(mode === 'risk' ? riskAnswer : selectedAnswer) === i ? '✓  ' : ''}${String.fromCharCode(65 + i)}  ${a}`} onPress={() => { if (answered || revealed || paused) return; if (mode === 'risk') { if (riskStake !== null) setRiskAnswer(i); } else setSelectedAnswer(i); }} variant={(mode === 'risk' ? riskAnswer : selectedAnswer) === i ? 'primary' : 'secondary'} disabled={answered || revealed || paused || (mode === 'risk' && riskStake === null)} />)}</View>
            {mode === 'risk' ? (answered ? <Feedback good={roundCorrect === true} text={roundDelta !== null && roundDelta > 0 ? `✓ Mise gagnée · +${roundDelta} points` : `✕ Mise perdue · ${Math.abs(roundDelta ?? 0)} points`} /> : !revealed ? null : <RevealPanel answer={question.answers[question.correctAnswer]} extra={<Text style={smallMuted}>{`Mise : ${riskStake ?? '—'} pts · réponse : ${riskAnswer !== null ? question.answers[riskAnswer] : '—'}`}</Text>} onSuccess={() => award(riskStake || 100)} onMiss={() => miss(riskStake || 100)} disabled={paused} />) : renderValidation(question.answers[question.correctAnswer], 200, <Text style={smallMuted}>{`Réponse choisie : ${selectedAnswer !== null ? question.answers[selectedAnswer] : '—'}`}</Text>)}
          </>}

          {((mode === 'quiz' && !isQuizQuestion(question)) || (mode === 'truefalse' && !isTrueFalseQuestion(question))) && (
            <View style={{ alignItems: 'center', justifyContent: 'center', minHeight: 300 }}>
              <Text style={styles.eyebrow}>QUESTION INDISPONIBLE</Text>
              <Text style={[bigText, { textAlign: 'center' }]}>Le maître de jeu peut passer à la manche suivante.</Text>
              <Text style={[smallMuted, { textAlign: 'center', marginTop: 10 }]}>Aucune question compatible n’a été trouvée pour ce mode.</Text>
              <AppButton title="Manche suivante →" onPress={next} style={{ marginTop: 18 }} disabled={paused} />
            </View>
          )}

          {!['quiz','finale','truefalse','mystery','threeclues','forbidden','quote','challenge','chronology','intruder','timesup','faceoff','risk'].includes(mode) && (
            <View>
              <Text style={styles.eyebrow}>MODE</Text>
              <Text style={headline}>{labels[mode] || mode}</Text>
              <Text style={bigText}>Ce mode n’a pas encore de manche jouable dans cette version.</Text>
              <AppButton title="Passer à la manche suivante" onPress={next} disabled={paused} />
            </View>
          )}
        </View>

        {roundHasTimer && <View style={{ marginTop: 10, alignItems: 'center' }}><Text style={{ color: timerDanger && roundRunning ? colors.danger : colors.muted, fontWeight: '800' }}>{roundRunning ? `⏱ ${roundTimer}s` : roundExpired ? 'Temps écoulé' : mode === 'timesup' ? 'Chrono 30 s' : `Chrono ${question.type === 'challenge' ? question.seconds : CHALLENGE_SECONDS} s`}</Text></View>}
        <View style={{ marginTop: 12, gap: 9 }}>
          <AppButton title={paused ? '▶ Reprendre la partie' : 'Ⅱ  Pause'} onPress={togglePause} variant="secondary" disabled={gameEnded} />
          <AppButton
            title={primaryText}
            onPress={primaryAction}
            disabled={
              paused ||
              (!answered && mode !== 'challenge' && mode !== 'timesup' && (revealed || !revealReady))
            }
          />
          <View style={{ flexDirection: 'row', gap: 9 }}><AppButton title="Passer" onPress={next} variant="secondary" style={{ flex: 1 }} disabled={paused || gameEnded || answered} /><AppButton title="Quitter" onPress={() => setConfirmQuit(true)} variant="secondary" style={{ flex: 1 }} disabled={paused || gameEnded} /></View>
        </View>
      </ScrollView>

      <Modal visible={paused} transparent animationType="fade" onRequestClose={togglePause}><View style={overlay}><View style={modalCard}><Text style={styles.eyebrow}>PAUSE</Text><Text style={modalTitle}>Partie en pause</Text><Text style={smallMuted}>Le chrono général et le chrono du défi sont arrêtés.</Text><View style={{ gap: 9, marginTop: 22 }}><AppButton title="Continuer" onPress={togglePause} /><AppButton title="Quitter la partie" onPress={() => { setPaused(false); setConfirmQuit(true); }} variant="secondary" /></View></View></View></Modal>
      <Modal visible={confirmQuit} transparent animationType="fade" onRequestClose={() => setConfirmQuit(false)}><View style={overlay}><View style={modalCard}><Text style={styles.eyebrow}>QUITTER ?</Text><Text style={modalTitle}>Abandonner la partie ?</Text><Text style={smallMuted}>Le score de cette partie ne sera pas enregistré comme partie terminée.</Text><View style={{ gap: 9, marginTop: 22 }}><AppButton title="Rester dans la partie" onPress={() => setConfirmQuit(false)} /><AppButton title="Quitter" onPress={() => router.replace('/')} variant="secondary" /></View></View></View></Modal>
    </View>
  );
}

function RevealPanel({ answer, extra, onSuccess, onMiss, disabled }: { answer: string; extra?: React.ReactNode; onSuccess: () => void; onMiss: () => void; disabled?: boolean }) {
  return <View style={{ marginTop: 16, padding: 16, borderRadius: 18, backgroundColor: colors.bg, borderWidth: 1, borderColor: colors.accent }}>
    <Text style={styles.eyebrow}>RÉPONSE RÉVÉLÉE</Text><Text style={{ color: colors.text, fontSize: 28, lineHeight: 34, fontWeight: '900', marginTop: 4 }}>{answer}</Text>
    {extra && <View style={{ marginTop: 7 }}>{extra}</View>}
    <Text style={{ color: colors.muted, lineHeight: 20, marginTop: 9 }}>Le maître de jeu vérifie maintenant avec les joueurs avant d’attribuer les points.</Text>
    <View style={{ flexDirection: 'row', gap: 9, marginTop: 14 }}><AppButton title="✓ Oui" onPress={onSuccess} disabled={disabled} style={{ flex: 1 }} /><AppButton title="✕ Non" onPress={onMiss} variant="secondary" disabled={disabled} style={{ flex: 1 }} /></View>
  </View>;
}

function Feedback({ good, text }: { good: boolean; text: string }) {
  return <View style={{ marginTop: 16, padding: 14, borderRadius: 16, backgroundColor: colors.surface2, borderWidth: 1, borderColor: good ? colors.success : colors.danger }}><Text style={{ color: good ? colors.success : colors.danger, fontWeight: '900' }}>{good ? 'POINTS ATTRIBUÉS' : 'PAS DE POINT'}</Text><Text style={{ color: colors.text, fontSize: 18, fontWeight: '800', marginTop: 5 }}>{text}</Text></View>;
}

const overlay = { flex: 1, backgroundColor: 'rgba(0,0,0,0.72)', justifyContent: 'center' as const, padding: 22 };
const modalCard = { backgroundColor: colors.surface, borderRadius: 26, borderWidth: 1, borderColor: colors.border, padding: 22 };
const modalTitle = { color: colors.text, fontSize: 28, fontWeight: '900' as const, marginTop: 8 };
const headline = { color: colors.text, fontSize: 22, fontWeight: '800' as const, marginTop: 8, marginBottom: 6 };
const bigText = { color: colors.text, fontSize: 25, lineHeight: 34, fontWeight: '800' as const, marginVertical: 18 };
const smallMuted = { color: colors.muted, fontSize: 13, lineHeight: 20 };
const infoBox = { marginBottom: 10, padding: 12, borderRadius: 14, backgroundColor: colors.bg, borderWidth: 1, borderColor: colors.border };
