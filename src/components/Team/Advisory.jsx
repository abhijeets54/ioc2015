import React from 'react';
import arshiaLekhi from '/IOC Website pictures/ioc website content/team/advisors/Arshia Lekhi.jpg'; // Replace with actual paths
import arshpreetKaur from '/IOC Website pictures/ioc website content/team/advisors/Arshpreet Kaur, Director.jpg';
import taranjotSingh from '/IOC Website pictures/ioc website content/team/advisors/Taranjot Singh.jpg';
import riaBharti from '/IOC Website pictures/ioc website content/team/advisors/Ria Bharti.jpg';
import raghavSachdeva from '/IOC Website pictures/ioc website content/team/advisors/Raghav Sachdeva.jpg';
import udayWadhwa from '/IOC Website pictures/ioc website content/team/advisors/Uday Wadhwa.jpg';
import tanushaArora from '/IOC Website pictures/ioc website content/team/advisors/Tanusha Arora.jpg';
import pankhuria from '/IOC Website pictures/ioc website content/team/advisors/Pankhuria.jpg';
import arshmadaan from '/IOC Website pictures/ioc website content/team/advisors/Arsh Madaan.jpg';

const Advisory = () => {
  return (
    <div className="p-8 bg-white">
      <h2 className="text-center text-3xl font-bold mb-8">ADVISORY BOARD</h2>
      <div className="grid grid-cols-1 gap-6 items-center">
        <div className="text-center col-span-1 md:col-span-3">
          <img className="w-48 h-48 mx-auto rounded-full object-cover" src={arshpreetKaur} alt="Arshpreet Kaur" />
          <h3 className="font-bold text-lg mt-4">ARSHPREET KAUR</h3>
          <p className="text-gray-700">DIRECTOR, ADVISORY BOARD</p>
        </div>

        <div className='flex flex-col'>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12 pb-10">
          <div className="text-center col-span-1">
            <img className="w-32 h-32 mx-auto rounded-full object-cover" src={arshiaLekhi} alt="Arshia Lekhi" />
            <h3 className="font-bold text-lg mt-4">ARSHIA LEKHI</h3>
            <p className="text-gray-700">BOARD MEMBER</p>
          </div>
          <div className="text-center col-span-1">
            <img className="w-32 h-32 mx-auto rounded-full object-cover" src={riaBharti} alt="Ria Bharti" />
            <h3 className="font-bold text-lg mt-4">RIA BHARTI</h3>
            <p className="text-gray-700">BOARD MEMBER</p>
          </div>
          <div className="text-center col-span-1">
            <img className="w-32 h-32 mx-auto rounded-full object-cover" src={taranjotSingh} alt="Taranjot Singh" />
            <h3 className="font-bold text-lg mt-4">TARANJOT SINGH</h3>
            <p className="text-gray-700">BOARD MEMBER</p>
          </div>
          <div className="text-center col-span-1">
            <img className="w-32 h-32 mx-auto rounded-full object-cover" src={arshmadaan} alt="Taranjot Singh" />
            <h3 className="font-bold text-lg mt-4">ARSH MADAAN</h3>
            <p className="text-gray-700">BOARD MEMBER</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12 pb-10">
          <div className="text-center col-span-1">
            <img className="w-32 h-32 mx-auto rounded-full object-cover" src={raghavSachdeva} alt="Raghav Sachdeva" />
            <h3 className="font-bold text-lg mt-4">RAGHAV SACHDEVA</h3>
            <p className="text-gray-700">BOARD MEMBER</p>
          </div>
          <div className="text-center col-span-1">
            <img className="w-32 h-32 mx-auto rounded-full object-cover" src={udayWadhwa} alt="Uday Wadhwa" />
            <h3 className="font-bold text-lg mt-4">UDAY WADHWA</h3>
            <p className="text-gray-700">BOARD MEMBER</p>
          </div>
          <div className="text-center col-span-1">
            <img className="w-32 h-32 mx-auto rounded-full object-cover" src={tanushaArora} alt="Tanusha Arora" />
            <h3 className="font-bold text-lg mt-4">TANUSHA ARORA</h3>
            <p className="text-gray-700">BOARD MEMBER</p>
          </div>
          <div className="text-center col-span-1">
            <img className="w-32 h-32 mx-auto rounded-full object-cover" src={pankhuria} alt="Pankhuria" />
            <h3 className="font-bold text-lg mt-4">PANKHURIA</h3>
            <p className="text-gray-700">BOARD MEMBER</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Advisory;
