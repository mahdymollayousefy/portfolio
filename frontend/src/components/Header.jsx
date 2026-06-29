"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { Moon, Sun, Globe, Menu, X, Home, Briefcase, Code, Mail, Scale, ChevronDown } from 'lucide-react';

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') return true;
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return true; // Default to dark mode
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    setLangDropdownOpen(false);
  };

  const navLinks = [
    { key: 'home', path: '/', icon: <Home className="w-4 h-4" /> },
    { key: 'projects', path: '/projects', icon: <Briefcase className="w-4 h-4" /> },
    { key: 'skills', path: '/skills', icon: <Code className="w-4 h-4" /> },
    { key: 'hire_me', path: '/hire-me', icon: <Mail className="w-4 h-4" /> },
    { key: 'legal', path: '/legal', icon: <Scale className="w-4 h-4" /> },
  ];

  const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'nl', label: 'Dutch', flag: '🇳🇱' },
    { code: 'fa', label: 'فارسی', flag: '🇮🇷' },
  ];
  
  const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

  return (
    <header className="sticky top-0 z-50 w-full glass">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between relative">
        <Link href="/" className="flex items-center gap-2 group">
          {/* Logo Placeholder */}
          <div className="w-10 h-10 rounded bg-slate-200 dark:bg-slate-800 flex items-center justify-center overflow-hidden border border-slate-300 dark:border-slate-700">
            <span className="text-xs text-slate-500 font-bold">LOGO</span>
          </div>
          <span className="text-2xl font-black tracking-tighter">Mahdy<span className="text-blue-600 dark:text-blue-500">.</span></span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 font-medium text-sm">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              href={link.path} 
              className={`flex items-center gap-1.5 hover:-translate-y-0.5 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 ${pathname === link.path ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-300'}`}
            >
              {link.icon}
              <span>{t(link.key)}</span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 relative">
          <div className="relative">
            <button 
              onClick={() => setLangDropdownOpen(!langDropdownOpen)} 
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" 
              aria-label="Toggle language"
              aria-haspopup="true"
              aria-expanded={langDropdownOpen}
            >
              <span>{currentLang.flag}</span>
              <span className="hidden sm:inline">{currentLang.label}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg py-1 z-50">
                {languages.map(lang => (
                  <button
                    key={lang.code}
                    onClick={() => changeLang(lang.code)}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-2 ${i18n.language === lang.code ? 'text-blue-600 font-bold' : 'text-slate-700 dark:text-slate-300'}`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
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
            href={link.path} 
            className={`flex items-center gap-3 text-lg font-semibold px-4 py-3 rounded-lg transition-all duration-300 hover:translate-x-2 hover:bg-slate-100 dark:hover:bg-slate-800 ${pathname === link.path ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-300'}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            {link.icon}
            <span>{t(link.key)}</span>
          </Link>
        ))}
      </div>
    </header>
  );
}
