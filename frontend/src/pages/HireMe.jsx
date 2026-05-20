import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function HireMe() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', project_description: '', budget: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const apiUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';
      const res = await fetch(`${apiUrl}/hire-me/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (res.ok) setStatus('success');
      else setStatus('error');
    } catch (error) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="max-w-md mx-auto mt-20 text-center animate-in zoom-in">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">Request Received</h2>
        <p className="text-gray-600 dark:text-gray-400">Thank you! Your project details have been sent to my CRM. I will review them and contact you shortly.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto animate-in slide-in-from-bottom-4">
      <h2 className="text-3xl font-bold mb-2">{t('hire_me')}</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8">Let's build something exceptional. Fill out the form below to start the conversation.</p>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-gray-800/50 p-6 md:p-8 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Name</label>
            <input required type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none" 
                   value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <input required type="email" className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none" 
                   value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Budget Range</label>
          <input type="text" placeholder="e.g., $1000 - $5000" className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none" 
                 value={formData.budget} onChange={(e) => setFormData({...formData, budget: e.target.value})} />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Project Description</label>
          <textarea required rows="5" className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none resize-none" 
                    value={formData.project_description} onChange={(e) => setFormData({...formData, project_description: e.target.value})}></textarea>
        </div>

        <button type="submit" disabled={status === 'loading'} className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white rounded-lg font-medium flex items-center justify-center gap-2 transition-colors">
          {status === 'loading' ? 'Processing...' : 'Submit Request'} <Send className="w-4 h-4" />
        </button>
        {status === 'error' && <p className="text-red-500 text-sm text-center">Connection error. Please try again.</p>}
      </form>
    </div>
  );
}
