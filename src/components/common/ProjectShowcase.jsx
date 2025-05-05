import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import OptimizedImage from './OptimizedImage';
import AnimatedButton from './AnimatedButton';

/**
 * ProjectShowcase component for displaying projects with interactive animations
 * Features filtering, hover effects, and responsive design
 */
const ProjectShowcase = ({ 
  projects = [],
  categories = [],
  onProjectClick,
  className = ""
}) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  // Filter projects based on active category
  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className={`${className}`}>
      {/* Category Filters */}
      {categories.length > 0 && (
        <div className="flex flex-wrap justify-center mb-8">
          <motion.button
            className={`px-4 py-2 m-1 rounded-full text-sm font-medium transition-colors duration-300 ${
              activeCategory === 'all'
                ? 'bg-orange-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setActiveCategory('all')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All Projects
          </motion.button>
          
          {categories.map((category) => (
            <motion.button
              key={category.value}
              className={`px-4 py-2 m-1 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeCategory === category.value
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory(category.value)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </div>
      )}

      {/* Projects Grid */}
      <AnimatePresence>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="relative overflow-hidden rounded-lg shadow-lg bg-white"
              variants={projectVariants}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <div className="relative h-60 overflow-hidden">
                <OptimizedImage
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700"
                  style={{ 
                    transform: hoveredProject === project.id ? 'scale(1.1)' : 'scale(1)'
                  }}
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {categories.find(cat => cat.value === project.category)?.label || project.category}
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                
                <div className="flex justify-between items-center">
                  <AnimatedButton
                    variant="outline"
                    size="small"
                    onClick={() => onProjectClick(project)}
                  >
                    Learn More
                  </AnimatedButton>
                  
                  {project.progress && (
                    <div className="flex items-center">
                      <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-green-500"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-600 ml-2">{project.progress}%</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
      
      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <motion.div 
          className="text-center py-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-500 text-lg">No projects found in this category.</p>
        </motion.div>
      )}
    </div>
  );
};

export default ProjectShowcase;
