import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FaHome, FaUser, FaFileAlt, FaCode, FaTools, 
  FaCamera, FaPaintBrush, FaVideo, FaChevronDown,
  FaLaptopCode, FaBriefcase, FaPalette
} from 'react-icons/fa';
import '../styles/Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Check if a link should be considered active
  const isActive = (paths) => {
    if (!Array.isArray(paths)) {
      paths = [paths];
    }
    return paths.some(path => location.pathname === path);
  };

  // Handle mouse enter for dropdowns
  const handleMouseEnter = (dropdown) => {
    setActiveDropdown(dropdown);
    
    // Clear any active timeout to prevent menu from hiding
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  // Handle mouse leave for dropdowns with a small delay
  const handleMouseLeave = () => {
    // Add a small delay before hiding dropdown
    // This gives users time to move cursor to the dropdown menu
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 100); // 100ms delay
  };

  // Add this to handle mouse enter for the dropdown menu itself
  const handleDropdownMenuMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  // Add this to handle mouse leave for the dropdown menu
  const handleDropdownMenuMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <>
      {/* Overlay when dropdown is active */}
      {activeDropdown && <div className="header-dropdown-overlay"></div>}

      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">
          <Link to="/"><h1>Anuja Geeth</h1></Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/" className={isActive('/') ? 'active' : ''}>
                <FaHome size={14} className="nav-icon" /> Home
              </Link>
            </li>
            
            {/* Me Dropdown */}
            <li 
              className={`dropdown-container ${activeDropdown === 'me' ? 'active' : ''}`}
              onMouseEnter={() => handleMouseEnter('me')}
              onMouseLeave={handleMouseLeave}
            >
              <Link 
                to="#" 
                className={`dropdown-toggle ${isActive(['/about', '/cv']) ? 'active' : ''}`}
                onClick={(e) => e.preventDefault()}
              >
                {/* <FaUser size={14} className="nav-icon" /> */}
                Me <FaChevronDown className="dropdown-arrow" />
              </Link>
              
              <ul className="dropdown-menu">
                <li>
                  <Link to="/about" className={isActive('/about') ? 'active' : ''}>
                    <FaUser className="dropdown-icon" /> About Me
                  </Link>
                </li>
                <li>
                  <Link to="/cv" className={isActive('/cv') ? 'active' : ''}>
                    <FaFileAlt className="dropdown-icon" /> CV / Resume
                  </Link>
                </li>
              </ul>
            </li>
            
            {/* Career Dropdown */}
            <li 
              className={`dropdown-container ${activeDropdown === 'career' ? 'active' : ''}`}
              onMouseEnter={() => handleMouseEnter('career')}
              onMouseLeave={handleMouseLeave}
            >
              <Link 
                to="#" 
                className={`dropdown-toggle ${isActive(['/projects', '/skills']) ? 'active' : ''}`}
                onClick={(e) => e.preventDefault()}
              >
                {/* <FaBriefcase size={14} className="nav-icon" /> */}
                Career <FaChevronDown className="dropdown-arrow" />
              </Link>
              
              <ul className="dropdown-menu">
                <li>
                  <Link to="/projects" className={isActive('/projects') ? 'active' : ''}>
                    <FaLaptopCode className="dropdown-icon" /> Projects
                  </Link>
                </li>
                <li>
                  <Link to="/skills" className={isActive('/skills') ? 'active' : ''}>
                    <FaTools className="dropdown-icon" /> Skills
                  </Link>
                </li>
              </ul>
            </li>
            
            {/* Creative Dropdown */}
            <li 
              className={`dropdown-container ${activeDropdown === 'creative' ? 'active' : ''}`}
              onMouseEnter={() => handleMouseEnter('creative')}
              onMouseLeave={handleMouseLeave}
            >
              <Link 
                to="/creative" 
                className={`dropdown-toggle ${isActive('/creative') ? 'active' : ''}`}
              >
                {/* <FaPalette size={14} className="nav-icon" /> */}
                Creative <FaChevronDown className="dropdown-arrow" />
              </Link>
              
              <ul className="dropdown-menu">
                <li>
                  <Link 
                    to="/creative" 
                    state={{ activeTab: 'photography' }}
                    className={isActive('/creative') ? 'active' : ''}
                  >
                    <FaCamera className="dropdown-icon" /> Photography
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/creative" 
                    state={{ activeTab: 'design' }}
                    className={isActive('/creative') ? 'active' : ''}
                  >
                    <FaPaintBrush className="dropdown-icon" /> Graphic Design
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/creative" 
                    state={{ activeTab: 'video' }}
                    className={isActive('/creative') ? 'active' : ''}
                  >
                    <FaVideo className="dropdown-icon" /> Video Editing
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;