# Bible Party V27 — correction de la difficulté du contenu

## Version 1.5.2

### Bug corrigé (priorité 2 de l'audit)
- **Difficulté assignée par position, pas par contenu.** Dans `src/data/questions.ts`, les questions Quiz, Qui suis-je ? et Vrai/Faux recevaient leur difficulté selon leur rang dans le tableau combiné (`i < 9 ? 'easy' : i < 18 ? 'medium' : 'hard'`), sans lien avec leur contenu réel. Résultat avant correctif :
  - Quiz (214) : 9 easy / 9 medium / **196 hard**
  - Qui suis-je ? (104) : 9 easy / 9 medium / **86 hard**
  - Vrai/Faux (95) : 7 easy / 7 medium / **81 hard**

### Ce qui a été fait
- Chaque question a été relue individuellement (les 214 quiz, les 104 personnages mystère, les 95 vrai/faux) et classée selon la notoriété réelle du personnage/événement biblique concerné et la difficulté du piège pour les vrai/faux.
- La difficulté n'est plus calculée par une formule : trois tableaux explicites (`quizDifficulties`, `mysteryDifficulties`, `tfDifficulties`) associent maintenant un niveau réel à chaque entrée, dans l'ordre où elle apparaît dans la banque.
- Nouvelle répartition :
  - Quiz : 47 facile / 135 moyen / 32 difficile
  - Qui suis-je ? : 18 facile / 53 moyen / 33 difficile (les personnages volontairement peu connus ajoutés en V25 — Guéhazi, Zorobabel, Belschatsar, Darius le Mède, Gamaliel, etc. — sont bien classés "difficile")
  - Vrai/Faux : 26 facile / 60 moyen / 9 difficile
- Le total reste 523 entrées (vérifié programmatiquement), aucun ID modifié, aucune question supprimée ou ajoutée.

### Vérifications techniques réellement effectuées
- Comptage programmatique confirmant 523 entrées et les nouvelles répartitions ci-dessus.
- Équilibre des délimiteurs `()`/`{}`/`[]` vérifié par script sur le fichier modifié.
- `tsc --noEmit` autonome sur `src/data/questions.ts` : aucune erreur hors "Cannot find module '@/types'" (attendue, dépendances non installées).
- `npm install` toujours impossible ici (`403 Forbidden`) : pas de test Web/Android/iOS réel possible dans cet environnement.

### Limites de cet exercice
- La classification de difficulté reste un jugement éditorial (notoriété du personnage/événement, piège du vrai/faux) et non une mesure objective. Elle est cohérente et documentée, mais pourrait être affinée par une relecture humaine supplémentaire avant publication.
