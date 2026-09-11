# Bible Party V69 — PWA iPhone gratuite

## Objectif

Bible Party peut maintenant être publiée comme application web installable (PWA). Sur iPhone, l'utilisateur ouvre le site dans Safari puis choisit **Partager → Sur l'écran d'accueil**.

Cette PWA n'est pas une application iOS native et ne nécessite pas l'App Store.

## GitHub Pages

Le projet est configuré pour le dépôt :

`https://github.com/woodyfaithsong3-netizen/bible-party`

Base URL : `/bible-party`

URL attendue :

`https://woodyfaithsong3-netizen.github.io/bible-party/`

## Générer la version web

Depuis le dossier `project` :

```bash
npm install
npm run typecheck
npx expo export --platform web
```

Expo génère alors `dist/` avec le site statique. Le support `baseUrl` permet de publier le site dans le sous-chemin `/bible-party`. La documentation Expo recommande `web.output: "static"` pour une publication statique et documente `experiments.baseUrl` pour GitHub Pages.

## Déploiement GitHub Pages

Copier le contenu de `dist/` dans la branche publiée par GitHub Pages, en conservant `.nojekyll` si le déploiement est fait avec `gh-pages`.

Pour un déploiement depuis `main`, remplacer les fichiers du site par le contenu de `dist/` puis pousser sur `main`.

## Installation sur iPhone

1. Ouvrir Safari.
2. Aller sur `https://woodyfaithsong3-netizen.github.io/bible-party/`.
3. Appuyer sur **Partager**.
4. Choisir **Sur l'écran d'accueil**.
5. Confirmer.
6. Lancer Bible Party depuis l'icône créée.

## Limite importante

La PWA permet une expérience proche d'une application et peut être installée gratuitement, mais elle reste une application web. Elle ne fournit pas les mêmes capacités qu'une app iOS native.
