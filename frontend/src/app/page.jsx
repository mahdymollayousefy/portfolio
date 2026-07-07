"use client";
import Link from 'next/link';
import { ArrowRight, Code2, Database, Terminal, Layers, CheckCircle2, LayoutTemplate, ServerCog, CloudCog, Briefcase, Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';


export default function Home() {
 const { t } = useTranslation();

 return (
 <div className="flex flex-col gap-16 pb-12 animate-fade-in">
 
 {/* Hero Section */}
 <section className="relative pt-12 md:pt-20 lg:pt-32 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8 min-h-[70vh]">
 
 {/* Left: Text Content */}
 <div className="flex-1 space-y-4 md:space-y-8 text-center lg:text-start z-10">
 <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-semibold text-sm mb-4 animate-slide-up hover:scale-105 transition-transform duration-300 shadow-sm hover:shadow-md">
 <span className="relative flex h-2 w-2">
 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
 <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
 </span>
 {t('available')}
 </div>
 
 <h1 className="text-2xl md:text-3xl md:text-4xl lg:text-5xl lg:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1] animate-slide-up" style={{ animationDelay: '100ms' }}>
 {t('home_title_part1')} <br className="hidden md:block"/>
 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
 {t('home_title_part2')}
 </span>
 </h1>
 
 <p className="text-base md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-slide-up" style={{ animationDelay: '200ms' }}>
 {t('description')}
 </p>
 
 <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4 animate-slide-up" style={{ animationDelay: '300ms' }}>
 <Link href="/projects" className="group w-full sm:w-auto px-4 md:px-6 md:px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-blue-500/30">
 {t('view_work')} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform rtl:rotate-180" />
 </Link>
 <Link href="/work-with-me" className="group w-full sm:w-auto px-4 md:px-6 md:px-8 py-4 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-pink-500/30">
 {t('hire_me_btn')} <Briefcase className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
 </Link>
 <a href="/resume.pdf" target="_blank" rel="noreferrer" className="group w-full sm:w-auto px-4 md:px-6 md:px-8 py-4 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-green-500/30">
 {t('download_resume')} <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
 </a>
 </div>
 </div>

 {/* Right: Image/Avatar Placeholder */}
 <div className="flex-1 w-full max-w-md lg:max-w-lg relative z-10 animate-fade-in" style={{ animationDelay: '200ms' }}>
 <div className="relative aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-slate-100 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-800">
 <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-[inherit] -z-10"></div>
 <img 
 src="/mahdy.jpg" 
 alt="Profile" 
 className="w-full h-full object-cover rounded-2xl md:rounded-[2rem] bg-slate-100 dark:bg-slate-800"
 />
 </div>
 
 {/* Floating badge */}
 <div className="absolute -bottom-4 -start-4 md:-bottom-6 md:-start-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-2 md:p-4 rounded-xl md:rounded-2xl flex items-center gap-2 md:gap-4 shadow-xl animate-slide-up" style={{ animationDelay: '400ms' }}>
 <div className="bg-green-100 dark:bg-green-900/30 p-2 md:p-3 rounded-lg md:rounded-xl text-green-600 dark:text-green-400">
 <Code2 className="w-4 h-4 md:w-6 md:h-6" />
 </div>
 <div>
 <p className="font-bold text-slate-900 dark:text-white text-sm md:text-lg">{t('fullstack_dev')}</p>
 </div>
 </div>
 </div>
 </section>

 {/* About Me Section */}
 <section className="py-6 md:py-12 animate-slide-up bg-slate-50 dark:bg-slate-900/50 rounded-3xl mx-0 px-4 lg:px-0" style={{ animationDelay: '220ms' }}>
 <div className="max-w-4xl mx-auto px-4 md:px-6 py-4 md:py-8 space-y-6">
 <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">{t('about_me_title')}</h2>
 <p className="text-slate-600 dark:text-slate-400 text-sm md:text-lg leading-relaxed ">{t('about_me_desc')}</p>
 </div>
 </section>

 {/* Quick Stats Section */}
 <section className="py-4 md:py-8 animate-slide-up border-b border-slate-200 dark:border-slate-800" style={{ animationDelay: '250ms' }}>
 <div className="flex flex-col md:flex-row justify-around items-center gap-8 max-w-4xl mx-auto py-2">
 <div className="text-center">
 <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-blue-600 dark:text-blue-400 mb-2">{t('stats_exp')}</h3>
 <p className="font-semibold text-slate-700 dark:text-slate-300">{t('stats_exp_desc')}</p>
 </div>
 <div className="text-center">
 <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-purple-600 dark:text-purple-400 mb-2">{t('stats_projects')}</h3>
 <p className="font-semibold text-slate-700 dark:text-slate-300">{t('stats_projects_desc')}</p>
 </div>
 <div className="text-center">
 <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-green-600 dark:text-green-400 mb-2">{t('stats_clients')}</h3>
 <p className="font-semibold text-slate-700 dark:text-slate-300">{t('stats_clients_desc')}</p>
 </div>
 </div>
 </section>

 {/* Core Services Section */}
 <section className="py-6 md:py-12 animate-slide-up" style={{ animationDelay: '300ms' }}>
 <div className="max-w-4xl mx-auto space-y-6 md:space-y-12">
 <div className="space-y-4">
 <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">{t('services_title')}</h2>
 <p className="text-slate-600 dark:text-slate-400 text-sm md:text-lg leading-relaxed ">{t('services_desc')}</p>
 </div>

 <div className="space-y-10">
 <div className="flex gap-6 items-start">
 <div className="bg-blue-50 dark:bg-blue-900/30 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
 <LayoutTemplate className="w-6 h-6 text-blue-600 dark:text-blue-400" />
 </div>
 <div>
 <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2">{t('service_1')}</h3>
 <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-lg">{t('service_1_desc')}</p>
 </div>
 </div>
 
 <div className="flex gap-6 items-start">
 <div className="bg-purple-50 dark:bg-purple-900/30 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
 <ServerCog className="w-6 h-6 text-purple-600 dark:text-purple-400" />
 </div>
 <div>
 <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2">{t('service_2')}</h3>
 <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-lg">{t('service_2_desc')}</p>
 </div>
 </div>

 <div className="flex gap-6 items-start">
 <div className="bg-green-50 dark:bg-green-900/30 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
 <CloudCog className="w-6 h-6 text-green-600 dark:text-green-400" />
 </div>
 <div>
 <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2">{t('service_3')}</h3>
 <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-lg">{t('service_3_desc')}</p>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Expertise Section */}
 <section className="py-6 md:py-12 animate-slide-up bg-slate-50 dark:bg-slate-900/50 rounded-3xl" style={{ animationDelay: '350ms' }}>
 <div className="max-w-4xl mx-auto px-4 md:px-6 py-4 md:py-8 space-y-6 md:space-y-12">
 <div className="space-y-4">
 <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">{t('expertise_title')}</h2>
 <p className="text-slate-600 dark:text-slate-400 text-sm md:text-lg leading-relaxed ">{t('expertise_desc')}</p>
 </div>

 <div className="space-y-4 md:space-y-8">
 <div className="border-s-4 border-s-blue-500 ps-6 py-2">
 <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2">{t('backend_title')}</h3>
 <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-lg">{t('backend_desc')}</p>
 </div>
 
 <div className="border-s-4 border-s-purple-500 ps-6 py-2">
 <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2">{t('data_title')}</h3>
 <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-lg">{t('data_desc')}</p>
 </div>

 <div className="border-s-4 border-s-green-500 ps-6 py-2">
 <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2">{t('ai_title')}</h3>
 <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-lg">{t('ai_desc')}</p>
 </div>
 </div>
 </div>
 </section>

 {/* Work Process Section */}
 <section className="py-6 md:py-12 animate-slide-up" style={{ animationDelay: '400ms' }}>
 <div className="max-w-4xl mx-auto space-y-6 md:space-y-12">
 <div className="space-y-4">
 <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">{t('process_title')}</h2>
 <p className="text-slate-600 dark:text-slate-400 text-sm md:text-lg leading-relaxed ">{t('process_desc')}</p>
 </div>
 
 <div className="flex flex-col gap-10">
 {[
 { id: 1, title: 'discovery', desc: 'discovery_desc' },
 { id: 2, title: 'architecture', desc: 'architecture_desc' },
 { id: 3, title: 'development', desc: 'development_desc' },
 { id: 4, title: 'deployment', desc: 'deployment_desc' }
 ].map((step, idx) => (
 <div key={step.id} className="flex gap-6 items-start">
 <div className="text-xl md:text-xl md:text-5xl font-black text-slate-200 dark:text-slate-800 mt-1">
 0{step.id}
 </div>
 <div>
 <h4 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
 {t(step.title)}
 </h4>
 <p className="text-sm md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed ">{t(step.desc)}</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 </div>
 );
}
