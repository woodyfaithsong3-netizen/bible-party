# Bible Party

Application mobile de jeux bibliques, indépendante et offline-first.

## Stack
- Expo SDK 57
- React Native 0.86
- TypeScript
- Expo Router
- AsyncStorage

## Lancer en local

```bash
npm install
npm run typecheck
npx expo start
```

## Build de production

Installer EAS CLI :

```bash
npm install --global eas-cli
 eas login
```

Build Android + iOS :

```bash
eas build --platform all --profile production
```

Puis soumission :

```bash
eas submit --platform all --profile production
```

## Avant publication

1. Publier `PRIVACY-POLICY.md` sur une URL publique réelle, puis utiliser cette même URL dans les fiches App Store Connect / Google Play. Ne jamais publier une URL fictive.
2. Créer les fiches App Store Connect et Google Play Console.
3. Ajouter les captures d’écran, description, âge, mots-clés et coordonnées de support.
4. Vérifier juridiquement les droits liés aux traductions bibliques, noms et contenus utilisés.
5. Faire une vérification éditoriale de toutes les questions et références, avec JW.org comme source de vérification religieuse.
6. Tester sur plusieurs appareils physiques et via TestFlight / test interne Google Play.

## Important

Bible Party n’est pas produite, approuvée, parrainée ou affiliée aux Témoins de Jéhovah.

## État V66 — Release Candidate

La V66 prépare les profils EAS Release Candidate et Production. Aucun build Android/iOS n’est considéré comme validé avant exécution réelle de `npm install`, `npm run typecheck`, `npx expo-doctor` et `eas build` sur le compte du propriétaire.
