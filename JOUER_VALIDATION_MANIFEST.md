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
- SHA source validé : `e962ce1ed2f3f6c1fc9aa7b7234273236b2571bd`
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
- SHA source validé : `dc8522dfa8cf78e2e7b60a66180d39fe52dec012`
- Périmètre réellement jouable : `v55-m-001`–`v55-m-008` (Qui est-ce ?), `v55-q-001`–`v55-q-008` (converties en Quiz), `v55-i-001`–`v55-i-008` (converties en Quiz) = **24 cartes jouables**.
- Cartes non distribuées par `GAME_CONTENT` : `v55-c-001`–`v55-c-008` et `v55-d-001`–`v55-d-008` (présentes dans le fichier source mais hors pool actuellement jouable).
- État : VALIDATED
- Corrections ciblées : `v55-q-006` (question rendue exacte par rapport à la réponse) ; `v55-i-002` (intrus rendu non ambigu : trois psaumes contre le récit de Genèse 37).
- Contrôles éditoriaux : 24 cartes jouables relues pour contexte, réponse, références, distracteurs, formulation, fuite de réponse et doublons.
- Exceptions ouvertes : aucune.
- CI : verte sur commit `e328001239d1795af2097a7776d7974bef3bc4eb`.
- GitHub Pages : verte sur commit `e328001239d1795af2097a7776d7974bef3bc4eb`.
- Clôture : ne pas réauditer tant que le SHA source reste inchangé.
