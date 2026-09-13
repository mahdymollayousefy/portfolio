"use client";

import { useEffect, useState } from 'react';
import '../index.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function I18nProvider({ children, onReady }) {
 useEffect(() => {
 import('../i18n').then((module) => {
 onReady(module.default);
 });
 }, [onReady]);
 return children;
}

export default function RootLayout({ children }) {
 const [i18nInstance, setI18nInstance] = useState(null);
 const [lang, setLang] = useState('en');

 useEffect(() => {
 if (i18nInstance) {
 setLang(i18nInstance.language || 'en');
 const handleLangChange = (lng) => setLang(lng);
 i18nInstance.on('languageChanged', handleLangChange);
 return () => {
 i18nInstance.off('languageChanged', handleLangChange);
 };
 }
 }, [i18nInstance]);

 const dir = lang === 'fa' ? 'rtl' : 'ltr';

 return (
 <html lang={lang} dir={dir} suppressHydrationWarning>
 <head>
 <title>Mahdy Mollayousefy — Full-Stack Developer</title>
 <meta name="description" content="Portfolio of Mahdy Mollayousefy — Full-Stack Developer specializing in Django, React, Next.js, and Cloud Infrastructure. Available for hire." />
 <meta name="viewport" content="width=device-width, initial-scale=1" />
 <meta name="theme-color" content="#0f172a" />
 <link rel="icon" href="/logo.jpg" />
 <link rel="preconnect" href="https://fonts.googleapis.com" />
 <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
 <link rel="preconnect" href="https://cdn.jsdelivr.net" />
 <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
 <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
 </head>
 <body className={`min-h-screen flex flex-col pt-16 ${lang === 'fa' ? 'font-vazirmatn' : 'font-sans'} selection:bg-purple-500/30 selection:text-white dark:selection:text-white bg-white dark:bg-slate-900 text-slate-900 dark:text-white`}>
 <I18nProvider onReady={setI18nInstance}>
 {i18nInstance ? (
 <>
 <Header />

 {/* Background ambient effects */}
 <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
 <div className="absolute -top-1/2 -start-1/2 w-[100vw] h-[100vw] rounded-full bg-blue-500/10 blur-3xl opacity-50 dark:opacity-20 animate-pulse" style={{ animationDuration: '10s' }} />
 <div className="absolute -bottom-1/2 -end-1/2 w-[100vw] h-[100vw] rounded-full bg-purple-500/10 blur-3xl opacity-50 dark:opacity-20 animate-pulse" style={{ animationDuration: '12s' }} />
 </div>

 <main className="flex-1 container mx-auto px-4 sm:px-6 py-6 md:py-12 animate-fade-in">
 {children}
 </main>
 
 <Footer />
 </>
 ) : null}
 </I18nProvider>
 </body>
 </html>
 );
}
