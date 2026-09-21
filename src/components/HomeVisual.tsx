import React from 'react';
import { Image, ImageBackground, Platform, Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';

const scenic = require('../../assets/images/backgrounds/home-valley-exact-source.png');
const logo = require('../../assets/images/ui/logo.png');
const iconQuestion = require('../../assets/images/ui/question.png');
const iconStar = require('../../assets/images/ui/star.png');
const iconCenterWide = iconStar;
const iconBolt = require('../../assets/images/ui/bolt.png');
const iconBible = require('../../assets/images/ui/bible.png');
const iconTeam = require('../../assets/images/ui/team.png');
const iconTrophy = require('../../assets/images/ui/trophy.png');
const iconGamepad = require('../../assets/images/ui/gamepad.png');
const iconHome = require('../../assets/images/ui/home.png');
const iconSettings = require('../../assets/images/ui/settings.png');
const iconTraining = require('../../assets/images/ui/training-cap.png');

function NavItem({ icon, label, active, onPress }: { icon: number; label: string; active?: boolean; onPress: () => void }) {
  return <Pressable onPress={onPress} style={({ pressed }) => [styles.navItem, active && styles.navItemActive, pressed && styles.pressed]} accessibilityRole="button" accessibilityLabel={label}>
    <Image source={icon} style={styles.navIcon} resizeMode="contain" />
    <Text style={[styles.navLabel, active && styles.activeText]}>{label}</Text>
  </Pressable>;
}

function GlassTile({ icon, title, subtitle, onPress, desktop = false }: { icon: number; title: string; subtitle?: string; onPress: () => void; desktop?: boolean }) {
  return <Pressable onPress={onPress} style={({ pressed }) => [desktop ? styles.desktopTile : styles.tile, pressed && styles.pressed]} accessibilityRole="button" accessibilityLabel={title}>
    <Image source={icon} style={[styles.tileIcon, desktop && styles.desktopTileIcon]} resizeMode="contain" />
    <View style={[styles.tileCopy, desktop && styles.desktopTileCopy]}><Text style={styles.tileTitle}>{title}</Text>{subtitle ? <Text style={styles.tileSubtitle}>{subtitle}</Text> : null}</View>
    <Text style={[styles.tileArrow, desktop && styles.desktopTileArrow]}>›</Text>
  </Pressable>;
}

function MysteryCard({ icon, style }: { icon: number; style: object }) {
  return <View style={[styles.mysteryCard, style]}><Image source={icon} style={styles.mysteryIcon} resizeMode="contain" /></View>;
}

export default function HomeVisual() {
  const { width, height } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const wide = width >= 1200;
  const tablet = width >= 600;
  const compact = !tablet && height < 900;
  const shortPhone = !tablet && height < 820;
  const shellWidth = wide ? Math.min(width - 32, 1500) : tablet ? Math.min(width - 24, 1000) : width;
  const shellHeight = wide ? Math.min(height - 28, 900) : tablet ? Math.min(height - 18, 1000) : height;

  return <View style={styles.root}>
    <View style={[styles.shell, { width: shellWidth, height: shellHeight }, !wide && !tablet && styles.mobileShell]}>
      <ImageBackground source={scenic} resizeMode="cover" style={styles.background} imageStyle={styles.backgroundImage}>
        <View pointerEvents="none" style={styles.tone} />
        <View style={[styles.content, !wide && styles.mobileContent, shortPhone && styles.shortPhoneContent, !wide && { paddingBottom: Math.max(18, insets.bottom + (Platform.OS === 'android' ? 12 : 8)) }]}>
          {!wide && <View style={[styles.statusBar, { height: Math.max(18, insets.top) }]} />}

          {wide ? <View style={styles.desktopBody}>
            <View style={styles.desktopHero}>
              <Image source={logo} resizeMode="contain" style={styles.desktopLogo} />
              <Text style={styles.desktopTagline}>Ensemble, découvrons la Bible !</Text>
              <View style={styles.heroArtWide}>
                <MysteryCard icon={iconQuestion} style={styles.cardLeftWide} />
                <MysteryCard icon={iconCenterWide} style={styles.cardCenterWide} />
                <MysteryCard icon={iconBolt} style={styles.cardRightWide} />
                <View style={styles.bookGlowWide} />
                <Image source={iconBible} resizeMode="contain" style={styles.bookImageWide} />
              </View>
              <View style={styles.heroPill}><Text style={styles.heroPillText}>UN JEU BIBLIQUE • EN ÉQUIPE</Text></View>
            </View>
            <View style={styles.desktopPanel}>
              <View style={styles.desktopPanelIntro}>
                <Text style={styles.kicker}>PRÊT À JOUER ?</Text>
                <Text style={styles.desktopTitle}>Votre prochaine aventure commence ici.</Text>
                <Text style={styles.desktopSub}>Choisissez vos équipes, lancez les défis et laissez le maître de jeu rythmer la soirée.</Text>
              </View>
              <View style={styles.desktopActions}>
                <Pressable onPress={() => router.push('/setup')} style={({ pressed }) => [styles.desktopAction, styles.desktopActionPrimary, pressed && styles.pressed]}>
                  <View style={[styles.desktopActionIcon, styles.desktopActionIconPrimary]}><Image source={iconGamepad} style={styles.desktopActionAsset} resizeMode="contain" /></View>
                  <View style={styles.desktopActionCopy}><Text style={[styles.desktopActionTitle, styles.desktopActionTitlePrimary]}>JOUER</Text><Text style={[styles.desktopActionSubtitle, styles.desktopActionSubtitlePrimary]}>Lancer une nouvelle partie</Text></View><Text style={[styles.desktopActionArrow, styles.desktopActionArrowPrimary]}>›</Text>
                </Pressable>
                <Pressable onPress={() => router.push('/game?modes=challenge&duration=2&teams=Équipe%20A|Équipe%20B')} style={({ pressed }) => [styles.desktopAction, styles.desktopActionQuick, pressed && styles.pressed]}>
                  <View style={styles.desktopActionIcon}><Image source={iconBolt} style={styles.desktopActionAsset} resizeMode="contain" /></View>
                  <View style={styles.desktopActionCopy}><Text style={styles.desktopActionTitle}>Défi express</Text><Text style={styles.desktopActionSubtitle}>Une manche • 2 minutes</Text></View><Text style={styles.desktopActionArrow}>›</Text>
                </Pressable>
                <Pressable onPress={() => router.push('/training')} style={({ pressed }) => [styles.desktopAction, pressed && styles.pressed]}>
                  <View style={styles.desktopActionIcon}><Image source={iconTraining} style={styles.desktopActionAsset} resizeMode="contain" /></View>
                  <View style={styles.desktopActionCopy}><Text style={styles.desktopActionTitle}>Entraînement</Text><Text style={styles.desktopActionSubtitle}>S'échauffer</Text></View><Text style={styles.desktopActionArrow}>›</Text>
                </Pressable>
                <Pressable onPress={() => router.push('/scores')} style={({ pressed }) => [styles.desktopAction, pressed && styles.pressed]}>
                  <View style={styles.desktopActionIcon}><Image source={iconTrophy} style={styles.desktopActionAsset} resizeMode="contain" /></View>
                  <View style={styles.desktopActionCopy}><Text style={styles.desktopActionTitle}>Scores</Text><Text style={styles.desktopActionSubtitle}>Vos records</Text></View><Text style={styles.desktopActionArrow}>›</Text>
                </Pressable>
                <Pressable onPress={() => router.push('/setup')} style={({ pressed }) => [styles.desktopAction, pressed && styles.pressed]}>
                  <View style={styles.desktopActionIcon}><Image source={iconTeam} style={styles.desktopActionAsset} resizeMode="contain" /></View>
                  <View style={styles.desktopActionCopy}><Text style={styles.desktopActionTitle}>Équipes</Text><Text style={styles.desktopActionSubtitle}>Gérer les noms</Text></View><Text style={styles.desktopActionArrow}>›</Text>
                </Pressable>\n                <Pressable onPress={() => router.push('/characters')} style={({ pressed }) => [styles.desktopAction, pressed && styles.pressed]}>\n                  <View style={styles.desktopActionIcon}><Image source={iconBible} style={styles.desktopActionAsset} resizeMode="contain" /></View>\n                  <View style={styles.desktopActionCopy}><Text style={styles.desktopActionTitle}>Personnages</Text><Text style={styles.desktopActionSubtitle}>Apprendre et réviser</Text></View><Text style={styles.desktopActionArrow}>›</Text>\n                </Pressable>
              </View>
            </View>
          </View> : <>
            <View style={[styles.brand, compact && styles.brandCompact, shortPhone && styles.brandShort]}><Image source={logo} resizeMode="contain" style={[styles.logo, compact && styles.logoCompact, shortPhone && styles.logoShort]} /><Text style={[styles.tagline, compact && styles.taglineCompact]}>Ensemble, découvrons{'\n'}la Bible</Text></View>
            <View style={[styles.heroArt, compact && styles.heroArtCompact, shortPhone && styles.heroArtShort]}>
              <MysteryCard icon={iconQuestion} style={styles.cardLeft} /><MysteryCard icon={iconStar} style={styles.cardCenter} /><MysteryCard icon={iconBolt} style={styles.cardRight} />
              <View style={styles.bookGlow} /><Image source={iconBible} resizeMode="contain" style={styles.bookImage} />
            </View>
            <Pressable onPress={() => router.push('/setup')} style={({ pressed }) => [styles.play, compact && styles.playCompact, shortPhone && styles.playShort, pressed && styles.pressed]}><View style={[styles.playIcon, compact && styles.playIconCompact]}><Image source={iconGamepad} style={[styles.playAsset, compact && styles.playAssetCompact]} resizeMode="contain" /></View><View style={styles.playCopy}><Text style={[styles.playTitle, compact && styles.playTitleCompact]}>JOUER</Text><Text style={[styles.playSubtitle, compact && styles.playSubtitleCompact]}>Lancer une nouvelle partie</Text></View><Text style={styles.arrow}>›</Text></Pressable>
            <Pressable onPress={() => router.push('/game?modes=challenge&duration=2&teams=Équipe%20A|Équipe%20B')} style={({ pressed }) => [styles.quick, compact && styles.quickCompact, shortPhone && styles.quickShort, pressed && styles.pressed]}><View style={[styles.quickIcon, compact && styles.quickIconCompact]}><Image source={iconBolt} style={[styles.quickAsset, compact && styles.quickAssetCompact]} /></View><View style={styles.quickCopy}><Text style={styles.quickTitle}>Défi rapide</Text><Text style={styles.quickSubtitle}>Une manche · 2 minutes</Text></View><Text style={styles.quickArrow}>›</Text></Pressable>
            <View style={[styles.tiles, compact && styles.tilesCompact, shortPhone && styles.tilesShort]}><GlassTile icon={iconTraining} title="Entraînement" onPress={() => router.push('/training')} /><GlassTile icon={iconTrophy} title="Scores" onPress={() => router.push('/scores')} /><GlassTile icon={iconBible} title="Personnages" onPress={() => router.push('/characters')} /></View>
          </>}

          <View style={[styles.nav, compact && styles.navCompact, shortPhone && styles.navShort, wide && styles.navWide]}>
            <NavItem icon={iconHome} label="Accueil" active onPress={() => router.replace('/')} /><NavItem icon={iconGamepad} label="Jouer" onPress={() => router.replace('/setup')} /><NavItem icon={iconTrophy} label="Scores" onPress={() => router.replace('/scores')} /><NavItem icon={iconTeam} label="Équipes" onPress={() => router.replace('/setup')} /><NavItem icon={iconSettings} label="Paramètres" onPress={() => router.replace('/settings')} />
          </View>
        </View>
      </ImageBackground>
    </View>
  </View>;
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#041C24', alignItems: 'center', justifyContent: 'center' },
  shell: { overflow: 'hidden', borderRadius: 30, borderWidth: 1.5, borderColor: 'rgba(210,246,255,.72)', backgroundColor: '#06343B', shadowColor: '#000', shadowOpacity: .35, shadowRadius: 30 },
  mobileShell: { borderRadius: 0, borderWidth: 0 },
  background: { flex: 1, width: '100%', height: '100%' }, backgroundImage: { width: '100%', height: '100%' },
  tone: { ...StyleSheet.absoluteFill, backgroundColor: 'rgba(0,24,31,.10)' },
  brand: { alignItems: 'center', justifyContent: 'center', marginTop: 4 },
  logo: { width: 236, height: 136, alignSelf: 'center' },
  tagline: { color: '#FFECA1', fontSize: 16, lineHeight: 20, fontWeight: '800', fontStyle: 'italic', textAlign: 'center', textShadowColor: '#17352B', textShadowRadius: 5, marginTop: -1 },
  content: { flex: 1, paddingHorizontal: 12, paddingTop: 4, paddingBottom: 8 },
  mobileContent: { justifyContent: 'space-between' },
  shortPhoneContent: { paddingHorizontal: 10, paddingTop: 2 },
  statusBar: { height: 23 },
  desktopBody: { flex: 1, width: '100%', maxWidth: 1440, alignSelf: 'center', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 48, paddingHorizontal: 54, paddingTop: 34, paddingBottom: 24 },
  desktopHero: { flex: 1, maxWidth: 650, alignItems: 'center', justifyContent: 'center', minWidth: 0, paddingHorizontal: 18 },
  desktopPanel: { flex: 1, maxWidth: 610, minWidth: 500, alignSelf: 'center', justifyContent: 'center', paddingHorizontal: 30, paddingVertical: 26, borderRadius: 32, borderWidth: 1, borderColor: 'rgba(139,228,243,.46)', backgroundColor: 'rgba(2,34,43,.58)', shadowColor: '#00151C', shadowOpacity: .35, shadowRadius: 24 },
  desktopPanelIntro: { width: '100%', maxWidth: 530, alignSelf: 'center', marginBottom: 18 },
  desktopLogo: { width: 320, height: 190, alignSelf: 'center' },
  desktopTagline: { color: '#FFECA1', fontSize: 18, fontWeight: '800', fontStyle: 'italic', textAlign: 'center', textShadowColor: '#17352B', textShadowRadius: 5 },
  heroArtWide: { height: 270, width: 500, marginTop: 18, alignSelf: 'center', alignItems: 'center', justifyContent: 'flex-end', position: 'relative' },
  bookImageWide: { width: 290, height: 180, alignSelf: 'center', marginBottom: -8 },
  bookGlowWide: { position: 'absolute', width: 380, height: 105, bottom: 2, alignSelf: 'center', borderRadius: 190, backgroundColor: 'rgba(255,220,69,.13)', shadowColor: '#FFE36B', shadowOpacity: .8, shadowRadius: 30 },
  cardLeftWide: { left: 76, bottom: 104, transform: [{ rotate: '-11deg' }] },
  cardCenterWide: { left: 222, bottom: 121, transform: [{ rotate: '1deg' }] },
  cardRightWide: { right: 76, bottom: 104, transform: [{ rotate: '11deg' }] },
  kicker: { color: '#FFE58A', fontSize: 11, fontWeight: '900', letterSpacing: 2 },
  desktopTitle: { color: '#FFFDF5', fontSize: 32, lineHeight: 37, fontWeight: '900', marginTop: 8 },
  desktopSub: { color: '#DDEEEA', fontSize: 14, lineHeight: 21, marginTop: 10 },
  heroPill: { paddingHorizontal: 16, paddingVertical: 8, borderRadius: 18, backgroundColor: 'rgba(2,35,44,.68)', borderWidth: 1, borderColor: 'rgba(242,201,76,.42)' },
  heroPillText: { color: '#FFE58A', fontSize: 10, fontWeight: '900', letterSpacing: 1.5 },
  desktopActions: { width: '100%', maxWidth: 530, alignSelf: 'center', gap: 10 },
  desktopAction: { minHeight: 64, borderRadius: 20, borderWidth: 1, borderColor: 'rgba(113,222,240,.58)', backgroundColor: 'rgba(3,52,61,.78)', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, shadowColor: '#001A20', shadowOpacity: .30, shadowRadius: 13 },
  desktopActionPrimary: { minHeight: 72, borderRadius: 22, backgroundColor: '#F9C72D', borderColor: '#FFE993', shadowColor: '#FFD73D', shadowOpacity: .68, shadowRadius: 18 },
  desktopActionQuick: { backgroundColor: 'rgba(3,52,61,.86)', borderColor: 'rgba(113,222,240,.82)' },
  desktopActionIcon: { width: 42, height: 42, borderRadius: 15, backgroundColor: 'rgba(3,30,37,.72)', alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  desktopActionIconPrimary: { backgroundColor: 'rgba(12,61,57,.16)' },
  desktopActionAsset: { width: 32, height: 32 },
  desktopActionCopy: { flex: 1, marginLeft: 13, minWidth: 0 },
  desktopActionTitle: { color: '#FFFDF4', fontSize: 16, lineHeight: 20, fontWeight: '900' },
  desktopActionTitlePrimary: { color: '#0B3B37' },
  desktopActionSubtitle: { color: '#DCEEE9', fontSize: 10.5, lineHeight: 15, fontWeight: '700', marginTop: 2 },
  desktopActionSubtitlePrimary: { color: '#173D39' },
  desktopActionArrow: { color: '#FFE58A', fontSize: 34, lineHeight: 34, width: 28, textAlign: 'center', marginLeft: 6 },
  desktopActionArrowPrimary: { color: '#0B3B37' },
  desktopTiles: { gap: 9, marginTop: 14 },
  heroArt: { height: 128, marginTop: -1, alignItems: 'center', justifyContent: 'flex-end', position: 'relative' }, mysteryCard: { position: 'absolute', width: 61, height: 84, borderRadius: 10, backgroundColor: 'rgba(5,34,39,.82)', borderWidth: 2, borderColor: '#E9C343', alignItems: 'center', justifyContent: 'center', shadowColor: '#FFD947', shadowOpacity: .55, shadowRadius: 10 }, mysteryIcon: { width: 43, height: 43 }, cardLeft: { left: '29%', bottom: 52, transform: [{ rotate: '-11deg' }] }, cardCenter: { left: '41%', bottom: 61, transform: [{ rotate: '1deg' }] }, cardRight: { left: '53%', bottom: 52, transform: [{ rotate: '11deg' }] }, bookGlow: { position: 'absolute', width: 245, height: 68, bottom: 0, borderRadius: 130, backgroundColor: 'rgba(255,220,69,.14)', shadowColor: '#FFE36B', shadowOpacity: .8, shadowRadius: 28 }, bookImage: { width: 176, height: 103, marginBottom: -5 },
  play: { height: 70, borderRadius: 36, backgroundColor: '#F9C72D', borderWidth: 1, borderColor: '#FFE993', shadowColor: '#FFD73D', shadowOpacity: .68, shadowRadius: 16, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 13 }, playIcon: { width: 47, height: 47, borderRadius: 18, backgroundColor: 'rgba(12,61,57,.16)', alignItems: 'center', justifyContent: 'center' }, playAsset: { width: 34, height: 34 }, playCopy: { flex: 1, marginLeft: 12 }, playTitle: { color: '#0B3B37', fontSize: 22, lineHeight: 25, fontWeight: '900' }, playSubtitle: { color: '#173D39', fontSize: 11, fontWeight: '800' }, arrow: { color: '#0B3B37', fontSize: 39, lineHeight: 39, marginRight: 2 },
  quick: { height: 58, marginTop: 9, borderRadius: 30, backgroundColor: 'rgba(3,52,61,.78)', borderWidth: 1, borderColor: 'rgba(113,222,240,.82)', shadowColor: '#001A20', shadowOpacity: .35, shadowRadius: 13, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 9 }, quickIcon: { width: 43, height: 43, borderRadius: 17, backgroundColor: 'rgba(3,30,37,.76)', alignItems: 'center', justifyContent: 'center' }, quickAsset: { width: 35, height: 35 }, quickCopy: { flex: 1, marginLeft: 12 }, quickTitle: { color: '#FFFDF4', fontSize: 15, fontWeight: '900' }, quickSubtitle: { color: '#E0F1EC', fontSize: 10.5, marginTop: 1 }, quickArrow: { color: '#FFFDF4', fontSize: 35, lineHeight: 35, marginRight: 5 },
  tiles: { flexDirection: 'row', gap: 9, marginTop: 9 },
  tilesShort: { marginTop: 5 }, tile: { minHeight: 78, flex: 1, borderRadius: 18, backgroundColor: 'rgba(3,42,50,.72)', borderWidth: 1, borderColor: 'rgba(115,218,237,.76)', shadowColor: '#001A20', shadowOpacity: .32, shadowRadius: 11, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 9 },
  desktopTile: { minHeight: 62, borderRadius: 22, backgroundColor: 'rgba(3,52,61,.78)', borderWidth: 1, borderColor: 'rgba(113,222,240,.58)', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 13, shadowColor: '#001A20', shadowOpacity: .30, shadowRadius: 13 }, tileIcon: { width: 31, height: 31 }, tileCopy: { alignItems: 'center', marginTop: 2 },
  desktopTileIcon: { width: 40, height: 40 }, tileTitle: { color: '#FFFDF4', fontSize: 10.5, fontWeight: '800', textAlign: 'center' }, tileSubtitle: { color: 'rgba(224,241,236,.72)', fontSize: 8.5, marginTop: 2 }, tileArrow: { display: 'none', color: '#FFE58A', fontSize: 22 },
  desktopTileCopy: { flex: 1, alignItems: 'flex-start', marginLeft: 12, marginTop: 0 },
  desktopTileArrow: { display: 'flex', color: '#FFE58A', fontSize: 32, lineHeight: 32, marginLeft: 8 },
  brandCompact: { marginTop: 0 }, logoCompact: { width: 220, height: 127 },
  brandShort: { marginTop: -1 }, logoShort: { width: 204, height: 118 }, taglineCompact: { fontSize: 14, lineHeight: 18 }, heroArtCompact: { height: 106, marginTop: 0 }, heroArtShort: { height: 94, marginTop: -1 }, playCompact: { height: 60, borderRadius: 30 }, playShort: { height: 58, borderRadius: 29 }, playIconCompact: { width: 42, height: 42, borderRadius: 16 }, playAssetCompact: { width: 30, height: 30 }, playTitleCompact: { fontSize: 20, lineHeight: 23 }, playSubtitleCompact: { fontSize: 10 }, quickCompact: { height: 50, marginTop: 7 }, quickShort: { height: 49, marginTop: 5 }, quickIconCompact: { width: 39, height: 39, borderRadius: 15 }, quickAssetCompact: { width: 31, height: 31 }, tilesCompact: { marginTop: 7 }, navCompact: { minHeight: 58, borderRadius: 19, marginBottom: 4 }, navShort: { minHeight: 56, borderRadius: 18, marginBottom: 2 },
  flexSpace: { flex: 1, minHeight: 5 }, nav: { minHeight: 64, borderRadius: 22, borderWidth: 1, borderColor: 'rgba(120,220,238,.72)', backgroundColor: 'rgba(2,29,38,.91)', flexDirection: 'row', alignItems: 'stretch', paddingHorizontal: 2, shadowColor: '#00141B', shadowOpacity: .45, shadowRadius: 16 }, navWide: { alignSelf: 'center', width: '100%', maxWidth: 760 }, navItem: { flex: 1, minHeight: 55, borderRadius: 17, alignItems: 'center', justifyContent: 'center' }, navItemActive: { backgroundColor: 'rgba(242,201,76,.08)' }, navIcon: { width: 25, height: 25 }, navLabel: { color: '#F4FAF7', fontSize: 8.5, fontWeight: '800', marginTop: 2 }, activeText: { color: '#FFE05A' }, pressed: { opacity: .82, transform: [{ scale: .985 }] },
});
