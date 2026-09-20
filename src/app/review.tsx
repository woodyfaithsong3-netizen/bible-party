import React, { useCallback, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useFocusEffect, router } from 'expo-router';
import { AppButton } from '@/components/AppButton';
import { colors } from '@/theme/colors';
import { styles } from '@/theme/styles';
import { clearTrainingMissed, getTrainingStats, TrainingStats } from '@/lib/storage';
import { findQuestion } from '@/data/catalog';
import { QuizQuestion } from '@/types';
import { ScenicScreen } from '@/components/ScenicScreen';

function ReviewScreen() {
  const [stats, setStats] = useState<TrainingStats | null>(null);
  const [queue, setQueue] = useState<QuizQuestion[]>([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  useFocusEffect(useCallback(() => {
    getTrainingStats().then(s => {
      const q = s.missedIds.map(findQuestion).filter((x): x is QuizQuestion => !!x && x.type === 'quiz');
      setStats(s); setQueue(q); setIndex(0); setSelected(null);
    });
  }, []));
  const current = queue[index];
  if (!stats) return <View style={[styles.screen, styles.content]}><Text style={styles.title}>Chargement…</Text></View>;
  if (!current) return <View style={[styles.screen, styles.content, { justifyContent:'center' }]}><Text style={styles.title}>Révision terminée</Text><Text style={styles.subtitle}>Les questions réussies sont retirées de ta liste d’erreurs.</Text><View style={{marginTop:24,gap:10}}><AppButton title="Voir mes progrès" onPress={() => router.replace('/progress')} /><AppButton title="Accueil" onPress={() => router.replace('/')} variant="secondary" /></View></View>;
  const answer = async (choice: number) => {
    if (selected !== null) return;
    const good = choice === current.correctAnswer;
    setSelected(choice);
    // La révision ne rejoue pas les statistiques globales de l'entraînement (déjà comptées la
    // première fois) : une bonne réponse retire la question de la liste d'erreurs ; une mauvaise
    // réponse l'y laisse simplement, sans re-comptabiliser une réponse supplémentaire.
    if (good) setStats(await clearTrainingMissed(current.id));
  };
  const next = () => { setIndex(i => i + 1); setSelected(null); };
  const good = selected === current.correctAnswer;
  return <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
    <View style={{flexDirection:'row',justifyContent:'space-between'}}><Text style={{color:colors.accent,fontWeight:'900'}}>RÉVISION</Text><Text style={{color:colors.muted}}>{index+1}/{queue.length}</Text></View>
    <View style={[styles.card,{marginTop:18}]}><Text style={{color:colors.muted,fontSize:12,fontWeight:'800'}}>{current.category} · {current.difficulty}</Text><Text style={{color:colors.text,fontSize:25,lineHeight:34,fontWeight:'800',marginTop:12}}>{current.question}</Text><View style={{gap:9,marginTop:24}}>{current.answers.map((a,i)=><AppButton key={a} title={`${String.fromCharCode(65+i)}  ${a}`} onPress={()=>answer(i)} variant={selected===i?(good?'primary':'secondary'):'secondary'} disabled={selected!==null}/>)}</View>{selected!==null&&<View style={{marginTop:18,padding:14,borderRadius:16,backgroundColor:colors.bg}}><Text style={{color:good?colors.success:colors.danger,fontWeight:'900'}}>{good?'✓ Bonne réponse — erreur retirée':'✗ Encore à revoir'}</Text><Text style={{color:colors.muted,marginTop:7,lineHeight:20}}>{current.explanation}</Text><Text style={{color:colors.accent,marginTop:7,fontWeight:'700'}}>{current.reference}</Text></View>}</View>
    <View style={{marginTop:18}}><AppButton title={index+1>=queue.length?'Terminer':'Suivante →'} onPress={next} disabled={selected===null}/></View>
  </ScrollView>;
}

export default function ReviewScreenWithScenic() {
  return <ScenicScreen><ReviewScreen /></ScenicScreen>;
}
