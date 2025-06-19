import React, { useState, useEffect } from 'react';
import { 
  FaExpand, 
  FaExternalLinkAlt, 
  FaVectorSquare,
  FaLayerGroup,
  FaFacebook
} from 'react-icons/fa';
import { 
  SiAdobephotoshop, 
  SiCanva, 
  SiFigma,
  SiAdobeillustrator
} from 'react-icons/si';
import '../styles/GraphicDesign.css';

// Import all ColorG images
import colorGAnil from '../assets/colorG/Color G - Anil sir.jpg';
import colorGBackground from '../assets/colorG/Color G - Background.jpg';
import colorGChithmina from '../assets/colorG/Color G - Chithmina clz.jpg';
import colorGCover from '../assets/colorG/Color G - cover photo.jpg';
import colorGDimuthu from '../assets/colorG/Color G - Dimuthu sir.jpg';
import colorGEnglish from '../assets/colorG/Color G - English.jpg';
import colorGPemasiri from '../assets/colorG/Color G - Pemasiri sir.jpg';
import colorGTMG from '../assets/colorG/Color G - TMG.jpg';
import colorGWall from '../assets/colorG/Color G - wall.jpg';
import colorGWow from '../assets/colorG/Color G - Wow.jpg';

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

  // Sample designs data with ColorG images
  const colorGDesigns = [
    {
      id: 1,
      title: 'Dancing Classes Poster',
      description: 'Custom graphics and typography for dancing classes',
      imageUrl: colorGAnil,
      category: 'poster',
      tool: 'photoshop',
      toolName: 'Adobe Photoshop',
      link: 'https://www.facebook.com/ColorGcreations',
      type: 'image',
      fbPostId: '1073650260685879'
    },
    {
      id: 2,
      title: 'YouTube Thumbnail Designs',
      description: 'Promotional design for YouTube video thumbnails',
      imageUrl: colorGWow,
      category: 'colorg',
      tool: 'photoshop',
      toolName: 'Adobe Photoshop',
      link: 'https://www.facebook.com/ColorGcreations',
      type: 'image',
      fbPostId: '1073650260685879'
    },
    {
      id: 3,
      title: 'O/L Classes Poster',
      description: 'Promotional graphic for ordinary level classes',
      imageUrl: colorGChithmina,
      category: 'poster',
      tool: 'photoshop',
      toolName: 'Adobe Photoshop',
      link: 'https://www.facebook.com/ColorGcreations',
      type: 'image',
      fbPostId: '1073650260685879'
    },
    {
      id: 4,
      title: 'Logo Designs and Cover Photos',
      description: 'Professional logo and cover photo designs',
      imageUrl: colorGCover,
      category: 'branding',
      tool: 'coreldraw',
      toolName: 'CorelDRAW',
      link: 'https://www.facebook.com/ColorGcreations',
      type: 'image',
      fbPostId: '1073650260685879'
    },
    {
      id: 5,
      title: 'English Classes Poster',
      description: 'Educational promotional design for teacher',
      imageUrl: colorGDimuthu,
      category: 'colorg',
      tool: 'photoshop',
      toolName: 'Adobe Photoshop',
      link: 'https://www.facebook.com/ColorGcreations',
      type: 'image',
      fbPostId: '1073650260685879'
    },
    {
      id: 6,
      title: 'English Classes Poster',
      description: 'Promotional graphic for English language classes',
      imageUrl: colorGEnglish,
      category: 'colorg',
      tool: 'coreldraw',
      toolName: 'corelDRAW',
      link: 'https://www.facebook.com/ColorGcreations',
      type: 'image',
      fbPostId: '1073650260685879'
    },
    {
      id: 7,
      title: 'Sinhala Classes Poster',
      description: 'Promotional graphic for Sinhala language classes',
      imageUrl: colorGPemasiri,
      category: 'colorg',
      tool: 'photoshop',
      toolName: 'Adobe Photoshop',
      link: 'https://www.facebook.com/ColorGcreations',
      type: 'image',
      fbPostId: '1073650260685879'
    },
    {
      id: 8,
      title: 'YouTube Thumbnail Designs',
      description: 'Promotional design for YouTube video thumbnails',
      imageUrl: colorGTMG,
      category: 'colorg',
      tool: 'photoshop',
      toolName: 'Adobe Photoshop',
      link: 'https://www.facebook.com/ColorGcreations',
      type: 'image',
      fbPostId: '1073650260685879'
    }
  ];

  // Use Effect to load data
  useEffect(() => {
    // Load the Facebook SDK for embedded posts
    const loadFacebookSDK = () => {
      window.fbAsyncInit = function() {
        window.FB.init({
          xfbml: true,
          version: 'v18.0'
        });
        // Parse any FB elements that might be in the DOM already
        if (window.FB) {
          window.FB.XFBML.parse();
        }
      };

      // Add Facebook SDK script if it doesn't exist
      if (!document.getElementById('facebook-jssdk')) {
        const script = document.createElement('script');
        script.id = 'facebook-jssdk';
        script.src = "https://connect.facebook.net/en_US/sdk.js";
        document.head.appendChild(script);
      }
    };

    loadFacebookSDK();

    // Simulate loading data from API
    setTimeout(() => {
      setDesigns(colorGDesigns);
      setLoading(false);
    }, 1000);
  }, []);

  // Parse Facebook embeds when needed
  useEffect(() => {
    if (window.FB && !loading) {
      setTimeout(() => {
        window.FB.XFBML.parse();
      }, 500);
    }
  }, [designs, selectedCategory, loading]);

  // Handle lightbox open/close
  const openLightbox = (design) => {
    setCurrentDesign(design);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Get tool icon based on the design tool
  const getToolIcon = (tool) => {
    switch(tool) {
      case 'photoshop':
        return <SiAdobephotoshop />;
      case 'canva':
        return <SiCanva />;
      case 'illustrator':
        return <SiAdobeillustrator />; 
      case 'figma':
        return <SiFigma />;
      default:
        return <FaLayerGroup />;
    }
  };

  // Filter designs based on selected category
  const filteredDesigns = selectedCategory === 'all' 
    ? designs 
    : designs.filter(design => design.category === selectedCategory);

  // Render design content based on type
  const renderDesignContent = (design) => {
    switch(design.type) {
      case 'facebook-post':
        return (
          <div className="facebook-embed-container" onClick={() => openLightbox(design)}>
            <img src={design.imageUrl} alt={design.title} className="facebook-preview-image" />
            <div className="facebook-overlay">
              <FaFacebook className="facebook-icon" />
              <span>Facebook Post</span>
              <button className="view-post-btn">
                <FaExpand />
              </button>
            </div>
          </div>
        );
      case 'image':
      default:
        return (
          <div className="design-image" onClick={() => openLightbox(design)}>
            <img src={design.imageUrl} alt={design.title} />
            <div className="design-overlay">
              <FaExpand />
            </div>
          </div>
        );
    }
  };

  // Render content inside the lightbox
  const renderLightboxContent = (design) => {
    switch(design.type) {
      case 'facebook-post':
        return (
          <div className="facebook-lightbox-content">
            <img src={design.imageUrl} alt={design.title} />
            <div className="facebook-embed-button">
              <a 
                href={`https://www.facebook.com/ColorGcreations/videos/${design.fbPostId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="view-on-facebook"
              >
                <FaFacebook /> View on Facebook
              </a>
            </div>
          </div>
        );
      case 'image':
      default:
        return <img src={design.imageUrl} alt={design.title} />;
    }
  };

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
              <div key={design.id} className={`design-item ${design.type === 'facebook-post' ? 'facebook-item' : ''}`}>
                {renderDesignContent(design)}
                <div className="design-info">
                  <h4>{design.title}</h4>
                  <p>{design.description}</p>
                  <div className="design-meta">
                    <span className="tool-used">
                      {getToolIcon(design.tool)}
                      <span>{design.toolName}</span>
                    </span>
                    {design.type === 'facebook-post' && (
                      <span className="platform-badge facebook">
                        <FaFacebook /> Facebook
                      </span>
                    )}
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
            {renderLightboxContent(currentDesign)}
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
                {currentDesign.type === 'facebook-post' ? (
                  <>View on Facebook <FaFacebook /></>
                ) : (
                  <>View full project <FaExternalLinkAlt /></>
                )}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GraphicDesign;