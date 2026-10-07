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
