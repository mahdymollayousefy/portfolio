"use client";
import { useState, useEffect } from 'react';
import { Mail, Home, Code2, Briefcase, ShieldCheck, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import api from '../services/api';

export default function Footer() {
  const { t } = useTranslation();


  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 backdrop-blur py-8 mt-auto">
      <div className="container mx-auto px-4 grid grid-cols-2 md:flex md:flex-row justify-between items-start md:items-center gap-8 text-sm text-slate-500 dark:text-slate-400">
        
        <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start gap-4">
          <p className="font-medium text-slate-700 dark:text-slate-300">
            © {new Date().getFullYear()} {t('all_rights_reserved')}
          </p>
          <p>{t('tagline')}</p>
        </div>

        <div className="flex flex-col gap-2 md:gap-4 md:w-48">
          <Link href="/" className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <Home className="w-4 h-4" /> {t('home')}
          </Link>
          <Link href="/skills" className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <Code2 className="w-4 h-4" /> {t('nav_skills')}
          </Link>
          <Link href="/hire-me" className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <Briefcase className="w-4 h-4" /> {t('hire_me')}
          </Link>
          <Link href="/legal" className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <ShieldCheck className="w-4 h-4" /> {t('legal')}
          </Link>
        </div>

        <div className="flex flex-col gap-2 md:w-48">
          <a href="https://github.com/mahdymollayousefy" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white transition-all hover:-translate-y-1">
            <GithubIcon className="w-5 h-5" />
            <span className="font-medium">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/mahdy-mollayousefy-326b5541a" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white transition-all hover:-translate-y-1">
            <LinkedinIcon className="w-5 h-5" />
            <span className="font-medium">LinkedIn</span>
          </a>
          <a href="https://t.me/mahdy_yousefy" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white transition-all hover:-translate-y-1">
            <Send className="w-5 h-5 -translate-y-0.5 translate-x-0.5" />
            <span className="font-medium">Telegram</span>
          </a>
          <a href="mailto:mahdyyousefy@outlook.com" className="flex items-center gap-2 px-4 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white transition-all hover:-translate-y-1">
            <Mail className="w-5 h-5" />
            <span className="font-medium">Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
