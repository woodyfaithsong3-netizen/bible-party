# JOUER — REGISTRE MAÎTRE DE VALIDATION

Source de vérité unique pour l'audit exhaustif du contenu jouable. Périmètre : JOUER uniquement. Les 177 fiches officielles, AVENTURE et Ma Bible sont hors périmètre.

## États
- TODO : jamais validée individuellement
- CHECKING : passe en cours
- FIXED : erreur corrigée, à revalider
- VALIDATED : question, réponse, distracteurs, explication, référence, catégorie et jouabilité contrôlés
- BLOCKED : source ou décision nécessaire
- RECHECK : carte modifiée après validation

## Règle anti-répétition
Une carte VALIDATED ne doit plus être relue intégralement tant qu'elle n'a pas changé. Si elle change, elle repasse RECHECK.

## Phases
- [ ] P0 inventaire exhaustif du vrai pool jouable
- [ ] P1 registre/manifest anti-répétition
- [ ] P2 contrôles structurels
- [ ] P3 Quiz complet, conversions comprises
- [ ] P4 Vrai/Faux complet
- [ ] P5 Contrôle des anciennes sources Défi / Time's Up — hors modes officiels si non redistribuées
- [ ] P6 Mystère complet
- [ ] P7 Compléter les paroles
- [ ] P8 Cantiques/chansons vérifiés sur sources officielles
- [ ] P9 Chronologie
- [ ] P10 contexte manquant
- [ ] P11 doublons
- [ ] P12 catégories
- [ ] P13 qualité de jeu / longueur / fuite de réponse
- [ ] P14 test du moteur des quatre modes
- [ ] P15 audit transversal final
- [ ] P16 CI verte
- [ ] P17 GitHub Pages verte

## Contrôle individuel
Quiz : autonomie, formulation, une seule bonne réponse, correctAnswer, quatre choix, distracteurs, explication, référence, catégorie, doublons, jouabilité.
Vrai/Faux : affirmation autonome, vérité réelle, explication/référence cohérentes, aucune inversion ou double négation piégeuse.
Défi/Time's Up : réponse concrète, trois indices convergents, référence cohérente.
Mystère : indices suffisants, réponse unique, explication/référence cohérentes.

## Journal
Format : ID | ETAT | COMMIT | CHECKS | NOTE

## État initial
Aucune carte n'est déclarée artificiellement VALIDATED. Les anciens commits verts restent des preuves de contrôles déjà effectués, mais CI verte ne signifie pas validation éditoriale individuelle.

Règle absolue : ne jamais remettre à zéro les validations précédentes. 177 fiches officielles = hors périmètre.

## Journal des corrections — 2026-10-07

### L1-L3 Vrai/Faux — formulations inversées corrigées
43 cartes ont été converties d’une affirmation négative inversée en question directe. Elles restent **FIXED**, pas VALIDATED : la vérité de chaque qualité et la référence doivent être revalidées individuellement.

- L1 : 20 cartes `char-l1-tf-*-4` — commit `3c90046a924679de3272727335e3301ebaf8c253`
- L2 : 13 cartes `char-l2-tf-*-4` — commit `7a725ec81a080ae341ec0b56916f5903abed23cd`
- L3 : 10 cartes `char-l3-tf-*-4` — commit `c0527e45e39e9a0d1f45d41476964dbcc9e45cff`

### V/F — localisations inversées L1-L3
44 cartes supplémentaires ont été passées d’une affirmation négative de type « n’est pas associé à » à une formulation directe positive, avec réponse et explication alignées. Elles restent **FIXED** jusqu’à validation sémantique individuelle.
- L1 : 20 — commit `f0b6f4b0d07742afab8cbbc3b394de9a23707533`
- L2 : 14 — commit `91ea61fcd839c24bf64e84b67163f5c2dc514632`
- L3 : 10 — commit `63e841c58eaaaa7a4ed0da292e1f60b86bcf84c8`

### L5 Vrai/Faux — qualité/personnage
20 cartes passées de formulation négative inversée à une question directe. Elles sont **FIXED**, pas VALIDATED : la vérité de chaque qualité et la référence restent à revalider individuellement lors de la passe V/F complète.

- char-l5-tf-81-3 | FIXED | ab993e2 | formulation directe + réponse/explanation alignées
- char-l5-tf-82-3 | FIXED | ab993e2 | formulation directe + réponse/explanation alignées
- char-l5-tf-83-3 | FIXED | ab993e2 | formulation directe + réponse/explanation alignées
- char-l5-tf-84-3 | FIXED | ab993e2 | formulation directe + réponse/explanation alignées
- char-l5-tf-85-3 | FIXED | ab993e2 | formulation directe + réponse/explanation alignées
- char-l5-tf-86-3 | FIXED | ab993e2 | formulation directe + réponse/explanation alignées
- char-l5-tf-87-3 | FIXED | ab993e2 | formulation directe + réponse/explanation alignées
- char-l5-tf-88-3 | FIXED | ab993e2 | formulation directe + réponse/explanation alignées
- char-l5-tf-89-3 | FIXED | ab993e2 | formulation directe + réponse/explanation alignées
- char-l5-tf-90-3 | FIXED | ab993e2 | formulation directe + réponse/explanation alignées
- char-l5-tf-91-3 | FIXED | ab993e2 | formulation directe + réponse/explanation alignées
- char-l5-tf-92-3 | FIXED | ab993e2 | formulation directe + réponse/explanation alignées
- char-l5-tf-93-3 | FIXED | ab993e2 | formulation directe + réponse/explanation alignées
- char-l5-tf-94-3 | FIXED | ab993e2 | formulation directe + réponse/explanation alignées
- char-l5-tf-95-3 | FIXED | ab993e2 | formulation directe + réponse/explanation alignées
- char-l5-tf-96-3 | FIXED | ab993e2 | formulation directe + réponse/explanation alignées
- char-l5-tf-97-3 | FIXED | ab993e2 | formulation directe + réponse/explanation alignées
- char-l5-tf-98-3 | FIXED | ab993e2 | formulation directe + réponse/explanation alignées
- char-l5-tf-99-3 | FIXED | ab993e2 | formulation directe + réponse/explanation alignées
- char-l5-tf-100-3 | FIXED | ab993e2 | formulation directe + réponse/explanation alignées


### Passe Quiz — fuites de réponse détectées et corrigées
Contrôle automatisé des Quiz des lots personnages L1-L6 : les cartes dont la bonne réponse apparaissait directement dans la formulation ou dont les choix étaient mal construits ont été corrigées. Les cartes restent à validation éditoriale individuelle.
- L4 : `char-l4-q-79-2` — question reformulée pour ne plus contenir le nom de la réponse.
- L5 : `char-l5-q-83-6`, `char-l5-q-86-4`, `char-l5-q-86-6`, `char-l5-q-86-9`, `char-l5-q-88-1`, `char-l5-q-88-4`, `char-l5-q-89-1` — choix reconstruits pour que la question ne donne pas la réponse et pour correspondre exactement à ce qui est demandé.
- L6 : `char-l6-q-118-2` — formulation corrigée pour éviter que la réponse soit déjà donnée dans la question.
- Compléter les paroles : `song-34` — titre retiré de la formulation afin de ne pas révéler « me taire ».

### Passe structurelle Quiz — résultats
- L1-L6 : aucune incohérence détectée entre `answer` et le début de l’explication Vrai/Faux.
- Lots Quiz examinés : aucune carte contrôlée avec moins/plus de 4 réponses, index `correctAnswer` hors limites ou réponses identiques détectée.
- Contrôle de contexte « Quel récit / quel événement » : les occurrences restantes examinées contiennent un contexte permettant d’identifier l’événement ; aucune occurrence du défaut « quel récit ? » sans récit décrit n’a été retrouvée dans L1-L6.


### Passe doublons — Quiz
Contrôle des formulations exactes normalisées sur les fichiers jouables audités : un seul doublon exact a été trouvé et corrigé.
- `quiz-v50-actes-01` / `v105-q030` : même question sur Matthias ; `v105-q030` reformulée en « Quel apôtre a été ajouté aux Onze après la mort de Judas ? ».


### Passe V/F — L2/L3 reprise après scan négatif
Les formulations artificielles « Il est faux que… » restantes dans les lots L2/L3 ont été transformées en affirmations directes, avec réponses et références réalignées. Les cartes restent à validation éditoriale complète.
- L2 : `char-l2-tf-35-3`, `36-3`, `37-3`, `38-3`, `40-3`
- L3 : `char-l3-tf-44-3`, `51-3`, `52-3`, `53-3`, `56-1`, `56-3`, `57-3`, `59-3`, `60-1`, `60-3`
- Commits : `e285f0d04be573b3e53979cc560a1dc48c114d43`, `dfdc8c886d97bd444a1eb43a16988cc8927a4f3b`, `58523975e870e89fd12ad6883d72dbc6f3119f80`
- Sources vérifiées : Exode 18, Exode 4:24-26, Nombres 16, Nombres 22-24, 1 Samuel 3, Matthieu 14, Aggée 1, Zacharie 1, Malachie 1, Actes 15, Philémon, Tite 1, Actes 20.

### Passe catégories — pool final
Le moteur finalise désormais chaque carte avec une catégorie canonique parmi les quatre catégories officielles : **Personnages**, **Récits bibliques**, **Comprendre la Bible**, **Mieux connaître Jéhovah**. Les anciennes étiquettes internes sont conservées dans les banques sources mais ne sortent plus comme catégories de gameplay.
- Commit : `85277299acf90f5d6a95aad0c24beb65de2dc010`

### Passe contexte — contrôle des formulations « quel récit / événement »
Les occurrences repérées dans les banques auditées ont été examinées : elles comportent un événement, un personnage ou un contexte identifiable dans la question et les choix. Aucune occurrence du défaut « Quel récit est décrit ? » sans contexte n’a été conservée dans les lots inspectés.


### Passe moteur — suppression de la troncature destructive
Le moteur JOUER ne tronque plus les questions, affirmations V/F, indices Mystère ou prompts Défi au runtime. Les textes sont seulement normalisés sur les espaces ; la concision doit être corrigée dans les cartes elles-mêmes afin de ne jamais perdre un contexte biblique ou une partie logique.
- Commit : `11b0299bc09fee87dd1456dfbc55de44625d00c6`

### Passe Compléter les paroles
- 40 cartes structurellement contrôlées : 4 réponses, index valide, réponses distinctes.
- `complete-27` réalignée sur la formulation actuelle de Psaume 37:5 : « Laisse Jéhovah tracer ton chemin ; compte sur lui, et il… » → **agira en ta faveur**.
- Commit : `db66a88832621381479b4439fc6c5434f90ea2fd`
- Vérification : Psaume 37:5 sur JW.org confirme la formulation et la réponse.

### Passe Cantiques / chansons
Les 18 cartes de cantiques et 18 cartes de chansons ont été comparées aux pages officielles JW.org correspondant aux titres utilisés par les cartes. Les formulations testées concordent avec les sources officielles ; elles restent à conserver comme cartes à validation éditoriale dans le registre.
- Exemples vérifiés : Cantique 22, 38, 40, 49, 81, 134, 135, 154 et 26 ; chansons « J’ai confiance en toi », « J’ai foi ! », « Gloire à toi, ô Jéhovah ! », « Je puise toute ma force en toi », « La vraie vie », « Vis pour la vraie vie ! », « Vers qui d’autre aller ? », « Je ne peux pas me taire ! », « Approche-toi de moi » et « Je veux remercier Jéhovah ».

### Passe Chronologie
Les 52 cartes sont structurellement présentes. Les dates principales 1473, 1117, 1070, 1037, 1027, 997, 607, 539, 537, 455, 29, 31, 32, 33, 36 et 70 concordent avec la frise chronologique officielle ; les cartes 515 ont reçu une référence plus précise vers Esdras/Chronologie JW.org.
- Commit : `732ed190bdd9efd382395aa9abafcf75e7ab8897`
- Source : frise chronologique officielle JW.org.

### Passe qualité runtime
Un scan des lots personnages a montré que l’ancienne compression runtime aurait tronqué des affirmations importantes ; cette cause a été supprimée avant de poursuivre l’audit éditorial.


### Revalidation V/F — après correction des patches L2/L3
Contrôle ciblé des cartes modifiées : les réponses, explications et références ont été relues après les corrections.
- L2 : les 10 cartes modifiées sont maintenant cohérentes et en réponse vraie.
- L3 : les 10 cartes modifiées sont maintenant en réponse vraie ; les références erronées introduites par le premier patch ont été corrigées (Zacharie, Malachie, Silas, Tite).
- Dernier commit L3 : `695a64dccccb1559be001bdb2254e12d3577283f`
- Dernier commit L2 : `684a9369fd7eb57ebcd483d6315e2107b5db9029`

### Contrôles structurels V/F personnages — chiffres réconciliés le 2026-10-09
- Les six fichiers personnages contiennent actuellement **339 Vrai/Faux** : L1 44, L2 50, L3 48, L4 52, L5 50, L6 95. L’ancien total de 500 ne correspond plus aux fichiers actuels et ne doit plus servir au suivi.
- Les six fichiers contiennent **1 250 Quiz** (200 chacun en L1-L5 et 250 en L6).
- Les contrôles structurels enregistrés : champs `answer`, nombre de choix et index `correctAnswer`, fuites de réponse et indices Mystère.
- Les blocs L1-L6 sont déclarés VALIDATED dans `JOUER_VALIDATION_MANIFEST.md` uniquement pour leurs SHA enregistrés. Les cartes modifiées sont revalidées de manière ciblée et leur SHA est mis à jour ; la dernière revalidation L3 du 2026-10-09 est inscrite au manifest.
- Les contrôles de routage (2 840/2 840) prouvent l’accès au moteur, pas l’exactitude éditoriale. Le suivi éditorial des autres banques reste fondé sur les blocs VALIDATED et leurs SHA, jamais sur le seul résultat CI.


### Refonte JOUER — modes et taille des parties
- Le gameplay officiel est désormais limité à **4 modes** : **Quiz**, **Vrai ou Faux**, **Qui est-ce ?**, **Complète les paroles**.
- Les anciens **Défi 10 s / 30 s** ne sont plus exposés comme modes jouables ; leurs contenus historiques restent auditables mais ne sont plus distribués comme mode autonome.
- **Complète les paroles** contient deux familles : **40 versets bibliques** + **36 cantiques/chansons**.
- Les parties n'affichent plus une durée en minutes : elles proposent **10 / 20 / 30 questions**.
- Le moteur force l'apparition des sous-pools **Chronologie** et **34 vérités** dans le début du paquet Quiz, et alterne les familles versets/chansons dans Complète les paroles.
- Commit de cette refonte : `faf8cc508fb0011b8b944cd42e72b6aa879558e5`.

### Recontrôle V/F — suppression des qualités subjectives
- Scan ciblé des V/F personnages L1-L6 sur les formulations de type « qualité », « fait preuve de », « manifeste », « courage/fidélité/endurance/etc. » : **0 occurrence restante** dans les cartes `truefalse` des six banques personnages.
- Les cartes restantes portent sur des faits bibliques vérifiables ; aucune carte subjective de ce type n'a été trouvée lors du scan.
- Commit : `faf8cc508fb0011b8b944cd42e72b6aa879558e5`.
- CI et GitHub Pages : **VERT** sur ce commit.

### Nettoyage runtime après suppression des Défis
- Le chronomètre résiduel de 10 secondes de l'ancien moteur a été supprimé de `src/app/game.tsx` : plus d'état, de deadline, d'intervalle ou de fonctions `startTimed/stopTimed` inutilisés.
- Les 4 modes conservés restent sans durée chronométrée ; la taille de partie est uniquement 10 / 20 / 30 questions.
- Commit : `0f44d707b175bc6b52875694cdb78ed32a7f2eb1`.

### Validation runtime — sous-pools réellement jouables
- Vérifié dans `src/data/gameContent.ts` : les 4 modes officiels alimentent bien `GAME_CONTENT` et `getGamePool`.
- Vérifié dans `src/data/questions.ts` : `chronologyQuestions`, `preachingTruthQuestions`, `completeTheVerseQuestions` et `completeTheSongQuestions` sont intégrés à la banque Quiz ; ils ne sont donc pas uniquement présents dans des fichiers isolés.
- Vérifié dans `src/app/game.tsx` : le paquet Quiz place explicitement les cartes `chrono-*` et `appendice-a-*` au début du paquet ; le paquet Complète les paroles alterne les cartes `complete-*` et `song-*`.
- Vérifié dans `src/app/duration.tsx` : les trois formats de partie sont **10 questions / 20 questions / 30 questions**, sans durée en minutes.
- Vérifié dans `src/app/game.tsx` : aucun ancien chronomètre de 10/30 secondes ne pilote les parties.
- Le dernier commit contrôlé `527eaf77d8b090e81484ead05b0aa4f05cf1a9c0` est **VERT** sur CI et GitHub Pages.
- Ces points sont désormais considérés comme **VALIDATED** et ne doivent pas être ré-audités sauf modification des fichiers concernés.

### Contrôle ciblé Quiz — Ruth
- La carte actuelle `char-l1-q-09-06` « Qui glana dans les champs de Boaz pour rapporter de la nourriture à Noémi ? » utilise **Noémi / Ruth / Débora / Abigaïl** : les quatre propositions sont féminines et le genre ne donne donc pas la réponse.
- La carte `char-l1-q-09-05` est également factuelle et ne repose pas sur un indice de genre.
- Aucun texte exact « Qui travailla comme glaneuse pour subvenir aux besoins de son foyer ? » n'a été retrouvé dans les banques de questions actuelles lors du contrôle GitHub ; ne pas modifier `characterLearning.ts` pour ce point.

### Passe Mystère / anciens Time's Up — réponses trop génériques supprimées
Le mode **Qui est-ce ?** ne doit pas faire deviner des concepts ou des éléments trop généraux. Quatre anciennes cartes Time's Up qui alimentaient le pool Mystère ont été retirées : `v57-t-017` (Parchemin), `v57-t-018` (Manteau), `v57-t-022` (Sang) et `v57-t-024` (Lumière). Les cartes restantes privilégient des personnages, lieux, livres, passages, événements ou objets bibliques suffisamment identifiables.
- Commit : `0e9b4a6c40c1c5a1b38dff06aa59f36aa28c6219`


### Passe Mystère — mots interdits dans les indices
Scan exhaustif des banques Mystère : les indices ne doivent jamais contenir un mot déclaré dans `forbiddenWords`. **16 chevauchements** ont été corrigés dans les lots V39/V61, notamment Noé, Gédéon, Matthieu, Jonas, Nathan, Lydie, Daniel, Anne, Cyrus, Job, Rahab, Zachée, Samson et Michée.
- V39 : commits `064568c4a8c4d548b77545b4faf0264c9e8f0c13`, `b8812748f2a08d2606ac3e5b7f10dca2f72b33fa`, `7bc4e00a3cc8598a249093057cd4f4aaa0b04b9e`, `a92ddc18ebe12878d5dc2f9b9cc793bd72bce16e`
- V61 : commits `945b734b823b20ef9260220d7c7f33415673b200`, `de29f1832e51592842d5cf9951e8ad31cb797b16`, `217de3bd406289cc7058df28c646d704de09b7f0`
- Contrôle final : **0 chevauchement** détecté entre `clues` et `forbiddenWords` dans les banques Mystère inspectées.

### Passe identité des cartes
Contrôle transversal de **1 395 IDs** sur les banques JOUER inspectées : **0 doublon d’ID**.


### Passe moteur — rétablissement du mode Défi officiel
Le gameplay final est maintenant aligné sur les quatre modes demandés : **Quiz**, **Vrai / Faux**, **Défi**, **Mystère**.
- `GameType` : remplacement de `complete` par `challenge`.
- `GAME_CONTENT.challenge` = **challenges + timesUp convertis en Défi**.
- `GAME_CONTENT.mystery` = **mysteryQuestions uniquement** ; les Time Up ne sont plus dupliqués dans Mystère.
- Les prompts Time Up ne révèlent plus leur réponse.
- L’écran de partie, la sélection et `ready` utilisent désormais `challenge`.
- La validation Défi se fait explicitement par le maître de jeu : **Défi réussi / Défi raté**.
- Commit moteur : `bd2ab0d031fadb43ee3579520c81dd210777b0f2`
- Commit UI/type : `d41ac2c233b211c0e72e24967cd32e6659f71b5c`, `33b5f9ce4805e5241b1e6a18f11320b167179f3e`
- Contrôle Time Up : **0 indice contenant la réponse** dans les banques inspectées après correction de `timesup-19`.

### Contrôle des IDs après cette passe
Les banques JOUER inspectées totalisent **1 395 IDs uniques**, sans doublon.


## Règle de validation par blocs — 2026-10-08

Le registre anti-répétition officiel est `JOUER_VALIDATION_MANIFEST.md`. Une validation éditoriale complète est figée par SHA du ou des fichiers sources. Tant qu'un SHA n'a pas changé, un bloc VALIDATED ne doit pas être relu intégralement. Une modification repasse uniquement les cartes concernées en RECHECK.

Les validations structurelles/runtimes déjà enregistrées ne sont pas transformées rétroactivement en validations sémantiques. L'objectif est de progresser par blocs fermés jusqu'à couvrir l'intégralité du pool réellement jouable, sans recommencer les mêmes 5000 cartes à chaque passe.


## Blocs éditoriaux fermés — nouvelle méthode

### Bloc SEM-V54-001 — VALIDATED
- Source : `src/data/jw_enrichment_v54.ts`
- SHA source initial : `8b80295de853fb2a25f89351985d3080989a9405`
- SHA courant validé : `fca32bb9d0d4e26a12e52d5a2b05e5cfd6753c25`
- Périmètre : Quiz `v54-q001` à `v54-q080` ; Vrai/Faux `v54-tf001` à `v54-tf080`
- Taille : 160 cartes
- État : **VALIDATED**
- Les anomalies historiques ci-dessous ont été traitées dans le contenu actuel au SHA `fca32bb9d0d4e26a12e52d5a2b05e5cfd6753c25` : `v54-q022` utilise Luc 1:1-4 ; `v54-q026` et `v54-tf026` utilisent l’article JW.org sur les chapitres et versets ; `v54-q030` est maintenant référencée par Matthieu 28:19 ; `v54-q034` porte sur Genèse 1:24-25 et n’est pas un doublon de `v54-q031` (Genèse 1:1) ; `v54-q068` porte sur 2 Samuel 23:1-2 ; `v54-tf027` est alignée sur Révélation 14:6.
- État réconcilié : **VALIDATED** au SHA courant, conforme au bloc SEM-V54-001 du manifest. Les anciennes notes CHECKING/anomalies ne doivent plus être interprétées comme des exceptions ouvertes.

### Règle de clôture
À la clôture d'un bloc, inscrire :
`BLOC | SHA FINAL | N CARTES | VALIDATED | EXCEPTIONS`.
Une nouvelle passe doit commencer au bloc suivant, jamais au début du pool.

### Ancienne note SEM-COMP-001 — ARCHIVÉE / REMPLACÉE
- La note CHECKING sur le SHA `1c8bbaaeaec36f6e3382b41481861bef1e9ac58b` est historique et a été remplacée par la clôture VALIDATED enregistrée plus bas et dans le manifest au SHA final courant `4b816932b661b07bcea440d0ef21e6134e66b924`.
- Ne pas rouvrir le bloc tant que le SHA final courant ne change pas.

### Bloc SEM-COMP-001 — VALIDATED
- Source : `src/data/completeTheVerseQuestions.ts`
- SHA final : `1c8bbaaeaec36f6e3382b41481861bef1e9ac58b`
- Périmètre : `complete-01`–`complete-40` + `song-01`–`song-36`
- Taille : 76 cartes
- État : VALIDATED
- Contrôles : structure, réponses, distracteurs, formulations, contexte, références et cohérence éditoriale contrôlés ; CI et GitHub Pages vertes sur le commit de registre.
- Exceptions : aucune.

### Bloc SEM-Q-001 — VALIDATED — 2026-10-08
- Source : `src/data/questions.ts`
- SHA source validé : `8dba1fb4c561f6f467ef3c4bf805defb1c50347f`
- Périmètre réellement audité : **504 cartes jouables** de la source actuelle.
- État : VALIDATED.
- Contrôles : IDs uniques, structure, réponses/index, fuite de réponse, doublons, formulation, contexte, catégories, références, explications, distracteurs et jouabilité.
- Revalidation ciblée Vrai/Faux : `tf-v39-06`, `tf-balance-19`, `tf-balance-24` ; `tf-jw-21` contrôlée sans modification.
- Contrôles globaux : 504 IDs uniques dans la source actuelle ; aucune anomalie structurelle résiduelle relevée dans la passe globale ; les cartes modifiées ont été recontrôlées.
- CI + GitHub Pages : verts sur les commits de clôture correspondants.
- Exceptions ouvertes : aucune.
- Clôture : ne pas réauditer tant que le SHA source reste inchangé.


### Bloc SEM-V55-001 — VALIDATED
- Source : `src/data/jw_enrichment_v55.ts`
- SHA source validé : `cf8242fc5ef8ce02631ae5fb5058dd4f7602c0cd`
- Périmètre désormais réellement jouable : 40 cartes : 8 Qui est-ce ?, 8 citations -> Quiz, 8 intrus -> Quiz, 8 chronologies -> Quiz, 8 défis -> Quiz.
- Le routage des chronologies et défis est présent dans `src/data/questions.ts` ; l'ancien manifest les déclarait à tort non distribués.
- Les 16 cartes nouvellement jouables (`v55-c-001`–`008` et `v55-d-001`–`008`) ont été contrôlées individuellement : jouabilité, ordre, références, formulation et cohérence.
- Corrections historiques : `v55-q-006`, `v55-i-002`.
- Corrections de références pendant cette revalidation : `v55-c-001`, `v55-c-003`, `v55-c-007`.


### Bloc SEM-V53-001 — VALIDATED
- Source : `src/data/jw_enrichment_v53.ts`
- SHA source validé : `c64b70b754c6d3c20ec4d396956730dc3c0c54a9`
- Périmètre : 141 cartes V53 : Quiz, Vrai/Faux, Mystère, Time's Up, citations, chronologie et intrus.
- Contrôles : structure, réponses, exactitude biblique, formulation, contexte, fuite de réponse, références, distracteurs, catégories, doublons et jouabilité.
- Corrections : `v53-q-038`, `v53-tf-011`, `v53-tf-015`.
- État : VALIDATED. Ne pas réauditer tant que le SHA source reste inchangé.

### Passe routage global — 2026-10-08
- `8737245dc0061e9f4f100d39e8914a486206f15b` : `categoryChronologyExpansion` est désormais distribué vers le Quiz via l'adaptateur Chronologie -> Quiz.
- `ce2c63f8a94bbe300069dd4fa45fd8d49c0fd819` puis `f83a72ba1711f118eb1e0c7c898513e042c675dc` : `audit:content` vérifie automatiquement que toutes les banques de cartes exportées du périmètre jouable sont référencées par le pipeline et que les IDs source sont uniques.
- Cette passe ne touche ni AVENTURE, ni Ma Bible, ni `characterLearning.ts`.

### Bloc SEM-V56-001 — VALIDATED
- Source : `src/data/jw_enrichment_v56.ts`
- SHA source validé : `abd7b9548326f36a81bdd1ec030e351ea1250c47`
- Périmètre : 55 cartes : 5 Mystère, 12 Défi, 11 citations -> Quiz, 10 chronologies -> Quiz, 9 intrus -> Quiz, 8 Time's Up -> Mystère.
- Contrôles : jouabilité après transformation, exactitude biblique, réponse, explication/référence, formulation, contexte, catégories, intrus, chronologie et absence d'ambiguïté.
- Corrections déjà intégrées : `v56-q-009` et `v56-i-006`.
- État : VALIDATED. Ne pas réauditer tant que le SHA source reste inchangé.


### Bloc SEM-L1-001 — VALIDATED — 2026-10-08
- Source : `src/data/characterQuestionsL1.ts`
- SHA source validé : `aa62897e063cc51b114d53371068fcdab388e8e6`
- Périmètre : 200 Quiz + 44 Vrai/Faux + 40 Qui est-ce ? = 284 cartes.
- État : VALIDATED
- Contrôles : structure, 4 réponses/index, fuite de réponse, doublons exacts, catégories, autonomie, formulation, exactitude biblique, réponses, explications, références, distracteurs, contexte et jouabilité.
- Corrections : `char-l1-q-01-03`, `char-l1-q-01-07`, `char-l1-q-05-02`, `char-l1-q-05-05`, `char-l1-q-07-03`, `char-l1-q-11-04`, `char-l1-q-18-05`, `char-l1-q-20-02`, `char-l1-q-20-04`, `char-l1-m-13-2`.
- Résultats structurels finaux : 0 incohérence de réponses/index, 0 fuite de réponse, 0 doublon exact de question, 0 doublon d’ID, 0 Mystère avec moins de 3 indices, 0 indice contenant la réponse, 0 indice dupliqué.
- Catégorie source : 284/284 `Personnages`; le moteur canonise ensuite cette catégorie sans modifier la source.


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


### Bloc SEM-L4-001 — VALIDATED — 2026-10-08
- Source : `src/data/characterQuestionsL4.ts`
- SHA source validé : `b9d9c3c1883e2c217cce5417d309da2aebcd6632`
- Périmètre : 200 Quiz + 52 Vrai/Faux + 40 Qui est-ce ? = 292 cartes.
- État : VALIDATED
- Contrôles : structure, réponses/index, fuite de réponse, doublons, références, formulations, Vrai/Faux, autonomie liée au personnage, indices Mystère et jouabilité.
- Corrections ciblées : réalignement des références Mystère, plusieurs formulations/références Quiz et Vrai/Faux, notamment les cartes `char-l4-q-64-7` et `char-l4-q-67-10` dont le contenu ne correspondait pas au `characterId`.
- Résultats finaux : 292 IDs uniques ; 200 Quiz sans doublon ni fuite ; 52 Vrai/Faux contrôlés ; 40 Qui est-ce ? avec au moins 3 indices, sans fuite de réponse ni doublon d’indice.
- Exceptions ouvertes : aucune.
- Règle : ne pas réauditer tant que le SHA source reste inchangé.

### Bloc SEM-L5-001 — VALIDATED — 2026-10-08
- Source : `src/data/characterQuestionsL5.ts`
- SHA source validé : `22cd3ee007b71a3e25d5225399e5db4fdd1820f3`
- Périmètre : 200 Quiz + 50 Vrai/Faux + 40 Qui est-ce ? = 290 cartes.
- État : VALIDATED
- Contrôles : structure, réponses/index, fuite de réponse, doublons, références, formulation, autonomie liée au personnage, Vrai/Faux, indices Mystère et jouabilité.
- Corrections ciblées : 5 Vrai/Faux dont le statement concernait un autre personnage que le `characterId` ont été réalignés ; les corrections ont été recontrôlées avec réponses, explications et références.
- Résultats finaux : 290 IDs uniques ; 200 Quiz sans doublon ni fuite ; 50 Vrai/Faux contrôlés ; 40 Qui est-ce ? avec au moins 3 indices, sans fuite de réponse ni doublon d’indice.
- Exceptions ouvertes : aucune.
- CI : verte sur `2a21beae348791025ce2583f1da0666fb0544cab`.
- GitHub Pages : verte sur `2a21beae348791025ce2583f1da0666fb0544cab`.
- Règle : ne pas réauditer tant que le SHA source reste inchangé.


### Bloc SEM-L6-001 — VALIDATED — 2026-10-08
- Source : `src/data/characterQuestionsL6.ts`
- SHA source validé : `b45ce5764d4499fd8d6f9195cf99cb551b9e1ecc`
- Périmètre : 250 Quiz + 95 Vrai/Faux + 50 Qui est-ce ? = 395 cartes.
- État : VALIDATED
- Contrôles : structure, IDs, réponses/index, fuite de réponse, doublons, références, formulation, contexte, exactitude biblique, autonomie liée au personnage, Vrai/Faux, indices Mystère et jouabilité.
- Corrections ciblées : réalignement de références Joël et amélioration de deux indices Mystère afin qu’ils correspondent exactement au personnage et au texte biblique.
- Résultats finaux : 395 cartes ; aucune anomalie structurelle résiduelle ; CI et GitHub Pages vertes sur le commit source de clôture.
- Exceptions ouvertes : aucune.
- Règle : ne pas réauditer tant que le SHA source reste inchangé.


## Blocs éditoriaux fermés — 2026-10-08 — V58 + V104-V108

### Bloc SEM-V58-001 — VALIDATED
- Source : `src/data/jw_enrichment_v58.ts`
- SHA source validé : `c94576dc570223fb5601e62c4532a9a4bdb162bf`
- Périmètre : 24 cartes jouables (Quiz, Mystère, Vrai/Faux).
- État : VALIDATED
- Contrôles : structure, IDs, réponses/index, fuite de réponse, formulations V/F, contexte, exactitude, références, indices Mystère et jouabilité.
- Corrections ciblées : `v58-m-005`, `v58-tf-003`, `v58-tf-006`.
- CI : verte sur le commit source de clôture.
- GitHub Pages : build et déploiement verts sur le commit source de clôture.
- Clôture : ne pas réauditer tant que le SHA source reste inchangé.

### Bloc SEM-V104-001 — VALIDATED
- Source : `src/data/jw_enrichment_v104.ts`
- SHA source validé : `9b10eb14e06d33470a565e77fc375b7461243aa5`
- Périmètre : 40 cartes jouables.
- État : VALIDATED
- Contrôles : 4 réponses/index, fuite de réponse, doublons, formulations V/F, exactitude biblique, références, contexte et jouabilité.
- Corrections ciblées : `v104-tf-008` et `v104-tf-012`, reformulées en affirmations directes.
- CI et GitHub Pages : verts sur le commit source de clôture.
- Clôture : ne pas réauditer tant que le SHA source reste inchangé.

### Bloc SEM-V105-001 — VALIDATED
- Source : `src/data/jw_enrichment_v105.ts`
- SHA source validé : `401397a34f80594232a321227f9c4e6d9b146ef4`
- Périmètre : 42 cartes jouables.
- État : VALIDATED
- Contrôles : structure, réponses/index, fuite, doublons, formulation directe des V/F, exactitude, références, contexte et jouabilité.
- Corrections ciblées : `v105-tf001`, `v105-tf004`, `v105-tf005`, `v105-tf008` et la référence de `v105-m002`.
- CI et GitHub Pages : verts sur le commit source de clôture.
- Clôture : ne pas réauditer tant que le SHA source reste inchangé.

### Bloc SEM-V106-001 — VALIDATED
- Source : `src/data/jw_enrichment_v106_characters.ts`
- SHA source validé : `f7a7bb36331075e1f01b9bbcca4cb211c011ae6e`
- Périmètre : 60 cartes (50 Quiz + 10 Qui est-ce ?).
- État : VALIDATED
- Contrôles : structure, 4 choix/index, fuite, doublons, exactitude biblique, références, autonomie, indices Mystère et jouabilité.
- Exceptions ouvertes : aucune.
- CI et GitHub Pages : verts sur le commit source de clôture.
- Clôture : ne pas réauditer tant que le SHA source reste inchangé.

### Bloc SEM-V107-001 — VALIDATED
- Source : `src/data/jw_enrichment_v107_characters.ts`
- SHA source validé : `d3fce104c0553b0b0d7851a2bb273e9a93009366`
- Périmètre : 40 cartes (32 Quiz + 8 Qui est-ce ?).
- État : VALIDATED
- Contrôles : structure, réponses/index, fuite, doublons, exactitude biblique, références, contexte, indices Mystère et jouabilité.
- Exceptions ouvertes : aucune.
- CI et GitHub Pages : verts sur le commit source de clôture.
- Clôture : ne pas réauditer tant que le SHA source reste inchangé.

### Bloc SEM-V108-001 — VALIDATED
- Source : `src/data/jw_enrichment_v108_characters.ts`
- SHA source validé : `b049cf4bf90aa6b607c4c507350aa1a117eda4aa`
- Périmètre : 30 cartes (24 Quiz + 6 Qui est-ce ?).
- État : VALIDATED
- Contrôles : structure, réponses/index, fuite, doublons, exactitude biblique, références, contexte, indices Mystère et jouabilité.
- Exceptions ouvertes : aucune.
- CI et GitHub Pages : verts sur le commit source de clôture.
- Clôture : ne pas réauditer tant que le SHA source reste inchangé.


### Bloc SEM-JWCAT-001 — VALIDATED
- Source : `src/data/jwCategories.ts`
- SHA source validé : `e26c907e6322f5a3598db1300885097d583e7f36`
- Périmètre : **187 cartes jouables** (96 Quiz, 39 Vrai/Faux, 12 Mystère, 8 Time’s Up, 8 Citations, 8 Chronologie, 8 Intrus, 8 Défi), avec routage vers les modes jouables existants.
- Contrôles : structure, IDs, réponses/index, fuite de réponse, doublons, formulations V/F, contexte, exactitude biblique, cohérence explication/référence, indices Mystère/Time’s Up, chronologies réellement jouables et jouabilité immédiate.
- Corrections : formulation V/F sur Révélation ; référence manuscrits ; formulation et référence sur 2 Timothée 4:13 ; formulation du procès de Jésus devant Pilate ; formulation de la prophétie de Michée ; précision sur les maladies cutanées ; chronologie `jwcat-chrono-2` rendue réellement événementielle.
- CI : vert.
- GitHub Pages build + déploiement : verts.
- Clôture : ne pas réauditer tant que le SHA source reste inchangé.


### Bloc SEM-CHRONO-001 — VALIDATED
- Source : `src/data/chronologyQuestions.ts`
- SHA source validé : `5b978b2b521014e7b9c2c816c44bfbe04347c1a3`
- Périmètre : 52 cartes Chronologie → Quiz.
- Contrôles : 52 IDs uniques, 52 questions uniques, 4 réponses et index valides, ordre chronologique cohérent, absence de fuite de réponse, cohérence explication/référence et jouabilité.
- État : VALIDATED.
- CI + GitHub Pages : verts.

### Bloc SEM-PREACH-001 — VALIDATED
- Source : `src/data/preachingTruthQuestions.ts`
- SHA source validé : `f97ca0bad2b54fada132acb0b8ab442692688fd0`
- Périmètre : 34 cartes de vérités bibliques → Quiz.
- Contrôles : 34 IDs, 4 réponses/index, fuite, cohérence question/réponse/explication/référence, formulation courte et jouabilité.
- Corrections : `appendice-a-01` recentrée sur Psaume 37:29 ; `appendice-a-33` alignée précisément sur Marc 7:6-8.
- État : VALIDATED.
- CI + GitHub Pages : verts.


### Bloc SEM-COMP-001 — VALIDATED (reconfirmé après correction)
- Source : `src/data/completeTheVerseQuestions.ts`
- SHA source validé : `4b816932b661b07bcea440d0ef21e6134e66b924`
- Périmètre : 76 cartes Compléter les paroles.
- Contrôles : 76 IDs uniques, aucune question dupliquée, structure 4 réponses/index valide, aucune fuite de réponse.
- Correction : `song-28` contrôlée après correction.
- CI + GitHub Pages : verts.

### Bloc SEM-V61-001 — VALIDATED
- Source : `src/data/jw_enrichment_v61.ts`
- SHA source validé : `f41d4b7f55357fe5efaab9ebfae3db4c765c47e4`
- Périmètre : 9 cartes (1 Citation → Quiz + 8 Mystère → Qui est-ce ?).
- Contrôles : IDs uniques, minimum 3 indices, absence de fuite de réponse, mots interdits absents des indices, références et explications présentes.
- CI + GitHub Pages : verts.


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


## Réconciliation du registre — 2026-10-09
- Le total historique de 500 Vrai/Faux pour L1-L6 était obsolète : le comptage direct des six fichiers actuels est de 339.
- Le manifest prévaut pour l’état éditorial des blocs fermés et leur SHA ; les anciennes phrases de journal qui disent encore « FIXED, à revalider » ne doivent pas annuler silencieusement une validation ultérieure documentée. Une correction ciblée impose la revalidation de la carte modifiée et la mise à jour du SHA du bloc.
- Cinq cartes L3 comportant une négation qui inversait une affirmation marquée VRAI ont été corrigées et revalidées le 2026-10-09 : `char-l3-tf-53-1`, `char-l3-tf-54-1`, `char-l3-tf-57-1`, `char-l3-tf-58-1`, `char-l3-tf-59-1`. Voir la section de revalidation dans le manifest.

- Deux autres cartes ont été corrigées et revalidées le 2026-10-09 : `char-l2-tf-39-1` (Balak) et `char-l6-tf-114-2` (Onésiphore). Les SHA L2/L6 sont mis à jour dans le manifest ; aucun autre contenu de ces fichiers n’a été modifié.

## Passe éditoriale V/F L1-L3 — 2026-10-09
- Les **118 explications génériques** repérées initialement dans les banques V/F L1-L3 ont été remplacées par des explications factuelles ; les références ont été ajustées aux affirmations concernées.
- Corrections factuelles et formulations ciblées consignées dans le manifest : notamment Élie et Silo (L1), Balak et une carte Ésaü matériellement tronquée (L2), ainsi que des références et affirmations inversées concernant Malachie, Gamaliel, Onésime, Philémon et Tite (L3).
- Contrôle final : 0 explication générique de type « Cette affirmation est conforme aux faits bibliques » ou « La Bible rapporte ces faits » restante dans les Vrai/Faux des fichiers L1-L3.
- SHA actuels : L1 `429938f7e59dee286fdda4722f2489bceb27a06b`, L2 `ed1c66c09c2a40de2632ca509b2c753a05e715bd`, L3 `9ba7d0ef7982f44f16aa37ff909510422a76c182`.
- Le manifest a été actualisé après chaque modification. Les validations antérieures des cartes non modifiées sont conservées ; seules les cartes effectivement changées ont été retravaillées.

- Contrôle complémentaire de jouabilité : `char-l6-q-120-8` a été reformulée pour préciser clairement le contexte de l’assemblée chez Priscille et Aquila ; la carte demeure dans le même bloc validé, avec revalidation ciblée et SHA actualisé.

- Passe ciblée supplémentaire L5 : quatre Quiz sur Évodie/Épaphrodite corrigés pour supprimer l’ambiguïté de réponse, la fuite d’indice de genre et les formulations sans contexte nommé. SHA L5 courant : `22cd3ee007b71a3e25d5225399e5db4fdd1820f3`.

- Passe contexte autonome L5-L6 : 7 questions reformulées pour ne plus dépendre d’un antécédent absent de l’écran de jeu. Les questions nomment maintenant explicitement Amos, la femme qui souffrait de pertes de sang ou l’homme délivré dans la région des Géraséniens. SHA L5/L6 actualisés dans le manifest.

- Déduplication conceptuelle ciblée L5 : `char-l5-q-87-1` rend la réponse unique et `char-l5-q-88-10` n’est plus une répétition de `char-l5-q-88-8`. SHA L5 : `22cd3ee007b71a3e25d5225399e5db4fdd1820f3`.

- Passe V/F de localisation L4-L5 : 23 cartes reformulées et leurs explications/références alignées sur des faits bibliques précis. Les formulations génériques « est lié à » ne sont plus utilisées pour ces 23 cartes. SHA L4/L5 actualisés dans le manifest.

- Passe de formulation V/F : 56 cartes de localisation reformulées en faits directs (L1 17, L2 19, L3 18, L5 2). Les lots restent suivis par SHA dans le manifest ; aucune fiche AVENTURE ou Ma Bible n’a été modifiée.
