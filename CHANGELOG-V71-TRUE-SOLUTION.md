# Bible Party V71 — vraie solution décor

- Base repartie de V70 fonctionnelle.
- Décor vallée intégré directement dans l'arbre React avec `ImageBackground`, supporté sur Web/iOS/Android.
- Les écrans utilisent un fond transparent afin que le décor soit réellement visible derrière le Stack.
- Suppression des bricolages de fond dans `+html.tsx` : ce fichier reste réservé au HTML statique.
- Palette lumineuse bleu/vert/or et cartes translucides.
- Aucun personnage dans l'image de fond.

La solution repose sur le composant de fond réellement rendu par React, pas sur un fond CSS du document HTML.
