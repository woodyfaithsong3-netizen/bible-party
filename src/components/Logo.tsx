import React from 'react';
import { Text, View } from 'react-native';
import { colors } from '@/theme/colors';

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <View style={{ alignItems: 'flex-start' }}>
      <Text style={{ color: colors.accent, fontSize: compact ? 8 : 10, fontWeight: '900', letterSpacing: 2.8 }}>♛ BIBLE</Text>
      <Text style={{ color: colors.text, fontSize: compact ? 22 : 35, lineHeight: compact ? 23 : 35, fontWeight: '900', letterSpacing: -1.5 }}>PARTY</Text>
    </View>
  );
}
