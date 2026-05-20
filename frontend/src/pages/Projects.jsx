import { useEffect, useState } from 'react';
import { fetchProjects } from '../services/api';
import { Code, ExternalLink, Code2, ShieldCheck, ServerCog, Cpu } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Projects() {
  const { t } = useTranslation();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchProjects();
        setProjects(data);
      } catch (error) {
        console.error("Failed to load projects", error);
      } finally {
        setLoading(false);
      }
    };
    loadProjects();
  }, []);

  return (
    <div className="space-y-24 max-w-6xl mx-auto pb-12 animate-fade-in">
      
      {/* Header Section */}
      <div className="text-center space-y-4 pt-8">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white animate-slide-up">
          {t('title_part1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">{t('title_part2')}</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '100ms' }}>
          {t('desc')}
        </p>
      </div>

      {/* Projects Grid */}
      <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div key={project.id} className="glass-card overflow-hidden group flex flex-col h-full hover:-translate-y-2 transition-transform duration-300 hover:shadow-xl" style={{ animationDelay: `${(idx % 3) * 100}ms` }}>
                {/* Image Placeholder */}
                <div className="h-48 w-full bg-slate-200 dark:bg-slate-800 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 group-hover:scale-105 transition-transform duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-slate-400 dark:text-slate-600 group-hover:scale-110 transition-transform duration-500">
                    <Code2 className="w-16 h-16 opacity-50" />
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-1 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {project.tech_stack && project.tech_stack.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech_stack.map((tech, i) => (
                        <span key={i} className="px-2.5 py-1 text-xs font-medium rounded-md bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors cursor-default">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
                    {project.github_link && (
                      <a href={project.github_link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors group/link hover:translate-x-1">
                        <Code className="w-4 h-4 group-hover/link:text-blue-500 transition-colors" /> {t('code')}
                      </a>
                    )}
                    {project.live_link && (
                      <a href={project.live_link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors group/link hover:translate-x-1">
                        <ExternalLink className="w-4 h-4 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" /> {t('live_demo')}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 glass-card">
            <Code2 className="w-16 h-16 text-slate-300 dark:text-slate-700 mx-auto mb-4 animate-pulse" />
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{t('no_projects')}</h3>
            <p className="text-slate-500 dark:text-slate-400">{t('no_projects_desc')}</p>
          </div>
        )}
      </div>

      {/* Capabilities Section */}
      <section className="py-12 border-t border-slate-200 dark:border-slate-800 animate-slide-up" style={{ animationDelay: '300ms' }}>
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{t('capabilities_title')}</h2>
          <p className="text-slate-600 dark:text-slate-400">{t('capabilities_desc')}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="glass-card p-6 flex items-start gap-4 hover:-translate-y-1 transition-transform duration-300">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-xl text-blue-600 dark:text-blue-400 shrink-0">
              <ServerCog className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-1">High Availability</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">Designing systems with 99.9% uptime architectures.</p>
            </div>
          </div>
          <div className="glass-card p-6 flex items-start gap-4 hover:-translate-y-1 transition-transform duration-300">
            <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-xl text-purple-600 dark:text-purple-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-1">Security First</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">Implementing robust authentication and data encryption.</p>
            </div>
          </div>
          <div className="glass-card p-6 flex items-start gap-4 hover:-translate-y-1 transition-transform duration-300">
            <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-xl text-green-600 dark:text-green-400 shrink-0">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-1">Optimized Execution</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">Low-latency algorithms and database indexing strategies.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
