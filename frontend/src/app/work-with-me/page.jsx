"use client";
import { useState } from 'react';
import { submitHireRequest } from '../../services/api';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { Send, CheckCircle2, AlertCircle, Mail, MapPin, Briefcase, Clock, CalendarDays, Code2, Users, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { GithubIcon, LinkedinIcon, TelegramIcon } from '../../components/SocialIcons';

export default function WorkWithMe() {
 const { t } = useTranslation();
 const [status, setStatus] = useState('idle');
 const [errorMessage, setErrorMessage] = useState('');
 const [formData, setFormData] = useState({
 name: '',
 email: '',
 phone: '',
 budget: '',
 project_description: '',
 hp_field: ''
 });

 const handleChange = (e) => {
 setFormData({ ...formData, [e.target.name]: e.target.value });
 };

 const handleSubmit = async (e) => {
 e.preventDefault();
 
 // Honeypot spam protection
 if (formData.hp_field) {
 console.log("Bot detected!");
 return;
 }

 setStatus('loading');
 setErrorMessage('');
 
 try {
 // Exclude hp_field from submission
 const { hp_field, ...submitData } = formData;
 await submitHireRequest(submitData);
 setStatus('success');
 setFormData({ name: '', email: '', phone: '', budget: '', project_description: '' });
 } catch (error) {
 setStatus('error');
 setErrorMessage(error.response?.data?.message || 'Something went wrong. Please try again.');
 }
 };

 return (
 <div className="max-w-6xl mx-auto py-6 md:py-12 px-4 animate-fade-in overflow-x-hidden">
 <div className="text-center space-y-4 mb-16">
 <h1 className="text-xl md:text-xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white animate-slide-up">
 {t('workwithme_title_part1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">{t('workwithme_title_part2')}</span>
 </h1>
 <p className="text-sm md:text-lg text-slate-600 dark:text-slate-400 animate-slide-up" style={{ animationDelay: '100ms' }}>
 {t('workwithme_desc')}
 </p>
 </div>

 <div className="py-4 md:py-8 lg:py-12 animate-slide-up" style={{ animationDelay: '200ms' }}>
 <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
 
 {/* Contact Info Side Panel */}
 <div className="lg:col-span-1 space-y-4 md:space-y-8">
 <div>
 <h3 className="text-base md:text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4">{t('contact_info')}</h3>
 <p className="text-slate-600 dark:text-slate-400 leading-relaxed ">{t('contact_desc')}</p>
 </div>
 
 <div className="space-y-6">
 <div className="flex items-start gap-4 group">
 <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-xl text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
 <Mail className="w-6 h-6" />
 </div>
 <div>
 <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400">{t('email_label')}</h4>
 <a href="mailto:mahdymollayousefy@gmail.com" className="text-slate-900 dark:text-white font-medium hover:text-blue-600 transition-colors break-all">mahdymollayousefy@gmail.com</a>
 </div>
 </div>
 
 <div className="flex items-start gap-4 group">
 <div className="bg-purple-50 dark:bg-purple-900/30 p-3 rounded-xl text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
 <MapPin className="w-6 h-6" />
 </div>
 <div>
 <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400">{t('location_label')}</h4>
 <p className="text-slate-900 dark:text-white font-medium">{t('location')}</p>
 </div>
 </div>



 <div className="flex items-start gap-4 group">
 <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-xl text-blue-700 dark:text-blue-400 group-hover:scale-110 transition-transform">
 <LinkedinIcon className="w-6 h-6" />
 </div>
 <div>
 <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400">LinkedIn</h4>
 <a href="https://www.linkedin.com/in/mahdy-mollayousefy-326b5541a" target="_blank" rel="noreferrer" className="text-slate-900 dark:text-white font-medium hover:text-blue-700 transition-colors">in/mahdy-mollayousefy</a>
 </div>
 </div>

 <div className="flex items-start gap-4 group">
 <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-xl text-slate-800 dark:text-slate-200 group-hover:scale-110 transition-transform">
 <GithubIcon className="w-6 h-6" />
 </div>
 <div>
 <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400">GitHub</h4>
 <a href="https://github.com/mahdymollayousefy" target="_blank" rel="noreferrer" className="text-slate-900 dark:text-white font-medium hover:text-slate-600 transition-colors">mahdymollayousefy</a>
 </div>
 </div>
 </div>
 </div>

 {/* Contact Form */}
 <div className="lg:col-span-2 relative">
 {/* Background glow */}
 <div className="absolute top-0 end-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10 -translate-y-1/2 translate-x-1/2"></div>
 <div className="absolute bottom-0 start-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10 translate-y-1/2 -translate-x-1/2"></div>

 {status === 'success' ? (
 <div className="text-center py-16 space-y-4 animate-slide-up">
 <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
 <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400 animate-bounce" />
 </div>
 <h3 className="text-base md:text-xl md:text-2xl font-bold text-slate-900 dark:text-white">{t('success')}</h3>
 <button 
 onClick={() => setStatus('idle')}
 className="mt-8 px-4 md:px-6 py-2.5 rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 font-medium hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all hover:scale-105"
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

 {/* Honeypot field (invisible to users) */}
 <div className="hidden" aria-hidden="true">
 <input 
 type="text" 
 name="hp_field" 
 tabIndex="-1" 
 autoComplete="off" 
 value={formData.hp_field} 
 onChange={handleChange} 
 />
 </div>

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
 placeholder={t('placeholder_name', 'John Doe')}
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
 placeholder={t('placeholder_email', 'john@example.com')}
 className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all outline-none text-slate-900 dark:text-white hover:border-slate-300 dark:hover:border-slate-600"
 />
 </div>
 </div>

 <div className="space-y-2">
 <label htmlFor="phone" className="text-sm font-medium text-slate-700 dark:text-slate-300">{t('phone')}</label>
 <PhoneInput
 defaultCountry="us"
 value={formData.phone}
 onChange={(phone) => setFormData({ ...formData, phone })}
 className="w-full rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus-within:ring-2 focus-within:ring-blue-500/50 focus-within:border-blue-500 transition-all hover:border-slate-300 dark:hover:border-slate-600 relative"
 inputClassName="!w-full !border-none !bg-transparent !text-slate-900 dark:!text-white !outline-none !shadow-none !h-[50px] !px-4 !text-base rounded-r-xl"
 countrySelectorStyleProps={{
 buttonClassName: "!border-none !bg-transparent !h-[50px] !ps-4 !pe-2",
 dropdownClassName: "!w-72 dark:!bg-slate-800 dark:!text-white",
 dropdownStyleProps: {
 style: {
 maxHeight: '300px',
 height: 'auto'
 }
 }
 }}
 />
 </div>

 <div className="space-y-2">
 <label htmlFor="budget" className="text-sm font-medium text-slate-700 dark:text-slate-300">{t('budget')}</label>
 <input
 id="budget"
 name="budget"
 type="text"
 value={formData.budget}
 onChange={handleChange}
 placeholder={t('placeholder_budget', '5000')}
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
 placeholder={t('placeholder_desc', 'Tell me about your project...')}
 className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all outline-none text-slate-900 dark:text-white hover:border-slate-300 dark:hover:border-slate-600 resize-none"
 ></textarea>
 </div>

 <button
 type="submit"
 disabled={status === 'loading'}
 className="w-full px-4 md:px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-blue-500/30"
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
 </div>

 {/* Pricing Packages */}
 <section className="py-6 md:py-12 animate-slide-up" style={{ animationDelay: '250ms' }}>
 <div className="text-center space-y-4 mb-16">
 <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">{t('pricing_title')}</h2>
 <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">{t('pricing_desc')}</p>
 </div>
 
 <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:p-8">
 <div className="flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
 <div className="bg-blue-50 dark:bg-blue-900/30 w-16 h-16 flex items-center justify-center rounded-2xl mb-6 group-hover:scale-110 transition-transform">
 <Clock className="w-8 h-8 text-blue-600 dark:text-blue-400" />
 </div>
 <h3 className="text-base md:text-xl font-bold text-slate-900 dark:text-white mb-3">{t('pricing_1')}</h3>
 <p className="text-slate-600 dark:text-slate-400 leading-relaxed ">{t('pricing_1_desc')}</p>
 </div>
 <div className="flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300 relative">
 <div className="absolute -top-4 end-1/4 flex h-3 w-3">
 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
 <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
 </div>
 <div className="bg-purple-50 dark:bg-purple-900/30 w-16 h-16 flex items-center justify-center rounded-2xl mb-6 group-hover:scale-110 transition-transform">
 <Briefcase className="w-8 h-8 text-purple-600 dark:text-purple-400" />
 </div>
 <h3 className="text-base md:text-xl font-bold text-slate-900 dark:text-white mb-3">{t('pricing_2')}</h3>
 <p className="text-slate-600 dark:text-slate-400 leading-relaxed ">{t('pricing_2_desc')}</p>
 </div>
 <div className="flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
 <div className="bg-green-50 dark:bg-green-900/30 w-16 h-16 flex items-center justify-center rounded-2xl mb-6 group-hover:scale-110 transition-transform">
 <CalendarDays className="w-8 h-8 text-green-600 dark:text-green-400" />
 </div>
 <h3 className="text-base md:text-xl font-bold text-slate-900 dark:text-white mb-3">{t('pricing_3')}</h3>
 <p className="text-slate-600 dark:text-slate-400 leading-relaxed ">{t('pricing_3_desc')}</p>
 </div>
 </div>
 </section>
 
 {/* FAQ Section */}
 <section className="py-6 md:py-12 bg-slate-50 dark:bg-slate-900/30 rounded-3xl animate-slide-up" style={{ animationDelay: '300ms' }}>
 <div className="max-w-4xl mx-auto px-4 md:px-8">
 <div className="text-center space-y-4 mb-16">
 <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">{t('faq_title')}</h2>
 </div>
 
 <div className="flex flex-col gap-10">
 {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
 <div key={num} className="flex flex-col gap-2">
 <h4 className="text-base md:text-xl font-bold text-slate-900 dark:text-white">
 {num}. {t(`faq_${num}_q`)}
 </h4>
 <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-lg">
 {t(`faq_${num}_a`)}
 </p>
 </div>
 ))}
 </div>
 </div>
 </section>

 </div>
 );
}
