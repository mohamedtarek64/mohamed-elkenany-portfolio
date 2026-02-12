'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { socialLinks } from '@/data/social-links';
import { personalInfo } from '@/data/personal-info';
import Icon from '@/components/ui/Icon';
import { faHeart, faArrowUp } from '@fortawesome/free-solid-svg-icons';


const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <footer className="relative border-t border-dark-100 dark:border-dark-900 pt-24 pb-12 transition-colors duration-500 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-4 gap-16 mb-24">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-8">
            <Link href="/" className="text-3xl font-display font-black tracking-tighter dark:text-white">
              ME<span className="text-primary-600">.</span>
            </Link>
            <p className="text-lg text-dark-500 dark:text-dark-400 max-w-sm leading-relaxed">
              Crafting premium digital experiences through purposeful design and technical excellence.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center text-dark-400 hover:bg-primary-600 hover:text-white transition-all duration-500"
                >
                  <Icon icon={link.icon} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-2">
            <div className="space-y-8">
              <h4 className="text-[10px] uppercase tracking-widest font-black text-dark-400">Navigation</h4>
              <ul className="space-y-4">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm font-bold text-dark-500 hover:text-primary-500 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-8">
              <h4 className="text-[10px] uppercase tracking-widest font-black text-dark-400">Contact</h4>
              <ul className="space-y-4">
                <li>
                  <a href={`mailto:${personalInfo.email}`} className="text-sm font-bold text-dark-500 hover:text-primary-500 transition-colors">
                    {personalInfo.email}
                  </a>
                </li>
                <li>
                  <div className="text-sm font-bold text-dark-500">
                    {personalInfo.location}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-12 border-t border-dark-100 dark:border-dark-900 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 text-dark-500 text-xs font-bold">
            <span>© {currentYear} {personalInfo.name}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-dark-100 dark:bg-dark-800" />
            <span className="flex items-center gap-1">
              Built with <Icon icon={faHeart} className="w-3 h-3 text-red-500" /> in Egypt 🇪🇬
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center text-primary-500 hover:bg-primary-600 hover:text-white transition-all duration-500 group"
          >
            <Icon icon={faArrowUp} className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
};


export default Footer;