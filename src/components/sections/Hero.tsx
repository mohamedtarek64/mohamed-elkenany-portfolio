'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import Typewriter from '@/components/ui/Typewriter';
import { socialLinks } from '@/data/social-links';
import { personalInfo } from '@/data/personal-info';
import { faDownload, faChevronDown, faRocket, faProjectDiagram, faSmile, faStar, faLaptop, faCode, faHeart } from '@fortawesome/free-solid-svg-icons';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const stats = [
    { label: personalInfo.stats.experience, value: 'Experience', icon: faRocket },
    { label: personalInfo.stats.projects, value: 'Projects', icon: faProjectDiagram },
    { label: personalInfo.stats.clients || '5+', value: 'Happy Clients', icon: faSmile },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden transition-colors duration-500">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(var(--primary),0.1),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,rgba(var(--secondary),0.05),transparent_50%)]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 relative z-10"
      >
        <div className="flex flex-col items-center">
          {/* Enhanced Profile Image */}
          <motion.div
            variants={itemVariants}
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

          {/* Enhanced Main Content */}
          <motion.div variants={itemVariants} className="max-w-4xl text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-black tracking-tight dark:text-white leading-[1.1]">
              I'm <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            <div className="text-xl sm:text-2xl md:text-4xl font-display font-medium text-dark-600 dark:text-dark-300">
              <Typewriter
                words={personalInfo.roles || [personalInfo.title, 'Full Stack Systems Architect', 'Backend Specialist']}
                speed={80}
                deleteSpeed={40}
                pauseTime={2500}
              />
            </div>

            <p className="text-base sm:text-lg md:text-xl text-dark-500 dark:text-dark-400 max-w-2xl mx-auto leading-relaxed text-balance">
              {personalInfo.description}
            </p>
          </motion.div>

          {/* Enhanced Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-5 mt-12 justify-center w-full sm:w-auto"
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
            variants={itemVariants}
            className="flex gap-4 mt-12"
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