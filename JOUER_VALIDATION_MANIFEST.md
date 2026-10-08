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
- État : CHECKING
- Contrôles déjà effectués : structure 4 réponses/index valide ; vérifications ciblées JW.org sur Psaumes, Matthieu, Actes et plusieurs cantiques/chansons.
- Points confirmés : les extraits vérifiés des cantiques 22, 38, 40, 49, 81, 134, 135, 154 et des chansons contrôlées concordent avec les pages officielles JW.org. citeturn0search4turn0search1turn0search0turn0search3turn2search0turn2search1turn2search3turn2search2turn3search2turn3search1turn3search0turn3search4turn4search1turn4search2turn4search0turn4search3turn5search0turn5search1
- Exceptions ouvertes : aucune à ce stade.
- Règle : ne pas déclarer VALIDATED avant la passe éditoriale complète + CI verte + GitHub Pages verte.
