import React, { useEffect, useRef } from 'react';
import { FaGithub, FaLinkedinIn, FaTimes, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
  const modalRef = useRef();
  const contentRef = useRef();
  
  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    
    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);
    
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
    
    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  // Handle escape key press
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscKey);
    
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [onClose]);

  // Generate GitHub share link
  const githubShareLink = () => {
    const text = encodeURIComponent(`Check out this awesome project: ${project.title}`);
    const url = encodeURIComponent(project.link);
    return `https://github.com/login?return_to=${url}`;
  };

  // Generate LinkedIn share link
  const linkedinShareLink = () => {
    const url = encodeURIComponent(project.link);
    const title = encodeURIComponent(project.title);
    const summary = encodeURIComponent(project.description);
    return `https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${title}&summary=${summary}`;
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content" ref={modalRef}>
        <button className="modal-close" onClick={onClose}>
          <FaTimes />
        </button>

        <div className="modal-header">
          <h2>{project.title}</h2>
        </div>

        <div className="modal-body" ref={contentRef}>
          {/* <div className="project-detail-image">
            <img src={project.image} alt={project.title} />
          </div> */}

          <div className="project-detail-content">
            <div className="project-detail-description">
              {project.longDescription || project.description}
            </div>
            
            {project.features && (
              <div className="project-features">
                <h3>Key Features</h3>
                <ul>
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="project-tech-stack">
              <h3>Technologies Used</h3>
              <div className="tech-tags">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <div className="project-links">
            {project.link && (
              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                <FaGithub /> View on GitHub
              </a>
            )}
            
            {project.demoLink && (
              <a href={project.demoLink} className="project-link demo-link" target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt /> Live Demo
              </a>
            )}
          </div>

          <div className="social-share">
            <h4>Share:</h4>
            <div className="share-buttons">
              <a href={githubShareLink()} className="share-button" target="_blank" rel="noopener noreferrer" aria-label="Share on GitHub">
                <FaGithub />
              </a>
              <a href={linkedinShareLink()} className="share-button" target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;