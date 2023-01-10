import { SessionAuthProvider } from '@/src/providers/SessionContext';
import '@/styles/globals.css';
import 'katex/dist/katex.min.css' // `rehype-katex` does not import the CSS for you
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
