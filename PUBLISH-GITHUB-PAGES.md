# Publication GitHub Pages — Bible Party

La publication web doit utiliser GitHub Actions et le dossier `dist` produit par Expo.

1. Sur GitHub : **Settings → Pages → Build and deployment → Source → GitHub Actions**.
2. Depuis ce projet, pousser `.github/workflows/deploy-pages.yml` sur `main`.
3. Le workflow installe les dépendances, vérifie TypeScript, lance `npm run web:export`, puis déploie uniquement `dist` sur GitHub Pages.
4. Après le déploiement vert, ouvrir : `https://woodyfaithsong3-netizen.github.io/bible-party/`.

Référence : documentation officielle GitHub Pages sur les workflows personnalisés.
