// src/components/Layout.jsx
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
  const navigate = useNavigate();

  const handleDonateClick = () => {
    navigate('/Donate');
  };

  return (
    <div>
      <Outlet />
      <a
        href="#top"
        className="fixed right-2 bottom-16 bg-orange-500 text-white py-1 px-2 rounded-2 h-8 w-10 mt-2"
        style={{ zIndex: 1000 }}
      >
        <img src="../../IOC Website pictures/icons8-top-50.png" alt="Go to top " />
      </a>
    </div>
  );
};

export default Layout;
