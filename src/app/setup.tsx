import React, { useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { router } from 'expo-router';
import { ScenicScreen } from '@/components/ScenicScreen';

const teamIcon = require('../../assets/images/ui/team.png');
const crownIcon = require('../../assets/images/ui/crown.png');

const defaultNames = ['Équipe David', 'Équipe Paul', 'Équipe Ruth', 'Équipe Esther', 'Équipe Pierre', 'Équipe Marie'];

export default function SetupScreen() {
  const [teamsCount, setTeamsCount] = useState(2);
  const [teamNames, setTeamNames] = useState(defaultNames);
  const [rename, setRename] = useState(false);

  const continueToDuration = () => {
    const names = teamNames.slice(0, teamsCount).map((name, i) =>
      (name.trim() || `Équipe ${String.fromCharCode(65 + i)}`).replace(/[|]/g, ' ').slice(0, 28)
    );
    router.push({ pathname: '/duration', params: { teams: names.join('|'), teamsCount: String(teamsCount) } });
  };

  return (
    <ScenicScreen showTopCrown={false}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={s.content}
        style={{ flex: 1 }}
      >
        <View style={s.header}>
          <Pressable onPress={() => router.replace('/')} style={s.back} accessibilityRole="button" accessibilityLabel="Retour">
            <Text style={s.backText}>‹</Text>
          </Pressable>
          <View style={s.crown}><Image source={crownIcon} style={{width:50,height:44}} resizeMode="contain" /></View>
          <View style={{ width: 46 }} />
        </View>

        <Text style={s.title}>QUI JOUE ?</Text>
        <Text style={s.subtitle}>Sélectionnez le nombre d’équipes</Text>

        <View style={s.grid}>
          {[2, 3, 4].map(n => (
            <Pressable
              key={n}
              onPress={() => setTeamsCount(n)}
              style={[s.teamCard, teamsCount === n && s.teamCardActive]}
            >
              <Image source={teamIcon} style={s.teamIcon} resizeMode="contain" />
              <Text style={[s.teamNumber, teamsCount === n && s.activeText]}>{n} équipes</Text>
            </Pressable>
          ))}
          <Pressable onPress={() => { setTeamsCount(v => v >= 5 ? v : 5); setRename(true); }} style={[s.teamCard, s.optionalCard, teamsCount >= 5 && s.teamCardActive]}>
            <Text style={s.plus}>＋</Text>
            <Text style={s.teamNumber}>4 équipes+</Text>
            <Text style={s.optional}>(option)</Text>
          </Pressable>
        </View>

        <Pressable onPress={() => { setTeamsCount(v => Math.min(6, v + 1)); setRename(true); }} disabled={teamsCount >= 6} style={[s.addTeam, teamsCount >= 6 && { opacity: 0.45 }]}>
          <Text style={s.addPlus}>＋</Text>
          <Text style={s.addText}>{teamsCount >= 6 ? 'Maximum 6 équipes' : 'Ajouter une équipe'}</Text>
        </Pressable>

        {rename && (
          <View style={s.renamePanel}>
            {teamNames.slice(0, teamsCount).map((name, i) => (
              <TextInput
                key={i}
                value={name}
                onChangeText={v => setTeamNames(old => old.map((x, j) => j === i ? v : x))}
                placeholder={`Équipe ${i + 1}`}
                placeholderTextColor="rgba(255,255,255,.55)"
                style={s.input}
              />
            ))}
          </View>
        )}

        <Pressable onPress={continueToDuration} style={s.continue}>
          <Text style={s.continueText}>Continuer</Text>
          <Text style={s.arrow}>›</Text>
        </Pressable>

        <Text style={s.step}>1 / 4  ·  {teamsCount} équipe{teamsCount > 1 ? 's' : ''}</Text>
      </ScrollView>
    </ScenicScreen>
  );
}

const s = StyleSheet.create({
  content: { paddingTop: 18, paddingHorizontal: 22, paddingBottom: 128, minHeight: '100%', width: '100%', maxWidth: 720, alignSelf: 'center' },
  header: { height: 72, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  back: { width: 42, height: 42, borderRadius: 21, backgroundColor: 'rgba(2,35,45,.52)', borderWidth: 1, borderColor: 'rgba(255,255,255,.7)', alignItems: 'center', justifyContent: 'center' },
  backText: { color: '#FFF', fontSize: 39, lineHeight: 40, fontWeight: '300', marginTop: -5 },
  crown: { width: 56, height: 52, alignItems: 'center', justifyContent: 'center' },
  crownText: { color: '#FFD94A', fontSize: 42, textShadowColor: 'rgba(255,211,62,.7)', textShadowRadius: 10 },
  title: { color: '#FFFDF5', fontSize: 38, lineHeight: 43, fontWeight: '900', textAlign: 'center', letterSpacing: 0.3, textShadowColor: 'rgba(0,20,25,.5)', textShadowRadius: 8 },
  subtitle: { color: '#FFF', fontSize: 16, fontWeight: '700', textAlign: 'center', marginTop: 5, textShadowColor: 'rgba(0,20,25,.55)', textShadowRadius: 5 },
  grid: { marginTop: 24, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', rowGap: 12 },
  teamCard: { width: '48.2%', minHeight: 136, borderRadius: 22, borderWidth: 1.5, borderColor: 'rgba(109,221,239,.55)', backgroundColor: 'rgba(3,55,67,.68)', alignItems: 'center', justifyContent: 'center', shadowColor: '#00151D', shadowOpacity: .35, shadowRadius: 12 },
  teamCardActive: { backgroundColor: 'rgba(69,56,0,.82)', borderColor: '#FFD83D', borderWidth: 2.5, shadowColor: '#FFD83D', shadowOpacity: .55, shadowRadius: 18 },
  optionalCard: { backgroundColor: 'rgba(43,35,89,.73)', borderColor: 'rgba(196,172,255,.62)' },
  teamIcon: { fontSize: 39, marginBottom: 9 },
  activeIcon: { color: '#FFD83D' },
  teamNumber: { color: '#FFF', fontSize: 18, fontWeight: '900', textAlign: 'center' },
  activeText: { color: '#FFFDF5' },
  plus: { color: '#FFF', fontSize: 49, lineHeight: 50, fontWeight: '300', marginBottom: 2 },
  optional: { color: '#FFF', fontSize: 12, fontWeight: '700', marginTop: 1 },
  addTeam: { marginTop: 16, height: 49, borderRadius: 25, borderWidth: 1.2, borderColor: 'rgba(116,222,239,.58)', backgroundColor: 'rgba(3,55,67,.68)', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
  addPlus: { color: '#FFF', fontSize: 28, lineHeight: 28, marginRight: 7 },
  addText: { color: '#FFF', fontSize: 14, fontWeight: '800' },
  renamePanel: { marginTop: 10, gap: 8 },
  input: { height: 43, borderRadius: 14, borderWidth: 1, borderColor: 'rgba(255,255,255,.35)', backgroundColor: 'rgba(0,25,32,.58)', color: '#FFF', paddingHorizontal: 13 },
  continue: { marginTop: 20, height: 58, borderRadius: 30, backgroundColor: '#FFC62F', borderWidth: 1.5, borderColor: '#FFE47B', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', shadowColor: '#FFD63D', shadowOpacity: .55, shadowRadius: 15 },
  continueText: { color: '#07333A', fontSize: 18, fontWeight: '900' },
  arrow: { position: 'absolute', right: 19, color: '#07333A', fontSize: 34, fontWeight: '400', marginTop: -4 },
  step: { color: 'rgba(255,255,255,.72)', textAlign: 'center', fontSize: 10, fontWeight: '800', marginTop: 7 }
});
