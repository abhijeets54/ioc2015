import React from 'react';
import { Container, Logo } from '../index';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Home', slug: '/' },
    { name: 'About', slug: '/About' },
    { name: 'Projects', slug: '/Projects' },
    { name: 'Branches', slug: '/Branches' },
    { name: 'Team', slug: '/Team' },
    { name: 'Newsletter', slug: '/Newsletter' },
    { name: 'Join Us', slug: '/JoinUs' },
    { name: 'Donate', slug: '/Donate' },
  ];

  return (
    <header className='shadow bg-stone-50'>
      <div className="relative overflow-hidden bg-gray-800 text-gray-200 py-2">
        <div className="flex justify-between items-center whitespace-nowrap animate-scroll">
          <p className="mr-8">+91 87259-01502</p>
          <p className="mr-8">info@intitiatorsofchange@gmail.com</p>
          <div className="flex space-x-5">
            <a href="#" className="text-gray-400 hover:text-gray-100"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-gray-400 hover:text-gray-100"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-gray-400 hover:text-gray-100"><i className="fab fa-youtube"></i></a>
            <a href="#" className="text-gray-400 hover:text-gray-100"><i className="fas fa-envelope"></i></a>
            <a href="#" className="text-gray-400 hover:text-gray-100"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <Container>
        <nav className='py-3 flex mr-4 ml-3'>
          <div className='mr-3 ml-5 w-18 h-18'>
            <Link to='/'>
              <Logo className='w-full h-full object-contain' />
            </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => navigate(item.slug)}
                  className={`inline-block px-6 py-2 duration-200 hover:bg-blue-200 rounded-full ${location.pathname === item.slug ? 'bg-transparent border-2 border-gray-800 text-black' : ''}`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
