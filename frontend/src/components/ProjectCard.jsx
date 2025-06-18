import React, { useEffect, useRef } from 'react';
import TechLogo from './TechLogo';
import '../styles/Projects.css';

// List of technologies that have logos defined in TechLogo component
const technologiesWithLogos = [
  'React', 'Node.js', 'Express', 'MongoDB', 'JavaScript', 
  'HTML', 'CSS', 'Git', 'Python', 'C++'
];

const ProjectCard = ({ project, onView, setRef, isPreview = false }) => {
  // Function to filter and limit technologies that have logos
  const getDisplayTechnologies = (technologies) => {
    const techsWithLogos = technologies.filter(tech => 
      technologiesWithLogos.includes(tech)
    );
    return techsWithLogos.slice(0, 4); // Limit to max 4 technologies
  };

  return (
    <div 
      className="project-item" 
      ref={(el) => setRef(el, project.id)}
    >
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        
        {/* Tech logos overlay */}
        <div className="project-tech-overlay">
          {project.technologies.length > getDisplayTechnologies(project.technologies).length && (
            <span className="tech-tag tech-more">
              +{project.technologies.length - getDisplayTechnologies(project.technologies).length}
            </span>
          )}
          
          {getDisplayTechnologies(project.technologies).map((tech, index) => (
            <div key={index} className="tech-icon-wrapper">
              <TechLogo tech={tech} />
            </div>
          ))}
        </div>
      </div>
      
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      
      <button 
        className="view-project-btn" 
        onClick={() => onView(project)}
      >
        View Project
      </button>
    </div>
  );
};

// Skeleton loader component
export const ProjectSkeleton = () => (
  <div className="project-item skeleton-card">
    <div className="skeleton-image"></div>
    <div className="skeleton-content">
      <div className="skeleton-title"></div>
      <div className="skeleton-text"></div>
      <div className="skeleton-text"></div>
      <div className="skeleton-button"></div>
    </div>
    <div className="skeleton-tech-overlay">
      <div className="skeleton-tech"></div>
      <div className="skeleton-tech"></div>
      <div className="skeleton-tech"></div>
      <div className="skeleton-tech"></div>
    </div>
  </div>
);

export default ProjectCard;