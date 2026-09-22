import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ImageBackground, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { buildCharacterReviewDeck, buildReviewDeck, getDueCharacterIds, getErrorCharacterIds, getReviewStats, recordReviewResult, ReviewCard, ReviewMode } from '@/data/characterReview';

const scenic = require('../../assets/images/backgrounds/home-valley-exact-source.png');

const MODE_LABELS: Record<ReviewMode, string> = {
  mix: 'MIX',
  account: 'RÉCIT',
  lesson: 'LEÇON',
  relationship: 'RELATION AVEC JÉHOVAH',
  qualities: 'QUALITÉS',
  mystery: 'MYSTÈRE',
};

export default function CharacterReviewScreen() {
  const params = useLocalSearchParams<{ characterId?: string; errors?: string }>();
  const focusedCharacterId = typeof params.characterId === 'string' ? params.characterId : undefined;
  const errorMode = params.errors === '1';
  const [mode, setMode] = useState<ReviewMode>('mix');
  const [deck, setDeck] = useState<ReviewCard[]>([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(0);
  const reviewedCharacterIds = useRef(new Set<string>());
  const [dueCount, setDueCount] = useState(125);
  const [masteredCount, setMasteredCount] = useState(0);
  const [learningCount, setLearningCount] = useState(125);
  const [emptyMessage, setEmptyMessage] = useState<string | null>(null);
  const [reviewSource, setReviewSource] = useState<'due' | 'errors'>(errorMode ? 'errors' : 'due');

  const load = useCallback(async (nextMode = mode) => {
    const due = await getDueCharacterIds();
    setDueCount(due.length);
    const stats = await getReviewStats();
    setMasteredCount(stats.mastered);
    setLearningCount(stats.learning);
    const ids = reviewSource === 'errors' ? (await getErrorCharacterIds()).slice(0, 10) : due.slice(0, 10);
    const nextDeck = focusedCharacterId
      ? buildCharacterReviewDeck(focusedCharacterId, nextMode, 10)
      : buildReviewDeck(nextMode, 10, ids);
    setEmptyMessage(!focusedCharacterId && reviewSource === 'errors' && ids.length === 0
      ? 'Aucune erreur enregistrée pour le moment. Joue une session pour commencer à alimenter ta révision ciblée.'
      : null);
    setDeck(nextDeck);
    setIndex(0);
    setSelected(null);
    setFinished(false);
    setScore(0);
    reviewedCharacterIds.current.clear();
  }, [mode, focusedCharacterId, reviewSource]);

  useEffect(() => { load(); }, [load]);

  const current = deck[index];
  const answered = selected !== null;

  const choose = async (answer: string) => {
    if (!current || answered) return;
    setSelected(answer);
    const ok = answer === current.answer;
    if (ok) setScore((value) => value + 1);
    if (!reviewedCharacterIds.current.has(current.characterId)) {
      reviewedCharacterIds.current.add(current.characterId);
      await recordReviewResult(current.characterId, ok);
    }
  };

  const next = () => {
    if (index >= deck.length - 1) setFinished(true);
    else {
      setIndex((value) => value + 1);
      setSelected(null);
    }
  };

  const restart = () => { setEmptyMessage(null); load(mode); };

  return (
    <View style={styles.root}>
      <ImageBackground source={scenic} resizeMode="cover" style={styles.background}>
        <View style={styles.overlay} />
        <SafeAreaView style={styles.safe}>
          <ScrollView contentContainerStyle={styles.content}>
            <View style={styles.header}>
              <Pressable onPress={() => router.back()}><Text style={styles.back}>‹ Retour</Text></Pressable>
              <Text style={styles.kicker}>BIBLE PARTY • RÉVISION</Text>
              <Text style={styles.title}>{focusedCharacterId ? 'Révision ciblée' : 'Les 125 personnages'}</Text>
              <Text style={styles.subtitle}>{focusedCharacterId ? 'Travaille ce personnage jusqu’à mieux le maîtriser.' : 'Apprends, joue, puis revois ce que tu as oublié.'}</Text>
            </View>

            <View style={{ flexDirection: 'row', gap: 8, marginBottom: 8 }}>
              <Pressable onPress={() => { setReviewSource('due'); setMode('mix'); }} style={[styles.mode, reviewSource === 'due' && styles.modeActive]}>
                <Text style={[styles.modeText, reviewSource === 'due' && styles.modeTextActive]}>À REVOIR</Text>
              </Pressable>
              {!focusedCharacterId && (
                <Pressable onPress={() => { setReviewSource('errors'); setMode('mix'); }} style={[styles.mode, reviewSource === 'errors' && styles.modeActive]}>
                  <Text style={[styles.modeText, reviewSource === 'errors' && styles.modeTextActive]}>MES ERREURS</Text>
                </Pressable>
              )}
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.modes}>
              {(Object.keys(MODE_LABELS) as ReviewMode[]).map((item) => (
                <Pressable key={item} onPress={() => setMode(item)} style={[styles.mode, mode === item && styles.modeActive]}>
                  <Text style={[styles.modeText, mode === item && styles.modeTextActive]}>{MODE_LABELS[item]}</Text>
                </Pressable>
              ))}
            </ScrollView>

            <View style={styles.progress}>
              <Text style={styles.progressText}>{reviewSource === 'errors' && !focusedCharacterId ? 'Erreurs : ' + deck.length : 'À revoir : ' + dueCount}</Text><Text style={styles.progressText}>Maîtrisés : {masteredCount} · En cours : {learningCount}</Text>
              <Text style={styles.progressText}>{deck.length ? Math.min(index + 1, deck.length) : 0} / {deck.length}</Text>
            </View>

            {emptyMessage ? (
              <View style={styles.card}>
                <Text style={styles.resultEmoji}>!</Text>
                <Text style={styles.resultTitle}>Rien à revoir ici</Text>
                <Text style={styles.resultText}>{emptyMessage}</Text>
                <Pressable onPress={() => { setReviewSource('due'); setMode('mix'); }} style={styles.primary}><Text style={styles.primaryText}>VOIR LES RÉVISIONS À VENIR</Text></Pressable>
                <Pressable onPress={() => router.push('/characters')} style={styles.secondary}><Text style={styles.secondaryText}>VOIR LES PERSONNAGES</Text></Pressable>
              </View>
            ) : finished ? (
              <View style={styles.card}>
                <Text style={styles.resultEmoji}>✓</Text>
                <Text style={styles.resultTitle}>Session terminée</Text>
                <Text style={styles.resultScore}>{score} / {deck.length}</Text>
                <Text style={styles.resultText}>Les réponses incorrectes reviendront plus rapidement dans les prochaines révisions.</Text>
                <Pressable onPress={restart} style={styles.primary}><Text style={styles.primaryText}>REFAIRE UNE SESSION</Text></Pressable>
                <Pressable onPress={() => router.push('/characters')} style={styles.secondary}><Text style={styles.secondaryText}>VOIR LES PERSONNAGES</Text></Pressable>
              </View>
            ) : current ? (
              <View style={styles.card}>
                <Text style={styles.modeLabel}>{MODE_LABELS[current.mode]}</Text>
                <Text style={styles.question}>{current.prompt}</Text>
                <View style={styles.answers}>
                  {current.choices.map((choice) => {
                    const isSelected = selected === choice;
                    const isCorrect = answered && choice === current.answer;
                    return (
                      <Pressable key={choice} onPress={() => choose(choice)} style={[styles.answer, isSelected && styles.answerSelected, isCorrect && styles.answerCorrect]}>
                        <Text style={styles.answerText}>{choice}</Text>
                      </Pressable>
                    );
                  })}
                </View>
                {answered && (
                  <View style={styles.explanation}>
                    <Text style={styles.explanationTitle}>{selected === current.answer ? 'Bonne réponse !' : 'À retenir'}</Text>
                    <Text style={styles.explanationText}>{current.explanation}</Text>
                    <Text style={styles.reference}>{current.reference}</Text>
                    <Pressable onPress={next} style={styles.primary}><Text style={styles.primaryText}>{index === deck.length - 1 ? 'VOIR LE RÉSULTAT' : 'QUESTION SUIVANTE'}</Text></Pressable>
                  </View>
                )}
              </View>
            ) : (
              <View style={styles.card}><Text style={styles.resultText}>Préparation de la session…</Text></View>
            )}
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  root:{flex:1,backgroundColor:'#041C24'},background:{flex:1},overlay:{...StyleSheet.absoluteFillObject,backgroundColor:'rgba(0,24,31,.34)'},safe:{flex:1},
  content:{width:'100%',maxWidth:760,alignSelf:'center',padding:18,paddingBottom:40},header:{marginBottom:16},back:{color:'#FFE58A',fontSize:15,fontWeight:'800',marginBottom:12},kicker:{color:'#FFE58A',fontSize:11,fontWeight:'900',letterSpacing:2},title:{color:'#FFFDF5',fontSize:30,fontWeight:'900',marginTop:6},subtitle:{color:'#DDEEEA',fontSize:14,lineHeight:20,marginTop:5},
  modes:{gap:8,paddingVertical:8},mode:{paddingHorizontal:13,paddingVertical:10,borderRadius:18,borderWidth:1,borderColor:'rgba(145,225,239,.4)',backgroundColor:'rgba(3,52,61,.72)'},modeActive:{backgroundColor:'#F4C62D',borderColor:'#FFEAA0'},modeText:{color:'#E6F4F0',fontSize:10,fontWeight:'900'},modeTextActive:{color:'#153A38'},
  progress:{flexDirection:'row',justifyContent:'space-between',marginTop:8,marginBottom:12},progressText:{color:'#DDEEEA',fontSize:12,fontWeight:'800'},
  card:{borderRadius:28,borderWidth:1,borderColor:'rgba(164,232,247,.55)',backgroundColor:'rgba(4,42,54,.82)',padding:20,shadowColor:'#00131A',shadowOpacity:.35,shadowRadius:24},modeLabel:{color:'#FFE58A',fontSize:11,fontWeight:'900',letterSpacing:1.5},question:{color:'#FFFDF5',fontSize:21,lineHeight:29,fontWeight:'900',marginTop:10},answers:{gap:10,marginTop:18},answer:{minHeight:52,borderRadius:17,borderWidth:1,borderColor:'rgba(145,225,239,.45)',backgroundColor:'rgba(7,55,65,.76)',justifyContent:'center',paddingHorizontal:15},answerSelected:{borderColor:'#FFE58A',backgroundColor:'rgba(244,198,45,.20)'},answerCorrect:{borderColor:'#75E2C1',backgroundColor:'rgba(117,226,193,.18)'},answerText:{color:'#FFFDF5',fontSize:15,fontWeight:'800'},
  explanation:{marginTop:18,paddingTop:16,borderTopWidth:1,borderTopColor:'rgba(145,225,239,.24)'},explanationTitle:{color:'#FFE58A',fontSize:17,fontWeight:'900'},explanationText:{color:'#E2F3F0',fontSize:14,lineHeight:21,marginTop:6},reference:{color:'#9DDDEA',fontSize:11,fontWeight:'700',marginTop:9},
  primary:{marginTop:17,minHeight:52,borderRadius:18,backgroundColor:'#F4C62D',borderWidth:1,borderColor:'#FFEAA0',alignItems:'center',justifyContent:'center',paddingHorizontal:16},primaryText:{color:'#153A38',fontSize:13,fontWeight:'900'},secondary:{marginTop:10,minHeight:50,borderRadius:18,borderWidth:1,borderColor:'rgba(145,225,239,.5)',alignItems:'center',justifyContent:'center'},secondaryText:{color:'#FFFDF5',fontSize:12,fontWeight:'900'},
  resultEmoji:{color:'#75E2C1',fontSize:40,fontWeight:'900',textAlign:'center'},resultTitle:{color:'#FFFDF5',fontSize:26,fontWeight:'900',textAlign:'center',marginTop:8},resultScore:{color:'#FFE58A',fontSize:42,fontWeight:'900',textAlign:'center',marginTop:8},resultText:{color:'#DDEEEA',fontSize:14,lineHeight:21,textAlign:'center',marginTop:10}
});
