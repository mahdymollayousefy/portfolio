"use client";
import { useTranslation } from 'react-i18next';
import { ShieldCheck, Cookie, FileText, Bitcoin } from 'lucide-react';

export default function Legal() {
 const { t } = useTranslation();

 return (
 <div className="container mx-auto px-4 py-6 md:py-12 max-w-4xl">
 <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-800 dark:text-slate-100 mb-10 text-center tracking-tight">
 {t('legal_title')}
 </h1>

 <div className="space-y-6 md:space-y-12">
 <section className="py-2 md:py-4">
 <div className="flex items-center gap-4 mb-6">
 <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl">
 <ShieldCheck className="w-5 h-5 md:w-6 md:h-6" />
 </div>
 <h2 className="text-base md:text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-200">{t('privacy_title')}</h2>
 </div>
 <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base md:text-lg " dangerouslySetInnerHTML={{ __html: t('privacy_content') }} />
 </section>

 <section className="py-2 md:py-4">
 <div className="flex items-center gap-4 mb-6">
 <div className="p-3 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-xl">
 <Cookie className="w-5 h-5 md:w-6 md:h-6" />
 </div>
 <h2 className="text-base md:text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-200">{t('cookie_title')}</h2>
 </div>
 <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base md:text-lg " dangerouslySetInnerHTML={{ __html: t('cookie_content') }} />
 </section>

 <section className="py-2 md:py-4">
 <div className="flex items-center gap-4 mb-6">
 <div className="p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-xl">
 <FileText className="w-5 h-5 md:w-6 md:h-6" />
 </div>
 <h2 className="text-base md:text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-200">{t('rules_title')}</h2>
 </div>
 <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base md:text-lg " dangerouslySetInnerHTML={{ __html: t('rules_content') }} />
 </section>

 <section className="py-2 md:py-4">
 <div className="flex items-center gap-4 mb-6">
 <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-xl">
 <Bitcoin className="w-5 h-5 md:w-6 md:h-6" />
 </div>
 <h2 className="text-base md:text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-200">{t('payment_title')}</h2>
 </div>
 <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base md:text-lg font-medium " dangerouslySetInnerHTML={{ __html: t('payment_content') }} />
 </section>
 </div>
 </div>
 );
}
