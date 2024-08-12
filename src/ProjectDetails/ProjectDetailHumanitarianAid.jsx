/* import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from './ProjectDataHumanitarianAid';

const ProjectDetailHumanitarianAid = () => {
  const { projectName } = useParams();
  const project = projects.find(proj => proj.name === projectName);

  if (!project) {
    return <div className="p-6">Project not found</div>;
  }

  return (
    <div className="p-6">
      <img src={projects.image} alt={projects.name} className="w-full h-64 object-cover rounded-lg mb-4" />
      <h2 className="text-3xl font-bold mb-4">{projects.name}</h2>
      <p className="text-gray-700">{projects.description}</p>
    </div>
  );
};

export default ProjectDetailHumanitarianAid; */

import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from './ProjectDataHumanitarianAid';

const ProjectDetailHumanitarianAid = () => {
  const { projectName } = useParams();
  const decodedProjectName = decodeURIComponent(projectName);
  const project = projects.find(proj => proj.name === decodedProjectName);

  if (!project) {
    return <div className="p-6 bg-slate-100">Project not found</div>;
  }

  return (
    <div className="p-6 bg-slate-100">
      <img src={project.image} alt={project.name} className="w-full h-fit object-cover rounded-lg mb-4" />
      <h2 className="text-3xl font-bold mb-4">{project.name}</h2>
      <p className="text-gray-700">{project.description}</p>
    </div>
  );
};

export default ProjectDetailHumanitarianAid;
