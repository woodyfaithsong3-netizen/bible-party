# Bible Party V88 — Audit complet

## Corrections
- Navigation basse : largeur desktop commune et centrage stable sur l’accueil et les écrans ScenicScreen.
- Navigation : l’onglet Équipes reflète maintenant l’état actif sur `/setup`.
- Accueil : la navigation desktop utilise la même contrainte de largeur que les écrans internes.
- `4 équipes+` : ajout réel d’équipes jusqu’à 6, avec ouverture de l’édition des noms.
- Personnalisation : nouvel écran `/customize` avec sélection des modes, catégories et difficulté.
- Écran Prêt : conserve et applique réellement la personnalisation vers la partie.
- Défi 10 secondes : arrêt manuel avant zéro ne bloque plus la validation Réussi/Échoué.
- Paramètres : les options affichées correspondent aux fonctions réellement actives (vibrations et contraste renforcé).
- Contraste renforcé : appliqué à l’enveloppe des écrans et à la navigation.
- Versions : package/app en 1.9.1, builds iOS/Android 18.
- Informations À propos : version et capacité d’équipes/modes mises à jour.
- Nettoyage visuel : retrait des faux indicateurs système et de quelques symboles décoratifs non nécessaires.

## Vérification
- Revue statique de toutes les routes, composants, données et stockage local.
- Les dépendances npm ne sont pas incluses dans cette archive.
- `npm install` puis `npm run typecheck` doivent être exécutés sur la machine de développement, car l’environnement de vérification ne dispose pas du cache npm complet.
