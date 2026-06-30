"use client";

import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="relative mb-8">
        <h1 className="text-8xl md:text-9xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 drop-shadow-sm animate-pulse" style={{ animationDuration: '3s' }}>
          404
        </h1>
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-2xl rounded-full -z-10 animate-pulse" style={{ animationDuration: '4s' }}></div>
      </div>
      
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-slate-100">
        Page Not Found
      </h2>
      
      <p className="max-w-md text-lg text-slate-600 dark:text-slate-400 mb-10">
        Oops! The page you are looking for doesn't exist, has been moved, or is temporarily unavailable.
      </p>
      
      <Link 
        href="/" 
        className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white transition-all duration-200 bg-gradient-to-r from-blue-600 to-purple-600 border border-transparent rounded-full hover:from-blue-500 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 dark:focus:ring-offset-slate-900 shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] hover:-translate-y-1"
      >
        <span>Return to Homepage</span>
        <svg 
          className="w-5 h-5 ml-2 -mr-1 transition-transform duration-200 group-hover:translate-x-1" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
        </svg>
      </Link>
    </div>
  );
}
