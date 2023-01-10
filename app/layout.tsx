import { SessionAuthProvider } from '@/src/providers/SessionContext';
import '@/styles/globals.css';
import 'katex/dist/katex.min.css' // `rehype-katex` does not import the CSS for you
// import '@/styles/katex.css';
import { Header } from '@/ui/Header';
import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Eureka</title>
        {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css"></link> */}
        {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.13.18/dist/katex.min.css" integrity="sha384-zTROYFVGOfTw7JV7KUu8udsvW2fx4lWOsCEDqhBreBwlHI4ioVRtmIvEThzJHGET" ></link> */}
      </head>
      <body>
      <SessionAuthProvider>
      <Header />

        {children}
      </SessionAuthProvider>
      </body>
    </html>
  );
}
