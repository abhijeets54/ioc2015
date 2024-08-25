import React from 'react';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

function ThreePillars() {
  const awarenessImageUrl = '/IOC Website pictures/ioc website content/three pillars/Awareness cover.jpg'; 
  const educationImageUrl = '/IOC Website pictures/ioc website content/three pillars/Education cover.jpg';
  const humanitarianImageUrl = '/IOC Website pictures/ioc website content/three pillars/Humanitarian aid cover.jpg';

  return (
    <div className="mx-auto bg-slate-100 p-6 shadow">
      <h4 className="text-center text-orange-500 mt-3 text-xl"></h4>
      <h2 className="text-center text-4xl mt-3 font-bold mb-16">Three Pillars of IOC</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/*First card */}
        <div className="col cursor-pointer transform transition-transform hover:scale-105">
          <Link to="/Education">
            <div className="card h-full bg-white rounded-lg shadow overflow-hidden">
              <img src={educationImageUrl} className="w-full h-72 object-cover" alt="Education Projects" />
              <div className="p-4">
                <h5 className="text-center text-xl font-bold">Education</h5>
              </div>
            </div>
          </Link>
        </div>
        {/*Second card */}
                <div className="col cursor-pointer transform transition-transform hover:scale-105">
          <Link to="/Awareness">
            <div className="card h-full bg-white rounded-lg shadow overflow-hidden">
              <img src={awarenessImageUrl} className="w-full h-72 object-cover" alt="Awareness Projects" />
              <div className="p-4">
                <h5 className="text-center text-xl font-bold">Awareness</h5>
              </div>
            </div>
          </Link>
        </div>
        <div className="col cursor-pointer transform transition-transform hover:scale-105">
          <Link to="/HumanitarianAid">
            <div className="card h-full bg-white rounded-lg shadow overflow-hidden">
              <img src={humanitarianImageUrl} className="w-full h-72 object-cover" alt="Humanitarian Projects" />
              <div className="p-4">
                <h5 className="text-center text-xl font-bold">Humanitarian Aid </h5>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ThreePillars;
