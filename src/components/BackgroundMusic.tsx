import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import { useAudioPlayer } from 'expo-audio';
import { getSettings } from '@/lib/settings';

const source = require('../../assets/audio/bible-party-ambient.wav');

export default function BackgroundMusic() {
  const player = useAudioPlayer(source, { downloadFirst: true });

  useEffect(() => {
    let alive = true;
    const sync = async () => {
      const settings = await getSettings();
      if (!alive) return;
      player.loop = true;
      player.volume = settings.sounds ? 0.18 : 0;
      if (settings.sounds && Platform.OS !== 'web') player.play();
      if (!settings.sounds) player.pause();
    };
    void sync();
    return () => { alive = false; player.pause(); };
  }, [player]);

  useEffect(() => {
    let disposed = false;
    const playIfAllowed = async () => {
      const settings = await getSettings();
      if (disposed) return;
      player.volume = settings.sounds ? 0.18 : 0;
      if (settings.sounds && !player.playing) player.play();
    };

    if (Platform.OS !== 'web') return;

    const onFirstInteraction = () => {
      void playIfAllowed();
      window.removeEventListener('pointerdown', onFirstInteraction);
      window.removeEventListener('touchstart', onFirstInteraction);
      window.removeEventListener('keydown', onFirstInteraction);
    };

    window.addEventListener('pointerdown', onFirstInteraction, { once: true, passive: true });
    window.addEventListener('touchstart', onFirstInteraction, { once: true, passive: true });
    window.addEventListener('keydown', onFirstInteraction, { once: true });

    return () => {
      disposed = true;
      window.removeEventListener('pointerdown', onFirstInteraction);
      window.removeEventListener('touchstart', onFirstInteraction);
      window.removeEventListener('keydown', onFirstInteraction);
    };
  }, [player]);

  useEffect(() => {
    const id = setInterval(async () => {
      const settings = await getSettings();
      player.volume = settings.sounds ? 0.18 : 0;
      if (settings.sounds && !player.playing && Platform.OS !== 'web') player.play();
      if (!settings.sounds && player.playing) player.pause();
    }, 1500);
    return () => clearInterval(id);
  }, [player]);

  return null;
}
