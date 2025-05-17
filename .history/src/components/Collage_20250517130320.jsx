import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaYoutube, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

function Collage() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleDonateClick = (e) => {
    e.stopPropagation();
    navigate('/Donate');
  };

  const handleJoinUsClick = (e) => {
    e.stopPropagation();
    navigate('/JoinUs');
  };

  const handleSocialClick = (url) => {
    window.open(url, '_blank');
  };

  const slideImages = [
    {
      src: "../../IOC Website pictures/ioc website content/three pillars/Awareness/Collage1.webp",
      alt: "Awareness Initiative"
    },
    {
      src: "/Education cover.webp",
      alt: "Education Initiative"
    },
    {
      src: "../../IOC Website pictures/ioc website content/home page/Fatimawithstudents.webp",
      alt: "Community Impact"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slideImages.length);
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? slideImages.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Variants for page transitions
  const variants = {
    enter: (direction) => ({
      opacity: 0,
      scale: 1.05,
      filter: "blur(8px)",
      zIndex: 0
    }),
    center: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      zIndex: 1
    },
    exit: (direction) => ({
      opacity: 0,
      scale: 0.95,
      filter: "blur(8px)",
      zIndex: 0
    })
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false} mode="sync" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              opacity: { duration: 1.2, ease: "easeInOut" },
              scale: { duration: 1.5, ease: "easeOut" },
              filter: { duration: 1.2, ease: "easeInOut" }
            }}
            className="absolute inset-0 w-full h-full"
          >
            <motion.img
              src={slideImages[currentIndex].src}
              alt={slideImages[currentIndex].alt}
              className="w-full h-full object-cover"
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{ duration: 8, ease: "easeOut" }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Consistent Overlay with gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent">
        {/* Static Content - Always Visible */}
        <div className="relative h-full flex items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex flex-col items-start ml-10 md:ml-16 text-white max-w-xl"
          >
            <motion.h1 
              className="text-5xl md:text-6xl mt-1 font-medium text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1.2, ease: "easeOut" }}
            >
              <motion.span
                initial={{ opacity: 0, filter: "blur(4px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ delay: 0.3, duration: 1.5 }}
              >
                Creating Leaders,
              </motion.span>
              <br /> 
              <motion.span
                initial={{ opacity: 0, filter: "blur(4px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ delay: 0.5, duration: 1.5 }}
              >
                Transforming Lives
              </motion.span>
            </motion.h1>
            
            <motion.div 
              className="buttons flex flex-row mt-8 space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1.2, ease: "easeInOut" }}
            >
              <motion.button 
                className="px-6 py-3 rounded-full bg-orange-500 text-white font-medium shadow-lg hover:bg-orange-600 transition-all duration-500 hover:scale-105 hover:shadow-xl"
                onClick={handleDonateClick}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                }}
                whileTap={{ scale: 0.98 }}
              >
                Donate now
              </motion.button>
              <motion.button 
                className="px-6 py-3 rounded-full border-2 border-white bg-transparent text-white font-medium hover:bg-white/20 transition-all duration-500"
                onClick={handleJoinUsClick}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1.1, duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                whileTap={{ scale: 0.98 }}
              >
                Join us
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Static Social Media Buttons */}
          <motion.div 
            className="fixed right-10 top-1/2 transform -translate-y-1/2 flex flex-col space-y-5 z-20"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              delay: 1.3, 
              duration: 1, 
              ease: "easeOut",
              staggerChildren: 0.1
            }}
          >
            {[
              { icon: <FaInstagram size={22} />, url: 'https://www.instagram.com/initiatorsofchange_' },
              { icon: <FaFacebookF size={22} />, url: 'https://www.facebook.com/initiatorsofchange' },
              { icon: <FaYoutube size={22} />, url: 'https://www.youtube.com/@initiatorsofchange5173' }
            ].map((social, index) => (
              <motion.button
                key={index}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-500/90 text-white shadow-lg backdrop-blur-sm hover:bg-orange-600 transition-all duration-300"
                onClick={() => handleSocialClick(social.url)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + index * 0.2, duration: 0.8, ease: "easeOut" }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: index % 2 === 0 ? 5 : -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                {social.icon}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Static Carousel Controls */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="relative h-full w-full">
          {/* Carousel Navigation Dots */}
          <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-4 pointer-events-auto">
            {slideImages.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full focus:outline-none transition-all duration-500 ${
                  index === currentIndex ? 'bg-orange-500 scale-125 w-6' : 'bg-white/50 hover:bg-white/80'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.8, ease: "easeOut" }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Previous/Next buttons */}
          <motion.button
            className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 backdrop-blur-sm transition-all duration-300 focus:outline-none pointer-events-auto"
            onClick={handlePrevious}
            initial={{ opacity: 0, x: -10, scale: 0.9 }}
            animate={{ opacity: 0.8, x: 0, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.1, opacity: 1, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            aria-label="Previous slide"
          >
            <FaArrowLeft size={20} />
          </motion.button>
          
          <motion.button
            className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 backdrop-blur-sm transition-all duration-300 focus:outline-none pointer-events-auto"
            onClick={handleNext}
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 0.8, x: 0, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.1, opacity: 1, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            aria-label="Next slide"
          >
            <FaArrowRight size={20} />
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default Collage;
