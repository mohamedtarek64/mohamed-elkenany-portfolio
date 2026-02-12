'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/hooks/useLanguage';
import Icon from '../ui/Icon';
import { faTimes, faHome, faUser, faCode, faBriefcase, faProjectDiagram, faEnvelope } from '@fortawesome/free-solid-svg-icons';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();

  const navItems = [
    { 
      name: language === 'ar' ? 'الرئيسية' : 'Home', 
      href: '#home', 
      icon: faHome 
    },
    { 
      name: language === 'ar' ? 'عني' : 'About', 
      href: '#about', 
      icon: faUser 
    },
    { 
      name: language === 'ar' ? 'المهارات' : 'Skills', 
      href: '#skills', 
      icon: faCode 
    },
    { 
      name: language === 'ar' ? 'الخبرة' : 'Experience', 
      href: '#experience', 
      icon: faBriefcase 
    },
    { 
      name: language === 'ar' ? 'المشاريع' : 'Projects', 
      href: '#projects', 
      icon: faProjectDiagram 
    },
    { 
      name: language === 'ar' ? 'التواصل' : 'Contact', 
      href: '#contact', 
      icon: faEnvelope 
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Menu Panel */}
          <motion.div
            className="absolute right-0 top-0 h-full w-80 bg-white dark:bg-gray-900 shadow-xl"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                {language === 'ar' ? 'القائمة' : 'Menu'}
              </h2>
              <motion.button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon icon={faTimes} className="w-6 h-6 text-gray-500" />
              </motion.button>
            </div>

            {/* Navigation Items */}
            <nav className="p-6">
              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={cn(
                      'flex items-center w-full px-4 py-3 rounded-lg text-left transition-colors',
                      'text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800'
                    )}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <Icon icon={item.icon} className="w-5 h-5 mr-3" />
                    <span className="font-medium">{item.name}</span>
                  </motion.button>
                ))}
              </div>
            </nav>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {language === 'ar' ? 'محمد الكناني' : 'Mohamed Elkenany'}
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                  {language === 'ar' ? 'مطور Full Stack' : 'Full Stack Developer'}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
