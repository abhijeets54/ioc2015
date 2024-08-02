import React from 'react';

const ContactUsFooter = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 p-6 ">
      <div className="container flex flex-col ml-10 md:flex-row items-center">
        {/*First div */}
        <div className="mb-4 md:mb-0">
          <p className="italic">“Recognise the whole human race as one”</p>
          <p className="mt-2">– Guru Gobind Singh Ji</p>
        </div>
        {/*Second div */}
        <div className="mb-4 md:mb-0 ml-7">
          <div className="text-center md:text-left">
            <p className="font-semibold">Initiators of Change</p>
            <p>1st Floor, Food tree building</p>
            <p>Flower Enclave, Dugri</p>
            <p>Near Goyal Hospital, Ludhiana-14013, Punjab</p>
            <p className="mt-3">+91 87259-01502</p>
            <p className="mt-3">info@intitiatorsofchange@gmail.com</p>
          </div>
        </div>
        {/*Third div */}
        <div className="text-center ml-5 md:text-center">
          <p className="mb-2 px-8">For all enquiries regarding volunteering, fundraising and any other help, please contact:</p>
          <p>info@intitiatorsofchange@gmail.com</p>
          <div className="flex justify-center md:justify-center space-x-5 mt-2">
            <a href="#" className="text-gray-400 hover:text-gray-100"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-gray-400 hover:text-gray-100"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-gray-400 hover:text-gray-100"><i className="fab fa-youtube"></i></a>
            <a href="#" className="text-gray-400 hover:text-gray-100"><i className="fas fa-envelope"></i></a>
            <a href="#" className="text-gray-400 hover:text-gray-100"><i className="fab fa-instagram"></i></a>
          </div>
          <p className="mt-4">Our privacy policy and Terms.</p>
        </div>
      </div>
      <div className="text-center mt-5 ">
        <p>All rights reserved © Initiators of  Change </p>
      </div>
    </footer>
  );
};

export default ContactUsFooter;
