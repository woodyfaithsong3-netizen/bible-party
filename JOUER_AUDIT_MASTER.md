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
