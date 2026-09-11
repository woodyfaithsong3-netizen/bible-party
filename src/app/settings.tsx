import React, { useCallback, useState } from 'react';
import { Alert, ScrollView, Switch, Text, View } from 'react-native';
import { router, useFocusEffect } from 'expo-router';
import { AppButton } from '@/components/AppButton';
import { colors } from '@/theme/colors';
import { styles } from '@/theme/styles';
import { AppSettings, getSettings, saveSettings } from '@/lib/settings';
import { resetProgress } from '@/lib/storage';

const defaults: AppSettings = { sounds: true, haptics: true, animations: true, highContrast: false };

export default function SettingsScreen() {
  const [settings, setSettings] = useState<AppSettings>(defaults);
  useFocusEffect(useCallback(() => { getSettings().then(setSettings); }, []));
  const update = async (patch: Partial<AppSettings>) => {
    const next = { ...settings, ...patch };
    setSettings(next);
    await saveSettings(next);
  };
  const reset = () => Alert.alert('Réinitialiser la progression ?', 'Les scores locaux, statistiques et questions à réviser seront supprimés de cet appareil.', [{ text: 'Annuler', style: 'cancel' }, { text: 'Réinitialiser', style: 'destructive', onPress: async () => { await resetProgress(); } }]);
  const row = (title: string, description: string, value: boolean, key: keyof AppSettings) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <View style={{ flex: 1, paddingRight: 16 }}><Text style={{ color: colors.text, fontSize: 16, fontWeight: '800' }}>{title}</Text><Text style={{ color: colors.muted, marginTop: 4, lineHeight: 18 }}>{description}</Text></View>
      <Switch value={value} onValueChange={v => update({ [key]: v })} accessibilityLabel={title} />
    </View>
  );
  return <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
    <Text style={styles.eyebrow}>RÉGLAGES</Text><Text style={[styles.title, { marginTop: 7 }]}>Ton expérience</Text><Text style={styles.subtitle}>Les préférences restent sur cet appareil et ne nécessitent aucun compte.</Text>
    <View style={[styles.card, { marginTop: 24, gap: 18 }]}>
      {row('Sons', 'Prépare les retours audio de l’application.', settings.sounds, 'sounds')}
      <View style={{ height: 1, backgroundColor: colors.border }} />
      {row('Vibrations', 'Retour haptique lors des bonnes et mauvaises réponses.', settings.haptics, 'haptics')}
      <View style={{ height: 1, backgroundColor: colors.border }} />
      {row('Animations', 'Transitions et micro-animations discrètes.', settings.animations, 'animations')}
      <View style={{ height: 1, backgroundColor: colors.border }} />
      {row('Contraste renforcé', 'Renforce les séparations visuelles et les états.', settings.highContrast, 'highContrast')}
    </View>
    <Text style={[styles.sectionTitle, { marginTop: 30 }]}>DONNÉES LOCALES</Text>
    <View style={styles.card}><Text style={{ color: colors.muted, lineHeight: 21 }}>Bible Party fonctionne hors connexion. Les statistiques et le classement affichés ici sont enregistrés uniquement sur cet appareil.</Text><AppButton title="Réinitialiser ma progression" onPress={reset} variant="secondary" style={{ marginTop: 15 }} /></View>
    <Text style={[styles.sectionTitle, { marginTop: 30 }]}>À PROPOS</Text>
    <View style={styles.card}><Text style={{ color: colors.text, fontWeight: '800' }}>Bible Party · V64</Text><Text style={{ color: colors.muted, lineHeight: 21, marginTop: 8 }}>Application indépendante de jeux bibliques. Bible Party n’est pas produite, approuvée, parrainée ou affiliée aux Témoins de Jéhovah.</Text><Text style={{ color: colors.muted, lineHeight: 21, marginTop: 8 }}>Les contenus sont formulés de manière originale. Les références bibliques servent à vérifier les informations.</Text></View>
    <View style={{ marginTop: 18, gap: 9 }}><AppButton title="Politique de confidentialité" onPress={() => router.push('/privacy')} variant="secondary" /><AppButton title="À propos" onPress={() => router.push('/about')} variant="secondary" /><AppButton title="Retour à l’accueil" onPress={() => router.replace('/')} /></View>
  </ScrollView>;
}
