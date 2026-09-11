import React from 'react';
import { Platform, Pressable, ScrollView, Text, View } from 'react-native';
import { router } from 'expo-router';
import { Logo } from '@/components/Logo';
import { AppButton } from '@/components/AppButton';
import { colors } from '@/theme/colors';
import { styles } from '@/theme/styles';

const modes = [
  ['⚡', 'Défi rapide', '10 secondes pour marquer des points.', '/game?modes=challenge&duration=1&teams=Équipe%20A|Équipe%20B'],
  ['🧠', 'Entraînement', '10 questions pour progresser.', '/training'],
  ['📈', 'Mes progrès', 'Séries, réussite et catégories.', '/progress'],
  ['🏆', 'Classement', 'Les meilleurs scores sur cet appareil.', '/scores'],
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={[styles.content, { justifyContent: 'center', minHeight: '100%' as any }]}>
      <View style={{ alignItems: 'center', marginTop: 34 }}>
        <Logo />
        <View style={{ marginTop: 34, width: 74, height: 74, borderRadius: 24, backgroundColor: colors.surface2, borderWidth: 1, borderColor: colors.accent, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: colors.accent, fontSize: 28 }}>✦</Text>
        </View>
        <Text style={[styles.eyebrow, { marginTop: 28, textAlign: 'center' }]}>MAÎTRE DE JEU</Text>
        <Text style={[styles.title, { textAlign: 'center', marginTop: 8 }]}>Prêt à lancer la partie ?</Text>
        <Text style={[styles.subtitle, { textAlign: 'center', maxWidth: 360, marginTop: 10 }]}>Une personne garde le téléphone, anime les manches, révèle les réponses et valide les points. Les équipes jouent autour.</Text>
      </View>

      <View style={[styles.glowCard, { marginTop: 30 }]}>
        <Text style={styles.eyebrow}>COMMENT ÇA MARCHE</Text>
        <View style={{ gap: 13, marginTop: 14 }}>
          {['Choisir le maître de jeu', 'Créer les équipes et les modes', 'Révéler puis valider chaque réponse', 'Faire monter les scores jusqu’à la finale'].map((item, i) => (
            <View key={item} style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ width: 30, height: 30, borderRadius: 15, backgroundColor: colors.bg, borderWidth: 1, borderColor: colors.border, alignItems: 'center', justifyContent: 'center', marginRight: 10 }}>
                <Text style={{ color: colors.accent, fontWeight: '900' }}>{i + 1}</Text>
              </View>
              <Text style={{ color: colors.text, fontSize: 14, fontWeight: '700', flex: 1 }}>{item}</Text>
            </View>
          ))}
        </View>
        <AppButton title="Choisir le maître de jeu  →" onPress={() => router.push('/setup')} style={{ marginTop: 22 }} />
      </View>

      <View style={{ marginTop: 18, alignItems: 'center' }}>
        <Text style={{ color: colors.muted, fontSize: 11 }}>13 modes · 2 à 4 équipes · hors ligne</Text>
      </View>

      {Platform.OS === 'web' && (
        <View style={{ marginTop: 22, padding: 16, borderRadius: 18, backgroundColor: colors.surface2, borderWidth: 1, borderColor: colors.accent }}>
          <Text style={[styles.eyebrow, { color: colors.accent }]}>IPHONE · INSTALLATION GRATUITE</Text>
          <Text style={{ color: colors.text, fontSize: 14, fontWeight: '800', marginTop: 7 }}>Ajoutez Bible Party à votre écran d’accueil</Text>
          <Text style={{ color: colors.muted, fontSize: 12.5, lineHeight: 19, marginTop: 6 }}>Dans Safari sur iPhone : touchez Partager, puis « Sur l’écran d’accueil ». Bible Party s’ouvrira ensuite comme une application.</Text>
        </View>
      )}

      <View style={{ marginTop: 28, paddingTop: 18, borderTopWidth: 1, borderTopColor: colors.border }}>
        <Text style={{ color: colors.muted, fontSize: 10.5, lineHeight: 17, textAlign: 'center' }}>Bible Party est une application indépendante. Elle n’est pas produite, approuvée, parrainée ou affiliée aux Témoins de Jéhovah.</Text>
      </View>
    </ScrollView>
  );
}
