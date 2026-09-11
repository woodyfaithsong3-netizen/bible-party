import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  content: { paddingHorizontal: 20, paddingTop: 18, paddingBottom: 44 },
  topRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  title: { color: colors.text, fontSize: 36, lineHeight: 40, fontWeight: '900', letterSpacing: -1.4 },
  subtitle: { color: colors.muted, fontSize: 16, lineHeight: 24, marginTop: 8 },
  sectionTitle: { color: colors.text, fontSize: 19, fontWeight: '800', marginBottom: 12 },
  eyebrow: { color: colors.accent, fontSize: 10, fontWeight: '900', letterSpacing: 2.2 },
  card: { backgroundColor: colors.surface, borderRadius: 22, borderWidth: 1, borderColor: colors.border, padding: 18 },
  button: { minHeight: 56, borderRadius: 17, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 18 },
  buttonPrimary: { backgroundColor: colors.accent },
  buttonSecondary: { backgroundColor: colors.surface2, borderWidth: 1, borderColor: colors.border },
  buttonText: { color: colors.bg, fontSize: 16, fontWeight: '900' },
  buttonTextSecondary: { color: colors.text, fontSize: 16, fontWeight: '800' },
  statCard: { backgroundColor: colors.surface, borderRadius: 18, borderWidth: 1, borderColor: colors.border, padding: 15 },
  glowCard: { backgroundColor: colors.surface2, borderRadius: 28, borderWidth: 1, borderColor: colors.borderStrong, padding: 22 },
});
