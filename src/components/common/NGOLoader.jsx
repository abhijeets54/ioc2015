import React from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from './OptimizedImage';

/**
 * NGO-themed loader component that shows an animated logo with impact statistics
 * Uses Framer Motion for animations
 */
const NGOLoader = ({ isLoading }) => {
  // Impact statistics that will animate up
  const impactStats = [
    "Educating 500+ children",
    "Supporting 200+ families",
    "Providing humanitarian aid",
    "Creating awareness"
  ];

  if (!isLoading) return null;

  return (
    <motion.div 
      className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        {/* Logo animation */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="mb-6"
        >
          <OptimizedImage 
            src="../../../IOC Website pictures/cropped ioc logo.webp" 
            alt="IOC Logo"
            width={100}
            height={100}
            className="mx-auto"
          />
        </motion.div>

        {/* Animated text */}
        <motion.h2 
          className="text-2xl font-bold text-orange-500 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Initiators of Change
        </motion.h2>

        {/* Animated tagline */}
        <motion.p 
          className="text-gray-600 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Transforming lives through education, awareness, and humanitarian aid
        </motion.p>

        {/* Progress bar */}
        <motion.div 
          className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden mx-auto mb-4"
        >
          <motion.div 
            className="h-full bg-orange-500"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
        </motion.div>

        {/* Impact statistics that cycle through */}
        <div className="h-6 overflow-hidden">
          {impactStats.map((stat, index) => (
            <motion.p
              key={index}
              className="text-sm text-gray-600"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{
                delay: index * 2,
                duration: 0.5,
                repeat: Infinity,
                repeatDelay: (impactStats.length - 1) * 2
              }}
            >
              {stat}
            </motion.p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default NGOLoader;
