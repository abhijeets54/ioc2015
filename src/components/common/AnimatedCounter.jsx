import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * AnimatedCounter component for displaying animated statistics
 * Uses a counting animation to display numbers with a visual effect
 */
const AnimatedCounter = ({ 
  value = 0, 
  duration = 2, 
  prefix = "", 
  suffix = "", 
  title = "",
  description = "",
  icon = null
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value);
      const incrementTime = (duration * 1000) / end;
      
      // Don't attempt to increment if end is zero or if duration is zero
      if (end === 0 || duration === 0) {
        setCount(end);
        return;
      }
      
      // Handle case where end is small (less than 20)
      const increment = end < 20 ? 1 : Math.floor(end / 100);
      
      const timer = setInterval(() => {
        start += increment;
        setCount(start);
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        }
      }, incrementTime);
      
      return () => clearInterval(timer);
    }
  }, [value, duration, isInView]);
  
  return (
    <motion.div 
      ref={countRef}
      className="text-center p-6 bg-white rounded-lg shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        y: -5,
        boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
    >
      {icon && (
        <div className="text-orange-500 text-3xl mb-3">
          {icon}
        </div>
      )}
      
      <h3 className="text-4xl font-bold text-orange-500 mb-2">
        {prefix}{isInView ? count : 0}{suffix}
      </h3>
      
      {title && (
        <h4 className="text-xl font-semibold text-gray-800 mb-2">{title}</h4>
      )}
      
      {description && (
        <p className="text-gray-600 text-sm">{description}</p>
      )}
    </motion.div>
  );
};

export default AnimatedCounter;
