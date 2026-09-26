import React, { useCallback, useMemo, useState } from 'react';
import { Linking, Pressable, ScrollView, Text, View } from 'react-native';
import { router, useFocusEffect, useLocalSearchParams } from 'expo-router';
import { ScenicScreen } from '@/components/ScenicScreen';
import { colors } from '@/theme/colors';
import { styles } from '@/theme/styles';
import { BIBLE_BOOKS, BIBLE_BOOKS_BY_ID } from '@/data/bibleBooks';
import { BIBLE_BOOK_GUIDES } from '@/data/bibleBookGuides';
import { getBibleBookProgress, getAdventureProgress, getCharacterAnnexProgress, markBibleBookDiscovered } from '@/lib/storage';
import { getDiscoveredBibleBookIds } from '@/lib/bibleBookProgress';

const BOOK_CATEGORIES = ['Histoire et lois','Histoire de la nation d’Israël','Poèmes','Prophéties','Évangiles','Histoire de l’assemblée chrétienne primitive','Lettres','Prophétie'];

export default function BibleBooksScreen() {
  const params = useLocalSearchParams<{ id?: string }>();
  const [progress, setProgress] = useState<Record<string,string>>({});
  const [category, setCategory] = useState('Tous');

  const load = useCallback(async () => {
    const [stored, episodes, annexes] = await Promise.all([getBibleBookProgress(), getAdventureProgress(), getCharacterAnnexProgress()]);
    const discoveredIds = getDiscoveredBibleBookIds(episodes, annexes);
    let next = stored;
    for (const id of discoveredIds) next = await markBibleBookDiscovered(id);
    setProgress(next);
  }, []);

  useFocusEffect(useCallback(() => { void load(); }, [load]));
  const discovered = useMemo(() => new Set(Object.keys(progress)), [progress]);

  if (params.id) {
    const book = BIBLE_BOOKS_BY_ID[params.id];
    const guide = book ? BIBLE_BOOK_GUIDES[book.id] : undefined;
    const isDiscovered = !!book && discovered.has(book.id);
    if (!book || !guide) return <ScenicScreen><View style={styles.content}><Pressable onPress={() => router.replace('/bible/books')}><Text style={{color:colors.accent,fontWeight:'900'}}>‹ Livres de la Bible</Text></Pressable><Text style={[styles.title,{marginTop:30}]}>Livre introuvable</Text></View></ScenicScreen>;
    return <ScenicScreen><ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Pressable onPress={() => router.replace('/bible/books')}><Text style={{color:colors.accent,fontWeight:'900'}}>‹ Livres de la Bible</Text></Pressable>
      <View style={{alignItems:'center',marginTop:22}}>
        <Text style={{color:colors.accent,fontSize:11,fontWeight:'900',letterSpacing:1.5}}>LIVRE {book.number} SUR 66</Text>
        <Text style={[styles.title,{textAlign:'center',marginTop:7}]}>{isDiscovered ? book.name : '???'}</Text>
        <Text style={[styles.subtitle,{textAlign:'center',marginTop:5}]}>{book.category}</Text>
      </View>
      {!isDiscovered ? <View style={[styles.glowCard,{marginTop:20,alignItems:'center'}]}><Text style={{fontSize:40}}>🔒</Text><Text style={{color:colors.text,fontSize:19,fontWeight:'900',textAlign:'center',marginTop:8}}>Livre encore à découvrir</Text><Text style={{color:colors.muted,textAlign:'center',lineHeight:20,marginTop:7}}>Continue ton parcours dans l’Aventure et les découvertes annexes.</Text></View> :
      <>
        <View style={[styles.glowCard,{marginTop:20}]}>
          <Text style={{color:colors.accent,fontSize:10,fontWeight:'900',letterSpacing:1.3}}>EN BREF</Text>
          <Text style={{color:colors.text,fontSize:16,lineHeight:24,marginTop:8}}>{guide.summary}</Text>
        </View>
        <View style={[styles.card,{marginTop:12}]}>
          <Text style={{color:colors.text,fontSize:16,fontWeight:'900'}}>Qui l’a rédigé ?</Text>
          <Text style={{color:colors.muted,lineHeight:20,marginTop:5}}>{book.writer}</Text>
          <Text style={{color:colors.text,fontSize:16,fontWeight:'900',marginTop:13}}>Inspiré par</Text>
          <Text style={{color:colors.muted,lineHeight:20,marginTop:5}}>Jéhovah</Text>
          <Text style={{color:colors.text,fontSize:16,fontWeight:'900',marginTop:13}}>Fin de la rédaction</Text>
          <Text style={{color:colors.muted,lineHeight:20,marginTop:5}}>{book.completionDate}</Text>
          <Text style={{color:colors.text,fontSize:16,fontWeight:'900',marginTop:13}}>Lieu de rédaction</Text>
          <Text style={{color:colors.muted,lineHeight:20,marginTop:5}}>{book.compositionPlace}</Text>
          <Text style={{color:colors.text,fontSize:16,fontWeight:'900',marginTop:13}}>Chapitres</Text>
          <Text style={{color:colors.muted,lineHeight:20,marginTop:5}}>{guide.chapterCount}</Text>
        </View>
        <View style={[styles.card,{marginTop:12}]}>
          <Text style={{color:colors.text,fontSize:17,fontWeight:'900'}}>📖 Va plus loin</Text>
          <Text style={{color:colors.muted,lineHeight:20,marginTop:6}}>Bible Party t’en donne un aperçu. La Bible te permet de découvrir toute l’histoire de ce livre.</Text>
          <Pressable onPress={() => Linking.openURL(guide.jwUrl)} style={[styles.button,styles.buttonPrimary,{width:'100%',marginTop:14}]}><Text style={styles.buttonText}>📖 Lire {book.name} sur JW.org →</Text></Pressable>
        </View>
      </>}
    </ScrollView></ScenicScreen>;
  }

  const filtered = category === 'Tous' ? BIBLE_BOOKS : BIBLE_BOOKS.filter(b => b.category === category);
  return <ScenicScreen><ScrollView style={styles.screen} contentContainerStyle={styles.content}>
    <Pressable onPress={() => router.replace('/bible')}><Text style={{color:colors.accent,fontWeight:'900'}}>‹ Ma Bible</Text></Pressable>
    <Text style={[styles.eyebrow,{marginTop:22}]}>📖 MON PARCOURS BIBLIQUE</Text>
    <Text style={[styles.title,{marginTop:7}]}>Les 66 livres</Text>
    <Text style={styles.subtitle}>Découvre les livres rencontrés pendant ton parcours, puis va les lire en entier sur JW.org.</Text>
    <View style={[styles.glowCard,{marginTop:18}]}>
      <Text style={{color:colors.text,fontSize:25,fontWeight:'900'}}>{discovered.size}/66 livres découverts</Text>
      <View style={{height:8,backgroundColor:colors.border,borderRadius:8,overflow:'hidden',marginTop:11}}><View style={{width:(Math.round(discovered.size/66*100)+'%') as any,height:'100%',backgroundColor:colors.accent}}/></View>
      <Text style={{color:colors.muted,fontSize:12,lineHeight:18,marginTop:8}}>Les livres apparaissent au fil de ton parcours. Les derniers sont dévoilés quand les 116 histoires et les 41 annexes de personnages sont terminées.</Text>
    </View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginTop:14}} contentContainerStyle={{gap:8}}>
      {['Tous',...BOOK_CATEGORIES].map(c => <Pressable key={c} onPress={() => setCategory(c)} style={{paddingHorizontal:12,paddingVertical:9,borderRadius:16,borderWidth:1,borderColor:category===c?colors.accent:colors.border,backgroundColor:category===c?colors.surface2:colors.surface}}><Text style={{color:category===c?colors.accent:colors.muted,fontSize:11,fontWeight:'900'}}>{c}</Text></Pressable>)}
    </ScrollView>
    <View style={{gap:9,marginTop:14}}>
      {filtered.map(book => {
        const done=discovered.has(book.id); const guide=BIBLE_BOOK_GUIDES[book.id];
        return <Pressable key={book.id} onPress={() => router.push({pathname:'/bible/books',params:{id:book.id}})} style={[styles.card,{padding:14,opacity:done?1:.62}]}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <View style={{width:40,height:40,borderRadius:20,backgroundColor:colors.surface2,borderWidth:1,borderColor:done?colors.accent:colors.border,alignItems:'center',justifyContent:'center'}}><Text style={{color:done?colors.accent:colors.muted,fontWeight:'900'}}>{book.number}</Text></View>
            <View style={{flex:1,marginLeft:11}}><Text style={{color:colors.text,fontSize:16,fontWeight:'900'}}>{done?book.name:'???'}</Text><Text style={{color:colors.muted,fontSize:11,marginTop:2}}>{done?book.category:'Livre à découvrir'}</Text></View>
            <Text style={{color:colors.accent,fontSize:20}}>›</Text>
          </View>
          {done&&guide?<Text numberOfLines={2} style={{color:colors.muted,lineHeight:18,marginTop:8}}>{guide.summary}</Text>:null}
        </Pressable>;
      })}
    </View>
  </ScrollView></ScenicScreen>;
}
