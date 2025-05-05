import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import OptimizedImage from './OptimizedImage';
import AnimatedButton from './AnimatedButton';

/**
 * ParallaxHero component for creating a visually stunning hero section
 * with parallax scrolling effect and animated content
 */
const ParallaxHero = ({
  backgroundImage,
  title,
  subtitle,
  buttonText = "Learn More",
  buttonLink = "#",
  height = "600px",
  overlayOpacity = 0.6,
  onButtonClick
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const { scrollY } = useScroll();
  
  // Create parallax effect for background image
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.6]);
  
  // Check if on mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div 
      className="relative overflow-hidden"
      style={{ height }}
    >
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={{ 
          y: isMobile ? 0 : y,
          scale: 1.1,
        }}
      >
        <OptimizedImage
          src={backgroundImage}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        
        {/* Overlay */}
        <div 
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />
      </motion.div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 z-10">
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ opacity }}
        >
          {title}
        </motion.h1>
        
        <motion.p 
          className="text-xl text-white mb-8 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ opacity }}
        >
          {subtitle}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <AnimatedButton 
            variant="primary" 
            size="large"
            onClick={onButtonClick}
          >
            {buttonText}
          </AnimatedButton>
        </motion.div>
      </div>
    </div>
  );
};

export default ParallaxHero;
