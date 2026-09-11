# Bible Party V41 — mode Maître de jeu

## Direction
L’écran de partie est désormais pensé comme un **écran de maître de jeu** : une seule personne anime la partie depuis le téléphone, pendant que les équipes jouent à l’oral autour.

## Mécanique commune
Pour les modes à validation manuelle :
1. Les joueurs jouent / répondent.
2. Le maître de jeu sélectionne ou écoute la réponse.
3. **Révéler la réponse** affiche la solution et la référence.
4. Le maître de jeu valide **Oui** ou **Non**.
5. Les points sont attribués uniquement après validation.

## Modes concernés
- Quiz
- Vrai / Faux
- Qui suis-je ?
- 3 indices
- Mot interdit
- Qui a dit ça ?
- Chronologie
- Intrus
- Time’s Up
- Face-à-face
- Mise à risque
- Finale
- Défi 10 secondes

## Défi 10 secondes
Chaque défi possède maintenant une liste d’**exemples de réponses acceptées**. Pour les défis ouverts (« cite 5… »), le maître de jeu reste décisionnaire : la liste sert de repère, pas de liste exhaustive.

## Écran simplifié
Le haut de l’écran met en avant :
- équipe qui joue,
- score de l’équipe,
- score des autres équipes en bandeau compact,
- chrono général,
- manche actuelle.

## Vérification technique
Les fichiers TS/TSX modifiés passent une vérification de syntaxe TypeScript via `transpileModule`. Le build Expo complet doit être lancé sur le Mac avec `npm install` puis `npx expo start`.
