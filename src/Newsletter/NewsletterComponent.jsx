import React from 'react';
import { useNavigate } from 'react-router-dom';
import juneImage from '../../src/assests/newsletter/june.png';
import julyImage from '../../src/assests/newsletter/july.jpeg';
import augustImage from '../../src/assests/newsletter/august.jpeg';

const NewsletterComponent = () => {
  const navigate = useNavigate();

  const handleReadMore = (path) => {
    navigate(path);
  };

  return (
    <div className="p-8 bg-white shadow-md rounded">
      <h2 className="text-center text-3xl font-bold mb-6">NEWSLETTERS</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded overflow-hidden shadow-lg p-4 flex flex-col">
          <img className="w-full h-fit object-scale-down" src={juneImage} alt="June Newsletter" />
          <div className="mt-4 flex-1">
            <h3 className="font-bold text-2xl mb-2">JUNE 2024</h3>
            <p className="text-gray-700 text-base mb-4">Usaari Free Evening School...</p>
          </div>
          <button
            className="text-orange-500 font-semibold mt-auto"
            onClick={() => handleReadMore('/newsletter/june-2024')}
          >
            ➔ Read More
          </button>
        </div>
        <div className="bg-white rounded overflow-hidden shadow-lg p-4 flex flex-col">
          <img className="w-full h-fit object-scale-down" src={julyImage} alt="July Newsletter" />
          <div className="mt-4 flex-1">
            <h3 className="font-bold text-2xl mb-2">JULY 2024</h3>
            <p className="text-gray-700 text-base mb-4">Mann Mela 2024...</p>
          </div>
          <button
            className="text-orange-500 font-semibold mt-auto"
            onClick={() => handleReadMore('/newsletter/july-2024')}
          >
            ➔ Read More
          </button>
        </div>
        <div className="bg-white rounded overflow-hidden shadow-lg p-4 flex flex-col">
          <img className="w-full  h-fit object-scale-down" src={augustImage} alt="August Newsletter" />
          <div className="mt-4 flex-1">
            <h3 className="font-bold text-2xl mb-2">AUGUST 2024</h3>
            <p className="text-gray-700 text-base mb-4">Will be released on 10th September.</p>
          </div>
          <button
            className="text-orange-500 font-semibold mt-auto"
            onClick={() => handleReadMore('/newsletter/august-2024')}
          >
            ➔ Read More
          </button>
        </div>
      </div>
      <div className="text-center mt-6">
        <button
          className="bg-orange-500 text-white py-2 px-4 rounded"
          onClick={() => handleReadMore('/newsletter')}
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default NewsletterComponent;
