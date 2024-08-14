import React from 'react';
import ajeetsingh from '/IOC Website pictures/ioc website content/team/teamheads/ajeet.png'; // Replace with actual path
import jasleen from '/IOC Website pictures/ioc website content/team/teamheads/jasleen.png'; // Replace with actual path

const Delhi1 = () => {
  return (
    <div className="p-8 bg-white pt-15">
      {/*<h2 className="text-center text-3xl font-bold mb-8">BRANCH HEADS</h2>*/}
      <div className="text-center text-2xl font-semibold mb-6">Delhi</div>
      <div className="flex justify-center space-x-64">
        <div className="text-center">
          <img className="w-48 h-48 mx-auto rounded-full object-cover" src={ajeetsingh} alt="Ajeet Singh" />
          <h3 className="font-bold text-xl mt-4">AJEET SINGH</h3>
          <p className="text-gray-700">PRESIDENT</p>
        </div>
        <div className="text-center">
          <img className="w-48 h-48 mx-auto rounded-full object-cover" src={jasleen} alt="jasleen" />
          <h3 className="font-bold text-xl mt-4">JASLEEN</h3>
          <p className="text-gray-700">VICE-PRESIDENT</p>
        </div>
      </div>
    </div>
  );
};

export default Delhi1;
