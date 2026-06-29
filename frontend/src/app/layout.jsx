"use client";

import { useEffect, useState } from 'react';
import '../index.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function I18nProvider({ children }) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    import('../i18n').then(() => setReady(true));
  }, []);
  if (!ready) return null;
  return children;
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Portfolio SaaS</title>
        <meta name="description" content="Portfolio application" />
      </head>
      <body className="min-h-screen flex flex-col font-sans selection:bg-blue-500/30 selection:text-blue-900 dark:selection:text-blue-50 bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
        <I18nProvider>
          <Header />
          
          {/* Background ambient effects */}
          <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            <div className="absolute -top-1/2 -left-1/2 w-[100vw] h-[100vw] rounded-full bg-blue-500/10 blur-3xl opacity-50 dark:opacity-20 animate-pulse" style={{ animationDuration: '10s' }} />
            <div className="absolute -bottom-1/2 -right-1/2 w-[100vw] h-[100vw] rounded-full bg-purple-500/10 blur-3xl opacity-50 dark:opacity-20 animate-pulse" style={{ animationDuration: '12s' }} />
          </div>

          <main className="flex-1 container mx-auto px-4 py-8 md:py-12 animate-fade-in">
            {children}
          </main>
          
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
