import { ScrollViewStyleReset } from 'expo-router/html';
import type { PropsWithChildren } from 'react';

export default function Root({ children }: PropsWithChildren) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, shrink-to-fit=no" />
        <meta name="theme-color" content="#041C24" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Bible Party" />
        <meta name="description" content="Bible Party — un jeu biblique en équipe." />
        <link rel="manifest" href="/bible-party/manifest.json" />
        <link rel="icon" href="/bible-party/bible-party-icon.png" />
        <link rel="apple-touch-icon" href="/bible-party/bible-party-icon.png" />
        <style dangerouslySetInnerHTML={{ __html: `
          html, body, #root { width: 100%; min-height: 100%; margin: 0; padding: 0; background: #041C24; }
          html { height: 100%; overflow: hidden; }
          body { min-height: 100dvh; overflow: hidden; overscroll-behavior: none; -webkit-tap-highlight-color: transparent; }
          #root { min-height: 100dvh; }
          * { box-sizing: border-box; }
          button, a, [role="button"] { -webkit-tap-highlight-color: transparent; }
          ::-webkit-scrollbar { width: 0; height: 0; }
        ` }} />
        <ScrollViewStyleReset />
      </head>
      <body>{children}</body>
    </html>
  );
}
