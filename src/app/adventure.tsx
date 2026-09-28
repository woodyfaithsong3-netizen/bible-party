import React, { useCallback, useEffect, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { router, useFocusEffect, useLocalSearchParams } from 'expo-router';
import { ScenicScreen } from '@/components/ScenicScreen';
import { colors } from '@/theme/colors';
import { styles } from '@/theme/styles';
import { SEASON_1 } from '@/data/adventure';
import { SEASON_2 } from '@/data/adventureSeason2';
import { SEASON_3 } from '@/data/adventureSeason3';
import { SEASON_4 } from '@/data/adventureSeason4';
import { SEASON_5 } from '@/data/adventureSeason5';
import { SEASON_6 } from '@/data/adventureSeason6';
import { SEASON_7 } from '@/data/adventureSeason7';
import { SEASON_8 } from '@/data/adventureSeason8';
import { getAdventureProgress } from '@/lib/storage';
import { BIBLE_BOOKS } from '@/data/bibleBooks';
import { CHARACTER_ANNEXES } from '@/data/characterAnnexes';

const SEASONS = [SEASON_1, SEASON_2, SEASON_3, SEASON_4, SEASON_5, SEASON_6, SEASON_7, SEASON_8];

export default function AdventureScreen() {
  const params = useLocalSearchParams<{ season?: string }>();
  const [completed, setCompleted] = useState<string[]>([]);
  const [selectedSeason, setSelectedSeason] = useState(0);
  const [showSeasonIntro, setShowSeasonIntro] = useState(false);

  useEffect(() => {
    const requested = Number(params.season);
    if (!Number.isInteger(requested) || requested < 0 || requested >= SEASONS.length) return;
    if (requested === 0 || SEASONS[requested - 1].episodes.every(ep => completed.includes(ep.id))) {
      setSelectedSeason(requested);
      setShowSeasonIntro(true);
    }
  }, [params.season, completed]);

  useFocusEffect(useCallback(() => {
    void getAdventureProgress().then(setCompleted);
  }, []));

  const activeSeason = SEASONS[selectedSeason];
  const totalEpisodes = SEASONS.reduce((sum, season) => sum + season.episodes.length, 0);
  const totalCompletedCount = SEASONS.reduce((sum, season) => sum + season.episodes.filter(ep => completed.includes(ep.id)).length, 0);
  const totalProgress = totalEpisodes > 0 ? Math.round((totalCompletedCount / totalEpisodes) * 100) : 0;
  const activeCompletedCount = activeSeason.episodes.filter(ep => completed.includes(ep.id)).length;
  const progress = Math.round((activeCompletedCount / activeSeason.episodes.length) * 100);
  const seasonEpisodeNumbers = new Set(activeSeason.episodes.map(ep => ep.number));
  const seasonCharacterIds = [...new Set(activeSeason.episodes.flatMap(ep => ep.characterIds ?? []))];
  const seasonAnnexes = CHARACTER_ANNEXES.filter(annex =>
    annex.seasonNumber === activeSeason.number &&
    seasonEpisodeNumbers.has(annex.afterEpisode),
  );
  const seasonBooks = BIBLE_BOOKS.filter(book =>
    book.adventureEpisodes?.some(episodeNumber => seasonEpisodeNumbers.has(episodeNumber)),
  );
  const seasonBadge = selectedSeason === 0
    ? { title: 'Première saison', icon: '🏅' }
    : selectedSeason === 3
      ? { title: 'À mi-parcours', icon: '🧭' }
      : selectedSeason === 7
        ? { title: 'Aventure complète', icon: '🌟' }
        : null;

  const isSeasonUnlocked = (seasonIndex: number) => {
    if (seasonIndex === 0) return true;
    const previousSeason = SEASONS[seasonIndex - 1];
    return previousSeason.episodes.length > 0 && previousSeason.episodes.every(ep => completed.includes(ep.id));
  };

  const selectSeason = (seasonIndex: number) => {
    if (!isSeasonUnlocked(seasonIndex)) return;
    setSelectedSeason(seasonIndex);
    setShowSeasonIntro(true);
  };

  const startSeason = () => {
    if (!isSeasonUnlocked(selectedSeason)) return;
    const firstIncomplete = activeSeason.episodes.find(ep => !completed.includes(ep.id));
    const targetEpisode = firstIncomplete ?? activeSeason.episodes[0];
    if (!targetEpisode) return;
    router.replace({ pathname: '/adventure/episode', params: { id: targetEpisode.id } });
  };

  const seasonComplete = activeSeason.episodes.length > 0 && activeSeason.episodes.every(ep => completed.includes(ep.id));
  const canOpenEpisode = (episodeIndex: number) => {
    if (seasonComplete) return true;
    return episodeIndex === 0 || activeSeason.episodes.slice(0, episodeIndex).every(ep => completed.includes(ep.id));
  };

  if (showSeasonIntro) {
    return (
      <ScenicScreen>
        <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
          <Pressable onPress={() => setShowSeasonIntro(false)}>
            <Text style={{ color: colors.accent, fontWeight: '900' }}>‹ Saisons</Text>
          </Pressable>

          <View style={{ marginTop: 26, alignItems: 'center' }}>
            <Text style={{ fontSize: 46 }}>{['🌍','🌈','🏜️','👑','🏛️','🕊️','🔥','🌳'][selectedSeason]}</Text>
            <Text style={{ color: colors.accent, fontSize: 11, fontWeight: '900', letterSpacing: 2, marginTop: 14 }}>SAISON {activeSeason.number}</Text>
            <Text style={[styles.title, { textAlign: 'center', marginTop: 7 }]}>{activeSeason.title}</Text>
            <Text style={[styles.subtitle, { textAlign: 'center', marginTop: 6 }]}>{activeSeason.subtitle}</Text>
          </View>

          <View style={[styles.glowCard, { marginTop: 24 }]}>
            <Text style={{ color: colors.accent, fontSize: 11, fontWeight: '900', letterSpacing: 1.5 }}>🎬 AVANT DE COMMENCER</Text>
            <Text style={{ color: colors.text, fontSize: 22, fontWeight: '900', lineHeight: 28, marginTop: 8 }}>{activeSeason.seasonIntro.title}</Text>
            <Text style={{ color: colors.text, lineHeight: 22, marginTop: 12 }}>{activeSeason.seasonIntro.story}</Text>
            <Text style={{ color: colors.muted, lineHeight: 21, marginTop: 12 }}>{activeSeason.seasonIntro.transition}</Text>
          </View>

          <View style={{ marginTop: 14, padding: 16, borderRadius: 20, backgroundColor: colors.surface2, borderWidth: 1, borderColor: colors.borderStrong }}>
            <Text style={{ color: colors.accent, fontSize: 10, fontWeight: '900', letterSpacing: 1.5 }}>🧵 LE FIL DE LA SAISON</Text>
            <Text style={{ color: colors.muted, lineHeight: 20, marginTop: 7 }}>{activeSeason.seasonIntro.thread}</Text>
          </View>

          <View style={{ marginTop: 14, padding: 16, borderRadius: 20, backgroundColor: colors.surface2, borderWidth: 1, borderColor: colors.border }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: colors.text, fontWeight: '900' }}>{activeCompletedCount}/{activeSeason.episodes.length} épisodes</Text>
              <Text style={{ color: colors.accent, fontWeight: '900' }}>{progress}%</Text>
            </View>
            <View style={{ height: 7, backgroundColor: colors.border, borderRadius: 8, overflow: 'hidden', marginTop: 10 }}>
              <View style={{ width: `${progress}%`, height: '100%', backgroundColor: colors.accent }} />
            </View>
          </View>

          <View style={{ marginTop: 14, padding: 16, borderRadius: 20, backgroundColor: colors.surface2, borderWidth: 1, borderColor: colors.borderStrong }}>
            <Text style={{ color: colors.accent, fontSize: 11, fontWeight: '900', letterSpacing: 1.5 }}>🎁 À DÉBLOQUER DANS CETTE SAISON</Text>
            <Text style={{ color: colors.text, fontSize: 17, fontWeight: '900', lineHeight: 23, marginTop: 7 }}>Chaque épisode enrichit ta collection.</Text>
            <View style={{ marginTop: 12, gap: 9 }}>
              <Text style={{ color: colors.text, lineHeight: 20 }}>👤 <Text style={{ fontWeight: '900' }}>{seasonCharacterIds.length}</Text> personnage{seasonCharacterIds.length > 1 ? 's' : ''} à découvrir</Text>
              <Text style={{ color: colors.text, lineHeight: 20 }}>📖 <Text style={{ fontWeight: '900' }}>{seasonBooks.length}</Text> livre{seasonBooks.length > 1 ? 's' : ''} de la Bible à découvrir</Text>
              {seasonAnnexes.length > 0 ? <Text style={{ color: colors.text, lineHeight: 20 }}>📜 <Text style={{ fontWeight: '900' }}>{seasonAnnexes.length}</Text> histoire{seasonAnnexes.length > 1 ? 's' : ''} annexe{seasonAnnexes.length > 1 ? 's' : ''} à débloquer au fil des épisodes</Text> : null}
              {seasonBadge ? <Text style={{ color: colors.text, lineHeight: 20 }}>{seasonBadge.icon} <Text style={{ fontWeight: '900' }}>1 badge</Text> : « {seasonBadge.title} »</Text> : null}
            </View>
          </View>

          <Pressable onPress={startSeason} style={[styles.button, styles.buttonPrimary, { marginTop: 22 }]}>
            <Text style={styles.buttonText}>{seasonComplete ? 'Rejouer un épisode ›' : activeCompletedCount > 0 ? 'Continuer l’aventure ›' : 'Commencer les épisodes ›'}</Text>
          </Pressable>

          <View style={{ marginTop: 18 }}>
            <Text style={{ color: colors.accent, fontSize: 11, fontWeight: '900', letterSpacing: 1.4 }}>📚 LES ÉPISODES</Text>
            <Text style={{ color: colors.muted, lineHeight: 19, marginTop: 5 }}>{seasonComplete ? 'La saison est terminée : choisis directement l’épisode que tu veux revoir.' : 'Les épisodes se débloquent dans l’ordre.'}</Text>
            <View style={{ marginTop: 10, gap: 8 }}>
              {activeSeason.episodes.map((ep, episodeIndex) => {
                const done = completed.includes(ep.id);
                const available = canOpenEpisode(episodeIndex);
                return <Pressable key={ep.id} disabled={!available} onPress={() => router.replace({ pathname: '/adventure/episode', params: { id: ep.id } })} style={[styles.card, { padding: 12, opacity: available ? 1 : .52, borderColor: done ? colors.success : colors.border }]}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: 32, height: 32, borderRadius: 16, backgroundColor: done ? colors.success : colors.surface2, alignItems: 'center', justifyContent: 'center' }}>
                      <Text style={{ color: done ? colors.bg : colors.accent, fontWeight: '900' }}>{done ? '✓' : ep.number}</Text>
                    </View>
                    <View style={{ flex: 1, marginLeft: 10 }}>
                      <Text style={{ color: colors.text, fontSize: 14, fontWeight: '900' }}>{ep.title}</Text>
                      <Text style={{ color: colors.muted, fontSize: 10, marginTop: 2 }}>{done ? '✓ Épisode terminé · Rejouer' : available ? 'À découvrir ›' : '🔒 À débloquer'}</Text>
                    </View>
                    {available ? <Text style={{ color: colors.accent, fontSize: 19 }}>›</Text> : null}
                  </View>
                </Pressable>;
              })}
            </View>
          </View>
        </ScrollView>
      </ScenicScreen>
    );
  }

  return (
    <ScenicScreen>
      <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
        <Pressable onPress={() => router.back()}><Text style={{ color: colors.accent, fontWeight: '900' }}>‹ Retour</Text></Pressable>

        <View style={{ marginTop: 22 }}>
          <Text style={styles.eyebrow}>🗺️ AVENTURE</Text>
          <Text style={[styles.title, { marginTop: 7 }]}>Les saisons</Text>
          <Text style={styles.subtitle}>Choisis une saison pour découvrir son histoire.</Text>
        </View>

        <View style={{ marginTop: 22 }}>
          <Text style={styles.sectionTitle}>TA PROGRESSION</Text>
          <View style={{ marginTop: 10, padding: 16, borderRadius: 22, backgroundColor: colors.surface2, borderWidth: 1, borderColor: colors.borderStrong }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View style={{ flex: 1 }}>
                <Text style={{ color: colors.text, fontSize: 17, fontWeight: '900' }}>L’Aventure biblique</Text>
                <Text style={{ color: colors.muted, fontSize: 11, marginTop: 3 }}>{totalCompletedCount}/{totalEpisodes} histoires terminées</Text>
              </View>
              <Text style={{ color: colors.accent, fontSize: 20, fontWeight: '900' }}>{totalProgress}%</Text>
            </View>
            <View style={{ height: 8, backgroundColor: colors.border, borderRadius: 8, overflow: 'hidden', marginTop: 11 }}>
              <View style={{ width: totalProgress + '%', height: '100%', backgroundColor: colors.accent }} />
            </View>
          </View>

          <Text style={[styles.sectionTitle, { marginTop: 22 }]}>LE VOYAGE BIBLIQUE</Text>
          <View style={{ marginTop: 10, padding: 16, borderRadius: 22, backgroundColor: colors.surface2, borderWidth: 1, borderColor: colors.borderStrong }}>
            <Text style={{ color: colors.accent, fontSize: 11, fontWeight: '900', letterSpacing: 1.4 }}>🧵 8 ÉTAPES • 116 HISTOIRES</Text>
            <Text style={{ color: colors.text, fontSize: 17, fontWeight: '900', lineHeight: 23, marginTop: 7 }}>De la création jusqu’aux promesses pour l’avenir.</Text>
            <Text style={{ color: colors.muted, lineHeight: 20, marginTop: 6 }}>Chaque étape reprend une période de l’histoire biblique. Choisis ton point de départ, puis avance histoire après histoire.</Text>
          </View>

          <View style={{ marginTop: 12 }}>
            {SEASONS.map((season, seasonIndex) => {
              const count = season.episodes.filter(ep => completed.includes(ep.id)).length;
              const first = season.episodes[0]?.number ?? 0;
              const last = season.episodes[season.episodes.length - 1]?.number ?? 0;
              const done = season.episodes.length > 0 && count === season.episodes.length;
              const icon = ['🌍','🌈','🏜️','👑','🏛️','🕊️','🔥','🌳'][seasonIndex];
              return (
                <View key={season.id} style={{ flexDirection: 'row', minHeight: 92 }}>
                  <View style={{ width: 42, alignItems: 'center' }}>
                    <View style={{ width: 34, height: 34, borderRadius: 17, backgroundColor: done ? colors.success : colors.surface2, borderWidth: 1, borderColor: done ? colors.success : colors.borderStrong, alignItems: 'center', justifyContent: 'center' }}>
                      <Text style={{ fontSize: 16 }}>{done ? '✓' : icon}</Text>
                    </View>
                    {seasonIndex < SEASONS.length - 1 ? <View style={{ width: 2, flex: 1, backgroundColor: colors.border, marginVertical: 4 }} /> : null}
                  </View>
                  <Pressable disabled={!isSeasonUnlocked(seasonIndex)} onPress={() => selectSeason(seasonIndex)} style={({ pressed }) => [{ flex: 1, marginLeft: 10, marginBottom: 10, padding: 14, borderRadius: 18, borderWidth: 1, borderColor: isSeasonUnlocked(seasonIndex) ? colors.border : colors.borderStrong, backgroundColor: colors.surface2, opacity: isSeasonUnlocked(seasonIndex) ? 1 : .58 }, pressed && isSeasonUnlocked(seasonIndex) && { transform: [{ scale: .985 }] }]}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Text style={{ color: isSeasonUnlocked(seasonIndex) ? colors.accent : colors.muted, fontSize: 9, fontWeight: '900', letterSpacing: 1.2 }}>{isSeasonUnlocked(seasonIndex) ? `SAISON ${season.number}` : `🔒 SAISON ${season.number}`} • {first}–{last}</Text>
                      <Text style={{ color: colors.muted, fontSize: 10, fontWeight: '800' }}>{count}/{season.episodes.length}</Text>
                    </View>
                    <Text style={{ color: colors.text, fontSize: 16, fontWeight: '900', lineHeight: 21, marginTop: 5 }}>{season.title}</Text>
                    <View style={{ height: 5, backgroundColor: colors.border, borderRadius: 6, overflow: 'hidden', marginTop: 8 }}>
                      <View style={{ width: (season.episodes.length ? Math.round((count / season.episodes.length) * 100) : 0) + '%', height: '100%', backgroundColor: done ? colors.success : colors.accent }} />
                    </View>
                    <Text numberOfLines={2} style={{ color: colors.muted, lineHeight: 18, marginTop: 4 }}>{season.description}</Text>
                    <Text style={{ color: isSeasonUnlocked(seasonIndex) ? colors.accent : colors.muted, fontSize: 11, fontWeight: '900', marginTop: 8 }}>{!isSeasonUnlocked(seasonIndex) ? `🔒 Termine la saison ${seasonIndex} pour débloquer` : done ? 'Rejouer la saison ›' : count > 0 ? 'Continuer l’aventure ›' : 'Commencer ›'}</Text>
                  </Pressable>
                </View>
              );
            })}
          </View>
        </View>

        <View style={[styles.card, { marginTop: 18 }]}>
          <Text style={{ color: colors.accent, fontSize: 12, fontWeight: '900', letterSpacing: 1.3 }}>🧭 COMMENT ÇA MARCHE</Text>
          <Text style={{ color: colors.text, fontSize: 16, fontWeight: '900', lineHeight: 22, marginTop: 7 }}>Découvre l’histoire, joue, puis retiens l’essentiel.</Text>
          <Text style={{ color: colors.muted, lineHeight: 20, marginTop: 6 }}>Chaque saison commence par une courte introduction. Ensuite, chaque épisode te fait découvrir une histoire avant de passer aux questions.</Text>
        </View>
      </ScrollView>
    </ScenicScreen>
  );
}
