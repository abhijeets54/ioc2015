import React from 'react';
import { Container, Logo } from '../index';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const navItems = [
    {
      name: 'Home',
      slug: '/',
      active: true,
    },
    {
      name: 'About',
      slug: '/About',
      active: true, // Assuming the "Add Post" page is available
    },
    {
      name: 'Projects',
      slug: '/Projects',
      active: true, // Assuming the "Add Post" page is available
    },
    {
      name: 'Branches',
      slug: '/Branches',
      active: true, // Assuming the "Add Post" page is available
    },
    {
      name: 'Team',
      slug: '/Team',
      active: true, // Assuming the "Add Post" page is available
    },
    {
      name: 'Newsletter',
      slug: '/Newsletter',
      active: true, // Assuming the "Add Post" page is available
    },
    {
      name: 'Careers',
      slug: '/Careers',
      active: true, // Assuming the "Add Post" page is available
    },
    {
      name: 'Donate',
      slug: '/Donate',
      active: true, // Assuming the "Add Post" page is available
    },

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
        <nav className=' py-3 flex'>
          <div className='mr-4 '>
            <Link to='/'>
              <Logo width='70px' />
            </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className='inline-block px-6 py-2 duration-200 hover:bg-blue-200 rounded-full'
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
