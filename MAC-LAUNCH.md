# Lancement Mac — Bible Party V35

## 1. Décompresser le ZIP

Place le dossier où tu veux, par exemple sur le Bureau.

## 2. Entrer dans LE DOSSIER DU PROJET

```bash
cd ~/Desktop/Bible-Party-V35-Premium-UI
```

Vérifie :

```bash
pwd
ls
```

Tu dois voir `package.json`, `app.json`, `src`, `assets`, etc.

> Ne lance pas `npm install` depuis `~/Desktop`. Dans les essais précédents, cela a provoqué `ENOENT ... /Desktop/package.json`.

## 3. Installer les dépendances

```bash
npm install
```

Attends la fin complète de l'installation.

## 4. Vérifier TypeScript

```bash
npm run typecheck
```

## 5. Lancer la version web

```bash
npm run web
```

## 6. Ou lancer Expo

```bash
npx expo start
```

Puis scanne le QR avec Expo Go.

## Pourquoi V35 évite l'ancien problème `expo-haptics`

Les logs V31 montrent une erreur Expo liée au chargement de `expo-haptics` comme config plugin (`Unexpected token 'export'`). V35 n'utilise plus `expo-haptics` : les retours haptiques sont réalisés avec l'API native `Vibration` de React Native. Cela supprime cette dépendance et évite de reproduire ce chemin d'erreur.

## Important

Ne fais pas :

```bash
npx expo start
```

avant `npm install` dans une nouvelle copie du projet.

Et ne fais pas :

```bash
cd Bible-Party-V34-Game-Experience
```

si tu es déjà dans ce dossier : cela crée simplement un chemin imbriqué qui n'existe pas.
