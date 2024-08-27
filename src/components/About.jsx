import React, { useState, useEffect } from 'react';
import imageUrl from '/IOC Website pictures/ioc website content/About us/team.png';
import Trust from './Team/Trustee';
import Advisory from './Team/Advisory';
import Media from './Team/Media';
import OfficeStaff from './Team/OfficeStaff';
import { CSSTransition } from 'react-transition-group';
import jappanjotSingh from '/IOC Website pictures/ioc website content/team/teamheads/jappan.png';
import vidhiKaushal from '/IOC Website pictures/ioc website content/team/teamheads/vidhi.png';
import ajeetsingh from '/IOC Website pictures/ioc website content/team/teamheads/ajeet.png';
import jasleen from '/IOC Website pictures/ioc website content/team/teamheads/jasleen.png';
import muskanmeet from '/IOC Website pictures/ioc website content/team/teamheads/muskan.png';
import manveet from '/IOC Website pictures/ioc website content/team/teamheads/Screenshot 2024-08-05 014343.png';
import ludhianaImage from '/IOC Website pictures/branches/ludhiana.jpg'; 
import delhiImage from '/IOC Website pictures/branches/delhi.jpeg'; 
import canadaImage from '/IOC Website pictures/branches/canada.jpeg';

function About() {
  const [showFullText, setShowFullText] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [activeBranch, setActiveBranch] = useState(null);

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleMoreAboutUs = () => {
    setShowFullText(!showFullText);
  };

  const handleSectionClick = (section) => {
    setActiveSection(activeSection === section ? null : section);
    setActiveBranch(null); 
  };

  const handleBranchClick = (branch) => {
    setActiveBranch(activeBranch === branch ? null : branch);
  };

  const isActive = (section) => (activeSection === section ? 'bg-blue-200 text-black font-bold' : 'text-black');

  return (
    <>
      <div className="flex flex-col items-center mt-0 bg-white pb-8">
        <div className="w-full max-w-6xl">
          <div className="border-0">
            <div className="w-full">
              <img
                src={imageUrl}
                className="w-full h-full object-cover rounded-start shadow-lg rounded-md mt-5"
                alt="Initiators of Change Team"
              />
            </div>
            <div className="w-full px-4 py-6 flex flex-col justify-center" id="about-us">
              <div className="card-body">
                <h4 className="text-4xl mb-3">About Us</h4>
                <p className={`text-justify mb-3 ${!showFullText ? 'line-clamp-3' : ''}`}>
                  Welcome to Initiators of Change, where Punjab's youth are driving dynamic and impactful change. Since our establishment in 2015, we've been on a mission to cultivate a new generation of people who are socially active and aware. Through our three pillars of action—awareness, humanitarian aid, and education—we're making a tangible difference for the youth.
                </p>
                {showFullText && (
                  <>
                    <p className="text-justify mb-3">
                      This Punjab-based youth development non-profit organization was established in 2015 with a vision to create young and energetic leaders for the country. Initiators of Change have been working with Ludhiana District Administration and Municipal Corporation on various social projects.
                    </p>
                    <p className="text-justify mb-3">
                      The organization has successfully organized various youth conferences in various cities in Punjab and north India and has impacted millions. In the realm of awareness, we believe in the power of knowledge to drive meaningful action. Our initiatives, such as "I Vote, I Lead," Project Saanjh, and SMYC, empower individuals with the information they need to make informed decisions about voting, mental health, and more.
                    </p>
                    <p className="text-justify mb-3">
                      From providing essential relief during the COVID-19 pandemic to responding swiftly to natural disasters like floods, our goal is to stand by those in need and offer immediate support. Education is the cornerstone of our vision for a brighter future. Through projects like Project Usaari and the Usaari Youth Fest, we're breaking down educational barriers and fostering a culture of learning for all backgrounds.
                    </p>
                    <p className="text-justify mb-3">
                      Join us in our mission to drive change and empower others through education. At Initiators of Change, there's a place for everyone who shares our vision of a world where everyone has the opportunity to thrive. Together, let's build a better future for all.
                    </p>
                  </>
                )}
                <button className="btn bg-orange-500 btn-danger mt-4" onClick={handleMoreAboutUs}>
                  {showFullText ? 'Show Less' : 'Read more'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="w-full justify-center mx-auto bg-white">
        <div className="px-4 py-8 bg-white">
          <h2 className="text-3xl font-bold text-center mb-6">Our Team</h2>

          <div className="flex flex-col space-y-4 items-start mb-6">
            <div>
              <button
                className={`flex items-center  w-full text-left p-4 ${isActive('Branches')}`}
                onClick={() => handleSectionClick('Branches')}
              >
                <span className="mr-2 ">➤</span> Branches
              </button>
              <CSSTransition
                in={activeSection === 'Branches'}
                timeout={300}
                classNames="slide"
                unmountOnExit
              >
                <div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
                    <div className="text-center col-span-1">
                      <button onClick={() => handleBranchClick('Ludhiana')}>
                        <img className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto rounded-full object-cover" src={ludhianaImage} alt="Ludhiana" />
                        <h3 className="font-bold text-lg sm:text-xl md:text-2xl mt-4">LUDHIANA</h3>
                      </button>
                      <CSSTransition
                        in={activeBranch === 'Ludhiana'}
                        timeout={300}
                        classNames="slide"
                        unmountOnExit
                      >
                        <div>
                         
                          <div className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-8 md:space-x-16">
                            <div className="text-center">
                              <img className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto rounded-full object-cover" src={jappanjotSingh} alt="Jappanjot Singh" />
                              <h3 className="font-bold text-lg sm:text-xl md:text-2xl mt-4">JAPPANJOT SINGH</h3>
                              <p className="text-gray-700">PRESIDENT</p>
                            </div>
                            <div className="text-center">
                              <img className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto rounded-full object-cover" src={vidhiKaushal} alt="Vidhi Kaushal" />
                              <h3 className="font-bold text-lg sm:text-xl md:text-2xl mt-4">VIDHI KAUSHAL</h3>
                              <p className="text-gray-700">VICE-PRESIDENT</p>
                            </div>
                          </div>
                        </div>
                      </CSSTransition>
                    </div>

                    <div className="text-center justify-center col-span-1">
                      <button onClick={() => handleBranchClick('Delhi')}>
                        <img className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto rounded-full object-cover" src={delhiImage} alt="Delhi" />
                        <h3 className="font-bold text-lg sm:text-xl md:text-2xl mt-4">DELHI</h3>
                      </button>
                      <CSSTransition
                        in={activeBranch === 'Delhi'}
                        timeout={300}
                        classNames="slide"
                        unmountOnExit
                      >
                        <div>
                         
                          <div className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-8 md:space-x-16">
                            <div className="text-center">
                              <img className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto rounded-full object-cover" src={jasleen} alt="Jasleen" />
                              <h3 className="font-bold text-lg sm:text-xl md:text-2xl mt-4">JASLEEN KAUR</h3>
                              <p className="text-gray-700">BRANCH HEAD</p>
                            </div>
                            <div className="text-center">
                              <img className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto rounded-full object-cover" src={ajeetsingh} alt="Ajeet Singh" />
                              <h3 className="font-bold text-lg sm:text-xl md:text-2xl mt-4">AJEET SINGH</h3>
                              <p className="text-gray-700">VICE-BRANCH HEAD</p>
                            </div>
                          </div>
                        </div>
                      </CSSTransition>
                    </div>

                    <div className="text-center justify-center col-span-1">
                      <button onClick={() => handleBranchClick('Canada')}>
                        <img className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto rounded-full object-cover" src={canadaImage} alt="Canada" />
                        <h3 className="font-bold text-lg sm:text-xl md:text-2xl mt-4">CANADA</h3>
                      </button>
                      <CSSTransition
                        in={activeBranch === 'Canada'}
                        timeout={300}
                        classNames="slide"
                        unmountOnExit
                      >
                        <div>
                         
                          <div className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-8 md:space-x-16">
                            <div className="text-center">
                              <img className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto rounded-full object-cover" src={muskanmeet} alt="Muskanmeet" />
                              <h3 className="font-bold text-lg sm:text-xl md:text-2xl mt-4">MUSKANMEET</h3>
                              <p className="text-gray-700">BRANCH HEAD</p>
                            </div>
                            <div className="text-center">
                              <img className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto rounded-full object-cover" src={manveet} alt="Manveet" />
                              <h3 className="font-bold text-lg sm:text-xl md:text-2xl mt-4">MANVEET</h3>
                              <p className="text-gray-700">VICE-BRANCH HEAD</p>
                            </div>
                          </div>
                        </div>
                      </CSSTransition>
                    </div>
                  </div>
                </div>
              </CSSTransition>
            </div>

            <button
              className={`flex items-center  w-full text-left p-4 ${isActive('Trustee')}`}
              onClick={() => handleSectionClick('Trustee')}
            >
              <span className="mr-2">➤</span> Trustee
            </button>
            <CSSTransition
              in={activeSection === 'Trustee'}
              timeout={300}
              classNames="slide"
              unmountOnExit
            >
              <Trust />
            </CSSTransition>

            <button
              className={`flex items-center w-full text-left p-4 ${isActive('Advisory')}`}
              onClick={() => handleSectionClick('Advisory')}
            >
              <span className="mr-2">➤</span> Advisory
            </button>
            <CSSTransition
              in={activeSection === 'Advisory'}
              timeout={300}
              classNames="slide"
              unmountOnExit
            >
              <Advisory />
            </CSSTransition>

            <button
              className={`flex items-center  w-full text-left p-4 ${isActive('Media')}`}
              onClick={() => handleSectionClick('Media')}
            >
              <span className="mr-2">➤</span> Media
            </button>
            <CSSTransition
              in={activeSection === 'Media'}
              timeout={300}
              classNames="slide"
              unmountOnExit
            >
              <Media />
            </CSSTransition>

            <button
              className={`flex items-center w-full text-left p-4 ${isActive('OfficeStaff')}`}
              onClick={() => handleSectionClick('OfficeStaff')}
            >
              <span className="mr-2">➤</span> Office Staff
            </button>
            <CSSTransition
              in={activeSection === 'OfficeStaff'}
              timeout={300}
              classNames="slide"
              unmountOnExit
            >
              <OfficeStaff />
            </CSSTransition>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
