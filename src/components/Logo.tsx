import React from 'react';
import { Text, View } from 'react-native';
import { colors } from '@/theme/colors';

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <View>
      <Text style={{ color: colors.accent, fontSize: 10, fontWeight: '900', letterSpacing: 3.5 }}>BIBLE</Text>
      <Text style={{ color: colors.text, fontSize: compact ? 27 : 35, lineHeight: compact ? 28 : 35, fontWeight: '900', letterSpacing: -1.5 }}>PARTY</Text>
    </View>
  );
}
