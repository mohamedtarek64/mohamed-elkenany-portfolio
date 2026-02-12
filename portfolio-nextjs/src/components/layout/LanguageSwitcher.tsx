'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import Icon from '../ui/Icon';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

interface LanguageSwitcherProps {
  className?: string;
  showIcon?: boolean;
  showText?: boolean;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  className = '',
  showIcon = true,
  showText = true
}) => {
  const { language, toggleLanguage, mounted } = useLanguage();

  if (!mounted) {
    return (
      <div className={`w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse ${className}`} />
    );
  }

  return (
    <motion.button
      onClick={toggleLanguage}
      className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {showIcon && (
        <motion.div
          animate={{ rotate: language === 'ar' ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Icon icon={faGlobe} className="w-4 h-4 text-gray-600 dark:text-gray-400" />
        </motion.div>
      )}
      {showText && (
        <span className="text-gray-700 dark:text-gray-300">
          {language === 'ar' ? 'English' : 'العربية'}
        </span>
      )}
    </motion.button>
  );
};

export default LanguageSwitcher;
