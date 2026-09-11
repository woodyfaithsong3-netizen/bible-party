# Bible Party V6

## Entraînement
- Nouveau véritable écran d'entraînement.
- Choix de catégorie et difficulté.
- Session de 10 questions mélangées.
- Score personnel, taux de réussite et séries.
- Bonus de série +50 à partir de 3 bonnes réponses.
- Statistiques persistantes localement avec AsyncStorage.
- Les questions ratées sont mémorisées pour préparer un futur mode « Réviser mes erreurs ».
- L'accueil ouvre désormais le vrai mode Entraînement.

## Architecture
- Le routage reste basé sur Expo Router pour Android, iOS et Web.
- Le stockage reste local et sans compte.

## Validation
- Modifications statiques vérifiées.
- Installation npm/native non validée dans l'environnement de travail : ne pas considérer cette archive comme un APK compilé.
