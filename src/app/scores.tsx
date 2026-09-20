import React, { useCallback, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { router, useFocusEffect } from 'expo-router';
import { AppButton } from '@/components/AppButton';
import { colors } from '@/theme/colors';
import { styles } from '@/theme/styles';
import { getScores, LocalScore } from '@/lib/storage';
import { ScenicScreen } from '@/components/ScenicScreen';

function ScoresScreen() {
  const [scores, setScores] = useState<LocalScore[]>([]);
  useFocusEffect(useCallback(() => { getScores().then(setScores); }, []));
  return <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
    <Text style={styles.eyebrow}>SCORES</Text><Text style={[styles.title,{marginTop:6}]}>Vos meilleures parties</Text><Text style={styles.subtitle}>Le classement reste local à cet appareil.</Text>
    <View style={{marginTop:22,gap:9}}>{scores.length ? scores.map((x,i)=><View key={`${x.playedAt}-${i}`} style={[styles.card,{flexDirection:'row',alignItems:'center'}]}><View style={{width:34,height:34,borderRadius:17,backgroundColor:colors.bg,borderWidth:1,borderColor:i===0?colors.accent:colors.border,alignItems:'center',justifyContent:'center',marginRight:11}}><Text style={{color:i===0?colors.accent:colors.muted,fontWeight:'900'}}>{i+1}</Text></View><View style={{flex:1}}><Text style={{color:colors.text,fontWeight:'900'}}>{x.teamName}</Text><Text style={{color:colors.muted,fontSize:10,marginTop:3}}>{new Date(x.playedAt).toLocaleDateString('fr-FR')}</Text></View><Text style={{color:colors.accent,fontWeight:'900',fontSize:19}}>{x.score}</Text></View>) : <View style={styles.card}><Text style={{color:colors.muted,lineHeight:20}}>Aucun score pour le moment.</Text><Text style={{color:colors.text,fontWeight:'800',marginTop:5}}>Lancez une partie pour remplir le classement.</Text></View>}</View>
    <AppButton title="Jouer maintenant  →" onPress={()=>router.replace('/setup')} style={{marginTop:20}} />
    <AppButton title="Retour à l’accueil" onPress={()=>router.replace('/')} variant="secondary" style={{marginTop:9}} />
  </ScrollView>;
}

export default function ScoresScreenWithScenic() {
  return <ScenicScreen><ScoresScreen /></ScenicScreen>;
}
