# V85 — Vérification responsive et cohérence de l’accueil

## Corrections vérifiées
- Desktop réellement traité à partir de 1200 px afin d’éviter une composition en deux colonnes trop étroite sur tablette.
- Coque desktop élargie jusqu’à 1500 px pour utiliser correctement l’espace d’un écran PC tout en gardant le paysage visible.
- Logo centré dans sa colonne et illustration de la Bible centrée sur le même axe.
- Cartes décoratives positionnées autour de l’illustration sans décalage dépendant du bord de la fenêtre.
- Les cinq actions de l’accueil utilisent une même grille, une même hauteur de base, une même typographie, une même hiérarchie titre/sous-titre et une même flèche.
- JOUER reste l’action primaire par la couleur et le poids visuel, sans changer la structure typographique des autres actions.
- Suppression de la fausse barre de statut iOS sur desktop.
- Les écrans internes continuent d’utiliser ScenicScreen avec conteneur centré et largeur maximale commune.

## Contrôle technique
Le contrôle TypeScript doit être exécuté après `npm install` sur la machine de développement, car les dépendances ne sont pas présentes dans cette archive de travail.
