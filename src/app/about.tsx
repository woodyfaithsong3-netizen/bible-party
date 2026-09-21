import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { router } from 'expo-router';
import { AppButton } from '@/components/AppButton';
import { colors } from '@/theme/colors';
import { styles } from '@/theme/styles';
import { ScenicScreen } from '@/components/ScenicScreen';

function AboutScreen() {
  return <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
    <Text style={styles.eyebrow}>À PROPOS</Text><Text style={[styles.title, { marginTop: 7 }]}>Bible Party</Text><Text style={styles.subtitle}>Jouez. Apprenez. Partagez.</Text>
    <View style={[styles.card, { marginTop: 24, gap: 13 }]}><Text style={{ color: colors.text, fontSize: 19, fontWeight: '900' }}>Une application indépendante</Text><Text style={{ color: colors.muted, lineHeight: 23 }}>Bible Party est un jeu de questions et de défis bibliques conçu pour les soirées, les familles, les amis et les groupes.</Text><Text style={{ color: colors.muted, lineHeight: 23 }}>L’application n’est pas produite, approuvée, parrainée ou affiliée aux Témoins de Jéhovah.</Text><Text style={{ color: colors.muted, lineHeight: 23 }}>Les références bibliques permettent de vérifier les informations. Les formulations des questions, explications et défis sont originales.</Text><View style={{ borderTopWidth: 1, borderTopColor: colors.border, paddingTop: 13 }}><Text style={{ color: colors.accent, fontWeight: '900' }}>V108 · audit contenu</Text><Text style={{ color: colors.muted, marginTop: 5, lineHeight: 19 }}>Jeu hors connexion · progression locale · 2 à 6 équipes · modes de jeu · banque de questions auditée · parcours personnages · personnalisation.</Text></View></View>
    <View style={{ marginTop: 20 }}><AppButton title="Retour" onPress={() => router.back()} variant="secondary" /></View>
  </ScrollView>;
}

export default function AboutScreenWithScenic() {
  return <ScenicScreen><AboutScreen /></ScenicScreen>;
}
