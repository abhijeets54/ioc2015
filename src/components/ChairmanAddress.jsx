import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';

function ChairmanAddress() {
    const chairmanImage = '/IOC Website pictures/ioc website content/chairman/Copy of Copy of PHOTO-2024-01-29-17-11-57.jpg';
  return (
    <div className="mt-0">
      <div className="card border-0" style={{ backgroundColor: '#FF7F00', color: 'white' }}>
      <div className="row g-0 align-items-center">
      <div className="col-md-8 px-5 d-flex flex-column" style={{ minHeight: '350px' }}>
            <h3 className="card-title text-4xl mb-3 font-semibold">From Chairman's Desk</h3>
            <div className="para mt-4">
            <p className="card-text text-justify" style={{ fontSize: '2vh' }}>
              “Trust the young with the world and see them create wonders.” We at IOC have been extremely fortunate to have built a space for the youth to unlock their full potential and serve the society while creating a family for themselves. We don’t aim to become the biggest organisation in terms of numbers but rather we aspire to be the happiest and the most constructive place for the youth to become the leaders of tomorrow. In a world full of competition, there has to be a space where we focus on each other’s growth, where we focus on creating sustainable solutions for the less fortunate and where we build aspirations and achieve them together. Initiators of Change is just that space. I welcome you to our family, let’s heal the world together.
            </p>
            </div>
            <p className="card-text mt-4 align-self-end text-xl">
              <strong>-Gauravdeep Singh, Founder and Chairman</strong>
            </p>
          </div>
          <div className="col-md-4 bg-white shadow">
            <img
              src={chairmanImage} // Replace with the correct image path
              className="img-fluid rounded-start"
              alt="Gauravdeep Singh"
              style={{ padding: '10px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChairmanAddress;
