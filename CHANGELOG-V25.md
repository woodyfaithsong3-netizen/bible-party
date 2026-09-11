# Bible Party V25 — enrichissement de la banque

## Version 1.5.0

### Banque de contenu
- Passage à **523 entrées jouables** au total.
- Enrichissement sans reprise des variantes artificielles de V14.
- Nouvelles questions centrées sur Genèse, Exode, Juges, les rois et prophètes, l’exil et le retour, les Évangiles et les Actes.
- Ajout de personnages moins représentés : Ésaü, Boaz, Obed, Joab, Abner, Mical, Houlda, Barak, Sissera, Manoah, Éli, Guéhazi, Micaïa, Zorobabel, Sédécias, Belschatsar, Darius le Mède, Pilate, Joseph d’Arimathie, Gamaliel, etc.
- Ajout de nouvelles chronologies, épreuves Intrus, Time’s Up, questions de type « Qui a dit ça ? » et défis rapides.
- Évitement des doublons évidents dans les nouvelles séries « Qui suis-je ? » et « Qui a dit ça ? ».

### Références
Les nouvelles entrées sont formulées de façon originale et renvoient aux passages bibliques correspondants. La vérification éditoriale s’appuie sur la Bible et les aperçus bibliques disponibles sur JW.org ; aucun texte d’article, visuel ou mise en page de JW.org n’est intégré.

### Vérifications techniques
- Balance des délimiteurs de `src/data/questions.ts` : OK.
- Vérification statique du fichier de données : OK.
- `tsc --noEmit` tenté, mais impossible d’obtenir un typecheck complet car les dépendances Expo/React ne sont pas installées dans l’environnement et `expo/tsconfig.base` manque. Cela ne doit pas être présenté comme un test de build réussi.
- ZIP contrôlé après génération.
