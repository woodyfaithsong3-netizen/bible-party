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
- [ ] P5 Défi / Time's Up complet
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
