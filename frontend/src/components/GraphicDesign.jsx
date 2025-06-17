import React, { useState, useEffect } from 'react';
import { 
  FaExpand, 
  FaExternalLinkAlt, 
  FaVectorSquare, // Added as replacement for SiCorel
  FaLayerGroup
} from 'react-icons/fa';
import { 
  SiAdobephotoshop, 
  SiCanva, 
  SiFigma 
} from 'react-icons/si';
import '../styles/GraphicDesign.css';

const GraphicDesign = () => {
  const [designs, setDesigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentDesign, setCurrentDesign] = useState(null);

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Designs' },
    { id: 'branding', name: 'Branding & Logos' },
    { id: 'ui', name: 'UI Design' },
    { id: 'poster', name: 'Posters' },
    { id: 'social', name: 'Social Media' }
  ];

  // Sample designs data
  const sampleDesigns = [
    {
      id: 1,
      title: 'Event Poster Design',
      description: 'Promotional poster for a university tech event',
      imageUrl: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1000',
      category: 'poster',
      tool: 'photoshop',
      toolName: 'Adobe Photoshop',
      link: 'https://behance.net/anujageeth'
    },
    {
      id: 2,
      title: 'Mobile App UI',
      description: 'UI design for a productivity mobile application',
      imageUrl: 'https://images.unsplash.com/photo-1616628188538-7e394936b2b0?q=80&w=1000',
      category: 'ui',
      tool: 'figma',
      toolName: 'Figma',
      link: 'https://figma.com/@anujageeth'
    },
    {
      id: 3,
      title: 'Brand Identity',
      description: 'Logo and color scheme for a tech startup',
      imageUrl: 'https://images.unsplash.com/photo-1600439614353-c8a422390b4c?q=80&w=1000',
      category: 'branding',
      tool: 'illustrator',
      toolName: 'CorelDRAW',
      link: 'https://behance.net/anujageeth'
    },
    {
      id: 4,
      title: 'Social Media Template',
      description: 'Instagram story template with customizable elements',
      imageUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000',
      category: 'social',
      tool: 'canva',
      toolName: 'Canva',
      link: 'https://www.canva.com/anujageeth'
    },
    {
      id: 5,
      title: 'Website Mockup',
      description: 'Modern website design for a photography portfolio',
      imageUrl: 'https://images.unsplash.com/photo-1523726491678-bf852e717f6a?q=80&w=1000',
      category: 'ui',
      tool: 'figma',
      toolName: 'Figma',
      link: 'https://figma.com/@anujageeth'
    },
    {
      id: 6,
      title: 'Conference Banner',
      description: 'Large format banner design for a tech conference',
      imageUrl: 'https://images.unsplash.com/photo-1494059980473-813e73ee784b?q=80&w=1000',
      category: 'poster',
      tool: 'photoshop',
      toolName: 'Adobe Photoshop',
      link: 'https://behance.net/anujageeth'
    }
  ];

  useEffect(() => {
    // Simulate loading data from API
    setTimeout(() => {
      setDesigns(sampleDesigns);
      setLoading(false);
    }, 1000);
  }, []);

  const openLightbox = (design) => {
    setCurrentDesign(design);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const getToolIcon = (tool) => {
    switch(tool) {
      case 'photoshop':
        return <SiAdobephotoshop />;
      case 'canva':
        return <SiCanva />;
      case 'illustrator':
        return <FaVectorSquare />; // Replaced SiCorel with FaVectorSquare
      case 'figma':
        return <SiFigma />;
      default:
        return <FaLayerGroup />; // Default icon
    }
  };

  const filteredDesigns = selectedCategory === 'all' 
    ? designs 
    : designs.filter(design => design.category === selectedCategory);

  return (
    <div className="graphic-design-container">
      <div className="design-intro">
        <h3>Graphic Design Portfolio</h3>
        <p>A collection of my design work including UI/UX, branding, and promotional materials</p>
      </div>

      <div className="category-filter">
        {categories.map(category => (
          <button
            key={category.id}
            className={`category-button ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="loading-grid">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="design-skeleton"></div>
          ))}
        </div>
      ) : (
        <div className="design-grid">
          {filteredDesigns.length > 0 ? (
            filteredDesigns.map(design => (
              <div key={design.id} className="design-item">
                <div className="design-image" onClick={() => openLightbox(design)}>
                  <img src={design.imageUrl} alt={design.title} />
                  <div className="design-overlay">
                    <FaExpand />
                  </div>
                </div>
                <div className="design-info">
                  <h4>{design.title}</h4>
                  <p>{design.description}</p>
                  <div className="design-meta">
                    <span className="tool-used">
                      {getToolIcon(design.tool)}
                      <span>{design.toolName}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-designs">
              <p>No designs found in this category.</p>
            </div>
          )}
        </div>
      )}

      {lightboxOpen && currentDesign && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="close-lightbox" onClick={closeLightbox}>×</button>
            <img src={currentDesign.imageUrl} alt={currentDesign.title} />
            <div className="lightbox-details">
              <h3>{currentDesign.title}</h3>
              <p>{currentDesign.description}</p>
              <div className="design-tool">
                <span>Created with:</span>
                {getToolIcon(currentDesign.tool)} {currentDesign.toolName}
              </div>
              <a 
                href={currentDesign.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="external-link"
              >
                View full project <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GraphicDesign;