'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { projects } from '@/data/projects';
import Icon from '@/components/ui/Icon';
import { faExternalLinkAlt, faCode, faStar, faEye, faHeart, faRocket, faGlobe, faMobile, faDesktop, faTools } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Projects', icon: faStar, color: 'from-blue-500 to-blue-600', count: projects.length },
    { id: 'web', label: 'Web Applications', icon: faGlobe, color: 'from-purple-500 to-purple-600', count: projects.filter(p => p.category === 'web').length },
    { id: 'mobile', label: 'Mobile Apps', icon: faMobile, color: 'from-green-500 to-green-600', count: projects.filter(p => p.category === 'mobile').length },
    { id: 'desktop', label: 'Desktop Apps', icon: faDesktop, color: 'from-orange-500 to-orange-600', count: projects.filter(p => p.category === 'desktop').length },
    { id: 'other', label: 'Other', icon: faTools, color: 'from-pink-500 to-pink-600', count: projects.filter(p => p.category === 'other').length },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15,
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

  const projectStats = [
    { icon: faRocket, number: '6+', label: 'Projects Completed', color: 'from-blue-500 to-blue-600' },
    { icon: faEye, number: '5+', label: 'Live Projects', color: 'from-purple-500 to-purple-600' },
    { icon: faHeart, number: '100%', label: 'Client Satisfaction', color: 'from-green-500 to-green-600' },
    { icon: faStar, number: '4.9', label: 'Average Rating', color: 'from-orange-500 to-orange-600' },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900 relative overflow-hidden">
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
              Featured Projects
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
                Here are some of my recent projects that showcase my skills and experience in web development
              </p>
            </motion.div>
          </motion.div>

          {/* Enhanced Project Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {projectStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center group"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon icon={stat.icon} className="w-8 h-8 text-white" />
                </motion.div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Category Filter */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className={`relative px-6 py-3 rounded-2xl font-medium transition-all duration-300 overflow-hidden text-sm md:text-base ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg shadow-primary/25`
                    : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:shadow-md border border-gray-200 dark:border-gray-700 backdrop-blur-sm'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Icon icon={category.icon} className="w-4 h-4" />
                  <span>{category.label}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                    activeCategory === category.id 
                      ? 'bg-white/20 text-white' 
                      : 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300'
                  }`}>
                    {category.count}
                  </span>
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

          {/* Enhanced Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="wait">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project, index) => (
                  <motion.div
                  key={project.id}
                  layout
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -30 }}
                    transition={{ delay: index * 0.05, duration: 0.5, ease: "easeOut" }}
                    whileHover={{ scale: 1.03, y: -8 }}
                    whileTap={{ scale: 0.98 }}
                  className="group cursor-pointer"
                >
                    <Card className="p-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 h-full overflow-hidden">
                      {/* Enhanced Project Image */}
                      <motion.div
                        className="relative w-full h-48 overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                      <Image 
                        src={project.image} 
                        alt={project.title}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Project Category Badge */}
                        <motion.div
                          className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-primary to-secondary text-white text-xs font-medium rounded-full"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 }}
                        >
                          {project.category}
                        </motion.div>

                        {/* Project Links */}
                        <motion.div
                          className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          initial={{ opacity: 0, y: 10 }}
                          whileHover={{ opacity: 1, y: 0 }}
                        >
                          {project.githubUrl && (
                            <motion.a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Icon icon={faGithub} className="w-4 h-4 text-white" />
                            </motion.a>
                          )}
                          {project.liveUrl && (
                            <motion.a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Icon icon={faExternalLinkAlt} className="w-4 h-4 text-white" />
                            </motion.a>
                          )}
                        </motion.div>
                      </motion.div>

                  <CardContent className="p-6">
                        {/* Enhanced Project Title */}
                        <motion.h3
                          className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors duration-300"
                          whileHover={{ scale: 1.02 }}
                        >
                      {project.title}
                        </motion.h3>

                        {/* Enhanced Project Description */}
                        <motion.p
                          className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed"
                          whileHover={{ scale: 1.01 }}
                        >
                      {project.description}
                        </motion.p>

                        {/* Enhanced Technologies */}
                        <motion.div
                          className="mb-6"
                          whileHover={{ scale: 1.02 }}
                        >
                          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center">
                            <Icon icon={faCode} className="w-4 h-4 mr-2" />
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <motion.span
                          key={tech}
                                className="px-3 py-1 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary rounded-full text-sm font-medium"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: techIndex * 0.05, duration: 0.3 }}
                                whileHover={{ scale: 1.1 }}
                        >
                          {tech}
                              </motion.span>
                      ))}
                    </div>
                        </motion.div>

                        {/* Enhanced Action Buttons */}
                        <motion.div
                          className="flex space-x-3"
                          whileHover={{ scale: 1.02 }}
                        >
                      {project.liveUrl && (
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                        <Button
                          onClick={() => window.open(project.liveUrl, '_blank')}
                                className="flex-1 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-medium py-2 px-4 hover:shadow-lg transition-all duration-300"
                        >
                          <Icon icon={faExternalLinkAlt} className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                            </motion.div>
                      )}
                      {project.githubUrl && (
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                        <Button
                                onClick={() => window.open(project.githubUrl, '_blank')}
                          variant="outline"
                                className="flex-1 border-2 border-primary text-primary rounded-xl font-medium py-2 px-4 hover:bg-primary hover:text-white transition-all duration-300"
                        >
                          <Icon icon={faGithub} className="w-4 h-4 mr-2" />
                                Code
                        </Button>
                            </motion.div>
                      )}
                        </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full text-center py-12"
                >
                  <div className="text-gray-500 dark:text-gray-400 text-lg">
                    No projects found in this category.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
