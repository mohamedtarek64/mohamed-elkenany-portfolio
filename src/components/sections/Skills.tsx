'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/Card';
import { skills } from '@/data/skills';
import Icon from '@/components/ui/Icon';
import { faBook, faPuzzlePiece, faHandshake, faStar, faCode, faDatabase, faTools, faLanguage } from '@fortawesome/free-solid-svg-icons';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Skills', icon: faStar, color: 'from-blue-500 to-blue-600' },
    { id: 'frontend', label: 'Frontend', icon: faCode, color: 'from-purple-500 to-purple-600' },
    { id: 'backend', label: 'Backend', icon: faDatabase, color: 'from-green-500 to-green-600' },
    { id: 'tools', label: 'Tools', icon: faTools, color: 'from-orange-500 to-orange-600' },
    { id: 'languages', label: 'Languages', icon: faLanguage, color: 'from-pink-500 to-pink-600' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
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
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const personalityTraits = [
    { text: 'Always Learning', icon: faBook, color: 'from-blue-500 to-blue-600' },
    { text: 'Problem Solver', icon: faPuzzlePiece, color: 'from-purple-500 to-purple-600' },
    { text: 'Team Player', icon: faHandshake, color: 'from-green-500 to-green-600' },
    { text: 'Quality Focused', icon: faStar, color: 'from-yellow-500 to-yellow-600' },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-tr from-accent/10 to-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-7xl mx-auto"
        >
          {/* Enhanced Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div
              className="inline-block mb-6"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-4">
              Skills & Technologies
            </h2>
                <motion.div
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: 128 }}
                  transition={{ duration: 1, delay: 0.3 }}
                />
              </div>
            </motion.div>
            
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Here are the technologies and tools I work with to create amazing digital experiences
              </p>
            </motion.div>
          </motion.div>

          {/* Enhanced Category Filter */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative px-3 py-2 sm:px-6 sm:py-3 rounded-xl sm:rounded-2xl font-medium transition-all duration-300 overflow-hidden text-xs sm:text-sm md:text-base ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg shadow-primary/25`
                    : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:shadow-md border border-gray-200 dark:border-gray-700 backdrop-blur-sm'
                }`}
              >
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <Icon icon={category.icon} className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">{category.label}</span>
                  <span className="sm:hidden">{category.label.split(' ')[0]}</span>
                </div>
                {activeCategory === category.id && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Enhanced Skills Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 px-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    layout
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -20 }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -8 }}
                    className="group"
                  >
                  <Card className="p-4 sm:p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                    <CardContent className="text-center">
                      {/* Skill Icon */}
                      <motion.div
                        className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon 
                          icon={skill.icon} 
                          className="w-8 h-8 sm:w-10 sm:h-10 text-primary group-hover:text-secondary transition-colors duration-300"
                        />
                      </motion.div>

                      {/* Skill Name */}
                      <motion.h3 
                        className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300 mb-2"
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill.name}
                      </motion.h3>

                      {/* Skill Level */}
                      <div className="mb-3 sm:mb-4">
                        <div className="flex justify-between text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-1">
                          <span>Level</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 sm:h-2">
                          <motion.div
                            className="bg-gradient-to-r from-primary to-secondary h-1.5 sm:h-2 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                          />
                        </div>
                      </div>

                      {/* Skill Color Indicator */}
                      <div
                        className="w-3 h-3 sm:w-4 sm:h-4 rounded-full mx-auto"
                        style={{ backgroundColor: skill.color }}
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Enhanced Personality Traits */}
          <motion.div variants={itemVariants} className="mt-12 sm:mt-16 px-4">
            <motion.div
              className="text-center mb-6 sm:mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold gradient-text mb-3 sm:mb-4">What Makes Me Different</h3>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
                Beyond technical skills, here are the qualities that define my approach to work
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {personalityTraits.map((trait, index) => (
                <motion.div 
                  key={trait.text}
                  className="text-center group"
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.div
                    className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-xl sm:rounded-2xl bg-gradient-to-r ${trait.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon icon={trait.icon} className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </motion.div>
                  <h4 className="text-sm sm:text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                    {trait.text}
                  </h4>
                </motion.div>
              ))}
            </div>
                </motion.div>

          {/* Enhanced Stats */}
                <motion.div 
            variants={itemVariants}
            className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4"
          >
            {[
              { number: '15+', label: 'Technologies', color: 'from-blue-500 to-blue-600' },
              { number: '90%', label: 'Average Skill Level', color: 'from-purple-500 to-purple-600' },
              { number: '3+', label: 'Years Learning', color: 'from-green-500 to-green-600' },
              { number: '100%', label: 'Passion', color: 'from-orange-500 to-orange-600' },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                className="text-center p-4 sm:p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <motion.div 
                  className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon icon={faStar} className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </motion.div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
