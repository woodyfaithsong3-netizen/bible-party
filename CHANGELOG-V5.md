# Bible Party V5

## Moteur de contenu
- Ajout des filtres de catégories à la préparation d’une partie.
- Ajout des niveaux Facile / Intermédiaire / Expert.
- Les filtres sont transmis au moteur de jeu et appliqués à chaque mode.
- Si une combinaison catégorie/difficulté ne contient aucun contenu pour un mode, le moteur utilise un repli intelligent sans bloquer la partie.
- Les questions sont maintenant organisées dans des decks mélangés par mode afin d’éviter les répétitions immédiates et de mieux exploiter les contenus disponibles.
- Le bouton de lancement est bloqué si aucune manche n’est sélectionnée.

## Compatibilité
- Architecture Expo Router conservée pour Android, iOS et Web.
- Aucun changement de dépendance.

## Vérification
- Dépendances npm non installées dans l’environnement de génération : pas de compilation native revendiquée.
- Les modifications ont été effectuées directement sur la base V4.
