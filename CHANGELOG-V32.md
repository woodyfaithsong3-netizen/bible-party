# Bible Party V32 — expo start ne démarrait jamais

## Version 1.5.7

Corrige le blocage rencontré au premier `npx expo start` réel (V31, sur Node 24 puis Node 20 via
nvm) :
```
PluginError: Unexpected token 'export'
No "app.plugin.{js,cjs,mjs,ts,cts,mts}" file was found in "expo-haptics", so the package's main
entry was loaded instead.
...
SyntaxError: Unexpected token 'export'
    at .../node_modules/expo-haptics/src/Haptics.js:11:29
```

### Cause réelle

`app.json` déclarait `expo-haptics` dans la liste `plugins` :
```json
"plugins": ["expo-router", "expo-haptics"]
```
Un « config plugin » Expo est un mécanisme réservé aux paquets qui doivent modifier la
configuration native (permissions, fichiers Info.plist/AndroidManifest, etc.) via un fichier
`app.plugin.js` dédié. `expo-haptics` n'en a pas besoin et n'en fournit pas. Quand Expo CLI tente
quand même de le charger comme plugin, il retombe sur le point d'entrée JS normal du paquet
(`src/Haptics.js`) et le charge avec `require()` Node classique — hors du pipeline Metro qui sait
transformer la syntaxe `export`/`import` moderne. Node refuse alors ce fichier tel quel, et
**l'intégralité du démarrage d'Expo plantait avant même d'afficher un QR code**, sur n'importe
quelle version de Node (confirmé identique sur Node 24 et Node 20).

Ce n'était pas un problème de version de Node comme on le pensait initialement en voyant l'erreur
sous Node 24 — le passage à Node 20 (nécessaire de toute façon, Node 24 n'étant pas encore
supporté par la chaîne d'outils Expo/Metro) a fait disparaître une première erreur différente liée
au « type stripping » natif de Node 24, révélant celle-ci, identique sur les deux versions.

### Correctif

Retiré `"expo-haptics"` de la liste `plugins` de `app.json`. Aucun autre changement : les
vibrations continuent de fonctionner normalement ailleurs dans le code — `expo-haptics` reste
importé comme une bibliothèque JS classique dans `src/app/game.tsx`, ce qui a toujours été correct
et n'a jamais nécessité de config plugin.

### Ce qui a été vérifié

- `app.json` revalidé comme JSON syntaxiquement correct après modification.
- Le champ `plugins` ne contient plus que `["expo-router"]`, seul plugin qui en a réellement besoin
  dans ce projet.

### Ce qui reste à vérifier (par l'utilisateur, sur son Mac, avec Node 20 actif via `nvm use 20`)

```
cd Bible-Party-V32
npm install
npx expo start
```
Si un QR code s'affiche sans erreur de plugin, ce sera la première fois que le serveur de
développement démarre réellement pour ce projet. Ensuite, appuyer sur `w` pour le web ou scanner
le QR code avec Expo Go.
