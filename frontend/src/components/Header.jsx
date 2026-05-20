import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Moon, Sun, Globe, Menu, X, Code2 } from 'lucide-react';

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isDark, setIsDark] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isDark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [isDark]);

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'nl' : i18n.language === 'nl' ? 'fa' : 'en';
    i18n.changeLanguage(nextLang);
  };

  const navLinks = [
    { key: 'home', path: '/' },
    { key: 'projects', path: '/projects' },
    { key: 'skills', path: '/skills' },
    { key: 'hire_me', path: '/hire-me' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full glass">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl font-black tracking-tighter flex items-center gap-2 group">
          <Code2 className="w-8 h-8 text-blue-600 dark:text-blue-500 group-hover:rotate-12 transition-transform" />
          <span>Mahdy<span className="text-blue-600 dark:text-blue-500">.</span></span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 font-medium text-sm">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`inline-block hover:-translate-y-0.5 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 ${location.pathname === link.path ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-300'}`}
            >
              {t(link.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button onClick={toggleLanguage} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" aria-label="Toggle language">
            <Globe className="w-5 h-5 text-slate-700 dark:text-slate-300" />
          </button>
          <button onClick={() => setIsDark(!isDark)} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" aria-label="Toggle theme">
            {isDark ? <Sun className="w-5 h-5 text-slate-300" /> : <Moon className="w-5 h-5 text-slate-700" />}
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ml-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div 
        className={`md:hidden glass-solid absolute top-16 left-0 w-full border-b py-4 px-4 flex flex-col gap-4 shadow-xl transition-all duration-300 origin-top ${
          mobileMenuOpen 
            ? 'opacity-100 scale-y-100 pointer-events-auto' 
            : 'opacity-0 scale-y-95 pointer-events-none'
        }`}
      >
        {navLinks.map((link) => (
          <Link 
            key={link.path} 
            to={link.path} 
            className={`text-lg font-semibold block px-4 py-3 rounded-lg transition-all duration-300 hover:translate-x-2 hover:bg-slate-100 dark:hover:bg-slate-800 ${location.pathname === link.path ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-300'}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            {t(link.key)}
          </Link>
        ))}
      </div>
    </header>
  );
}
