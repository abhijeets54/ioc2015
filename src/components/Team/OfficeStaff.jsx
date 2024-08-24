import React from 'react';
import gurditSingh from '/IOC Website pictures/ioc website content/team/employees/Screenshot 2024-08-05 010302.png'; // Replace with actual path
import kashishGupta from '/IOC Website pictures/ioc website content/team/employees/Kashish Gupta.jpg'; // Replace with actual path

const OfficeStaff = () => {
  return (
    <div className="p-8 bg-white pt-15">
      <h2 className="text-center text-3xl font-bold mb-8">OFFICE TEAM</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center mt-5">
        <div className="text-center col-span-1 ml-44">
          <img className="w-48 h-48 mx-auto rounded-full object-cover" src={gurditSingh} alt="Gurdit Singh" />
          <h3 className="font-bold text-xl mt-4">GURDIT SINGH</h3>
          <p className="text-gray-700">OFFICE ADMIN</p>
        </div>
        <div className="text-center col-span-1 mr-40">
          <img className="w-48 h-48 mx-auto rounded-full object-cover" src={kashishGupta} alt="Kashish Gupta" />
          <h3 className="font-bold text-xl mt-4">KASHISH GUPTA</h3>
          <p className="text-gray-700">SOCIAL MEDIA</p>
        </div>
      </div>
    </div>
  );
};

export default OfficeStaff;
