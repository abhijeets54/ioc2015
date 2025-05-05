import React from 'react';
import logo from '../assests/newsletter/cropped ioc logo.jpg'; // Using original JPG file
import OptimizedImage from './common/OptimizedImage';

function Logo() {
  return (
    <div>
      <OptimizedImage src={logo} alt="logo" height={75} width={75}/>
    </div>
  );
}

export default Logo;
