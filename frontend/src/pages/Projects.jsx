import { useEffect, useState } from 'react';
import { fetchProjects, fetchProjectCategories } from '../services/api';
import { Link } from 'react-router-dom';
import { Code, ExternalLink, Code2, ShieldCheck, ServerCog, Cpu, Filter } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Projects() {
  const { t } = useTranslation();
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  useEffect(() => {
    const loadData = async () => {
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
  }, []);

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

  return (
    <div className="space-y-24 max-w-6xl mx-auto pb-12 animate-fade-in">
      
      <div className="text-center space-y-4 pt-8">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white animate-slide-up">
          {t('title_part1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">{t('title_part2')}</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '100ms' }}>
          {t('desc')}
        </p>
        <div className="pt-6 animate-slide-up" style={{ animationDelay: '150ms' }}>
          <a href="/hire-me" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
             {t('order_project', 'Order a Project')}
          </a>
        </div>
      </div>

      {/* Projects Area */}
      <div className="space-y-8 animate-slide-up" style={{ animationDelay: '200ms' }}>
        
        {/* Filters */}
        {!loading && projects.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Filter className="w-5 h-5 text-slate-400 mr-2 hidden sm:block" />
            <button
              onClick={() => { setFilter('all'); setCurrentPage(1); }}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${filter === 'all' ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20 scale-105' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'}`}
            >
              All
            </button>
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => { setFilter(c.name); setCurrentPage(1); }}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${filter === c.name ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20 scale-105' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'}`}
              >
                {c.name}
              </button>
            ))}
          </div>
        )}

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : currentProjects.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {currentProjects.map((project, idx) => (
                <div key={project.id} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden group flex flex-col h-full hover:-translate-y-2 transition-transform duration-300 hover:shadow-xl animate-slide-up" style={{ animationDelay: `${(idx % 2) * 100}ms` }}>
                  {/* Image Placeholder or Actual Image */}
                  <Link to={`/projects/${project.slug}`} className="h-56 w-full bg-slate-100 dark:bg-slate-800 relative overflow-hidden block">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 group-hover:scale-105 transition-transform duration-500"></div>
                    {project.images && project.images.length > 0 ? (
                      <img src={project.images[0].image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-slate-400 dark:text-slate-600 group-hover:scale-110 transition-transform duration-500">
                        {project.icon ? <i className={`${project.icon} text-5xl opacity-50`} /> : <Code2 className="w-16 h-16 opacity-50" />}
                      </div>
                    )}
                  </Link>
                
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <Link to={`/projects/${project.slug}`} className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">
                        {project.title}
                      </Link>
                      {project.estimated_price && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-bold whitespace-nowrap">
                          ${project.estimated_price}
                        </span>
                      )}
                    </div>
                    
                    <div className="text-slate-600 dark:text-slate-400 text-base mb-6 flex-1 prose dark:prose-invert line-clamp-3" dangerouslySetInnerHTML={{ __html: project.description }} />
                    
                    {project.tech_stack && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech_stack.split(',').map((tech, i) => tech.trim() && (
                          <span key={i} className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-100 dark:border-blue-800 cursor-default">
                            {tech.trim()}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    <div className="flex items-center gap-6 mt-auto pt-6 border-t border-slate-100 dark:border-slate-800">
                      {project.github_link && (
                        <a href={project.github_link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors group/link hover:translate-x-1">
                          <Code className="w-5 h-5 group-hover/link:text-blue-500 transition-colors" /> {t('code')}
                        </a>
                      )}
                      {project.live_link && (
                        <a href={project.live_link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors group/link hover:translate-x-1">
                          <ExternalLink className="w-5 h-5 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" /> {t('live_demo')}
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
                    className={`w-10 h-10 flex items-center justify-center rounded-xl font-bold transition-all duration-300 ${currentPage === i + 1 ? 'bg-blue-600 text-white shadow-lg' : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-24 glass-card">
            <Code2 className="w-16 h-16 text-slate-300 dark:text-slate-700 mx-auto mb-4 animate-pulse" />
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{t('no_projects')}</h3>
            <p className="text-slate-500 dark:text-slate-400">{t('no_projects_desc')}</p>
          </div>
        )}
      </div>



    </div>
  );
}
