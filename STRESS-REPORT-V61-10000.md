# Bible Party — Stress test V61 — 10 000 parties

## Résultat
- Parties simulées : **10 000**
- Manches simulées : **151 762**
- Échecs fonctionnels détectés : **0**
- Decks vides dans les combinaisons testées : **0**
- Questions hors catégorie : **0**
- Mauvais types de cartes : **0**
- Mauvaises difficultés lorsqu'une carte de la difficulté demandée existait : **0**
- Cartes Mot interdit sans 3 mots interdits : **0**
- Cartes 3 indices avec moins de 3 indices : **0**
- Doublons rencontrés avant épuisement d'un deck : **0**
- Problèmes de structure de carte : **0**
- Total de cartes dans la base : **1 640**

## Répartition des manches
- Quiz : 20 959
- Qui suis-je ? : 13 245
- Vrai/Faux : 12 756
- Défi 10 secondes : 16 239
- Qui est-ce ? : 10 831
- Chronologie : 12 146
- Intrus : 12 506
- Time's Up : 13 910
- Mot interdit : 9 615
- 3 indices : 9 158
- Face-à-face : 9 655
- Mise à risque : 10 742

## Scénarios aléatoires
Chaque partie a été générée avec des combinaisons aléatoires de :
- durée 1 / 20 / 30 / 45 / 60 min ;
- 0 à 2 catégories ;
- difficulté facile / intermédiaire / difficile / toutes ;
- 1 à 4 modes parmi les modes jouables.

Les invariants ont été contrôlés à chaque manche : catégorie, type de carte, difficulté disponible, contraintes de Mot interdit, contraintes de 3 indices et structure des cartes.

## Correction trouvée pendant le test
Le stress-test a également déclenché une vérification TypeScript ciblée de la base de données. Elle a révélé un typage trop restrictif dans la fonction de déduplication : le champ `answer` pouvait être booléen pour les cartes Vrai/Faux. Le type a été corrigé et la compilation ciblée de toute la couche de données passe désormais sans erreur.

## Limite
Le test de 10 000 parties est une simulation du moteur de sélection et des invariants de contenu. Il ne remplace pas un test réel sur Android/Expo Go de l'interface, des gestes, du rendu, du chronomètre réel et des interactions tactiles.
