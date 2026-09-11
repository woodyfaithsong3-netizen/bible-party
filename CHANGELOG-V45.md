# Bible Party V45 — crash catégorie corrigé

- Corrige définitivement le crash `Cannot read property 'toLowerCase' of undefined`.
- `normalizeCategory()` accepte désormais n’importe quelle valeur et vérifie son type avant toute opération texte.
- Le filtrage des catégories dans `game.tsx` accepte également les catégories absentes/non textuelles.
- Les questions legacy sans catégorie restent jouables avec un fallback `Bible`.
- Aucun changement de dépendances.
