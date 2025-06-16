import React from 'react';
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaPython, 
  FaJs, FaDatabase
} from 'react-icons/fa';
import { SiExpress, SiMongodb, SiCplusplus } from 'react-icons/si';
import '../styles/TechLogo.css';

// This component maps tech names to their icons
const TechLogo = ({ tech }) => {
  // Map tech names to corresponding React Icons
  const getTechIcon = (techName) => {
    switch (techName) {
      case 'React':
        return <FaReact />;
      case 'Node.js':
        return <FaNodeJs />;
      case 'Express':
        return <SiExpress />;
      case 'MongoDB':
        return <SiMongodb />;
      case 'JavaScript':
        return <FaJs />;
      case 'HTML':
        return <FaHtml5 />;
      case 'CSS':
        return <FaCss3Alt />;
      case 'Git':
        return <FaGitAlt />;
      case 'Python':
        return <FaPython />;
      case 'C++':
        return <SiCplusplus />;
      default:
        return null;
    }
  };

  // Get icon for this tech
  const icon = getTechIcon(tech);

  // If we don't have an icon for this tech, return null
  if (!icon) {
    return null;
  }

  return (
    <div className="tech-tag tech-icon" title={tech}>
      {icon}
      <span className="tech-name">{tech}</span>
    </div>
  );
};

export default TechLogo;