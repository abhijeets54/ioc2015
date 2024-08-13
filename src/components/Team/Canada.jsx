import React from 'react';
import muskanmeet from '/IOC Website pictures/ioc website content/team/teamheads/muskan.png'; // Replace with actual path
import manveet from '/IOC Website pictures/ioc website content/team/teamheads/Screenshot 2024-08-05 014343.png'; // Replace with actual path

const Canada = () => {
  return (
    <div className="px-8 bg-white py-12">
      {/*<h2 className="text-center text-3xl font-bold mb-8">BRANCH HEADS</h2>*/}
      <div className="text-center text-2xl font-semibold mb-6">Canada</div>
      <div className="flex justify-center space-x-64">
        <div className="text-center">
          <img className="w-48 h-48 mx-auto rounded-full object-cover" src={muskanmeet} alt="Ajeet Singh" />
          <h3 className="font-bold text-xl mt-4">MUSKANMEET KAUR</h3>
          <p className="text-gray-700">PRESIDENT</p>
        </div>
        <div className="text-center">
          <img className="w-48 h-48 mx-auto rounded-full object-cover" src={manveet} alt="manveet" />
          <h3 className="font-bold text-xl mt-4">MANVEET KAUR</h3>
          <p className="text-gray-700">VICE-PRESIDENT</p>
        </div>
      </div>
    </div>
  );
};

export default Canada;
