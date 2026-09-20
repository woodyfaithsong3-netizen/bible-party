import React from 'react';
import { StyleSheet, View } from 'react-native';

/**
 * Pure React-Native scenic backdrop. No external image, CSS background, SVG,
 * canvas or browser API: the same artwork is rendered on iOS, Android and Web.
 */
export function ScenicBackground() {
  return (
    <View pointerEvents="none" style={StyleSheet.absoluteFill}>
      <View style={styles.sky} />
      <View style={styles.sunGlow} />
      <View style={styles.sun} />

      <View style={[styles.cloud, styles.cloudOne]} />
      <View style={[styles.cloud, styles.cloudTwo]} />

      <View style={[styles.mountain, styles.mountainBackLeft]} />
      <View style={[styles.mountain, styles.mountainBackRight]} />
      <View style={[styles.mountain, styles.mountainFrontLeft]} />
      <View style={[styles.mountain, styles.mountainFrontRight]} />

      <View style={styles.forestBand} />
      <View style={styles.valley} />
      <View style={styles.river} />
      <View style={styles.foreground} />

      <View style={styles.vignetteTop} />
      <View style={styles.vignetteBottom} />
    </View>
  );
}

const styles = StyleSheet.create({
  sky: { ...StyleSheet.absoluteFill, backgroundColor: '#63C9E6' },
  sunGlow: {
    position: 'absolute', width: 310, height: 310, borderRadius: 155,
    backgroundColor: 'rgba(255,235,155,0.22)', top: -95, right: -55,
  },
  sun: {
    position: 'absolute', width: 118, height: 118, borderRadius: 59,
    backgroundColor: '#FFE6A0', top: 34, right: 48,
    shadowColor: '#FFF3BF', shadowOpacity: 0.45, shadowRadius: 30,
  },
  cloud: {
    position: 'absolute', height: 22, borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.42)',
  },
  cloudOne: { width: 150, top: 92, left: -30 },
  cloudTwo: { width: 115, top: 155, right: -20 },
  mountain: {
    position: 'absolute', width: 330, height: 330, borderRadius: 42,
    transform: [{ rotate: '45deg' }],
  },
  mountainBackLeft: { backgroundColor: '#4C9F9B', left: -175, top: 205 },
  mountainBackRight: { backgroundColor: '#397F86', right: -155, top: 180 },
  mountainFrontLeft: { backgroundColor: '#246B61', left: -195, top: 350 },
  mountainFrontRight: { backgroundColor: '#1E5A50', right: -180, top: 330 },
  forestBand: {
    position: 'absolute', left: -20, right: -20, top: '53%', height: 105,
    backgroundColor: '#174F47', opacity: 0.92,
  },
  valley: {
    position: 'absolute', left: -70, right: -70, top: '62%', height: 260,
    borderTopLeftRadius: 220, borderTopRightRadius: 220,
    backgroundColor: '#2E8061',
    transform: [{ scaleX: 1.08 }],
  },
  river: {
    position: 'absolute', width: 105, height: 520, borderRadius: 60,
    backgroundColor: '#72D7D0', opacity: 0.86,
    top: '57%', left: '50%', marginLeft: -52,
    transform: [{ rotate: '8deg' }],
  },
  foreground: {
    position: 'absolute', left: -40, right: -40, bottom: -80, height: 250,
    borderTopLeftRadius: 260, borderTopRightRadius: 260,
    backgroundColor: '#123D36', opacity: 0.96,
  },
  vignetteTop: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(6,34,48,0.08)',
  },
  vignetteBottom: {
    position: 'absolute', left: 0, right: 0, bottom: 0, height: '48%',
    backgroundColor: 'rgba(5,30,28,0.20)',
  },
});
