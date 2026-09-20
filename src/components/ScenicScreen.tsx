import React, { PropsWithChildren, useEffect, useState } from 'react';
import { Image, ImageBackground, Platform, Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { router, usePathname } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getSettings } from '@/lib/settings';

const scenic = require('../../assets/images/backgrounds/home-valley-exact-source.png');
const crown = require('../../assets/images/ui/crown.png');
const home = require('../../assets/images/ui/home.png');
const gamepad = require('../../assets/images/ui/gamepad.png');
const trophy = require('../../assets/images/ui/trophy.png');
const team = require('../../assets/images/ui/team.png');
const settings = require('../../assets/images/ui/settings.png');

export function ScenicScreen({ children, showTopCrown = true }: PropsWithChildren<{ showTopCrown?: boolean }>) {
  const pathname = usePathname();
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const wide = width >= 900;
  const active = (route: string) => route === '/' ? pathname === '/' : pathname.startsWith(route);
  const [highContrast, setHighContrast] = useState(false);
  useEffect(() => { let alive = true; getSettings().then(value => { if (alive) setHighContrast(value.highContrast); }); return () => { alive = false; }; }, [pathname]);

  return (
    <ImageBackground source={scenic} resizeMode="cover" style={s.root} imageStyle={s.image}>
      <View pointerEvents="none" style={[s.overlay, highContrast && s.overlayHighContrast]} />
      <View style={s.layer}>
        {showTopCrown && (
          <View style={s.top}>
            <View style={s.topSpacer} />
            <Image source={crown} style={s.crown} resizeMode="contain" />
            <Pressable onPress={() => router.push('/settings')} style={s.gear} accessibilityRole="button" accessibilityLabel="Paramètres">
              <Image source={settings} style={s.gearIcon} resizeMode="contain" />
            </Pressable>
          </View>
        )}
        <View style={[s.page, { paddingBottom: 94 + insets.bottom + (Platform.OS === 'android' ? 8 : 0) }]}><View style={[s.inner, wide && s.innerWide]}>{children}</View></View>
        <View style={[s.navDock, { bottom: Math.max(18, insets.bottom + (Platform.OS === 'android' ? 16 : 8)) }]}>
          <View style={[s.nav, wide && s.navWide, highContrast && s.navHighContrast]}>
          <Nav label="Accueil" icon={home} active={active('/')} onPress={() => router.replace('/')} />
          <Nav label="Jouer" icon={gamepad} active={active('/setup') || active('/game')} onPress={() => router.replace('/setup')} />
          <Nav label="Scores" icon={trophy} active={active('/scores') || active('/result')} onPress={() => router.replace('/scores')} />
          <Nav label="Équipes" icon={team} active={active('/setup')} onPress={() => router.replace('/setup')} />
          <Nav label="Paramètres" icon={settings} active={active('/settings')} onPress={() => router.replace('/settings')} />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

function Nav({ label, icon, active, onPress }: { label: string; icon: number; active: boolean; onPress: () => void }) {
  return (
    <Pressable onPress={onPress} style={[s.item, active && s.itemActive]} accessibilityRole="button" accessibilityLabel={label}>
      <Image source={icon} style={[s.icon, active && s.iconActive]} resizeMode="contain" />
      <Text style={[s.text, active && s.active]}>{label}</Text>
      {active && <View style={s.line} />}
    </Pressable>
  );
}

const s = StyleSheet.create({
  root: { flex: 1, minHeight: '100%', backgroundColor: '#063947' },
  image: { width: '100%', height: '100%' },
  overlay: { ...StyleSheet.absoluteFill, backgroundColor: 'rgba(0,25,35,0.10)' },
  overlayHighContrast: { backgroundColor: 'rgba(0,20,27,0.24)' },
  layer: { flex: 1 },
  top: { height: 64, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 14 },
  topSpacer: { width: 42 },
  crown: { width: 42, height: 36 },
  gear: { width: 38, height: 38, borderRadius: 20, backgroundColor: 'rgba(2,34,43,0.60)', borderWidth: 1, borderColor: 'rgba(255,226,118,0.60)', alignItems: 'center', justifyContent: 'center' },
  gearIcon: { width: 25, height: 25 },
  page: { flex: 1, alignItems: 'center', paddingHorizontal: 14 },
  inner: { flex: 1, width: '100%', maxWidth: 760 }, innerWide: { maxWidth: 1040 },
  navDock: { position: 'absolute', left: 0, right: 0, bottom: 8, alignItems: 'center', paddingHorizontal: 8 },
  nav: { width: '100%', minHeight: 60, borderRadius: 23, borderWidth: 1.2, borderColor: 'rgba(121,213,232,0.62)', backgroundColor: 'rgba(2,31,39,0.88)', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 3, shadowColor: '#00131A', shadowOpacity: 0.42, shadowRadius: 18 },
  navWide: { width: '100%', maxWidth: 760 },
  navHighContrast: { borderColor: 'rgba(255,229,138,0.82)', backgroundColor: 'rgba(1,24,31,0.96)' },
  item: { flex: 1, minHeight: 52, borderRadius: 17, alignItems: 'center', justifyContent: 'center', position: 'relative' },
  itemActive: { backgroundColor: 'rgba(242,201,76,0.11)' },
  icon: { width: 23, height: 23, opacity: 0.96 },
  iconActive: { opacity: 1 },
  text: { color: '#F6FBF9', fontSize: 8.2, fontWeight: '800', marginTop: 3 },
  active: { color: '#FFE58A' },
  line: { position: 'absolute', bottom: 1, width: 25, height: 3, borderRadius: 3, backgroundColor: '#F2C94C' },
});
