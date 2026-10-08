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

### Contrôles structurels V/F personnages
- L1-L6 : **500 V/F** détectés.
- Toutes les cartes contrôlées ont un booléen `answer`.
- Les Quiz personnages L1-L6 représentent **1 250 cartes à 4 choix** ; aucune carte contrôlée n’a de nombre de réponses incorrect ou de `correctAnswer` hors limites.
- Scan de fuite de réponse dans les Quiz L1-L6 : **0 fuite** détectée.
- Scan Mystère L1-L6 : **0 carte avec moins de 3 indices** et **0 réponse présente dans un indice**.
- Ancienne répartition 500 cartes : **386 Vrai / 114 Faux**. Cette banque a depuis été éditorialement nettoyée : les V/F subjectifs sur les qualités ont été retirés, et le moteur de jeu impose désormais un mélange avec une légère majorité de FAUX (3 FAUX / 2 VRAI dans le paquet joué).
- Les 500 cartes restent donc **non VALIDATED globalement** tant que leur exactitude sémantique et leurs références n’ont pas été couvertes.


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
- SHA courant après corrections : `fca32bb9d0d4e26a12e52d5a2b05e5cfd6753c25`
- Périmètre : Quiz `v54-q001` à `v54-q080` ; Vrai/Faux `v54-tf001` à `v54-tf080`
- Taille : 160 cartes
- État : **CHECKING** — corrections effectuées, validation éditoriale finale encore en cours
- Règle : aucune de ces 160 cartes ne sera déclarée VALIDATED tant que les 10 contrôles éditoriaux ne sont pas terminés.
- Premières anomalies déjà confirmées :
  - `v54-q022` : la référence Matthieu 5:18 ne justifie pas l'affirmation sur la comparaison de copies anciennes.
  - `v54-q026` : référence réalignée vers l’article JW.org sur les chapitres et versets.
  - `v54-q030` : Néhémie 8:8 ne justifie pas directement l'importance historique des traductions.
  - `v54-q034` : doublon conceptuel de `v54-q031`, à traiter dans la passe doublons/variété.
  - `v54-q068` : la référence donnée ne suffit pas à établir « beaucoup de psaumes ».
  - `v54-tf026` : référence réalignée vers l’article JW.org sur les chapitres et versets.
  - `v54-tf027` : référence Révélation 14:6 réalignée sur le contenu de l’affirmation.
- Conséquence : **le bloc reste CHECKING et ne sera pas re-parcouru depuis zéro après correction** ; seules les cartes modifiées passeront RECHECK, puis le bloc sera clôturé par son nouveau SHA.

### Règle de clôture
À la clôture d'un bloc, inscrire :
`BLOC | SHA FINAL | N CARTES | VALIDATED | EXCEPTIONS`.
Une nouvelle passe doit commencer au bloc suivant, jamais au début du pool.

### Bloc SEM-COMP-001 — CHECKING
- Sources : `src/data/completeTheVerseQuestions.ts`
- SHA source : `1c8bbaaeaec36f6e3382b41481861bef1e9ac58b`
- Périmètre : 40 cartes versets + 36 cartes cantiques/chansons = 76 cartes.
- État : CHECKING.
- Prochaine étape : contrôle éditorial individuel, puis fermeture par SHA sans réaudit ultérieur si inchangé.
