import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchProjectBySlug } from '../services/api';
import { ArrowLeft, Code, ExternalLink, Calendar, DollarSign, Layers } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function ProjectDetail() {
  const { slug } = useParams();
  const { t } = useTranslation();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProject = async () => {
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
  }, [slug]);

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
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Project Not Found</h2>
        <Link to="/projects" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Projects
        </Link>
      </div>
    );
  }

  const renderIcon = (iconName) => {
    const IconComponent = LucideIcons[iconName];
    if (IconComponent) return <IconComponent className="w-8 h-8 opacity-50" />;
    return <Layers className="w-8 h-8 opacity-50" />;
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 animate-fade-in space-y-12">
      <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Projects
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
              <DollarSign className="w-4 h-4" /> {project.estimated_price}
            </span>
          )}
          <span className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
            <Calendar className="w-4 h-4" /> {new Date(project.created_at).toLocaleDateString()}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {project.title}
        </h1>

        <div className="flex flex-wrap gap-4 pt-2">
          {project.github_link && (
            <a href={project.github_link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold transition-all">
              <Code className="w-5 h-5" /> Source Code
            </a>
          )}
          {project.live_link && (
            <a href={project.live_link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all shadow-lg shadow-blue-500/30">
              <ExternalLink className="w-5 h-5" /> Live Demo
            </a>
          )}
        </div>
      </div>

      <div className="h-64 md:h-96 w-full bg-slate-100 dark:bg-slate-800 rounded-3xl overflow-hidden relative border border-slate-200 dark:border-slate-700">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10"></div>
        {project.images && project.images.length > 0 ? (
          <img src={project.images[0].image} alt={project.title} className="w-full h-full object-cover" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-slate-400 dark:text-slate-600">
             {renderIcon(project.icon)}
          </div>
        )}
      </div>

      {project.tech_stack && (
        <div className="p-8 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <Layers className="w-5 h-5 text-blue-500" /> Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tech_stack.split(',').map((tech, i) => tech.trim() && (
              <span key={i} className="px-4 py-2 text-sm font-semibold rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-sm cursor-default hover:scale-105 transition-transform">
                {tech.trim()}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="prose dark:prose-invert max-w-none p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <div dangerouslySetInnerHTML={{ __html: project.description }} />
      </div>
    </div>
  );
}
