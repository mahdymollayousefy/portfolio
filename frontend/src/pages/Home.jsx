import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Database, Terminal, Layers } from 'lucide-react';
import heroImg from '../assets/hero.png';

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-12">
      
      {/* Hero Section */}
      <section className="relative pt-12 md:pt-20 lg:pt-32 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8 min-h-[70vh]">
        
        {/* Left: Text Content */}
        <div className="flex-1 space-y-8 text-center lg:text-left z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-semibold text-sm mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Available for new opportunities
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            Building scalable <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              SaaS platforms
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            I'm a Senior Backend & AI Engineer. I architect highly optimized, containerized, and secure solutions that power modern businesses.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <Link to="/projects" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold flex items-center justify-center gap-2 transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20">
              View My Work <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/hire-me" className="w-full sm:w-auto px-8 py-4 rounded-xl glass-card font-bold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-all text-center">
              Hire Me
            </Link>
          </div>
        </div>

        {/* Right: Image/Avatar Placeholder */}
        <div className="flex-1 w-full max-w-md lg:max-w-lg relative z-10 animate-fade-in">
          <div className="relative aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden glass shadow-2xl p-4">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-[inherit] -z-10"></div>
            <img 
              src={heroImg} 
              alt="Profile" 
              className="w-full h-full object-cover rounded-2xl md:rounded-[2rem] bg-slate-100 dark:bg-slate-800"
            />
          </div>
          
          {/* Floating badge */}
          <div className="absolute -bottom-6 -left-6 md:-left-12 glass-card p-4 rounded-2xl flex items-center gap-4 shadow-xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-xl text-green-600 dark:text-green-400">
              <Code2 className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-slate-900 dark:text-white">100k+ Lines</p>
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400">of optimized code</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-12">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Areas of Expertise</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Delivering robust, end-to-end solutions with a focus on performance and maintainability.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-8 group hover:-translate-y-2 transition-transform duration-300">
            <div className="bg-blue-50 dark:bg-blue-900/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Terminal className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Backend Architecture</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Python, Django, FastAPI. Building secure, robust APIs with strict validation, complex business logic, and automated testing.</p>
          </div>
          
          <div className="glass-card p-8 group hover:-translate-y-2 transition-transform duration-300">
            <div className="bg-purple-50 dark:bg-purple-900/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Database className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Data & Infrastructure</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">PostgreSQL, Redis, Docker Compose. Optimizing database queries, managing state, and orchestrating scalable microservices.</p>
          </div>

          <div className="glass-card p-8 group hover:-translate-y-2 transition-transform duration-300">
            <div className="bg-green-50 dark:bg-green-900/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Layers className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">AI & Automation</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Prompt Engineering, workflows (n8n), AI agents. Seamlessly integrating Large Language Models into production environments.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
