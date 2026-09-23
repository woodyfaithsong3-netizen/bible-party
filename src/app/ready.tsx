import React from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { ScenicScreen } from '@/components/ScenicScreen';
import { colors } from '@/theme/colors';
import { styles } from '@/theme/styles';

export default function ReadyScreen() {
  const teamIcon = require('../../assets/images/ui/team.png');
const difficultyIcon = require('../../assets/images/ui/difficulty.png');
const starIcon = require('../../assets/images/ui/star.png');
const cardIcon = require('../../assets/images/ui/card.png');
const crownIcon = require('../../assets/images/ui/crown.png');

const params = useLocalSearchParams<{ teams?: string; teamsCount?: string; duration?: string; modes?: string; categories?: string; difficulty?: string }>();
  const teams = String(params.teams || 'Équipe David|Équipe Paul');
  const teamsCount = Number(params.teamsCount || teams.split('|').length || 2);
  const duration = Number(params.duration || 20);
  const modes = String(params.modes || 'quiz,mystery,truefalse,challenge,forbidden');
  const categories = String(params.categories || '');
  const difficulty = String(params.difficulty || 'all');

  const start = () => router.replace({ pathname: '/game', params: {
    modes, teams, duration: String(duration), categories, difficulty, host: 'Maître de jeu'
  }});

  return (
    <ScenicScreen>
      <ScrollView style={styles.screen} contentContainerStyle={styles.flowContentReady}>
        <Pressable onPress={() => router.back()} style={styles.readyBack}><Text style={styles.flowBackText}>‹</Text></Pressable>
        <View style={styles.readyTop}>
          <Text style={styles.eyebrow}>NOUVELLE PARTIE</Text>
          <View style={styles.readyCrown}><Image source={crownIcon} style={{width:46,height:38}} resizeMode="contain" /></View>
          <Text style={styles.readyTitle}>C’est parti !</Text>
          <Text style={styles.readySubtitle}>Tout est prêt, on se lance !</Text>
        </View>

        <View style={styles.readyHero}>
          <View style={styles.readyCards}><Image source={require('../../assets/images/ui/question.png')} style={{width:42,height:42}} resizeMode="contain"/><Image source={starIcon} style={{width:42,height:42}} resizeMode="contain"/><Image source={require('../../assets/images/ui/bolt.png')} style={{width:42,height:42}} resizeMode="contain"/></View>
          <View style={styles.readySpark}><Text style={{ color: colors.accent2, fontSize: 34 }}>✦</Text></View>
        </View>

        <View style={styles.readySummary}>
          <View style={styles.readyRow}><Image source={teamIcon} style={styles.readyIconImage} resizeMode="contain"/><View style={{ flex: 1 }}><Text style={styles.readyLabel}>Équipes</Text><Text style={styles.readyValue}>{teams.split('|').join('  ·  ')}</Text></View></View>
          <View style={styles.readyDivider}/>
          <View style={styles.readyRow}><Image source={difficultyIcon} style={styles.readyIconImage} resizeMode="contain"/><View style={{ flex: 1 }}><Text style={styles.readyLabel}>Durée</Text><Text style={styles.readyValue}>{duration} minutes</Text></View></View>
          <View style={styles.readyDivider}/>
          <View style={styles.readyRow}><Image source={starIcon} style={styles.readyIconImage} resizeMode="contain"/><View style={{ flex: 1 }}><Text style={styles.readyLabel}>Modes</Text><Text style={styles.readyValue}>{modes.split(',').length} modes · {difficulty === 'all' ? 'toutes difficultés' : difficulty}</Text></View></View>
          <View style={styles.readyDivider}/>
          <View style={styles.readyRow}><Image source={cardIcon} style={styles.readyIconImage} resizeMode="contain"/><View style={{ flex: 1 }}><Text style={styles.readyLabel}>Catégories</Text><Text style={styles.readyValue}>{categories ? categories.split(',').join('  ·  ') : 'Toutes'}</Text></View></View>
        </View>

        <Pressable onPress={start} style={styles.flowPrimaryButton}><Text style={styles.flowPrimaryText}>Commencer</Text><Text style={styles.flowPrimaryArrow}>›</Text></Pressable>
        <Pressable onPress={() => router.push({ pathname: '/customize', params: { teams, teamsCount: String(teamsCount), duration: String(duration), modes, categories, difficulty } })} style={styles.readySecondary}><Text style={styles.readySecondaryText}>Personnaliser</Text></Pressable>
        <Text style={styles.flowFooter}>Étape 3 sur 4  ·  La partie se lancera automatiquement</Text>
      </ScrollView>
    </ScenicScreen>
  );
}
