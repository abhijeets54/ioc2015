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

      {/* Overlay with gradient background for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col items-start ml-10 text-white max-w-xl"
        >
          <motion.h1 
            className="text-5xl md:text-6xl mt-1 font-medium text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Creating Leaders,
            <br /> Transforming Lives
          </motion.h1>
          
          <motion.div 
            className="buttons flex flex-row mt-6 space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <motion.button 
              className="px-6 py-3 rounded-full bg-orange-500 text-white font-medium shadow-lg hover:bg-orange-600 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              onClick={handleDonateClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Donate now
            </motion.button>
            <motion.button 
              className="px-6 py-3 rounded-full border-2 border-white bg-transparent text-white font-medium hover:bg-white hover:text-gray-900 transition-all duration-300"
              onClick={handleJoinUsClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join us
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Carousel Navigation */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-3">
          {slideImages.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full focus:outline-none ${
                index === currentIndex ? 'bg-orange-500 scale-125' : 'bg-white bg-opacity-50'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 + index * 0.1 }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Previous/Next buttons */}
        <motion.button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 text-white rounded-full p-3 focus:outline-none"
          onClick={handlePrevious}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
          aria-label="Previous slide"
        >
          <FaArrowLeft size={20} />
        </motion.button>
        
        <motion.button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 text-white rounded-full p-3 focus:outline-none"
          onClick={handleNext}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
          aria-label="Next slide"
        >
          <FaArrowRight size={20} />
        </motion.button>

        {/* Social Media Buttons */}
        <motion.div 
          className="fixed right-10 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.8, type: "spring" }}
        >
          <motion.button
            className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-500 text-white shadow-lg hover:bg-orange-600 transition-colors duration-300"
            onClick={() => handleSocialClick('https://www.instagram.com/initiatorsofchange_')}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaInstagram size={22} />
          </motion.button>
          <motion.button
            className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-500 text-white shadow-lg hover:bg-orange-600 transition-colors duration-300"
            onClick={() => handleSocialClick('https://www.facebook.com/initiatorsofchange')}
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaFacebookF size={22} />
          </motion.button>
          <motion.button
            className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-500 text-white shadow-lg hover:bg-orange-600 transition-colors duration-300"
            onClick={() => handleSocialClick('https://www.youtube.com/@initiatorsofchange5173')}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaYoutube size={22} />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

export default Collage;
