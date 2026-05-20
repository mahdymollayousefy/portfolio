import { useState, useEffect } from 'react';
import { Server } from 'lucide-react';

export default function Skills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';
        const res = await fetch(`${apiUrl}/skills/`);
        const data = await res.json();
        setSkills(data);
      } catch (error) {
        console.error("Failed to fetch skills", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSkills();
  }, []);

  return (
    <div className="max-w-4xl mx-auto animate-in fade-in">
      <div className="flex items-center gap-3 mb-8">
        <Server className="w-8 h-8 text-blue-500" />
        <h2 className="text-3xl font-bold">Technical Arsenal</h2>
      </div>

      {loading ? (
        <div className="animate-pulse flex space-x-4">
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/4"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.length > 0 ? skills.map((skill) => (
            <div key={skill.id} className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">{skill.name}</span>
                <span className="text-xs text-gray-500 bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">{skill.category}</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${skill.proficiency}%` }}></div>
              </div>
            </div>
          )) : (
            <p className="text-gray-500">No skills data found in Django Admin.</p>
          )}
        </div>
      )}
    </div>
  );
}
