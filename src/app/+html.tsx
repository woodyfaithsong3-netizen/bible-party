import { ScrollViewStyleReset } from 'expo-router/html';
import type { PropsWithChildren } from 'react';

export default function Root({ children }: PropsWithChildren) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover" />
        <meta name="theme-color" content="#0B0B0D" />
        <meta name="description" content="Bible Party — jeu biblique de groupe indépendant." />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Bible Party" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="manifest" href="/bible-party/manifest.json" />
        <link rel="apple-touch-icon" href="/bible-party/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/bible-party/icon-192.png" />
        <style dangerouslySetInnerHTML={{ __html: `html,body,#root{background:#0B0B0D;margin:0;min-height:100%;}body{overscroll-behavior:none;}` }} />
        <ScrollViewStyleReset />
      </head>
      <body>{children}</body>
    </html>
  );
}
