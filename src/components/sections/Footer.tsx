'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { socialLinks } from '@/data/social-links';
import { personalInfo } from '@/data/personal-info';
import Icon from '@/components/ui/Icon';
import { faHeart, faArrowUp, faEnvelope, faPhone, faMapMarkerAlt, faCode, faRocket, faStar } from '@fortawesome/free-solid-svg-icons';

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
    <footer className="bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900 text-gray-900 dark:text-white relative overflow-hidden border-t border-gray-200 dark:border-gray-700">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-tr from-accent/5 to-primary/5 dark:from-accent/10 dark:to-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Enhanced Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <motion.div
              className="mb-6"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold gradient-text mb-4">
                {personalInfo.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md leading-relaxed">
                {personalInfo.description}
              </p>
            </motion.div>
            
            {/* Enhanced Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 hover:from-primary hover:to-secondary flex items-center justify-center transition-all duration-300 shadow-lg group-hover:shadow-xl">
                    <Icon icon={link.icon} className="w-6 h-6 text-primary dark:text-gray-300 group-hover:text-white transition-colors duration-300" />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-xl font-bold gradient-text mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    <Icon icon={faArrowUp} className="w-3 h-3 mr-2 rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Enhanced Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-xl font-bold gradient-text mb-6">Contact Info</h4>
            <div className="space-y-4">
              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center text-gray-300 hover:text-primary transition-colors duration-300 group"
                whileHover={{ scale: 1.02, x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mr-3 group-hover:shadow-lg transition-all duration-300">
                  <Icon icon={faEnvelope} className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm">{personalInfo.email}</span>
              </motion.a>

              <motion.a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center text-gray-300 hover:text-primary transition-colors duration-300 group"
                whileHover={{ scale: 1.02, x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center mr-3 group-hover:shadow-lg transition-all duration-300">
                  <Icon icon={faPhone} className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm">{personalInfo.phone}</span>
              </motion.a>

              <motion.div
                className="flex items-center text-gray-300 group"
                whileHover={{ scale: 1.02, x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center mr-3 group-hover:shadow-lg transition-all duration-300">
                  <Icon icon={faMapMarkerAlt} className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm">{personalInfo.location}</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Bottom Section */}
        <motion.div
          className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="flex items-center text-gray-300 mb-4 md:mb-0">
            <span>© {currentYear} {personalInfo.name}. Made with</span>
            <motion.div
              className="mx-2"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Icon icon={faHeart} className="w-4 h-4 text-red-500" />
            </motion.div>
            <span>❤️ in Egypt 🇪🇬</span>
          </div>

          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center space-x-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-2xl font-medium hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Icon icon={faArrowUp} className="w-5 h-5" />
            <span>Back to Top</span>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;