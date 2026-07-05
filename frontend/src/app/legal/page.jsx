"use client";
import { useTranslation } from 'react-i18next';
import { ShieldCheck, Cookie, FileText, Bitcoin } from 'lucide-react';

export default function Legal() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-black text-slate-800 dark:text-slate-100 mb-10 text-center tracking-tight">
        {t('legal_title')}
      </h1>

      <div className="space-y-12">
        <section className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">{t('privacy_title')}</h2>
          </div>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg" dangerouslySetInnerHTML={{ __html: t('privacy_content') }} />
        </section>

        <section className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-xl">
              <Cookie className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">{t('cookie_title')}</h2>
          </div>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg" dangerouslySetInnerHTML={{ __html: t('cookie_content') }} />
        </section>

        <section className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-xl">
              <FileText className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">{t('rules_title')}</h2>
          </div>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg" dangerouslySetInnerHTML={{ __html: t('rules_content') }} />
        </section>

        <section className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-xl">
              <Bitcoin className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">{t('payment_title')}</h2>
          </div>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg font-medium" dangerouslySetInnerHTML={{ __html: t('payment_content') }} />
        </section>
      </div>
    </div>
  );
}
