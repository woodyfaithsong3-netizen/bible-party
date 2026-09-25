import React, { useMemo, useState } from 'react';
import { characterProfiles } from '../../data/characterProfiles';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { ScenicScreen } from '@/components/ScenicScreen';
import { colors } from '@/theme/colors';
import { styles } from '@/theme/styles';
import { SEASON_1 } from '@/data/adventure';
import { SEASON_2 } from '@/data/adventureSeason2';
import { SEASON_3 } from '@/data/adventureSeason3';
import { SEASON_4 } from '@/data/adventureSeason4';
import { SEASON_5 } from '@/data/adventureSeason5';
import { SEASON_6 } from '@/data/adventureSeason6';
import { SEASON_7 } from '@/data/adventureSeason7';
import { SEASON_8 } from '@/data/adventureSeason8';
import { markAdventureEpisodeComplete } from '@/lib/storage';

const ADVENTURE_SEASONS = [SEASON_1, SEASON_2, SEASON_3, SEASON_4, SEASON_5, SEASON_6, SEASON_7, SEASON_8];
const ADVENTURE_EPISODES = ADVENTURE_SEASONS.flatMap(season => season.episodes);

const FINAL_BONUS_QUESTIONS = [
  { prompt: 'Que signifie vraiment apprendre à connaître Jéhovah et Jésus ?', choices: ['Mémoriser leurs noms', 'Apprendre à les connaître et agir en accord avec leur volonté', 'Connaître tous les personnages bibliques'], correct: 1 },
  { prompt: 'Pourquoi pouvons-nous louer Jéhovah ?', choices: ['Pour ses qualités, ses œuvres et sa bonté', 'Seulement pour sa puissance', 'Seulement quand tout va bien'], correct: 0 },
  { prompt: 'Comment Jéhovah se montre-t-il « bon pour tous » ?', choices: ['Il fait du bien à ses créatures', 'Il aide uniquement les rois', 'Il ne s’occupe que des humains fidèles'], correct: 0 },
  { prompt: 'Si Jéhovah nous est cher, que sommes-nous poussés à faire ?', choices: ['Parler de lui et louer sa grandeur', 'Garder ce que nous savons pour nous', 'Chercher à être admirés'], correct: 0 },
];

export default function AdventureEpisodeScreen() {
  const params = useLocalSearchParams<{ id?: string }>();
  const episode = useMemo(() => ADVENTURE_EPISODES.find(item => item.id === params.id), [params.id]);
  const currentIndex = episode ? ADVENTURE_EPISODES.findIndex(item => item.id === episode.id) : -1;
  const previousEpisode = currentIndex > 0 ? ADVENTURE_EPISODES[currentIndex - 1] : undefined;
  const nextEpisode = currentIndex >= 0 ? ADVENTURE_EPISODES[currentIndex + 1] : undefined;
  const currentSeasonIndex = episode ? ADVENTURE_SEASONS.findIndex(season => season.episodes.some(item => item.id === episode.id)) : -1;
  const currentSeason = currentSeasonIndex >= 0 ? ADVENTURE_SEASONS[currentSeasonIndex] : undefined;
  const nextSeason = currentSeasonIndex >= 0 ? ADVENTURE_SEASONS[currentSeasonIndex + 1] : undefined;
  const isSeasonEnd = Boolean(currentSeason && nextEpisode && nextSeason && nextEpisode.id === nextSeason.episodes[0]?.id);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [finished, setFinished] = useState(false);
  const [bonusIndex, setBonusIndex] = useState(0);
  const [bonusSelected, setBonusSelected] = useState<number | null>(null);

  if (!episode) {
    return <ScenicScreen><View style={styles.content}><Text style={styles.title}>Épisode introuvable</Text><Pressable onPress={() => router.replace('/adventure')} style={[styles.button, styles.buttonPrimary, { marginTop: 20 }]}><Text style={styles.buttonText}>Retour à Aventure</Text></Pressable></View></ScenicScreen>;
  }

  const question = episode.questions[index];
  const choices = (() => {
    const source = [...question.choices];
    if (source.length <= 1) return source;
    const seed = [...question.id].reduce((sum, char) => sum + char.charCodeAt(0), 0);
    const offset = seed % source.length;
    return source.slice(offset).concat(source.slice(0, offset));
  })();
  const answered = selected !== null;
  const isCorrect = answered ? choices[selected!]?.correct : false;

  const answer = (choiceIndex: number) => {
    if (answered) return;
    setSelected(choiceIndex);
  };

  const next = async () => {
    if (!answered) return;
    if (index < episode.questions.length - 1) {
      setIndex(value => value + 1);
      setSelected(null);
      return;
    }
    await markAdventureEpisodeComplete(episode.id);
    setFinished(true);
  };

  if (finished) {
    const isAdventureEnd = !nextEpisode;
    const bonusQuestion = FINAL_BONUS_QUESTIONS[bonusIndex];
    const bonusAnswered = bonusSelected !== null;
    const bonusCorrect = bonusQuestion ? bonusAnswered && bonusSelected === bonusQuestion.correct : false;
    if (isAdventureEnd) {
      return (
        <ScenicScreen>
          <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
            <Pressable onPress={() => router.replace('/adventure')}><Text style={{ color: colors.accent, fontWeight: '900' }}>‹ Aventure</Text></Pressable>
            <View style={[styles.glowCard, { marginTop: 24, alignItems: 'center' }]}>
              <Text style={{ fontSize: 54 }}>🌟</Text>
              <Text style={[styles.title, { fontSize: 30, lineHeight: 35, textAlign: 'center', marginTop: 12 }]}>Aventure terminée !</Text>
              <Text style={{ color: colors.muted, textAlign: 'center', lineHeight: 21, marginTop: 9 }}>Tu as parcouru les 116 histoires de l’Aventure.</Text>

              <View style={{ marginTop: 20, width: '100%', padding: 16, borderRadius: 18, backgroundColor: colors.surface2, borderWidth: 1, borderColor: colors.borderStrong }}>
                <Text style={{ color: colors.accent, fontSize: 10, fontWeight: '900', letterSpacing: 1.5 }}>🧠 LA LEÇON À RETENIR</Text>
                <Text style={{ color: colors.text, fontSize: 16, fontWeight: '900', lineHeight: 23, marginTop: 7 }}>Connaître la Bible, ce n’est pas seulement retenir des faits. C’est apprendre à connaître Jéhovah et Jésus et agir en accord avec leur volonté.</Text>
                <Text style={{ color: colors.muted, lineHeight: 19, marginTop: 8 }}>Jean 17:3 montre que connaître Jéhovah et Jésus est un processus continu : il s’agit d’approfondir cette connaissance et cette relation.</Text>
              </View>

              <View style={{ marginTop: 14, width: '100%', padding: 16, borderRadius: 18, backgroundColor: colors.surface2, borderWidth: 1, borderColor: colors.borderStrong }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Text style={{ color: colors.accent, fontSize: 10, fontWeight: '900', letterSpacing: 1.5 }}>❓ QUESTIONS BONUS</Text>
                  <Text style={{ color: colors.muted, fontSize: 10, fontWeight: '900' }}>{bonusIndex + 1}/{FINAL_BONUS_QUESTIONS.length}</Text>
                </View>
                <Text style={{ color: colors.text, fontSize: 18, lineHeight: 24, fontWeight: '900', marginTop: 9 }}>{bonusQuestion ? bonusQuestion.prompt : 'Bravo ! Tu as terminé les questions bonus.'}</Text>
                <View style={{ gap: 9, marginTop: 13, display: bonusQuestion ? 'flex' : 'none' }}>
                  {(bonusQuestion?.choices ?? []).map((choice, choiceIndex) => {
                    const picked = bonusSelected === choiceIndex;
                    const correct = bonusAnswered && choiceIndex === bonusQuestion.correct;
                    return <Pressable key={choice} disabled={bonusAnswered} onPress={() => setBonusSelected(choiceIndex)} style={{ minHeight: 52, paddingHorizontal: 14, borderRadius: 16, borderWidth: 1, borderColor: correct ? colors.success : picked ? colors.danger : colors.border, backgroundColor: correct ? 'rgba(30,91,62,.72)' : picked ? 'rgba(91,35,32,.72)' : colors.surface2, justifyContent: 'center' }}>
                      <Text style={{ color: colors.text, fontSize: 14, fontWeight: '800' }}>{choice}</Text>
                    </Pressable>;
                  })}
                </View>
                {bonusQuestion && bonusAnswered ? <View style={{ marginTop: 12, padding: 12, borderRadius: 15, backgroundColor: bonusCorrect ? 'rgba(30,91,62,.62)' : 'rgba(91,35,32,.62)', borderWidth: 1, borderColor: bonusCorrect ? colors.success : colors.danger }}>
                  <Text style={{ color: bonusCorrect ? colors.success : colors.danger, fontWeight: '900' }}>{bonusCorrect ? '✓ Bonne réponse' : '✕ Pas tout à fait'}</Text>
                  {!bonusCorrect && bonusQuestion ? <Text style={{ color: colors.muted, lineHeight: 18, marginTop: 4 }}>La bonne réponse est : {bonusQuestion.choices[bonusQuestion.correct]}</Text> : null}
                </View> : null}
                <Pressable disabled={!bonusAnswered || !bonusQuestion} onPress={() => {
                  if (bonusIndex < FINAL_BONUS_QUESTIONS.length - 1) {
                    setBonusIndex(value => value + 1);
                    setBonusSelected(null);
                  } else {
                    setBonusIndex(FINAL_BONUS_QUESTIONS.length);
                  }
                }} style={[styles.button, styles.buttonPrimary, { width: '100%', marginTop: 15, opacity: bonusAnswered ? 1 : .45 }]}>
                  <Text style={styles.buttonText}>{bonusIndex < FINAL_BONUS_QUESTIONS.length - 1 ? 'Question suivante ›' : 'Terminer les bonus'}</Text>
                </Pressable>
              </View>

              {bonusIndex >= FINAL_BONUS_QUESTIONS.length ? <View style={{ marginTop: 14, width: '100%', padding: 15, borderRadius: 18, backgroundColor: colors.surface2, borderWidth: 1, borderColor: colors.borderStrong }}>
                <Text style={{ color: colors.accent, fontSize: 10, fontWeight: '900', letterSpacing: 1.5 }}>🔁 REFAIRE L’HISTOIRE</Text>
                <Text style={{ color: colors.text, fontSize: 15, fontWeight: '800', lineHeight: 21, marginTop: 6 }}>Tu peux refaire les épisodes quand tu veux pour revoir les événements, répondre aux questions et renforcer ta mémoire.</Text>
                <Pressable onPress={() => router.replace('/adventure')} style={[styles.button, styles.buttonPrimary, { width: '100%', marginTop: 14 }]}><Text style={styles.buttonText}>Rejouer l’Aventure ›</Text></Pressable>
              </View> : null}
            </View>
          </ScrollView>
        </ScenicScreen>
      );
    }
    return (
      <ScenicScreen>
        <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
          <Pressable onPress={() => router.replace('/adventure')}><Text style={{ color: colors.accent, fontWeight: '900' }}>‹ Aventure</Text></Pressable>
          <View style={[styles.glowCard, { marginTop: 24, alignItems: 'center' }]}>
            <Text style={{ fontSize: 54 }}>{isAdventureEnd ? '🌟' : '🏆'}</Text>
            <Text style={[styles.title, { fontSize: 30, lineHeight: 35, textAlign: 'center', marginTop: 12 }]}>{isAdventureEnd ? 'Aventure terminée !' : 'Épisode terminé'}</Text>
            <Text style={{ color: colors.muted, textAlign: 'center', lineHeight: 21, marginTop: 9 }}>{episode.title}</Text>

            {isAdventureEnd ? <>
              <View style={{ marginTop: 20, width: '100%', padding: 16, borderRadius: 18, backgroundColor: colors.surface2, borderWidth: 1, borderColor: colors.borderStrong }}>
                <Text style={{ color: colors.accent, fontSize: 10, fontWeight: '900', letterSpacing: 1.5 }}>🧠 LA LEÇON À RETENIR</Text>
                <Text style={{ color: colors.text, fontSize: 16, fontWeight: '900', lineHeight: 23, marginTop: 7 }}>Connaître la Bible, ce n’est pas seulement retenir des faits. C’est apprendre à connaître Jéhovah et Jésus, comprendre leurs qualités et agir en accord avec leur volonté.</Text>
                <Text style={{ color: colors.muted, lineHeight: 19, marginTop: 8 }}>Tu as parcouru l’histoire biblique. Maintenant, continue à apprendre, à mettre en pratique ce que tu découvres et à faire grandir ta relation avec Jéhovah.</Text>
              </View>

              <View style={{ marginTop: 14, width: '100%', padding: 16, borderRadius: 18, backgroundColor: colors.surface2, borderWidth: 1, borderColor: colors.borderStrong }}>
                <Text style={{ color: colors.accent, fontSize: 10, fontWeight: '900', letterSpacing: 1.5 }}>❓ QUESTIONS POUR ALLER PLUS LOIN</Text>
                {[
                  ['Que signifie vraiment apprendre à connaître Jéhovah et Jésus ?', 'Les connaître de mieux en mieux et agir en accord avec leur volonté.'],
                  ['Pourquoi avons-nous de nombreuses raisons de louer Jéhovah ?', 'Pour ses qualités, ses œuvres et sa bonté envers ses créatures.'],
                  ['Comment Jéhovah se montre-t-il bon pour tous ?', 'Il prend soin de ses créatures et leur fait du bien.'],
                  ['Si Jéhovah nous est cher, que sommes-nous poussés à faire ?', 'Parler de lui, le louer et faire connaître sa grandeur.'],
                ].map(([questionText, answerText], qIndex) => (
                  <View key={questionText} style={{ marginTop: qIndex === 0 ? 10 : 14, paddingTop: qIndex === 0 ? 0 : 12, borderTopWidth: qIndex === 0 ? 0 : 1, borderTopColor: colors.border }}>
                    <Text style={{ color: colors.text, fontSize: 14, fontWeight: '900', lineHeight: 20 }}>{qIndex + 1}. {questionText}</Text>
                    <Text style={{ color: colors.muted, fontSize: 13, lineHeight: 19, marginTop: 4 }}>→ {answerText}</Text>
                  </View>
                ))}
              </View>

              <View style={{ marginTop: 14, width: '100%', padding: 15, borderRadius: 18, backgroundColor: 'rgba(20,49,55,.72)', borderWidth: 1, borderColor: colors.blue }}>
                <Text style={{ color: colors.blue, fontSize: 10, fontWeight: '900', letterSpacing: 1.5 }}>🔁 TU PEUX REFAIRE L’AVENTURE</Text>
                <Text style={{ color: colors.text, fontSize: 15, fontWeight: '800', lineHeight: 21, marginTop: 6 }}>Repars du début, rejoue les épisodes et essaie de retenir encore mieux les moments importants.</Text>
              </View>

              <Pressable onPress={() => router.replace('/adventure')} style={[styles.button, styles.buttonPrimary, { width: '100%', marginTop: 20 }]}>
                <Text style={styles.buttonText}>Rejouer l’Aventure ›</Text>
              </Pressable>
            </> : <>
              <View style={{ marginTop: 20, width: '100%', padding: 15, borderRadius: 18, backgroundColor: colors.surface2, borderWidth: 1, borderColor: colors.borderStrong }}>
                <Text style={{ color: colors.accent, fontSize: 10, fontWeight: '900', letterSpacing: 1.5 }}>🧠 À RETENIR</Text>
                <Text style={{ color: colors.text, fontSize: 15, fontWeight: '800', lineHeight: 21, marginTop: 6 }}>{episode.keyPoint}</Text>
              </View>
              {episode.quality ? <View style={{ marginTop: 12, width: '100%', padding: 15, borderRadius: 18, backgroundColor: 'rgba(20,49,55,.72)', borderWidth: 1, borderColor: colors.blue }}>
                <Text style={{ color: colors.blue, fontSize: 10, fontWeight: '900', letterSpacing: 1.5 }}>💡 JÉHOVAH</Text>
                <Text style={{ color: colors.text, fontSize: 15, fontWeight: '900', marginTop: 6 }}>{episode.quality.title}</Text>
                <Text style={{ color: colors.muted, lineHeight: 19, marginTop: 4 }}>{episode.quality.text}</Text>
              </View> : null}
              {episode.characterIds?.length ? <Text style={{ color: colors.muted, fontSize: 11, textAlign: 'center', marginTop: 14 }}>👤 Personnage{episode.characterIds.length > 1 ? 's' : ''} rencontré{episode.characterIds.length > 1 ? 's' : ''} : {episode.characterIds.map(id => characterProfiles.find(character => character.id === id)?.name).filter(Boolean).join(', ')}</Text> : null}
              <View style={{ marginTop: 14, width: '100%', padding: 14, borderRadius: 18, backgroundColor: colors.surface2, borderWidth: 1, borderColor: colors.border }}>
                <Text style={{ color: colors.accent, fontSize: 10, fontWeight: '900', letterSpacing: 1.5 }}>{isSeasonEnd ? '🏁 FIN DE SAISON' : '🧭 PROCHAINE ÉTAPE'}</Text>
                <Text style={{ color: colors.text, fontSize: 15, fontWeight: '900', lineHeight: 21, marginTop: 5 }}>{isSeasonEnd ? `Tu viens de terminer « ${currentSeason?.title ?? '' } »` : nextEpisode ? `La suite : ${nextEpisode.title}` : 'Tu arrives à la fin de l’Aventure.'}</Text>
                <Text style={{ color: colors.muted, lineHeight: 19, marginTop: 5 }}>{isSeasonEnd ? (nextSeason?.seasonIntro?.transition ?? 'Une nouvelle période de l’histoire biblique commence.') : nextEpisode ? `L’histoire continue avec « ${nextEpisode.title} ». Garde ce que tu viens d’apprendre en tête pour comprendre la suite.` : 'Tu as parcouru toute la progression actuellement disponible.'}</Text>
              </View>
              <Pressable onPress={() => nextEpisode ? router.replace({ pathname: '/adventure/episode', params: { id: nextEpisode.id } }) : router.replace('/adventure')} style={[styles.button, styles.buttonPrimary, { width: '100%', marginTop: 20 }]}>
                <Text style={styles.buttonText}>{nextEpisode ? (isSeasonEnd ? `Commencer ${nextSeason?.title ?? 'la suite'} ›` : `Épisode ${nextEpisode.number} ›`) : 'Retour à Aventure ›'}</Text>
              </Pressable>
              {isSeasonEnd ? <Pressable onPress={() => router.replace('/adventure')} style={[styles.button, { width: '100%', marginTop: 10 }]}><Text style={styles.buttonText}>Voir les saisons</Text></Pressable> : null}
            </>}
          </View>
        </ScrollView>
      </ScenicScreen>
    );
  }

  const typeLabel = question.type === 'truefalse' ? 'VRAI / FAUX' : question.type === 'order' ? 'REMETS DANS L’ORDRE' : question.type === 'mystery' ? 'QUI EST-CE ?' : 'QUIZ';

  return (
    <ScenicScreen>
      <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
        <View style={styles.topRow}>
          <Pressable onPress={() => router.back()}><Text style={{ color: colors.accent, fontWeight: '900' }}>‹ Quitter</Text></Pressable>
          <Text style={{ color: colors.muted, fontSize: 11, fontWeight: '900' }}>{index + 1}/{episode.questions.length}</Text>
        </View>

        <View style={{ marginTop: 18 }}>
          <Text style={styles.eyebrow}>{episode.icon} ÉPISODE {episode.number}</Text>
          <Text style={[styles.title, { marginTop: 6 }]}>{episode.title}</Text>
          <View style={{ height: 5, backgroundColor: colors.border, borderRadius: 6, overflow: 'hidden', marginTop: 12 }}>
            <View style={{ width: `${Math.round(((index + 1) / episode.questions.length) * 100)}%`, height: '100%', backgroundColor: colors.accent }} />
          </View>
        </View>

        <View style={{ marginTop: 18, padding: 16, borderRadius: 20, backgroundColor: colors.surface2, borderWidth: 1, borderColor: colors.borderStrong }}>
          <Text style={{ color: colors.accent, fontSize: 10, fontWeight: '900', letterSpacing: 1.5 }}>📖 À DÉCOUVRIR</Text>
          <Text style={{ color: colors.text, fontSize: 17, fontWeight: '900', lineHeight: 23, marginTop: 7 }}>{episode.intro}</Text>
          {episode.context ? <Text style={{ color: colors.muted, lineHeight: 20, marginTop: 8 }}>{episode.context}</Text> : null}
        </View>

        <View style={{ marginTop: 12, flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <View style={{ flex: 1, height: 1, backgroundColor: colors.border }} />
          <Text style={{ color: colors.muted, fontSize: 9, fontWeight: '900', letterSpacing: 1.4 }}>À TOI DE JOUER</Text>
          <View style={{ flex: 1, height: 1, backgroundColor: colors.border }} />
        </View>

        <View style={{ marginTop: 14, padding: 15, borderRadius: 18, backgroundColor: colors.surface2, borderWidth: 1, borderColor: colors.borderStrong }}>
          <Text style={{ color: colors.accent, fontSize: 10, fontWeight: '900', letterSpacing: 1.5 }}>{typeLabel}</Text>
          <Text style={{ color: colors.text, fontSize: 20, lineHeight: 25, fontWeight: '900', marginTop: 8 }}>{question.prompt}</Text>
        </View>

        <View style={{ gap: 9, marginTop: 14 }}>
          {choices.map((choice, choiceIndex) => {
            const picked = selected === choiceIndex;
            const revealCorrect = answered && choice.correct;
            return <Pressable key={choice.label} onPress={() => answer(choiceIndex)} style={{ minHeight: 55, paddingHorizontal: 15, borderRadius: 17, borderWidth: 1, borderColor: revealCorrect ? colors.success : picked ? (isCorrect ? colors.success : colors.danger) : colors.border, backgroundColor: revealCorrect ? 'rgba(30,91,62,.72)' : picked ? (isCorrect ? 'rgba(30,91,62,.72)' : 'rgba(91,35,32,.72)') : colors.surface2, justifyContent: 'center' }}>
              <Text style={{ color: colors.text, fontSize: 14, fontWeight: '800' }}>{choice.label}</Text>
            </Pressable>;
          })}
        </View>

        {answered ? <View style={{ marginTop: 13, padding: 14, borderRadius: 17, backgroundColor: isCorrect ? 'rgba(30,91,62,.62)' : 'rgba(91,35,32,.62)', borderWidth: 1, borderColor: isCorrect ? colors.success : colors.danger }}>
          <Text style={{ color: isCorrect ? colors.success : colors.danger, fontWeight: '900' }}>{isCorrect ? '✓ Bonne réponse' : '✕ Pas tout à fait'}</Text>
          <Text style={{ color: colors.muted, lineHeight: 19, marginTop: 4 }}>{isCorrect ? episode.keyPoint : `La bonne réponse est : ${choices.find(choice => choice.correct)?.label ?? ''}.`}</Text>
        </View> : null}

        <Pressable disabled={!answered} onPress={() => void next()} style={[styles.button, styles.buttonPrimary, { marginTop: 18, opacity: answered ? 1 : .45 }]}>
          <Text style={styles.buttonText}>{index === episode.questions.length - 1 ? 'Terminer l’épisode' : 'Continuer ›'}</Text>
        </Pressable>
      </ScrollView>
    </ScenicScreen>
  );
}
