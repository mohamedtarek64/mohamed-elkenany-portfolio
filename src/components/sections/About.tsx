'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { personalInfo } from '@/data/personal-info';
import Icon from '@/components/ui/Icon';
import { faCode, faRocket, faHeart, faUser, faMapMarkerAlt, faDownload, faStar } from '@fortawesome/free-solid-svg-icons';

const About: React.FC = () => {
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

  const stats = [
    { label: 'Projects', value: personalInfo.stats.projects, icon: faCode },
    { label: 'Clients', value: personalInfo.stats.clients, icon: faHeart },
    { label: 'Satisfaction', value: '100%', icon: faStar },
  ];

  return (
    <section id="about" className="section-container relative overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary-500/5 blur-[120px] rounded-full" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image Side */}
          <motion.div variants={itemVariants} className="relative">
            <div className="image-frame aspect-square max-w-md mx-auto">
              <div className="w-full h-full rounded-2xl overflow-hidden relative z-10 grayscale hover:grayscale-0 transition-all duration-700 border border-dark-100 dark:border-dark-800">
                <Image
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div variants={itemVariants} className="space-y-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-950/30 text-primary-600 dark:text-primary-400 text-xs font-bold uppercase tracking-widest mb-6">
                <Icon icon={faUser} className="w-3 h-3" />
                About Me
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight mb-6 dark:text-white">
                Designing Digital <br />
                <span className="gradient-text">Excellence.</span>
              </h2>
              <p className="text-lg text-dark-500 dark:text-dark-400 leading-relaxed max-w-xl">
                {personalInfo.description}
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="glass-card p-4 rounded-2xl text-center hover:border-primary-500/30 transition-colors">
                  <div className="text-xl font-black dark:text-white mb-1">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-widest font-bold text-dark-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Info List */}
            <div className="space-y-4">
              {[
                { label: 'Role', value: personalInfo.title, icon: faCode },
                { label: 'Location', value: personalInfo.location, icon: faMapMarkerAlt },
                { label: 'Availability', value: 'Ready for Projects', icon: faRocket },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all">
                    <Icon icon={item.icon} className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest font-bold text-dark-400 leading-none">{item.label}</div>
                    <div className="text-sm font-bold dark:text-dark-200 mt-1">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => window.open(personalInfo.cvUrl, '_blank')}
                className="premium-button flex items-center gap-3"
              >
                <Icon icon={faDownload} className="w-4 h-4 text-white" />
                <span>My Philosophy</span>
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="secondary-button"
              >
                Contact Me
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;