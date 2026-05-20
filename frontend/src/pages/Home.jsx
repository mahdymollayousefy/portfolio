import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Database, Terminal, Layers, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import heroImg from '../assets/hero.png';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-24 pb-12 animate-fade-in">
      
      {/* Hero Section */}
      <section className="relative pt-12 md:pt-20 lg:pt-32 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8 min-h-[70vh]">
        
        {/* Left: Text Content */}
        <div className="flex-1 space-y-8 text-center lg:text-left z-10 lg:rtl:text-right">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-semibold text-sm mb-4 animate-slide-up hover:scale-105 transition-transform duration-300 shadow-sm hover:shadow-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            {t('available')}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1] animate-slide-up" style={{ animationDelay: '100ms' }}>
            {t('title_part1')} <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {t('title_part2')}
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-slide-up" style={{ animationDelay: '200ms' }}>
            {t('description')}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4 animate-slide-up" style={{ animationDelay: '300ms' }}>
            <Link to="/projects" className="group w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20">
              {t('view_work')} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </Link>
            <Link to="/hire-me" className="w-full sm:w-auto px-8 py-4 rounded-xl glass-card font-bold text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 text-center hover:scale-105">
              {t('hire_me_btn')}
            </Link>
          </div>
        </div>

        {/* Right: Image/Avatar Placeholder */}
        <div className="flex-1 w-full max-w-md lg:max-w-lg relative z-10 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <div className="relative aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden glass shadow-2xl p-4 transition-all duration-500 hover:shadow-blue-500/10 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-[inherit] -z-10"></div>
            <img 
              src={heroImg} 
              alt="Profile" 
              className="w-full h-full object-cover rounded-2xl md:rounded-[2rem] bg-slate-100 dark:bg-slate-800 transition-transform duration-700 hover:scale-105"
            />
          </div>
          
          {/* Floating badge */}
          <div className="absolute -bottom-6 -left-6 md:-left-12 glass-card p-4 rounded-2xl flex items-center gap-4 shadow-xl animate-slide-up hover:scale-110 transition-transform duration-300" style={{ animationDelay: '400ms' }}>
            <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-xl text-green-600 dark:text-green-400">
              <Code2 className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-slate-900 dark:text-white">{t('lines_of_code')}</p>
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400">{t('optimized_code')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-12 animate-slide-up" style={{ animationDelay: '300ms' }}>
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">{t('expertise_title')}</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">{t('expertise_desc')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-8 group hover:-translate-y-2 transition-transform duration-300 hover:shadow-xl">
            <div className="bg-blue-50 dark:bg-blue-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
              <Terminal className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{t('backend_title')}</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{t('backend_desc')}</p>
          </div>
          
          <div className="glass-card p-8 group hover:-translate-y-2 transition-transform duration-300 hover:shadow-xl">
            <div className="bg-purple-50 dark:bg-purple-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
              <Database className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{t('data_title')}</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{t('data_desc')}</p>
          </div>

          <div className="glass-card p-8 group hover:-translate-y-2 transition-transform duration-300 hover:shadow-xl">
            <div className="bg-green-50 dark:bg-green-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
              <Layers className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">{t('ai_title')}</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{t('ai_desc')}</p>
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section className="py-12 animate-slide-up" style={{ animationDelay: '400ms' }}>
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">{t('process_title')}</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">{t('process_desc')}</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { id: 1, title: 'discovery', desc: 'discovery_desc' },
            { id: 2, title: 'architecture', desc: 'architecture_desc' },
            { id: 3, title: 'development', desc: 'development_desc' },
            { id: 4, title: 'deployment', desc: 'deployment_desc' }
          ].map((step, idx) => (
            <div key={step.id} className="glass-card p-6 relative group hover:-translate-y-2 transition-all duration-300 hover:shadow-xl overflow-hidden">
              <div className="absolute -right-4 -top-4 text-9xl font-black text-slate-100 dark:text-slate-800/50 -z-10 group-hover:scale-110 transition-transform duration-500">
                {step.id}
              </div>
              <CheckCircle2 className="w-8 h-8 text-blue-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{t(step.title)}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">{t(step.desc)}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
