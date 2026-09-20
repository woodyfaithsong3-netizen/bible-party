import React from 'react';
import { View } from 'react-native';
import { colors } from '@/theme/colors';

/**
 * Élément décoratif discret évoquant une colonnade en ruine — la signature visuelle
 * du thème « Ruines dorées ». Volontairement sobre (aucune image, aucune dépendance) :
 * une rangée de fines colonnes de hauteurs inégales, posées sur un stylobate (ligne de base).
 * À utiliser avec parcimonie (un seul emplacement par écran, jamais en répétition).
 */
const HEIGHTS = [14, 22, 12, 26, 16, 22, 11];

export function ColumnMotif({ style }: { style?: object }) {
  return (
    <View style={[{ alignItems: 'center' }, style]} accessibilityElementsHidden importantForAccessibility="no">
      <View style={{ flexDirection: 'row', alignItems: 'flex-end', gap: 7, height: 26 }}>
        {HEIGHTS.map((h, i) => (
          <View key={i} style={{ width: 3, height: h, backgroundColor: colors.stone, borderRadius: 1 }} />
        ))}
      </View>
      <View style={{ width: 96, height: 2, backgroundColor: colors.stone, borderRadius: 1, marginTop: 5 }} />
    </View>
  );
}
