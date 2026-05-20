import { useState } from 'react';
import { submitHireRequest } from '../services/api';
import { Send, CheckCircle2, AlertCircle, Mail, MapPin, Briefcase, Clock, CalendarDays } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function HireMe() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project_description: '',
    budget: '',
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      await submitHireRequest(formData);
      setStatus('success');
      setFormData({ name: '', email: '', project_description: '', budget: '' });
    } catch (error) {
      setStatus('error');
      setErrorMessage(error.response?.data?.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-24 pb-12 animate-fade-in">
      <div className="text-center space-y-4 pt-8">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white animate-slide-up">
          {t('title_part1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">{t('title_part2')}</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 animate-slide-up" style={{ animationDelay: '100ms' }}>
          {t('desc')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-start animate-slide-up" style={{ animationDelay: '200ms' }}>
        
        {/* Contact Info Side Panel */}
        <div className="lg:col-span-1 space-y-6">
          <div className="glass-card p-6 md:p-8 hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">{t('contact_info')}</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8">{t('contact_desc')}</p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-xl text-blue-600 dark:text-blue-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400">{t('email_label')}</h4>
                  <p className="text-slate-900 dark:text-white font-medium hover:text-blue-600 transition-colors cursor-pointer">hello@example.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-xl text-purple-600 dark:text-purple-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400">{t('location_label')}</h4>
                  <p className="text-slate-900 dark:text-white font-medium">{t('location')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2 glass-card p-6 md:p-10 relative overflow-hidden transition-all duration-300 hover:shadow-xl">
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10 translate-y-1/2 -translate-x-1/2"></div>

          {status === 'success' ? (
            <div className="text-center py-16 space-y-4 animate-slide-up">
              <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400 animate-bounce" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{t('success')}</h3>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-8 px-6 py-2.5 rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 font-medium hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all hover:scale-105"
              >
                Send Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {status === 'error' && (
                <div className="p-4 rounded-xl bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 flex items-center gap-3 text-sm font-medium animate-slide-up">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <p>{errorMessage}</p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">{t('name')}</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all outline-none text-slate-900 dark:text-white hover:border-slate-300 dark:hover:border-slate-600"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">{t('email')}</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all outline-none text-slate-900 dark:text-white hover:border-slate-300 dark:hover:border-slate-600"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="budget" className="text-sm font-medium text-slate-700 dark:text-slate-300">{t('budget')}</label>
                <input
                  id="budget"
                  name="budget"
                  type="text"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all outline-none text-slate-900 dark:text-white hover:border-slate-300 dark:hover:border-slate-600"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="project_description" className="text-sm font-medium text-slate-700 dark:text-slate-300">{t('project_desc')}</label>
                <textarea
                  id="project_description"
                  name="project_description"
                  required
                  rows="5"
                  value={formData.project_description}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all outline-none text-slate-900 dark:text-white hover:border-slate-300 dark:hover:border-slate-600 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-blue-500/30"
              >
                {status === 'loading' ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>{t('send')} <Send className="w-5 h-5 animate-pulse" /></>
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Pricing Packages */}
      <section className="py-12 border-t border-slate-200 dark:border-slate-800 animate-slide-up" style={{ animationDelay: '250ms' }}>
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{t('pricing_title')}</h2>
          <p className="text-slate-600 dark:text-slate-400">{t('pricing_desc')}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-8 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-full mb-6 group-hover:scale-110 transition-transform">
              <Clock className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{t('pricing_1')}</h3>
            <p className="text-slate-600 dark:text-slate-400">{t('pricing_1_desc')}</p>
          </div>
          <div className="glass-card p-8 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden border-blue-500 shadow-blue-500/10 shadow-xl">
            <div className="absolute top-4 right-4 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-full mb-6 group-hover:scale-110 transition-transform">
              <Briefcase className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{t('pricing_2')}</h3>
            <p className="text-slate-600 dark:text-slate-400">{t('pricing_2_desc')}</p>
          </div>
          <div className="glass-card p-8 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
            <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-full mb-6 group-hover:scale-110 transition-transform">
              <CalendarDays className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{t('pricing_3')}</h3>
            <p className="text-slate-600 dark:text-slate-400">{t('pricing_3_desc')}</p>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-12 border-t border-slate-200 dark:border-slate-800 animate-slide-up" style={{ animationDelay: '300ms' }}>
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{t('faq_title')}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2].map((num) => (
            <div key={num} className="glass-card p-6 hover:-translate-y-1 transition-transform duration-300">
              <h4 className="font-bold text-slate-900 dark:text-white mb-2">{t(`faq_${num}_q`)}</h4>
              <p className="text-slate-600 dark:text-slate-400">{t(`faq_${num}_a`)}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
