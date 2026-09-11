# Bible Party — Audit contenu V50

## Objectif

Vérifier que les cinq catégories thématiques proposées dans la configuration disposent réellement de questions et qu'aucune catégorie importante n'est laissée vide. Les questions ajoutées dans V50 sont formulées par Bible Party à partir de références bibliques, avec recherche thématique sur JW.ORG. Aucun texte d'article JW.ORG n'est copié.

## Catégories

- Personnages
- Bible
- Évangiles
- Rois & prophètes
- Actes

`Chronologie` et `Défis` restent des filtres techniques de mode et non des thèmes.

## Vérification des principaux decks

| Catégorie | Quiz V50 | Vrai/Faux V50 | Ajouts V50 dédiés |
|---|---:|---:|---:|
| Personnages | 78 | 20 | Quiz 5 + TF 20 + Qui suis-je 3 + Time's Up 2 |
| Bible | 38 | 107 | Quiz 6 + TF 6 + Qui suis-je 3 + Time's Up 2 |
| Évangiles | 70 | 10 | Quiz 5 + TF 5 + Qui suis-je 3 + Time's Up 2 |
| Rois & prophètes | 75 | 11 | Quiz 5 + TF 5 + Qui suis-je 3 + Time's Up 2 |
| Actes | 41 | 17 | Quiz 6 + TF 6 + Qui suis-je 3 + Time's Up 2 |

Le Quiz est maintenant correctement alimenté dans les cinq catégories. Le Vrai/Faux, qui était auparavant massivement classé `Bible`, possède désormais un vrai volume dans chaque catégorie ; `Personnages` a reçu le plus gros complément car c'était le deck thématique le plus faible dans ce mode.

## Correctifs structurels trouvés pendant l'audit

1. Une ancienne extension `jwQuizExpansion` était déclarée comme des objets `QuizQuestion` alors que son contenu était en réalité constitué de tuples. Elle est maintenant convertie proprement en `QuizQuestion`.
2. Une ancienne extension `jwTrueFalseExpansion` était également typée comme objets alors qu'elle contenait des tuples. Elle est maintenant convertie en vrais objets `TrueFalseQuestion` avec catégorie explicite.
3. `MysteryQuestion.category` était limité au littéral `personnages`, ce qui empêchait de créer proprement des questions `Qui suis-je ?` dans les autres catégories. Le type accepte maintenant une catégorie textuelle.
4. L'écran de configuration affiche maintenant le nombre de questions disponibles à côté de chaque catégorie.
5. Le mapping de catégories reste centralisé dans `catalog.ts`.

## Sources de recherche

Recherche effectuée sur JW.ORG, notamment :
- Questions bibliques : thèmes Dieu, Bible, Jésus, foi, etc.
- Questions pour l'étude du Recueil d'histoires bibliques : Genèse, Exode, rois, prophètes, Jésus et Actes.
- Pages consacrées aux questions sur Jéhovah, le nom divin et les récits bibliques.

Les formulations de Bible Party sont originales et les références bibliques sont conservées comme repères.
