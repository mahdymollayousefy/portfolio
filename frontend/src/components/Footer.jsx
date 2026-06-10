import { useState, useEffect } from 'react';
import { Mail, Home, Code2, Briefcase, ShieldCheck, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import api from '../services/api';

export default function Footer() {
  const { t } = useTranslation();
  const [serverStatusKey, setServerStatusKey] = useState('checking');
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const res = await api.get('/status/');
        if (res.status === 200) { 
          setServerStatusKey('systems_online'); 
          setIsOnline(true); 
        } else {
          throw new Error('API down');
        }
      } catch (error) { 
        setServerStatusKey('systems_offline'); 
        setIsOnline(false); 
      }
    };
    checkStatus();
  }, []);

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 backdrop-blur py-8 mt-auto">
      <div className="container mx-auto px-4 grid grid-cols-2 md:flex md:flex-row justify-between items-start md:items-center gap-8 text-sm text-slate-500 dark:text-slate-400">
        
        <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start gap-4">
          <p className="font-medium text-slate-700 dark:text-slate-300">
            © {new Date().getFullYear()} Mahdy. {t('all_rights_reserved')}
          </p>
          <p>{t('tagline')}</p>
          <div className="flex items-center gap-2 px-4 py-2 mt-4 rounded-full glass-card border-none shadow-sm transition-transform duration-300 hover:scale-105">
            <div className="relative flex h-3 w-3">
              {isOnline && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>}
              <span className={`relative inline-flex rounded-full h-3 w-3 ${isOnline ? 'bg-green-500' : 'bg-red-500'}`}></span>
            </div>
            <span className={`font-semibold tracking-wide text-xs uppercase ${isOnline ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
              {t(serverStatusKey)}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2 md:gap-4 md:w-48">
          <Link to="/" className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <Home className="w-4 h-4" /> {t('home')}
          </Link>
          <Link to="/skills" className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <Code2 className="w-4 h-4" /> {t('skills')}
          </Link>
          <Link to="/hire-me" className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <Briefcase className="w-4 h-4" /> {t('hire_me')}
          </Link>
          <Link to="/legal" className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <ShieldCheck className="w-4 h-4" /> {t('legal')}
          </Link>
        </div>

        <div className="flex flex-col gap-2 md:w-48">
          <a href="https://github.com/mahdymollayousefy" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white transition-all hover:-translate-y-1">
            <GithubIcon className="w-5 h-5" />
            <span className="font-medium">GitHub</span>
          </a>
          <a href="https://linkedin.com/in/mahdymollayousefy" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white transition-all hover:-translate-y-1">
            <LinkedinIcon className="w-5 h-5" />
            <span className="font-medium">LinkedIn</span>
          </a>
          <a href="https://t.me/mahdymollayousefy" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white transition-all hover:-translate-y-1">
            <Send className="w-5 h-5 -translate-y-0.5 translate-x-0.5" />
            <span className="font-medium">Telegram</span>
          </a>
          <a href="mailto:contact@example.com" className="flex items-center gap-2 px-4 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white transition-all hover:-translate-y-1">
            <Mail className="w-5 h-5" />
            <span className="font-medium">Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
