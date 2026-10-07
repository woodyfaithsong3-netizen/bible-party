import React, { useState } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { ScenicScreen } from '@/components/ScenicScreen';
import { colors } from '@/theme/colors';
import { styles } from '@/theme/styles';

const difficultyIcon = require('../../assets/images/ui/difficulty.png');

const options = [
  [10, 'Rapide', '10 questions'],
  [20, 'Classique', '20 questions'],
  [30, 'Grande partie', '30 questions'],
] as const;

export default function DurationScreen() {
  const params = useLocalSearchParams<{ teams?: string; teamsCount?: string }>();
  const [duration, setDuration] = useState(20);
  const teams = String(params.teams || 'Équipe David|Équipe Paul');
  const teamsCount = Number(params.teamsCount || teams.split('|').length || 2);

  const next = () => router.push({ pathname: '/ready', params: { teams, teamsCount: String(teamsCount), duration: String(duration) } });

  return (
    <ScenicScreen>
      <ScrollView style={styles.screen} contentContainerStyle={styles.flowContent}>
        <View style={styles.flowHeader}>
          <Pressable onPress={() => router.back()} style={styles.flowBack}><Text style={styles.flowBackText}>‹</Text></Pressable>
          <View style={{ flex: 1 }}><Text style={styles.eyebrow}>NOUVELLE PARTIE</Text><Text style={styles.flowTitle}>Combien de questions ?</Text></View>
          <View style={styles.stepBadge}><Text style={styles.stepBadgeText}>02</Text></View>
        </View>
        <Text style={styles.flowSubtitle}>Choisissez la taille de votre partie.</Text>

        <Text style={styles.flowSection}>TAILLE DE LA PARTIE</Text>
        <View style={styles.durationChoiceGrid}>
          {options.map(([minutes, title, subtitle]) => (
            <Pressable key={minutes} onPress={() => setDuration(minutes)} style={[styles.durationChoice, duration === minutes && styles.durationChoiceActive]}>
              <Image source={difficultyIcon} style={{width:34,height:34,marginRight:8}} resizeMode="contain" />
              <View style={{ flex: 1 }}><Text style={[styles.durationChoiceNumber, duration === minutes && { color: colors.bg }]}>{minutes}</Text><Text style={[styles.durationChoiceUnit, duration === minutes && { color: colors.bg }]}>QUESTIONS</Text></View>
              <View><Text style={[styles.durationChoiceTitle, duration === minutes && { color: colors.bg }]}>{title}</Text><Text style={[styles.durationChoiceSub, duration === minutes && { color: colors.bg }]}>{subtitle}</Text></View>
            </Pressable>
          ))}
        </View>

        <View style={styles.autoWideCard}>
          <View style={styles.goldIcon}><Text style={{ color: colors.bg, fontWeight: '900' }}>✦</Text></View>
          <View style={{ flex: 1 }}><Text style={styles.infoTitle}>Modes automatiques</Text><Text style={styles.infoSubtitle}>Quiz, Vrai ou Faux, Qui est-ce ? et Complète les paroles se mélangent.</Text></View>
          <Text style={styles.autoText}>AUTO</Text>
        </View>

        <View style={styles.flowSummaryCard}>
          <Text style={styles.eyebrow}>VOTRE PARTIE</Text>
          <Text style={styles.summaryBig}>{teamsCount} équipes  ·  {duration} questions</Text>
          <Text style={styles.infoSubtitle}>{teams.split('|').join('  ·  ')}</Text>
        </View>

        <Pressable onPress={next} style={styles.flowPrimaryButton}><Text style={styles.flowPrimaryText}>Lancer la partie</Text><Text style={styles.flowPrimaryArrow}>›</Text></Pressable>
        <Text style={styles.flowFooter}>Étape 2 sur 4</Text>
      </ScrollView>
    </ScenicScreen>
  );
}
