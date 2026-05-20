import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Database, Terminal } from 'lucide-react';

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center space-y-8 animate-in fade-in duration-700">
      <div className="space-y-4">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          {t('welcome')}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Senior Backend & AI Engineer. Architecting highly optimized, containerized, and scalable Mini-SaaS solutions.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 pt-4">
        <Link to="/projects" className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium flex items-center gap-2 transition-colors">
          View Projects <ArrowRight className="w-4 h-4" />
        </Link>
        <Link to="/hire-me" className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium transition-colors">
          {t('hire_me')}
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 w-full max-w-4xl text-left">
        <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800">
          <Terminal className="w-8 h-8 text-blue-500 mb-4" />
          <h3 className="text-lg font-bold mb-2">Backend Architecture</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Python, Django, FastAPI. Building robust APIs with strict validation and security protocols.</p>
        </div>
        <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800">
          <Database className="w-8 h-8 text-blue-500 mb-4" />
          <h3 className="text-lg font-bold mb-2">Data & Systems</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">PostgreSQL, Redis, Docker Compose. Optimizing queries and orchestrating microservices.</p>
        </div>
        <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800">
          <Code2 className="w-8 h-8 text-blue-500 mb-4" />
          <h3 className="text-lg font-bold mb-2">AI & Automation</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Prompt Engineering, n8n, workflow automation. Integrating LLMs into production environments.</p>
        </div>
      </div>
    </div>
  );
}
