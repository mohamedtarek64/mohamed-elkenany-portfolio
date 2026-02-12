'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '@/components/ui/Icon';
import { cn } from '@/lib/utils';
import { personalInfo } from '@/data/personal-info';
import { faBars, faTimes, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';


const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);

    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle('dark', shouldBeDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newTheme);
  };

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 pointer-events-none"
    >
      <div className={cn(
        "flex items-center gap-6 px-6 py-3 rounded-full transition-all duration-500 pointer-events-auto",
        isScrolled
          ? "glass-card shadow-2xl scale-95 md:scale-100 dark:bg-dark-900/60"
          : "bg-transparent scale-100"
      )}>
        {/* Logo */}
        <Link href="/" className="text-xl font-display font-black tracking-tighter text-primary-600 dark:text-primary-500">
          ME.
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-2 text-sm font-medium text-dark-600 dark:text-dark-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={personalInfo.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-6 py-2 bg-primary-600 text-white rounded-full text-sm font-bold shadow-lg shadow-primary-500/20 hover:bg-primary-500 transition-all active:scale-95"
          >
            CV
          </a>
        </div>

        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-full glass-card hover:bg-white dark:hover:bg-dark-800 transition-colors"
          >
            <Icon icon={isDark ? faSun : faMoon} className="w-4 h-4" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full glass-card hover:bg-white dark:hover:bg-dark-800"
          >
            <Icon icon={isMenuOpen ? faTimes : faBars} className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="absolute top-24 left-4 right-4 glass-card rounded-3xl p-6 md:hidden pointer-events-auto"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-6 py-4 text-lg font-medium text-dark-700 dark:text-dark-200 hover:bg-dark-100 dark:hover:bg-dark-800 rounded-2xl transition-all"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={personalInfo.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="mt-4 px-6 py-4 bg-primary-600 text-white text-center rounded-2xl font-bold shadow-lg shadow-primary-500/20"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};


export default Header;
