'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Icon from '@/components/ui/Icon';
import Typewriter from '@/components/ui/Typewriter';
import { socialLinks } from '@/data/social-links';
import { personalInfo } from '@/data/personal-info';
import { faDownload, faChevronDown, faGraduationCap, faLaptopCode, faBolt } from '@fortawesome/free-solid-svg-icons';

const Hero: React.FC = () => {
  const stats = [
    { label: 'Internship Completed', value: personalInfo.stats.experience, icon: faGraduationCap },
    { label: 'Production Systems', value: personalInfo.stats.projects, icon: faLaptopCode },
    { label: 'Graduating', value: personalInfo.stats.graduation, icon: faBolt },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden transition-colors duration-500">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(var(--primary),0.1),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,rgba(var(--secondary),0.05),transparent_50%)]" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="flex flex-col items-center">
          {/* Enhanced Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10 md:mb-14 relative group animate-float"
          >
            <div className="image-frame">
              <motion.div
                className="w-32 h-32 md:w-52 md:h-52 rounded-2xl overflow-hidden relative z-10 bg-dark-100 dark:bg-dark-900 border border-white/10"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <Image
                  src={personalInfo.heroImage}
                  alt={personalInfo.name}
                  width={208}
                  height={208}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000"
                  priority
                />
              </motion.div>
              {/* Decorative background shape */}
              <div className="absolute -inset-8 bg-primary-500/20 dark:bg-primary-500/10 blur-3xl rounded-full -z-10" />
            </div>

          </motion.div>

          {/* Student Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-950/30 text-primary-600 dark:text-primary-400 text-xs font-bold uppercase tracking-widest border border-primary-200 dark:border-primary-800/40">
              <Icon icon={faGraduationCap} className="w-3 h-3" />
              3rd Year Information Systems Student
            </span>
          </motion.div>

          {/* Enhanced Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-4xl text-center space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-black tracking-tight dark:text-white leading-[1.1]">
              I'm <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            <div className="text-xl sm:text-2xl md:text-4xl font-display font-medium text-dark-600 dark:text-dark-300">
              <Typewriter
                words={personalInfo.roles || [personalInfo.title]}
                speed={80}
                deleteSpeed={40}
                pauseTime={2500}
              />
            </div>

            <p className="text-base sm:text-lg md:text-xl text-dark-500 dark:text-dark-400 max-w-2xl mx-auto leading-relaxed text-balance">
              {personalInfo.description}
            </p>
          </motion.div>

          {/* Honest Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="grid grid-cols-3 gap-4 sm:gap-6 mt-10 w-full max-w-lg"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="glass-card p-3 sm:p-4 rounded-2xl text-center hover:border-primary-500/30 transition-colors">
                <Icon icon={stat.icon} className="w-4 h-4 text-primary-500 mx-auto mb-1.5" />
                <div className="text-sm sm:text-lg font-black dark:text-white mb-0.5">{stat.value}</div>
                <div className="text-[8px] sm:text-[10px] uppercase tracking-widest font-bold text-dark-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Enhanced Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-5 mt-10 justify-center w-full sm:w-auto"
          >
            <button
              onClick={() => window.open(personalInfo.cvUrl, '_blank')}
              className="premium-button flex items-center justify-center gap-2 group"
            >
              <Icon icon={faDownload} className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
              <span>Download Resume</span>
            </button>

            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="secondary-button"
            >
              View My Work
            </button>
          </motion.div>

          {/* Social Links - Minimized Premium Style */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex gap-4 mt-10"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-dark-600 dark:text-dark-400 hover:text-primary-500 dark:hover:text-primary-400 transition-all duration-300 hover:scale-110"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon icon={link.icon} className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-dark-500">Scroll</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-primary-500 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};


export default Hero;