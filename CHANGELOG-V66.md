# Bible Party V66 — Release Candidate

## Version
- Application : 1.7.4
- Android versionCode : 12
- iOS buildNumber : 12

## Préparation release
- Configuration EAS Android/iOS séparée entre Release Candidate et Production.
- Profil `release-candidate` : distribution interne, APK Android pour test direct.
- Profil `production` : Android App Bundle (`.aab`) pour Google Play et build iOS de production pour TestFlight/App Store.
- Source des numéros de build conservée en local pour garder des versions déterministes dans le dépôt.
- Identifiants conservés : Android `com.bibleparty.app`, iOS `com.bibleparty.app`.
- Icônes et splash présents et aux dimensions attendues.
- Aucun accès caméra, microphone, localisation ou compte utilisateur déclaré par l'application.
- Gameplay V65 validé manuellement par une partie utilisant tous les modes.
- Base de contenu : 1 640 cartes.
- Audit précédent : 10 000 parties simulées, 151 762 manches, 0 échec.

## À valider avant store
1. `npm install`
2. `npx expo-doctor`
3. `npm run typecheck`
4. Build RC Android/iOS
5. Installation sur appareil réel
6. Test hors ligne
7. Test TestFlight / Google Play test interne
8. URL publique de politique de confidentialité + coordonnées de support
9. Captures et fiches store
