# Bible Party V83 — Refonte gameplay + responsive

## Objectif
Transformer V82 en une expérience plus cinématique et plus agréable à jouer, sans repartir de zéro et sans remplacer la logique existante.

## Modifications

### Accueil
- Refonte responsive mobile / tablette / desktop.
- Le desktop utilise désormais l'espace horizontal avec une composition en deux zones au lieu d'une coque téléphone fixe.
- Conservation du paysage, logo, Bible, cartes, boutons dorés et navigation.
- Défi rapide corrigé : le texte et le lancement utilisent désormais 2 minutes.

### Jeu
- Introduction de manche avant chaque tour : mode, numéro de manche et équipe active.
- Affichage explicite de l'équipe qui joue.
- Rappel de l'objectif et des points pendant la manche.
- Les chronos de Défi 10 secondes / Time's Up ne démarrent plus automatiquement à l'ouverture de la manche : le maître de jeu lance le chrono.
- À expiration du Défi 10 secondes, le maître de jeu peut explicitement valider « Réussi » ou « Échoué ».
- Le contrôle de pause / reprise reste disponible.
- Le système de score, les questions et les decks existants sont conservés.

### Victoire
- L'écran de résultat est maintenant réellement enveloppé dans le décor cinématique.
- Refonte du classement final avec équipe gagnante, score et actions plus lisibles.
- Les boutons Rejouer / Entraînement / Accueil sont de vrais Pressable.

### Paramètres
- Refonte visuelle cohérente avec le reste de Bible Party.
- Suppression des emojis décoratifs au profit des assets fournis.
- Sections plus lisibles et interactions conservées.

### Responsive / plateforme
- Le cadre cinématique accepte maintenant des compositions plus larges sur tablette et desktop.
- Navigation centrée sur grand écran.
- Orientation Expo passée à `default` afin de permettre une utilisation paysage lorsque pertinente.
- Version application portée à 1.9.0 (build iOS 17 / Android 17).

## Vérification
Le projet source a été modifié directement. La validation TypeScript/Expo n'a pas pu être exécutée dans cet environnement car l'installation de `node_modules` a dépassé le délai disponible. À tester localement avec :

```bash
npm install
npm run typecheck
npx expo start -c
```
