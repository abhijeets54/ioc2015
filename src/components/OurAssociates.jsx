import React from 'react';
import 'tailwindcss/tailwind.css';

const logos = [
  '/IOC Website pictures/associates/cicu.png',
  '/IOC Website pictures/associates/bigben.png',
  '/IOC Website pictures/associates/idfc.png',
  '/IOC Website pictures/associates/smtv.png',
  '/IOC Website pictures/associates/vipul.png',
  '/IOC Website pictures/associates/Election-Commission-Mar27-10.jpg',
  '/ggi.png',
  '/hero.png',
  '/lpu.png',
  '/avon.jpg',
  '/Vardhman.png'
];

function OurAssociates() {
  return (
    <div className="bg-gray-100 py-8">
      <h4 className="text-center text-orange-500 mt-3 text-2xl font-semibold">Meet our Partners</h4>
      
      <div className="overflow-hidden relative">
        <div className="flex animate-scroll1 space-x-4 sm:space-x-6 lg:space-x-8">
          {logos.concat(logos).map((logo, index) => (
            <div key={index} className="flex-shrink-0">
              <img 
                src={logo} 
                alt={`Logo ${index + 1}`} 
                className="h-24 w-24 sm:h-32 sm:w-32 lg:h-40 lg:w-40 object-contain" 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurAssociates;
