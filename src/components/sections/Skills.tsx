'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills, type EnhancedSkill, type ProficiencyLevel } from '@/data/skills';

import Icon from '@/components/ui/Icon';
import { cn } from '@/lib/utils';
import { faStar, faCode, faDatabase, faTools, faRocket, faChevronRight } from '@fortawesome/free-solid-svg-icons';


const proficiencyConfig: Record<ProficiencyLevel, { color: string; bg: string; label: string }> = {
  'Advanced': { color: 'text-emerald-500', bg: 'bg-emerald-500/10 border-emerald-500/20', label: 'Advanced' },
  'Proficient': { color: 'text-blue-500', bg: 'bg-blue-500/10 border-blue-500/20', label: 'Proficient' },
  'Experienced': { color: 'text-amber-500', bg: 'bg-amber-500/10 border-amber-500/20', label: 'Experienced' },
  'Learning': { color: 'text-purple-500', bg: 'bg-purple-500/10 border-purple-500/20', label: 'Learning' },
};

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Skills', icon: faStar },
    { id: 'backend', label: 'Backend', icon: faDatabase },
    { id: 'frontend', label: 'Frontend', icon: faCode },
    { id: 'tools', label: 'Tools', icon: faTools },
  ];

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeCategory || (activeCategory === 'backend' && skill.category === 'languages'));

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
    <section id="skills" className="section-container relative overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-secondary-500/5 blur-[120px] rounded-full -translate-y-1/2" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-black tracking-tight mb-6 dark:text-white"
          >
            Technical <span className="gradient-text">Skills</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-dark-500 dark:text-dark-400 max-w-2xl mx-auto"
          >
            Technologies I've used to build 6 production-ready systems — with honest proficiency levels.
          </motion.p>
        </div>

        {/* Category Tabs */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-20">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "px-8 py-3 rounded-2xl text-sm font-bold transition-all duration-300 flex items-center gap-3",
                activeCategory === category.id
                  ? "bg-primary-600 text-white shadow-xl shadow-primary-500/20"
                  : "glass-card text-dark-600 dark:text-dark-300 hover:bg-white dark:hover:bg-dark-800"
              )}
            >
              <Icon icon={category.icon} className="w-4 h-4" />
              <span>{category.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid - Cards with proficiency labels */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const config = proficiencyConfig[skill.proficiency];
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="glass-card glass-card-hover p-5 rounded-2xl group">
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-500 group-hover:scale-110"
                        style={{ backgroundColor: `${skill.color}15` }}
                      >
                        <Icon
                          icon={skill.icon}
                          className="w-5 h-5 transition-colors duration-500"
                          style={{ color: skill.color }}
                        />
                      </div>
                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <span className="text-sm font-black dark:text-dark-200">{skill.name}</span>
                          <span className={cn("text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-lg border", config.bg, config.color)}>
                            {config.label}
                          </span>
                        </div>
                        {/* Sub-skills */}
                        {skill.subSkills && (
                          <div className="flex flex-wrap gap-1.5 mt-2">
                            {skill.subSkills.map((sub) => (
                              <span key={sub} className="text-[9px] font-bold text-dark-400 dark:text-dark-500 px-2 py-0.5 rounded-md bg-dark-50 dark:bg-dark-800/60">
                                {sub}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom: What I'm Learning */}
        <motion.div
          variants={itemVariants}
          className="mt-24 glass-card p-8 md:p-10 rounded-[2.5rem] max-w-4xl mx-auto"
        >
          <h3 className="text-xl font-display font-black dark:text-white mb-6 text-center">
            What I'm <span className="gradient-text">Exploring Next</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'System Design', icon: faRocket },
              { label: 'Cloud Architecture', icon: faStar },
              { label: 'DevOps & CI/CD', icon: faTools },
              { label: 'Performance Tuning', icon: faCode },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-all duration-500 group">
                <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-950/30 flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                  <Icon icon={item.icon} className="w-4 h-4 text-primary-500 group-hover:text-white transition-colors" />
                </div>
                <span className="text-[10px] uppercase tracking-widest font-black text-dark-500 text-center">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};


export default Skills;
