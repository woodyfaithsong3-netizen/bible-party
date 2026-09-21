import React, { useCallback, useState } from 'react';
import { Alert, Image, Pressable, ScrollView, StyleSheet, Switch, Text, View } from 'react-native';
import { router, useFocusEffect } from 'expo-router';
import { ScenicScreen } from '@/components/ScenicScreen';
import { AppSettings, getSettings, saveSettings } from '@/lib/settings';
import { resetProgress } from '@/lib/storage';

const iconMap: Record<keyof AppSettings, number> = {
  sounds: require('../../assets/images/ui/bolt.png'),
  haptics: require('../../assets/images/ui/difficulty.png'),
  animations: require('../../assets/images/ui/star.png'),
  highContrast: require('../../assets/images/ui/settings.png'),
};
const crown = require('../../assets/images/ui/crown.png');

const defaults: AppSettings = { sounds: true, haptics: true, animations: true, highContrast: false };
const visibleSettings: Array<[keyof AppSettings, string, string]> = [
  ['haptics', 'Vibrations', 'Retour haptique des réponses.'],
];

export default function SettingsScreen() {
  const [s, setS] = useState(defaults);
  useFocusEffect(useCallback(() => { getSettings().then(setS); }, []));
  const update = async (p: Partial<AppSettings>) => { const n = { ...s, ...p }; setS(n); await saveSettings(n); };
  const reset = () => Alert.alert('Réinitialiser la progression ?', 'Les scores et statistiques locales seront supprimés.', [{ text: 'Annuler', style: 'cancel' }, { text: 'Réinitialiser', style: 'destructive', onPress: () => void resetProgress() }]);

  return <ScenicScreen>
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
      <View style={styles.hero}><View style={styles.crownWrap}><Image source={crown} style={styles.crown} resizeMode="contain" /></View><Text style={styles.title}>Personnalisation</Text><Text style={styles.subtitle}>Façonnez votre soirée Bible Party.</Text></View>

      <Section title="EXPÉRIENCE DE JEU">
        {visibleSettings.map(([key, title, subtitle]) => <View key={key} style={styles.row}>
          <View style={styles.iconWrap}><Image source={iconMap[key]} style={styles.icon} resizeMode="contain" /></View>
          <View style={styles.copy}><Text style={styles.rowTitle}>{title}</Text><Text style={styles.rowSub}>{subtitle}</Text></View>
          <Switch value={s[key]} onValueChange={v => void update({ [key]: v })} trackColor={{ false: 'rgba(255,255,255,.16)', true: 'rgba(242,201,76,.55)' }} thumbColor={s[key] ? '#FFE58A' : '#DDE8E5'} />
        </View>)}
      </Section>

      <Section title="DONNÉES LOCALES">
        <View style={styles.info}><Text style={styles.infoTitle}>Vos parties restent sur cet appareil</Text><Text style={styles.infoText}>Scores, statistiques et progression sont conservés localement. Aucun compte n’est nécessaire pour jouer.</Text></View>
        <Pressable onPress={reset} style={({ pressed }) => [styles.danger, pressed && styles.pressed]}><Text style={styles.dangerText}>Réinitialiser la progression</Text></Pressable>
      </Section>

      <Section title="À PROPOS">
        <View style={styles.info}><Text style={styles.infoTitle}>Bible Party · V1.9.9</Text><Text style={styles.infoText}>Application indépendante de jeux bibliques. Bible Party n’est pas produite, approuvée, parrainée ou affiliée aux Témoins de Jéhovah.</Text></View>
        <LinkRow title="Politique de confidentialité" onPress={() => router.push('/privacy')} /><LinkRow title="À propos" onPress={() => router.push('/about')} />
      </Section>
    </ScrollView>
  </ScenicScreen>;
}

function Section({ title, children }: { title: string; children: React.ReactNode }) { return <View style={styles.section}><Text style={styles.sectionTitle}>{title}</Text><View style={styles.card}>{children}</View></View>; }
function LinkRow({ title, onPress }: { title: string; onPress: () => void }) { return <Pressable onPress={onPress} style={({ pressed }) => [styles.linkRow, pressed && styles.pressed]}><Text style={styles.linkText}>{title}</Text><Text style={styles.linkArrow}>›</Text></Pressable>; }

const styles = StyleSheet.create({
  content: { paddingHorizontal: 16, paddingTop: 14, paddingBottom: 140, width: '100%', maxWidth: 720, alignSelf: 'center' },
  hero: { alignItems: 'center', marginBottom: 18 }, crownWrap: { width: 58, height: 48, borderRadius: 17, backgroundColor: 'rgba(242,201,76,.13)', borderWidth: 1, borderColor: 'rgba(242,201,76,.46)', alignItems: 'center', justifyContent: 'center' }, crown: { width: 45, height: 37 }, title: { color: '#FFFDF5', fontSize: 32, fontWeight: '900', marginTop: 7 }, subtitle: { color: '#E4F2EF', fontSize: 12, marginTop: 3 },
  section: { marginTop: 14 }, sectionTitle: { color: '#FFE58A', fontSize: 10, fontWeight: '900', letterSpacing: 1.7, marginBottom: 8 }, card: { borderRadius: 25, borderWidth: 1, borderColor: 'rgba(138,223,240,.44)', backgroundColor: 'rgba(4,40,51,.72)', overflow: 'hidden' },
  row: { minHeight: 74, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 14, borderBottomWidth: 1, borderBottomColor: 'rgba(255,255,255,.09)' }, iconWrap: { width: 43, height: 43, borderRadius: 14, backgroundColor: 'rgba(242,201,76,.13)', borderWidth: 1, borderColor: 'rgba(242,201,76,.42)', alignItems: 'center', justifyContent: 'center' }, icon: { width: 26, height: 26 }, copy: { flex: 1, marginLeft: 11, marginRight: 8 }, rowTitle: { color: '#FFF', fontWeight: '900', fontSize: 14 }, rowSub: { color: '#D6E8E3', fontSize: 10.5, marginTop: 2 },
  info: { padding: 15 }, infoTitle: { color: '#FFF', fontSize: 14, fontWeight: '900' }, infoText: { color: '#D6E8E3', fontSize: 11.5, lineHeight: 18, marginTop: 6 }, danger: { minHeight: 48, margin: 0, borderTopWidth: 1, borderTopColor: 'rgba(255,255,255,.09)', backgroundColor: 'rgba(104,28,36,.42)', alignItems: 'center', justifyContent: 'center' }, dangerText: { color: '#FFD7D7', fontWeight: '900' }, linkRow: { minHeight: 48, paddingHorizontal: 15, flexDirection: 'row', alignItems: 'center', borderTopWidth: 1, borderTopColor: 'rgba(255,255,255,.09)' }, linkText: { flex: 1, color: '#FFFDF5', fontSize: 13, fontWeight: '900' }, linkArrow: { color: '#FFE58A', fontSize: 28 }, pressed: { opacity: .78 },
});
