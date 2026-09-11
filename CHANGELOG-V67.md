# Bible Party V67 — Expo Doctor / Release Candidate

## Pourquoi cette version
V67 corrige les cinq familles de problèmes signalées par `npx expo-doctor` sur V66 avant de poursuivre la validation Release Candidate.

## Corrections
- App config modernisée pour Expo SDK 57 : suppression des propriétés de schéma obsolètes `newArchEnabled` et `splash` au niveau racine.
- Splash screen migré vers le config plugin officiel `expo-splash-screen`.
- Ajout des peer dependencies directes requises par Expo Router : `expo-constants` et `expo-linking`.
- Alignement des dépendances Expo / React Native sur les versions attendues par Expo Doctor :
  - Expo 57.0.9
  - React Native 0.86.3
  - react-native-safe-area-context 5.7.0
  - react-native-screens 4.26.0
  - react-native-web 0.21.2+
  - TypeScript 6.0.3+
- La mise à niveau de React Native apporte le correctif Hermes demandé par Expo Doctor.
- Version applicative : 1.7.5
- Android versionCode : 13
- iOS buildNumber : 13

## Important
Ne pas lancer `npm audit fix --force` sans analyser les changements proposés : cette commande peut provoquer des mises à niveau majeures non souhaitées.

## Validation Mac
```bash
npm install
npx expo-doctor
npm run typecheck
npx expo start -c
```

Puis, si Expo Doctor et le typecheck sont propres :
```bash
eas build --profile release-candidate --platform android
```
