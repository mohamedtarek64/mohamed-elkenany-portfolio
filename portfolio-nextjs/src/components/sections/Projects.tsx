'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { projects } from '@/data/projects';
import Icon from '@/components/ui/Icon';
import { cn } from '@/lib/utils';
import { faExternalLinkAlt, faCode, faStar, faEye, faBolt, faRocket, faGlobe, faMobile, faDesktop, faTools, faChevronRight, faChartLine } from '@fortawesome/free-solid-svg-icons';

import { faGithub } from '@fortawesome/free-brands-svg-icons';


const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Projects', icon: faStar, count: projects.length },
    { id: 'web', label: 'Web Systems', icon: faGlobe, count: projects.filter(p => p.category === 'web').length },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section-container relative overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary-500/5 blur-[120px] rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        {/* Section Header */}
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-950/30 text-primary-600 dark:text-primary-400 text-xs font-black uppercase tracking-widest mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
            Portfolio
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-display font-black tracking-tight mb-8 dark:text-white"
          >
            Production-Ready <br />
            <span className="gradient-text">Systems</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-dark-500 dark:text-dark-400 max-w-2xl mx-auto leading-relaxed"
          >
            6 complete full-stack projects — each solving real-world problems with measurable results and scalable architectures.
          </motion.p>
        </div>

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
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
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

                    {/* Metrics Badge */}
                    {project.metrics && (
                      <div className="absolute top-6 left-6">
                        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-[10px] font-black text-white uppercase tracking-widest">
                          <Icon icon={faBolt} className="w-2.5 h-2.5 text-primary-400" />
                          {project.metrics.highlight}
                        </span>
                      </div>
                    )}

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
                  <div className="p-8 md:p-10 space-y-5">
                    <div className="space-y-3">
                      <h3 className="text-2xl md:text-3xl font-display font-black dark:text-white transition-colors group-hover:text-primary-600 dark:group-hover:text-primary-500">
                        {project.title}
                      </h3>
                      <p className="text-dark-500 dark:text-dark-400 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack as Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map(tech => (
                        <span key={tech} className="px-2.5 py-1 rounded-lg bg-dark-50 dark:bg-dark-800 text-dark-600 dark:text-dark-300 text-[10px] font-bold border border-dark-100 dark:border-dark-700">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Key Achievements */}
                    {project.metrics && (
                      <div className="space-y-2 pt-2">
                        {project.metrics.items.slice(0, 3).map((item, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-dark-500 dark:text-dark-400">
                            <Icon icon={faChevronRight} className="w-2 h-2 text-primary-500 mt-1 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-3">
                      <a
                        href={project.githubUrl || '#'}
                        target="_blank"
                        className="flex-1 premium-button flex items-center justify-center gap-2 py-3 group/btn"
                      >
                        <Icon icon={faGithub} className="w-3.5 h-3.5" />
                        <span className="text-[10px] font-black">View Code</span>
                      </a>
                      {project.liveUrl && project.liveUrl !== '#' && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          className="flex-1 secondary-button flex items-center justify-center gap-2 py-3 group/btn"
                        >
                          <Icon icon={faExternalLinkAlt} className="w-3 h-3" />
                          <span className="text-[10px] font-black">Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Numbers That Matter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-24 glass-card p-8 md:p-12 rounded-[2.5rem] max-w-5xl mx-auto"
        >
          <h3 className="text-xl font-display font-black dark:text-white mb-8 text-center">
            Numbers That <span className="gradient-text">Matter</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { value: '6', label: 'Production Systems', icon: faCode },
              { value: '300+', label: 'Daily Transactions', icon: faChartLine },
              { value: '85%', label: 'Query Optimization', icon: faRocket },
              { value: '180ms', label: 'API Response Time', icon: faBolt },
              { value: '60fps', label: '3D Rendering', icon: faEye },
            ].map((stat) => (
              <div key={stat.label} className="text-center space-y-2 group">
                <Icon icon={stat.icon} className="w-5 h-5 text-primary-500 mx-auto opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="text-2xl md:text-3xl font-black dark:text-white">{stat.value}</div>
                <div className="text-[9px] uppercase tracking-widest font-bold text-dark-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
