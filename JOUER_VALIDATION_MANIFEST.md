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
- SHA source validé : `976173db9877d1b922743201129f5c696018b6b0`
- Périmètre : Quiz source `facts` + `extraFacts` = 79 cartes.
- État : VALIDATED
- Recheck ciblé : 3 cartes corrigées pour lever des ambiguïtés de formulation (Makpéla, Jéricho, pièce dans le poisson).
- Contrôles : structure des tuples, index de réponse, formulation, contexte, fuite de réponse, doublons et distracteurs contrôlés.
- Validation ciblée : les trois cartes modifiées ont été relues après correction ; références, réponses, explications et contexte sont cohérents.
- Exceptions ouvertes : aucune.
- CI : verte sur commit `813b69dd83dcea5982c80aa4b70103189458ca45`.
- GitHub Pages : verte sur commit `813b69dd83dcea5982c80aa4b70103189458ca45`.
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
