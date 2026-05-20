import { useState, useEffect } from 'react';
import { Activity, Code, User, MessageCircle } from 'lucide-react';
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
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
        
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="font-medium text-slate-700 dark:text-slate-300">
            © {new Date().getFullYear()} Mahdy. {t('all_rights_reserved')}
          </p>
          <p>{t('tagline')}</p>
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-300 hover:scale-110 hover:-translate-y-1 text-slate-600 dark:text-slate-300 hover:shadow-sm">
            <Code className="w-5 h-5" />
          </a>
          <a href="#" className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-300 hover:scale-110 hover:-translate-y-1 text-slate-600 dark:text-slate-300 hover:shadow-sm">
            <User className="w-5 h-5" />
          </a>
          <a href="#" className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-300 hover:scale-110 hover:-translate-y-1 text-slate-600 dark:text-slate-300 hover:shadow-sm">
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>

        <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card border-none shadow-sm transition-transform duration-300 hover:scale-105">
          <div className="relative flex h-3 w-3">
            {isOnline && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>}
            <span className={`relative inline-flex rounded-full h-3 w-3 ${isOnline ? 'bg-green-500' : 'bg-red-500'}`}></span>
          </div>
          <span className={`font-semibold tracking-wide text-xs uppercase ${isOnline ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
            {t(serverStatusKey)}
          </span>
        </div>
        
      </div>
    </footer>
  );
}
