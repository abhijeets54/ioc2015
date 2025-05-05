import React from 'react';
import { motion } from 'framer-motion';

/**
 * AnimatedCard component that provides scroll-based animations
 * Uses Framer Motion for animations
 * Can be used to wrap any content that needs to be animated
 */
const AnimatedCard = ({ 
  children, 
  className = "", 
  delay = 0, 
  duration = 0.5,
  animationType = "fade-up" // Options: fade-up, fade-in, slide-left, slide-right, zoom
}) => {
  // Define animation variants based on type
  const getAnimationVariants = () => {
    switch (animationType) {
      case 'fade-up':
        return {
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 }
        };
      case 'fade-in':
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        };
      case 'slide-left':
        return {
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 }
        };
      case 'slide-right':
        return {
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 }
        };
      case 'zoom':
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 }
        };
      default:
        return {
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        };
    }
  };

  const variants = getAnimationVariants();

  return (
    <motion.div
      className={`transition-all duration-300 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
      transition={{ 
        duration: duration, 
        delay: delay,
        ease: "easeOut"
      }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
