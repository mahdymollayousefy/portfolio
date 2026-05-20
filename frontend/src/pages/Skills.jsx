import { useEffect, useState } from 'react';
import { fetchSkills } from '../services/api';
import { Code2, Server, Wrench, Award, CheckCircle, Globe, Terminal } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Skills() {
  const { t } = useTranslation();
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSkills = async () => {
      try {
        const data = await fetchSkills();
        setSkills(data);
      } catch (error) {
        console.error("Failed to load skills", error);
      } finally {
        setLoading(false);
      }
    };
    loadSkills();
  }, []);

  // Group skills by category if data exists
  const groupedSkills = skills.reduce((acc, skill) => {
    const category = skill.category || 'Other';
    if (!acc[category]) acc[category] = [];
    acc[category].push(skill);
    return acc;
  }, {});

  const getCategoryIcon = (category) => {
    if (category.toLowerCase().includes('backend')) return <Server className="w-6 h-6 text-blue-500" />;
    if (category.toLowerCase().includes('frontend')) return <Code2 className="w-6 h-6 text-purple-500" />;
    return <Wrench className="w-6 h-6 text-slate-500" />;
  };

  return (
    <div className="max-w-4xl mx-auto space-y-24 pb-12 animate-fade-in">
      
      <div className="text-center space-y-4 pt-8">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white animate-slide-up">
          {t('title_part1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">{t('title_part2')}</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 animate-slide-up" style={{ animationDelay: '100ms' }}>
          {t('desc')}
        </p>
      </div>

      <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : Object.keys(groupedSkills).length > 0 ? (
          <div className="space-y-12">
            {Object.entries(groupedSkills).map(([category, items], idx) => (
              <div key={category} className="glass-card p-6 md:p-8 hover:shadow-xl transition-shadow duration-300 animate-slide-up" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl hover:scale-110 transition-transform duration-300">
                    {getCategoryIcon(category)}
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{category}</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  {items.map((skill) => (
                    <div key={skill.id} className="space-y-2 group">
                      <div className="flex justify-between items-center text-sm font-medium">
                        <span className="text-slate-700 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{skill.name}</span>
                        <span className="text-slate-500 dark:text-slate-400">{skill.proficiency}%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:brightness-110 transition-all"
                          style={{ width: `${skill.proficiency}%`, transition: 'width 1.5s ease-out' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 glass-card">
            <Wrench className="w-16 h-16 text-slate-300 dark:text-slate-700 mx-auto mb-4 animate-pulse" />
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{t('no_skills')}</h3>
            <p className="text-slate-500 dark:text-slate-400">{t('no_skills_desc')}</p>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-slide-up" style={{ animationDelay: '300ms' }}>
        
        {/* Tools & Software Section */}
        <section className="glass-card p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl">
              <Terminal className="w-6 h-6 text-blue-500" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{t('tools_title')}</h2>
          </div>
          <p className="text-slate-600 dark:text-slate-400 mb-6">{t('tools_desc')}</p>
          <div className="flex flex-wrap gap-3">
            {['Git & GitHub', 'Docker Compose', 'Linux (Ubuntu)', 'Postman', 'VS Code', 'Jira', 'Figma', 'n8n'].map((tool, i) => (
              <span key={i} className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium hover:scale-105 transition-transform hover:shadow-md border border-transparent hover:border-slate-300 dark:hover:border-slate-600 cursor-default">
                {tool}
              </span>
            ))}
          </div>
        </section>

        {/* Spoken Languages Section */}
        <section className="glass-card p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl">
              <Globe className="w-6 h-6 text-purple-500" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{t('langs_title')}</h2>
          </div>
          <p className="text-slate-600 dark:text-slate-400 mb-6">{t('langs_desc')}</p>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-4 border-b border-slate-100 dark:border-slate-800">
              <span className="font-semibold text-slate-900 dark:text-white">{t('lang_en')}</span>
              <span className="text-sm text-slate-500 dark:text-slate-400">{t('lang_en_prof')}</span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-slate-100 dark:border-slate-800">
              <span className="font-semibold text-slate-900 dark:text-white">{t('lang_nl')}</span>
              <span className="text-sm text-slate-500 dark:text-slate-400">{t('lang_nl_prof')}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold text-slate-900 dark:text-white">{t('lang_fa')}</span>
              <span className="text-sm text-slate-500 dark:text-slate-400">{t('lang_fa_prof')}</span>
            </div>
          </div>
        </section>

      </div>

      {/* Certifications Section */}
      <section className="py-12 border-t border-slate-200 dark:border-slate-800 animate-slide-up" style={{ animationDelay: '400ms' }}>
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center justify-center gap-3">
            <Award className="w-8 h-8 text-yellow-500" /> {t('certs_title')}
          </h2>
          <p className="text-slate-600 dark:text-slate-400">{t('certs_desc')}</p>
        </div>
        
        <div className="flex flex-col gap-4 max-w-2xl mx-auto">
          {[1, 2, 3].map((num) => (
            <div key={num} className="glass-card p-4 px-6 flex items-center gap-4 hover:-translate-y-1 transition-transform duration-300 hover:shadow-lg">
              <CheckCircle className="w-6 h-6 text-green-500 shrink-0" />
              <h4 className="font-semibold text-slate-800 dark:text-slate-200">{t(`cert_${num}`)}</h4>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
