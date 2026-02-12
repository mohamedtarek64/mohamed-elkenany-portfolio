'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '@/data/skills';

import Icon from '@/components/ui/Icon';
import { cn } from '@/lib/utils';
import { faBook, faStar, faCode, faDatabase, faTools, faRocket } from '@fortawesome/free-solid-svg-icons';


const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Expertise', icon: faStar },
    { id: 'backend', label: 'Backend', icon: faDatabase },
    { id: 'frontend', label: 'Frontend', icon: faCode },
    { id: 'tools', label: 'Workflow', icon: faTools },
  ];

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

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
    <section id="skills" className="section-container relative overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-secondary-500/5 blur-[120px] rounded-full -translate-y-1/2" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-display font-black tracking-tight mb-6 dark:text-white"
          >
            Technical <span className="gradient-text">Arsenal</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-dark-500 dark:text-dark-400 max-w-2xl mx-auto"
          >
            A curated collection of technologies I've mastered to build resilient and scalable systems.
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

        {/* Skills Pills Grid */}
        <motion.div
          layout
          className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="skill-pill group">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                    style={{ backgroundColor: `${skill.color}15` }}
                  >
                    <Icon
                      icon={skill.icon}
                      className="w-5 h-5 transition-colors duration-500"
                      style={{ color: skill.color }}
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold dark:text-dark-200">{skill.name}</span>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-16 h-1 bg-dark-100 dark:bg-dark-800 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ backgroundColor: skill.color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                        />
                      </div>
                      <span className="text-[9px] font-black text-dark-400">{skill.level}%</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Qualifier */}
        <motion.div
          variants={itemVariants}
          className="mt-24 pt-12 border-t border-dark-100 dark:border-dark-900 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: 'System Architecture', icon: faBook },
            { label: 'Performance Tuning', icon: faRocket },
            { label: 'Cloud Infrastructure', icon: faStar },
            { label: 'Security First', icon: faStar },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-3 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <Icon icon={item.icon} className="w-6 h-6 text-dark-400" />
              <span className="text-[10px] uppercase tracking-widest font-black text-dark-500">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};


export default Skills;
