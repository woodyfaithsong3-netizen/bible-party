# Bible Party V10 — Refonte Premium + UX du jeu

## Finalisé
- Refonte visuelle sombre premium de l'accueil, de la configuration, du jeu et des résultats.
- Accueil recentré sur « Nouvelle partie » avec hiérarchie claire.
- Configuration en 5 étapes visuelles : équipes, durée, catégories, difficulté, modes.
- Écran de jeu restructuré : équipe active, scores, manche, chrono général et série visibles immédiatement.
- Finale dédiée à +400 points.
- Bonus de série à partir de 3 bonnes réponses (+50), sans double attribution.
- Chronos challenge / Time's Up basés sur une échéance temporelle pour limiter les dérives dues aux re-renders.
- Protection contre la double navigation vers le résultat.
- Détection de questions déjà utilisées pendant la partie avant épuisement du pool.
- Vrai écran de pause avec arrêt des chronos et confirmation de sortie.
- Écran de victoire et classement final retravaillés.
- Paramètres préparés pour sons, vibrations, animations et contraste renforcé.
- Réinitialisation complète des données locales de progression.
- Mention indépendante / non-affiliée aux Témoins de Jéhovah conservée.

## Vérification
- Installation npm tentée, mais l'environnement de travail n'a pas terminé l'installation des dépendances dans le délai disponible.
- Vérification de syntaxe TypeScript/TSX des fichiers modifiés effectuée avec le compilateur TypeScript présent dans l'environnement.
- Le `npm run typecheck` complet reste à exécuter dans un environnement où les dépendances Expo sont installées.
