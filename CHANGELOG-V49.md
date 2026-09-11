# Bible Party V49 — Passage à la manche suivante

## Correction
- Après une réponse validée, le bouton principal « Manche suivante → » est maintenant réellement cliquable.
- La condition `disabled` bloquait auparavant le bouton dès que `answered === true`, ce qui empêchait tous les modes de continuer.
- Correction appliquée au flux commun afin de débloquer Quiz, Vrai/Faux et tous les autres modes.
- Le bouton reste protégé pendant la pause et les transitions.
