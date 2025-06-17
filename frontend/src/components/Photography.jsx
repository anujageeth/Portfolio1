import React, { useState, useEffect } from 'react';
import { FaFacebook, FaInstagram, FaExpand, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/Photography.css';

const Photography = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(null);

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'landscape', name: 'Landscape' },
    { id: 'portrait', name: 'Portraits' },
    { id: 'street', name: 'Street & Travel' },
    { id: 'nature', name: 'Nature' },
    { id: 'events', name: 'Event Coverage' }
  ];

  // Sample photos data - in a real app you'd fetch this from Facebook API
  const samplePhotos = [
    {
      id: 1,
      title: 'Sunset at Mountains',
      description: 'Beautiful sunset over the mountains in Sri Lanka',
      imageUrl: 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?q=80&w=1000',
      category: 'landscape',
      source: 'facebook',
      sourceUrl: 'https://facebook.com/anujageeth'
    },
    {
      id: 2,
      title: 'Portrait Session',
      description: 'Portrait photoshoot with natural lighting',
      imageUrl: 'https://www.instagram.com/p/DCTCkAUogOS/',
      category: 'portrait',
      source: 'instagram',
      sourceUrl: 'https://instagram.com/anuja_geeth'
    },
    {
      id: 3,
      title: 'City Life',
      description: 'Street photography exploring urban textures',
      imageUrl: 'https://images.unsplash.com/photo-1631432526486-b93505aace49?q=80&w=1000',
      category: 'street',
      source: 'facebook',
      sourceUrl: 'https://facebook.com/anujageeth'
    },
    {
      id: 4,
      title: 'Mountain View',
      description: 'Scenic view of mountain range',
      imageUrl: 'https://images.unsplash.com/photo-1477346611705-65d1883cee1e?q=80&w=1000',
      category: 'landscape',
      source: 'instagram',
      sourceUrl: 'https://instagram.com/anuja_geeth'
    },
    {
      id: 5,
      title: 'Wildlife Shot',
      description: 'Bird in its natural habitat',
      imageUrl: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?q=80&w=1000',
      category: 'nature',
      source: 'facebook',
      sourceUrl: 'https://facebook.com/anujageeth'
    },
    {
      id: 6,
      title: 'Wedding Ceremony',
      description: 'Capturing special moments at a wedding',
      imageUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1000',
      category: 'events',
      source: 'instagram',
      sourceUrl: 'https://instagram.com/anuja_geeth'
    },
    {
      id: 7,
      title: 'Travel Memories',
      description: 'Market scene from travel photography',
      imageUrl: 'https://images.unsplash.com/photo-1528072164453-f4e8ef0d475a?q=80&w=1000',
      category: 'street',
      source: 'facebook',
      sourceUrl: 'https://facebook.com/anujageeth'
    },
    {
      id: 8,
      title: 'Graduation Photoshoot',
      description: 'Graduation day celebration photos',
      imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000',
      category: 'events',
      source: 'instagram',
      sourceUrl: 'https://instagram.com/anuja_geeth'
    }
  ];

  useEffect(() => {
    // Simulate loading data from API
    setTimeout(() => {
      setPhotos(samplePhotos);
      setLoading(false);
    }, 1000);
  }, []);

  const openLightbox = (photo) => {
    setCurrentPhoto(photo);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  return (
    <div className="photography-container">
      <div className="photography-intro">
        <h3>Photography Collection</h3>
        <p>A selection of my best photographic work showcasing diverse themes and techniques</p>
        
        <div className="social-links">
          <a href="https://facebook.com/anujageeth" target="_blank" rel="noopener noreferrer" className="social-link facebook">
            <FaFacebook /> Follow my Photography Page
          </a>
          <a href="https://instagram.com/anuja_geeth" target="_blank" rel="noopener noreferrer" className="social-link instagram">
            <FaInstagram /> Follow on Instagram
          </a>
        </div>
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
            <div key={i} className="photo-skeleton"></div>
          ))}
        </div>
      ) : (
        <div className="photo-grid">
          {filteredPhotos.length > 0 ? (
            filteredPhotos.map(photo => (
              <div key={photo.id} className="photo-item">
                <div className="photo-image" onClick={() => openLightbox(photo)}>
                  <img src={photo.imageUrl} alt={photo.title} />
                  <div className="photo-overlay">
                    <FaExpand />
                  </div>
                </div>
                <div className="photo-info">
                  <h4>{photo.title}</h4>
                  {/* <p>{photo.description}</p> */}
                  <div className="photo-stats">
                    {/* <span className="likes">❤️ {photo.likes}</span>
                    <span className="comments">💬 {photo.comments}</span> */}
                    <span className={`source ${photo.source}`}>
                      {photo.source === 'facebook' ? <FaFacebook /> : <FaInstagram />}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-photos">
              <p>No photos found in this category.</p>
            </div>
          )}
        </div>
      )}

      {lightboxOpen && currentPhoto && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="close-lightbox" onClick={closeLightbox}>×</button>
            <img src={currentPhoto.imageUrl} alt={currentPhoto.title} />
            <div className="lightbox-details">
              <h3>{currentPhoto.title}</h3>
              <p>{currentPhoto.description}</p>
              <a 
                href={currentPhoto.sourceUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="source-link"
              >
                View original post <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Photography;