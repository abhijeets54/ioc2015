import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import ludhianaImage from '/IOC Website pictures/branches/ludhiana.jpg'; // Replace with actual path
import delhiImage from '/IOC Website pictures/branches/delhi.jpeg'; // Replace with actual path
import canadaImage from '/IOC Website pictures/branches/canada.jpeg'; // Replace with actual path

const Branches = () => {
  return (
    <div className="px-8 py-28  bg-white pt-12">
      <h2 className="text-center text-3xl font-bold mb-8">BRANCHES</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-center">
        <div className="text-center gap-8 col-span-1">
          <Link to="/Ludhiana">
            <img className="w-48 h-48 mx-auto rounded-full object-cover" src={ludhianaImage} alt="Ludhiana" />
          </Link>
          <h3 className="font-bold text-xl mt-4">LUDHIANA</h3>
        </div>
        <div className="text-center col-span-1">
          <Link to="/Delhi">
            <img className="w-48 h-48 mx-auto rounded-full object-cover" src={delhiImage} alt="Delhi" />
          </Link>
          <h3 className="font-bold text-xl mt-4">DELHI</h3>
        </div>
        <div className="text-center col-span-1">
          <Link to="/Canada">
            <img className="w-48 h-48 mx-auto rounded-full object-cover" src={canadaImage} alt="Canada" />
          </Link>
          <h3 className="font-bold text-xl mt-4">CANADA</h3>
        </div>
      </div>
    </div>
  );
};

export default Branches;
