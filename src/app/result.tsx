import React, { useEffect, useMemo } from 'react';
import { Animated, Pressable, ScrollView, Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { AppButton } from '@/components/AppButton';
import { colors } from '@/theme/colors';
import { styles } from '@/theme/styles';
import { saveScore } from '@/lib/storage';

export default function ResultScreen() {
  const { scores = '' } = useLocalSearchParams<{ scores?: string }>();
  const parsed = useMemo(() => { try { const decoded=JSON.parse(decodeURIComponent(scores||'[]')); if(!Array.isArray(decoded)) return []; return decoded.filter(x=>x&&typeof x.name==='string').map(x=>({name:x.name,score:Number(x.score)||0})).sort((a,b)=>b.score-a.score); } catch { return []; } }, [scores]);
  useEffect(() => { let cancelled=false; void (async()=>{ for(const team of parsed){ if(cancelled) return; await saveScore({teamName:team.name,score:team.score,playedAt:new Date().toISOString()}); } })(); return()=>{cancelled=true;}; }, [parsed]);
  const winner=parsed[0];
  const scale=React.useRef(new Animated.Value(.7)).current;
  useEffect(()=>{Animated.spring(scale,{toValue:1,useNativeDriver:true,friction:5}).start();},[]);
  return <ScrollView style={styles.screen} contentContainerStyle={[styles.content,{paddingTop:26,paddingBottom:48}]}>
    <Animated.View style={{alignItems:'center',transform:[{scale}]}}>
      <Text style={{fontSize:58}}>🏆</Text>
      <Text style={[styles.eyebrow,{marginTop:12}]}>PARTIE TERMINÉE</Text>
      <Text style={[styles.heroTitle,{marginTop:3}]}>Victoire !</Text>
      <Text style={{color:colors.accent,fontSize:18,fontWeight:'900',marginTop:3}}>{winner?.name||'Gagnant'}</Text>
    </Animated.View>
    <View style={[styles.glowCard,{marginTop:24,padding:17}]}>
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}><View><Text style={styles.eyebrow}>CLASSEMENT FINAL</Text><Text style={{color:colors.muted,fontSize:11,marginTop:4}}>La soirée est terminée.</Text></View><Text style={{color:colors.accent,fontSize:22,fontWeight:'900'}}>{winner?.score||0}</Text></View>
      <View style={{gap:8,marginTop:14}}>{parsed.map((x,i)=><View key={`${x.name}-${i}`} style={{backgroundColor:i===0?colors.surface3:colors.surface,borderColor:i===0?colors.accent:colors.border,borderWidth:1,borderRadius:17,padding:14,flexDirection:'row',alignItems:'center'}}><View style={{width:32,height:32,borderRadius:16,backgroundColor:colors.bg,alignItems:'center',justifyContent:'center',marginRight:11}}><Text style={{color:i===0?colors.accent:colors.muted,fontWeight:'900'}}>{i+1}</Text></View><Text style={{color:colors.text,fontWeight:'800',flex:1}}>{x.name}</Text><Text style={{color:i===0?colors.accent2:colors.text,fontWeight:'900',fontSize:18}}>{x.score}</Text></View>)}</View>
    </View>
    <View style={{marginTop:15,gap:9}}><AppButton title="Rejouer  →" onPress={()=>router.replace('/setup')} /><AppButton title="Entraînement" onPress={()=>router.replace('/training')} variant="secondary" /><AppButton title="Retour à l’accueil" onPress={()=>router.replace('/')} variant="secondary" /></View>
    <Pressable onPress={()=>router.replace('/')} style={{marginTop:18,alignItems:'center'}}><Text style={{color:colors.muted,fontSize:11}}>Merci d’avoir joué à Bible Party.</Text></Pressable>
  </ScrollView>;
}
