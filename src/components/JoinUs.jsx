import React from 'react';

const JoinUs = () => {
  return (
    <div className="p-6  pb-12 bg-white">
      <h1 className="text-center text-2xl font-semibold mb-4">Join Us</h1>
      <p className="text-center mb-4">Stay tuned for our latest updates and notifications of induction in your area on our Instagram page!</p>
      
      {/* Instagram Post Embeds */}
      <div className="flex flex-row items-center justify-center">
        <div className="mr-6 border-4 shadow border-white rounded-md">
          {/* Replace 'INSTAGRAM_POST_URL_1' with the actual URL of the Instagram post */}
          <iframe
            src="https://www.instagram.com/p/C-MtIyhyaj0/embed"
            width="400"
            height="480"
            frameBorder="1"
            scrolling="yes"
            className="w-full max-w-xs"
          ></iframe>
        </div>
        <div className="ml-6 shadow border-4 border-white rounded-md">
          {/* Replace 'INSTAGRAM_POST_URL_2' with the actual URL of the Instagram post */}
          <iframe
            src="https://www.instagram.com/p/C42SMPvvsrY/embed"
            width="400"
            height="480"
            frameBorder="0"
            scrolling="yes"
            className="w-full max-w-xs"
          ></iframe>
        </div>
        {/* Add more posts as needed */}
      </div>
    </div>
  );
};

export default JoinUs;
