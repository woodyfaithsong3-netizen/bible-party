# Bible Party V23 — Enrichissement éditorial

Version : **1.3.0**

## Objectif
Poursuivre l’enrichissement après l’audit de V21, avec des questions réellement distinctes et sans variantes artificielles.

## Banque actuelle
- **116 Quiz**
- **64 Qui suis-je ?**
- **55 Vrai/Faux**
- **11 Défis 10 secondes**
- **15 Qui a dit ça ?**
- **12 Chronologies**
- **14 Intrus**
- **15 Time’s Up**
- **302 entrées jouables au total**

## Nouveaux ajouts par rapport à V22
- +37 Quiz
- +20 Qui suis-je ?
- +15 Vrai/Faux
- +5 Qui a dit ça ?
- +4 Chronologies
- +5 Intrus
- +5 Time’s Up

Les défis 10 secondes de V22 sont conservés.

## Axes enrichis
Genèse, Moïse et l’Exode, Josué et les Juges, David et les rois, Élie et Élisée, Daniel, Jean le Baptiseur, Nicodème, Bartimée, Jaïrus, Matthias, Étienne, Barnabé et plusieurs épisodes des Évangiles et des Actes.

## Contrôles
- IDs des modes enrichis conservés sans doublon.
- Parsing TypeScript de `src/data/questions.ts` : OK.
- Références bibliques utilisées comme ancrage factuel.
- Vérification documentaire effectuée à partir de JW.org uniquement pour les passages nouvellement exploités.
- Questions et explications formulées comme contenu original ; pas de copie d’article, d’illustration, de capture ou de mise en page JW.org.

## Limite technique
`npm install`/Expo n’ont toujours pas pu être exécutés dans l’environnement de travail en raison du blocage réseau du registre npm. Aucun test runtime Android/iOS/Web n’est donc déclaré.
