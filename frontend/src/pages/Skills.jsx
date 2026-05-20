import { useEffect, useState } from 'react';
import { fetchSkills } from '../services/api';
import { Code2, Server, Wrench } from 'lucide-react';

export default function Skills() {
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
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Skills</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          A comprehensive overview of my technical expertise and proficiency levels across different domains.
        </p>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : Object.keys(groupedSkills).length > 0 ? (
        <div className="space-y-12">
          {Object.entries(groupedSkills).map(([category, items]) => (
            <div key={category} className="glass-card p-6 md:p-8 animate-slide-up">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl">
                  {getCategoryIcon(category)}
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{category}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {items.map((skill) => (
                  <div key={skill.id} className="space-y-2">
                    <div className="flex justify-between items-center text-sm font-medium">
                      <span className="text-slate-700 dark:text-slate-200">{skill.name}</span>
                      <span className="text-slate-500 dark:text-slate-400">{skill.proficiency}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        style={{ width: `${skill.proficiency}%`, transition: 'width 1s ease-out' }}
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
          <Wrench className="w-16 h-16 text-slate-300 dark:text-slate-700 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">No skills found</h3>
          <p className="text-slate-500 dark:text-slate-400">Skills will appear here once they are added to the backend.</p>
        </div>
      )}
    </div>
  );
}
