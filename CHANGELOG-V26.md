# Bible Party V26 — correctif de gameplay critique

## Version 1.5.1

### Bug corrigé (priorité 1 de l'audit)
- **Révélation prématurée de la réponse.** En Quiz, Finale, Vrai/Faux, « Qui a dit ça ? », Intrus et Chronologie, sélectionner une réponse affichait immédiatement le résultat (✓/✗) et l'explication, avant même d'appuyer sur « Valider ». Le joueur pouvait donc essayer chaque option jusqu'à voir « ✓ Correct », puis valider ce choix — score biaisé et defeats l'esprit du jeu de soirée.
  - Sélectionner une réponse ne fait plus que la surligner.
  - Le feedback (bonne/mauvaise réponse, explication, référence) ne s'affiche plus qu'après l'appui sur le bouton d'action (« Valider la réponse », « Valider l'ordre », etc.), moment où le score est réellement attribué.
  - Concerne : `src/app/game.tsx` — modes quiz, finale, truefalse, quote, intruder, chronology.
  - L'état `reveal`, devenu inutile, a été retiré.

### Autres ajustements
- Mentions de version obsolètes (« V13 ») corrigées dans les écrans Réglages et À propos → V26.
- `app.json` était resté à la version 1.3.0 / build 4 alors que `package.json` était en 1.5.0 : réaligné à 1.5.1 / build-buildNumber 5 / versionCode 5.

### Vérifications techniques réellement effectuées
- Lecture statique complète du fichier modifié (`src/app/game.tsx`) : équilibre des accolades/parenthèses/crochets vérifié par script.
- `tsc --noEmit` exécuté en mode autonome sur le fichier modifié (sans les node_modules, donc uniquement pour détecter des erreurs de syntaxe/structure) : **aucune erreur de syntaxe**. Les seules erreurs reportées sont des "Cannot find module" attendues, faute de dépendances installées (voir ci-dessous).
- `npm install` échoue toujours dans cet environnement : `403 Forbidden` sur `registry.npmjs.org`. Impossible d'exécuter un `tsc` complet, `expo start` ou `eas build` ici. À refaire dans un environnement avec accès réseau avant publication.
- Aucun test réel sur Web/Android/iOS effectué (nécessite le réseau ci-dessus).

### Bug connu restant (priorité 2 — pas encore traité)
- La difficulté (`easy`/`medium`/`hard`) des questions Quiz, Qui suis-je et Vrai/Faux est assignée par **position dans le tableau**, pas par contenu réel. Résultat : sur 214 questions Quiz, seules 18 sont étiquetées facile/moyen, les 196 autres sont automatiquement "hard". Même problème pour Qui suis-je (104 questions) et Vrai/Faux (95 questions). Le filtre de difficulté dans Configuration et Entraînement est donc faussé pour la majorité du contenu.
