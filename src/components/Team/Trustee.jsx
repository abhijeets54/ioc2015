import React from 'react';
import tavleenKaur from '/IOC Website pictures/ioc website content/team/trustees/TAVLEEN.png';
import harshleenKaur from '/IOC Website pictures/ioc website content/team/our patron/Harshleen Kaur.jpg';
import reetSingh from '/IOC Website pictures/ioc website content/team/trustees/Reet Singh.jpg';
import trishmeetKaur from '/IOC Website pictures/ioc website content/team/trustees/Copy of Copy of PHOTO-2024-01-29-17-20-46.jpg';
import samridhiSharma from '/IOC Website pictures/ioc website content/team/trustees/Samridhi Sharma.jpg';
import mithilGoyal from '/IOC Website pictures/ioc website content/team/trustees/MITHIL.png';
import premSingh from '/IOC Website pictures/ioc website content/team/trustees/PREM.png';

const Trust = () => {
  return (
    <div className="p-8 bg-white">
      <h2 className="text-center text-4xl font-bold mb-8">TRUST BOARD</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        <div className="hidden md:block"></div> {/* Empty div to help with centering */}
        <div className="text-center col-span-1 md:col-span-1">
          <img className="w-48 h-48 mx-auto rounded-full object-cover" src={harshleenKaur} alt="Harshleen Kaur" />
          <h3 className="font-bold text-2xl mt-4">HARSHLEEN KAUR</h3>
          <p className="text-gray-700 text-lg">OUR PATRON</p>
        </div>
        <div className="hidden md:block"></div> {/* Empty div to help with centering */}
        
        <div className="text-center">
          <img className="w-32 h-32 mx-auto rounded-full object-cover" src={tavleenKaur} alt="Tavleen Kaur" />
          <h3 className="font-bold text-lg mt-4">TAVLEEN KAUR</h3>
          <p className="text-gray-700">TRUSTEE</p>
        </div>
        <div className="text-center">
          <img className="w-32 h-32 mx-auto rounded-full object-cover" src={reetSingh} alt="Reet Singh" />
          <h3 className="font-bold text-lg mt-4">REET SINGH</h3>
          <p className="text-gray-700">TRUSTEE</p>
        </div>
        <div className="text-center">
          <img className="w-32 h-32 mx-auto rounded-full object-cover" src={trishmeetKaur} alt="Trishmeet Kaur" />
          <h3 className="font-bold text-lg mt-4">TRISHMEET KAUR</h3>
          <p className="text-gray-700">TRUSTEE</p>
        </div>
        <div className="text-center">
          <img className="w-32 h-32 mx-auto rounded-full object-cover" src={samridhiSharma} alt="Samridhi Sharma" />
          <h3 className="font-bold text-lg mt-4">SAMRIDHI SHARMA</h3>
          <p className="text-gray-700">TRUSTEE</p>
        </div>
        <div className="text-center">
          <img className="w-32 h-32 mx-auto rounded-full object-cover" src={mithilGoyal} alt="Mithil Goyal" />
          <h3 className="font-bold text-lg mt-4">MITHIL GOYAL</h3>
          <p className="text-gray-700">TRUSTEE</p>
        </div>
        <div className="text-center">
          <img className="w-32 h-32 mx-auto rounded-full object-cover" src={premSingh} alt="Prem Singh" />
          <h3 className="font-bold text-lg mt-4">PREM SINGH</h3>
          <p className="text-gray-700">TRUSTEE</p>
        </div>
      </div>
    </div>
  );
};

export default Trust;
