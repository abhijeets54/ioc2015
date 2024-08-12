import React from 'react';
import 'tailwindcss/tailwind.css';

// Placeholder URLs for the logos
const logos = [
  '../../IOC Website pictures/associates/cicu.png',
  '../../IOC Website pictures/associates/bigben.png',
  '../../IOC Website pictures/associates/deleciousbites.png',
  '../../IOC Website pictures/associates/idfc.png',
  '../../IOC Website pictures/associates/smtv.png',
  '../../IOC Website pictures/associates/vipul.png',
  '../../IOC Website pictures/associates/Election-Commission-Mar27-10.jpg',
];

function OurAssociates() {
  return (
    <div className="bg-gray-100 py-8">
      <h4 className="text-center text-orange-500 mt-3 text-xl">Meet our Partners</h4>
      <h2 className="text-center text-4xl mt-3 font-bold mb-16">Offical Partners</h2>
      <div className="overflow-hidden relative">
        <div className="flex animate-scroll1 space-x-8">
          {logos.concat(logos).map((logo, index) => (
            <div key={index} className="flex-shrink-0">
              <img src={logo} alt={`Logo ${index + 1}`} className="h-40 w-40 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurAssociates;
