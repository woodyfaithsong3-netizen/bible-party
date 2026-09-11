import React from 'react';
import { Text, View } from 'react-native';
import { router } from 'expo-router';
import { AppButton } from '@/components/AppButton';
import { colors } from '@/theme/colors';
import { styles } from '@/theme/styles';
export default function NotFoundScreen(){return <View style={[styles.screen,styles.content,{justifyContent:'center'}]}><Text style={{color:colors.accent,fontWeight:'900',letterSpacing:2}}>BIBLE PARTY</Text><Text style={styles.title}>Page introuvable</Text><Text style={styles.subtitle}>Cette page n’existe pas ou n’est plus disponible.</Text><View style={{marginTop:24}}><AppButton title="Retour à l’accueil" onPress={()=>router.replace('/')} /></View></View>}
