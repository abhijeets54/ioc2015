import React from 'react';
import { useNavigate } from 'react-router-dom';
import withinIndiaImage from '../../assests/newsletter/india.png'; // Ensure the path to the image is correct
import restOfWorldImage from '../../assests/newsletter/restoftheworld.jpg'; // Ensure the path to the image is correct

const DonateComponent = () => {
  const navigate = useNavigate();

  const handleRedirect = (path) => {
    navigate(path);
  };

  return (
    <div className="p-8 bg-white shadow-md rounded">
      <h1 className="text-center text-3xl font-bold mb-6">SUPPORT US</h1>
      <div className="p-4 text-center">
        <p className="mb-4">
          Your donation towards Initiators of Change is instrumental in supporting our humanitarian projects around the globe. You can use the methods below to donate:
        </p>
        <p className="mb-4 font-medium">
          To support our initiatives regularly, you can become a monthly donor. <a href="https://forms.gle/aG5Rrq5MKDfbmdZB7" target="_blank" rel="noopener noreferrer" className="text-blue-500">Click here</a> to fill out the Google Form. Please drop us a message at +91 8725901502 after completing the form.
        </p>
        <div className="bg-gray-200 p-4 rounded mb-6">
          <p>
            The safest way to donate to Initiators of Change is through online payment or by cheque. If you are approached for a cash donation without the donation slip for Initiators of Change, please contact us, as this may be fraudulent. All Initiators of Change fundraising activities are listed on this website.
          </p>
        </div>
      </div>
      <h2 className="text-center text-xl font-bold mb-6">Where are you donating from</h2>

      <div className="flex justify-center space-x-6">
       {/* <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => handleRedirect('/RestOfWorld')}
        >
          <div className="relative w-24 h-24 overflow-hidden rounded-full mb-2">
            <img
              src={restOfWorldImage}
              alt="Rest of the World"
              className="absolute w-full h-full object-cover transform scale-125" // Adjust to cover the container
            />
          </div>
          <p className="text-lg">Rest of the World</p>
        </div> */}

        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => handleRedirect('/WithinIndia')}
        >
          <div className="relative w-24 h-24 overflow-hidden rounded-full mb-2">
            <img
              src={withinIndiaImage}
              alt="Within India"
              className="absolute w-full h-full object-cover transform scale-125" // Adjust to cover the container
            />
          </div>
          <p className="text-lg">Within India</p>
        </div>
      </div>
    </div>
  );
};

export default DonateComponent;
