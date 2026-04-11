'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '@/data/experience';
import Icon from '@/components/ui/Icon';
import { cn } from '@/lib/utils';
import { faBriefcase, faCalendarAlt, faMapMarkerAlt, faChevronRight, faGraduationCap, faLaptopCode, faCode } from '@fortawesome/free-solid-svg-icons';


const Experience: React.FC = () => {
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

  const getJobTypeIcon = (jobType: string) => {
    switch (jobType) {
      case 'Education': return faGraduationCap;
      case 'Internship': return faBriefcase;
      case 'Side Projects': return faLaptopCode;
      default: return faCode;
    }
  };

  const getJobTypeColor = (jobType: string) => {
    switch (jobType) {
      case 'Education': return 'bg-blue-100 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400';
      case 'Internship': return 'bg-emerald-100 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400';
      case 'Side Projects': return 'bg-purple-100 dark:bg-purple-950/30 text-purple-600 dark:text-purple-400';
      default: return 'bg-primary-100 dark:bg-primary-950/30 text-primary-600 dark:text-primary-400';
    }
  };

  return (
    <section id="experience" className="section-container relative overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary-500/5 blur-[120px] rounded-full -translate-y-1/2" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Section Header */}
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-black tracking-tight mb-6 dark:text-white"
          >
            My <span className="gradient-text">Journey</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-dark-500 dark:text-dark-400 max-w-2xl mx-auto"
          >
            From classroom to codebase — a timeline of learning, building, and growing as a developer.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-dark-200 dark:via-dark-700 to-transparent" />

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={cn(
                  "relative flex flex-col md:flex-row gap-8 items-start",
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 top-8 -translate-x-1/2 z-10">
                  <div className="w-10 h-10 rounded-full bg-white dark:bg-dark-950 border-2 border-primary-500 flex items-center justify-center shadow-lg shadow-primary-500/20">
                    <Icon icon={getJobTypeIcon(exp.jobType)} className="w-4 h-4 text-primary-500" />
                  </div>
                </div>

                {/* Content Card */}
                <div className={cn(
                  "w-full md:w-[calc(50%-3rem)] ml-14 md:ml-0",
                  index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                )}>
                  <div className="glass-card glass-card-hover p-8 rounded-[2rem]">
                    <div className="flex flex-col gap-4">
                      {/* Badge and Duration */}
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                        <span className={cn("px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest", getJobTypeColor(exp.jobType))}>
                          {exp.jobType}
                        </span>
                        <div className="flex items-center gap-2 text-dark-400 text-xs font-medium">
                          <Icon icon={faCalendarAlt} className="w-3.5 h-3.5" />
                          <span>{exp.duration}</span>
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
                      <p className="text-dark-500 dark:text-dark-400 text-sm leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      {exp.achievements && exp.achievements.length > 0 && (
                        <div className="space-y-2 mt-2">
                          {exp.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-start gap-2 text-sm text-dark-500 dark:text-dark-400">
                              <Icon icon={faChevronRight} className="w-2.5 h-2.5 text-primary-500 mt-1.5 shrink-0" />
                              <span>{achievement}</span>
                            </div>
                          ))}
                        </div>
                      )}

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
              </motion.div>
            ))}
          </div>
        </div>

        {/* Current Status Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 max-w-2xl mx-auto"
        >
          <div className="glass-card p-6 rounded-2xl text-center border-primary-500/20">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-black uppercase tracking-widest text-dark-400">Current Status</span>
            </div>
            <p className="text-sm font-bold dark:text-white">
              Graduating June 2026 · Open to internships and junior developer positions
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;
