# Bible Party V29 — audit complet et corrections réelles

## Version 1.5.4

Cette version fait suite à une inspection ligne par ligne de tout le code source (pas seulement
du système de catégories comme en V28), avec extraction et exécution réelle des 523 questions en
JavaScript pur (contournement du manque de `node_modules` — voir « Ce qui a été vérifié » plus
bas) pour valider les données, et une relecture complète des 8 écrans et du moteur de jeu pour
trouver des bugs de comportement, pas seulement des erreurs de compilation.

### Bugs corrigés

1. **Mode Entraînement : l'écran de fin de session ne s'affichait jamais.**
   Dans `src/app/training.tsx`, la fonction `next()` appelait `setStarted(false)` dès la dernière
   question au lieu d'avancer l'index. Résultat : en cliquant sur « Terminer » après la 10e
   question, l'utilisateur était renvoyé directement à l'écran de configuration (choix de
   catégorie/difficulté), sans jamais voir son score final. L'écran de résultats existait bien
   dans le code (`if (!current) return …`) mais était totalement inatteignable — code mort.
   Corrigé : `next()` avance toujours l'index ; l'écran de fin s'affiche désormais normalement, et
   a été complété pour afficher, comme demandé au §14 du cahier des charges : score, taux de
   réussite, **meilleure série** (nouveau : `bestStreak` n'existait pas du tout comme état) et la
   **liste des questions ratées** de la session (nouveau : n'était pas du tout suivie), avec un
   lien direct vers « Réviser mes erreurs ».
2. **Mode Entraînement : pourcentage de réussite décalé d'une question.**
   `accuracy` se calculait sur `correct / index`, où `index` ne compte pas la question en cours
   même une fois répondue. Le pourcentage affiché juste après avoir répondu correspondait donc
   toujours à l'état *avant* la question affichée, jamais à l'état réel. Corrigé avec un compteur
   `answeredCount` qui inclut la question du moment dès qu'elle a une réponse.
3. **Mode Entraînement : écran vide non géré.**
   Si un joueur choisissait une combinaison catégorie/difficulté sans aucune question
   correspondante, l'ancien code affichait immédiatement l'écran de fin (« Entraînement terminé »,
   0 point) sans explication. Un écran dédié « Aucune question disponible » a été ajouté.
4. **Révision des erreurs : les bonnes réponses n'étaient jamais comptabilisées, contrairement
   aux mauvaises.** Dans `src/app/review.tsx`, une bonne réponse en révision appelait uniquement
   `clearTrainingMissed` (retrait de la liste), sans jamais incrémenter `answered`/`correct` — alors
   qu'une mauvaise réponse, elle, appelait `recordTrainingAnswer` et incrémentait `answered` (comme
   raté). Cette asymétrie faisait mécaniquement baisser le taux de réussite affiché sur l'écran
   Progression à chaque session de révision, même pour un joueur qui progressait réellement. Le
   même appel utilisait en plus la catégorie **brute** de la question (ex. `"Genèse"`,
   `"Rois"`, `"Courage"`) au lieu de la catégorie normalisée utilisée partout ailleurs (`"Bible"`,
   `"Rois & prophètes"`, `"Personnages"`), ce qui aurait silencieusement créé des entrées
   `categoryStats` fantômes ne correspondant à aucune des 5 catégories affichées sur l'écran
   Progression. Corrigé : la révision ne modifie plus que la liste des erreurs (retrait si bonne
   réponse, aucune modification si mauvaise puisque la question y est déjà) et ne touche plus aux
   statistiques globales déjà comptabilisées lors du premier passage.
5. **Mode « Qui suis-je ? » : bouton d'action en double.** Le bloc spécifique au mode affichait déjà
   son propre bouton « Je pense avoir trouvé · +N » avant la réponse ; le bouton générique du bas
   de l'écran de jeu (partagé par tous les modes) affichait *le même* libellé et déclenchait
   *exactly* la même action (`canPrimaryAction` renvoyait `true` sans condition pour ce mode). Deux
   boutons identiques apparaissaient donc simultanément à l'écran. Corrigé : le bouton générique est
   masqué avant réponse pour ce mode (il reste affiché après, pour passer à la manche suivante).
6. **Bandeau « Série +50 » affiché un tour trop tard.** Le bonus de série se déclenche réellement à
   partir de la 3e bonne réponse consécutive (`award()` teste `streak >= 2`, où `streak` est le
   compteur *avant* la réponse en cours). Le bandeau visuel, lui, ne s'affichait qu'à partir de
   `streak >= 3`, donc seulement à la question suivante — le joueur n'était jamais prévenu, au
   moment décisif, que la bonne réponse en cours allait rapporter le bonus. Seuils alignés.
7. **Chronologie : nombre d'événements attendu figé en dur à 4.** `canPrimaryAction`,
   `actionLabel` et `primaryAction` comparaient tous `chronologyOrder.length` à la constante `4`.
   Les 20 questions actuelles ont bien 4 événements chacune (vérifié programmatiquement, voir plus
   bas), donc ce n'est pas un bug observable aujourd'hui — mais la moindre future question
   Chronologie à 3 ou 5 événements aurait rendu le bouton de validation impossible à activer, sans
   erreur visible. Remplacé par une longueur calculée dynamiquement à partir de la question
   affichée (`question.events.length`), conformément à l'exigence de robustesse du cahier des
   charges (§31/§35).
8. **Accueil : zones tactiles invisibles inaccessibles et clignotement au toucher.** Les 4 cartes
   secondaires (Défi rapide, Entraînement, Mes progrès, Classement) utilisaient un `AppButton`
   invisible en position absolue comme zone de toucher. Deux problèmes : (a) ce bouton n'avait
   aucun `accessibilityLabel` — un lecteur d'écran l'annonçait comme un « bouton » vide et sans
   contexte ; (b) l'ordre d'application des styles de `AppButton` faisait repasser l'opacité de 0 à
   0,82 pendant l'appui (le style « pressed » s'applique après le style personnalisé), provoquant
   un bref flash coloré sur toute la carte à chaque toucher. Remplacé par un vrai `Pressable`
   couvrant toute la carte, avec un `accessibilityLabel` décrivant l'action et un effet de
   pression cohérent.

### Ce qui a été vérifié

Sans accès réseau dans cet environnement (`npm install` échoue toujours avec `403 Forbidden` sur
`registry.npmjs.org` — confirmé à nouveau ce tour-ci), il est impossible d'exécuter `expo start`,
`tsc` avec les vraies dépendances RN/Expo, ou `eas build`. Deux vérifications réelles ont
cependant pu être faites :

- **Les 523 questions ont été chargées et exécutées en JavaScript pur** (script qui retire
  uniquement les annotations de type TypeScript de `questions.ts` sans toucher à la logique, puis
  `require()` le résultat avec Node 22, disponible localement). Cela a permis de vérifier
  *programmatiquement*, sur les 523 entrées réelles et pas par échantillonnage :
  - 0 identifiant dupliqué ;
  - 214/104/95/16/25/20/24/25 questions par mode, conforme au décompte annoncé ;
  - tous les `correctAnswer` et `intruder` sont des indices valides dans leurs tableaux respectifs ;
  - aucun tableau de réponses ne contient de doublon (texte identique) ;
  - les 104 questions « Qui suis-je ? » ont toutes exactement 3 indices ;
  - les 20 chronologies ont toutes exactement 4 événements, et leurs `correctOrder` sont tous des
    permutations valides de `[0..3]` ;
  - les 41 valeurs brutes de `category` couvrent exactement les clés de `CATEGORY_MAP` dans
    `catalog.ts` (aucune catégorie non mappée — confirme et reproduit indépendamment l'audit V28) ;
  - aucun champ texte obligatoire (question, explication, référence, catégorie, etc.) n'est vide.
- **Le TypeScript compilateur (`tsc` 6.0.3, installé globalement dans cet environnement, séparé
  du `typescript` du projet) a pu analyser en isolation les 4 fichiers modifiés
  (`game.tsx`, `training.tsx`, `review.tsx`, `index.tsx`)** en ignorant les erreurs attendues de
  modules non résolus (React Native/Expo ne sont pas installés ici). Aucune erreur de syntaxe
  (catégorie TS1xxx) détectée. Cela confirme que le JSX/TS est syntaxiquement valide, **mais ne
  remplace pas un vrai `tsc --noEmit` du projet complet avec ses dépendances**, qui reste à faire
  dans un environnement réseau avant publication.
- Équilibre des délimiteurs `()`/`{}`/`[]` revérifié sur les 4 fichiers modifiés : OK.

**Aucun test réel Web/Android/iOS effectué** — comme pour V26, V27 et V28, cela nécessite l'accès
réseau qui manque ici. À refaire avant publication.

### Limites connues, non corrigées dans cette version

Ces points ont été identifiés pendant l'audit mais n'ont pas été traités, soit parce qu'ils
correspondent à des fonctionnalités entières à construire (hors périmètre d'un correctif ciblé
sans possibilité de test réel), soit parce qu'ils sont mineurs :

- **Écran de transition entre équipes (§11 du cahier des charges) absent.** Le joueur suivant voit
  la nouvelle question dès le changement de manche ; il n'y a pas d'écran intermédiaire
  « À l'équipe suivante ! » avec bouton « Commencer ». Le nom de l'équipe active est bien affiché en
  permanence (bandeau de scores + en-tête), donc l'information n'est pas perdue, mais l'effet de
  surprise demandé au cahier des charges n'est pas implémenté.
- **« Mode Soirée » distinct (§24) non implémenté séparément** : l'écran Configuration actuel
  (`setup.tsx`) couvre déjà équipes/durée/catégories/modes en une seule étape rapide, mais il n'y a
  pas de raccourci « Soirée » séparé de « Nouvelle partie » sur l'accueil.
- **Réglage « Contraste élevé » et « Sons » sans effet réel.** Les deux interrupteurs existent dans
  Paramètres et sont bien persistés (AsyncStorage), mais aucun style de l'application ne change
  réellement selon `highContrast`, et aucun système audio n'existe pour `sounds` (seuls les
  vibrations et les animations de modale sont réellement branchées). Les brancher pour de vrai
  demanderait de faire dépendre `theme/styles.ts` et `theme/colors.ts` du réglage utilisateur à
  l'exécution — un changement plus large que ce qui peut être validé sans build réel, donc non
  entrepris ici pour éviter d'introduire une régression non testable.
- **Taille du texte / accessibilité renforcée (§20)** : non implémentée (le cahier des charges la
  qualifiait lui-même de conditionnelle : « si l'architecture est compatible »).
- Les tests automatisés (`npm test`, unitaires sur score/streak/sélecteur/timer) mentionnés au §36
  n'existent toujours pas dans le projet.

### Fichiers modifiés

`src/app/game.tsx`, `src/app/training.tsx`, `src/app/review.tsx`, `src/app/index.tsx`,
`src/app/settings.tsx` et `src/app/about.tsx` (numéro de version affiché), `package.json`,
`app.json` (version 1.5.4, build 8).
