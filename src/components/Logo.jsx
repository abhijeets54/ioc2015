import React from 'react';
import logo from '../assests/newsletter/cropped ioc logo.jpg'; // Adjust path as necessary

function Logo() {
  return (
    <div>
      <img src={logo} alt="logo" height={75} width={75}/>
    </div>
  );
}

export default Logo;
