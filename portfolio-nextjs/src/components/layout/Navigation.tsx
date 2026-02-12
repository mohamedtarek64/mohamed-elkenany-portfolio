'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/useTheme';
import { useLanguage } from '@/hooks/useLanguage';
import ThemeToggle from '../ui/ThemeToggle';
import Icon from '../ui/Icon';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

interface NavigationProps {
  isScrolled: boolean;
  isMenuOpen: boolean;
  onMenuToggle: () => void;
}

const Navigation: React.FC<NavigationProps> = ({
  isScrolled,
  isMenuOpen,
  onMenuToggle
}) => {
  const { language, toggleLanguage } = useLanguage();
  const { theme } = useTheme();

  const navItems = [
    { name: language === 'ar' ? 'الرئيسية' : 'Home', href: '#home' },
    { name: language === 'ar' ? 'عني' : 'About', href: '#about' },
    { name: language === 'ar' ? 'المهارات' : 'Skills', href: '#skills' },
    { name: language === 'ar' ? 'الخبرة' : 'Experience', href: '#experience' },
    { name: language === 'ar' ? 'المشاريع' : 'Projects', href: '#projects' },
    { name: language === 'ar' ? 'التواصل' : 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    onMenuToggle();
  };

  return (
    <motion.nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-2xl font-bold text-primary">
              {language === 'ar' ? 'محمد' : 'Mohamed'}
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                    'text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800'
                  )}
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Desktop Controls */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              onClick={toggleLanguage}
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {language === 'ar' ? 'EN' : 'عربي'}
            </motion.button>
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <motion.button
              onClick={onMenuToggle}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon icon={isMenuOpen ? faTimes : faBars} className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className={cn(
          'md:hidden',
          isMenuOpen ? 'block' : 'hidden'
        )}
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMenuOpen ? 1 : 0, 
          height: isMenuOpen ? 'auto' : 0 
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          {navItems.map((item, index) => (
            <motion.button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className={cn(
                'block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors',
                'text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800'
              )}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.name}
            </motion.button>
          ))}
          <motion.button
            onClick={toggleLanguage}
            className={cn(
              'block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors',
              'text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800'
            )}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: navItems.length * 0.1 }}
          >
            {language === 'ar' ? 'English' : 'العربية'}
          </motion.button>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;
