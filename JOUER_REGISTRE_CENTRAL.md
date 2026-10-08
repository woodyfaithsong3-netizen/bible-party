# JOUER — REGISTRE CENTRAL DE VALIDATION

> Registre opérationnel unique pour savoir ce qui est présent, accessible et validé sans refaire les lots déjà clos. Périmètre strict : JOUER. AVENTURE, Ma Bible et les 125 fiches officielles de personnages sont hors périmètre.

## 1. Inventaire de référence

- Inventaire réconcilié : **3 632 cartes uniques actuellement jouables** — 3 155 cartes dans 73 banques de contenu supplémentaires et 477 cartes de base conservées dans `questions.ts`. Contrôle automatisé : 3 632/3 632 cartes routées, 73/73 banques supplémentaires reliées, 0 banque non routée.
- Le total exclut les cartes de base intentionnellement filtrées parce qu’elles dupliquent des cartes conservées dans leurs banques sources. Le routage et la validation éditoriale restent deux contrôles distincts.
- L’estimation historique « environ 5 000 questions » n’est pas confirmée par l’inventaire courant. Ne pas l’utiliser comme total.
- Les résultats doivent être recalculés par le contrôle du dépôt avant toute annonce de progression. Un CI vert prouve les contrôles automatisés exécutés, pas à lui seul la qualité éditoriale de chaque carte.

## 2. Les quatre banques logiques officielles

Les quatre pools logiques sont déjà centralisés dans `src/data/gameContent.ts`. On conserve les sources spécialisées en modules pour ne pas casser les imports, les transformations ni les identifiants ; on ne fusionne pas aveuglément des dizaines de tableaux hétérogènes en quatre fichiers géants.

| Banque logique | Pool moteur | Contenu qui y est distribué |
|---|---|---|
| Quiz | `GAME_CONTENT.quiz` | Questions Quiz, citations converties en Quiz, intrus convertis en Quiz et cartes historiques intégrées au pool Quiz |
| Vrai / Faux | `GAME_CONTENT.truefalse` | Toutes les affirmations de `trueFalseQuestions`, ordonnées sans supprimer les cartes |
| Qui est-ce ? | `GAME_CONTENT.mystery` | Cartes Mystère et anciennes cartes Time’s Up transformées en indices |
| Compléter les paroles | `GAME_CONTENT.complete` | Versets à compléter et chansons/cantiques à compléter |

**Règle :** une carte source conserve son ID et sa provenance, même si elle est transformée pour le mode cible. Le routage et la validation éditoriale sont deux statuts distincts.

## 3. Sources de contenu connues

Le pipeline de routage et les preuves détaillées restent dans `audit-content.mjs` et dans le manifeste. Les sources spécialisées comprennent :

- `src/data/questions.ts`
- `src/data/characterQuestionsL1.ts` à `src/data/characterQuestionsL6.ts`
- `src/data/jwCategories.ts`
- `src/data/chronologyQuestions.ts`
- `src/data/preachingTruthQuestions.ts`
- `src/data/completeTheVerseQuestions.ts`
- `src/data/jw_enrichment_v53.ts`, `v54.ts`, `v55.ts`, `v56.ts`, `v57.ts`, `v58.ts`, `v61.ts`, `v104.ts`, `v105.ts`, `v106_characters.ts`, `v107_characters.ts` et `v108_characters.ts`.

Ne pas ajouter les fichiers Aventure/Ma Bible ni `characterLearning.ts` au périmètre de validation JOUER.

## 4. Statuts obligatoires

| Statut | Sens |
|---|---|
| `TODO` | carte actuelle non validée |
| `CHECKING` | vérification en cours |
| `FIXED` | correction appliquée, pas encore revalidée |
| `RECHECK` | carte changée depuis sa validation précédente |
| `VALIDATED` | question/affirmation, réponse, distracteurs/indices, explication, référence, catégorie et jouabilité vérifiés |
| `BLOCKED` | dépend d'une source ou d'une décision |

Une carte ne devient pas `VALIDATED` parce que le build est vert. Les blocs du `JOUER_VALIDATION_MANIFEST.md` gardent les preuves et SHA des lots validés. Si le SHA source a changé, ne rouvrir que les cartes effectivement modifiées, puis mettre à jour la preuve.

## 5. Comptage sans répétition

À chaque passe, publier séparément :
1. cartes source uniques présentes ;
2. cartes effectivement accessibles dans chacun des quatre pools ;
3. cartes éditorialement validées sur le SHA courant ;
4. cartes encore TODO/CHECKING/FIXED/RECHECK/BLOCKED ;
5. doublons/IDs en conflit et cartes retirées intentionnellement.

**Ne jamais déduire le nombre restant du nombre de mentions `VALIDATED` dans les documents.** Une mention de bloc n'est ni une carte ni un compteur fiable si le périmètre exact du bloc n'est pas rapproché de la source actuelle.

## 6. État de départ pour la réconciliation

- Routage global courant : 3 632/3 632 cartes uniques, 73 banques supplémentaires + 477 cartes de base, 0 banque non routée.
- Les blocs éditoriaux déjà inscrits dans le manifeste sont conservés ; aucun n'est réinitialisé.
- Le rapprochement SHA/périmètres a isolé 17 cartes V54 Qui est-ce ? auparavant absentes des blocs éditoriaux documentés. Elles ont maintenant été relues et ajoutées comme bloc distinct ; les autres blocs inchangés sont conservés.


## 7. Clôture de la réconciliation — 2026-10-09

- Inventaire : **3 632 cartes uniques jouables**.
- Routage : **3 632/3 632**, 73/73 banques supplémentaires avec preuve de route, plus 477 cartes de base conservées ; aucune banque non routée.
- Éditorial : les 17 cartes V54 Qui est-ce ? (`v54-m-001`–`010`, `v54-tu-002`–`008`) sont maintenant suivies dans un bloc distinct et validées.
- Statut du registre : toutes les cartes actuelles sont rattachées à un bloc VALIDATED ; aucune carte TODO/RECHECK restante dans le périmètre courant.
- Règle anti-répétition : ne rouvrir que les cartes modifiées ou dont le périmètre/SHA ne correspond plus.
