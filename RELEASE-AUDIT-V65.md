# Bible Party — Audit de finalisation V65

## État produit
- Version : 1.7.3
- Android versionCode : 11
- iOS buildNumber : 11
- Catalogue : 1 640 cartes
- Modes affichés : 13 (8 modes de base + 3 indices + Mot interdit + Face-à-face + Mise à risque ; la Finale est une phase de fin de partie)
- Fonctionnement hors connexion
- Progression et scores locaux
- Application indépendante, sans affiliation aux Témoins de Jéhovah

## Contrôles statiques effectués
- 32 fichiers TypeScript/TSX présents.
- Aucun marqueur de conflit Git dans le code actif.
- Aucun `console.log` dans le code actif.
- Icône : 1024×1024.
- Adaptive icon : 1024×1024.
- Splash : 1600×1600.
- Bundle ID / package : `com.bibleparty.app`.
- Orientation : portrait.
- Version et numéros de build synchronisés.
- Mélange Fisher-Yates utilisé pour les listes de jeu.

## Contrôles fonctionnels à valider sur appareil réel
- [ ] Nouvelle partie
- [ ] 2 / 3 / 4 équipes
- [ ] Nom du maître de jeu
- [ ] Durée 20 / 30 / 45 / 60 min
- [ ] Catégories
- [ ] Difficultés
- [ ] Tous les modes
- [ ] Réponses visibles pour le maître de jeu dans les modes de devinette
- [ ] Défi 10 secondes : démarrage automatique du chrono
- [ ] Défi 10 secondes : arrêt / validation
- [ ] Time’s Up : réponse + indices + chrono
- [ ] 3 indices : réponse + indices progressifs
- [ ] Mot interdit : réponse + mots interdits
- [ ] Personnage mystère : réponse immédiate
- [ ] Scores et changement d’équipe
- [ ] Finale
- [ ] Écran de résultat
- [ ] Progression / erreurs / entraînement
- [ ] Réinitialisation des données locales
- [ ] Navigation retour
- [ ] Test sans connexion

## Publication
Apple et Google exigent encore des éléments externes au code : comptes développeur, fiches store, URL publique de confidentialité, captures d’écran et tests sur appareils réels. Ces éléments ne sont pas générés automatiquement dans ce projet.
