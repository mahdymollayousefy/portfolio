import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import headerLocales from './components/Header.locales';
import footerLocales from './components/Footer.locales';
import homeLocales from './locales/Home.locales';
import projectsLocales from './locales/Projects.locales';
import skillsLocales from './locales/Skills.locales';
import hireMeLocales from './locales/HireMe.locales';
import legalLocales from './locales/Legal.locales';
import notFoundLocales from './locales/NotFound.locales';

// Helper to deeply merge translation objects
const mergeTranslations = (langs, ...localesArray) => {
  const merged = {};
  langs.forEach(lang => {
    merged[lang] = { translation: {} };
    localesArray.forEach(localeObj => {
      if (localeObj[lang]) {
        merged[lang].translation = { ...merged[lang].translation, ...localeObj[lang] };
      }
    });
  });
  return merged;
};

const resources = mergeTranslations(
  ['en', 'nl', 'fa', 'de'],
  headerLocales,
  footerLocales,
  homeLocales,
  projectsLocales,
  skillsLocales,
  hireMeLocales,
  legalLocales,
  notFoundLocales
);

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  });

if (typeof document !== 'undefined') {
  document.documentElement.dir = i18n.language === 'fa' ? 'rtl' : 'ltr';
  document.documentElement.lang = i18n.language || 'en';
}

i18n.on('languageChanged', (lng) => {
  document.documentElement.dir = lng === 'fa' ? 'rtl' : 'ltr';
  document.documentElement.lang = lng;
});

export default i18n;