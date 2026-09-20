# V89 — Audit contenu et questions

## Corrections éditoriales
- Audit de la banque de questions et des réponses sur les 8 types de cartes.
- Remplacement de 15 questions de quiz jugées trop élémentaires ou répétitives par des questions de compréhension plus précises.
- Suppression de plusieurs doublons quasi identiques dans le quiz.
- Correction de 4 cartes « Qui est-ce ? » qui demandaient auparavant d’identifier un verset, un objet ou un concept au lieu d’un personnage.
- Refonte du mode « Qui a dit ça ? » avec 40 paraphrases de paroles bibliques cohérentes avec le format du mode. Les textes sont explicitement traités comme des paraphrases, pas comme des citations mot à mot.
- Les réponses et références ont été conservées ou reformulées pour rester vérifiables par les références bibliques indiquées.

## Correction de gameplay liée au contenu
- Les propositions des modes Quiz et Qui a dit ça ? sont maintenant mélangées à chaque manche, avec recalcul de l’index de la bonne réponse. La base historique plaçait 502 des 521 bonnes réponses du quiz en position A ; ce biais n’est plus exploitable par les joueurs.

## Contrôles automatiques
- Compilation isolée des modules de données TypeScript : OK.
- 0 identifiant dupliqué.
- 0 question Quiz ou Vrai/Faux strictement dupliquée.
- 0 carte Quiz/Qui a dit ça ? avec index de réponse hors limites.
- 0 carte Chronologie avec ordre invalide.
- 0 carte Intrus avec index invalide.
- Les références restent présentes sur les questions factuelles ; les défis restent volontairement sans référence biblique unique.
