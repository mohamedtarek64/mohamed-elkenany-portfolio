'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { projects } from '@/data/projects';
import Icon from '@/components/ui/Icon';
import { cn } from '@/lib/utils';
import { faExternalLinkAlt, faCode, faStar, faEye, faHeart, faRocket, faGlobe, faMobile, faDesktop, faTools, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { faGithub } from '@fortawesome/free-brands-svg-icons';


const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Projects', icon: faStar, count: projects.length },
    { id: 'web', label: 'Web Systems', icon: faGlobe, count: projects.filter(p => p.category === 'web').length },
    { id: 'mobile', label: 'Mobile Apps', icon: faMobile, count: projects.filter(p => p.category === 'mobile').length },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="projects" className="section-container relative overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary-500/5 blur-[120px] rounded-full" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="relative z-10"
      >
        {/* Section Header */}
        <div className="text-center mb-24">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-950/30 text-primary-600 dark:text-primary-400 text-xs font-black uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
            Portfolio
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-7xl font-display font-black tracking-tight mb-8 dark:text-white"
          >
            Engineering <br />
            <span className="gradient-text">Masterpieces</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-dark-500 dark:text-dark-400 max-w-2xl mx-auto leading-relaxed"
          >
            A showcase of complex systems and elegant solutions built with technical precision and scalable architectures.
          </motion.p>
        </div>

        {/* Category Filter - Premium Tabs */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-20">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "px-8 py-4 rounded-2xl text-sm font-bold transition-all duration-500 flex items-center gap-3 relative overflow-hidden group",
                activeCategory === category.id
                  ? "bg-dark-900 dark:bg-white text-white dark:text-dark-950 shadow-2xl"
                  : "glass-card text-dark-500 dark:text-dark-400 hover:bg-white dark:hover:bg-dark-900"
              )}
            >
              <Icon icon={category.icon} className={cn("w-4 h-4 transition-colors", activeCategory === category.id ? "text-primary-500" : "text-dark-400")} />
              <span>{category.label}</span>
              <span className={cn(
                "ml-2 text-[10px] font-black px-2 py-0.5 rounded-lg",
                activeCategory === category.id ? "bg-primary-500 text-white" : "bg-dark-100 dark:bg-dark-800"
              )}>
                {category.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 max-w-6xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group"
              >
                <div className="relative glass-card rounded-[2.5rem] overflow-hidden transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)] border-dark-100/50 dark:border-dark-800/50 group-hover:border-primary-500/30">
                  {/* Image Container */}
                  <div className="relative h-72 sm:h-80 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    {/* Category Badge */}
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-[10px] font-black text-white uppercase tracking-widest">
                        {project.category}
                      </span>
                    </div>

                    {/* GitHub Link Overlay */}
                    <div className="absolute top-6 right-6 flex gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-primary-500 hover:border-primary-500 transition-all duration-300"
                        >
                          <Icon icon={faGithub} className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-10 space-y-6">
                    <div className="space-y-3">
                      <h3 className="text-2xl md:text-3xl font-display font-black dark:text-white transition-colors group-hover:text-primary-600 dark:group-hover:text-primary-500">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map(tech => (
                          <span key={tech} className="text-[10px] font-black uppercase tracking-tighter text-dark-400 dark:text-dark-500">
                            #{tech.replace(/\s+/g, '')}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="text-dark-500 dark:text-dark-400 text-sm leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    <div className="pt-4">
                      <button
                        onClick={() => window.open(project.liveUrl || project.githubUrl, '_blank')}
                        className="premium-button w-full flex items-center justify-center gap-3 py-4 group/btn"
                      >
                        <span className="text-sm font-black">Case Study & Demo</span>
                        <Icon icon={faChevronRight} className="w-3 h-3 transition-transform group-hover/btn:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;

