import React from 'react';
import jappanjotSingh from '/IOC Website pictures/ioc website content/team/teamheads/jappan.png'; // Replace with actual path
import vidhiKaushal from '/IOC Website pictures/ioc website content/team/teamheads/vidhi.png'; // Replace with actual path

const Ludhiana = () => {
  return (
    <div className="p-8 bg-white pt-15">
      <h2 className="text-center text-3xl font-bold mb-8">BRANCH HEADS</h2>
      <div className="text-center text-2xl font-semibold mb-6">LUDHIANA</div>
      <div className="flex justify-center space-x-64">
        <div className="text-center">
          <img className="w-48 h-48 mx-auto rounded-full object-cover" src={jappanjotSingh} alt="Jappanjot Singh" />
          <h3 className="font-bold text-xl mt-4">JAPPANJOT SINGH</h3>
          <p className="text-gray-700">PRESIDENT</p>
        </div>
        <div className="text-center">
          <img className="w-48 h-48 mx-auto rounded-full object-cover" src={vidhiKaushal} alt="Vidhi Kaushal" />
          <h3 className="font-bold text-xl mt-4">VIDHI KAUSHAL</h3>
          <p className="text-gray-700">VICE-PRESIDENT</p>
        </div>
      </div>
    </div>
  );
};

export default Ludhiana;
