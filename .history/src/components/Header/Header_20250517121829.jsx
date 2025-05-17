import React, { useState } from 'react';
import { Container, Logo } from '../index';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing icons for the hamburger menu

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
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

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className='shadow bg-stone-50 fixed top-0 left-0 w-full z-50'>
      <Container>
        <nav className='py-3 flex justify-between items-center'>
          <div className='mr-3 ml-5 w-18 h-18'>
            <button onClick={() => navigate('/')} className='focus:outline-none'>
              <Logo className='w-full h-full object-contain' />
            </button>
          </div>
          
          
          <div className='lg:hidden mr-5'>
            <button onClick={toggleMenu} className='text-black focus:outline-none'>
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

         
          <ul className='hidden lg:flex ml-auto'>
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick= {() => navigate(item.slug)}
                  className={`inline-block px-6 py-2 duration-200 hover:bg-blue-200 rounded-full ${
                    location.pathname === item.slug ? 'bg-transparent border-2 border-gray-800 text-black' : ''
                  }`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          
          {menuOpen && (
            <ul className='lg:hidden absolute top-16 left-0 w-full bg-stone-50 shadow-md flex flex-col items-center space-y-4 py-6 z-40'>
              {navItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => {
                      navigate(item.slug);
                      setMenuOpen(false); 
                    }}
                    className={`inline-block px-6 py-2 duration-200 hover:bg-blue-200 rounded-full ${
                      location.pathname === item.slug ? 'bg-transparent border-2 border-gray-800 text-black' : ''
                    }`}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </Container>
    </header>
  );
}

export default Header;
