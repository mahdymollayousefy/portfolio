"use client";

import * as LucideIcons from 'lucide-react';
import { Wrench, Award, CheckCircle, Globe, Terminal } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Skills() {
 const { t, i18n } = useTranslation();
 
 // Get skills array from the translation file
 const skills = t('skills', { returnObjects: true }) || [];

 const renderIcon = (iconName) => {
 if (!iconName) return <LucideIcons.Wrench className="w-8 h-8 opacity-50 text-slate-500" />;
 if (iconName.startsWith('devicon-') || iconName.startsWith('fas ')) {
 return <i className={`${iconName} text-lg md:text-4xl text-slate-500`} />;
 }
 const IconComponent = LucideIcons[iconName];
 if (IconComponent) return <IconComponent className="w-8 h-8 opacity-50 text-slate-500" />;
 return <LucideIcons.Wrench className="w-8 h-8 opacity-50 text-slate-500" />;
 };

 return (
 <div className="max-w-4xl mx-auto space-y-6 md:space-y-12 md:space-y-24 pb-12 animate-fade-in">
 
 <div className="text-center space-y-4 pt-8">
 <h1 className="text-2xl md:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white animate-slide-up">
 {t('skills_title_part1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">{t('skills_title_part2')}</span>
 </h1>
 <p className="text-sm md:text-lg text-slate-600 dark:text-slate-400 animate-slide-up" style={{ animationDelay: '100ms' }}>
 {t('skills_desc')}
 </p>
 </div>

 <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
 {skills && skills.length > 0 ? (
 <div className="grid grid-cols-1 gap-6">
 {skills.map((skill, idx) => (
 <div key={skill.id} className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:-translate-y-1 active:-translate-y-1 transition-transform shadow-sm hover:shadow-md active:shadow-md animate-slide-up" style={{ animationDelay: `${idx * 50}ms` }}>
 <div className="flex items-start gap-4 mb-4">
 <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl">
 {renderIcon(skill.icon)}
 </div>
 <div>
 <h2 className="text-base md:text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
 {skill.name}
 </h2>
 <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1">
 <LucideIcons.FolderOpen className="w-4 h-4" /> {skill.category || t('other', 'Other')}
 </p>
 </div>
 </div>
 
 {skill.description && (
 <div className="text-sm text-slate-600 dark:text-slate-400 prose dark:prose-invert" dangerouslySetInnerHTML={{ __html: skill.description }} />
 )}
 </div>
 ))}
 </div>
 ) : (
 <div className="text-center py-6 md:py-12 md:py-24">
 <Wrench className="w-16 h-16 text-slate-300 dark:text-slate-700 mx-auto mb-4 animate-pulse" />
 <h3 className="text-base md:text-xl font-semibold text-slate-900 dark:text-white mb-2">{t('no_skills')}</h3>
 <p className="text-slate-500 dark:text-slate-400">{t('no_skills_desc')}</p>
 </div>
 )}
 </div>

 {/* Certifications Section */}
 <section className="animate-slide-up" style={{ animationDelay: '250ms' }}>
 <div className="py-4">
 <div className="flex items-center gap-4 mb-8">
 <div className="p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
 <Award className="w-8 h-8 text-yellow-500" />
 </div>
 <div>
 <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">{t('certs_title')}</h2>
 <p className="text-slate-600 dark:text-slate-400">{t('certs_desc')}</p>
 </div>
 </div>
 
 <div className="grid grid-cols-1 gap-6">
 <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col gap-4 hover:-translate-y-1 active:-translate-y-1 transition-transform duration-300 hover:shadow-md">
 <CheckCircle className="w-8 h-8 text-green-500 shrink-0" />
 <h4 className="font-semibold text-slate-800 dark:text-slate-200 text-sm md:text-lg leading-tight">{t('cert_1')}</h4>
 </div>
 </div>
 </div>
 </section>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-slide-up" style={{ animationDelay: '300ms' }}>
 
 {/* Tools & Software Section */}
 <section className="glass-card p-4 md:p-8">
 <div className="flex items-center gap-3 mb-6">
 <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl">
 <Terminal className="w-6 h-6 text-blue-500" />
 </div>
 <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">{t('tools_title')}</h2>
 </div>
 <p className="text-slate-600 dark:text-slate-400 mb-6 ">{t('tools_desc')}</p>
 <div className="space-y-6">
 {[
 { category: 'Frontend', tools: ['React.js', 'Next.js'] },
 { category: 'Backend', tools: ['Python', 'Django', 'PostgreSQL'] },
 { category: 'DevOps & Cloud', tools: ['Docker', 'Linux', 'Ubuntu', 'Nginx', 'Cloudflare CDN'] },
 { category: 'AI & Tools', tools: ['AI Agents', 'n8n', 'Antigravity', 'Git & GitHub', 'VSCode'] }
 ].map((group, idx) => (
 <div key={idx}>
 <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
 {group.category}
 </h3>
 <div className="flex flex-wrap gap-2">
 {group.tools.map((tool, i) => (
 <span key={i} className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md text-xs md:text-sm font-medium hover:bg-purple-50 active:bg-purple-50 dark:hover:bg-purple-900/30 dark:active:bg-purple-900/30 hover:text-purple-600 active:text-purple-600 dark:hover:text-purple-400 dark:active:text-purple-400 transition-colors border border-transparent cursor-default">
 {tool}
 </span>
 ))}
 </div>
 </div>
 ))}
 </div>
 </section>

 {/* Spoken Languages Section */}
 <section className="glass-card p-4 md:p-8">
 <div className="flex items-center gap-3 mb-6">
 <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl">
 <Globe className="w-6 h-6 text-purple-500" />
 </div>
 <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">{t('langs_title')}</h2>
 </div>
 <p className="text-slate-600 dark:text-slate-400 mb-6">{t('langs_desc')}</p>
 <div className="space-y-4">
 <div className="flex justify-between items-center pb-4 border-b border-slate-100 dark:border-slate-800">
 <span className="font-semibold text-slate-900 dark:text-white">{t('lang_en')}</span>
 <span className="text-sm text-slate-500 dark:text-slate-400">{t('lang_en_prof')}</span>
 </div>

 <div className="flex justify-between items-center">
 <span className="font-semibold text-slate-900 dark:text-white">{t('lang_fa')}</span>
 <span className="text-sm text-slate-500 dark:text-slate-400">{t('lang_fa_prof')}</span>
 </div>
 </div>
 </section>

 </div>
 </div>
 );
}
