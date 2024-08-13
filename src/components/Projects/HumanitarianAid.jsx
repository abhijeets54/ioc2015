
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


