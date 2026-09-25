import React, { useMemo, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { ScenicScreen } from '@/components/ScenicScreen';
import { colors } from '@/theme/colors';
import { styles } from '@/theme/styles';
import { SEASON_1 } from '@/data/adventure';
import { SEASON_2 } from '@/data/adventureSeason2';
import { SEASON_3 } from '@/data/adventureSeason3';
import { markAdventureEpisodeComplete } from '@/lib/storage';

import { SEASON_4 } from '@/data/adventureSeason4';
import { SEASON_5 } from '@/data/adventureSeason5';
import { SEASON_6 } from '@/data/adventureSeason6';
import { SEASON_7 } from '@/data/adventureSeason7';
import { SEASON_8 } from '@/data/adventureSeason8';

const ADVENTURE_SEASONS = [SEASON_1, SEASON_2, SEASON_3, SEASON_4, SEASON_5, SEASON_6, SEASON_7, SEASON_8];
const ADVENTURE_EPISODES = ADVENTURE_SEASONS.flatMap(season => season.episodes);

export default function AdventureEpisodeScreen() {
  const params = useLocalSearchParams<{ id?: string }>();
  const episode = useMemo(() => ADVENTURE_EPISODES.find(item => item.id === params.id), [params.id]);
  const nextEpisode = useMemo(() => {
    if (!episode) return undefined;
    const currentIndex = ADVENTURE_EPISODES.findIndex(item => item.id === episode.id);
    return currentIndex >= 0 ? ADVENTURE_EPISODES[currentIndex + 1] : undefined;
  }, [episode]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [finished, setFinished] = useState(false);

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
    return (
      <ScenicScreen>
        <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
          <Pressable onPress={() => router.replace('/adventure')}><Text style={{ color: colors.accent, fontWeight: '900' }}>‹ Aventure</Text></Pressable>
          <View style={[styles.glowCard, { marginTop: 24, alignItems: 'center' }]}>
            <Text style={{ fontSize: 54 }}>🏆</Text>
            <Text style={[styles.title, { fontSize: 30, lineHeight: 35, textAlign: 'center', marginTop: 12 }]}>Épisode terminé</Text>
            <Text style={{ color: colors.muted, textAlign: 'center', lineHeight: 21, marginTop: 9 }}>{episode.title}</Text>
            <View style={{ marginTop: 20, width: '100%', padding: 15, borderRadius: 18, backgroundColor: colors.surface2, borderWidth: 1, borderColor: colors.borderStrong }}>
              <Text style={{ color: colors.accent, fontSize: 10, fontWeight: '900', letterSpacing: 1.5 }}>À RETENIR</Text>
              <Text style={{ color: colors.text, fontSize: 15, fontWeight: '800', lineHeight: 21, marginTop: 6 }}>{episode.keyPoint}</Text>
            </View>
            {episode.quality ? (
              <View style={{ marginTop: 12, width: '100%', padding: 15, borderRadius: 18, backgroundColor: 'rgba(20,49,55,.72)', borderWidth: 1, borderColor: colors.blue }}>
                <Text style={{ color: colors.blue, fontSize: 10, fontWeight: '900', letterSpacing: 1.5 }}>💡 JÉHOVAH</Text>
                <Text style={{ color: colors.text, fontSize: 15, fontWeight: '900', marginTop: 6 }}>{episode.quality.title}</Text>
                <Text style={{ color: colors.muted, lineHeight: 19, marginTop: 4 }}>{episode.quality.text}</Text>
              </View>
            ) : null}
            {episode.promise === 'discover' ? (
              <View style={{ marginTop: 12, width: '100%', padding: 15, borderRadius: 18, backgroundColor: 'rgba(59,45,20,.62)', borderWidth: 1, borderColor: colors.accent }}>
                <Text style={{ color: colors.accent, fontSize: 14, fontWeight: '900' }}>🧵 LA PROMESSE</Text>
                <Text style={{ color: colors.text, fontWeight: '800', marginTop: 5 }}>Genèse 3:15 découvert</Text>
                <Text style={{ color: colors.muted, lineHeight: 19, marginTop: 4 }}>Son accomplissement reste à découvrir dans la suite de l’histoire.</Text>
              </View>
            ) : null}
            {episode.promise === 'alliance' ? (
              <View style={{ marginTop: 12, width: '100%', padding: 15, borderRadius: 18, backgroundColor: 'rgba(20,49,55,.72)', borderWidth: 1, borderColor: colors.blue }}>
                <Text style={{ color: colors.blue, fontSize: 14, fontWeight: '900' }}>🌈 ALLIANCE</Text>
                <Text style={{ color: colors.text, fontWeight: '800', marginTop: 5 }}>L’alliance avec Noé est découverte.</Text>
                <Text style={{ color: colors.muted, lineHeight: 19, marginTop: 4 }}>Le signe donné est l’arc-en-ciel.</Text>
              </View>
            ) : null}
            {episode.characterIds?.length ? (
              <Text style={{ color: colors.muted, fontSize: 11, textAlign: 'center', marginTop: 14 }}>👤 Personnage rencontré : {episode.characterIds.includes('noe') ? 'Noé' : 'Adam'}</Text>
            ) : null}
            <View style={{ marginTop: 14, width: '100%', padding: 14, borderRadius: 18, backgroundColor: colors.surface2, borderWidth: 1, borderColor: colors.border }}>
              <Text style={{ color: colors.accent, fontSize: 10, fontWeight: '900', letterSpacing: 1.5 }}>{episode.number === 10 || episode.number === 33 ? '🏆 FIN DE SAISON' : '🧭 PROCHAINE ÉTAPE'}</Text>
              <Text style={{ color: colors.muted, lineHeight: 19, marginTop: 5 }}>
                {episode.number === 10
                  ? 'Tu as parcouru la création, Éden, les premières générations, l’époque d’Hénoch, Noé et le Déluge. La suite de l’histoire commence avec l’alliance et les générations qui mèneront à Abraham.'
                  : episode.number === 33
                    ? 'Tu as parcouru la période qui va du Déluge à la délivrance d’Égypte. La suite commence avec le peuple d’Israël dans le désert.'
                    : 'Garde cette découverte en tête : elle sera reliée aux épisodes suivants.'}
              </Text>
            </View>
            <Pressable
              onPress={() => nextEpisode
                ? router.replace({ pathname: '/adventure/episode', params: { id: nextEpisode.id } })
                : router.replace('/adventure')}
              style={[styles.button, styles.buttonPrimary, { width: '100%', marginTop: 20 }]}
            >
              <Text style={styles.buttonText}>{nextEpisode ? `Épisode ${nextEpisode.number} ›` : 'Retour à Aventure ›'}</Text>
            </Pressable>
            {nextEpisode && (episode.number === 10 || episode.number === 33) ? (
              <Pressable onPress={() => router.replace('/adventure')} style={[styles.button, { width: '100%', marginTop: 10 }]}>
                <Text style={styles.buttonText}>Voir le bilan de la saison</Text>
              </Pressable>
            ) : null}
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

        <View style={{ marginTop: 22 }}>
          <Text style={styles.eyebrow}>{episode.icon} ÉPISODE {episode.number}</Text>
          <Text style={[styles.title, { marginTop: 6 }]}>{episode.title}</Text>
        </View>

        <View style={[styles.card, { marginTop: 18 }]}>
          <Text style={{ color: colors.text, lineHeight: 22 }}>{episode.intro}</Text>
        </View>

        <View style={{ marginTop: 20, padding: 15, borderRadius: 18, backgroundColor: colors.surface2, borderWidth: 1, borderColor: colors.borderStrong }}>
          <Text style={{ color: colors.accent, fontSize: 10, fontWeight: '900', letterSpacing: 1.5 }}>{typeLabel}</Text>
          <Text style={{ color: colors.text, fontSize: 20, lineHeight: 25, fontWeight: '900', marginTop: 8 }}>{question.prompt}</Text>
        </View>

        <View style={{ gap: 9, marginTop: 14 }}>
          {choices.map((choice, choiceIndex) => {
            const picked = selected === choiceIndex;
            const revealCorrect = answered && choice.correct;
            return (
              <Pressable
                key={choice.label}
                onPress={() => answer(choiceIndex)}
                style={{
                  minHeight: 55,
                  paddingHorizontal: 15,
                  borderRadius: 17,
                  borderWidth: 1,
                  borderColor: revealCorrect ? colors.success : picked ? (isCorrect ? colors.success : colors.danger) : colors.border,
                  backgroundColor: revealCorrect ? 'rgba(30,91,62,.72)' : picked ? (isCorrect ? 'rgba(30,91,62,.72)' : 'rgba(91,35,32,.72)') : colors.surface2,
                  justifyContent: 'center',
                }}
              >
                <Text style={{ color: colors.text, fontSize: 14, fontWeight: '800' }}>{choice.label}</Text>
              </Pressable>
            );
          })}
        </View>

        {answered ? (
          <View style={{ marginTop: 13, padding: 14, borderRadius: 17, backgroundColor: isCorrect ? 'rgba(30,91,62,.62)' : 'rgba(91,35,32,.62)', borderWidth: 1, borderColor: isCorrect ? colors.success : colors.danger }}>
            <Text style={{ color: isCorrect ? colors.success : colors.danger, fontWeight: '900' }}>{isCorrect ? '✓ Bonne réponse' : '✕ Pas tout à fait'}</Text>
            <Text style={{ color: colors.muted, lineHeight: 19, marginTop: 4 }}>
              {isCorrect ? episode.keyPoint : `La bonne réponse est : ${choices.find(choice => choice.correct)?.label ?? ''}.`}
            </Text>
          </View>
        ) : null}

        <Pressable disabled={!answered} onPress={() => void next()} style={[styles.button, styles.buttonPrimary, { marginTop: 18, opacity: answered ? 1 : .45 }]}>
          <Text style={styles.buttonText}>{index === episode.questions.length - 1 ? 'Terminer l’épisode' : 'Continuer ›'}</Text>
        </Pressable>

        {episode.promise && index === episode.questions.length - 1 ? (
          <View style={{ marginTop: 15, padding: 14, borderRadius: 18, backgroundColor: colors.surface2, borderWidth: 1, borderColor: episode.promise === 'alliance' ? colors.blue : colors.accent }}>
            <Text style={{ color: episode.promise === 'alliance' ? colors.blue : colors.accent, fontWeight: '900' }}>{episode.promise === 'alliance' ? '🌈 ALLIANCE' : '🧵 FIL ROUGE'}</Text>
            <Text style={{ color: colors.muted, lineHeight: 19, marginTop: 4 }}>{episode.promise === 'alliance' ? 'Une nouvelle étape de l’histoire est sur le point d’être découverte.' : 'Genèse 3:15 restera visible comme fil rouge de l’aventure.'}</Text>
          </View>
        ) : null}
      </ScrollView>
    </ScenicScreen>
  );
}
