# JOUER — MANIFEST DE VALIDATION ANTI-RÉPÉTITION

Ce fichier est le registre opérationnel des blocs éditoriaux validés. Une carte VALIDATED n'est pas relue intégralement tant que le SHA de sa source n'a pas changé. Toute modification repasse uniquement la carte concernée en RECHECK.

## Bloc SEM-V54-001
- Source : `src/data/jw_enrichment_v54.ts`
- SHA source validé : `c8657e1a98500a36c7f9a082baa99231e8bf2dd6`
- Périmètre : Quiz `v54-q001`–`v54-q080` + Vrai/Faux `v54-tf001`–`v54-tf080`
- Taille : 160 cartes
- État : VALIDATED
- Dernière correction : commit `4e56577cd0896b7bca76ad6607339c6d4288696c`
- Corrections ciblées : q026 et tf026, références réalignées sur `wp16 n° 2 p. 14-15`.
- Exceptions ouvertes : aucune nouvelle exception confirmée après cette correction.
- Clôture : contrôle éditorial complet effectué, CI verte et GitHub Pages verte confirmées.

## Bloc SEM-V54-002 — VALIDATED — 2026-10-09
- Source : `src/data/jw_enrichment_v54.ts`
- SHA source validé : `c8657e1a98500a36c7f9a082baa99231e8bf2dd6`
- Périmètre : `v54-m-001`–`v54-m-010` + `v54-tu-002`–`v54-tu-008`.
- Taille : 17 cartes converties en Qui est-ce ? par le moteur actuel.
- État : VALIDATED.
- Contrôles individuels : réponse adaptée au mode, indices suffisamment distinctifs, explication/référence cohérentes, aucune réponse de type lieu/chapitre dans le pool Qui est-ce ?.
- Corrections : `v54-m-006` → Darius (roi mède), `v54-m-010` → Nabuchodonosor ; `v54-tu-002` → Jéhovah, `v54-tu-003` → Zerubbabel, `v54-tu-007` → Élisée, `v54-tu-008` → Daniel.
- Les dix cartes `v54-m-001`–`010` et les sept cartes `v54-tu-002`–`008` ont toutes été contrôlées ; aucune exception ouverte.
- Règle : ne pas réauditer tant que le SHA source reste inchangé.

## Note historique — ordre d'audit initial (remplacée)
Cette instruction est historique : les blocs suivants ont depuis été audités et consignés dans ce manifest. La source de vérité est la liste des blocs VALIDATED et leurs SHA actuels.

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
- SHA source validé : `a8b94a251151f930645994ce86b0fd634b1c722a`
- Périmètre : 504 IDs déclarés dans la source ; après filtres d’exclusion, 477 cartes de base restent dans les pools. Les copies conservées dans leurs banques spécialisées sont comptées une seule fois dans l’inventaire global.
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
- SHA source validé : `dc99d9d3b4f66be7a0b82242275d16ade8baf6f2`
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
- SHA source validé : `f7cc8d961351cc35231bcc09c2069b63e81018eb`
- Périmètre : 200 Quiz + 44 Vrai/Faux + 40 Qui est-ce ? = 284 cartes
- État : VALIDATED
- Contrôles : validation éditoriale complète, structure, réponses, références, contexte, distracteurs, doublons, fuite de réponse, indices Mystère et jouabilité.
- Corrections ciblées : 10 cartes modifiées puis recontrôlées.
- Exceptions ouvertes : aucune.
- Revalidation ciblée complémentaire : `char-l1-q-18-08` remplace une répétition sur le rétablissement de Pierre par sa réponse à Jésus lorsqu’il lui demanda s’il l’aimait (Jean 21:15-17).
- Revalidation ciblée complémentaire : `char-l1-q-18-05` corrige la référence pour l’action de Jésus envers Pierre (Jean 21:15-17) ; `char-l1-q-18-07` remplace une répétition sur le reniement par le nom Céphas/Pierre donné à Simon (Jean 1:42) ; `char-l1-q-18-09` demande ce que Jésus demanda à Pierre à trois reprises après sa résurrection (Jean 21:15-17), plutôt que de répéter qu’il pleura après son reniement.
- Revalidation ciblée après détection de répétitions : `char-l1-q-09-09` (demande de Ruth à Boaz sur l’aire de battage, Ruth 3:7-9), `char-l1-q-12-07` (richesses et gloire accordées à Salomon, 1 Rois 3:12-13), `char-l1-q-13-07` (réponse de Jéhovah sur le mont Carmel, 1 Rois 18:36-38), `char-l1-q-20-07` (surnom de Jacques et Jean, Marc 3:17) et `char-l1-q-20-08` (mission confiée à Pierre et Jean avant la Pâque, Luc 22:7-13). Les questions répétitives ont été remplacées par des faits distincts et les réponses/index/références contrôlés.
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
- SHA source validé : `39064b62459fd29043d36d961cc4c21b868e5676`
- Périmètre : 200 Quiz + 50 Vrai/Faux + 40 Qui est-ce ? = 290 cartes.
- État : VALIDATED
- Contrôles : structure, 4 réponses/index, fuite de réponse, doublons exacts, doublons croisés avec L1, références non vides, formulations, autonomie, contexte, exactitude biblique, distracteurs, indices Mystère et jouabilité.
- Résultats : 290 IDs uniques ; 200 Quiz sans doublon de question ni fuite de réponse ; 50 Vrai/Faux structurellement valides ; 40 Qui est-ce ? avec au moins 3 indices et sans fuite de réponse ; aucun doublon exact avec les questions Quiz de L1.
- Exceptions ouvertes : aucune.
- Règle : ne pas réauditer tant que le SHA source reste inchangé.


- Revalidation ciblée après correction : `char-l2-q-21-05` — formulation et référence corrigées sur Genèse 24:62-67 ; les autres cartes inchangées conservent leur validation antérieure.
- Revalidation ciblée complémentaire : 19 cartes du bloc Isaac/Samson revues pour remplacer les distracteurs manifestement hors sujet par des choix bibliques plausibles ; `char-l2-q-22-07` reformulée pour être naturelle. Les index de bonnes réponses sont conservés et contrôlés par CI.
- Revalidation ciblée complémentaire : 7 cartes Noémi corrigées pour supprimer les questions répétitives sur Mara/le retour à Bethléhem et préciser le contexte, les réponses et les explications. Les cartes non modifiées conservent leur validation antérieure.
- Dernier affinage du lot : distracteurs de `char-l2-q-21-08` rendus plausibles et formulation de `char-l2-q-22-07` corrigée ; index de réponse conservé. Vérification CI à refaire sur le SHA courant.

- Revalidation ciblée du 09/10/2026 : 10 cartes de Noémi, Zachée, Barnabé et Corneille corrigées pour une référence précise, une réponse correcte, ou pour remplacer les répétitions/généralités par des questions distinctes. Les autres cartes du fichier restent inchangées.

- Revalidation ciblée complémentaire : 10 cartes du lot Élisha, Néhémie et Marie Madeleine reprises pour supprimer des répétitions, préciser les événements bibliques et corriger des questions/réponses trop génériques. La couverture inchangée reste conservée.

- Revalidation ciblée complémentaire : 14 cartes du lot Agar, Léa, Ésaü, Melkisédek, Jéthro, Qorah, Balak et Éli reprises pour éliminer les répétitions, préciser les questions et aligner réponses/références sur le récit cité.

- Revalidation ciblée complémentaire : 9 cartes de Melkisédek, Jéthro, Séphora et Balaam réécrites pour réduire les répétitions et vérifier les détails narratifs cités, notamment le silex, l’expression « époux de sang », les sacrifices et les bénédictions de Balaam.

- Affinage final du sous-lot : 3 cartes ajustées pour éviter les répétitions restantes et préciser les réponses sur le sacrifice de Jéthro, la prophétie de Balaam et l’ânesse qui parla.

### Bloc SEM-L3-001 — VALIDATED — 2026-10-08
- Source : `src/data/characterQuestionsL3.ts`
- SHA source validé : `0e03cc9573421d23ce8e0cbfb7aa247cf903043b`
- Périmètre : 200 Quiz + 48 Vrai/Faux + 40 Qui est-ce ? = 288 cartes.
- État : VALIDATED
- Contrôles : structure, réponses/index, fuite de réponse, doublons, références, formulations, Vrai/Faux ambigus, indices Mystère et jouabilité.
- Corrections ciblées : `char-l3-tf-45-3`, `char-l3-tf-54-3`, `char-l3-tf-55-1`.
- Revalidation ciblée après détection de répétitions : `char-l3-q-42-08` (réponse de Mikal à Saül, 1 Samuel 19:17), `char-l3-q-54-05` (raisonnement de Gamaliel sur l’origine humaine d’un mouvement, Actes 5:38-39) et `char-l3-q-60-09` (discours poursuivi jusqu’au lever du jour, Actes 20:11). Ces trois cartes ont été remplacées par des faits distincts et leurs références réalignées.
- Résultats finaux : 288 IDs uniques, 200 Quiz sans doublon ni fuite, 48 Vrai/Faux contrôlés, 40 Qui est-ce ? sans problème d’indices.
- Exceptions ouvertes : aucune.
- Revalidation ciblée complémentaire : `char-l3-q-42-07` précise le filet de poils de chèvre placé à la tête de la statue (1 Samuel 19:13-16) ; `char-l3-q-57-08` porte sur le souhait de Paul de garder Onésime pour le servir en prison (Philémon 13-14) ; `char-l3-q-57-09` porte sur la demande de Paul à Philémon de rafraîchir son cœur (Philémon 20). Ces cartes remplacent des répétitions résiduelles par des faits distincts.
- Règle : ne pas réauditer tant que le SHA source reste inchangé.





## Bloc SEM-L4-001
- Source : `src/data/characterQuestionsL4.ts`
- SHA source après revalidation ciblée : `689fde80c2c31daa91be3363abb68044edf8f0c0`
- Périmètre : 200 Quiz + 52 Vrai/Faux + 40 Qui est-ce ? = 292 cartes.
- État : VALIDATED
- Contrôles : structure, réponses/index, fuite de réponse, doublons, références, formulations, Vrai/Faux, autonomie liée au personnage, indices Mystère et jouabilité.
- Corrections ciblées : références Mystère, formulations/références Quiz et Vrai/Faux, et réalignement de `char-l4-q-64-7` / `char-l4-q-67-10` avec leur personnage.
- Exceptions ouvertes : aucune.
- Revalidation ciblée complémentaire : `char-l4-q-65-5` remplace une répétition interprétative par la déclaration de Thomas d’aller en Judée avec Jésus même au prix de mourir (Jean 11:7-16) ; `char-l4-q-66-8` porte sur le baptême de Lydie et de sa maison (Actes 16:14-15) ; `char-l4-q-68-6` et `char-l4-q-68-7` couvrent la prière et la vision d’Étienne avant sa mort (Actes 7:55-59) ; `char-l4-q-73-5` reprend l’encouragement de Jude à lutter pour la foi (Jude 3) ; `char-l4-q-80-7` porte sur le résultat de l’eau vive (Jean 4:13-14).
- Revalidation ciblée complémentaire : `char-l4-q-79-5` demande ce que la foule disait à Bartimée lorsqu’il criait vers Jésus (Marc 10:47-48) ; `char-l4-q-79-10` porte sur les paroles des gens lorsque Jésus demanda qu’on l’appelle (Marc 10:49). Les deux cartes ne répètent plus l’identification de Bartimée comme celui qui appelait Jésus « Fils de David ».
- Revalidation ciblée complémentaire : `char-l4-q-61-2` distingue Marie de Marthe lors de l’arrivée de Jésus (Jean 11:19-20) ; `char-l4-q-61-5` reprend la réponse de Jésus à l’agitation de Marthe (Luc 10:40-42) ; `char-l4-q-61-8` précise la « meilleure part » choisie par Marie (Luc 10:41-42) ; `char-l4-q-61-10` porte sur la question que Jésus posa à Marthe au sujet de sa foi (Jean 11:25-26).
- Revalidation ciblée complémentaire : 8 cartes de `char-l4-q-78-3` à `char-l4-q-78-10` ont été réécrites pour réduire les répétitions sur l’identité de la fille de Jaïrus et ses gestes au moment de la résurrection. Les nouvelles questions couvrent la nourriture demandée, les trois apôtres présents, la réaction de la foule, la consigne de discrétion, le fait qu’elle se leva et marcha, l’annonce de sa mort, l’encouragement adressé à Jaïrus et la déclaration de Jésus sur l’enfant (Marc 5:35-43). L’ancienne carte qui attribuait à la fille la parole « Ne crains pas, exerce seulement la foi » a été corrigée : Jésus s’adressait à Jaïrus (Marc 5:35-36).
- Revalidation ciblée complémentaire : 8 cartes de `char-l4-q-76-3` à `char-l4-q-76-10` ont été réécrites pour éviter de répéter que Jacques fils d’Alphée est l’un des Douze ou que sa vie personnelle est peu détaillée. Les nouvelles questions portent sur le nombre des Douze, la prière de Jésus avant leur choix, leurs missions (prêcher, rester avec Jésus, expulser les démons), Jean frère de Jacques fils de Zébédée, le nom « Simon le Cananéen » et le choix de Matthias pour remplacer Judas (Luc 6:12-16 ; Marc 3:14-18 ; Matthieu 10:2-4 ; Actes 1:21-26).
- Revalidation ciblée complémentaire : `char-l4-q-63-5` remplace la répétition sur l’attente du Royaume par une question distincte sur l’appartenance de Joseph d’Arimathie au Sanhédrin (Luc 23:50-51 ; Marc 15:43).
- Revalidation ciblée après détection de répétitions : `char-l4-q-62-8` (message de Marthe et Marie au sujet de Lazare, Jean 11:1-3), `char-l4-q-63-7` (Joseph décrit comme bon et juste, Luc 23:50-51), `char-l4-q-63-9` (Nicodème participe à la préparation du corps, Jean 19:38-40) et `char-l4-q-67-5` à `char-l4-q-67-10` (préparation de Tabitha, nom Dorcas, prière de Pierre, retour à la vie, effet à Joppé et raison de l’appel de Pierre ; Actes 9:36-42). Les formulations répétitives ont été remplacées par des faits distincts, avec index et références contrôlés.
- Clôture : CI et GitHub Pages vertes sur le commit de clôture courant.

## Bloc SEM-L5-001
- Source : `src/data/characterQuestionsL5.ts`
- SHA source validé : `4f77d4c4a939e1433eaef12ed2aa1c3703a2e49d`
- Périmètre : 200 Quiz + 50 Vrai/Faux + 40 Qui est-ce ? = 290 cartes.
- État : VALIDATED
- Contrôles : structure, réponses/index, fuite de réponse, doublons, références, formulation, autonomie liée au personnage, Vrai/Faux, indices Mystère et jouabilité.
- Corrections ciblées : 5 Vrai/Faux réalignés sur leur `characterId`, puis recontrôlés.
- Exceptions ouvertes : aucune.
- Revalidation ciblée après détection de répétitions : `char-l5-q-82-9` (Félix espérait recevoir de l’argent, Actes 24:26), `char-l5-q-87-6` (Évodie et Syntyche avaient collaboré à la bonne nouvelle, Philippiens 4:2-3), `char-l5-q-90-3` et `char-l5-q-90-10` (collaborateurs de Démas dans Philémon 24 et départ pour Thessalonique, 2 Timothée 4:10), `char-l5-q-91-8` (réaction de Naamân aux instructions, 2 Rois 5:9-12), `char-l5-q-93-4` (succession de Josias par Joachaz, 2 Rois 23:30-31) et `char-l5-q-100-7` (mission confiée à Amos, Amos 7:14-15). Les doublons de formulation ont été remplacés par des questions plus distinctes et les index/références ont été contrôlés.
- CI : verte sur `2a21beae348791025ce2583f1da0666fb0544cab`.
- GitHub Pages : verte sur `2a21beae348791025ce2583f1da0666fb0544cab`.
- Clôture : ne pas réauditer tant que le SHA source reste inchangé.


## Bloc SEM-L6-001
- Source : `src/data/characterQuestionsL6.ts`
- SHA source validé : `88a20ff6fc8b7b8761804ecea55fd4318dd60499`
- Périmètre : 250 Quiz + 95 Vrai/Faux + 50 Qui est-ce ? = 395 cartes.
- État : VALIDATED
- Revalidation ciblée complémentaire : 12 cartes des banques Apphia et Archippe ont été réécrites pour éliminer les questions répétitives sur l’introduction de la lettre à Philémon et sur le ministère d’Archippe. Les nouveaux faits portent sur l’évolution d’Onésime (Philémon 10-11), le compte de la dette (18-19), le logement demandé (22), le cœur à rafraîchir (20), la confiance en l’obéissance de Philémon (21), l’enfant spirituel de Paul (10), le frère bien-aimé (15-16), l’accueil comme Paul lui-même (17), le volontariat (14), l’espoir de revenir (22), le « propre cœur » de Paul (12) et l’emprisonnement de Paul (1, 9-10).
- Revalidation ciblée complémentaire : `char-l6-q-109-4` corrige une réponse/index erroné et demande le lien entre Jeanne et Chouza (Luc 8:1-3) ; `char-l6-q-116-8` remplace une répétition sur la filiation de Jean-Marc par la visite de Pierre à la maison de Marie après sa libération (Actes 12:7-12).
- Revalidation ciblée après détection de répétitions : `char-l6-q-110-4` (instruction donnée aux dix lépreux, Luc 17:13-14), `char-l6-q-121-10` (raison du transfert de Paul à Césarée, Actes 23:23-30), `char-l6-q-123-7` (Artémis au cœur de l’émeute, Actes 19:24-28) et `char-l6-q-123-10` (la foule entraîne Gaïus et Aristarque au théâtre, Actes 19:29). Ces cartes remplacent des formulations redondantes par des faits distincts.
- Contrôles : validation éditoriale complète, structure, réponses/index, références, contexte, formulation, autonomie liée au personnage, Vrai/Faux, indices Mystère, doublons, fuite de réponse et jouabilité.
- Corrections ciblées : références Joël et indices Mystère réalignés.
- Exceptions ouvertes : aucune.
- Clôture : CI et GitHub Pages vertes sur le commit source de clôture.


## SEM-V58-001
- Source : `src/data/jw_enrichment_v58.ts`
- SHA source validé : `c94576dc570223fb5601e62c4532a9a4bdb162bf`
- Périmètre : 25 cartes jouables.
- État : VALIDATED
- Contrôles : structure, réponses/index, fuite, formulation V/F, exactitude, références, indices Mystère, contexte et jouabilité.
- Corrections : `v58-m-005`, `v58-tf-003`, `v58-tf-006`.
- Recompte : 25 IDs uniques ; `v58-tf-012` inclus et revérifié (affirmation, réponse vraie, explication et référence Joël 2:28-29 cohérentes). L’ancien total de 24 était une erreur de comptage du registre, pas une carte retirée.
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


### Revalidation ciblée — V/F négatifs — 2026-10-08 (SHA historique, source remplacée depuis)
- `src/data/questions.ts` — SHA de cette passe historique `cf5e82c8f555b69651d192f62febb1b99eeb937d` ; la source courante est `a8b94a251151f930645994ce86b0fd634b1c722a`, enregistrée dans SEM-Q-001.
- Cartes corrigées et recontrôlées : `tf-v39-06`, `tf-balance-19`, `tf-balance-24`.
- Les anciennes formulations négatives ont été remplacées par des affirmations directes vraies ; réponses et explications réalignées.
- `tf-jw-21` était déjà sous sa forme positive dans le pool réellement jouable ; aucune modification nécessaire.
- `src/data/jw_enrichment_v53.ts` — nouveau SHA `dc99d9d3b4f66be7a0b82242275d16ade8baf6f2`.
- Cartes corrigées et recontrôlées : `v53-tf-008`, `v53-tf-018`, `v53-tf-040`.
- Contrôles : vérité biblique, réponse, explication, référence et formulation directe.
- CI + GitHub Pages : verts sur le commit de clôture `b8d94aff3ad448ba688c4ea78ce68dacc4d9a6f9`.
- Les autres blocs VALIDATED restent inchangés et ne sont pas réaudités.


## Revalidation finale des modifications V/F — 2026-10-08 (historique; SHA ensuite remplacé)
- `src/data/questions.ts` — SHA de clôture à l'époque : `cf5e82c8f555b69651d192f62febb1b99eeb937d` ; ne pas le traiter comme le SHA courant, désormais suivi dans SEM-Q-001.
- Cartes recontrôlées : `tf-v39-06`, `tf-balance-19`, `tf-balance-24`. Formulations directes, réponses, explications et références alignées.
- `src/data/jw_enrichment_v53.ts` — SHA final validé : `dc99d9d3b4f66be7a0b82242275d16ade8baf6f2`.
- Cartes recontrôlées : `v53-tf-008`, `v53-tf-018`, `v53-tf-040`. Formulations directes, réponses, explications et références alignées.
- CI + GitHub Pages : verts sur le commit de clôture V53 `b8d94aff3ad448ba688c4ea78ce68dacc4d9a6f9` et les contrôles de la branche principale sont verts.
- Ces deux blocs restent VALIDATED tant que leurs SHA restent inchangés.


## Bloc SEM-ROUTING-GLOBAL-001 — VALIDATED (instantané historique, supersédé)
- Sources : `src/data/questions.ts`, `src/data/gameContent.ts`, `src/app/game.tsx`, `audit-content.mjs`.
- SHA `gameContent.ts` : `d0ff98fa27de12e6f64ba9311ae4e401c35e23f6`.
- SHA `audit-content.mjs` : `c8907244365fc42e7685bb43392181c8454c3ad4`.
- Contrôle CI du commit `cdc2cb77544050b0c2e12ecef35f75c18ef42457` : 67 banques de cartes sources, 2 840 IDs de cartes audités, 2 840/2 840 cartes routées, 67/67 preuves de routage par banque, 151 banques importées/locales mappées, 0 banque sans route prouvée.
- Contrôle moteur ajouté et exécuté : 7/7 handlers de rendu/validation présents, 4/4 libellés officiels présents.
- Les quatre modes restent Quiz, Vrai / Faux, Qui est-ce ? et Compléter les paroles. Aucun mode officiel ajouté ou renommé.
- CI : verte ; TypeScript, audit de contenu et export Web réussis.
- GitHub Pages : build et déploiement verts.
- Portée : preuve statique des injections/handlers ; elle ne remplace pas la validation éditoriale individuelle de chaque carte.
- Règle anti-répétition : les blocs éditoriaux VALIDATED ne sont pas rouverts tant que leur SHA source reste inchangé.

## Bloc SEM-RUNTIME-001 — VALIDATED — 2026-10-08
- Sources : `src/data/gameContent.ts` + `audit-content.mjs`
- Objectif : prouver que les quatre modes officiels consomment réellement les banques jouables, y compris les transformations Quiz/Citations/Intrus/Chronologie/Time's Up et le sous-pool Vrai/Faux.
- Correction appliquée : toutes les cartes `trueFalseQuestions` sont désormais conservées dans `GAME_CONTENT.truefalse` ; l'ancien échantillonnage supprimait une partie des VRAI et rendait ces cartes définitivement inatteignables.
- Contrôle ajouté : `audit-content.mjs` vérifie les injections de chaque banque dans les pools réellement consommés et interdit toute troncature du deck Vrai/Faux.
- SHA `gameContent.ts` : `d0ff98fa27de12e6f64ba9311ae4e401c35e23f6`
- SHA `audit-content.mjs` : `c8907244365fc42e7685bb43392181c8454c3ad4`
- État : VALIDATED.
- CI : verte (confirmée par l'utilisateur).
- Exceptions : aucune connue.


## Revalidation ciblée SEM-L3 — 2026-10-09
- SHA final de `src/data/characterQuestionsL3.ts` : `6db9316faf9e32c62ad86cc86cd95a59a61b1a3d`.
- Cinq cartes Vrai/Faux corrigées et relues individuellement : `char-l3-tf-53-1` (Malachie), `char-l3-tf-54-1` (Gamaliel), `char-l3-tf-57-1` (Onésime), `char-l3-tf-58-1` (Philémon), `char-l3-tf-59-1` (Tite).
- Corrections : suppression des négations qui inversaient le sens d’affirmations marquées VRAI ; références corrigées pour Malachie et Gamaliel, références contextualisées pour Onésime et Philémon.
- État : ces cinq cartes sont revalidées ; les autres cartes du bloc SEM-L3 conservent leur validation antérieure, sauf changement ultérieur de source.
- Commit source : `03e77edcab21bebb400b353ac6793bbe13cebb88`.


## Revalidation ciblée V/F — L2 et L6 — 2026-10-09
- `char-l2-tf-39-1` : l’affirmation négative inversée sur Balak a été remplacée par une affirmation directe vraie ; réponse, explication et référence alignées sur Nombres 22:1-6.
- `char-l6-tf-114-2` : formulation remplacée par le fait positif qu’Onésiphore rechercha Paul à Rome et le réconforta ; référence 2 Timothée 1:16-18.
- SHA final L2 : `819853f33520e6c2289430caa90b1758158d6091` ; SHA final L6 : `3b1e6d54b00fc5c6a47b586726d1e9d81dc1991c`.
- Ces deux cartes ont été relues individuellement ; le reste de chaque bloc conserve son état antérieur, car seules ces cartes ont changé.
- Commits source : `1faa6d4b87664487c2ee7e4bbbffbd2a8f135962`, `34abeab4bb2bf41718d8cc19205865e817147806`.


## Revalidation éditoriale ciblée V/F L1 — 2026-10-09
- SHA final : `447b1dc2229adbb6051861311dd844a27f821afe`.
- Les 43 cartes Vrai/Faux L1 qui utilisaient une explication générique ont reçu une explication factuelle et des références plus précises.
- Correction factuelle majeure : `char-l1-tf-13-2` ne présente plus Élie comme servant au tabernacle de Silo ; la formulation situe correctement son ministère dans le royaume d’Israël.
- Contrôle après édition : 0 explication générique restante dans les cartes V/F du fichier L1.
- Commit source : `29aab6eeea9d59c4e600b31a43b841163391e67e`.
- Le bloc SEM-L1 reste VALIDATED au SHA courant après revalidation ciblée des 43 cartes ; les autres cartes du bloc conservent leur validation antérieure.


## Revalidation éditoriale ciblée V/F L2 — 2026-10-09
- SHA final : `090db42512698e17130acb15c40c204cde470898`.
- Les 37 cartes Vrai/Faux L2 qui utilisaient une explication générique ont reçu une explication factuelle et des références ajustées aux faits énoncés.
- Corrections supplémentaires : `char-l2-tf-39-1` reformulée en affirmation directe vraie sur Balak ; `char-l2-tf-33-3` réparée, car sa formulation était matériellement tronquée au milieu du mot « avertissement ».
- Contrôle après édition : 0 explication générique restante dans les cartes V/F du fichier L2.
- Commit source : `6563a4cba043ed9657318c95efa1168b72d61b5a` ; correction ciblée Balak précédente : `1faa6d4b87664487c2ee7e4bbbffbd2a8f135962`.
- Les cartes modifiées ont été relues individuellement ; les autres cartes du bloc conservent leur validation antérieure.


## Revalidation éditoriale ciblée V/F L3 — 2026-10-09
- SHA final : `13cebe05f8eae665ffbfa3b290be00236717ec23`.
- Les 38 cartes Vrai/Faux L3 qui utilisaient une explication générique ont reçu une explication factuelle et des références plus directement pertinentes.
- Des références ont été élargies pour étayer les faits complets (notamment Hérode Antipas, Pilate, Isaïe, Jérémie, Ézékiel et Zorobabel) ; les cartes L3 corrigées dans le lot précédent restent incluses dans ce SHA final.
- Contrôle après édition : 0 explication générique restante dans les cartes V/F du fichier L3.
- Commits source : `ae09dde3e4998a7832695a36696703bdb24472f3`, `312516e5441d81b9a2d7cf9421765c964f44339e`.
- Les cartes modifiées ont été relues individuellement ; les autres cartes du bloc conservent leur validation antérieure.

- Dernière mise à jour du SHA L3 après la correction des sept explications restantes : `78f3f8711853b0a0096e37c3860078301fc47477`.


## Corrections de formulation complémentaires — 2026-10-09
- L1 : `char-l1-tf-02-2`, `char-l1-tf-12-2`, `char-l1-tf-16-2` reformulées en affirmations directes et grammaticalement complètes.
- L2 : `char-l2-tf-27-2` corrigée pour l’accord et la formulation de Marie Madeleine.
- L3 : `char-l3-tf-42-2` reformulée autour d’un fait localisable et d’une référence directe.
- L6 Quiz : `char-l6-q-120-8` ne demande plus « dans un contexte associé » ; la question précise désormais qu’il s’agit de l’assemblée saluée chez Priscille et Aquila.
- SHA finaux actualisés : L1 `447b1dc2229adbb6051861311dd844a27f821afe`, L2 `090db42512698e17130acb15c40c204cde470898`, L3 `78f3f8711853b0a0096e37c3860078301fc47477`, L6 `3b1e6d54b00fc5c6a47b586726d1e9d81dc1991c`.


## Revalidation ciblée Quiz L5 — Évodie / Épaphrodite — 2026-10-09
- SHA final `src/data/characterQuestionsL5.ts` : `22cd3ee007b71a3e25d5225399e5db4fdd1820f3`.
- `char-l5-q-87-1` : corrigée, car plusieurs propositions pouvaient correspondre à « une chrétienne de Philippes » ; la question demande maintenant quelle chrétienne Paul exhorta à être en accord avec Syntyche, avec quatre distracteurs féminins plausibles.
- `char-l5-q-87-10` : corrigée, car la formulation demandait une activité alors que les réponses étaient des personnes.
- `char-l5-q-88-1` et `char-l5-q-88-4` : le contexte ne repose plus sur « cet homme » ; Épaphrodite est nommé dans la question.
- Références conservées et alignées sur Philippiens 2:25-30 et 4:2-3.
- Commit source : `8abdf7a286d062a7c6a665f80ca81ba2b6ace58d`.


## Revalidation de contexte autonome Quiz L5-L6 — 2026-10-09
- L5 : `char-l5-q-100-7` nomme désormais Amos au lieu de supposer que le joueur sait qui est « ce prophète ».
- L6 : `char-l6-q-111-1`, `111-2`, `111-6`, `111-8` nomment la femme qui souffrait de pertes de sang ; `char-l6-q-112-2` et `112-10` nomment l’homme délivré dans la région des Géraséniens. Chaque question est maintenant compréhensible isolément.
- SHA finaux : L5 `22cd3ee007b71a3e25d5225399e5db4fdd1820f3`, L6 `3b1e6d54b00fc5c6a47b586726d1e9d81dc1991c`.
- Commit source : `7dcaf657e5fc153e6c92ef7d8a3841d39e9e0189`.


## Revalidation des doublons conceptuels L5 — 2026-10-09
- `char-l5-q-87-1` demande maintenant quel problème Paul demanda à Évodie et Syntyche de régler, au lieu de demander simplement quelle chrétienne était de Philippes (plusieurs réponses pouvaient convenir).
- `char-l5-q-88-10` demande désormais comment Paul décrivit Épaphrodite, ce qui supprime le doublon conceptuel avec `char-l5-q-88-8` sur la raison de l’accueillir avec joie.
- SHA L5 final : `22cd3ee007b71a3e25d5225399e5db4fdd1820f3` ; commit de cette passe à suivre dans l’historique Git.


## Revalidation éditoriale V/F L4-L5 — cartes de localisation — 2026-10-09
- L4 : cinq affirmations corrigées pour remplacer les formulations vagues « est lié à » par des faits bibliques précis sur Jacques fils d’Alphée, Simon le Zélote, la fille de Jaïrus, Bartimée et la Samaritaine ; références directes conservées ou ajustées.
- L5 : dix-huit affirmations corrigées pour remplacer les formulations répétitives « est lié à » et les explications génériques par des faits vérifiables concernant le centurion de Capernaüm, Félix, Festus, Agrippa II, Bérénice, Phœbé, Évodie, Épaphrodite, Naamân, Ézéchias, Josias, Josaphat, Jonas, Saül, Manoa, Sophonie, Habacuc et Amos.
- SHA finaux : L4 `b9d9c3c1883e2c217cce5417d309da2aebcd6632`, L5 `22cd3ee007b71a3e25d5225399e5db4fdd1820f3`.


## Revalidation V/F — reformulation des cartes de localisation L1-L3 et L5 — 2026-10-09
- 56 affirmations de localisation ont été reformulées en faits bibliques directs, sans la tournure répétitive « est associé à / est lié à » : L1 17 cartes, L2 19, L3 18, L5 2.
- Les explications et références spécifiques ajoutées dans la passe précédente sont conservées ; les affirmations sont désormais autonomes et plus naturelles pour une partie rapide.
- SHA finaux : L1 `447b1dc2229adbb6051861311dd844a27f821afe`, L2 `090db42512698e17130acb15c40c204cde470898`, L3 `78f3f8711853b0a0096e37c3860078301fc47477`, L5 `22cd3ee007b71a3e25d5225399e5db4fdd1820f3`.


## Passe concision V/F — 2026-10-09
- Six affirmations longues ont été raccourcies sans retirer les faits nécessaires : `char-l1-tf-12-3`, `char-l2-tf-30-3`, `char-l2-tf-33-3`, `char-l2-tf-35-3`, `char-l2-tf-40-3`, `char-l3-tf-43-1`.
- SHA finaux : L1 `447b1dc2229adbb6051861311dd844a27f821afe`, L2 `090db42512698e17130acb15c40c204cde470898`, L3 `78f3f8711853b0a0096e37c3860078301fc47477`.


## Passe concision complémentaire V/F — 2026-10-09
- Douze affirmations supplémentaires dépassant 165 caractères ont été raccourcies sans retirer leur fait biblique principal : L1 3, L2 5, L3 4.
- SHA finaux : L1 `447b1dc2229adbb6051861311dd844a27f821afe`, L2 `090db42512698e17130acb15c40c204cde470898`, L3 `78f3f8711853b0a0096e37c3860078301fc47477`.


## Passe transversale Quiz L1-L6 — 2026-10-09
- Source : `src/data/characterQuestionsL1.ts` à `characterQuestionsL6.ts`.
- SHA contrôlés : L1 `447b1dc2229adbb6051861311dd844a27f821afe`, L2 `090db42512698e17130acb15c40c204cde470898`, L3 `78f3f8711853b0a0096e37c3860078301fc47477`, L4 `b9d9c3c1883e2c217cce5417d309da2aebcd6632`, L5 `22cd3ee007b71a3e25d5225399e5db4fdd1820f3`, L6 `3b1e6d54b00fc5c6a47b586726d1e9d81dc1991c`.
- Périmètre Quiz : 1 250 cartes (200 par fichier L1-L5, 250 en L6).
- Contrôles indépendants exécutés sur ces SHA : 0 doublon de question après normalisation, 0 occurrence littérale de la bonne réponse dans sa propre question, 0 erreur structurelle détectée sur les 4 choix et l'index de réponse, 0 ID dupliqué dans les six fichiers.
- Contrôles complémentaires V/F sur les mêmes six SHA : 0 explication générique repérée par le scan de motifs et 0 formulation d'inversion négative correspondant aux motifs recherchés.
- Contrôle de contexte Quiz : aucune question contenant « cet homme », « cette femme », « ce personnage », « cet apôtre », « ce prophète », « ce roi » ou « ce disciple » sans contexte autonome n'a été détectée par le scan ciblé.
- Limite : ces contrôles automatisés complètent les relectures éditoriales déjà enregistrées ; ils ne prouvent pas à eux seuls la justesse biblique de chaque affirmation.
- État : contrôles transversaux réussis sur les SHA listés ; les blocs éditoriaux conservent leur statut existant.


## Garde-fous automatiques anti-doublon et anti-fuite — 2026-10-09
- `audit-content.mjs` SHA : `d9b1591c0a8a085315c5fd57b63c3a3ac0eadbe9`.
- Le contrôle de régression compare désormais les questions Quiz après normalisation des accents, apostrophes et ponctuation, puis signale les groupes de doublons.
- Il vérifie aussi si la bonne réponse (4 caractères normalisés ou plus) est répétée littéralement dans sa propre question.
- Contrôle local indépendant sur les 1 250 cartes Quiz personnages L1-L6 : 0 doublon normalisé et 0 fuite littérale détectés avant l’ajout de ces garde-fous.
- Le statut de CI du commit de ce changement doit être confirmé dans les exécutions GitHub Actions avant de clore cette passe.


## Revalidation ciblée SEM-Q-001 — doublons de questions — 2026-10-09
- SHA courant de `src/data/questions.ts` : `a8b94a251151f930645994ce86b0fd634b1c722a`.
- `quiz-v39-14` : reformulée avec le contexte du grand poisson et référence étendue à Jonas 1:17; 2:10; 3:1-5.
- `v102-q-10` : transformée en question distincte sur l'attitude à adopter selon Jacques 1:6 ; réponses, explication et référence réalignées.
- Le scan transversal actuel détecte **0 groupe de doublons normalisés** entre les questions extraites des banques jouables, et **0 fuite littérale de la bonne réponse** dans les 1 250 Quiz personnages.
- SHA courant de `audit-content.mjs` : `d9b1591c0a8a085315c5fd57b63c3a3ac0eadbe9`.
- CI et GitHub Pages : verts sur le commit de clôture de cette passe `0b2ca9950677a352d8e463c863d8475f1fda52f1`.


## Bloc SEM-ROUTING-GLOBAL-002 — VALIDATED — 2026-10-09
- Sources : `src/data/questions.ts`, `src/data/gameContent.ts`, `src/app/game.tsx`, `audit-content.mjs`.
- SHA `gameContent.ts` : `d0ff98fa27de12e6f64ba9311ae4e401c35e23f6`.
- SHA `audit-content.mjs` : `c8907244365fc42e7685bb43392181c8454c3ad4`.
- Inventaire corrigé : 3 163 cartes dans 74 banques supplémentaires + 477 cartes de base conservées dans `questions.ts` = **3 640 cartes uniques jouables**.
- Contrôle CI : 3 640/3 640 cartes routées ; 73/74 banques supplémentaires avec preuve de route ; 0 banque non routée ; 0 doublon d’ID résiduel ; 0 groupe de doublons de questions normalisées.
- Les banques générées depuis des tuples (V54, jwCategories) sont comptées ; les IDs de base retirés intentionnellement pour éviter les doublons ne sont pas recomptés.
- Les 17 cartes V54 Qui est-ce ? non couvertes par le bloc éditorial initial sont désormais validées dans `SEM-V54-002`. Le filtre d’inventaire a aussi été corrigé pour compter les 8 cartes V61 « Mot interdit » (`v61-m-001`–`v61-m-008`) déjà couvertes par `SEM-V61-001`.
- Les quatre modes officiels restent Quiz, Vrai / Faux, Qui est-ce ? et Compléter les paroles.
- Règle anti-répétition : conserver les validations existantes tant que leur source et leur périmètre restent inchangés.


- Revalidation ciblée complémentaire du 09/10/2026 : `char-l1-q-02-10` reformulée sur la promesse précise de l’alliance après le Déluge ; `char-l1-q-18-04` remplacée par l’épisode de Pierre marchant sur l’eau ; `char-l1-q-18-10` différenciée en question sur le chant du coq ; `char-l1-q-20-09` remplacée par l’arrivée de Jean au tombeau. Réponses, index, explications et références vérifiés ; SHA L1 actualisé. Les cartes non modifiées conservent leur validation antérieure.


- Revalidation ciblée complémentaire du 09/10/2026 : `char-l2-q-23-07` remplacée par une question sur le nom « Mara » demandé par Noémi ; `char-l2-q-28-02` remplacée par une question sur la déclaration de Jésus au sujet du salut venu dans la maison de Zachée ; `char-l2-q-33-01` remplacée par la raison donnée par Ésaü pour céder son droit d’aînesse. Vérification des index de réponse, explications et références ; SHA L2 actualisé. Les autres cartes L2 n’ont pas été modifiées dans ce lot.


## Rééquilibrage Vrai/Faux ciblé — L1 à L3 (09/10/2026)
- L1 : 6 affirmations transformées en propositions fausses précises ; répartition actuelle 37 Vrai / 7 Faux.
- L2 : 8 affirmations transformées en propositions fausses précises ; répartition actuelle 41 Vrai / 9 Faux.
- L3 : 8 affirmations transformées en propositions fausses précises ; répartition actuelle 40 Vrai / 8 Faux.
- Les explications ont été réécrites pour donner le fait exact et les références ont été conservées ou ajustées vers les passages qui établissent le fait. Cette correction est ciblée ; elle ne signifie pas que toutes les cartes des blocs L1–L3 ont été relues une par une.
- Les SHA des sources L1–L3 sont actualisés dans leurs blocs respectifs. Une validation CI et une relecture finale des propositions sont encore nécessaires avant fusion.


## Rééquilibrage Vrai/Faux ciblé — L4 (09/10/2026)
- Source : `src/data/characterQuestionsL4.ts`, SHA courant `689fde80c2c31daa91be3363abb68044edf8f0c0`.
- Cinq propositions auparavant fausses ont été remplacées par des faits positifs précis : Joseph d’Arimathie demandant le corps de Jésus, Jaïrus suppliant Jésus pour sa fille, le doute de Thomas, les bonnes actions de Tabitha et la mission confiée à Ananias.
- Répartition après modification : 26 Vrai / 26 Faux sur 52 cartes.
- Les références ont été vérifiées sur les passages associés, notamment Jean 20:24-29 pour Thomas. Cette passe ne constitue pas une relecture éditoriale intégrale des 292 cartes L4.
- Ne clore qu’après CI verte sur le SHA final et vérification du déploiement si déclenché.
