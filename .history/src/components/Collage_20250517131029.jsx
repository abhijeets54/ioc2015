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

  return (
    <div className="relative h-screen overflow-hidden">
      {/* LAYER 1: Background Slides (Bottom Layer) */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false} mode="sync" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{
              opacity: { duration: 1.2, ease: "easeInOut" },
              scale: { duration: 1.5, ease: "easeOut" }
            }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={slideImages[currentIndex].src}
              alt={slideImages[currentIndex].alt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* LAYER 2: Dark Overlay (Middle Layer) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>

      {/* LAYER 3: Content (Top Layer) */}
      <div className="absolute inset-0 z-10">
        {/* Text and CTA Buttons */}
        <div className="h-full flex items-center">
          <div className="flex flex-col items-start ml-10 md:ml-16 text-white max-w-xl">
            <h1 className="text-5xl md:text-6xl font-medium text-left font-heading tracking-tight leading-tight">
              Creating Leaders,
              <br />
              Transforming Lives
            </h1>
            
            <div className="buttons flex flex-row mt-8 space-x-4">
              <button 
                className="px-6 py-3 rounded-full bg-orange-500 text-white font-medium shadow-lg hover:bg-orange-600 transition-all duration-300 hover:scale-105 hover:shadow-xl font-accent tracking-wide"
                onClick={handleDonateClick}
              >
                Donate now
              </button>
              <button 
                className="px-6 py-3 rounded-full border-2 border-white bg-transparent text-white font-medium hover:bg-white/20 transition-all duration-300 hover:scale-105 font-accent tracking-wide"
                onClick={handleJoinUsClick}
              >
                Join us
              </button>
            </div>
          </div>
        </div>

        {/* Social Media Buttons */}
        <div className="fixed right-10 top-1/2 transform -translate-y-1/2 flex flex-col space-y-5">
          {[
            { icon: <FaInstagram size={22} />, url: 'https://www.instagram.com/initiatorsofchange_' },
            { icon: <FaFacebookF size={22} />, url: 'https://www.facebook.com/initiatorsofchange' },
            { icon: <FaYoutube size={22} />, url: 'https://www.youtube.com/@initiatorsofchange5173' }
          ].map((social, index) => (
            <button
              key={index}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-500 text-white shadow-lg hover:bg-orange-600 transition-all duration-300 hover:scale-105"
              onClick={() => handleSocialClick(social.url)}
            >
              {social.icon}
            </button>
          ))}
        </div>

        {/* Carousel Navigation */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-4">
          {slideImages.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full focus:outline-none transition-all duration-300 ${
                index === currentIndex ? 'bg-orange-500 scale-125 w-6' : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Previous/Next buttons */}
        <button
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-all duration-300 focus:outline-none hover:scale-110"
          onClick={handlePrevious}
          aria-label="Previous slide"
        >
          <FaArrowLeft size={20} />
        </button>
        
        <button
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-all duration-300 focus:outline-none hover:scale-110"
          onClick={handleNext}
          aria-label="Next slide"
        >
          <FaArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}

export default Collage;
