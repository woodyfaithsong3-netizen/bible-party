import React from 'react';
import { Platform, Pressable, ScrollView, Text, View } from 'react-native';
import { router } from 'expo-router';
import { Logo } from '@/components/Logo';
import { colors } from '@/theme/colors';
import { styles } from '@/theme/styles';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={[styles.content, { paddingTop: 24, paddingBottom: 40 }]}>
      <View style={styles.homeHeader}>
        <Logo />
        <Pressable onPress={() => router.push('/settings')} style={styles.iconButton} accessibilityRole="button" accessibilityLabel="Paramètres">
          <Text style={{ color: colors.accent2, fontSize: 20 }}>⚙</Text>
        </Pressable>
      </View>

      <View style={styles.hero}>
        <Text style={styles.heroKicker}>LE JEU BIBLIQUE POUR VOS SOIRÉES</Text>
        <Text style={styles.heroTitle}>Une partie ?</Text>
        <Text style={styles.heroSubtitle}>Répondez, devinez, défiez-vous. Bible Party s’occupe du reste.</Text>

        <View style={styles.heroArt}>
          <View style={styles.heroBook}><Text style={{ color: colors.accent2, fontSize: 42 }}>✦</Text></View>
          <View style={[styles.floatingCard, { transform: [{ rotate: '-10deg' }] }]}><Text style={styles.floatingIcon}>?</Text></View>
          <View style={[styles.floatingCard, { transform: [{ rotate: '8deg' }], marginLeft: 70, marginTop: -46 }]}><Text style={styles.floatingIcon}>★</Text></View>
          <View style={[styles.floatingCard, { transform: [{ rotate: '14deg' }], marginLeft: 132, marginTop: -34 }]}><Text style={styles.floatingIcon}>⚡</Text></View>
        </View>
      </View>

      <Pressable
        onPress={() => router.push('/setup')}
        style={({ pressed }) => [styles.playButton, pressed && { opacity: 0.9, transform: [{ scale: 0.985 }] }]}
        accessibilityRole="button"
      >
        <View style={styles.playIcon}><Text style={{ color: colors.bg, fontSize: 22 }}>▶</Text></View>
        <View style={{ flex: 1 }}>
          <Text style={styles.playTitle}>JOUER</Text>
          <Text style={styles.playSubtitle}>Lancer une nouvelle partie</Text>
        </View>
        <Text style={{ color: colors.bg, fontSize: 25, fontWeight: '900' }}>→</Text>
      </Pressable>

      <Pressable onPress={() => router.push('/game?modes=challenge&duration=1&teams=Équipe%20A|Équipe%20B')} style={({ pressed }) => [styles.quickCard, pressed && { opacity: 0.88 }]}>
        <View style={styles.quickIcon}><Text style={{ color: colors.accent2, fontSize: 24 }}>⚡</Text></View>
        <View style={{ flex: 1 }}><Text style={styles.quickTitle}>Défi rapide</Text><Text style={styles.quickSubtitle}>Une manche · 2 minutes</Text></View>
        <Text style={{ color: colors.muted, fontSize: 22 }}>→</Text>
      </Pressable>

      <View style={styles.homeGrid}>
        {[
          ['🧠', 'Entraînement', 'Se préparer', '/training'],
          ['🏆', 'Scores', 'Voir les résultats', '/scores'],
          ['👥', 'Équipes', 'Jouer ensemble', '/setup'],
        ].map(([icon, title, sub, path]) => (
          <Pressable key={title} onPress={() => router.push(path as never)} style={({ pressed }) => [styles.homeTile, pressed && { opacity: 0.86, transform: [{ scale: 0.985 }] }]}>
            <Text style={styles.tileIcon}>{icon}</Text>
            <Text style={styles.tileTitle}>{title}</Text>
            <Text style={styles.tileSubtitle}>{sub}</Text>
          </Pressable>
        ))}
      </View>

      <View style={styles.homeTagline}><View style={styles.tagLine} /><Text style={styles.tagText}>PLUS QU’UN JEU · UNE AVENTURE</Text><View style={styles.tagLine} /></View>

      {Platform.OS === 'web' && (
        <View style={styles.downloadCard}>
          <Text style={styles.eyebrow}>INSTALLATION GRATUITE</Text>
          <Text style={styles.downloadTitle}>Bible Party dans votre poche</Text>
          <Text style={styles.downloadText}>Sur iPhone, ajoutez le site à l’écran d’accueil depuis Safari. Sur Android, téléchargez l’APK.</Text>
          <View style={{ gap: 9, marginTop: 13 }}>
            <View style={styles.downloadMini}><Text style={styles.downloadMiniLabel}>IPHONE</Text><Text style={styles.downloadMiniText}>Safari → Partager → Sur l’écran d’accueil</Text></View>
            <Pressable onPress={() => { window.location.href = '/bible-party/bible-party-1.7.6.apk'; }} style={styles.downloadButton} accessibilityRole="button">
              <Text style={{ color: colors.bg, fontWeight: '900' }}>ANDROID · Télécharger l’APK</Text>
            </Pressable>
          </View>
        </View>
      )}

      <Text style={styles.disclaimer}>Bible Party est une application indépendante. Elle n’est pas produite, approuvée, parrainée ou affiliée aux Témoins de Jéhovah.</Text>
    </ScrollView>
  );
}
