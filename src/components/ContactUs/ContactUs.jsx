import React, { useState, useEffect } from 'react';

const ContactUsFooter = () => {
  const [visitors, setVisitors] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the visitors count from the API
    const fetchVisitors = async () => {
      try {
        const response = await fetch('http://localhost:3001/visitors');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setVisitors(data.count);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchVisitors();
  }, []); // Empty dependency array ensures this runs only once

  return (
    <footer className="bg-gray-800 text-gray-200 py-8 relative">
      <div className="flex flex-col justify-between ml-10 md:flex-row items-center">
        {/* First div */}
        <div className="mb-4 ml-8 md:mb-0">
          <p className="italic">“Recognise the whole human race as one”</p>
          <p className="mt-2">– Guru Gobind Singh Ji</p>
        </div>
        {/* Second div */}
        <div className="mb-4 md:mb-0 ml-10">
          <div className="text-center md:text-left">
            <p className="font-semibold">Initiators of Change</p>
            {/*<p>1st Floor, Food tree building</p>
            <p>Flower Enclave, Dugri</p>
            <p>Near Goyal Hospital, Ludhiana-14013, Punjab</p>*/}
            <p className="mt-1">+91 87259-01502</p>
            <p className="mt-1">info@intitiatorsofchange@gmail.com</p>
          </div>
        </div>
        {/* Third div */}
        <div className="text-center ml-5 md:text-center mr-16">
          <p className="mb-1 pl-8">For all enquiries regarding volunteering, fundraising and any other help, </p>
            <p>please contact:</p>
          <p>info@intitiatorsofchange@gmail.com</p>
          <div className="flex justify-center md:justify-center space-x-5 mt-2">
            <a href="https://www.facebook.com/initiatorsofchange/" className="text-gray-400  hover:text-gray-100" target='_blank' rel='noreferrer' ><i className="fab fa-facebook-f "></i></a>
            {/*<a href="#" className="text-gray-400 hover:text-gray-100"><i className="fab fa-twitter"></i></a>*/}
            <a href="https://www.youtube.com/@initiatorsofchange5173" className="text-gray-400 hover:text-gray-100" target='_blank' rel='noreferrer' ><i className="fab fa-youtube"></i></a>
            {/*<a href="#" className="text-gray-400 hover:text-gray-100"><i className="fas fa-envelope"></i></a>*/}
            <a href="https://www.instagram.com/initiatorsofchange_/"  target='_blank' rel='noreferrer' className="text-gray-400 hover:text-gray-100"><i className="fab fa-instagram"></i></a>
          </div>
          {/*<p className="mt-4">Our privacy policy and Terms.</p>*/}
        </div>
      </div>

      {/* Location element */}
      <div className="container mt-8 flex justify-center">
        <div className="bg-white p-4 rounded shadow-md text-gray-800 w-full md:w-2/3 lg:w-1/2">
          <h2 className="text-lg font-semibold mb-4 text-center">Our Location</h2>
          <div className="mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3424.7881207464957!2d75.82409717536689!3d30.864606574521005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a82245dd70c71%3A0x2f54c026ccb2a200!2sInitiators%20Of%20Change!5e0!3m2!1sen!2sin!4v1722874786128!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="text-center">
            <p>Initiators Of Change</p>
            <p>1st Floor, Food tree building, Flower Enclave, Dugri, Near Goyal Hospital, Ludhiana-14013, Punjab</p>
            <p className="text-gray-600">4.8 stars, 83 reviews</p>
          </div>
        </div>
      </div>

      <div className="text-center mb-2 mt-5">
        <p className='mb-1'>All rights reserved © Initiators of Change.</p>
          <p>Made with love in India by Gurdit Singh under Class101. </p> 
      </div>
      
      {/* Visitors count */}
      <div className="visitors-count absolute bottom-0 right-8 mb-6 mr-6 text-orange-500 text-5xl font-semibold">
        {loading ? 'Loading...' : error ? 'Error fetching visitors' : (
          <div className="flex flex-col items-center">
            <span className="leading-none">{visitors.toLocaleString()}</span>
            <span className="text-white text-xs mt-1 leading-none">Visitors</span>
          </div>
        )}
      </div>
    </footer>
  );
};

export default ContactUsFooter;
