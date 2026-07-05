"use client";
import { Suspense } from 'react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { fetchProjectBySlug } from '../../services/api';
import { ArrowLeft, Code, ExternalLink, Calendar, DollarSign, Layers, ChevronLeft, ChevronRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ProjectDetailContent() {
 const searchParams = useSearchParams();
 const slug = searchParams.get('slug');
 const { t, i18n } = useTranslation();
 const [project, setProject] = useState(null);
 const [loading, setLoading] = useState(true);

 useEffect(() => {
 const loadProject = async () => {
 setLoading(true);
 try {
 const data = await fetchProjectBySlug(slug);
 setProject(data);
 } catch (error) {
 console.error("Failed to load project", error);
 } finally {
 setLoading(false);
 }
 };
 loadProject();
 }, [slug, i18n.language]);

 if (loading) {
 return (
 <div className="flex justify-center items-center h-[70vh]">
 <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
 </div>
 );
 }

 if (!project) {
 return (
 <div className="flex flex-col justify-center items-center h-[70vh] text-center space-y-4">
 <h2 className="text-base md:text-3xl font-bold text-slate-900 dark:text-white">{t('project_not_found', 'Project Not Found')}</h2>
 <Link href="/projects" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-2">
 <ArrowLeft className="w-4 h-4" /> {t('back_to_projects', 'Back to Projects')}
 </Link>
 </div>
 );
 }

 const renderIcon = (iconName) => {
 if (iconName.startsWith('devicon-') || iconName.startsWith('fas ')) {
 return <i className={`${iconName} w-8 h-8 opacity-50`} />;
 }
 const IconComponent = LucideIcons[iconName];
 if (IconComponent) return <IconComponent className="w-8 h-8 opacity-50" />;
 return <Layers className="w-8 h-8 opacity-50" />;
 };

 return (
 <div className="max-w-4xl mx-auto py-6 md:py-12 px-4 animate-fade-in space-y-6 md:space-y-12">
 <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
 <ArrowLeft className="w-4 h-4" /> {t('back_to_projects', 'Back to Projects')}
 </Link>

 <div className="space-y-6">
 <div className="flex flex-wrap items-center gap-4">
 {project.category_detail && (
 <span className="px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-bold tracking-wide">
 {project.category_detail.name}
 </span>
 )}
 {project.estimated_price && (
 <span className="flex items-center gap-1 px-4 py-1.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-bold tracking-wide">
 <DollarSign className="w-4 h-4" /> {t('estimated_price', 'Estimated Price')}: ${parseInt(project.estimated_price)}
 </span>
 )}
 <span className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
 <Calendar className="w-4 h-4" /> {new Date(project.created_at).toLocaleDateString()}
 </span>
 </div>

 <h1 className="text-base md:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
 {project.title}
 </h1>

 <div className="flex flex-wrap gap-4 pt-2">
 {project.github_link && (
 <a href={project.github_link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 md:px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold transition-all">
 <Code className="w-5 h-5" /> {t('code', 'Source Code')}
 </a>
 )}
 {project.live_link && (
 <a href={project.live_link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 md:px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all shadow-lg shadow-blue-500/30">
 <ExternalLink className="w-5 h-5" /> {t('live_demo', 'Live Demo')}
 </a>
 )}
 </div>
 </div>

 <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-3xl overflow-hidden relative border border-slate-200 dark:border-slate-700">
 {project.images && project.images.length > 0 ? (
 <div dir="ltr">
 <Carousel 
 showThumbs={false} 
 showStatus={false}
 dynamicHeight={false} 
 swipeable={true} 
 emulateTouch={true} 
 infiniteLoop={true}
 renderArrowPrev={(onClickHandler, hasPrev, label) =>
 hasPrev && (
 <button type="button" onClick={onClickHandler} title={label} className="absolute start-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/80 dark:bg-slate-900/80 hover:bg-white dark:hover:bg-slate-900 text-slate-800 dark:text-white rounded-full shadow-lg transition-all backdrop-blur-sm">
 <ChevronLeft className="w-6 h-6" />
 </button>
 )
 }
 renderArrowNext={(onClickHandler, hasNext, label) =>
 hasNext && (
 <button type="button" onClick={onClickHandler} title={label} className="absolute end-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/80 dark:bg-slate-900/80 hover:bg-white dark:hover:bg-slate-900 text-slate-800 dark:text-white rounded-full shadow-lg transition-all backdrop-blur-sm">
 <ChevronRight className="w-6 h-6" />
 </button>
 )
 }
 >
 {project.images.map((img, i) => (
 <div key={i} className="h-64 md:h-96 w-full relative">
 <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 z-10 pointer-events-none"></div>
 <img src={img.image} alt={`${project.title} - ${i + 1}`} className="w-full h-full object-cover" />
 </div>
 ))}
 </Carousel>
 </div>
 ) : (
 <div className="w-full h-64 md:h-96 relative">
 <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10"></div>
 <div className="absolute inset-0 flex items-center justify-center text-slate-400 dark:text-slate-600">
 {renderIcon(project.icon)}
 </div>
 </div>
 )}
 </div>

 {project.tech_stacks && project.tech_stacks.length > 0 && (
 <div className="py-4">
 <h3 className="text-sm md:text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
 <Layers className="w-5 h-5 text-blue-500" /> Tech Stack
 </h3>
 <div className="flex flex-wrap gap-3">
 {project.tech_stacks.map((tech, idx) => (
 <span key={idx} className="flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 cursor-default transition-transform hover:scale-105">
 {tech}
 </span>
 ))}
 </div>
 </div>
 )}

 <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300">
 <div dangerouslySetInnerHTML={{ __html: project.description }} />
 </div>
 </div>
 );
}

export default function ProjectDetail() {
 return (
 <Suspense fallback={
 <div className="flex justify-center items-center h-[70vh]">
 <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
 </div>
 }>
 <ProjectDetailContent />
 </Suspense>
 );
}
