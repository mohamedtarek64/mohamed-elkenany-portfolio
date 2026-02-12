'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experience } from '@/data/experience';
import Icon from '@/components/ui/Icon';
import { cn } from '@/lib/utils';
import { faBriefcase, faCalendarAlt, faMapMarkerAlt, faChevronRight, faRocket, faProjectDiagram, faSmile, faStar, faCode, faUsers, faTrophy } from '@fortawesome/free-solid-svg-icons';


const Experience: React.FC = () => {
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
    hidden: { y: 20, opacity: 0 },
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
    <section id="experience" className="section-container relative overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary-500/5 blur-[120px] rounded-full -translate-y-1/2" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Section Header */}
        <div className="text-center mb-24">
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-display font-black tracking-tight mb-6 dark:text-white"
          >
            Professional <span className="gradient-text">Journey</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-dark-500 dark:text-dark-400 max-w-2xl mx-auto"
          >
            A timeline of my growth as a developer and the companies I've helped.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="timeline-line hidden md:block" />

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className={cn(
                  "relative flex flex-col md:flex-row gap-8 items-start md:items-center",
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                {/* Timeline Dot (Desktop Only) */}
                <div className="timeline-dot hidden md:block absolute left-2 top-1/2 -translate-y-1/2" />

                {/* Content Card */}
                <div className={cn(
                  "w-full md:w-[calc(50%-2rem)]",
                  index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                )}>
                  <div className="glass-card glass-card-hover p-8 rounded-[2rem]">
                    <div className="flex flex-col gap-4">
                      {/* Badge and Duration */}
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                        <span className="px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-950/30 text-primary-600 dark:text-primary-400 text-xs font-bold uppercase tracking-widest">
                          {exp.jobType}
                        </span>
                        <div className="flex items-center gap-2 text-dark-400 text-xs font-medium">
                          <Icon icon={faCalendarAlt} className="w-3.5 h-3.5" />
                          <span>{exp.startDate} — {exp.endDate || 'Present'}</span>
                        </div>
                      </div>

                      {/* Title and Company */}
                      <div>
                        <h3 className="text-2xl font-bold dark:text-white mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-primary-500 font-semibold">
                          <span className="text-sm">{exp.company}</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-dark-300 dark:bg-dark-700" />
                          <div className="flex items-center gap-1 text-dark-400 font-medium italic">
                            <Icon icon={faMapMarkerAlt} className="w-3 h-3" />
                            <span className="text-xs">{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-dark-500 dark:text-dark-400 text-sm leading-relaxed line-clamp-4 hover:line-clamp-none transition-all duration-500">
                        {exp.description}
                      </p>

                      {/* Skills/Tech Stack Tags */}
                      <div className="flex flex-wrap gap-2 mt-2">
                        {exp.technologies.slice(0, 5).map((tech) => (
                          <span key={tech} className="px-2.5 py-1 rounded-lg bg-dark-50 dark:bg-dark-800 text-dark-600 dark:text-dark-300 text-[10px] font-bold border border-dark-100 dark:border-dark-700">
                            {tech}
                          </span>
                        ))}
                        {exp.technologies.length > 5 && (
                          <span className="px-2.5 py-1 rounded-lg bg-dark-50 dark:bg-dark-800 text-dark-400 text-[10px] font-bold">
                            +{exp.technologies.length - 5} More
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Date for Desktop (Opposite side) */}
                <div className={cn(
                  "hidden md:block w-[calc(50%-2rem)] text-sm font-black text-dark-200 dark:text-dark-800 uppercase tracking-[0.3em]",
                  index % 2 === 0 ? "text-left" : "text-right"
                )}>
                  {exp.startDate.split(' ')[1]} — {exp.endDate ? exp.endDate.split(' ')[1] : 'NOW'}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;

