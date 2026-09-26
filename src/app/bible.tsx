import React, { useCallback, useMemo, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { router, useFocusEffect } from 'expo-router';
import { ScenicScreen } from '@/components/ScenicScreen';
import { colors } from '@/theme/colors';
import { styles } from '@/theme/styles';
import { BIBLE_BOOKS } from '@/data/bibleBooks';
import { SEASON_1 } from '@/data/adventure';
import { SEASON_2 } from '@/data/adventureSeason2';
import { SEASON_3 } from '@/data/adventureSeason3';
import { SEASON_4 } from '@/data/adventureSeason4';
import { SEASON_5 } from '@/data/adventureSeason5';
import { SEASON_6 } from '@/data/adventureSeason6';
import { SEASON_7 } from '@/data/adventureSeason7';
import { SEASON_8 } from '@/data/adventureSeason8';
import { BADGES } from '@/data/badges';
import { characterProfiles } from '@/data/characterProfiles';
import { CHARACTER_ANNEXES } from '@/data/characterAnnexes';
import { getAdventureProgress, getBibleBookProgress, getCharacterAnnexProgress, getFinalBibleBookProgress, getGamesPlayed, markBibleBookDiscovered } from '@/lib/storage';
import { getDiscoveredBibleBookIds } from '@/lib/bibleBookProgress';

const SEASONS = [SEASON_1,SEASON_2,SEASON_3,SEASON_4,SEASON_5,SEASON_6,SEASON_7,SEASON_8];

export default function BibleScreen() {
  const [completed, setCompleted] = useState<string[]>([]);
  const [annexes, setAnnexes] = useState<string[]>([]);
  const [books, setBooks] = useState(0);
  const [games, setGames] = useState(0);

  const load = useCallback(async () => {
    const [a,g,x,stored,finalBooks] = await Promise.all([getAdventureProgress(),getGamesPlayed(),getCharacterAnnexProgress(),getBibleBookProgress(),getFinalBibleBookProgress()]);
    const discovered = getDiscoveredBibleBookIds(a,x,finalBooks);
    let next = stored;
    for (const id of discovered) next = await markBibleBookDiscovered(id);
    setCompleted(a); setGames(g); setAnnexes(x);
    setBooks(Object.keys(next).filter(id => BIBLE_BOOKS.some(b => b.id === id)).length);
  }, []);
  useFocusEffect(useCallback(() => { void load(); }, [load]));

  const completedIds = useMemo(() => {
    const valid = new Set(SEASONS.flatMap(s => s.episodes.map(e => e.id)));
    return Array.from(new Set(completed.filter(id => valid.has(id))));
  }, [completed]);
  const characters = useMemo(() => {
    const done = new Set(completedIds);
    return new Set([
      ...SEASONS.flatMap(s => s.episodes.filter(e => done.has(e.id)).flatMap(e => e.characterIds ?? [])),
      ...CHARACTER_ANNEXES.filter(a => annexes.includes(a.id)).map(a => a.characterId),
    ]).size;
  }, [completedIds, annexes]);
  const adventureComplete = completedIds.length === 116 && SEASONS.flatMap(s => s.episodes).every(e => completedIds.includes(e.id));
  const badgeCount = BADGES.filter(b => b.unlocked({ episodes: completedIds.length, characters, games, books, adventureComplete, seasonsCompleted: SEASONS.filter(s => s.episodes.length > 0 && s.episodes.every(e => completedIds.includes(e.id))).length })).length;

  return <ScenicScreen><ScrollView style={styles.screen} contentContainerStyle={styles.content}>
    <Pressable onPress={() => router.back()}><Text style={{ color: colors.accent, fontWeight: '900' }}>‹ Retour</Text></Pressable>
    <View style={{ marginTop: 20 }}><Text style={styles.eyebrow}>📖 COLLECTION</Text><Text style={[styles.title,{marginTop:7}]}>Ma Bible</Text><Text style={styles.subtitle}>Ta collection et ta progression, sans tout afficher d’un coup.</Text></View>

    <View style={[styles.glowCard,{marginTop:18}]}>
      <Text style={{color:colors.accent,fontSize:10,fontWeight:'900',letterSpacing:1.5}}>TON PARCOURS</Text>
      <Text style={{color:colors.text,fontSize:21,fontWeight:'900',marginTop:6}}>Continue à découvrir</Text>
      <View style={{height:7,backgroundColor:colors.border,borderRadius:8,overflow:'hidden',marginTop:12}}><View style={{width:`${Math.round(completedIds.length/116*100)}%`,height:'100%',backgroundColor:colors.accent}}/></View>
      <Text style={{color:colors.muted,fontSize:11,marginTop:5}}>{completedIds.length}/116 histoires terminées</Text>
    </View>

    <ProgressCard icon="🗺️" title="Aventure" value={`${completedIds.length}/116`} text="Histoires découvertes" onPress={() => router.push('/adventure')} />
    <ProgressCard icon="👤" title="Personnages" value={`${characters}/${characterProfiles.length}`} text="Personnages découverts" onPress={() => router.push('/bible/characters')} />
    <ProgressCard icon="📖" title="Livres de la Bible" value={`${books}/66`} text="Livres découverts" onPress={() => router.push('/bible/books')} />
    <ProgressCard icon="🏅" title="Badges" value={`${badgeCount}/${BADGES.length}`} text="Récompenses débloquées" onPress={() => router.push('/bible/badges')} />
    <ProgressCard icon="🎮" title="Party" value={String(games)} text="Parties terminées" onPress={() => router.push('/setup')} />

    <View style={{marginTop:20,padding:14,borderRadius:16,backgroundColor:colors.surface,borderWidth:1,borderColor:colors.border}}>
      <Text style={{color:colors.text,fontSize:13,fontWeight:'900'}}>💡 Ta collection se construit au fil du jeu</Text>
      <Text style={{color:colors.muted,fontSize:11,lineHeight:18,marginTop:4}}>Appuie sur une progression pour voir les détails. Les 66 livres suivent la classification biblique de ton parcours.</Text>
    </View>
  </ScrollView></ScenicScreen>;
}

function ProgressCard({icon,title,value,text,onPress}:{icon:string;title:string;value:string;text:string;onPress:()=>void}) {
  return <Pressable onPress={onPress} style={[styles.glowCard,{marginTop:12}]}>
    <View style={{flexDirection:'row',alignItems:'center'}}>
      <View style={{width:46,height:46,borderRadius:23,backgroundColor:colors.surface2,alignItems:'center',justifyContent:'center'}}><Text style={{fontSize:22}}>{icon}</Text></View>
      <View style={{flex:1,marginLeft:12}}><Text style={{color:colors.text,fontSize:17,fontWeight:'900'}}>{title}</Text><Text style={{color:colors.muted,fontSize:11,marginTop:2}}>{text}</Text></View>
      <View style={{alignItems:'flex-end'}}><Text style={{color:colors.accent,fontSize:18,fontWeight:'900'}}>{value}</Text><Text style={{color:colors.accent,fontSize:20}}>›</Text></View>
    </View>
  </Pressable>;
}
