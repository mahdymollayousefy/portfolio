"use client";
import { useEffect, useState } from 'react';
import { fetchProjects, fetchProjectCategories } from '../../services/api';
import { getTechIconClass } from '../../services/techIcons';
import Link from 'next/link';
import { Search, Code2, ExternalLink, Code, Database, Globe, Eye, Filter, Briefcase } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Projects() {
 const { t, i18n } = useTranslation();
 const [projects, setProjects] = useState([]);
 const [categories, setCategories] = useState([]);
 const [loading, setLoading] = useState(true);
 const [filter, setFilter] = useState('all');
 const [currentPage, setCurrentPage] = useState(1);
 const projectsPerPage = 6;

 useEffect(() => {
 const loadData = async () => {
 setLoading(true);
 try {
 const [projData, catData] = await Promise.all([fetchProjects(), fetchProjectCategories()]);
 setProjects(projData);
 setCategories(catData);
 } catch (error) {
 console.error("Failed to load data", error);
 } finally {
 setLoading(false);
 }
 };
 loadData();
 }, [i18n.language]);

 const filteredProjects = projects.filter(p => {
 if (filter === 'all') return true;
 if (p.category_detail && p.category_detail.name === filter) return true;
 return false;
 });

 const indexOfLastProject = currentPage * projectsPerPage;
 const indexOfFirstProject = indexOfLastProject - projectsPerPage;
 const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
 const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

 const handlePageChange = (pageNumber) => {
 setCurrentPage(pageNumber);
 window.scrollTo({ top: 0, behavior: 'smooth' });
 };

 const renderCategoryIcon = (iconName) => {
 if (!iconName) return null;
 if (iconName.startsWith('devicon-')) {
 return <i className={`${iconName} text-base`} />;
 }
 const IconComponent = LucideIcons[iconName];
 if (IconComponent) return <IconComponent className="w-4 h-4" />;
 return null;
 };

 const renderTechBadge = (tech, idx) => {
 const iconClass = getTechIconClass(tech);
 return (
 <div key={idx} className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-100 dark:border-blue-800 cursor-default">
 {iconClass && <i className={`${iconClass} text-sm`} />}
 {tech}
 </div>
 );
 };

 return (
 <div className="space-y-6 md:space-y-12 md:space-y-24 max-w-6xl mx-auto pb-12 animate-fade-in">
 
 <div className="text-center space-y-4 pt-8">
 <h1 className="text-2xl md:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white animate-slide-up">
 {t('projects_title_part1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">{t('projects_title_part2')}</span>
 </h1>
 <p className="text-sm md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '100ms' }}>
 {t('projects_desc')}
 </p>
 <div className="pt-6 animate-slide-up" style={{ animationDelay: '150ms' }}>
 <a href="/work-with-me" className="inline-flex items-center gap-2 px-4 md:px-8 py-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl active:shadow-xl hover:-translate-y-1">
 <Briefcase className="w-5 h-5" /> {t('order_project', 'Order a Project')}
 </a>
 </div>
 </div>

 {/* Projects Area */}
 <div className="space-y-4 md:space-y-8 animate-slide-up" style={{ animationDelay: '200ms' }}>
 
 {/* Filters */}
 {!loading && projects.length > 0 && (
 <div className="flex flex-wrap items-center justify-center gap-3">
 <Filter className="w-5 h-5 text-slate-400 me-2 hidden sm:block" />
 <button
 onClick={() => { setFilter('all'); setCurrentPage(1); }}
 className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${filter === 'all' ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20 scale-105' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 active:bg-slate-200 dark:hover:bg-slate-700'}`}
 >
 {t('filter_all', 'All')}
 </button>
 {categories.map((c) => (
 <button
 key={c.id}
 onClick={() => { setFilter(c.name); setCurrentPage(1); }}
 className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${filter === c.name ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20 scale-105' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 active:bg-slate-200 dark:hover:bg-slate-700'}`}
 >
 {renderCategoryIcon(c.icon)}
 {c.name}
 </button>
 ))}
 </div>
 )}

 {loading ? (
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 {Array.from({ length: 6 }).map((_, i) => (
 <div key={i} className="flex flex-col bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 animate-pulse">
 <div className="h-64 bg-slate-200 dark:bg-slate-800"></div>
 <div className="p-4 md:p-8 flex-1 flex flex-col space-y-4">
 <div className="h-8 bg-slate-200 dark:bg-slate-800 rounded w-3/4"></div>
 <div className="space-y-2">
 <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded"></div>
 <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-5/6"></div>
 <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-4/6"></div>
 </div>
 <div className="flex gap-2 mb-6">
 <div className="h-8 w-16 bg-slate-200 dark:bg-slate-800 rounded-lg"></div>
 <div className="h-8 w-20 bg-slate-200 dark:bg-slate-800 rounded-lg"></div>
 </div>
 <div className="grid grid-cols-2 gap-4 mt-auto pt-6 border-t border-slate-100 dark:border-slate-800">
 <div className="h-12 bg-slate-200 dark:bg-slate-800 rounded-xl"></div>
 <div className="h-12 bg-slate-200 dark:bg-slate-800 rounded-xl"></div>
 </div>
 </div>
 </div>
 ))}
 </div>
 ) : currentProjects.length > 0 ? (
 <>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 {currentProjects.map(project => (
 <div key={project.id} className="flex flex-col bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 transition-all duration-300">
 <div className="relative h-64 overflow-hidden bg-slate-100 dark:bg-slate-800">
 {project.images && project.images.length > 0 ? (
 <img src={project.images[0].image} alt={project.title} loading="lazy" className="w-full h-full object-cover" />
 ) : (
 <div className="absolute inset-0 flex items-center justify-center text-slate-400 dark:text-slate-600">
 {project.icon ? <i className={`${project.icon} text-xl md:text-xl md:text-5xl opacity-50`} /> : <Code2 className="w-16 h-16 opacity-50" />}
 </div>
 )}
 </div>
 
 <div className="p-4 md:p-8 flex-1 flex flex-col">
 <div className="flex justify-between items-start mb-2">
 <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
 {project.title}
 </h3>
 {project.estimated_price && (
 <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-bold whitespace-nowrap">
 {t('estimated_price', 'Estimated Price')}: ${parseInt(project.estimated_price)}
 </span>
 )}
 </div>
 
 <div className="text-slate-600 dark:text-slate-400 text-base mb-6 flex-1 prose dark:prose-invert line-clamp-3" dangerouslySetInnerHTML={{ __html: project.description }} />
 
 {project.tech_stacks && project.tech_stacks.length > 0 && (
 <div className="flex flex-wrap gap-2 mb-6">
 {project.tech_stacks.map((tech, idx) => renderTechBadge(tech, idx))}
 </div>
 )}
 
 <div className="grid grid-cols-2 gap-4 mt-auto pt-6 border-t border-slate-100 dark:border-slate-800">
 <Link href={`/project?slug=${project.slug}`} className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-700 text-white font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-500/30">
 <Eye className="w-4 h-4" /> {t('view', 'View')}
 </Link>
 {project.github_link && (
 <a href={project.github_link} target="_blank" rel="noopener noreferrer" className="w-full py-3 rounded-xl bg-pink-600 hover:bg-pink-700 active:bg-pink-700 text-white font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-pink-500/30">
 <Code className="w-4 h-4" /> {t('code')}
 </a>
 )}
 {project.live_link && (
 <a href={project.live_link} target="_blank" rel="noopener noreferrer" className="w-full py-3 rounded-xl bg-green-600 hover:bg-green-700 active:bg-green-700 text-white font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-green-500/30">
 <ExternalLink className="w-4 h-4" /> {t('live_demo')}
 </a>
 )}
 </div>
 </div>
 </div>
 ))}
 </div>
 
 {totalPages > 1 && (
 <div className="flex justify-center items-center gap-2 pt-8">
 {Array.from({ length: totalPages }).map((_, i) => (
 <button
 key={i}
 onClick={() => handlePageChange(i + 1)}
 className={`w-10 h-10 flex items-center justify-center rounded-xl font-bold transition-all duration-300 ${currentPage === i + 1 ? 'bg-blue-600 text-white shadow-lg' : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 active:bg-slate-50 dark:hover:bg-slate-800'}`}
 >
 {i + 1}
 </button>
 ))}
 </div>
 )}
 </>
 ) : (
 <div className="text-center py-6 md:py-12 md:py-24 glass-card">
 <Code2 className="w-16 h-16 text-slate-300 dark:text-slate-700 mx-auto mb-4 animate-pulse" />
 <h3 className="text-base md:text-xl font-semibold text-slate-900 dark:text-white mb-2">{t('no_projects')}</h3>
 <p className="text-slate-500 dark:text-slate-400">{t('no_projects_desc')}</p>
 </div>
 )}
 </div>



 </div>
 );
}
