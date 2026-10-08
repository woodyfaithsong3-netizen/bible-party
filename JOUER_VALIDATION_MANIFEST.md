# JOUER — MANIFEST DE VALIDATION ANTI-RÉPÉTITION

Ce fichier est le registre opérationnel des blocs éditoriaux validés. Une carte VALIDATED n'est pas relue intégralement tant que le SHA de sa source n'a pas changé. Toute modification repasse uniquement la carte concernée en RECHECK.

## Bloc SEM-V54-001
- Source : `src/data/jw_enrichment_v54.ts`
- SHA source validé : `fca32bb9d0d4e26a12e52d5a2b05e5cfd6753c25`
- Périmètre : Quiz `v54-q001`–`v54-q080` + Vrai/Faux `v54-tf001`–`v54-tf080`
- Taille : 160 cartes
- État : VALIDATED
- Dernière correction : commit `4e56577cd0896b7bca76ad6607339c6d4288696c`
- Corrections ciblées : q026 et tf026, références réalignées sur `wp16 n° 2 p. 14-15`.
- Exceptions ouvertes : aucune nouvelle exception confirmée après cette correction.
- Clôture : contrôle éditorial complet effectué, CI verte et GitHub Pages verte confirmées.

## Bloc suivant à auditer
Le prochain bloc doit être identifié directement dans les pools jouables de JOUER. Ne pas reprendre SEM-V54-001 tant que son SHA reste `fca32bb9d0d4e26a12e52d5a2b05e5cfd6753c25`.

## Règles pour les autres IA
1. Lire ce manifest et `JOUER_AUDIT_MASTER.md` avant tout audit.
2. Ne jamais recommencer un bloc VALIDATED dont le SHA est inchangé.
3. Si le SHA change, ne contrôler que les cartes modifiées puis refermer le bloc avec son nouveau SHA.
4. Ne jamais déclarer VALIDATED sur la seule base d'un build vert : la validation éditoriale doit aussi être faite.
5. Ne pas toucher AVENTURE, Ma Bible ni les 125 fiches officielles de personnages dans le cadre de cet audit JOUER.

## Bloc SEM-COMP-001
- Sources : `src/data/completeTheVerseQuestions.ts`
- SHA source : `1c8bbaaeaec36f6e3382b41481861bef1e9ac58b`
- Périmètre : `complete-01`–`complete-40` + `song-01`–`song-36`
- Taille : 76 cartes
- État : VALIDATED
- Contrôles : structure 4 réponses/index valide ; cohérence des extraits et références vérifiée sur les sources JW.org déjà recensées dans le registre maître ; distracteurs contrôlés ; contexte et formulation contrôlés ; aucune exception ouverte.
- CI : verte sur commit `ef45d4729e6c2ecc36a30e4e29cbde4ac13b7132`.
- GitHub Pages : verte sur commit `ef45d4729e6c2ecc36a30e4e29cbde4ac13b7132`.
- Exceptions ouvertes : aucune.
- Clôture : ne pas réauditer tant que le SHA source reste inchangé.

## Bloc SEM-Q-001
- Source : `src/data/questions.ts`
- SHA source validé : `8dba1fb4c561f6f467ef3c4bf805defb1c50347f`
- Périmètre : **504 cartes jouables** présentes dans la source actuelle.
- État : VALIDATED
- Contrôles : structure, IDs uniques, réponses/index, fuite, doublons, formulation, contexte, catégories, références, explications, distracteurs et jouabilité.
- Revalidation ciblée : `tf-v39-06`, `tf-balance-19`, `tf-balance-24` ; `tf-jw-21` contrôlée et déjà positive.
- CI + GitHub Pages : verts.
- Exceptions ouvertes : aucune.
- Clôture : ne pas réauditer tant que le SHA source reste inchangé.


## Bloc SEM-V55-001
- Source : `src/data/jw_enrichment_v55.ts`
- SHA source validé : `cf8242fc5ef8ce02631ae5fb5058dd4f7602c0cd`
- Périmètre désormais jouable : 40 cartes : `v55-m-001`–`008`, `v55-q-001`–`008`, `v55-i-001`–`008`, `v55-c-001`–`008`, `v55-d-001`–`008`.
- État : VALIDATED
- Les 16 cartes nouvellement jouables (8 chronologies + 8 défis) ont été contrôlées individuellement et sont validées.
- Corrections historiques : `v55-q-006`, `v55-i-002`.
- Références réalignées : `v55-c-001`, `v55-c-003`, `v55-c-007`.


## Bloc SEM-V53-001
- Source : `src/data/jw_enrichment_v53.ts`
- SHA source validé : `c64b70b754c6d3c20ec4d396956730dc3c0c54a9`
- Périmètre : 141 cartes, toutes les familles V53 présentes dans le fichier.
- État : VALIDATED
- Corrections ciblées : `v53-q-038`, `v53-tf-011`, `v53-tf-015`.
- Contrôles : structure, réponses, références, contexte, formulation, distracteurs, doublons, catégories et jouabilité.
- Clôture : validation éditoriale complète du lot ; CI et GitHub Pages vertes sur le commit source de clôture.

## Bloc SEM-V56-001
- Source : `src/data/jw_enrichment_v56.ts`
- SHA courant : `abd7b9548326f36a81bdd1ec030e351ea1250c47`
- Périmètre : 55 cartes, toutes jouables via les quatre modes officiels après transformations.
- État : VALIDATED
- Corrections ciblées : `v56-q-009`, `v56-i-006`.


## Bloc SEM-L1-001
- Source : `src/data/characterQuestionsL1.ts`
- SHA source validé : `aa62897e063cc51b114d53371068fcdab388e8e6`
- Périmètre : 200 Quiz + 44 Vrai/Faux + 40 Qui est-ce ? = 284 cartes
- État : VALIDATED
- Contrôles : validation éditoriale complète, structure, réponses, références, contexte, distracteurs, doublons, fuite de réponse, indices Mystère et jouabilité.
- Corrections ciblées : 10 cartes modifiées puis recontrôlées.
- Exceptions ouvertes : aucune.
- Clôture : ne pas réauditer tant que le SHA source reste inchangé.


### Bloc SEM-V57-001 — VALIDATED — 2026-10-08
- Source : `src/data/jw_enrichment_v57.ts`
- SHA source validé : `fca34d25b39330332746c1da485fa8bb0cc6a826`
- Périmètre : 316 cartes (87 Défis historiques, 55 citations -> Quiz, 70 chronologies -> Quiz, 64 intrus -> Quiz, 40 anciens Time's Up -> Qui est-ce ?).
- État : VALIDATED
- Contrôles : structure, IDs, réponses/index, fuite de réponse, doublons, formulation, contexte, exactitude biblique, références, distracteurs, chronologies, intrus, indices et jouabilité après transformation.
- Corrections ciblées : `v57-q-047`, `v57-q-056`, `v57-c-031`, `v57-c-034`, `v57-c-035`, `v57-c-036`, `v57-d-048`.
- Résultats structurels : 316 IDs uniques ; aucune anomalie structurelle résiduelle dans le passage final.
- Exceptions ouvertes : aucune.
- Règle : ne pas réauditer tant que le SHA source reste inchangé.


### Bloc SEM-L2-001 — VALIDATED — 2026-10-08
- Source : `src/data/characterQuestionsL2.ts`
- SHA source validé : `0fe1be81674bbf026dab683ca0b21c829a0eef68`
- Périmètre : 200 Quiz + 50 Vrai/Faux + 40 Qui est-ce ? = 290 cartes.
- État : VALIDATED
- Contrôles : structure, 4 réponses/index, fuite de réponse, doublons exacts, doublons croisés avec L1, références non vides, formulations, autonomie, contexte, exactitude biblique, distracteurs, indices Mystère et jouabilité.
- Résultats : 290 IDs uniques ; 200 Quiz sans doublon de question ni fuite de réponse ; 50 Vrai/Faux structurellement valides ; 40 Qui est-ce ? avec au moins 3 indices et sans fuite de réponse ; aucun doublon exact avec les questions Quiz de L1.
- Exceptions ouvertes : aucune.
- Règle : ne pas réauditer tant que le SHA source reste inchangé.


### Bloc SEM-L3-001 — VALIDATED — 2026-10-08
- Source : `src/data/characterQuestionsL3.ts`
- SHA source validé : `614f691ddb4ba9401de051238b3a5f98f66ce184`
- Périmètre : 200 Quiz + 48 Vrai/Faux + 40 Qui est-ce ? = 288 cartes.
- État : VALIDATED
- Contrôles : structure, réponses/index, fuite de réponse, doublons, références, formulations, Vrai/Faux ambigus, indices Mystère et jouabilité.
- Corrections ciblées : `char-l3-tf-45-3`, `char-l3-tf-54-3`, `char-l3-tf-55-1`.
- Résultats finaux : 288 IDs uniques, 200 Quiz sans doublon ni fuite, 48 Vrai/Faux contrôlés, 40 Qui est-ce ? sans problème d’indices.
- Exceptions ouvertes : aucune.
- Règle : ne pas réauditer tant que le SHA source reste inchangé.


## Bloc SEM-L4-001
- Source : `src/data/characterQuestionsL4.ts`
- SHA source validé : `3aff9a2e3e7d12aa70113f7eba45bfe5822cf004`
- Périmètre : 200 Quiz + 52 Vrai/Faux + 40 Qui est-ce ? = 292 cartes.
- État : VALIDATED
- Contrôles : structure, réponses/index, fuite de réponse, doublons, références, formulations, Vrai/Faux, autonomie liée au personnage, indices Mystère et jouabilité.
- Corrections ciblées : références Mystère, formulations/références Quiz et Vrai/Faux, et réalignement de `char-l4-q-64-7` / `char-l4-q-67-10` avec leur personnage.
- Exceptions ouvertes : aucune.
- Clôture : CI et GitHub Pages vertes sur le commit de clôture courant.

## Bloc SEM-L5-001
- Source : `src/data/characterQuestionsL5.ts`
- SHA source validé : `2491e02cad2a8c8f5165d8cfa43a8d78885d5d13`
- Périmètre : 200 Quiz + 50 Vrai/Faux + 40 Qui est-ce ? = 290 cartes.
- État : VALIDATED
- Contrôles : structure, réponses/index, fuite de réponse, doublons, références, formulation, autonomie liée au personnage, Vrai/Faux, indices Mystère et jouabilité.
- Corrections ciblées : 5 Vrai/Faux réalignés sur leur `characterId`, puis recontrôlés.
- Exceptions ouvertes : aucune.
- CI : verte sur `2a21beae348791025ce2583f1da0666fb0544cab`.
- GitHub Pages : verte sur `2a21beae348791025ce2583f1da0666fb0544cab`.
- Clôture : ne pas réauditer tant que le SHA source reste inchangé.


## Bloc SEM-L6-001
- Source : `src/data/characterQuestionsL6.ts`
- SHA source validé : `b45ce5764d4499fd8d6f9195cf99cb551b9e1ecc`
- Périmètre : 250 Quiz + 95 Vrai/Faux + 50 Qui est-ce ? = 395 cartes.
- État : VALIDATED
- Contrôles : validation éditoriale complète, structure, réponses/index, références, contexte, formulation, autonomie liée au personnage, Vrai/Faux, indices Mystère, doublons, fuite de réponse et jouabilité.
- Corrections ciblées : références Joël et indices Mystère réalignés.
- Exceptions ouvertes : aucune.
- Clôture : CI et GitHub Pages vertes sur le commit source de clôture.


## SEM-V58-001
- Source : `src/data/jw_enrichment_v58.ts`
- SHA source validé : `c94576dc570223fb5601e62c4532a9a4bdb162bf`
- Périmètre : 24 cartes jouables.
- État : VALIDATED
- Contrôles : structure, réponses/index, fuite, formulation V/F, exactitude, références, indices Mystère, contexte et jouabilité.
- Corrections : `v58-m-005`, `v58-tf-003`, `v58-tf-006`.
- CI + GitHub Pages : verts.

## SEM-V104-001
- Source : `src/data/jw_enrichment_v104.ts`
- SHA source validé : `9b10eb14e06d33470a565e77fc375b7461243aa5`
- Périmètre : 40 cartes.
- État : VALIDATED
- Corrections : `v104-tf-008`, `v104-tf-012`.
- CI + GitHub Pages : verts.

## SEM-V105-001
- Source : `src/data/jw_enrichment_v105.ts`
- SHA source validé : `401397a34f80594232a321227f9c4e6d9b146ef4`
- Périmètre : 42 cartes.
- État : VALIDATED
- Corrections : `v105-tf001`, `v105-tf004`, `v105-tf005`, `v105-tf008`, `v105-m002`.
- CI + GitHub Pages : verts.

## SEM-V106-001
- Source : `src/data/jw_enrichment_v106_characters.ts`
- SHA source validé : `f7a7bb36331075e1f01b9bbcca4cb211c011ae6e`
- Périmètre : 60 cartes.
- État : VALIDATED
- CI + GitHub Pages : verts.

## SEM-V107-001
- Source : `src/data/jw_enrichment_v107_characters.ts`
- SHA source validé : `d3fce104c0553b0b0d7851a2bb273e9a93009366`
- Périmètre : 40 cartes.
- État : VALIDATED
- CI + GitHub Pages : verts.

## SEM-V108-001
- Source : `src/data/jw_enrichment_v108_characters.ts`
- SHA source validé : `b049cf4bf90aa6b607c4c507350aa1a117eda4aa`
- Périmètre : 30 cartes.
- État : VALIDATED
- CI + GitHub Pages : verts.


## SEM-JWCAT-001
- Source : `src/data/jwCategories.ts`
- SHA source validé : `e26c907e6322f5a3598db1300885097d583e7f36`
- Périmètre : 187 cartes jouables.
- État : VALIDATED
- Répartition : 96 Quiz, 39 Vrai/Faux, 12 Mystère, 8 Time’s Up, 8 Citations, 8 Chronologie, 8 Intrus, 8 Défi.
- Corrections : V/F Révélation, références manuscrits, 2 Timothée 4:13, procès de Jésus, Michée, maladies cutanées, chronologie jwcat-chrono-2.
- CI + GitHub Pages : verts.


## SEM-CHRONO-001
- Source : `src/data/chronologyQuestions.ts`
- SHA : `5b978b2b521014e7b9c2c816c44bfbe04347c1a3`
- 52 cartes Chronologie → Quiz.
- État : VALIDATED
- CI + GitHub Pages : verts.

## SEM-PREACH-001
- Source : `src/data/preachingTruthQuestions.ts`
- SHA : `f97ca0bad2b54fada132acb0b8ab442692688fd0`
- 34 cartes de vérités bibliques → Quiz.
- État : VALIDATED
- Corrections : appendice-a-01 et appendice-a-33.
- CI + GitHub Pages : verts.


## SEM-COMP-001 — VALIDATED
- Source : `src/data/completeTheVerseQuestions.ts`
- SHA : `4b816932b661b07bcea440d0ef21e6134e66b924`
- 76 cartes ; structure, réponses/index, doublons et fuites contrôlés.
- État : VALIDATED ; CI + GitHub Pages verts.

## SEM-V61-001 — VALIDATED
- Source : `src/data/jw_enrichment_v61.ts`
- SHA : `f41d4b7f55357fe5efaab9ebfae3db4c765c47e4`
- 9 cartes : 1 Citation → Quiz + 8 Mystère → Qui est-ce ?.
- État : VALIDATED ; indices, fuites, mots interdits, références et explications contrôlés.
- CI + GitHub Pages verts.


### Revalidation ciblée — V/F négatifs — 2026-10-08
- `src/data/questions.ts` — nouveau SHA `cf5e82c8f555b69651d192f62febb1b99eeb937d`.
- Cartes corrigées et recontrôlées : `tf-v39-06`, `tf-balance-19`, `tf-balance-24`.
- Les anciennes formulations négatives ont été remplacées par des affirmations directes vraies ; réponses et explications réalignées.
- `tf-jw-21` était déjà sous sa forme positive dans le pool réellement jouable ; aucune modification nécessaire.
- `src/data/jw_enrichment_v53.ts` — nouveau SHA `dc99d9d3b4f66be7a0b82242275d16ade8baf6f2`.
- Cartes corrigées et recontrôlées : `v53-tf-008`, `v53-tf-018`, `v53-tf-040`.
- Contrôles : vérité biblique, réponse, explication, référence et formulation directe.
- CI + GitHub Pages : verts sur le commit de clôture `b8d94aff3ad448ba688c4ea78ce68dacc4d9a6f9`.
- Les autres blocs VALIDATED restent inchangés et ne sont pas réaudités.


## Revalidation finale des modifications V/F — 2026-10-08
- `src/data/questions.ts` — SHA final validé : `cf5e82c8f555b69651d192f62febb1b99eeb937d`.
- Cartes recontrôlées : `tf-v39-06`, `tf-balance-19`, `tf-balance-24`. Formulations directes, réponses, explications et références alignées.
- `src/data/jw_enrichment_v53.ts` — SHA final validé : `dc99d9d3b4f66be7a0b82242275d16ade8baf6f2`.
- Cartes recontrôlées : `v53-tf-008`, `v53-tf-018`, `v53-tf-040`. Formulations directes, réponses, explications et références alignées.
- CI + GitHub Pages : verts sur le commit de clôture V53 `b8d94aff3ad448ba688c4ea78ce68dacc4d9a6f9` et les contrôles de la branche principale sont verts.
- Ces deux blocs restent VALIDATED tant que leurs SHA restent inchangés.


## Bloc SEM-RUNTIME-001 — CHECKING — 2026-10-08
- Sources : `src/data/gameContent.ts` + `audit-content.mjs`
- Objectif : prouver que les quatre modes officiels consomment réellement les banques jouables, y compris les transformations Quiz/Citations/Intrus/Chronologie/Time's Up et le sous-pool Vrai/Faux.
- Correction appliquée : toutes les cartes `trueFalseQuestions` sont désormais conservées dans `GAME_CONTENT.truefalse` ; l'ancien échantillonnage supprimait une partie des VRAI et rendait ces cartes définitivement inatteignables.
- Contrôle ajouté : `audit-content.mjs` vérifie les injections de chaque banque dans les pools réellement consommés et interdit toute troncature du deck Vrai/Faux.
- SHA `gameContent.ts` : `d0ff98fa27de12e6f64ba9311ae4e401c35e23f6`
- SHA `audit-content.mjs` : `ff95252050cf5e42d3fcd3cac531e0bab9a6294c`
- État : CHECKING jusqu'à CI verte.
- Exceptions : aucune connue.
