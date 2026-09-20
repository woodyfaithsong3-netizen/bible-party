import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { router } from 'expo-router';
import { colors } from '@/theme/colors';
import { styles } from '@/theme/styles';
import { AppButton } from '@/components/AppButton';
import { ScenicScreen } from '@/components/ScenicScreen';

function PrivacyScreen() {
  return <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
    <Text style={styles.eyebrow}>CONFIDENTIALITÉ</Text>
    <Text style={[styles.title, { marginTop: 7 }]}>Politique de confidentialité</Text>
    <Text style={styles.subtitle}>Version 1.0 · à publier avec l’application</Text>
    <View style={[styles.card, { marginTop: 24, gap: 16 }]}>
      <Text style={{ color: colors.text, fontSize: 18, fontWeight: '900' }}>Une application conçue pour fonctionner hors connexion</Text>
      <Text style={{ color: colors.muted, lineHeight: 23 }}>Bible Party ne demande pas de créer un compte pour jouer. Dans la version actuelle, les parties, statistiques, progression et classement sont conservés localement sur l’appareil.</Text>
      <Text style={{ color: colors.text, fontWeight: '800' }}>Données collectées</Text>
      <Text style={{ color: colors.muted, lineHeight: 23 }}>La version actuelle n’intègre pas de compte utilisateur, de publicité personnalisée ni de serveur nécessaire au fonctionnement du jeu. Les réglages et données de progression sont stockés localement.</Text>
      <Text style={{ color: colors.text, fontWeight: '800' }}>Suppression</Text>
      <Text style={{ color: colors.muted, lineHeight: 23 }}>La progression peut être réinitialisée depuis Paramètres. La désinstallation de l’application supprime également les données locales associées, sous réserve du comportement de sauvegarde du système.</Text>
      <Text style={{ color: colors.text, fontWeight: '800' }}>Évolutions futures</Text>
      <Text style={{ color: colors.muted, lineHeight: 23 }}>Toute fonctionnalité nécessitant un compte, une synchronisation en ligne, des notifications ou un service tiers devra faire l’objet d’une mise à jour de cette politique avant son activation.</Text>
      <Text style={{ color: colors.muted, lineHeight: 21 }}>Cette page constitue le contenu de référence à publier sur une URL publique avant la soumission aux stores. Les informations doivent être vérifiées juridiquement avant publication.</Text>
    </View>
    <View style={{ marginTop: 20 }}><AppButton title="Retour" onPress={() => router.back()} variant="secondary" /></View>
  </ScrollView>;
}

export default function PrivacyScreenWithScenic() {
  return <ScenicScreen><PrivacyScreen /></ScenicScreen>;
}
