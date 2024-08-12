/*import React from 'react';

const projects = [
  {
    name: "KISAAN MORCHA",
    description: "During the farmers' protest, over 2 lakh protestors came together to oppose the Farmers Bill, but sadly, 800 people lost their lives. Team IOC provided on-the-ground support by setting up medical camps, shelters, and Langar Sewa at the Singhu Border...",
    image: "path_to_image1.jpg"
  },
  {
    name: "Punjab and Kerala floods",
    description: "Initiators of Change swiftly responded to the floods in Punjab and Kerala, providing essential supplies and setting up free medical camps to address the health needs of the displaced population...",
    image: "path_to_image2.jpg"
  },
  {
    name: "COVID",
    description: "During the COVID-19 pandemic, IOC arranged medical equipment, conducted ration drives, contributed to vaccine distribution, and set up vaccine camps...",
    image: "path_to_image3.jpg"
  }
];

const HumanitarianAid = () => {
  return (
    <div className="humanitarian-aid-projects">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <img src={project.image} alt={project.name} className="project-image" />
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default HumanitarianAid;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../../ProjectDetails/ProjectDataHumanitarianAid';

const HumanitarianAid = () => {
  const navigate = useNavigate();

  const handleCardClick = (project) => {
    navigate(`/humanitarian/project/${encodeURIComponent(project.name)}`);
  };

  return (
    <div className="p-6 bg-slate-100">
      <h2 className="text-2xl font-bold mb-6">Pillar - 3 "Humanitarian Aid"</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
            onClick={() => handleCardClick(project)}
          >
            <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-700">{project.description.substring(0, 100)}...</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HumanitarianAid;*/
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../../ProjectDetails/ProjectDataHumanitarianAid';

const HumanitarianAid = () => {
  const navigate = useNavigate();

  const handleCardClick = (project) => {
    navigate(`/humanitarian/project/${encodeURIComponent(project.name)}`);
  };

  return (
    <div className="p-6 bg-slate-100">
      <h2 className="text-2xl font-bold mb-6">Pillar - 3 "Humanitarian Aid"</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
            onClick={() => handleCardClick(project)}
          >
            <img src={project.image} alt={project.name} className="w-full h-72 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-700">{project.description.substring(0, 100)}...</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HumanitarianAid;


