'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import Typewriter from '@/components/ui/Typewriter';
import { socialLinks } from '@/data/social-links';
import { personalInfo } from '@/data/personal-info';
import { faDownload, faChevronDown, faRocket, faProjectDiagram, faSmile, faStar, faLaptop, faCode, faHeart } from '@fortawesome/free-solid-svg-icons';

const Hero: React.FC = () => {
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
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const floatingElements = [
    { icon: faCode, color: 'from-blue-500 to-blue-600', delay: 0 },
    { icon: faRocket, color: 'from-purple-500 to-purple-600', delay: 0.5 },
    { icon: faStar, color: 'from-yellow-500 to-yellow-600', delay: 1 },
    { icon: faHeart, color: 'from-pink-500 to-pink-600', delay: 1.5 },
    { icon: faLaptop, color: 'from-green-500 to-green-600', delay: 2 },
    { icon: faProjectDiagram, color: 'from-indigo-500 to-indigo-600', delay: 2.5 },
  ];

  const stats = [
    { label: '2+ Years', value: 'Experience', icon: faRocket, color: 'from-blue-500 to-blue-600' },
    { label: '6+', value: 'Projects', icon: faProjectDiagram, color: 'from-purple-500 to-purple-600' },
    { label: '5+', value: 'Happy Clients', icon: faSmile, color: 'from-green-500 to-green-600' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Floating Elements */}
        {floatingElements.map((element, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${10 + (i * 15)}%`,
              top: `${20 + (i * 10)}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, 20, 0],
              rotate: [0, 180, 360],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              delay: element.delay,
              ease: "easeInOut",
            }}
          >
            <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${element.color} flex items-center justify-center shadow-lg backdrop-blur-sm`}>
              <Icon icon={element.icon} className="w-8 h-8 text-white" />
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 text-center relative z-10"
      >
          {/* Enhanced Profile Image */}
          <motion.div
            variants={itemVariants}
            className="mb-8 md:mb-12"
          >
            <div className="relative inline-block">
              {/* Animated Glow Ring */}
              <motion.div
                className="absolute -inset-4 md:-inset-8 rounded-full bg-gradient-to-r from-primary via-secondary to-accent opacity-20 blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Main Profile Container */}
              <motion.div
                className="relative w-32 h-32 md:w-48 md:h-48 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary p-1 md:p-2 shadow-2xl"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-900 shadow-inner">
                  <Image 
                    src={personalInfo.heroImage} 
                    alt={personalInfo.name}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                    priority
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

        {/* Enhanced Main Content */}
        <motion.div variants={itemVariants} className="mb-12">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold gradient-text mb-4 md:mb-6"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {personalInfo.name}
          </motion.h1>
          
          <motion.div
            className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-6 md:mb-8"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <Typewriter
              words={[personalInfo.title, 'Full Stack Developer', 'Web Developer', 'Software Engineer']}
              speed={100}
              deleteSpeed={50}
              pauseTime={2000}
            />
          </motion.div>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8 md:mb-12 px-4"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            {personalInfo.description}
          </motion.p>
        </motion.div>

        {/* Enhanced Stats */}
        <motion.div
          variants={itemVariants}
          className="mb-8 md:mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.value}
                className="text-center group flex-1 min-w-[120px]"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  className={`w-12 h-12 md:w-16 md:h-16 mx-auto mb-2 md:mb-4 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon icon={stat.icon} className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </motion.div>
                <div className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium">
                  {stat.value}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-8 md:mb-12 px-4"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="w-full sm:w-auto"
          >
            <Button
              onClick={() => window.open('https://drive.google.com/file/d/1Fnwo5QjWliJBbbXI0uHH3m7KOB0vAg8B/view?usp=sharing', '_blank')}
              className="w-full px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-primary via-secondary to-accent text-white dark:text-white rounded-2xl font-semibold text-base md:text-lg shadow-2xl shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
            >
              <Icon icon={faDownload} className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Download CV
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="w-full sm:w-auto"
          >
            <Button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              variant="outline"
              className="w-full px-6 md:px-8 py-3 md:py-4 border-2 border-primary text-primary rounded-2xl font-semibold text-base md:text-lg hover:bg-primary hover:text-white transition-all duration-300"
            >
              View My Work
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="w-full sm:w-auto"
          >
            <Button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              variant="outline"
              className="w-full px-6 md:px-8 py-3 md:py-4 border-2 border-secondary text-secondary rounded-2xl font-semibold text-base md:text-lg hover:bg-secondary hover:text-white transition-all duration-300"
            >
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>

        {/* Enhanced Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-4 md:space-x-6 mb-8 md:mb-12 px-4"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 flex items-center justify-center group-hover:from-primary group-hover:to-secondary transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <Icon icon={link.icon} className="w-5 h-5 md:w-6 md:h-6 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="group w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 dark:bg-gray-800/30 border border-primary/30 dark:border-primary/40 flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-primary/20 dark:hover:bg-primary/30 transition-all duration-300"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            animate={{ y: [0, -8, 0] }}
            transition={{ 
              y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <Icon icon={faChevronDown} className="w-5 h-5 md:w-6 md:h-6 text-primary group-hover:text-primary transition-colors duration-300 scroll-arrow" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;