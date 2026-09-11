# Bible Party V12 — préparation publication

- Version applicative : 1.1.2
- Android versionCode : 4
- iOS buildNumber : 4
- Cohérence version `package.json` / `app.json` corrigée.
- Ancienne URL de confidentialité `example.com` retirée : aucune URL fictive ne doit être publiée.
- Ajout d'une page de confidentialité dans l'application.
- Ajout de `PRIVACY-POLICY.md`, à publier sur une URL publique avant les stores.
- Paramètres : accès direct à la politique de confidentialité.
- Écran À propos mis à jour pour V12.
- Icône 1024×1024 et adaptive icon 1024×1024 vérifiées.
- Configuration EAS production conservée.

## Limite de validation

Les dépendances npm n'ont pas pu être installées dans l'environnement de travail (timeout). Aucun build Android/iOS n'est donc déclaré comme réussi tant qu'un `npm install`, `npm run typecheck` et un build EAS réel n'ont pas été exécutés.
