import React, { PropsWithChildren } from 'react';
import { Pressable, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { colors } from '@/theme/colors';

export function GlassCard({children, style, strong=false}: PropsWithChildren<{style?:ViewStyle|ViewStyle[]; strong?:boolean}>) {
  return <View style={[ui.card, strong && ui.cardStrong, style]}>{children}</View>;
}
export function GoldButton({title,onPress,disabled=false,secondary=false,style}:{title:string;onPress:()=>void;disabled?:boolean;secondary?:boolean;style?:ViewStyle}) {
  return <Pressable onPress={onPress} disabled={disabled} style={({pressed})=>[secondary?ui.secondary:ui.primary, pressed&&{transform:[{scale:.985}]}, disabled&&{opacity:.45}, style]}>
    <Text style={secondary?ui.secondaryText:ui.primaryText}>{title}</Text><Text style={secondary?ui.secondaryArrow:ui.primaryArrow}>›</Text>
  </Pressable>;
}
export function SectionTitle({title,subtitle}:{title:string;subtitle?:string}) {
  return <View style={{marginBottom:16}}><Text style={ui.kicker}>{title.toUpperCase()}</Text>{subtitle&&<Text style={ui.subtitle}>{subtitle}</Text>}</View>;
}
export function GameHeader({round,total,mode,team,score}:{round:number;total:number;mode:string;team:string;score:number}) {
  return <View style={ui.gameHeader}>
    <View><Text style={ui.kicker}>MANCHE {round} / {total}</Text><Text style={ui.gameMode}>{mode}</Text><Text style={ui.teamLine}>{team} · {score} PTS</Text></View>
    <View style={ui.roundBadge}><Text style={ui.roundBadgeTop}>MANCHE</Text><Text style={ui.roundBadgeNum}>{round}</Text></View>
  </View>;
}
export function ProgressDots({current,total}:{current:number;total:number}) {
  return <View style={ui.dots}>{Array.from({length:Math.min(total,12)}).map((_,i)=><View key={i} style={[ui.dot,i<current&&ui.dotDone,i===current-1&&ui.dotCurrent]}/>)}</View>;
}
export function ScoreStrip({teams,active}:{teams:{name:string;score:number}[];active:number}) {
 return <View style={ui.scoreStrip}>{teams.map((t,i)=><View key={t.name+i} style={[ui.scoreTeam,i===active&&ui.scoreTeamActive]}><View style={[ui.scoreMark,i===active&&ui.scoreMarkActive]}><Text style={ui.scoreMarkText}>{i+1}</Text></View><Text numberOfLines={1} style={ui.scoreName}>{t.name}</Text><Text style={ui.scoreValue}>{t.score}</Text></View>)}</View>;
}
export const ui=StyleSheet.create({
 card:{borderRadius:26,borderWidth:1,borderColor:'rgba(121,213,232,.52)',backgroundColor:'rgba(4,40,48,.60)',padding:18,shadowColor:'#00151B',shadowOpacity:.28,shadowRadius:22},
 cardStrong:{backgroundColor:'rgba(3,30,38,.78)',borderColor:'rgba(242,201,76,.45)'},
 primary:{minHeight:62,borderRadius:22,backgroundColor:'#F2C94C',borderWidth:1,borderColor:'#FFEAA0',alignItems:'center',justifyContent:'center',paddingHorizontal:24,position:'relative',shadowColor:'#F2C94C',shadowOpacity:.36,shadowRadius:18},
 primaryText:{color:'#123D36',fontSize:18,fontWeight:'900',letterSpacing:.1},
 primaryArrow:{position:'absolute',right:20,color:'#123D36',fontSize:30,fontWeight:'400'},
 secondary:{minHeight:56,borderRadius:20,backgroundColor:'rgba(5,39,47,.66)',borderWidth:1,borderColor:'rgba(121,213,232,.55)',alignItems:'center',justifyContent:'center',paddingHorizontal:22,position:'relative'},
 secondaryText:{color:'#F7FBF8',fontSize:15,fontWeight:'900'}, secondaryArrow:{position:'absolute',right:18,color:'#FFE58A',fontSize:28},
 kicker:{color:'#FFE58A',fontSize:10,fontWeight:'900',letterSpacing:1.8}, subtitle:{color:'#E7F3EF',fontSize:14,lineHeight:20,marginTop:5},
 gameHeader:{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:4,marginBottom:10},gameMode:{color:'#FFFDF5',fontSize:27,fontWeight:'900',marginTop:4},teamLine:{color:'#FFE58A',fontSize:11,fontWeight:'800',marginTop:3},
 roundBadge:{width:62,height:62,borderRadius:20,borderWidth:1,borderColor:'rgba(242,201,76,.58)',backgroundColor:'rgba(3,29,36,.68)',alignItems:'center',justifyContent:'center'},roundBadgeTop:{color:'#B8D7D1',fontSize:7,fontWeight:'900',letterSpacing:1},roundBadgeNum:{color:'#FFE58A',fontSize:25,fontWeight:'900',marginTop:-1},
 dots:{flexDirection:'row',gap:5,marginBottom:14},dot:{width:8,height:4,borderRadius:4,backgroundColor:'rgba(255,255,255,.25)'},dotDone:{backgroundColor:'rgba(242,201,76,.55)'},dotCurrent:{width:22,backgroundColor:'#F2C94C'},
 scoreStrip:{flexDirection:'row',gap:7,marginBottom:14},scoreTeam:{flex:1,minHeight:45,borderRadius:16,borderWidth:1,borderColor:'rgba(121,213,232,.32)',backgroundColor:'rgba(3,31,38,.55)',flexDirection:'row',alignItems:'center',paddingHorizontal:7},scoreTeamActive:{borderColor:'rgba(242,201,76,.75)',backgroundColor:'rgba(48,46,26,.62)'},scoreMark:{width:28,height:28,borderRadius:10,backgroundColor:'rgba(255,255,255,.08)',alignItems:'center',justifyContent:'center',marginRight:6},scoreMarkActive:{backgroundColor:'#F2C94C'},scoreMarkText:{color:'#DCEBE6',fontSize:10,fontWeight:'900'},scoreName:{color:'#EFF8F4',fontSize:9,fontWeight:'800',flex:1},scoreValue:{color:'#FFE58A',fontSize:13,fontWeight:'900',marginLeft:4}
});
