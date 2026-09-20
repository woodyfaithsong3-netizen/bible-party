# Bible Party V71 — FIXED REAL

Correction de packaging : le projet contient bien AppButton et tous les fichiers source V70 nécessaires. Le problème observé venait du tsconfig.json absent dans l'archive, ce qui empêchait TypeScript et Metro de résoudre l'alias @/*.

Le tsconfig.json restaure l'alias `@/* -> ./src/*`.

Le fond vallée reste intégré directement dans `src/app/_layout.tsx` avec `ImageBackground`, sans hack CSS/body.
