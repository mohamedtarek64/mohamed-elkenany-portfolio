'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { personalInfo } from '@/data/personal-info';
import { skills } from '@/data/skills';
import Icon from '@/components/ui/Icon';
import { faCode, faRocket, faHeart, faGraduationCap, faUser, faMapMarkerAlt, faEnvelope, faDownload, faStar } from '@fortawesome/free-solid-svg-icons';

const About: React.FC = () => {
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

  const stats = [
    { icon: faCode, label: 'Projects Completed', value: '6+', color: 'from-blue-500 to-blue-600', bgColor: 'bg-blue-50 dark:bg-blue-900/20' },
    { icon: faRocket, label: 'Years Experience', value: '2+', color: 'from-purple-500 to-purple-600', bgColor: 'bg-purple-50 dark:bg-purple-900/20' },
    { icon: faHeart, label: 'Happy Clients', value: '5+', color: 'from-pink-500 to-pink-600', bgColor: 'bg-pink-50 dark:bg-pink-900/20' },
    { icon: faGraduationCap, label: 'Technologies', value: '12+', color: 'from-green-500 to-green-600', bgColor: 'bg-green-50 dark:bg-green-900/20' },
  ];

  const topSkills = skills.slice(0, 8);

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-accent/10 to-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
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
              About Me
            </h2>
                <motion.div
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: 96 }}
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
              {personalInfo.description}
            </p>
            </motion.div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Profile & Stats */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Enhanced Profile Card */}
              <motion.div
                className="relative group"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <Card className="p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-500">
                  <CardContent className="text-center">
                    {/* Enhanced Profile Image */}
                <motion.div
                      className="relative mb-8"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                      <div className="relative inline-block">
                        {/* Animated Glow Ring */}
                        <motion.div
                          className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary via-secondary to-accent opacity-20 blur-xl"
                          animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.2, 0.3, 0.2],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                        
                        {/* Profile Image Container */}
                        <div className="relative w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary p-1 shadow-xl">
                          <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-900">
                            <Image 
                          src={personalInfo.profileImage} 
                          alt={personalInfo.name}
                              width={128}
                              height={128}
                          className="w-full h-full object-cover"
                              loading="lazy"
                              placeholder="blur"
                              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                    {/* Enhanced Name & Title */}
                    <motion.h3
                      className="text-3xl font-bold gradient-text mb-3"
                      whileHover={{ scale: 1.02 }}
                    >
                      {personalInfo.name}
                    </motion.h3>
                    <motion.p
                      className="text-xl text-primary font-semibold mb-8"
                      whileHover={{ scale: 1.01 }}
                    >
                      {personalInfo.title}
                    </motion.p>

                    {/* Enhanced Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                      {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                          className={`text-center p-5 rounded-2xl ${stat.bgColor} border border-white/20 dark:border-gray-700/20 backdrop-blur-sm hover:shadow-lg transition-all duration-300`}
                          initial={{ opacity: 0, scale: 0.8, y: 20 }}
                          whileInView={{ opacity: 1, scale: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1, duration: 0.6 }}
                          whileHover={{ scale: 1.05, y: -4 }}
                        >
                          <motion.div
                            className={`w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-lg`}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            <Icon icon={stat.icon} className="w-6 h-6 text-white" />
                          </motion.div>
                          <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {stat.value}
                    </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Right Column - Personal Info & Skills */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Enhanced Personal Information */}
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <Card className="p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-500">
                <CardHeader>
                    <CardTitle className="text-3xl font-bold gradient-text mb-6 flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mr-3">
                        <Icon icon={faUser} className="w-5 h-5 text-white" />
                  </div>
                      Personal Information
                    </CardTitle>
                </CardHeader>
                  <CardContent className="space-y-6">
                    {[
                      { icon: faUser, label: 'Name', value: personalInfo.name, color: 'from-blue-500 to-blue-600', bgColor: 'bg-blue-50 dark:bg-blue-900/20' },
                      { icon: faCode, label: 'Title', value: personalInfo.title, color: 'from-purple-500 to-purple-600', bgColor: 'bg-purple-50 dark:bg-purple-900/20' },
                      { icon: faMapMarkerAlt, label: 'Location', value: personalInfo.location, color: 'from-green-500 to-green-600', bgColor: 'bg-green-50 dark:bg-green-900/20' },
                      { icon: faEnvelope, label: 'Email', value: personalInfo.email, color: 'from-orange-500 to-orange-600', bgColor: 'bg-orange-50 dark:bg-orange-900/20' },
                    ].map((item, index) => (
                      <motion.div
                        key={item.label}
                        className={`flex items-center space-x-4 p-4 rounded-xl ${item.bgColor} border border-white/20 dark:border-gray-700/20 backdrop-blur-sm hover:shadow-md transition-all duration-300`}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, x: 4 }}
                      >
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg`}>
                          <Icon icon={item.icon} className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900 dark:text-white text-lg">{item.label}</div>
                          <div className="text-gray-600 dark:text-gray-300">{item.value}</div>
                        </div>
                      </motion.div>
                    ))}
                    
                    {/* CV Download Button */}
                    <motion.div
                      className="pt-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      <motion.button
                        onClick={() => window.open('https://drive.google.com/uc?export=download&id=1gnnTJNSV21J1uMt-UCS149etX9qntcf_', '_blank')}
                        className="w-full bg-gradient-to-r from-primary via-secondary to-accent text-white dark:text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Icon icon={faDownload} className="w-5 h-5" />
                        <span>Download My CV</span>
                      </motion.button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Enhanced Skills Preview */}
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <Card className="p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-500">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold gradient-text mb-6 flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-secondary to-accent flex items-center justify-center mr-3">
                        <Icon icon={faGraduationCap} className="w-5 h-5 text-white" />
                      </div>
                      Top Skills
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3">
                      {topSkills.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          className="group relative overflow-hidden"
                          initial={{ opacity: 0, scale: 0.8, y: 20 }}
                          whileInView={{ opacity: 1, scale: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1, duration: 0.6 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          <div className="px-4 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 text-primary dark:text-primary rounded-xl font-medium text-center border border-primary/20 dark:border-primary/30 backdrop-blur-sm transition-all duration-300 group-hover:from-primary/20 group-hover:to-secondary/20 group-hover:shadow-lg group-hover:shadow-primary/25">
                            <span className="relative z-10">{skill.name}</span>
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              initial={{ x: '-100%' }}
                              whileHover={{ x: '100%' }}
                              transition={{ duration: 0.6 }}
                            />
                          </div>
                        </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              </motion.div>

              {/* Enhanced Call to Action */}
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group relative px-12 py-4 bg-gradient-to-r from-primary via-secondary to-accent text-white rounded-2xl font-semibold text-lg shadow-2xl shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 overflow-hidden"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <Icon icon={faDownload} className="w-5 h-5 mr-2" />
                  Get In Touch
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;