# Bible Party V31 — premier vrai bug trouvé par une exécution réelle

## Version 1.5.6

Cette version corrige le tout premier problème découvert par une **vraie exécution** du projet
(`npm install` puis `npx tsc --noEmit`, faits par l'utilisateur sur son propre Mac). Jusqu'ici,
tous les correctifs depuis V25 n'avaient été vérifiés que par relecture et par `tsc` isolé fichier
par fichier — ce test complet, avec les vrais types du projet résolus, n'avait jamais pu tourner.

### Bug corrigé

`npx tsc --noEmit` a signalé une vraie erreur de typage dans `src/app/game.tsx` (ligne 223) :

```
error TS2339: Property 'explanation' does not exist on type 'MysteryQuestion | TimesUpQuestion'.
  Property 'explanation' does not exist on type 'TimesUpQuestion'.
```

**Cause :** le code affichait l'écran « Personnage mystère » avec la condition
`mode === 'mystery' && 'clues' in question`. Or `clues` existe à la fois sur `MysteryQuestion`
*et* sur `TimesUpQuestion` (§ voir `src/types.ts`) — seul `MysteryQuestion` a un champ
`explanation`. TypeScript ne pouvait donc pas réduire le type à `MysteryQuestion` avec ce test, et
signalait à juste titre que `question.explanation` pouvait ne pas exister. Même souci, par
symétrie, pour l'écran Time's Up (ligne 235) et pour `award()` (ligne 182), qui utilisaient le
même test imprécis même si l'un des trois n'aurait pas fait planter TypeScript sur ce point précis.

**Correctif :** remplacé `'clues' in question` par `question.type === 'mystery'` (et
`question.type === 'timesup'` pour Time's Up) aux trois endroits. `type` est le champ discriminant
du union `Question` — c'est le seul test que TypeScript sait utiliser pour restreindre
correctement le type, contrairement à un test de présence de propriété partagée par deux variants.

Fonctionnellement, ce n'était pas un bug de comportement à l'exécution (le code aurait sans doute
tourné correctement en JavaScript pur, `question.explanation` valant simplement `undefined` en
mode Time's Up si jamais atteint dans cette branche) — mais c'était une vraie erreur de
compilation TypeScript qui aurait bloqué tout build de production, et un signe que la logique de
distinction entre les deux modes reposait sur un test fragile.

### Ce qui a été vérifié cette fois

- **`npm install` a réellement réussi** (586 paquets installés) sur un vrai Mac, pour la première
  fois depuis le début du projet.
- **`npx tsc --noEmit` a réellement tourné avec toutes les dépendances installées** (pas en
  isolation comme avant) et a trouvé cette erreur — la première vérification qui ait eu accès aux
  vrais types du projet.
- Le correctif a été revérifié avec un test TypeScript isolé reproduisant exactement les types
  `MysteryQuestion`/`TimesUpQuestion` et le nouveau test `question.type === 'mystery'` : confirmé
  qu'il élimine bien l'erreur (`tsc --noEmit --strict` → aucune erreur).
- **Le correctif n'a pas encore été revérifié par un `npx tsc --noEmit` complet sur l'ensemble du
  projet** avec les vraies dépendances installées (ça, c'est à l'utilisateur de le relancer).

### Prochaine étape

Sur le Mac où `npm install` a réussi, relancer :
```
npx tsc --noEmit
```
Si "Found 0 errors" (ou aucune sortie), passer à :
```
npx expo start
```
puis appuyer sur `w` (web) ou scanner le QR code avec Expo Go, et commencer les tests réels de
gameplay décrits dans le prompt maître (priorité 1).
