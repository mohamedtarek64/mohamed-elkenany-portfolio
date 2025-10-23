'use client';

import React, { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from './Icon';
import { faCode, faRocket, faStar, faLaptop } from '@fortawesome/free-solid-svg-icons';

const LoadingScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Reduce loading time for better performance
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-50 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900 flex items-center justify-center overflow-hidden"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.6, 0.3, 0.6],
                rotate: [360, 180, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
          </div>

          <div className="text-center relative z-10 px-4">
            {/* Enhanced Logo Animation */}
            <motion.div
              className="relative mb-8 md:mb-12"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Glow Effect */}
              <motion.div
                className="absolute -inset-8 md:-inset-12 rounded-full bg-gradient-to-r from-primary via-secondary to-accent opacity-30 blur-2xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Main Logo Container */}
              <motion.div
                className="relative w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full bg-gradient-to-r from-primary via-secondary to-accent p-2 md:p-3 shadow-2xl"
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-900 shadow-inner flex items-center justify-center">
                  <motion.div
                    animate={{ 
                      rotate: -360,
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                      scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                    }}
                  >
                    <Icon icon={faCode} className="w-10 h-10 md:w-12 md:h-12 text-primary" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating Icons */}
              {[
                { icon: faRocket, delay: 0, duration: 3 },
                { icon: faStar, delay: 1, duration: 3 },
                { icon: faLaptop, delay: 2, duration: 3 }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="absolute w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm flex items-center justify-center"
                  style={{
                    top: `${20 + index * 30}%`,
                    left: `${10 + index * 20}%`,
                  }}
                  animate={{
                    y: [-10, 10, -10],
                    x: [-5, 5, -5],
                    rotate: [0, 180, 360],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: item.duration,
                    repeat: Infinity,
                    delay: item.delay,
                    ease: "easeInOut"
                  }}
                >
                  <Icon icon={item.icon} className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced Loading Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-2 md:mb-4"
                animate={{ 
                  backgroundPosition: ['0%', '100%', '0%']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Mohamed Elkenany
              </motion.h1>
              
              <motion.p
                className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 md:mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                Full Stack Developer
              </motion.p>
            </motion.div>

            {/* Enhanced Loading Animation */}
            <motion.div
              className="flex flex-col items-center space-y-4 md:space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {/* Progress Bar */}
              <div className="w-64 md:w-80 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
              </div>

              {/* Loading Dots */}
              <div className="flex justify-center space-x-3">
                {[0, 1, 2, 3].map((index) => (
                  <motion.div
                    key={index}
                    className="w-3 h-3 md:w-4 md:h-4 bg-gradient-to-r from-primary to-secondary rounded-full shadow-lg"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.4, 1, 0.4],
                      y: [-5, 5, -5]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: index * 0.2,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>

              {/* Loading Text */}
              <motion.p
                className="text-base md:text-lg text-gray-500 dark:text-gray-400 font-medium"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                Preparing your experience...
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default memo(LoadingScreen);
