# Bible Party V71 — Route Scenic Fix

Version 1.8.3.

## Correction

Le décor scénique n’est plus placé derrière le `Stack` global d’Expo Router.
Chaque écran de l’application est maintenant rendu dans un shell `ScenicScreen` local qui contient directement le décor React Native.

Cette approche évite que la surface Web d’Expo Router masque le décor. Elle ne dépend ni d’une image de fond, ni du dossier `public`, ni du DOM, ni d’un chemin GitHub Pages.

Le décor reste 100 % React Native et est partagé entre Web, iOS et Android.
