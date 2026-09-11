# V66 — Release Candidate

## Version
- `expo.version`: 1.7.4
- Android `versionCode`: 12
- iOS `buildNumber`: 12
- Android package: `com.bibleparty.app`
- iOS bundle identifier: `com.bibleparty.app`

## 1. Vérifications locales

```bash
npm install
npx expo-doctor
npm run typecheck
npx expo config --type public
```

Le `typecheck` doit être exécuté dans l'environnement du projet après installation complète des dépendances.

## 2. Relier le projet à EAS (une seule fois)

```bash
npx eas login
npx eas init
```

Ne renseigne pas un `projectId` au hasard : `eas init` doit créer/lier le projet Expo associé au compte du propriétaire.

## 3. Build Release Candidate

### Android — APK installable directement
```bash
npx eas build --platform android --profile release-candidate
```

### iOS — distribution interne
```bash
npx eas build --platform ios --profile release-candidate
```

Le profil RC sert au test sur appareils réels. Pour iOS, EAS gère la signature/distribution interne après authentification Apple.

## 4. Build production

### Android + iOS
```bash
npx eas build --platform all --profile production
```

Le profil production Android génère un `.aab`, format adapté à Google Play. Le build iOS est destiné à TestFlight/App Store.

## 5. Soumission

Ne pas lancer la soumission publique avant validation du RC. Pour le premier passage, utiliser le test interne Google Play et TestFlight.

```bash
npx eas submit --platform android --profile production
npx eas submit --platform ios --profile production
```

## 6. Contrôle final

- [ ] Installation Android réelle
- [ ] Installation iPhone réelle
- [ ] Tous les modes
- [ ] Chrono 10 secondes
- [ ] Time's Up
- [ ] Réponse maître de jeu
- [ ] Pause/reprise
- [ ] Finale/résultat
- [ ] Scores/progression
- [ ] Mode hors ligne
- [ ] Aucune permission inutile
- [ ] Politique de confidentialité publique
- [ ] URL de support
- [ ] Captures App Store / Play Store
- [ ] Classification d'âge et questionnaire de contenu

## État
V66 est un Release Candidate préparé pour les builds EAS. Un build réel n'est pas considéré comme validé tant que les commandes EAS n'ont pas été exécutées avec les comptes Apple/Google/Expo du propriétaire.
