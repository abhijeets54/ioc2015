import React from 'react';
import neerajJolly from '/IOC Website pictures/ioc website content/team/media head/Screenshot 2024-08-05 004725.png'; // Replace with actual path

const Media = () => {
  return (
    <div className="p-8 bg-white">
      <h2 className="text-center text-3xl font-bold mb-8">MEDIA</h2>
      <div className="flex justify-center items-center">
        <div className="text-center col-span-1">
          <img className="w-48 h-48 mx-auto rounded-full object-cover" src={neerajJolly} alt="Neeraj Jolly" />
          <h3 className="font-bold text-xl mt-4">NEERAJ JOLLY</h3>
          <p className="text-gray-700">DIRECTOR, DIGITAL OPERATIONS</p>
        </div>
      </div>
    </div>
  );
};

export default Media;
