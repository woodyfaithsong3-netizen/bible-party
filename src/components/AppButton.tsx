import React from 'react';
import { Pressable, StyleProp, Text, ViewStyle } from 'react-native';
import { colors } from '@/theme/colors';
import { styles } from '@/theme/styles';

export function AppButton({
  title, onPress, variant = 'primary', style, disabled = false
}: {
  title: string; onPress: () => void; variant?: 'primary' | 'secondary';
  style?: StyleProp<ViewStyle>; disabled?: boolean;
}) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.button,
        variant === 'primary' ? styles.buttonPrimary : styles.buttonSecondary,
        style,
        pressed && !disabled && { opacity: 0.84, transform: [{ scale: 0.985 }] },
        disabled && { opacity: 0.38 },
      ]}
      accessibilityRole="button"
      accessibilityState={{ disabled }}
    >
      <Text style={variant === 'primary' ? styles.buttonText : styles.buttonTextSecondary}>{title}</Text>
    </Pressable>
  );
}
