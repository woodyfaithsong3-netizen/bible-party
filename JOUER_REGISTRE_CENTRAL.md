# JOUER — REGISTRE CENTRAL DE VALIDATION

> Registre opérationnel unique pour savoir ce qui est présent, accessible et validé sans refaire les lots déjà clos. Périmètre strict : JOUER. AVENTURE, Ma Bible et les 125 fiches officielles de personnages sont hors périmètre.

## 1. Inventaire de référence

- Inventaire réconcilié : **3 640 cartes uniques actuellement jouables** — 3 163 cartes dans 74 banques de contenu supplémentaires et 477 cartes de base conservées dans `questions.ts`. Contrôle automatisé : 3 640/3 640 cartes routées, 73/74 banques supplémentaires reliées, 0 banque non routée.
- Le total exclut les cartes de base intentionnellement filtrées parce qu’elles dupliquent des cartes conservées dans leurs banques sources. Le routage et la validation éditoriale restent deux contrôles distincts.
- L’estimation historique « environ 5 000 questions » n’est pas confirmée par l’inventaire courant. Ne pas l’utiliser comme total.
- Le premier rapprochement automatique a détecté une banque V61 « Mot interdit » absente du filtre d’inventaire et a corrigé le total de référence à 3 640 cartes. Les résultats doivent être recalculés par le contrôle du dépôt avant toute annonce de progression. Un CI vert prouve les contrôles automatisés exécutés, pas à lui seul la qualité éditoriale de chaque carte.

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

- Routage global courant : 3 640/3 640 cartes uniques, 74 banques supplémentaires + 477 cartes de base, 0 banque non routée.
- Les blocs éditoriaux déjà inscrits dans le manifeste sont conservés ; aucun n'est réinitialisé.
- Le rapprochement SHA/périmètres a isolé 17 cartes V54 Qui est-ce ? auparavant absentes des blocs éditoriaux documentés. Elles ont maintenant été relues et ajoutées comme bloc distinct ; les autres blocs inchangés sont conservés.


## 7. Réconciliation du comptage — 2026-10-09

### Chiffres de référence

| Mesure | Résultat | Preuve / interprétation |
|---|---:|---|
| Cartes uniques jouables | **3 640** | Inventaire global `SEM-ROUTING-GLOBAL-002` |
| Cartes avec route démontrée | **3 640 / 3 640** | Contrôle automatique des sources et transformations |
| Banques supplémentaires avec preuve de route | **73 / 73** | Contrôle automatique |
| IDs déclarés dans `questions.ts` | 504 | 27 sont retirés intentionnellement car leurs copies spécialisées sont conservées |
| Cartes de base conservées dans le total unique | **477** | 504 − 27 exclusions éditoriales |
| Banques sources sans route démontrée | **0** | Contrôle automatique |
| Cartes V54 Qui est-ce ? ajoutées à la couverture éditoriale | **17 / 17** | Bloc `SEM-V54-002`, SHA V54 courant |
| Cartes sans bloc éditorial VALIDATED correspondant au SHA courant | **0 selon le manifest** | Les sources courantes sont rattachées aux blocs du `JOUER_VALIDATION_MANIFEST.md` |

**Pourquoi ne pas additionner les tailles des blocs ?** Plusieurs blocs sont des sous-ensembles d’une même source et certaines cartes existent à la fois dans une source de base et dans une banque spécialisée. Le total officiel est celui des IDs uniques après déduplication : 3 640. Les nombres de titres de blocs ou les sommes de leurs tailles ne représentent pas le total de cartes.

### Quatre banques logiques — sans fusion risquée des fichiers sources

| Banque logique | Pool runtime | Sources transformées incluses |
|---|---|---|
| **Quiz** | `GAME_CONTENT.quiz` | Quiz, citations, intrus, défis historiques et chronologie |
| **Vrai / Faux** | `GAME_CONTENT.truefalse` | Toutes les cartes `trueFalseQuestions`, sans échantillonnage qui en supprime |
| **Qui est-ce ?** | `GAME_CONTENT.mystery` | Mystères et cartes Time’s Up converties en indices |
| **Compléter les paroles** | `GAME_CONTENT.complete` | Versets et chansons/cantiques à compléter |

Les sources physiques restent dans leurs modules actuels pour préserver les imports, transformations et IDs. Le jeu ne consomme que ces quatre pools logiques ; ce registre et le manifest centralisent le suivi.

### Règles à chaque passe

1. Recalculer le total d’IDs uniques et le routage avec `npm run audit:content`.
2. Comparer les SHA courants des sources aux SHA du manifest.
3. Ne réouvrir que les cartes modifiées ou celles dont le périmètre/SHA ne correspond plus.
4. Ne jamais déduire le nombre de cartes à partir du nombre de titres de blocs.
5. Un build vert ne suffit pas à valider une carte : la preuve éditoriale doit rester inscrite dans le manifest.

## 8. Contrôle reproductible des statuts

- Commande : \`npm run audit:jouer:validation\`.
- La commande recalcule les SHA Git des sources, compare les blocs \`VALIDATED\` et leurs tailles dans le manifest, puis affiche le total unique, le total couvert et le nombre restant.
- Elle échoue si une source n'a pas de couverture validée au SHA courant, si des cartes restent sans bloc, ou si le total inventorié diffère du total de référence. Elle est exécutée dans CI avant l'export Web.
- Les quatre modes sont des pools logiques dans \`src/data/gameContent.ts\`. Les fichiers sources spécialisés restent séparés afin de préserver les transformations et les IDs ; leur statut est désormais vérifiable par cette commande.


