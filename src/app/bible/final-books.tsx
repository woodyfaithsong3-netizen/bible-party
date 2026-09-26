import React, { useCallback, useMemo, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { router, useFocusEffect } from 'expo-router';
import { ScenicScreen } from '@/components/ScenicScreen';
import { colors } from '@/theme/colors';
import { styles } from '@/theme/styles';
import { BIBLE_BOOKS_BY_ID } from '@/data/bibleBooks';
import { FINAL_BIBLE_BOOK_DISCOVERIES } from '@/data/finalBibleBookDiscoveries';
import { getAdventureProgress, getCharacterAnnexProgress, getFinalBibleBookProgress, markFinalBibleBookDiscovered, markBibleBookDiscovered } from '@/lib/storage';
import { getDiscoveredBibleBookIds } from '@/lib/bibleBookProgress';
import { SEASON_1 } from '@/data/adventure';
import { SEASON_2 } from '@/data/adventureSeason2';
import { SEASON_3 } from '@/data/adventureSeason3';
import { SEASON_4 } from '@/data/adventureSeason4';
import { SEASON_5 } from '@/data/adventureSeason5';
import { SEASON_6 } from '@/data/adventureSeason6';
import { SEASON_7 } from '@/data/adventureSeason7';
import { SEASON_8 } from '@/data/adventureSeason8';

const SEASONS = [SEASON_1,SEASON_2,SEASON_3,SEASON_4,SEASON_5,SEASON_6,SEASON_7,SEASON_8];
const TOTAL_EPISODES = SEASONS.reduce((n,s) => n + s.episodes.length, 0);
const FINAL_IDS = new Set(FINAL_BIBLE_BOOK_DISCOVERIES.map(x => x.bookId));

export default function FinalBibleBooksScreen() {
  const [completedEpisodes, setCompletedEpisodes] = useState<string[]>([]);
  const [completedAnnexes, setCompletedAnnexes] = useState<string[]>([]);
  const [completedBooks, setCompletedBooks] = useState<string[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const load = useCallback(async () => {
    const [episodes, annexes, books] = await Promise.all([getAdventureProgress(), getCharacterAnnexProgress(), getFinalBibleBookProgress()]);
    setCompletedEpisodes(episodes); setCompletedAnnexes(annexes); setCompletedBooks(books);
  }, []);
  useFocusEffect(useCallback(() => { void load(); }, [load]));

  const ready = useMemo(() => {
    const valid = SEASONS.flatMap(s => s.episodes);
    return valid.length === TOTAL_EPISODES && TOTAL_EPISODES === 116 &&
      valid.every(ep => completedEpisodes.includes(ep.id)) &&
      completedAnnexes.length >= 41;
  }, [completedEpisodes, completedAnnexes]);

  const remaining = FINAL_BIBLE_BOOK_DISCOVERIES.filter(x => !completedBooks.includes(x.bookId));
  const selected = selectedId ? FINAL_BIBLE_BOOK_DISCOVERIES.find(x => x.bookId === selectedId) : null;

  const answer = async (index: number) => {
    if (!selected || selectedAnswer !== null) return;
    setSelectedAnswer(index);
    if (index === selected.correct) {
      const next = await markFinalBibleBookDiscovered(selected.bookId);
      await markBibleBookDiscovered(selected.bookId);
      setCompletedBooks(next);
    }
  };

  if (!ready) return <ScenicScreen><ScrollView style={styles.screen} contentContainerStyle={styles.content}>
    <Pressable onPress={() => router.back()}><Text style={{color:colors.accent,fontWeight:'900'}}>‹ Retour</Text></Pressable>
    <View style={{marginTop:24}}><Text style={styles.eyebrow}>📖 DERNIÈRE ÉTAPE</Text><Text style={[styles.title,{marginTop:7}]}>Les derniers livres</Text><Text style={styles.subtitle}>Cette découverte finale se débloque après les 116 histoires et les 41 annexes de personnages.</Text></View>
    <View style={[styles.glowCard,{marginTop:18}]}><Text style={{color:colors.text,fontSize:18,fontWeight:'900'}}>Encore un peu de chemin 🗺️</Text><Text style={{color:colors.muted,lineHeight:20,marginTop:7}}>{completedEpisodes.length}/116 histoires · {completedAnnexes.length}/41 annexes</Text></View>
  </ScrollView></ScenicScreen>;

  return <ScenicScreen><ScrollView style={styles.screen} contentContainerStyle={styles.content}>
    <Pressable onPress={() => router.back()}><Text style={{color:colors.accent,fontWeight:'900'}}>‹ Retour</Text></Pressable>
    <View style={{marginTop:20}}><Text style={styles.eyebrow}>📖 DERNIÈRE ÉTAPE</Text><Text style={[styles.title,{marginTop:7}]}>Les derniers livres</Text><Text style={styles.subtitle}>Tu as parcouru toute l’Aventure. Découvre maintenant les livres qui complètent ta bibliothèque.</Text></View>
    <View style={[styles.glowCard,{marginTop:16}]}><Text style={{color:colors.accent,fontSize:11,fontWeight:'900',letterSpacing:1.3}}>PROGRESSION</Text><Text style={{color:colors.text,fontSize:23,fontWeight:'900',marginTop:6}}>{completedBooks.length}/{FINAL_BIBLE_BOOK_DISCOVERIES.length} livres</Text><Text style={{color:colors.muted,lineHeight:19,marginTop:5}}>Une question rapide par livre. Une bonne réponse suffit pour l’ajouter à Ma Bible.</Text></View>

    {selected ? <View style={[styles.card,{marginTop:16}]}><Text style={styles.eyebrow}>{selected.bookId ? BIBLE_BOOKS_BY_ID[selected.bookId].category.toUpperCase() : ''}</Text><Text style={{color:colors.text,fontSize:24,fontWeight:'900',marginTop:6}}>{BIBLE_BOOKS_BY_ID[selected.bookId].name}</Text><Text style={{color:colors.muted,lineHeight:20,marginTop:8}}>{selected.summary}</Text><Text style={{color:colors.text,fontSize:16,fontWeight:'900',marginTop:18}}>{selected.prompt}</Text><View style={{gap:9,marginTop:12}}>{selected.choices.map((choice,i)=><Pressable key={choice} disabled={selectedAnswer===selected.correct} onPress={()=>void answer(i)} style={[styles.card,{borderColor:selectedAnswer===i ? (i===selected.correct ? colors.accent : colors.danger) : colors.border,borderWidth:1,backgroundColor:colors.surface2}]}><Text style={{color:colors.text,fontWeight:'800'}}>{choice}</Text></Pressable>)}</View>{selectedAnswer!==null && selectedAnswer===selected.correct ? <View style={{marginTop:12}}><Text style={{color:colors.accent,fontWeight:'900'}}>✨ LIVRE DÉCOUVERT</Text><Text style={{color:colors.muted,marginTop:4}}>Ajouté à ta collection. Tu peux maintenant découvrir sa fiche complète.</Text><Pressable onPress={()=>{setSelectedId(null);setSelectedAnswer(null);router.push({pathname:'/bible/books',params:{id:selected.bookId}})}}><Text style={{color:colors.accent,fontWeight:'900',marginTop:10}}>Ouvrir la fiche ›</Text></Pressable></View> : null}{selectedAnswer!==null && selectedAnswer!==selected.correct ? <View style={{marginTop:12}}><Text style={{color:colors.danger,fontWeight:'900'}}>✕ Pas tout à fait. Essaie encore !</Text></View> : null}</View> : null}

    <View style={{gap:9,marginTop:18}}>{remaining.map(book => { const info=BIBLE_BOOKS_BY_ID[book.bookId]; return <Pressable key={book.bookId} onPress={()=>{setSelectedId(book.bookId);setSelectedAnswer(null)}} style={styles.card}><View style={{flexDirection:'row',alignItems:'center'}}><Text style={{fontSize:26,width:42}}>📖</Text><View style={{flex:1}}><Text style={{color:colors.text,fontSize:16,fontWeight:'900'}}>{info.name}</Text><Text style={{color:colors.muted,fontSize:11,marginTop:2}}>{info.category}</Text></View><Text style={{color:colors.accent,fontSize:20}}>›</Text></View></Pressable>})}</View>

    {remaining.length===0 ? <View style={[styles.glowCard,{marginTop:18}]}><Text style={{color:colors.accent,fontSize:26}}>🏆</Text><Text style={{color:colors.text,fontSize:21,fontWeight:'900',marginTop:7}}>Bibliothèque complète</Text><Text style={{color:colors.muted,lineHeight:20,marginTop:5}}>Tu as découvert les 25 derniers livres. Ta collection peut maintenant te conduire vers les 66 livres de la Bible.</Text><Pressable onPress={()=>router.push('/bible/books')}><Text style={{color:colors.accent,fontWeight:'900',marginTop:11}}>Voir les 66 livres ›</Text></Pressable></View> : null}
  </ScrollView></ScenicScreen>;
}
