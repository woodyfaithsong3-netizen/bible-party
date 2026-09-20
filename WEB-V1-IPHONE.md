# Bible Party — Web V1 iPhone/iPad

La version web repart de V97 et conserve le gameplay et les assets validés sur Android.

## Cible
- iPhone / Safari
- iPad / Safari
- navigateur desktop et tablette
- responsive sans coque téléphone artificielle
- prise en charge des zones sûres iOS (`viewport-fit=cover`)
- ajout à l'écran d'accueil via le manifeste web
- audio d'ambiance compatible avec la politique d'autoplay de Safari : il démarre après la première interaction

## Export

```bash
npm install
npm run web:export
```

Le dossier `dist/` produit par Expo est le site statique à publier sous le chemin `/bible-party/` (ou à adapter avec `experiments.baseUrl` / `web.scope` si le domaine utilise la racine).

## Test local

```bash
npx expo start --web
```

## Publication

Le site statique peut être publié sur un hébergeur compatible avec les fichiers statiques. Le serveur doit renvoyer `index.html` pour les routes de l'application afin que la navigation Expo Router fonctionne après un rafraîchissement.
