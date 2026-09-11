# Bible Party V30 — écran de transition d'équipe (§11)

## Version 1.5.5

Cette version traite une seule limitation connue laissée ouverte en V29 : l'absence d'écran de
transition entre les tours (§11 du cahier des charges). Aucune autre zone du code n'a été
modifiée, afin de garder cette étape petite et vérifiable.

### Ajouté

1. **Écran de transition entre équipes.** Dans `src/app/game.tsx`, `next()` déclenchait
   auparavant immédiatement `setRoundIndex` et `setActiveTeam`, ce qui affichait la question
   suivante dès l'appui sur « Manche suivante », avant même que l'appareil soit passé à l'équipe
   suivante — l'équipe qui venait de jouer voyait donc la prochaine question en premier.
   Désormais, quand l'équipe active change réellement (parties à plusieurs équipes, hors mode
   entraînement solo), `next()` n'applique plus l'avancée tout de suite : elle est stockée dans
   `pendingAdvance` et une modale plein écran s'affiche — « À l'équipe suivante ! » puis le nom de
   l'équipe suivante, puis un bouton « COMMENCER » — avant que la question ne soit révélée. En
   mode solo, ou si l'équipe active ne change pas, l'avancée reste immédiate comme avant (pas de
   transition inutile).
2. **Le chrono général de la partie est mis en pause pendant la transition**, comme il l'est déjà
   pendant la pause manuelle : le timer étant basé sur une échéance absolue (`gameDeadline`,
   conformément à la logique de robustesse du §32), le temps passé sur l'écran de transition est
   ajouté à cette échéance au moment où l'équipe suivante appuie sur « COMMENCER », pour qu'aucune
   équipe ne perde de temps de jeu pendant la passation de l'appareil.
3. Les boutons Pause / action principale / Passer / Quitter sont désactivés pendant la
   transition, et `next()` ignore tout appel si une transition est déjà en cours (garde-fou contre
   un double appui, cohérent avec l'exigence du §31 « aucun score ne doit être attribué deux
   fois » — ici appliqué à l'avancée de tour).

### Ce qui a été vérifié

Comme pour toutes les versions précédentes, aucun accès réseau n'est disponible dans cet
environnement (`registry.npmjs.org` toujours hors liste blanche), donc ni `npm install`, ni
`expo start`, ni un rendu réel de l'application n'ont pu être testés ici.

Deux vérifications statiques ont été faites sur le fichier modifié :

- `tsc --noEmit` (TypeScript 6.0.3, installé séparément du projet) sur `src/app/game.tsx` en
  isolation, erreurs de résolution de module ignorées (React Native/Expo non installés ici) :
  aucune erreur de syntaxe TS1xxx.
- Vérification programmatique de l'équilibrage des accolades/parenthèses du fichier entier après
  modification (aucun bloc mal fermé).

Cela confirme que le code est syntaxiquement valide, **pas qu'il s'exécute correctement**. La
logique de la nouvelle transition (relecture manuelle du flux `next()` → `pendingAdvance` →
`confirmTransition()`, et de l'ajustement de `gameDeadline.current`) a été relue à la main mais
jamais exécutée dans un simulateur ou un navigateur.

### Limites connues (inchangées, à traiter ensuite selon l'ordre de priorité §55)

- Réglages **Sons** et **Contraste renforcé** toujours non branchés dans l'interface (haptics et
  animations le sont, depuis V26/V29). Le contraste renforcé nécessiterait de faire de
  `src/theme/colors.ts` une fonction paramétrée plutôt qu'un objet statique, ce qui touche les 8
  écrans et n'a pas été tenté ici sans pouvoir le vérifier à l'exécution.
- Aucun test automatisé (`npm test`) n'existe encore dans le projet.
- Aucun test réel Web / Android / iOS possible dans cet environnement, toujours faute de réseau.
- Build Android (APK) toujours non tenté pour la même raison.

### Recommandation

Si un environnement avec accès réseau est disponible, l'étape la plus utile avant de poursuivre
serait `npm install && npx tsc --noEmit && npx expo start --web`, pour valider à l'exécution la
nouvelle transition d'équipe (en particulier avec 2, 3 et 4 équipes, et en vérifiant que le temps
affiché ne « saute » pas après un appui sur COMMENCER).
