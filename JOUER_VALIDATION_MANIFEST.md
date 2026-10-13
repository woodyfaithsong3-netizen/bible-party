# JOUER — MANIFEST DE VALIDATION ANTI-RÉPÉTITION

Ce fichier est le registre opérationnel des blocs éditoriaux validés. Une carte VALIDATED n'est pas relue intégralement tant que le SHA de sa source n'a pas changé. Toute modification repasse uniquement la carte concernée en RECHECK.

## Bloc SEM-V54-001
- Source : `src/data/jw_enrichment_v54.ts`
- SHA source validé : `b3a28ddb2989229a4e22342a7e5b7bc10d8abd67`
- Périmètre : Quiz `v54-q001`–`v54-q080` + Vrai/Faux `v54-tf001`–`v54-tf080`
- Taille : 160 cartes
- État : VALIDATED
- Dernière correction : commit `4e56577cd0896b7bca76ad6607339c6d4288696c`
- Corrections ciblées : q026 et tf026, références réalignées sur `wp16 n° 2 p. 14-15`.
- Exceptions ouvertes : aucune nouvelle exception confirmée après cette correction.
- Clôture : contrôle éditorial complet effectué, CI verte et GitHub Pages verte confirmées.

## Bloc SEM-V54-002 — VALIDATED — 2026-10-09
- Source : `src/data/jw_enrichment_v54.ts`
- SHA source validé : `b3a28ddb2989229a4e22342a7e5b7bc10d8abd67`
- Périmètre : `v54-m-001`–`v54-m-010` + `v54-tu-002`–`v54-tu-008`.
- Taille : 17 cartes converties en Qui est-ce ? par le moteur actuel.
- État : VALIDATED.
- Revalidation ciblée 2026-10-13 : quatre formulations du fichier ont été reformulées sans modifier les réponses, références ou explications.
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
- SHA source validé : `a417458f9d14f6fca8b97846ef1d055bec2353d9`
- Revalidation ciblée 2026-10-13 : `v102-q-01` et `v102-q-07` reformulées pour supprimer « Que montre… » tout en conservant les réponses, références et explications.
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
- Périmètre désormais jouable : 40 cartes
- Revalidation ciblée 2026-10-13 : `q015`, `q017`, `q022`, `q036` reformulées en questions factuelles directes. : `v55-m-001`–`008`, `v55-q-001`–`008`, `v55-i-001`–`008`, `v55-c-001`–`008`, `v55-d-001`–`008`.
- État : VALIDATED
- Les 16 cartes nouvellement jouables (8 chronologies + 8 défis) ont été contrôlées individuellement et sont validées.
- Corrections historiques : `v55-q-006`, `v55-i-002`.
- Références réalignées : `v55-c-001`, `v55-c-003`, `v55-c-007`.


## Bloc SEM-V53-001
- Source : `src/data/jw_enrichment_v53.ts`
- SHA source validé : `098566d0e891867b5254b3694737779fde61e2bf`
- Périmètre : 141 cartes, toutes les familles V53 présentes dans le fichier.
- Revalidation ciblée 2026-10-13 : `v53-q-011` reformulée.
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
- SHA source validé : `2a161a84f1e722ba7592f7110ed148b631198f43`
- Périmètre : 200 Quiz + 44 Vrai/Faux + 40 Qui est-ce ? = 284 cartes
- État : VALIDATED
- Contrôles : validation éditoriale complète, structure, réponses, références, contexte, distracteurs, doublons, fuite de réponse, indices Mystère et jouabilité.
- Corrections ciblées : 10 cartes modifiées puis recontrôlées.
- Revalidation ciblée au SHA courant : `char-l1-tf-01-3`, `char-l1-tf-04-2`, `char-l1-tf-05-2`, `char-l1-tf-07-2`, `char-l1-tf-12-2`, `char-l1-tf-16-2` ; affirmations, explications et références contrôlées individuellement. Les cartes inchangées conservent leur validation antérieure.
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
- SHA source validé après revalidation ciblée : `5add3dd187eb5cf46e8138ed8978dbf20f0a4f7f`
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
- SHA source validé après revalidation ciblée : `45b2d3cd239042a3fe91fb46d4eb7df4cef95c6b`
- Périmètre : 200 Quiz + 48 Vrai/Faux + 40 Qui est-ce ? = 288 cartes.
- Taille : 288 cartes
- État : VALIDATED
- Contrôles : structure, réponses/index, fuite de réponse, doublons, références, formulations, Vrai/Faux ambigus, indices Mystère et jouabilité.
- Corrections ciblées : `char-l3-tf-45-3`, `char-l3-tf-54-3`, `char-l3-tf-55-1`, `char-l3-q-46-04`, `char-l3-q-49-10`, `char-l3-q-58-08`, `char-l3-m-57-2`, `char-l3-m-42-2`, `char-l3-m-46-2`, `char-l3-m-49-2`, `char-l3-m-54-2`.
- Revalidation ciblée après détection de répétitions : `char-l3-q-42-08` (réponse de Mikal à Saül, 1 Samuel 19:17), `char-l3-q-54-05` (raisonnement de Gamaliel sur l’origine humaine d’un mouvement, Actes 5:38-39) et `char-l3-q-60-09` (discours poursuivi jusqu’au lever du jour, Actes 20:11). Ces trois cartes ont été remplacées par des faits distincts et leurs références réalignées.
- Résultats finaux : 288 IDs uniques, 200 Quiz sans doublon ni fuite, 48 Vrai/Faux contrôlés, 40 Qui est-ce ? sans problème d’indices.
- Exceptions ouvertes : aucune.
- Revalidation ciblée complémentaire : `char-l3-q-42-07` précise le filet de poils de chèvre placé à la tête de la statue (1 Samuel 19:13-16) ; `char-l3-q-57-08` porte sur le souhait de Paul de garder Onésime pour le servir en prison (Philémon 13-14) ; `char-l3-q-57-09` porte sur la demande de Paul à Philémon de rafraîchir son cœur (Philémon 20). Ces cartes remplacent des répétitions résiduelles par des faits distincts.
- Revalidation ciblée complémentaire du 09/10/2026 : six cartes Vrai/Faux ont été réécrites pour corriger des répétitions et erreurs de rôles : `char-l3-tf-49-2` (Esdras/Néhémie), `char-l3-tf-50-2` (Zorobabel/Néhémie), `char-l3-tf-53-2` (offrandes condamnées par Malachie), `char-l3-tf-54-2` (Gamaliel pharisien), `char-l3-tf-55-2` (Apollos d’Alexandrie) et `char-l3-tf-57-2` (Onésime et Philémon). Réponses, explications et références vérifiées ; 6 propositions fausses précises ajoutées.
- `char-l3-q-46-04` a été relue et reformulée en question factuelle directe ; 284 cartes conservent leur validation antérieure. Cette passe ne constitue pas une relecture intégrale du bloc.
- Revalidation ciblée complémentaire du 12/10/2026 : `char-l3-q-42-01` (Mikal, filiation avec Saül), `char-l3-q-58-06` (Philémon, accueil d’Onésime) et `char-l3-q-58-05` (Philémon, demande de Paul concernant Onésime) ont été reformulées en questions factuelles directes ; réponses, indices et références contrôlés. Les autres cartes restent couvertes par les validations antérieures.
- Règle : ne pas réauditer tant que le SHA source reste inchangé.





## Bloc SEM-L4-001
- Source : `src/data/characterQuestionsL4.ts`
- SHA source après revalidation ciblée : `1a1673863b47fe355e73b8cf554d05227d83e1ac`
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
- Revalidation ciblée complémentaire du 10/10/2026 : six cartes Vrai/Faux expertes (`char-l4-tf-74-2`, `char-l4-tf-64-4`, `char-l4-tf-65-4`, `char-l4-tf-69-4`, `char-l4-tf-76-4`, `char-l4-tf-79-4`) ont été corrigées et leurs réponses, explications et références contrôlées. Les faits distinguent Philippe l’apôtre de Philippe l’évangélisateur, précisent que Jaïrus demanda de l’aide pour sa fille, établissent la foi de Thomas après la résurrection, situent Ananias et Saul à Damas, distinguent les deux Jacques et situent Bartimée près de Jéricho. Cette revalidation ne prétend pas à une nouvelle relecture intégrale de L4. Revalidation ciblée du 09/10/2026 : `char-l4-tf-63-4` remplace une affirmation générique répétée par une affirmation fausse précise sur l’appartenance de Joseph d’Arimathie aux Douze (Matthieu 27:57 ; Marc 15:43 ; Jean 19:38) ; `char-l4-tf-67-4` distingue Tabitha de Lydie au moyen d’un fait biographique précis (Actes 9:36 ; 16:14-15). Réponses, explications et références réalignées. Cette passe ne constitue pas une relecture intégrale de L4.
- Clôture : CI et GitHub Pages vertes sur le commit de clôture courant.

## Bloc SEM-L5-001
- Source : `src/data/characterQuestionsL5.ts`
- SHA source après revalidation ciblée : `86604186155b356c219271c37a8ad880535f82ec`
- Périmètre : 200 Quiz + 50 Vrai/Faux + 40 Qui est-ce ? = 290 cartes.
- État : VALIDATED
- Contrôles : structure, réponses/index, fuite de réponse, doublons, références, formulation, autonomie liée au personnage, Vrai/Faux, indices Mystère et jouabilité.
- Corrections ciblées : 5 Vrai/Faux réalignés sur leur `characterId`, puis recontrôlés.
- Exceptions ouvertes : aucune.
- Revalidation ciblée après détection de répétitions : `char-l5-q-82-9` (Félix espérait recevoir de l’argent, Actes 24:26), `char-l5-q-87-6` (Évodie et Syntyche avaient collaboré à la bonne nouvelle, Philippiens 4:2-3), `char-l5-q-90-3` et `char-l5-q-90-10` (collaborateurs de Démas dans Philémon 24 et départ pour Thessalonique, 2 Timothée 4:10), `char-l5-q-91-8` (réaction de Naamân aux instructions, 2 Rois 5:9-12), `char-l5-q-93-4` (succession de Josias par Joachaz, 2 Rois 23:30-31) et `char-l5-q-100-7` (mission confiée à Amos, Amos 7:14-15). Les doublons de formulation ont été remplacés par des questions plus distinctes et les index/références ont été contrôlés.
- CI : verte sur `2a21beae348791025ce2583f1da0666fb0544cab`.
- GitHub Pages : verte sur `2a21beae348791025ce2583f1da0666fb0544cab`.
- Revalidation ciblée complémentaire du 09/10/2026 : 14 cartes expert Vrai/Faux ont été réécrites pour supprimer les distracteurs génériques répétés (« l’un des Douze apôtres ») et corriger les rôles/événements : `char-l5-tf-83-4`, `84-4`, `85-4`, `86-4`, `87-4`, `88-4`, `90-4`, `91-4`, `92-4`, `94-4`, `95-4`, `97-4`, `99-4`, `100-4`. Réponses fausses conservées ; explications et références rendues spécifiques. Cette passe est ciblée et ne vaut pas relecture intégrale de L5.
- Clôture : ne pas réauditer tant que le SHA source reste inchangé.


## Bloc SEM-L6-001
- Source : `src/data/characterQuestionsL6.ts`
- SHA source après revalidation ciblée des Vrai/Faux : `29e405fae8ccf3fc1bcdcd39de8febdceb743a7a`
- Périmètre : 250 Quiz + 95 Vrai/Faux + 50 Qui est-ce ? = 395 cartes.
- État : VALIDATED
- Revalidation ciblée complémentaire : 12 cartes des banques Apphia et Archippe ont été réécrites pour éliminer les questions répétitives sur l’introduction de la lettre à Philémon et sur le ministère d’Archippe. Les nouveaux faits portent sur l’évolution d’Onésime (Philémon 10-11), le compte de la dette (18-19), le logement demandé (22), le cœur à rafraîchir (20), la confiance en l’obéissance de Philémon (21), l’enfant spirituel de Paul (10), le frère bien-aimé (15-16), l’accueil comme Paul lui-même (17), le volontariat (14), l’espoir de revenir (22), le « propre cœur » de Paul (12) et l’emprisonnement de Paul (1, 9-10).
- Revalidation ciblée complémentaire : `char-l6-q-109-4` corrige une réponse/index erroné et demande le lien entre Jeanne et Chouza (Luc 8:1-3) ; `char-l6-q-116-8` remplace une répétition sur la filiation de Jean-Marc par la visite de Pierre à la maison de Marie après sa libération (Actes 12:7-12).
- Revalidation ciblée après détection de répétitions : `char-l6-q-110-4` (instruction donnée aux dix lépreux, Luc 17:13-14), `char-l6-q-121-10` (raison du transfert de Paul à Césarée, Actes 23:23-30), `char-l6-q-123-7` (Artémis au cœur de l’émeute, Actes 19:24-28) et `char-l6-q-123-10` (la foule entraîne Gaïus et Aristarque au théâtre, Actes 19:29). Ces cartes remplacent des formulations redondantes par des faits distincts.
- Revalidation ciblée complémentaire du 09/10/2026 : 12 cartes Vrai/Faux ont été corrigées pour remplacer des affirmations génériques/absurdes et clarifier les sujets ambigus : `char-l6-tf-105-4` (Zacharie), `108-4` (Caïphe), `109-3` (Jeanne), `110-3` (le Samaritain guéri), `112-3` et `112-4` (l’homme délivré dans la région des Géraséniens), `114-4` (Onésiphore), `117-3` (Apphia), `119-3` (Jean-Marc), `121-4` (Claude Lysias), `122-4` (Julius) et `124-4` (Aristarque). Réponses fausses, explications et références spécifiques vérifiées. Cette passe ne constitue pas une relecture intégrale de L6.
- Contrôles : validation éditoriale complète, structure, réponses/index, références, contexte, formulation, autonomie liée au personnage, Vrai/Faux, indices Mystère, doublons, fuite de réponse et jouabilité.
- Corrections ciblées : références Joël et indices Mystère réalignés.
- Exceptions ouvertes : aucune.
- Clôture : CI et GitHub Pages vertes sur le commit source de clôture.


## SEM-V58-001-HISTORIQUE — supersédé par SEM-V58-002
- Source : `src/data/jw_enrichment_v58.ts`
- SHA source validé : `c94576dc570223fb5601e62c4532a9a4bdb162bf`
- Périmètre : 25 cartes jouables.
- État : VALIDATED
- Contrôles : structure, réponses/index, fuite, formulation V/F, exactitude, références, indices Mystère, contexte et jouabilité.
- Corrections : `v58-m-005`, `v58-tf-003`, `v58-tf-006`.
- Recompte : 25 IDs uniques ; `v58-tf-012` inclus et revérifié (affirmation, réponse vraie, explication et référence Joël 2:28-29 cohérentes). L’ancien total de 24 était une erreur de comptage du registre, pas une carte retirée.
- CI + GitHub Pages : verts.

## SEM-V104-001-HISTORIQUE — supersédé par SEM-V104-002
- Source : `src/data/jw_enrichment_v104.ts`
- SHA source validé : `4af72a2b73d9de486bf9f76cacd72dffcb1b5556`
- Périmètre : 40 cartes.
- État : VALIDATED
- Revalidation ciblée 2026-10-13 : `v104-q-006` reformulée en question factuelle directe ; réponse, référence et explication conservées.
- Corrections : `v104-tf-008`, `v104-tf-012`.
- CI + GitHub Pages : verts.

## SEM-V105-001-HISTORIQUE — supersédé par SEM-V105-002
- Source : `src/data/jw_enrichment_v105.ts`
- SHA source validé : `401397a34f80594232a321227f9c4e6d9b146ef4`
- Périmètre : 42 cartes.
- État : VALIDATED
- Corrections : `v105-tf001`, `v105-tf004`, `v105-tf005`, `v105-tf008`, `v105-m002`.
- CI + GitHub Pages : verts.

## SEM-V106-001
- Source : `src/data/jw_enrichment_v106_characters.ts`
- SHA source validé : `940c3e28213a03eba7a9c2e314b6419a2b0d893a`
- Périmètre : 60 cartes.
- Revalidation ciblée 2026-10-13 : 10 cartes personnages reformulées pour remplacer les questions génériques sur une « qualité » par des faits bibliques directs.
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
- SHA source validé : `3a8be5efa45bdc4d9a5a3cc289148c6c99fcda2d`
- Périmètre : 187 cartes jouables.
- Revalidation ciblée 2026-10-13 : trois formulations `Que montre…` ont été remplacées par des questions factuelles directes (`jwcat-quiz-14`, `jwcat-quiz-28`, `jwcat-quiz-30`) ; réponses, références et explications conservées.
- État : VALIDATED
- Répartition : 96 Quiz, 39 Vrai/Faux, 12 Mystère, 8 Time’s Up, 8 Citations, 8 Chronologie, 8 Intrus, 8 Défi.
- Corrections : V/F Révélation, références manuscrits, 2 Timothée 4:13, procès de Jésus, Michée, maladies cutanées, chronologie jwcat-chrono-2.
- CI + GitHub Pages : verts.


## SEM-CHRONO-001
- Source : `src/data/chronologyQuestions.ts`
- SHA : `ee9abe3aa77505370f1111e91d55b83aa2139c24`
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


## SEM-COMP-001-HISTORIQUE — supersédé par COMPLETE-SONGS-VERSE-20261013
- Source : `src/data/completeTheVerseQuestions.ts`
- SHA historique : `4b816932b661b07bcea440d0ef21e6134e66b924`
- 76 cartes ; cette preuve documentaire est conservée pour l’historique.
- Elle n’est plus comptée comme bloc de couverture courant afin d’éviter un double comptage avec `COMPLETE-SONGS-VERSE-20261013`.

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
- SHA finaux : L4 `1a1673863b47fe355e73b8cf554d05227d83e1ac`, L5 `22cd3ee007b71a3e25d5225399e5db4fdd1820f3`.


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
- SHA contrôlés : L1 `447b1dc2229adbb6051861311dd844a27f821afe`, L2 `090db42512698e17130acb15c40c204cde470898`, L3 `78f3f8711853b0a0096e37c3860078301fc47477`, L4 `1a1673863b47fe355e73b8cf554d05227d83e1ac`, L5 `22cd3ee007b71a3e25d5225399e5db4fdd1820f3`, L6 `3b1e6d54b00fc5c6a47b586726d1e9d81dc1991c`.
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
- SHA `audit-content.mjs` : `33528b05d4ee610fb208b490b2b29489e285b65b`.
- Inventaire corrigé : 3 163 cartes dans 74 banques supplémentaires + 477 cartes de base conservées dans `questions.ts` = **3 640 cartes uniques jouables**.
- Contrôle CI : 3 640/3 640 cartes routées ; 74/74 banques supplémentaires avec preuve de route ; 0 banque non routée ; 0 doublon d’ID résiduel ; 0 groupe de doublons de questions normalisées.
- Les banques générées depuis des tuples (V54, jwCategories) sont comptées ; les IDs de base retirés intentionnellement pour éviter les doublons ne sont pas recomptés.
- Les 17 cartes V54 Qui est-ce ? non couvertes par le bloc éditorial initial sont désormais validées dans `SEM-V54-002`. Le filtre d’inventaire a aussi été corrigé pour compter les 8 cartes V61 « Mot interdit » (`v61-m-001`–`v61-m-008`) déjà couvertes par `SEM-V61-001`.
- Les quatre modes officiels restent Quiz, Vrai / Faux, Qui est-ce ? et Compléter les paroles.
- Règle anti-répétition : conserver les validations existantes tant que leur source et leur périmètre restent inchangés.


- Revalidation ciblée complémentaire du 09/10/2026 : `char-l1-q-02-10` reformulée sur la promesse précise de l’alliance après le Déluge ; `char-l1-q-18-04` remplacée par l’épisode de Pierre marchant sur l’eau ; `char-l1-q-18-10` différenciée en question sur le chant du coq ; `char-l1-q-20-09` remplacée par l’arrivée de Jean au tombeau. Réponses, index, explications et références vérifiés ; SHA L1 actualisé. Les cartes non modifiées conservent leur validation antérieure.


- Revalidation ciblée complémentaire du 09/10/2026 : `char-l2-q-23-07` remplacée par une question sur le nom « Mara » demandé par Noémi ; `char-l2-q-28-02` remplacée par une question sur la déclaration de Jésus au sujet du salut venu dans la maison de Zachée ; `char-l2-q-33-01` remplacée par la raison donnée par Ésaü pour céder son droit d’aînesse. Vérification des index de réponse, explications et références ; SHA L2 actualisé. Les autres cartes L2 n’ont pas été modifiées dans ce lot.


## Rééquilibrage Vrai/Faux ciblé — L1 à L3 (09/10/2026)
- L1 : répartition historique avant la passe du 10/10/2026 ; remplacée par le comptage exact du bloc de rééquilibrage final.
- L2 : répartition historique avant la passe du 10/10/2026 ; remplacée par le comptage exact du bloc de rééquilibrage final.
- L3 : répartition historique avant la passe du 10/10/2026 ; remplacée par le comptage exact du bloc de rééquilibrage final.
- Les explications ont été réécrites pour donner le fait exact et les références ont été conservées ou ajustées vers les passages qui établissent le fait. Cette correction est ciblée ; elle ne signifie pas que toutes les cartes des blocs L1–L3 ont été relues une par une.
- Les SHA des sources L1–L3 sont actualisés dans leurs blocs respectifs. Une validation CI et une relecture finale des propositions sont encore nécessaires avant fusion.


## Rééquilibrage Vrai/Faux ciblé — L4 (09/10/2026)
- Source : `src/data/characterQuestionsL4.ts`, SHA courant `1a1673863b47fe355e73b8cf554d05227d83e1ac`.
- Cinq propositions auparavant fausses ont été remplacées par des faits positifs précis : Joseph d’Arimathie demandant le corps de Jésus, Jaïrus suppliant Jésus pour sa fille, le doute de Thomas, les bonnes actions de Tabitha et la mission confiée à Ananias.
- Répartition après modification : 26 Vrai / 26 Faux sur 52 cartes.
- Les références ont été vérifiées sur les passages associés, notamment Jean 20:24-29 pour Thomas. Cette passe ne constitue pas une relecture éditoriale intégrale des 292 cartes L4.
- Ne clore qu’après CI verte sur le SHA final et vérification du déploiement si déclenché.


## Revalidation ciblée SEM-L5/L6 — questions ambiguës ou répétitives (09/10/2026)
- L5 : `char-l5-q-82-1` précise que Félix est le gouverneur qui convoqua Paul ; `char-l5-q-86-9` demande la congrégation de Phœbé ; `char-l5-q-87-7` distingue le conseil adressé à Évodie et Syntyche ; `char-l5-q-93-9` identifie Hilkija comme celui qui trouva le livre de la Loi ; `char-l5-q-94-1` demande quel livre les enseignants de Josaphat emportaient ; `char-l5-q-94-7` porte sur le message de Jahaziel avant la bataille.
- L6 : `char-l6-q-116-9` différencie l’épisode chez Marie en demandant ce que faisaient les disciples réunis ; `char-l6-tf-123-2` remplace « associé à » par le fait précis que Gaïus et Aristarque furent entraînés au théâtre pendant l’émeute à Éphèse.
- Références et index de réponse conservés/contrôlés sur Actes 24:24-25, Romains 16:1-2, Philippiens 4:2-3, 2 Rois 22:8-10, 2 Chroniques 17:7-9, 2 Chroniques 20:14-17 et Actes 12:12-13 / 19:29.
- Cette revalidation est limitée aux huit cartes listées ; ne pas interpréter le nouveau SHA comme une relecture intégrale de L5/L6.


## Rééquilibrage Vrai/Faux ciblé — L5 (09/10/2026)
- Source : `src/data/characterQuestionsL5.ts`, SHA courant `a45c994b562905d0e84d2e3c2dad16000e3eb2d1`.
- Sept affirmations réécrites en propositions fausses précises : centurion (serviteur/fille), lieu de détention de Paul sous Félix, audience d’Agrippa II, lieu de l’audience de Bérénice, envoi d’Épaphrodite, fonction de Naamân et royaume gouverné par Josias.
- Répartition actuelle : 29 Vrai / 21 Faux sur 50 cartes.
- Les explications donnent le fait correct et les références bibliques ont été conservées ou étendues. Cette passe est ciblée ; elle ne constitue pas une relecture intégrale de L5.
- CI verte nécessaire avant fusion.


## Amélioration ciblée des Vrai/Faux L6 (09/10/2026)
- Huit cartes ont été réécrites pour remplacer des affirmations absurdes ou peu informatives par des propositions factuelles fausses mais proches du sujet : distinction Abdias/Édom, Joël/sauterelles, Nahoum/Ninive et trajet de Joseph avec Jésus et Marie.
- Chaque proposition conserve `answer:false`, donne le fait correct dans l’explication et cite les passages pertinents. La répartition L6 reste 49 Vrai / 46 Faux sur 95 cartes.
- Contrôle ciblé seulement : ne pas considérer ces huit modifications comme une relecture complète de L6 ni de toutes les banques Vrai/Faux.


## Rééquilibrage Vrai/Faux ciblé — L1, suite (09/10/2026)
- Six cartes réécrites : Adam et sa désobéissance, le trajet de Sara après Harân, le retour de Jacob depuis Paddan-Aram, le rôle de Moïse avant la traversée du Jourdain, la capitale de Salomon et la région de prédication de Jean le Baptiseur.
- Les six propositions sont maintenant fausses, avec explication du fait exact et références bibliques. Répartition L1 : 31 Vrai / 13 Faux sur 44 cartes.
- Cette passe est ciblée et ne vaut pas validation éditoriale intégrale de L1.


- Revalidation ciblée complémentaire du 09/10/2026 : six Vrai/Faux L2 modifiés puis contrôlés individuellement : `char-l2-tf-30-2` (Corneille/Césarée et Joppé), `char-l2-tf-32-2` (départ de Léa de Paddan-Aram), `char-l2-tf-34-3` (qui donna la dîme à Melkisédek), `char-l2-tf-35-2` (rencontre de Jéthro avec Moïse après l’Exode), `char-l2-tf-37-2` (rébellion de Coré) et `char-l2-tf-39-2` (Balak demanda à Balaam, non à Josué, de maudire Israël). Les six propositions sont fausses, avec explications factuelles et références vérifiées ; elles remplacent des affirmations vraies redondantes ou trop proches d’autres cartes. Ce contrôle ciblé ne constitue pas une relecture intégrale de L2.

- Revalidation ciblée complémentaire du 10/10/2026 : `char-l2-tf-36-3` simplifiée pour nommer directement l’incident et la circoncision de son fils par Séphora (Exode 4:24-26) ; `char-l3-tf-56-1` resserrée sur le rôle de prophète et le compagnonnage missionnaire de Silas (Actes 15:22, 32, 40 ; 16:19-25) ; `char-l3-tf-60-1` remplacée par le fait direct qu’Eutyche s’endormit pendant le discours de Paul et tomba du troisième étage (Actes 20:7-10). Réponses, explications et références contrôlées individuellement ; aucune relecture intégrale de L2/L3 n’est revendiquée.

- Revalidation ciblée complémentaire du 10/10/2026 : L2 `char-l2-tf-23-3` rend l’affirmation sur Noémi plus directe et vérifiable (Ruth 1:19-21 ; 4:13-17) ; `char-l2-tf-25-1` énonce directement la succession d’Élisée à Élie (2 Rois 2:9-15) ; `char-l2-tf-30-1` isole le fait que Corneille était un centurion de Césarée qui craignait Dieu (Actes 10:1-2) ; `char-l2-tf-35-1` est raccourcie au rôle de Jéthro (Exode 2:16-22 ; 3:1) ; L3 `char-l3-tf-54-3` ne répète plus la carte facile sur Gamaliel et vérifie son argument précis au Sanhédrin (Actes 5:38-40). Réponses, explications et références vérifiées pour ces cinq cartes uniquement ; aucune validation intégrale de L2/L3 n’est revendiquée.


## Revalidation ciblée Vrai/Faux L4 — faits bibliques plus précis (10/10/2026)
- Source : `src/data/characterQuestionsL4.ts`, SHA du contenu après corrections : `1a1673863b47fe355e73b8cf554d05227d83e1ac`.
- Six cartes expert corrigées et relues individuellement : `char-l4-tf-74-2` distingue Philippe l’apôtre de Philippe l’évangélisateur (Actes 6:3-6 ; Matthieu 10:2-4) ; `char-l4-tf-64-4` précise que Jaïrus demanda de l’aide pour sa fille, non son fils (Marc 5:22-24, 35-43) ; `char-l4-tf-65-4` indique que Thomas crut après avoir vu Jésus ressuscité (Jean 20:24-29) ; `char-l4-tf-69-4` situe Ananias et Saul à Damas, non à Jérusalem (Actes 9:10-18) ; `char-l4-tf-76-4` distingue Jacques fils d’Alphée de Jacques fils de Zébédée (Matthieu 10:2-4 ; Marc 3:16-18) ; `char-l4-tf-79-4` situe la guérison de Bartimée près de Jéricho, non à Capharnaüm (Marc 10:46-52).
- Les affirmations sont fausses sans ambiguïté, les explications donnent le fait biblique exact et les références pointent vers les récits correspondants. Contrôle limité à ces six cartes ; aucune validation intégrale de L4 n’est revendiquée.


## Revalidation ciblée Vrai/Faux L4 — faits narratifs précis (10/10/2026)
- Source : `src/data/characterQuestionsL4.ts`, SHA après corrections : `1a1673863b47fe355e73b8cf554d05227d83e1ac`.
- Huit cartes corrigées et contrôlées individuellement : `char-l4-tf-70-2` (rencontre de l’eunuque sur la route de Gaza, non à Césarée), `char-l4-tf-70-4` (explication des Écritures avant le baptême), `char-l4-tf-71-2` (distinction Jacques fils de Zébédée/Jacques frère de Jésus), `char-l4-tf-71-4` (mort de Jacques fils de Zébédée avant la réunion d’Actes 15), `char-l4-tf-72-2` (incrédulité des frères de Jésus pendant son ministère), `char-l4-tf-72-4` (Jacques frère de Jésus ne faisait pas partie des Douze), `char-l4-tf-73-2` (Jude ne croyait pas en Jésus pendant son ministère) et `char-l4-tf-73-4` (Jude se présente comme esclave de Jésus Christ, pas comme apôtre).
- Les affirmations restent fausses sans ambiguïté ; explications et références précisent le fait biblique exact. Références contrôlées sur Actes 8:26-40; 12:1-2; 15:1-29, Matthieu 4:21-22; 10:2-4, Jean 7:5, Actes 1:13-14, Galates 1:19, 1 Corinthiens 15:7 et Jude 1.
- Cette revalidation porte uniquement sur ces huit cartes et ne constitue pas une relecture intégrale de L4. Ne pas déclarer la passe clôturée avant CI verte sur le SHA final.


### Historique ciblé des revalidations L4 — 2026-10-10
- Source : `src/data/characterQuestionsL4.ts`
- SHA source validé : `1a1673863b47fe355e73b8cf554d05227d83e1ac`
- Note : ce bloc est un historique de revalidations ciblées, pas un second bloc de couverture des 292 cartes.
- Revalidations ciblées récentes : `char-l4-tf-74-2`, `char-l4-tf-64-4`, `char-l4-tf-65-4`, `char-l4-tf-69-4`, `char-l4-tf-76-4`, `char-l4-tf-79-4` (PR #44), puis `char-l4-tf-70-2`, `char-l4-tf-70-4`, `char-l4-tf-71-2`, `char-l4-tf-71-4`, `char-l4-tf-72-2`, `char-l4-tf-72-4`, `char-l4-tf-73-2`, `char-l4-tf-73-4` (PR #45).
- Les corrections de ces cartes ont été contrôlées individuellement ; les cartes non modifiées conservent la validation éditoriale antérieure du lot.
- Clôture technique : uniquement après CI verte et concordance exacte du SHA source. Toute nouvelle modification du fichier impose de mettre à jour ce SHA et de recontrôler les cartes modifiées.


### Revalidation ciblée L4 — six cartes Vrai/Faux — 2026-10-10
- Source après corrections : `src/data/characterQuestionsL4.ts`, SHA `1a1673863b47fe355e73b8cf554d05227d83e1ac`.
- Cartes contrôlées individuellement : `char-l4-tf-74-4` (Philippe l’apôtre distingué des sept hommes d’Actes 6), `char-l4-tf-75-4` (Matthias, et non Barthélemy, remplace Judas), `char-l4-tf-77-4` (Simon le Zélote distinct de Simon Pierre), `char-l4-tf-78-2` (distinction avec Lydie, marchande de pourpre), `char-l4-tf-78-4` (âge de douze ans à la résurrection de la fille de Jaïrus), `char-l4-tf-79-2` (Bartimée mendiant aveugle près de Jéricho).
- Références : Actes 1:21-26; 6:3-6; 16:11-15; Matthieu 10:2-4; Luc 6:13-16; Marc 5:41-42; 10:46-52.
- Cette note documente six corrections ciblées, et non une nouvelle relecture intégrale des 292 cartes L4. La validation technique reste en attente de CI verte sur le SHA final.


### Historique ciblé des revalidations L4 — 2026-10-10
- Trois explications Vrai/Faux clarifiées dans `src/data/characterQuestionsL4.ts` : `char-l4-tf-75-2` (Barthélemy et la synagogue), `char-l4-tf-76-2` (Jacques fils d’Alphée distinct de Jacques fils de Zébédée) et `char-l4-tf-77-2` (Simon Pierre distinct de Simon le Zélote).
- Les affirmations restent fausses ; les explications indiquent maintenant directement le fait biblique qui réfute chaque proposition. Revalidation ciblée uniquement, pas de relecture intégrale du bloc L4.


## Rééquilibrage Vrai/Faux L1-L3 — 2026-10-10

Cette passe transforme 29 affirmations auparavant vraies en affirmations fausses précises, sans changer les IDs. Pour chacune, la proposition, la réponse, l’explication et la référence ont été contrôlées individuellement. Les autres cartes des lots gardent la validation antérieure, les sources n’ayant été modifiées que sur les IDs listés.

- L1 — SHA `2a161a84f1e722ba7592f7110ed148b631198f43` : `char-l1-tf-02-1`, `char-l1-tf-05-1`, `char-l1-tf-08-1`, `char-l1-tf-09-1`, `char-l1-tf-10-1`, `char-l1-tf-12-1`, `char-l1-tf-13-2`, `char-l1-tf-14-1`, `char-l1-tf-17-2`. Répartition finale : **22 Vrai / 22 Faux**.
- L2 — SHA `5add3dd187eb5cf46e8138ed8978dbf20f0a4f7f` : `char-l2-tf-21-1`, `char-l2-tf-26-1`, `char-l2-tf-31-1`, `char-l2-tf-32-1`, `char-l2-tf-33-1`, `char-l2-tf-33-2`, `char-l2-tf-34-2`, `char-l2-tf-35-1`, `char-l2-tf-36-1`, `char-l2-tf-37-1`. Répartition finale : **25 Vrai / 25 Faux**.
- L3 — SHA `b8eac64085c611c0fa04697b27ac540ea298c864` : `char-l3-tf-43-1`, `char-l3-tf-44-1`, `char-l3-tf-46-1`, `char-l3-tf-47-1`, `char-l3-tf-48-1`, `char-l3-tf-50-1`, `char-l3-tf-51-2`, `char-l3-tf-58-2`, `char-l3-tf-59-2`, `char-l3-tf-60-1`. Répartition finale : **24 Vrai / 24 Faux**.
- Garde-fou CI ajouté : chaque banque personnages L1-L6 doit garder une proportion de réponses fausses entre 40 % et 60 %, afin qu’un bon total global ne masque pas un lot déséquilibré.
- Cette passe ne touche ni AVENTURE, ni Ma Bible, ni `src/data/characterLearning.ts`.


### Historique ciblé des revalidations L4 — 2026-10-11
- `char-l4-tf-65-1` : fait précis sur la réaction de Thomas lorsque Jésus décide de retourner en Judée (Jean 11:7-8, 14-16), à la place de l’affirmation générique qu’il était l’un des Douze.
- `char-l4-tf-79-1` : cri de Bartimée et persévérance malgré la foule (Marc 10:46-52), afin d’éviter la répétition quasi identique avec `char-l4-tf-79-2`.
- Revalidation ciblée de ces deux cartes uniquement ; aucune nouvelle couverture intégrale L4 n’est déclarée.


### Historique ciblé des revalidations L6 — 2026-10-11
- `char-l6-tf-113-3` : l’affirmation générique « Jason était l’un des Douze apôtres » est remplacée par un fait directement tiré d’Actes 17:5-9 : la foule hostile chercha Paul et Silas dans la maison de Jason et, ne les trouvant pas, entraîna Jason devant les chefs de la ville.
- Revalidation ciblée de cette carte uniquement ; aucune nouvelle couverture intégrale L6 n’est déclarée.


### Historique ciblé des revalidations L4 — 2026-10-11 (références)
- `char-l4-tf-61-1` : référence complétée par Jean 11:1, 18 pour appuyer explicitement Béthanie et sa proximité avec Jérusalem.
- `char-l4-tf-64-1` : suppression de la précision « en Galilée », non établie par Marc 5:21-22 ; la carte conserve le fait explicite que Jaïrus était responsable d’une synagogue.
- `char-l4-tf-70-1` : formulation resserrée sur les lieux où Actes 8 décrit explicitement la prédication de Philippe, sans présenter son service d’Actes 6 comme une prédication.
- `char-l4-tf-75-2` : référence corrigée vers Matthieu 10:2-4, qui cite explicitement Barthélemy parmi les Douze.
- Revalidation ciblée de ces quatre cartes uniquement ; aucune nouvelle couverture intégrale L4 n’est déclarée.


### Historique ciblé des revalidations L6 — 2026-10-12
- `char-l6-tf-106-4` : remplace « Élisabeth était gouverneure de Judée » par le fait précis de ses cinq mois à l’écart (Luc 1:24-25).
- `char-l6-tf-112-3` : remplace le distracteur « gouverneur romain » par le désir de l’homme guéri d’accompagner Jésus (Marc 5:18-20).
- `char-l6-tf-113-4` : remplace « Jason était le grand prêtre » par la garantie fournie avant sa libération (Actes 17:8-9).
- `char-l6-tf-122-3` : remplace « Julius était gouverneur » par son intervention pour empêcher l’exécution des prisonniers et sauver Paul (Actes 27:42-44).
- `char-l6-tf-124-3` : remplace « Aristarque était gouverneur » par sa présence pendant le voyage maritime vers Rome (Actes 27:1-2).
- Revalidation ciblée de ces cinq cartes uniquement ; aucune nouvelle couverture intégrale L6 n’est déclarée.


### Historique ciblé des revalidations L1/L5/L6 — 2026-10-12
- `char-l1-tf-13-4` : remplace le distracteur trivial « Élie était roi » par l’annonce précise de la sécheresse à Achab (1 Rois 17:1).
- `char-l5-tf-83-4` : remplace « Festus était grand prêtre » par sa proposition de juger Paul à Jérusalem (Actes 25:9-12).
- `char-l5-tf-87-4` : remplace la formulation absolue sur un désaccord par la demande de Paul d’aider Évodie et Syntyche (Philippiens 4:2-3).
- `char-l5-tf-88-4` : remplace « ne tomba jamais malade » par l’état d’esprit d’Épaphrodite après que les Philippiens apprirent sa maladie (Philippiens 2:25-30).
- `char-l6-tf-105-4` : remplace « Zacharie était grand prêtre » par le retour de sa parole lorsque Jean reçut son nom (Luc 1:20, 62-64).
- `char-l6-tf-108-4` : remplace « Caïphe était gouverneur » par son conseil qu’un seul homme meure pour le peuple (Jean 11:49-53 ; 18:14).
- Revalidation ciblée de ces six cartes uniquement ; aucune nouvelle couverture intégrale n’est déclarée.

- Ajustement CI du même lot : `char-l5-tf-87-4` et `char-l5-tf-88-4` restent des cartes Faux, avec des affirmations bibliquement réfutables et moins artificielles, afin de conserver l’équilibre Vrai/Faux de la banque L5.


## Bloc SEM-LEGACY-CHALLENGES-001 — RETIRED — 2026-10-12
- Périmètre : 139 cartes legacy de type challenge (challenge-*, V54/V55/V56 et jwcat-challenge-*).
- Décision : retrait définitif du gameplay final ; elles ne sont plus injectées dans aucun des quatre modes officiels.
- Motif : ces cartes imposent l'ancien format Défi 10 secondes et ne correspondent plus à l'architecture finale Quiz / Vrai-Faux / Qui est-ce ? / Compléter les paroles.
- Contrôle : l'audit doit compter exactement 139 cartes legacy et échouer si l'une d'elles réapparaît dans GAME_CONTENT.
- Important : elles restent dans les sources historiques pour ne pas modifier les blocs éditoriaux VALIDATED ; elles ne font plus partie du total des cartes jouables.
- État : RETIRED ; 139/139 traitées ; 0 restante à migrer.


## Revalidation ciblée SEM-MYSTERY-L6-002 — 2026-10-12
- Source : `src/data/characterQuestionsL6.ts`.
- Nouveau SHA source : `8a0040a342bc9ded4f0f52b78f013290ed3edbd6`.
- Cartes contrôlées individuellement : `char-l6-m-101-2` et `char-l6-m-102-2`.
- `char-l6-m-101-2` a été différenciée de `char-l6-m-101-1` par des indices sur Moresheth, le jugement de Samarie/Jérusalem et Bethléhem ; référence réalignée sur Michée 1:1, 5; 5:1.
- `char-l6-m-102-2` a été différenciée de `char-l6-m-102-1` par les indices sur le malheur de Jacob, la réaction d’Édom et les rescapés du mont Sion ; référence réalignée sur Abdias 10-17.
- Réponses, explications et références vérifiées individuellement. Les autres cartes L6 conservent leur validation antérieure ; cette note ne constitue pas une relecture intégrale de L6.


## Bloc SEM-L6-004 — REVALIDATED — 2026-10-12
- Source : `src/data/characterQuestionsL6.ts`
- SHA : `43da5abf3bbc4504b7534abeac1fcc61d589bf37`
- Taille : 395 cartes
- État : VALIDATED
- Périmètre : 395 cartes L6 (3 banques : Quiz, Vrai/Faux, Qui est-ce ?).
- Contrôle ciblé : les quatre cartes modifiées sur ce SHA ont été relues individuellement : `char-l6-q-104-9`, `char-l6-q-114-7`, `char-l6-q-116-10`, `char-l6-q-120-9`.
- Les 391 autres cartes conservent la validation éditoriale antérieure ; ce bloc met à jour la couverture SHA après les quatre modifications ciblées.
- Contrôles : formulations factuelles, réponses uniques, références alignées.
- Exceptions ouvertes : aucune.
## Bloc SEM-L5-005 — REVALIDATED — 2026-10-12
- Source : `src/data/characterQuestionsL5.ts`
- SHA : `08cf2a642b44f12e48222bf636ad0569bc267d63`
- Taille : 290 cartes
- État : VALIDATED
- Périmètre : 290 cartes L5.
- Contrôle ciblé : cinq cartes factuelles ont été corrigées et relues individuellement : `char-l5-q-81-3`, `char-l5-q-81-5`, `char-l5-q-83-8`, `char-l5-q-84-6`, `char-l5-q-84-7`.
- Les 285 autres cartes conservent la validation éditoriale antérieure.
- Exceptions ouvertes : aucune.
## Bloc SEM-L5-006 — REVALIDATED — 2026-10-12
- Source : `src/data/characterQuestionsL5.ts`
- SHA : `fe08c0295d6e2a35b076cd953388be90e627f746`
- Taille : 290 cartes
- État : VALIDATED
- Périmètre : 290 cartes L5.
- Contrôle ciblé : neuf cartes ont été corrigées et relues individuellement : `char-l5-q-81-10`, `char-l5-q-87-5`, `char-l5-q-90-4`, `char-l5-q-95-3`, `char-l5-tf-83-1`, `char-l5-tf-84-1`, `char-l5-tf-85-1`, `char-l5-tf-86-1`, `char-l5-tf-87-1`.
- Les 281 autres cartes conservent la validation éditoriale antérieure.
- Exceptions ouvertes : aucune.


## Bloc SEM-L4-NEW-2026-10-12 — REVALIDATED
- Source : `src/data/characterQuestionsL4.ts`
- SHA : `e4283b13cc935c2734560097cbdf21faf5ad70b4`
- Taille : 292 cartes
- État : VALIDATED
- Périmètre : 292 cartes L4. Passe éditoriale ciblée sur 7 cartes présentant une formulation abstraite, une explication désalignée, une réponse insuffisamment spécifique ou un indice inutilisable.
- Cartes relues et corrigées : `char-l4-q-63-7`, `char-l4-q-74-2`, `char-l4-q-74-4`, `char-l4-q-75-1`, `char-l4-q-75-2`, `char-l4-q-77-6`, `char-l4-m-78-1`.
- 285 cartes L4 conservent leur validation antérieure.
- Aucun autre fichier AVENTURE ou Ma Bible modifié.


## Bloc SEM-L4-NEW-2026-10-12-B — REVALIDATED
- Source : `src/data/characterQuestionsL4.ts`
- SHA : `64b58421556aaaeed05ef579afdfcf0dca2196f4`
- Taille : 292 cartes
- État : VALIDATED
- Périmètre : 292 cartes L4. Deuxième passe éditoriale ciblée sur 5 cartes présentant une explication désalignée, une inférence trop forte ou une question moins directe que nécessaire.
- Cartes relues et corrigées : `char-l4-q-62-2`, `char-l4-q-64-5`, `char-l4-q-65-1`, `char-l4-q-71-8`, `char-l4-q-77-7`, `char-l4-q-77-9`, `char-l4-m-76-1`.
- 285 cartes L4 conservent leur validation antérieure.
- Aucun autre fichier AVENTURE ou Ma Bible modifié.


### Revalidation ciblée L3 — 2026-10-12 (huit cartes)
- Source : `src/data/characterQuestionsL3.ts`
- SHA : `4bce6f6a9a71c3cf8e1dd5972f97c77c654df0df`
- `char-l3-q-49-10` rend la question directe sur la mise en pratique de la Loi par Esdras ; `char-l3-q-58-08` demande directement pourquoi Paul remerciait Dieu au sujet de Philémon ; `char-l3-m-57-2` utilise trois indices concrets et non redondants pour Onésime ; `char-l3-q-46-04` demande directement la réponse d’Isaïe à l’appel de Jéhovah ; `char-l3-m-42-2` utilise trois indices concrets sur Mikal.
- Réponses, explications et références conservées et contrôlées individuellement. Les 282 autres cartes conservent leur validation antérieure ; cette passe ne constitue pas une relecture intégrale de L3.

## Bloc SEM-CHRONO-001 — VALIDATED — 2026-10-12
- Source : `src/data/chronologyQuestions.ts`
- SHA source validé : `5b978b2b521014e7b9c2c816c44bfbe04347c1a3`
- Périmètre : `chrono-01`–`chrono-52` — chronologie biblique, de la période patriarcale jusqu'à la destruction de Jérusalem en 70 de n. è.
- Taille : 52 cartes
- État : VALIDATED
- Contrôles : structure, 4 réponses/index, absence de fuite de réponse, formulation directe, distinction des événements et des dates, plausibilité des distracteurs, cohérence des explications et références, jouabilité en Quiz.
- Contrôle éditorial : les 52 cartes ont été contrôlées individuellement ; les dates et événements sont alignés sur la chronologie de JW.org utilisée par le fichier.
- Références principales : Frise chronologique de la Bible — JW.org ; Esdras 6:14-15 pour l'achèvement du temple.
- Exceptions ouvertes : aucune.
- Règle : ne pas réauditer tant que le SHA source reste inchangé.


### Revalidation ciblée L3 — 2026-10-12 (onze cartes Mystère)
- Source : `src/data/characterQuestionsL3.ts`
- SHA : `e4c88ad90c7e9b620558d65d2a5fffa0499f2785`
- Taille : 288 cartes
- État : VALIDATED
- Cartes Mystère relues et corrigées individuellement : `char-l3-m-46-1`, `char-l3-m-47-1`, `char-l3-m-48-1`, `char-l3-m-49-1`, `char-l3-m-50-1`, `char-l3-m-51-1`, `char-l3-m-51-2`, `char-l3-m-52-1`, `char-l3-m-52-2`, `char-l3-m-53-1`, `char-l3-m-53-2`.
- Les indices abstraits ou redondants ont été remplacés par des faits bibliques concrets ; les deux cartes Aggée et les deux cartes Zacharie sont désormais nettement différenciées.
- Les autres cartes L3 conservent leur validation éditoriale antérieure ; cette passe ne constitue pas une relecture intégrale de L3.
- Exceptions ouvertes : aucune.


### Revalidation ciblée L3 — 2026-10-12 (huit cartes Mystère)
- Source : `src/data/characterQuestionsL3.ts`
- SHA : `edd2028422efa2cac15918b7b8551d85d3af15bc`
- Taille : 288 cartes
- État : VALIDATED
- Cartes Mystère relues et corrigées individuellement : `char-l3-m-50-2`, `char-l3-m-54-1`, `char-l3-m-54-2`, `char-l3-m-55-1`, `char-l3-m-55-2`, `char-l3-m-56-1`, `char-l3-m-56-2`, `char-l3-m-57-1`.
- Les indices abstraits, génériques ou redondants ont été remplacés par des faits bibliques concrets ; les deux cartes de chaque personnage sont désormais nettement différenciées lorsque cela était nécessaire.
- Les réponses, explications et références ont été contrôlées individuellement sur le périmètre ciblé.
- Les autres cartes L3 conservent leur validation éditoriale antérieure ; cette passe ne constitue pas une relecture intégrale de L3.
- Exceptions ouvertes : aucune.


### Revalidation ciblée L3 — 2026-10-12 (cinq cartes Mystère)
- Source : `src/data/characterQuestionsL3.ts`
- SHA : `49a9683662bae9f55a64bcc3a72223a3d6e9597b`
- Taille : 288 cartes
- État : VALIDATED
- Cartes relues et corrigées individuellement : `char-l3-m-58-1`, `char-l3-m-59-1`, `char-l3-m-59-2`, `char-l3-m-60-1`, `char-l3-m-60-2`.
- Les indices génériques, répétitifs ou non discriminants ont été remplacés par des faits bibliques concrets et les deux cartes de chaque personnage ont été différenciées.
- Les autres cartes L3 conservent leur validation éditoriale antérieure ; cette passe ne constitue pas une relecture intégrale de L3.
- Exceptions ouvertes : aucune.


### Revalidation ciblée L3 — 2026-10-12 (dix cartes Mystère)
- Source : `src/data/characterQuestionsL3.ts`
- SHA : `f73ac7d5d662cc7a416d8dd021e54b4f983abd10`
- Taille : 288 cartes
- État : VALIDATED
- Cartes Mystère relues et corrigées individuellement : `char-l3-m-41-1`, `char-l3-m-41-2`, `char-l3-m-42-1`, `char-l3-m-42-2`, `char-l3-m-43-1`, `char-l3-m-43-2`, `char-l3-m-44-1`, `char-l3-m-44-2`, `char-l3-m-45-1`, `char-l3-m-45-2`.
- Les indices vagues, qualités génériques et formulations non discriminantes ont été remplacés par des faits bibliques concrets ; les deux cartes de chaque personnage sont différenciées.
- Réponses, explications et références contrôlées individuellement sur ce périmètre.
- Les autres cartes L3 conservent leur validation éditoriale antérieure ; cette passe ne constitue pas une relecture intégrale de L3.
- Exceptions ouvertes : aucune.


### Revalidation ciblée L3 — 2026-10-12 (trois cartes Quiz)
- Source : `src/data/characterQuestionsL3.ts`
- SHA : `0d65c7290cbb1a6714d4b25a5c6990a2ebb1c99c`
- Taille : 288 cartes
- État : VALIDATED
- Cartes relues et corrigées individuellement : `char-l3-q-53-09`, `char-l3-q-55-08`, `char-l3-q-59-05`.
- Les questions ont été rendues plus directes et centrées sur le fait biblique demandé, sans modifier les réponses, explications ou références validées.
- Les autres cartes L3 conservent leur validation éditoriale antérieure ; cette passe ne constitue pas une relecture intégrale de L3.
- Exceptions ouvertes : aucune.

### Revalidation ciblée L3 — 2026-10-12 (quatre cartes Vrai/Faux)
- Source : `src/data/characterQuestionsL3.ts`
- SHA : `16cf1de0c1ddac846a2190df3e033e29492e51a3`
- Taille : 288 cartes
- État : VALIDATED
- Cartes relues et corrigées individuellement : `char-l3-tf-41-3`, `char-l3-tf-42-2`, `char-l3-tf-60-1`, `char-l3-tf-60-2`.
- Les formulations composées ou imprécises ont été resserrées sur un fait directement vérifiable : vœu et service de Hanna, fuite de Mikal par la fenêtre, troisième étage de la chute d’Eutyche et présence d’Eutyche à Troas.
- Réponses, explications et références contrôlées individuellement sur ce périmètre.
- Les autres cartes L3 conservent leur validation éditoriale antérieure ; cette passe ne constitue pas une relecture intégrale de L3.
- Exceptions ouvertes : aucune.


### Revalidation ciblée L3 — 2026-10-12 (quatre cartes Quiz)
- Source : `src/data/characterQuestionsL3.ts`
- SHA : `8b77516e2dfe29f8b6e6d251d1e528dc5cbece63`
- Taille : 288 cartes
- État : VALIDATED
- Cartes relues et corrigées individuellement : `char-l3-q-43-01`, `char-l3-q-43-04`, `char-l3-q-45-06`, `char-l3-q-45-10`.
- Les formulations vagues ou trop générales ont été remplacées par des questions directes ; les distracteurs ont été rendus plus plausibles et centrés sur le fait biblique demandé.
- Réponses, explications et références contrôlées individuellement sur ce périmètre.
- Les autres cartes L3 conservent leur validation éditoriale antérieure ; cette passe ne constitue pas une relecture intégrale de L3.
- Exceptions ouvertes : aucune.



### Revalidation ciblée L3 — 2026-10-12 (deux cartes Quiz Esdras/Apollos)
- Source : `src/data/characterQuestionsL3.ts`
- SHA : `5f3edb0420f1398f23d74a78c20d093d08af787f`
- Taille : 288 cartes
- État : VALIDATED
- Cartes relues/corrigées : `char-l3-q-49-08`, `char-l3-q-55-06`
- Vérifications : formulations directes, réponses plausibles et explications/références cohérentes avec le texte biblique.
- Les autres cartes conservent leur validation antérieure ; cette passe ne constitue pas une relecture intégrale du bloc.
- Exceptions ouvertes : aucune.

### Revalidation ciblée L3 — 2026-10-12 (deux cartes Quiz Joab/Pilate)
- Source : `src/data/characterQuestionsL3.ts`
- SHA : `d0e21f5b5e7c90383fd6f69a0948a0bdd8002ba1`
- Taille : 288 cartes
- État : VALIDATED
- Cartes relues/corrigées : `char-l3-q-43-04`, `char-l3-q-45-10`
- Vérifications : formulations directes, distinction avec les cartes voisines, réponses et explications cohérentes avec les références bibliques.
- Les autres cartes conservent leur validation antérieure ; cette passe ne constitue pas une relecture intégrale du bloc.
- Exceptions ouvertes : aucune.


### Revalidation ciblée L3 — 2026-10-12 (trois cartes Quiz Joab/Pilate/Apollos)
- Source : `src/data/characterQuestionsL3.ts`
- SHA : `12a4dc30e78b2d246db5d9840776d2ce0821d422`
- Taille : 288 cartes
- État : VALIDATED
- Cartes relues/corrigées : `char-l3-q-43-04`, `char-l3-q-45-10`, `char-l3-q-55-07`
- Vérifications : questions directes et distinctes des cartes voisines ; réponses, explications et références cohérentes avec les textes bibliques indiqués.
- Les autres cartes conservent leur validation antérieure ; cette passe ne constitue pas une relecture intégrale du bloc.
- Exceptions ouvertes : aucune.


### Revalidation ciblée L3 — 2026-10-12 (une carte Quiz Malachie)
- Source : `src/data/characterQuestionsL3.ts`
- SHA : `fd9f0c72434487f09757e2e9275bee9777ed4ad1`
- Taille : 288 cartes
- État : VALIDATED
- Carte relue/corrigée : `char-l3-q-53-05`
- Vérifications : question différenciée de `char-l3-q-53-09`, réponse unique, explication et référence alignées sur Malachie 1:11.
- Les autres cartes conservent leur validation antérieure ; cette passe ne constitue pas une relecture intégrale du bloc.
- Exceptions ouvertes : aucune.


### Revalidation ciblée L3 — 2026-10-12 (quatre cartes Quiz Esdras/Aggée)
- Source : `src/data/characterQuestionsL3.ts`
- SHA : `1c50e398ef3e73b3547222677ebd6d08d2b78ba4`
- Taille : 288 cartes
- État : VALIDATED
- Cartes recontrôlées : `char-l3-q-49-02`, `char-l3-q-49-06`, `char-l3-q-49-07`, `char-l3-q-51-01`.
- Corrections : suppression de répétitions conceptuelles ; ajout de faits distincts et directement jouables sur la compétence de copiste d’Esdras, son arrivée à Jérusalem, sa lignée sacerdotale et le message d’Aggée.
- Réponses, explications et références réalignées sur Esdras 7:1-10 et Aggée 1:1-5.
- Les autres cartes conservent leur validation antérieure ; cette passe ne constitue pas une relecture intégrale du bloc.


### Revalidation ciblée L3 — 2026-10-12 (une carte Mystère Joab)
- Source : `src/data/characterQuestionsL3.ts`
- SHA : `a16d9fcf6d42af16953b7cf80be4fbb383ca7594`
- Taille : 288 cartes
- État : VALIDATED
- Carte recontrôlée : `char-l3-m-43-2`.
- Correction : indice rendu plus concret et directement relié au récit de 2 Samuel 19:1-8, sans formulation interprétative inutile.
- Les autres cartes conservent leur validation antérieure ; cette passe ne constitue pas une relecture intégrale du bloc.


### Revalidation ciblée L3 — 2026-10-12 (trois cartes Quiz Apollos — distracteurs)
- Source : `src/data/characterQuestionsL3.ts`
- SHA source : `5128b9c41e07713d405caa5813184657c8bf3dcd`
- Taille : 288 cartes
- État : VALIDATED
- Cartes ciblées : `char-l3-q-55-07`, `char-l3-q-55-08`, `char-l3-q-55-09`
- Contrôle : distracteurs rendus plus plausibles et bibliquement cohérents, sans modifier les bonnes réponses ni les références.
- Les autres cartes conservent leur validation antérieure ; cette passe ne constitue pas une relecture intégrale du bloc.


### Revalidation ciblée L3 — 2026-10-12 (trois cartes Quiz Isaïe/Hérode)
- Source : `src/data/characterQuestionsL3.ts`
- SHA source : `47d36a0ec9c285aababa633cc43a9667b74c1ff1`
- Taille : 288 cartes
- État : VALIDATED
- Cartes ciblées : `char-l3-q-44-05`, `char-l3-q-44-09`, `char-l3-q-46-05`
- Contrôle : formulation rendue plus exacte et directe ; la carte d’Achaz ne prétend plus qu’il demanda le signe, puisque Jéhovah lui proposa de le demander et qu’Achaz refusa ; les cartes d’Hérode sont resserrées sur le récit biblique.
- Les autres cartes conservent leur validation antérieure ; cette passe ne constitue pas une relecture intégrale du bloc.


### Revalidation ciblée L3 — 2026-10-12 (cinq cartes Quiz Jérémie/Joab)
- Source : `src/data/characterQuestionsL3.ts`
- SHA source : `20b0a316d1284539e9e3edda3bf3f297624bd6f1`
- Taille : 288 cartes
- État : VALIDATED
- Cartes ciblées : `char-l3-q-43-06`, `char-l3-q-47-04`, `char-l3-q-47-06`, `char-l3-q-47-08`, `char-l3-q-47-10`
- Contrôle : suppression de plusieurs questions quasi répétées sur la persévérance de Jérémie ; remplacement par des faits bibliques distincts (Jérémie 20:1-2, 20:9, 26:2, 26:16) et correction de la carte Joab/Ahimaaz selon 2 Samuel 18:19-23.
- Les autres cartes conservent leur validation antérieure ; cette passe ne constitue pas une relecture intégrale du bloc.


### Revalidation ciblée L3 — 2026-10-12 (quatre cartes Quiz Ézékiel/Aggée)
- Source : `src/data/characterQuestionsL3.ts`
- SHA source : `c95c42a3cbf44d7850965f7dd38123f320780808`
- Taille : 288 cartes
- État : VALIDATED
- Cartes ciblées : `char-l3-q-48-09`, `char-l3-q-48-10`, `char-l3-q-51-02`, `char-l3-q-51-06`
- Contrôle : remplacement de questions redondantes par des faits bibliques distincts et directement vérifiables ; références resserrées sur Ézékiel 2:5-7, 4:1-3 et Aggée 1:2-8.
- Les autres cartes conservent leur validation antérieure ; cette passe ne constitue pas une relecture intégrale du bloc.


### Revalidation ciblée L3 — 2026-10-12 (quatre cartes Quiz Zacharie/Onésime/Philémon)
- Source : `src/data/characterQuestionsL3.ts`
- SHA source : `c1583ad0d2097c037a32a841efdc33fa8f7cff85`
- Taille : 288 cartes
- État : VALIDATED
- Cartes ciblées : `char-l3-q-52-02`, `char-l3-q-52-10`, `char-l3-q-57-10`, `char-l3-q-58-06`
- Contrôle : suppression de doublons sémantiques ; remplacement par des détails bibliques distincts et directement vérifiables dans Zacharie 1:7-11, 4:8-10 et Philémon 10-17.
- Les autres cartes conservent leur validation antérieure ; cette passe ne constitue pas une relecture intégrale du bloc.


### Revalidation ciblée L3 — 2026-10-12 (quatre cartes Quiz Philémon/Tite)
- Source : `src/data/characterQuestionsL3.ts`
- SHA source : `40bfeea03bcde79758ecf61201e321e2ec1bdb78`
- Taille : 288 cartes
- État : VALIDATED
- Cartes ciblées : `char-l3-q-58-09`, `char-l3-q-58-10`, `char-l3-q-59-06`, `char-l3-q-59-10`
- Contrôle : suppression de répétitions sur la maison de Philémon et l’organisation de la Crète ; remplacement par des faits distincts de Philémon 1, 22 et Tite 1:5-6, 3:12.
- Les autres cartes conservent leur validation antérieure ; cette passe ne constitue pas une relecture intégrale du bloc.


### Revalidation ciblée L3 — 2026-10-12 (trois cartes Quiz Eutyche)
- Source : `src/data/characterQuestionsL3.ts`
- SHA source : `fc726c38fb5b5e1f3c76c9ef3151e43d913e9f7b`
- Taille : 288 cartes
- État : VALIDATED
- Cartes ciblées : `char-l3-q-60-06`, `char-l3-q-60-08`, `char-l3-q-60-10`
- Contrôle : réduction des répétitions autour de l’endormissement et de la chute d’Eutyche ; questions désormais distinctes sur son état après la chute, la consolation des frères et la raison du discours prolongé de Paul (Actes 20:7-12).
- Les autres cartes conservent leur validation antérieure ; cette passe ne constitue pas une relecture intégrale du bloc.


### Revalidation ciblée L3 — 2026-10-12 (une carte Quiz Tite)
- Source : `src/data/characterQuestionsL3.ts`
- SHA source : `0814b6e463cc445dc2c48570228994f27552b0d1`
- Taille : 288 cartes
- État : VALIDATED
- Carte ciblée : `char-l3-q-59-06`
- Contrôle : formulation rendue directe et factuelle ; la question porte désormais sur le critère biblique concernant les enfants d’un ancien, sans formulation abstraite sur une « qualité ».
- Les autres cartes conservent leur validation antérieure ; cette passe ne constitue pas une relecture intégrale du bloc.


### Revalidation ciblée L3 — 2026-10-12 (trois cartes Quiz Isaïe/Ézékiel/Esdras)
- Source : `src/data/characterQuestionsL3.ts`
- SHA source : `737d479676c17abf1229b6f67748238007c1ebc3`
- Taille : 288 cartes
- État : VALIDATED
- Cartes ciblées : `char-l3-q-46-09`, `char-l3-q-48-01`, `char-l3-q-49-05`
- Contrôle : questions et explications réalignées sur les faits bibliques précis ; correction des références et suppression d’une explication qui ne répondait pas à la question.
- Les autres cartes conservent leur validation antérieure ; cette passe ne constitue pas une relecture intégrale du bloc.


### Revalidation ciblée L3 — 2026-10-12 (huit cartes Quiz — index correctAnswer)
- Source : `src/data/characterQuestionsL3.ts`
- SHA source : `81d1ad963a94550183cce063c84ff504b669ceec`
- Taille : 288 cartes
- État : SUPERSEDED
- Remplacé par la revalidation L3 finale du 2026-10-12 ci-dessous.
- Cartes ciblées : `char-l3-q-43-06`, `char-l3-q-47-04`, `char-l3-q-47-08`, `char-l3-q-57-10`, `char-l3-q-58-06`, `char-l3-q-58-09`, `char-l3-q-58-10`, `char-l3-q-59-10`.
- Contrôle : chaque `correctAnswer` a été comparé à la position réelle de la bonne proposition. Les index erronés ont été réalignés ; les options ont ensuite été réordonnées sans changer la bonne réponse ni le sens des cartes, afin de conserver l’équilibrage global des positions.
- Les autres cartes conservent leur validation antérieure ; cette passe ne constitue pas une relecture intégrale du bloc.


### Revalidation ciblée L3 — 2026-10-12 (Zacharie + Eutyche — alignement réponses)
- Source : `src/data/characterQuestionsL3.ts`
- SHA source : `0d5a96d73f0999561eed545365254a28681e75e8`
- Taille : 288 cartes
- État : VALIDATED
- Clôture : les quatre cartes ciblées ont été contrôlées individuellement ; les autres cartes conservent leur validation antérieure. CI et GitHub Pages doivent confirmer cette clôture.
- Cartes ciblées : `char-l3-q-52-02`, `char-l3-q-60-06`, `char-l3-q-60-08`, `char-l3-q-60-10`.
- Revalidation Vrai/Faux ajoutée : `char-l3-tf-46-2`, `char-l3-tf-56-2`, `char-l3-tf-60-3` ; formulations, réponses, explications et références contrôlées. Le lot L3 revient à un équilibre V/F de 24/24.
- Revalidation Mystère ajoutée : `char-l3-m-46-2`, `char-l3-m-47-2`, `char-l3-m-48-2`, `char-l3-m-49-2` ; indices rendus autonomes et distinctifs, doublon d’indice supprimé et explications réalignées.
- Revalidation Quiz ajoutée : `char-l3-q-45-02`, `char-l3-q-47-05`, `char-l3-q-50-02`, `char-l3-q-57-02` ; explications rendues directement justificatives de la réponse.
- Contrôle : vérification question/réponse/explication/référence. Les réponses correctes ont été placées en dernière position après contrôle du fait biblique, sans changer le sens des cartes.


### Revalidation ciblée L3 — 2026-10-12 (5 Quiz répétitifs/réécrits)
- Source : `src/data/characterQuestionsL3.ts`
- SHA source : `66d17b243f7b637f3d5ccea3acb526ff7aab3378`
- Taille : 288 cartes
- État : VALIDATED
- Cartes : `char-l3-q-49-08`, `char-l3-q-49-10`, `char-l3-q-50-01`, `char-l3-q-50-07`, `char-l3-q-51-05`.
- Contrôle : réduction des répétitions conceptuelles ; questions rendues factuelles et autonomes ; réponses, index, explications et références réalignés.


### Correction technique L3 — 2026-10-12
- Source : `src/data/characterQuestionsL3.ts`
- SHA source : `bc06117db527ca2d41f19aba8c09ac17b1acd75d`
- Taille : 288 cartes
- État : VALIDATED
- Correction technique : virgule manquante après `char-l3-q-51-05` corrigée et typecheck relancé., sans changement sémantique.


### Revalidation ciblée L3 — 2026-10-12 (4 Quiz — répétitions Zacharie/Malachie)
- Source : `src/data/characterQuestionsL3.ts`
- SHA source : `830aa331eb41017f3ef43a412fb263b4e5b258f4`
- Taille : 288 cartes
- État : RECHECK CI/Pages
- Cartes : `char-l3-q-52-04`, `char-l3-q-52-09`, `char-l3-q-53-04`, `char-l3-q-53-08`.
- Contrôle : formulations resserrées, faits bibliques distincts, réponses et explications réalignées, références conservées sur le fait demandé.


### Revalidation structurelle globale — 2026-10-12 (équilibrage des positions Quiz)
- État : RECHECK CI/Pages
- Motif : l'audit global a signalé `correctAnswer` déséquilibrés (412/305/284/249) ; la jouabilité impose au moins 20 % par position.
- Méthode : déplacement de la bonne réponse de l'index 0 vers l'index 1 par permutation de deux propositions uniquement ; aucun fait, distracteur ou réponse correcte n'a été changé.
- Cartes déplacées : L1 7, L2 30, L4 128, L5 22 ; L3 et L6 laissés inchangés.
- SHAs source : L1 `d2069433007555a17657a841a3fbdba6c59fe882`, L2 `990d53905318791a277f9b6526d7dc75c68bd9e9`, L4 `0446d8020208db669480a29e1456df9b94b68585`, L5 `6c235c7fdd0b66f1076e8323f86ada415bdf5e88`.


### Correction structurelle finale — 2026-10-12
- Source : `src/data/characterQuestionsL5.ts`
- SHA source : `a729989e35f7f3a32f7a7111e936d49518e1bd22`
- État : RECHECK CI/Pages
- Une dernière carte Quiz a été permutée de l’index 0 vers l’index 2 pour passer le seuil minimal de 20 % par position. Aucun contenu biblique n’a changé.


### Correction structurelle finale (2 cartes) — 2026-10-12
- Source : `src/data/characterQuestionsL5.ts`
- SHA source : `2c181343a789debaf2871289fc1576b970a7969a`
- État : RECHECK CI/Pages
- Deux cartes Quiz supplémentaires ont été permutées de l’index 0 vers l’index 3 afin de franchir le seuil CI de 20 % pour chaque position. Le contenu biblique et la bonne réponse n’ont pas changé.


### Correction structurelle finale (4 cartes) — 2026-10-12
- Source : `src/data/characterQuestionsL5.ts`
- SHA source : `aa1879a89e1483e0aa79b502962f55f6df4504ed`
- État : RECHECK CI/Pages
- Quatre cartes Quiz supplémentaires ont été permutées de l’index 0 vers l’index 2 afin de satisfaire le seuil de 20 % par position. Le contenu biblique et la bonne réponse restent identiques.


### Correction structurelle finale (8 cartes) — 2026-10-12
- Source : `src/data/characterQuestionsL5.ts`
- SHA source : `540bad560ab90de76b1e907b81a05d552d70ccab`
- État : RECHECK CI/Pages
- Huit cartes Quiz supplémentaires ont été permutées de l’index 0 vers l’index 3 pour atteindre le minimum CI de 20 % par position. Le contenu biblique et la bonne réponse restent identiques.


### Correction structurelle finale (16 cartes) — 2026-10-12
- Source : `src/data/characterQuestionsL5.ts`
- SHA source : `90619bdd294ccdda55a2b0e1d099f4a6694bcfd0`
- État : RECHECK CI/Pages
- Seize cartes Quiz supplémentaires ont été permutées de l’index 0 vers l’index 2 pour satisfaire le contrôle d’équilibrage. Aucun fait biblique ni bonne réponse n’a été modifié.


### Correction structurelle finale (32 cartes) — 2026-10-12
- Source : `src/data/characterQuestionsL5.ts`
- SHA source : `7e7b80308b1054002eada64c312191d6753d1bed`
- État : RECHECK CI/Pages
- Trente-deux cartes Quiz supplémentaires ont été permutées de l’index 0 vers l’index 3 pour atteindre le seuil CI de 20 % par position. Le contenu biblique et la bonne réponse restent identiques.


### Correction structurelle finale — 2026-10-12
- Sources : `src/data/characterQuestionsL5.ts` SHA `29f47ec14dc41798f4f4646b7d37ab6a0653efe2` ; `src/data/characterQuestionsL6.ts` SHA `e07dffdc16dcf6fb5216b0b2f2021867f6858868`.
- État : RECHECK CI/Pages
- Dernier lot d’équilibrage : 48 cartes L5 et 16 cartes L6, permutations de propositions uniquement. Aucune réponse biblique n’a été changée.


### Rééquilibrage structurel Quiz — 2026-10-12
- Sources : L2 `f452526f2dcaba859ba822a9ca8238e4ce3cf4e8`, L5 `038ff5f09283d6a61915febf5af707167cb06dac`.
- État : RECHECK CI/Pages
- 128 permutations supplémentaires index 2 → index 0 ; aucune bonne réponse, question ou référence biblique modifiée.


### Rééquilibrage structurel Quiz — 2026-10-12
- Sources : L1 `3d6694cf8df4bd6e533f6617950bd2f3a2f4cc70`, L6 `c4acabe147bdadfb0036b9668d53ce6dcf59c44f`.
- État : RECHECK CI/Pages
- 59 permutations index 0 → index 2 ; aucune bonne réponse, question ou référence biblique modifiée.


### Rééquilibrage structurel final — 2026-10-12
- Source : L6 `db5da4ef6e7fd0e8ba861869064b42e059ed2a5c`.
- État : RECHECK CI/Pages
- Deux permutations index 1 → index 0 ont été effectuées pour franchir le seuil CI minimal de 20 % sur toutes les positions. Aucun fait biblique ni bonne réponse n’a été changé.


### Rééquilibrage structurel Quiz — 2026-10-12
- Sources : L6 `1ad24775b4bb87bf6579288d0932e616a53353b1`, L2 `e925724168a8640156486d24d88532033f3462dd`.
- État : RECHECK CI/Pages
- 47 permutations depuis l’index 1 : 24 vers l’index 0 et 23 vers l’index 2. La réponse bibliquement correcte reste la même ; seule sa position dans les propositions change.


### Revalidation structurelle des permutations Quiz — 2026-10-12
- **L1** — 284 cartes — SHA `3d6694cf8df4bd6e533f6617950bd2f3a2f4cc70` — **VALIDATED**
- **L2** — 290 cartes — SHA `e925724168a8640156486d24d88532033f3462dd` — **VALIDATED**
- **L3** — 288 cartes — SHA `830aa331eb41017f3ef43a412fb263b4e5b258f4` — **VALIDATED**
- **L4** — 292 cartes — SHA `0446d8020208db669480a29e1456df9b94b68585` — **VALIDATED**
- **L5** — 290 cartes — SHA `038ff5f09283d6a61915febf5af707167cb06dac` — **VALIDATED**
- **L6** — 395 cartes — SHA `1ad24775b4bb87bf6579288d0932e616a53353b1` — **VALIDATED**
- **Nature du contrôle :** revalidation structurelle ciblée uniquement. Les modifications concernées sont des permutations de propositions avec déplacement de `correctAnswer` afin d’équilibrer les positions ; le texte de la question, le fait biblique, la bonne réponse, l’explication et la référence restent sémantiquement identiques.
- **Aucune relecture éditoriale intégrale supplémentaire n’est revendiquée.** Les validations sémantiques antérieures restent la base.


## Bloc SEM-L1-002 — VALIDATED — 2026-10-12
- Source : `src/data/characterQuestionsL1.ts`
- SHA source validé : `b2ff35342d457a371dd5e277238add4813ba6c9b`

- Revalidation ciblée complémentaire du 13/10/2026 : indices « Qui est-ce ? » rendus autonomes lorsqu’ils commençaient par un pronom sans antécédent explicite ; remplacement par « Ce personnage » sans révéler la réponse. Aucun fait biblique, réponse ou référence n’a été modifié.- Périmètre : 200 Quiz + 44 Vrai/Faux + 40 Qui est-ce ? = 284 cartes
- Taille : 284 cartes
- État : VALIDATED
- Contrôle : revalidation structurelle ciblée des permutations de propositions et des index `correctAnswer`. Aucun fait biblique, texte de question, bonne réponse, explication ou référence n’a été modifié.

- Revalidation ciblée complémentaire du 12/10/2026 : `char-l1-q-17-07` reformulée en question factuelle directe ; réponse, index, explication et référence contrôlés.

## Bloc SEM-L2-002 — VALIDATED — 2026-10-12
- Source : `src/data/characterQuestionsL2.ts`
- SHA source validé : `a7485d3fd9cdb98ff1cbf4242cefd367b0d3aeef`

- Revalidation ciblée complémentaire du 13/10/2026 : indices « Qui est-ce ? » rendus autonomes lorsqu’ils commençaient par un pronom sans antécédent explicite ; remplacement par « Ce personnage » sans révéler la réponse. Aucun fait biblique, réponse ou référence n’a été modifié.- Périmètre : 290 cartes
- Taille : 290 cartes
- État : VALIDATED
- Contrôle : revalidation structurelle ciblée des permutations de propositions et des index `correctAnswer`. Aucun fait biblique, texte de question, bonne réponse, explication ou référence n’a été modifié.

- Revalidation ciblée complémentaire du 12/10/2026 : `char-l2-q-30-08` reformulée en question factuelle directe ; réponse, index, explication et référence contrôlés.

- Revalidation ciblée complémentaire du 12/10/2026 : `char-l2-q-32-01` reformulée en question factuelle directe sur la parenté de Léa et Rachel ; réponse, index, explication et référence contrôlés.

- Revalidation ciblée complémentaire du 12/10/2026 : `char-l2-q-35-07` reformulée en question directe sur les critères recommandés par Jéthro ; réponse, index, explication et référence contrôlés.

## Bloc SEM-L3-002 — VALIDATED — 2026-10-12
- Source : `src/data/characterQuestionsL3.ts`
- SHA source validé : `8d08522a5aaef8cd953c6681fef9f2dc636698d5`

- Revalidation ciblée complémentaire du 13/10/2026 : indices « Qui est-ce ? » rendus autonomes lorsqu’ils commençaient par un pronom sans antécédent explicite ; remplacement par « Ce personnage » sans révéler la réponse. Aucun fait biblique, réponse ou référence n’a été modifié.- Périmètre : 288 cartes
- Taille : 288 cartes
- État : VALIDATED
- Contrôle : revalidation structurelle ciblée des cartes L3 déjà contrôlées et des permutations de propositions ; aucune relecture éditoriale intégrale revendiquée.
- Correction d’audit du 12/10/2026 : `char-l3-q-57-09` reformulée pour supprimer le doublon normalisé avec `char-l3-q-117-9` (L6) ; réponse, index, explication et référence conservés et contrôlés.
- Revalidation ciblée complémentaire du 12/10/2026 : `char-l3-q-57-09` reformulée pour une formulation directe et naturelle de la demande de Paul à Philémon ; réponse, index, explication et référence contrôlés.
- Revalidation ciblée complémentaire du 12/10/2026 : `char-l3-q-56-09` reformulée en question factuelle sur l’emprisonnement à Philippes ; réponse, index, explication et référence contrôlés.
- Revalidation ciblée complémentaire du 12/10/2026 : `char-l3-q-57-06` reformulée en question directe sur le retour d’Onésime auprès de Philémon ; réponse, index, explication et référence contrôlés.
- Revalidation ciblée complémentaire du 12/10/2026 : `char-l3-q-57-04` (Onésime) a été reformulée en question factuelle directe ; réponse, index, explication et référence contrôlés.
- Revalidation ciblée complémentaire du 12/10/2026 : `char-l3-q-44-07` (Hérode Antipas/Hérodiade) a été reformulée en question factuelle directe avec des propositions cohérentes ; réponse, index, explication et référence contrôlés.
- Revalidation ciblée complémentaire du 12/10/2026 : `char-l3-q-58-05` (Philémon, demande de Paul concernant Onésime) a été reformulée en question factuelle directe ; `char-l3-q-54-04` (Gamaliel) a été reformulée en question factuelle directe sur sa fonction ; réponses, index, explications et références contrôlés. Les autres cartes restent couvertes par les validations antérieures.

- Revalidation ciblée complémentaire du 12/10/2026 : `char-l3-q-53-09` reformulée en question factuelle directe ; réponse, index, explication et référence contrôlés.

## Bloc SEM-L4-002 — VALIDATED — 2026-10-12
- Source : `src/data/characterQuestionsL4.ts`
- SHA source validé : `84d7f55ce7b697a10f7a8a5be069f696072b0edf`
- Périmètre : 292 cartes
- Taille : 292 cartes
- État : VALIDATED
- Contrôle : revalidation structurelle ciblée des permutations de propositions et des index `correctAnswer`. Aucun fait biblique, texte de question, bonne réponse, explication ou référence n’a été modifié.

## Bloc SEM-L5-002 — VALIDATED — 2026-10-12
- Source : `src/data/characterQuestionsL5.ts`
- SHA source validé : `044ef79c24b637faedc2b56ff23badfdd758c36a`
- Périmètre : 290 cartes
- Taille : 290 cartes
- État : VALIDATED
- Contrôle : revalidation structurelle ciblée des permutations de propositions et des index `correctAnswer`. Aucun fait biblique, texte de question, bonne réponse, explication ou référence n’a été modifié.

- Revalidation ciblée complémentaire du 13/10/2026 : `char-l6-q-111-10` reformulée en question factuelle directe sur l’action de la femme qui souffrait de pertes de sang ; réponse, index, explication et référence contrôlés.

## Bloc SEM-L6-002 — VALIDATED — 2026-10-12
- Source : `src/data/characterQuestionsL6.ts`
- SHA source validé : `78f7d4b61c32b29623c458c10481f9fbc798c59c`
- Périmètre : 395 cartes
- Taille : 395 cartes
- État : VALIDATED
- Contrôle : revalidation structurelle ciblée des permutations de propositions et des index `correctAnswer`. Aucun fait biblique, texte de question, bonne réponse, explication ou référence n’a été modifié.


### Revalidation ciblée L3 — 2026-10-12 (cinq Quiz Zacharie/Malachie)
- Source : `src/data/characterQuestionsL3.ts`
- SHA source : `86ecb5ce839a09dca084d1c39139ff20f044eb56`
- Taille : 288 cartes
- État : VALIDATED
- Cartes ciblées : `char-l3-q-52-09`, `char-l3-q-53-03`, `char-l3-q-53-04`, `char-l3-q-53-08`, `char-l3-q-53-10`.
- Contrôle : suppression de répétitions conceptuelles autour de Zacharie et Malachie ; remplacement par des faits distincts et directement vérifiables dans Zacharie 5:1-4 et Malachie 2:1-8, 2:7, 3:6, 3:16. Réponses, index, explications et références réalignés.
- Les autres cartes conservent leur validation antérieure ; cette passe ne constitue pas une relecture intégrale du bloc.

- Revalidation ciblée complémentaire du 12/10/2026 : `char-l6-q-109-4` reformulée en question factuelle directe ; réponse, index, explication et référence contrôlés.

- Revalidation ciblée complémentaire du 12/10/2026 : L4 `char-l4-q-62-4`, L5 `char-l5-q-81-9`, `char-l5-q-85-3`, L6 `char-l6-q-102-6`, `char-l6-q-115-2`, `char-l6-q-119-2`, `char-l6-q-123-8`, `char-l6-q-124-5` reformulées en questions factuelles directes ; réponses, index, explications et références contrôlés.

- Revalidation ciblée complémentaire du 12/10/2026 : `char-l6-q-122-6` reformulée pour supprimer le doublon avec `char-l6-q-122-3` ; réponse, index, explication et référence contrôlés.


### Historique ciblé des revalidations L2/L5/L6 — 2026-10-13
- `char-l2-tf-29-4` : remplace « Barnabé était roi de Chypre » par une confusion plausible entre la position de Paul et celle de Barnabé au sujet de Marc (Actes 15:36-39).
- `char-l5-tf-84-4` : remplace « Agrippa II était gouverneur » par sa conclusion sur l’appel de Paul à César (Actes 26:31-32).
- `char-l5-tf-92-4` et `char-l5-tf-94-4` : remplacent les confusions artificielles de royaumes par des réactions concrètes face aux menaces (2 Rois 19:1-19 ; 2 Chroniques 20:1-4).
- `char-l6-tf-114-3`, `char-l6-tf-118-3`, `char-l6-tf-118-4`, `char-l6-tf-120-4`, `char-l6-tf-123-4`, `char-l6-tf-124-4` : remplacent les faux rôles « gouverneur/grand prêtre » et formulations absolues par des faits directement réfutables dans les passages cités.
- Revalidation ciblée de ces dix cartes uniquement ; aucune nouvelle couverture intégrale L2, L5 ou L6 n’est déclarée.


### Historique ciblé des revalidations L1/L2/L3/L5 — 2026-10-13 (lot qualité)
- `char-l1-tf-02-1` et `char-l1-tf-14-1` : formulations raccourcies et recentrées sur la chronologie de Noé et l’initiative risquée d’Esther.
- `char-l2-tf-34-2` et `char-l2-tf-39-2` : remplacent les permutations de noms/rôles trop mécaniques par des faits narratifs sur Melkisédek et Balak.
- `char-l3-tf-45-2` et `char-l3-tf-55-2` : remplacent les confusions géographiques simples par les épisodes Pilate/Hérode et Apollos/Achaïe.
- `char-l5-tf-93-2` : remplace la confusion Israël/Juda par la réaction de Josias au livre de la Loi.
- Revalidation ciblée de ces sept cartes uniquement ; aucune couverture intégrale supplémentaire n’est déclarée.


## VALIDATED — Autonomie des premiers indices L4/L5 (13/10/2026)
- Fichiers : `src/data/characterQuestionsL4.ts`, `src/data/characterQuestionsL5.ts`.
- Contrôle : aucun premier indice de Qui est-ce ? ne commence par « Il… » ou « Elle… » ; aucun indice initial isolé « Jérusalem. » ne subsiste.
- Les corrections portent uniquement sur la formulation des indices ; les réponses, références et faits bibliques n’ont pas été modifiés.


## VALIDATED — Vrai/Faux L5 Festus (13/10/2026)
- `char-l5-tf-83-1` revalidée après correction de son booléen.
- Énoncé : Festus succéda à Félix et examina l’affaire de Paul avant l’appel à César.
- Réponse validée : Vrai. Référence : Actes 25:1-12.


## Réconciliation des SHA courants — 2026-10-13

Les cinq fichiers personnages L1-L5 ont été modifiés après leurs derniers blocs VALIDATED historiques. Le contrôle de couverture compare strictement le SHA Git du fichier courant ; les anciennes preuves restent conservées, mais ne couvraient plus le SHA courant. Les revalidations ciblées déjà consignées les 12-13/10 sont donc clôturées avec les SHA actuels. Aucun nouveau lot de cartes n'est ajouté et aucun bloc déjà validé n'est ré-audité intégralement.

### Bloc RECON-L1-20261013 — VALIDATED
- Source : `src/data/characterQuestionsL1.ts`
- SHA source validé : `ac1f3820c864d13344bb24631525f6766f16166e`
- Taille : 284 cartes
- État : VALIDATED
- Contrôles : revalidation ciblée des modifications récentes (indices Qui est-ce ? autonomes et cartes déjà corrigées), structure, jouabilité et cohérence des éléments modifiés.
- Les validations antérieures des cartes non modifiées restent conservées.

### Bloc RECON-L2-20261013 — VALIDATED
- Source : `src/data/characterQuestionsL2.ts`
- SHA source validé : `f170162a3c74b85261c77d1f0582d022f35d33aa`
- Taille : 290 cartes
- État : VALIDATED
- Contrôles : revalidation ciblée des modifications récentes (indices Qui est-ce ? autonomes et cartes déjà corrigées), structure, jouabilité et cohérence des éléments modifiés.
- Revalidation 2026-10-13 : 9 Vrai/Faux rendus plus directs tout en conservant leur statut faux afin de respecter l’équilibre Vrai/Faux du contrôle éditorial.

### Bloc RECON-L3-20261013 — VALIDATED
- Source : `src/data/characterQuestionsL3.ts`
- SHA source validé : `b3e64c360396bb7975b8fd41bb1c5248a6740a98`
- Taille : 288 cartes
- État : VALIDATED
- Contrôles : revalidation ciblée des modifications récentes (indices Qui est-ce ? autonomes et cartes déjà corrigées), structure, jouabilité et cohérence des éléments modifiés.
- Les validations antérieures des cartes non modifiées restent conservées.

### Bloc RECON-L4-20261013 — VALIDATED
- Source : `src/data/characterQuestionsL4.ts`
- SHA source validé : `e6c43c9a71aa627da69be6ecc565f3b81ba695af`
- Taille : 292 cartes
- État : VALIDATED
- Contrôles : revalidation ciblée des modifications récentes (indices Qui est-ce ? autonomes, indices initiaux insuffisants et cartes déjà corrigées), structure, jouabilité et cohérence des éléments modifiés.
- Les validations antérieures des cartes non modifiées restent conservées.

### Bloc RECON-L5-20261013 — VALIDATED
- Source : `src/data/characterQuestionsL5.ts`
- SHA source validé : `f954e1fcacd120513323952a4a10e1cd5a5e3d15`
- Taille : 290 cartes
- État : VALIDATED
- Contrôles : revalidation ciblée des modifications récentes (indices Qui est-ce ? autonomes, correction Festus et cartes déjà corrigées), structure, jouabilité et cohérence des éléments modifiés.
- Les validations antérieures des cartes non modifiées restent conservées.


### Bloc COMPLETE-SONGS-VERSE-20261013 — VALIDATED
- Source : `src/data/completeTheVerseQuestions.ts`
- SHA source : `4b816932b661b07bcea440d0ef21e6134e66b924`
- Périmètre : 40 cartes de versets + 36 cartes de cantiques/chansons = 76 cartes du mode `complete`.
- Contrôles : structure Quiz compatible avec `GAME_CONTENT.complete`, réponses dans `0..3`, aucune carte sans référence, IDs `complete-*` et `song-*` distincts, mélange effectif des deux familles dans `game.tsx`.
- Vérification éditoriale ciblée des paroles JW : les formulations contrôlées pour les cantiques 22, 38, 40, 134, 135 et 26 correspondent aux pages officielles JW.org.
- État : VALIDATED.


### Revalidation ciblée Qui est-ce — L4 Jacques fils d’Alphée (13/10/2026)
- Source : `src/data/characterQuestionsL4.ts`
- SHA source revalidé : `3bb02eb16fddf630233c3256ee29c5edec7652ef`
- Carte : `char-l4-m-76-2`
- Correction : premier indice autonome, `« Il est fils d’Alphée. »` → `« Ce personnage est fils d’Alphée. »`.
- Aucun changement de réponse, référence ou fait biblique.
- Contrôle ciblé : premier indice autonome et jouabilité immédiate.


## Bloc SEM-L4-002 — VALIDATED — 2026-10-13
- Source : `src/data/characterQuestionsL4.ts`
- SHA source validé : `3bb02eb16fddf630233c3256ee29c5edec7652ef`
- Périmètre : 200 Quiz + 52 Vrai/Faux + 40 Qui est-ce ? = 292 cartes.
- État : VALIDATED.
- Revalidation ciblée : `char-l4-m-76-2` — Jacques fils d’Alphée ; le premier indice a été rendu autonome (« Ce personnage est fils d’Alphée. ») pour respecter la jouabilité du mode Qui est-ce ?.
- Contrôle transversal après correction : 250 cartes Qui est-ce ? L1-L6 rescannées ; aucune autre première indication du même type (pronom sans antécédent) ni réponse non-personnage repérée dans ces six banques.
- Les 291 cartes non modifiées conservent leur validation éditoriale antérieure ; cette passe ne constitue pas une relecture intégrale supplémentaire.
- CI : audit de contenu vert sur ce SHA ; la réconciliation de couverture est désormais enregistrée par ce bloc.
- Règle : ne pas réauditer tant que le SHA source reste inchangé.


## SEM-V58-002 — VALIDATED — 2026-10-13
- Source : `src/data/jw_enrichment_v58.ts`
- SHA source validé : `5e427a2875fa7675b8f55b741a3325a6fccf7ed2`
- Périmètre : 25 cartes jouables (5 Quiz, 8 Qui est-ce ?, 12 Vrai/Faux), après migration ciblée de `v58-m-005` (Papyrus) vers le Quiz.
- Corrections : `v58-m-001`, `v58-m-002`, `v58-m-004` ont désormais un premier indice autonome (« Ce personnage… ») ; `v58-m-005` (Papyrus), qui n’était pas un personnage, a été retirée du mode Mystère et remplacée par `v58-q-005` dans le Quiz.
- Contrôle ciblé : le mode Qui est-ce ? de V58 ne contient plus de réponse non-personnage ni de premier indice dépendant d’un pronom sans antécédent.
- Les autres cartes V58 conservent leur validation éditoriale antérieure ; cette passe ne constitue pas une relecture intégrale supplémentaire.
- État : VALIDATED.


## SEM-V104-002-HISTORIQUE — supersédé par SEM-V104-003
- Source : `src/data/jw_enrichment_v104.ts`
- SHA historique : `f9ca0588fcadc942aca217240a796fbdb6bcb851`

## SEM-V105-002-HISTORIQUE — supersédé par SEM-V105-003
- Source : `src/data/jw_enrichment_v105.ts`
- SHA historique : `395a1a1cd34142517e9a57a60ae2affbae00fce7`


## SEM-V104-003 — VALIDATED — 2026-10-13
- Source : `src/data/jw_enrichment_v104.ts`
- SHA source validé : `f9ca0588fcadc942aca217240a796fbdb6bcb851`
- Périmètre : 25 Quiz + 12 Vrai/Faux + 2 Qui est-ce ? = 39 cartes.
- Taille : 39 cartes
- Correction finale : cartes Mystère non-personnage retirées ; aucun nouveau Quiz doublon conservé.
- État : VALIDATED.

## SEM-V105-003 — VALIDATED — 2026-10-13
- Source : `src/data/jw_enrichment_v105.ts`
- SHA source validé : `453d38121ffe9d9d24e075ec131e9cc134f72455`
- Correction finale : suppression des deux cartes Quiz temporaires `v105-q031` et `v105-q032` ajoutées en doublon d’IDs déjà présents plus bas dans la même banque ; les cartes originales `v105-q031` et `v105-q032` sont conservées.
- Périmètre : 30 Quiz + 8 Vrai/Faux + 2 Qui est-ce ? = 40 cartes.
- Taille : 40 cartes
- Mystère limité aux personnages `Job` et `Élie` sur cette passe.
- État : VALIDATED.


## Bloc ROUTE-TU-QUIZ-20261013 — VALIDATED
- Source : `src/data/gameContent.ts`
- SHA source validé : `8e19174064ccc46f4b14581f58165c139e640d0a`
- Périmètre : 26 cartes Time’s Up historiques dont la réponse n’est pas un personnage ou Jéhovah.
- Correction : ces 26 cartes ne sont plus routées vers Qui est-ce ? ; elles sont converties en Quiz avec 4 réponses bibliquement plausibles, en conservant leur référence et leur difficulté.
- Cartes concernées : `v53-tu-010`, `v56-t-001`, `v56-t-002`, `v56-t-005`, `v56-t-006`, `v57-t-005` à `v57-t-012`, `v57-t-016`, `v57-t-021`, `v57-t-023`, `v57-t-044`, `v90-tu-007` à `v90-tu-011`, `v102-tu-002` à `v102-tu-005`.
- Contrôle : aucune de ces réponses (lieu, livre/verset, objet, phénomène ou concept) ne peut désormais apparaître comme réponse d’une carte Qui est-ce ? via la transformation Time’s Up.
- État : VALIDATED sous réserve de CI sur ce SHA.


## Revalidation ROUTE-TU-QUIZ — formulation distincte
- Source : `src/data/gameContent.ts`
- SHA source validé : `3d3da3d477905fbed44d2936a79d079968fc09be`
- Les 26 Quiz issus de Time’s Up utilisent désormais leurs propres indices dans l’énoncé afin d’éviter tout doublon de question normalisée entre cartes.
- Aucun changement aux réponses, références ou options validées du lot précédent.
- État : VALIDATED sous réserve de CI sur ce SHA.
