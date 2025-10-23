'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experience } from '@/data/experience';
import Icon from '@/components/ui/Icon';
import { faBriefcase, faCalendarAlt, faMapMarkerAlt, faChevronRight, faRocket, faProjectDiagram, faSmile, faStar, faCode, faUsers, faTrophy } from '@fortawesome/free-solid-svg-icons';

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);

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

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const stats = [
    { icon: faRocket, number: '2+', label: 'Years Experience', color: 'from-blue-500 to-blue-600' },
    { icon: faProjectDiagram, number: '8+', label: 'Projects Completed', color: 'from-purple-500 to-purple-600' },
    { icon: faSmile, number: '5+', label: 'Happy Clients', color: 'from-green-500 to-green-600' },
    { icon: faStar, number: '100%', label: 'Client Satisfaction', color: 'from-orange-500 to-orange-600' },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-tr from-accent/10 to-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Enhanced Header Section */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div
              className="inline-block mb-6"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-4">
                  Work Experience
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
                My professional journey and the experiences that shaped my expertise
              </p>
            </motion.div>
          </motion.div>

          {/* Enhanced Stats Section */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="text-center group"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
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

          {/* Enhanced Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent rounded-full"></div>

            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className={`relative flex items-center justify-center mb-16 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                {/* Timeline Dot */}
                <motion.div 
                  className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full shadow-lg z-10 flex items-center justify-center"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon icon={faBriefcase} className="w-4 h-4 text-white" />
                </motion.div>
                
                {/* Experience Card */}
                <motion.div 
                  className={`w-5/12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border border-white/20 dark:border-gray-700/20 group ${
                    index % 2 === 0 ? 'mr-auto' : 'ml-auto'
                  }`}
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
                    transition: { duration: 0.3 }
                  }}
                  variants={cardVariants}
                >
                  {/* Enhanced Job Title */}
                  <motion.h3 
                    className="text-2xl font-bold gradient-text mb-3 group-hover:text-primary/80 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    {exp.title}
                  </motion.h3>
                  
                  {/* Enhanced Company */}
                  <motion.div 
                    className="flex items-center mb-4"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mr-3">
                      <Icon icon={faBriefcase} className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-gray-900 dark:text-white">
                      {exp.company}
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <Icon icon={faMapMarkerAlt} className="w-4 h-4 mr-1" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Enhanced Duration */}
                  <motion.div 
                    className="flex items-center mb-4"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-secondary to-accent flex items-center justify-center mr-3">
                      <Icon icon={faCalendarAlt} className="w-5 h-5 text-white" />
                    </div>
                      <div className="text-gray-600 dark:text-gray-400">
                        <div className="font-medium">{exp.startDate} - {exp.endDate || 'Present'}</div>
                        <div className="text-sm">{exp.jobType}</div>
                      </div>
                  </motion.div>
                  
                  {/* Enhanced Description */}
                  <motion.p 
                    className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
                    whileHover={{ scale: 1.01 }}
                  >
                    {exp.description}
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
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary rounded-full text-sm font-medium"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: techIndex * 0.1 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Enhanced Achievements */}
                  {exp.achievements && (
                    <motion.div 
                      className="mb-6"
                      whileHover={{ scale: 1.02 }}
                    >
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center">
                        <Icon icon={faTrophy} className="w-4 h-4 mr-2" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            className="flex items-start text-sm text-gray-600 dark:text-gray-400"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: achIndex * 0.1 }}
                          >
                            <Icon icon={faChevronRight} className="w-3 h-3 mr-2 mt-1 text-primary flex-shrink-0" />
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  {/* Enhanced Team Size */}
                  {exp.teamSize && (
                    <motion.div 
                      className="flex items-center"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-accent to-primary flex items-center justify-center mr-3">
                        <Icon icon={faUsers} className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-gray-600 dark:text-gray-400">
                        <div className="font-medium">Team Size</div>
                        <div className="text-sm">{exp.teamSize}</div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>

                {/* Connection Line to Next Item */}
                {index < experience.length - 1 && (
                  <motion.div
                    className="absolute left-1/2 transform -translate-x-1/2 top-full w-1 h-16 bg-gradient-to-b from-primary/60 to-primary/20"
                    initial={{ height: 0 }}
                    whileInView={{ height: 64 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
