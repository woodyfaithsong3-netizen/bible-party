# Bible Party V28 — refonte du système de catégories

## Version 1.5.3

### Bugs corrigés (audit du système de filtrage par catégorie)

`src/data/questions.ts` utilise en réalité **41 valeurs brutes différentes** pour le champ
`category`, selon le mode de jeu (thèmes de personnages, livres, vertus pour « Qui a dit ça ? »,
périodes pour Chronologie, slugs courts pour les Défis 10 secondes, etc.). Le moteur de
correspondance de `src/app/game.tsx` (`matchesCategory`) ne reposait que sur 6 tests de
sous-chaîne (`.includes('roi')`, `.includes('bible')`, …) qui ne couvraient pas cette diversité
réelle. Deux bugs concrets en résultaient :

1. **30 questions rendues invisibles dès qu'un filtre de catégorie était actif.**
   26 questions Quiz et 4 questions Intrus sont catégorisées `"Actes"`. Aucun des 6 filtres de
   l'écran Configuration ne reconnaissait cette valeur (ni par sous-chaîne, ni par type). Résultat :
   sitôt qu'un joueur cochait ne serait-ce qu'une seule catégorie, ces 30 questions disparaissaient
   purement et simplement du tirage — sans erreur visible, juste un contenu qui ne sortait jamais.
2. **Filtre « Rois & prophètes » corrompu par un test trop large.** Le code testait
   `c.includes('courage')` dans le même cas que `.includes('roi')`/`.includes('proph')`. Les 5
   questions « Qui a dit ça ? » catégorisées `"Courage"` (Esther, Gédéon, Jaël…) apparaissaient donc
   quand un joueur sélectionnait uniquement « Rois & prophètes », sans rapport thématique réel.

Un troisième problème latent a été identifié en creusant : le `switch` de `matchesCategory` avait
une clause `default: return true`. Si quiconque avait un jour ajouté un bouton « Actes » à l'écran
Configuration sans toucher au switch, ce filtre aurait — par cette clause par défaut — fait
correspondre **les 525 questions du jeu, toutes catégories confondues**. Vérifié programmatiquement
(voir ci-dessous) avant d'écrire le correctif, pour ne pas reproduire ce piège avec la nouvelle
catégorie ajoutée cette version.

### Ce qui a été fait

- **Nouvelle source unique de vérité** dans `src/data/catalog.ts` : une table `CATEGORY_MAP`
  exhaustive fait correspondre chacune des 41 valeurs brutes trouvées dans `questions.ts` — tous
  modes confondus — à l'un des 5 buckets thématiques réels : `Personnages`, `Bible`, `Évangiles`,
  `Rois & prophètes`, `Actes`. Correspondance exacte après normalisation (minuscule + trim), plus
  aucune correspondance par sous-chaîne. Une valeur non prévue tombe sur `Bible` par défaut et
  déclenche un `console.warn` explicite (pour être détectée immédiatement si du nouveau contenu
  introduit une catégorie non mappée), plutôt que de disparaître silencieusement.
- **`Actes` devient un vrai filtre**, ajouté à l'écran Configuration — il n'existait tout simplement
  pas avant, alors que 39 questions (toutes catégories confondues) en dépendent.
- `src/app/game.tsx` (`matchesCategory`) : réécrit pour utiliser `normalizeCategory()` avec une
  égalité stricte. `Chronologie` et `Défis` restent des sélecteurs de **mode** (tout le mode
  Chronologie / tout Défi 10s + Time's Up, quel que soit le thème) — comportement volontairement
  inchangé sur ce point, il correspondait à l'intention initiale.
- `src/app/setup.tsx` : la liste de boutons de catégories vient maintenant de
  `catalog.ts` (`setupCategoryFilters`) au lieu d'une liste codée en dur qui avait divergé.
- `src/app/training.tsx` : le mode Entraînement solo n'exposait que 3 catégories sur 5
  (`Personnages`, `Bible`, `Histoire biblique` — cette dernière n'étant même plus une catégorie
  distincte). `Évangiles`, `Rois & prophètes` et `Actes` étaient donc impossibles à cibler en
  entraînement. Corrigé : la liste vient maintenant de `categoryLabels` (même source que partout
  ailleurs).
- `src/app/progress.tsx` bénéficie automatiquement du correctif (import inchangé de
  `categoryLabels`/`normalizeCategory` depuis `catalog.ts`) : l'écran « Mes progrès » n'affiche
  plus de barres fantômes à 0/0 pour des catégories sans questions Quiz (`Chronologie`, `Défis`,
  qui n'ont jamais fait partie du pool Quiz), et affiche désormais la catégorie `Actes`.

### Vérification effectuée

Le nouveau moteur ne pouvant pas être exécuté dans l'application elle-même sans `npm install`
(réseau toujours indisponible ici, voir plus bas), il a été vérifié par une reproduction fidèle en
JavaScript autonome, alimentée par une extraction programmatique de toutes les paires
`{type, category}` réellement présentes dans `questions.ts` :

- **0 catégorie brute non mappée** sur les 41 valeurs distinctes trouvées dans le fichier de données.
- Les 30 questions `"Actes"` (26 Quiz + 4 Intrus) upréalablement invisibles sous tout filtre actif
  apparaissent maintenant correctement sous le filtre `Actes` (0 orpheline restante).
- Les 5 questions `"Courage"` qui apparaissaient à tort sous `Rois & prophètes` n'y apparaissent
  plus (0 fuite restante).
- Confirmation que l'ancien `default: return true` du switch aurait fait correspondre les 525
  questions à un filtre `Actes` mal câblé — d'où le choix d'une égalité stricte sans cas par défaut
  permissif dans la nouvelle version.

### Vérifications techniques réellement effectuées

- Extraction programmatique et recomptage des 41 valeurs de catégorie réellement utilisées dans
  `questions.ts`, tous modes confondus.
- Simulation JS autonome de l'ancien et du nouveau `matchesCategory`, comparée filtre par filtre,
  pour confirmer les deux bugs puis leur correction (voir décompte ci-dessus).
- Équilibre des délimiteurs `()`/`{}`/`[]` vérifié par script sur les 4 fichiers modifiés
  (`catalog.ts`, `game.tsx`, `setup.tsx`, `training.tsx`) : OK. Cette vérification est syntaxique
  uniquement (ne détecte pas les erreurs de typage).
- `npm install` toujours impossible dans cet environnement : `403 Forbidden` (`host_not_allowed`)
  sur `registry.npmjs.org`. Confirmé à nouveau ce tour-ci (curl direct sur le registre). Impossible
  donc d'exécuter `tsc --noEmit` avec les vraies dépendances, `expo start`, ou `eas build` ici.
- **Aucun test réel Web/Android/iOS effectué** — nécessite l'accès réseau ci-dessus. À refaire dans
  un environnement connecté avant publication, comme pour V26 et V27.

### Limites de cet exercice

- Les rattachements thématiques de certaines catégories transverses sont un jugement éditorial
  documenté dans `catalog.ts` (ex. `Prédication`/`Persévérance` → `Actes` car les questions
  correspondantes portent sur Pierre/Corneille et Paul dans le livre des Actes ; `Confiance` →
  `Rois & prophètes` car la question porte sur Ézéchias) plutôt qu'une règle mécanique. Cohérent et
  commenté ligne par ligne, mais une relecture humaine reste utile avant publication.
- La correction n'a pas été vérifiée en conditions réelles (pas de `tsc` complet, pas d'exécution
  de l'app) faute de réseau dans cet environnement.
