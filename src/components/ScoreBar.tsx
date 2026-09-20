import React from 'react';
import { Text, View } from 'react-native';
import { colors } from '@/theme/colors';
import { Team } from '@/types';

export function ScoreBar({ teams, activeTeam }: { teams: Team[]; activeTeam: number }) {
  return (
    <View style={{ flexDirection: 'row', gap: 6, marginBottom: 12, flexWrap: 'wrap' }} accessibilityLabel="Scores des équipes">
      {teams.map((team, i) => (
        <View key={team.id} style={{
          flexGrow: 1, flexBasis: 0, minWidth: 74, backgroundColor: i === activeTeam ? 'rgba(242,201,76,.18)' : 'rgba(4,43,51,.58)',
          borderColor: i === activeTeam ? colors.accent : colors.border, borderWidth: 1, borderRadius: 16, paddingHorizontal: 11, paddingVertical: 9
        }}>
          <Text numberOfLines={1} style={{ color: i === activeTeam ? colors.accent : colors.muted, fontSize: 9, fontWeight: '900' }}>{i === activeTeam ? '▶ ' : ''}{team.name}</Text>
          <Text style={{ color: colors.text, fontSize: 17, fontWeight: '900', marginTop: 1 }}>{team.score} <Text style={{ color: colors.muted, fontSize: 9 }}>PTS</Text></Text>
        </View>
      ))}
    </View>
  );
}
