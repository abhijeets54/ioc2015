import React from 'react';
import restOfWorldImage from '../../assests/newsletter/restoftheworld.jpg'; // Update the path to the correct image

const RestOfWorld = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-5 space-y-6 bg-white">
      <div className="relative w-32 h-32 overflow-hidden rounded-full mb-2 mt-3">
        <img
          src={restOfWorldImage}
          alt="Rest of the World"
          className="absolute w-full h-full object-cover transform scale-125" // Adjust to cover the container
        />
      </div>
      <p className="text-2xl font-semibold mt-2">Rest of the World</p>
      <p className="text-center mt-3 mb-5">
        We will soon be accepting donations from the rest of the globe.
        <br />
        <span>Stay tuned for more information or you can call on +91 87259-01502</span>
      </p>
    </div>
  );
};

export default RestOfWorld;
