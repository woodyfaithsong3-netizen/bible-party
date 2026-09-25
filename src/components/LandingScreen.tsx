import React from 'react';
import { Image, ImageBackground, Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';

const scenic = require('../../assets/images/backgrounds/home-valley-exact-source.png');
const logo = require('../../assets/images/ui/logo.png');
const gamepad = require('../../assets/images/ui/gamepad.png');
const crown = require('../../assets/images/ui/crown.png');
const bible = require('../../assets/images/ui/bible.png');
const APK_PAGE = 'https://expo.dev/accounts/woodysong/projects/bible-party/builds/a52fa5c2-2b89-4b45-95f6-a45167ab4e58';

export default function LandingScreen() {
  return <View style={styles.root}><ImageBackground source={scenic} resizeMode="cover" style={styles.background}><View style={styles.tone}/><View style={styles.content}>
    <Image source={logo} resizeMode="contain" style={styles.logo}/><Text style={styles.tagline}>Ensemble, découvrons la Bible</Text><Text style={styles.intro}>Découvre la Bible, joue et construis ta collection.</Text>
    <View style={styles.actions}>
      <Pressable onPress={()=>router.push('/adventure')} style={({pressed})=>[styles.action,styles.primary,pressed&&styles.pressed]} accessibilityRole="button" accessibilityLabel="Aventure"><View style={styles.iconBoxPrimary}><Text style={styles.adventureEmoji}>🗺️</Text></View><View style={styles.copy}><Text style={styles.primaryTitle}>AVENTURE</Text><Text style={styles.primarySub}>Découvrir la Bible épisode par épisode</Text></View><Text style={styles.arrowDark}>›</Text></Pressable>
      <Pressable onPress={()=>router.push('/setup')} style={({pressed})=>[styles.action,styles.secondary,pressed&&styles.pressed]} accessibilityRole="button" accessibilityLabel="Jouer"><View style={styles.iconBox}><Image source={gamepad} resizeMode="contain" style={styles.icon}/></View><View style={styles.copy}><Text style={styles.secondaryTitle}>JOUER</Text><Text style={styles.secondarySub}>Lancer une nouvelle partie</Text></View><Text style={styles.arrowLight}>›</Text></Pressable>
      <Pressable onPress={()=>router.push('/bible')} style={({pressed})=>[styles.action,styles.secondary,pressed&&styles.pressed]} accessibilityRole="button" accessibilityLabel="Ma Bible"><View style={styles.iconBox}><Image source={bible} resizeMode="contain" style={styles.icon}/></View><View style={styles.copy}><Text style={styles.secondaryTitle}>Ma Bible</Text><Text style={styles.secondarySub}>Ta collection et ta progression</Text></View><Text style={styles.arrowLight}>›</Text></Pressable>
    </View>
  </View></ImageBackground></View>;
}
const styles=StyleSheet.create({
 root:{flex:1,backgroundColor:'#041C24'},background:{flex:1},tone:{...StyleSheet.absoluteFill,backgroundColor:'rgba(0,24,31,.22)'},
 content:{flex:1,alignItems:'center',justifyContent:'center',paddingHorizontal:20,paddingTop:24,paddingBottom:28},logo:{width:270,height:155},
 tagline:{color:'#FFECA1',fontSize:17,lineHeight:22,fontWeight:'800',fontStyle:'italic',textAlign:'center',textShadowColor:'#17352B',textShadowRadius:5,marginTop:-2},
 intro:{color:'#F5FBF8',fontSize:15,fontWeight:'700',textAlign:'center',marginTop:26,marginBottom:18},actions:{width:'100%',maxWidth:560,gap:12},
 action:{minHeight:78,borderRadius:24,borderWidth:1,flexDirection:'row',alignItems:'center',paddingHorizontal:13,shadowColor:'#001A20',shadowOpacity:.35,shadowRadius:16},
 primary:{backgroundColor:'rgba(249,199,45,.92)',borderColor:'#FFE993'},secondary:{backgroundColor:'rgba(3,52,61,.88)',borderColor:'rgba(113,222,240,.82)'},
 iconBoxPrimary:{width:50,height:50,borderRadius:18,backgroundColor:'rgba(12,61,57,.16)',alignItems:'center',justifyContent:'center'},iconBox:{width:50,height:50,borderRadius:18,backgroundColor:'rgba(3,30,37,.76)',alignItems:'center',justifyContent:'center'},icon:{width:34,height:34},adventureEmoji:{fontSize:28},
 copy:{flex:1,marginLeft:13,minWidth:0},primaryTitle:{color:'#0B3B37',fontSize:18,fontWeight:'900'},primarySub:{color:'#173D39',fontSize:11,fontWeight:'700',marginTop:3},
 secondaryTitle:{color:'#FFFDF4',fontSize:15,fontWeight:'900'},secondarySub:{color:'#DCEEE9',fontSize:11,fontWeight:'700',marginTop:3},
 arrowDark:{color:'#0B3B37',fontSize:39,lineHeight:39,marginRight:3},arrowLight:{color:'#FFE58A',fontSize:39,lineHeight:39,marginRight:3},pressed:{opacity:.82,transform:[{scale:.985}]}
});