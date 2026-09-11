# Bible Party V56

## Objectif
Passe d’équilibrage et de robustesse avant la phase de test Android.

## Contenu
- Au moins 5 cartes par rubrique dans chacun des modes ciblés, afin de limiter fortement les répétitions.
- +52 cartes au total : Qui suis-je ?, Défis 10 secondes, Qui a dit ça ?, Chronologie, Intrus et Time’s Up.
- Correction des catégories héritées non mappées (`prophètes`, `Défis`) pour éviter les avertissements et les classements éditoriaux incohérents.

## Gameplay / robustesse
- Le résultat d’une manche est maintenant mémorisé comme succès/échec pour éviter d’afficher « points attribués » après une réponse refusée.
- La Mise à risque fonctionne réellement comme une mise : gain de la mise si validée, perte de la mise si refusée, sans score négatif.
- Les filtres de catégories restent stricts : aucune question d’une autre rubrique n’est injectée pour compenser un manque.
- Les modes sans contenu compatible sont écartés par le moteur, avec un filet de sécurité pour conserver une partie jouable.

## Validation
- Typecheck ciblé des données effectué.
- Audit structurel des decks : IDs uniques, réponses valides, chronologies cohérentes, intrus valides, défis temporisés.
