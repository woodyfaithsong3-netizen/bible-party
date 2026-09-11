# Bible Party V60 — audit automatisé

## Campagne
- 1 000 parties simulées aléatoirement.
- 15 648 manches simulées.
- Combinaisons aléatoires de rubriques, difficultés, modes et longueurs de partie.
- Vérification des transitions, decks vides, catégories, réponses, chronologies, intrus, timers et score.

## Résultat
- 0 partie bloquée dans la simulation.
- 0 manche avec deck vide après sélection du mode jouable.
- 0 question hors rubrique dans les decks filtrés.
- 0 structure de question invalide détectée.
- 0 ID de question dupliqué.

## Bugs corrigés pendant l'audit
1. Le bouton principal d'un Défi 10 secondes ou d'un Time's Up ne faisait rien si le chrono n'était pas encore lancé. Il peut maintenant démarrer/reprendre proprement le chrono.
2. Le reset d'une manche chronométrée effaçait la deadline juste après l'avoir créée. La deadline est maintenant conservée.
3. Mot interdit : seules les cartes ayant au moins 3 mots interdits sont utilisées dans ce mode.
4. 3 indices : seules les cartes ayant au moins 3 indices sont utilisées.
5. Time's Up : un seul indice est maintenant visible à la fois ; les autres restent cachés pour préserver le principe du jeu. Le maître de jeu voit toujours la réponse et le type de carte.
6. Version Expo et version npm ont été resynchronisées en 1.6.8, Android versionCode 7 et iOS build 7.

## Limite
La campagne est une simulation du moteur et des états de jeu. Elle ne remplace pas un test tactile réel sur un téléphone Android ; les bugs purement liés au rendu natif, aux gestes ou au clavier peuvent nécessiter un test appareil.
