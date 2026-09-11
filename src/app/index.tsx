import React from 'react';

import { Platform, Pressable, ScrollView, Text, View } from 'react-native';

import { router } from 'expo-router';

import { Logo } from '@/components/Logo';

import { AppButton } from '@/components/AppButton';

import { colors } from '@/theme/colors';

import { styles } from '@/theme/styles';

export default function HomeScreen() {
  const downloadAndroid = () => {
    if (Platform.OS === 'web') {
      window.location.href = '/bible-party/bible-party-1.7.6.apk';
    }
  };

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={{
        padding: 20,
        paddingBottom: 40,
      }}
    >
      <View style={{ alignItems: 'center', marginTop: 34 }}>
        <Logo />

        <View
          style={{
            marginTop: 34,
            width: 74,
            height: 74,
            borderRadius: 37,
            borderWidth: 1,
            borderColor: colors.accent,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={{ color: colors.accent, fontSize: 28 }}>✦</Text>
        </View>

        <Text
          style={[
            styles.eyebrow,
            {
              marginTop: 28,
              textAlign: 'center',
            },
          ]}
        >
          MAÎTRE DE JEU
        </Text>

        <Text
          style={[
            styles.title,
            {
              textAlign: 'center',
              marginTop: 10,
            },
          ]}
        >
          Prêt à lancer la partie ?
        </Text>

        <Text
          style={[
            styles.subtitle,
            {
              textAlign: 'center',
              marginTop: 12,
              maxWidth: 520,
            },
          ]}
        >
          Réunissez vos joueurs, choisissez vos modes et laissez Bible Party
          rythmer la partie.
        </Text>
      </View>

      <View style={[styles.glowCard, { marginTop: 30 }]}>
        <Text style={styles.eyebrow}>COMMENT ÇA MARCHE</Text>

        <View style={{ gap: 13, marginTop: 14 }}>
          {[
            'Choisir le maître de jeu',
            'Créer les équipes et les modes',
            'Révéler puis valider chaque réponse',
            'Faire monter les scores jusqu’à la finale',
          ].map((item, index) => (
            <View
              key={item}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 12,
              }}
            >
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  borderWidth: 1,
                  borderColor: colors.accent,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text
                  style={{
                    color: colors.accent,
                    fontWeight: '700',
                  }}
                >
                  {index + 1}
                </Text>
              </View>

              <Text
                style={{
                  color: colors.text,
                  fontSize: 14,
                  flex: 1,
                }}
              >
                {item}
              </Text>
            </View>
          ))}
        </View>

        <View style={{ marginTop: 22 }}>
          <AppButton
            title="Choisir le maître de jeu →"
            onPress={() => router.push('/host')}
          />
        </View>
      </View>

      <View
        style={{
          marginTop: 18,
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            color: colors.muted,
            fontSize: 11,
          }}
        >
          13 modes · 2 à 4 équipes · hors ligne
        </Text>
      </View>

      {Platform.OS === 'web' && (
        <>
          <View
            style={{
              marginTop: 22,
              padding: 16,
              borderRadius: 18,
              borderWidth: 1,
              borderColor: colors.accent,
              backgroundColor: 'rgba(255,255,255,0.03)',
            }}
          >
            <Text
              style={[
                styles.eyebrow,
                {
                  color: colors.accent,
                },
              ]}
            >
              IPHONE · INSTALLATION GRATUITE
            </Text>

            <Text
              style={{
                color: colors.text,
                fontSize: 16,
                fontWeight: '700',
                marginTop: 8,
              }}
            >
              Ajoutez Bible Party à votre écran d’accueil
            </Text>

            <Text
              style={{
                color: colors.muted,
                fontSize: 12.5,
                lineHeight: 19,
                marginTop: 7,
              }}
            >
              Sur iPhone, ouvrez cette page avec Safari, appuyez sur
              Partager, puis choisissez « Sur l’écran d’accueil ».
            </Text>
          </View>

          <View
            style={{
              marginTop: 14,
              padding: 16,
              borderRadius: 18,
              borderWidth: 1,
              borderColor: colors.accent,
              backgroundColor: 'rgba(255,255,255,0.03)',
            }}
          >
            <Text
              style={[
                styles.eyebrow,
                {
                  color: colors.accent,
                },
              ]}
            >
              ANDROID · INSTALLATION GRATUITE
            </Text>

            <Text
              style={{
                color: colors.text,
                fontSize: 16,
                fontWeight: '700',
                marginTop: 8,
              }}
            >
              Télécharger Bible Party sur Android
            </Text>

            <Text
              style={{
                color: colors.muted,
                fontSize: 12.5,
                lineHeight: 19,
                marginTop: 7,
              }}
            >
              Téléchargez l’application Android (APK), puis ouvrez le fichier
              pour l’installer sur votre téléphone.
            </Text>

            <Pressable
              onPress={downloadAndroid}
              style={{
                marginTop: 14,
                minHeight: 48,
                borderRadius: 14,
                borderWidth: 1,
                borderColor: colors.accent,
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: 16,
              }}
            >
              <Text
                style={{
                  color: colors.accent,
                  fontSize: 14,
                  fontWeight: '700',
                }}
              >
                Télécharger l’APK Android →
              </Text>
            </Pressable>
          </View>
        </>
      )}

      <View
        style={{
          marginTop: 28,
          paddingTop: 18,
          borderTopWidth: 1,
          borderTopColor: 'rgba(255,255,255,0.08)',
        }}
      >
        <Text
          style={{
            color: colors.muted,
            fontSize: 10.5,
            lineHeight: 16,
            textAlign: 'center',
          }}
        >
          Bible Party est une application indépendante et n’est pas
          officiellement affiliée à une organisation religieuse.
        </Text>
      </View>
    </ScrollView>
  );
}
