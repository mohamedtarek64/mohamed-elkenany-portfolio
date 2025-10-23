'use client';

import { useState, useEffect } from 'react';

type Language = 'en' | 'ar';

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('language') as Language;
    if (stored) {
      setLanguage(stored);
    } else {
      // Detect browser language
      const browserLang = navigator.language.split('-')[0];
      if (browserLang === 'ar') {
        setLanguage('ar');
      }
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = window.document.documentElement;
    root.setAttribute('lang', language);
    root.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
    
    localStorage.setItem('language', language);
  }, [language, mounted]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const setEnglish = () => setLanguage('en');
  const setArabic = () => setLanguage('ar');

  const isRTL = language === 'ar';

  return {
    language,
    setLanguage,
    toggleLanguage,
    setEnglish,
    setArabic,
    isRTL,
    mounted
  };
};
