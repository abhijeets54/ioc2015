import React, { useState, useEffect } from 'react';
import { Container, Logo } from '../index';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Home', slug: '/' },
    { name: 'About', slug: '/About' },
    { name: 'Projects', slug: '/Projects' },
    { name: 'Newsletter', slug: '/Newsletter' },
    { name: 'Join Us', slug: '/JoinUs' },
    { name: 'Donate', slug: '/Donate' },
  ];

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/80 backdrop-blur-md py-3'
    }`}>
      <Container>
        <nav className='flex justify-between items-center'>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='ml-4 w-18 h-18 flex items-center'
          >
            <button onClick={() => navigate('/')} className='focus:outline-none hover:scale-105 transition-transform duration-200'>
              <Logo className='w-full h-full object-contain' />
            </button>
          </motion.div>
          
          <div className='lg:hidden mr-5'>
            <button 
              onClick={toggleMenu} 
              className='text-black focus:outline-none hover:text-orange-500 transition-colors duration-200'
              aria-label="Toggle menu"
            >
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          <motion.ul 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            className='hidden lg:flex ml-auto space-x-2 items-center'
          >
            {navItems.map((item, index) => (
              <motion.li 
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <button
                  onClick={() => navigate(item.slug)}
                  className={`
                    relative px-5 py-2 font-medium transition-all duration-300 rounded-full
                    ${item.name === 'Donate'
                      ? 'text-white bg-orange-500 hover:bg-orange-600 shadow-md hover:shadow-lg transform hover:scale-105'
                      : location.pathname === item.slug 
                        ? 'text-orange-500 bg-orange-50' 
                        : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'}
                  `}
                >
                  <span className="relative z-10">{item.name}</span>
                  {item.name !== 'Donate' && location.pathname === item.slug && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500"></span>
                  )}
                </button>
              </motion.li>
            ))}
          </motion.ul>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className='lg:hidden absolute top-16 left-0 w-full bg-white shadow-lg z-40 overflow-hidden'
              >
                <ul className='flex flex-col items-center py-4'>
                  {navItems.map((item, index) => (
                    <motion.li 
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className='w-full'
                    >
                      <button
                        onClick={() => {
                          navigate(item.slug);
                          setMenuOpen(false);
                        }}
                        className={`
                          w-full text-center py-3 px-6 my-1 mx-4 transition-all duration-200
                          ${item.name === 'Donate' 
                            ? 'bg-orange-500 text-white font-medium rounded-md shadow-md hover:bg-orange-600 hover:shadow-lg' 
                            : location.pathname === item.slug 
                              ? 'bg-orange-100 text-orange-500 rounded-md font-medium'
                              : 'hover:bg-gray-100 text-gray-700 rounded-md'}
                        `}
                      >
                        {item.name}
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
