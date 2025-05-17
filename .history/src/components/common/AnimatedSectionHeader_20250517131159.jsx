import React from 'react';
import { motion } from 'framer-motion';

/**
 * AnimatedSectionHeader component for creating visually appealing section headers
 * with animation effects and NGO-themed styling
 */
const AnimatedSectionHeader = ({ 
  title, 
  subtitle = "", 
  centered = true,
  underlineColor = "orange" // orange, green, blue
}) => {
  // Color mapping for the underline
  const colorMap = {
    orange: "bg-orange-500",
    green: "bg-green-500",
    blue: "bg-blue-500"
  };

  // Animation for the title text
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Animation for the subtitle text
  const subtitleVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5, delay: 0.2 }
    }
  };

  // Animation for the underline
  const underlineVariants = {
    hidden: { width: 0 },
    visible: { 
      width: "100%",
      transition: { duration: 0.8, delay: 0.3 }
    }
  };

  return (
    <div className={`mb-10 ${centered ? 'text-center' : ''}`}>
      <motion.h2 
        className="text-3xl font-bold text-gray-800 font-heading tracking-tight"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={titleVariants}
      >
        {title}
      </motion.h2>
      
      <motion.div 
        className={`h-1 ${colorMap[underlineColor]} rounded mt-2 mb-4 ${centered ? 'mx-auto' : ''}`}
        style={{ maxWidth: centered ? '120px' : '80px' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={underlineVariants}
      />
      
      {subtitle && (
        <motion.p 
          className="text-gray-600 max-w-2xl mx-auto font-sans leading-relaxed"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={subtitleVariants}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default AnimatedSectionHeader;
