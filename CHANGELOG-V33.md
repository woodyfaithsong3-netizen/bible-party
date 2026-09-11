# Bible Party V33 — direction visuelle « Ruines dorées »

## Version 1.5.8

Premier vrai passage de design, demandé explicitement : une identité visuelle évoquant les
ruines désertiques (pyramide, colonnade romaine) mais traitée de façon sobre et moderne —
en continuité avec l'exigence du cahier des charges initial (§21) : « éviter l'aspect
enfantin/kitsch/scolaire », « pas de gros effets inutiles ».

### Ce qui a changé

**Nouvelle palette dans `src/theme/colors.ts`** (mêmes noms de clés qu'avant, donc aucun autre
fichier n'a besoin d'être modifié — les 15 fichiers qui utilisent `colors.*` héritent
automatiquement du nouveau thème) :
- Fond : noir obsidienne à tonalité chaude (`#120E0A`) au lieu d'un noir-bleu froid.
- Surfaces : pierre brune chaude (`#1D160F`, `#271C13`) au lieu de gris-bleu.
- Bordures : bronze (`#40301F`) au lieu de gris-ardoise.
- Texte : blanc parchemin (`#F6EEDF`) au lieu de blanc pur froid.
- Accent principal : or antique (`#D9A441`) — proche de l'ancien accent doré, affiné.
- Nouvelles couleurs ajoutées (utilisées uniquement par le nouvel élément décoratif ci-dessous,
  aucun écran existant n'en dépendait donc rien ne peut casser) : `terracotta` (`#B5623E`,
  disponible pour un usage futur — tag de catégorie, alerte douce) et `stone` (`#544332`, utilisée
  par le motif de colonnade).
- `success`, `danger`, `blue` réajustés dans la même tonalité chaude, sans changer leur fonction
  ni leur lisibilité relative.

**Retouches architecturales dans `src/theme/styles.ts` :**
- Coins des cartes et boutons légèrement moins arrondis (`card` 22→16, `button`/`statCard`
  18→14) : moins « bulle d'app générique », plus « bloc de pierre taillée ».
- Les labels « eyebrow » (ex. « JEU BIBLIQUE INDÉPENDANT ») ont un espacement de lettres accru
  (1.7 → 2.2) pour un effet d'inscription gravée, discret.

**Nouveau composant `src/components/ColumnMotif.tsx` :**
Un élément décoratif signature — une silhouette de colonnade (sept fines colonnes de hauteurs
inégales sur une ligne de base), fait uniquement de `View` colorées, sans image ni police ni
dépendance externe. Volontairement utilisé une seule fois, sur l'écran d'accueil, entre la carte
« Prêt à jouer ? » et les statistiques — pas répété partout, pour rester sobre plutôt que
décoratif à outrance. Marqué inaccessible aux lecteurs d'écran (`accessibilityElementsHidden`)
puisqu'il est purement ornemental.

### Ce qui n'a PAS été changé (volontairement, pour limiter le risque)

- Aucune nouvelle dépendance ajoutée (pas de `expo-linear-gradient`, pas de police custom, pas de
  `react-native-svg`) : tout est fait avec les primitives React Native déjà utilisées partout
  ailleurs dans le projet, donc aucun `npm install` supplémentaire n'est nécessaire pour cette
  version. Un futur passage de design pourrait légitimement ajouter un dégradé de fond façon
  « ciel de désert au crépuscule » via `expo-linear-gradient`, mais ça n'a pas été fait ici pour
  ne pas introduire une dépendance non testée dans la même version qu'un changement visuel large.
- Les émojis utilisés comme icônes (⚡ 🧠 📈 🏆 ✦) n'ont pas été remplacés : les changer demande
  de choisir des pictogrammes cohérents avec le thème sans perdre en clarté fonctionnelle, sujet à
  traiter séparément si le nouveau style plaît une fois vu à l'écran.
- Aucun écran autre que l'accueil n'a reçu le motif de colonnade — à généraliser (avec
  parcimonie) seulement après validation visuelle de l'idée.

### Ce qui a été vérifié

- `tsc --noEmit` isolé sur chacun des 4 fichiers modifiés/créés : aucune erreur de syntaxe (les
  seules lignes remontées sont des avertissements liés à mes propres options de ligne de commande
  d'isolation, pas au code).
- Les clés de `colors` n'ont pas changé de nom : les 15 fichiers qui les consomment ailleurs dans
  le projet n'ont pas eu besoin d'être touchés, ce qui limite fortement le risque de régression.

**Ce qui n'a PAS été vérifié : le rendu réel.** Un changement de palette et de rayons de bordure
ne peut être jugé que visuellement — contraste, lisibilité du texte parchemin sur les surfaces
brunes, apparence du motif de colonnade à l'écran, rien de tout cela n'a pu être vu avant que
l'app tourne réellement.

### À faire ensuite

```
cd Bible-Party-V33
npm install
npx expo start
```
Regarder l'écran d'accueil en premier (nouveau motif + nouvelle palette y sont les plus visibles),
puis un écran de jeu et l'écran de fin de partie. Dire ce qui plaît, ce qui ne va pas (contraste
trop faible/fort quelque part, motif mal placé, etc.) pour ajuster précisément plutôt que de
refaire un nouveau design à l'aveugle.
