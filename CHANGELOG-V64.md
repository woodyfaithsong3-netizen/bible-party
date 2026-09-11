# Bible Party V64 — audit final avant publication

- Passe de version à 1.7.2 / Android versionCode 10 / iOS buildNumber 10.
- Remplacement du mélange biaisé `sort(() => Math.random() - 0.5)` par Fisher-Yates.
- Vérification des 12 modes sélectionnables et de la finale automatique.
- Vérification des réponses maître de jeu pour les modes de devinette : Personnage mystère, Mot interdit, 3 indices et Time’s Up.
- Vérification du Défi 10 secondes : démarrage automatique à l’ouverture de la manche, bouton d’arrêt/lancement actif, validation après expiration.
- Nettoyage des mentions de versions obsolètes dans les écrans À propos / Réglages.
- Correction de la numérotation de la configuration de partie.
- Base de contenu auditée en V61 : 1 640 cartes, 0 doublon d’ID, 0 doublon exact dans un mode, couverture complète des combinaisons catégorie × difficulté × mode de base, 16 cartes Mot interdit éligibles.
- Les 10 000 simulations V61 restent la référence de robustesse de la logique de decks : 151 762 manches, 0 échec.

## Limite
Cette passe est un audit statique + logique. Un test physique de chaque interaction sur Android/iOS reste nécessaire avant soumission aux stores.
