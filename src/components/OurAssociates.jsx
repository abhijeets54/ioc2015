import React from 'react';
import 'tailwindcss/tailwind.css';

const logos = [
  '/IOC Website pictures/associates/cicu.webp',
  '/IOC Website pictures/associates/bigben.webp',
  '/IOC Website pictures/associates/idfc.webp',
  '/IOC Website pictures/associates/smtv.webp',
  '/IOC Website pictures/associates/vipul.webp',
  '/IOC Website pictures/associates/Election-Commission-Mar27-10.webp',
  '/ggi.webp',
  '/hero.webp',
  '/lpu.webp',
  '/avon.webp',
  '/Vardhman.webp'
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
