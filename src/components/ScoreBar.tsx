import React from 'react';
import { Text, View } from 'react-native';
import { colors } from '@/theme/colors';
import { Team } from '@/types';

export function ScoreBar({ teams, activeTeam }: { teams: Team[]; activeTeam: number }) {
  return (
    <View style={{ flexDirection: 'row', gap: 6, marginBottom: 12, flexWrap: 'wrap' }} accessibilityLabel="Scores des équipes">
      {teams.map((team, i) => (
        <View key={team.id} style={{
          flexGrow: 1, flexBasis: 0, minWidth: 74, backgroundColor: i === activeTeam ? colors.surface3 : colors.surface,
          borderColor: i === activeTeam ? colors.accent : colors.border, borderWidth: 1, borderRadius: 12, paddingHorizontal: 9, paddingVertical: 7
        }}>
          <Text numberOfLines={1} style={{ color: i === activeTeam ? colors.accent : colors.muted, fontSize: 9, fontWeight: '900' }}>{i === activeTeam ? '▶ ' : ''}{team.name}</Text>
          <Text style={{ color: colors.text, fontSize: 17, fontWeight: '900', marginTop: 1 }}>{team.score} <Text style={{ color: colors.muted, fontSize: 9 }}>PTS</Text></Text>
        </View>
      ))}
    </View>
  );
}
