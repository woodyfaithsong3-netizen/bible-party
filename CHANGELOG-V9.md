# Bible Party V9

## Banque de contenu
- Nouveau registre central `src/data/catalog.ts`.
- Agrégation de tous les modes de jeu dans un catalogue unique.
- Normalisation des catégories.
- Sélection d'entraînement intelligente : les questions déjà ratées sont prioritaires.

## Progression
- Nouveau écran `progress.tsx`.
- Statistiques globales et progression par catégorie.
- Nombre de contenus disponibles par catégorie.
- Accès direct à la révision des erreurs.

## Révision
- Nouveau mode `review.tsx`.
- Les erreurs sont rejouées depuis le stockage local.
- Une bonne réponse retire la question de la liste des erreurs.

## Accueil
- Ajout d'un accès direct à « Mes progrès ».

## Technique
- Expo Router reste le système de navigation commun Android/iOS/Web.
- Les données restent locales et aucune création de compte n'est nécessaire.
