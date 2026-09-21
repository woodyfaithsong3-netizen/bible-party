import React from 'react';
import { Platform } from 'react-native';
import { Redirect } from 'expo-router';
import LandingScreen from '@/components/LandingScreen';

export default function HomeScreen() {
  if (Platform.OS !== 'web') {
    return <Redirect href="/play" />;
  }

  return <LandingScreen />;
}
