import React, { useState, useEffect } from 'react';
import { FaFacebook, FaInstagram, FaExpand, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../styles/Photography.css';

// Import photography data from separate file
import { photographyData, photoCategories } from '../data/photographyData';

const Photography = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(null);
  
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  useEffect(() => {
    // Reset to first page when category changes
    setCurrentPage(1);
    
    // Simulate loading data from API
    setTimeout(() => {
      setPhotos(photographyData);
      setLoading(false);
    }, 1000);
  }, [selectedCategory]);

  const openLightbox = (photo) => {
    setCurrentPhoto(photo);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Filter photos based on category
  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPhotos = filteredPhotos.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredPhotos.length / itemsPerPage);

  // Go to next or previous page
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      // Scroll to top of grid
      document.querySelector('.category-filter').scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      // Scroll to top of grid
      document.querySelector('.category-filter').scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="photography-container">
      <div className="photography-intro">
        <div className="channel-link">
          <a id='facebook-button' href="https://facebook.com/anujaphotography.lk" target="_blank" rel="noopener noreferrer">
            <FaFacebook /> Facebook
          </a>
          <a id='instagram-button' href="https://instagram.com/anuja.photography" target="_blank" rel="noopener noreferrer">
            <FaInstagram /> Instagram
          </a>
        </div>
      </div>

      <div className="category-filter">
        {photoCategories.map(category => (
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
        <>
          <div className="photo-grid">
            {currentPhotos.length > 0 ? (
              currentPhotos.map(photo => (
                <div key={photo.id} className="photo-item">
                  <div className="photo-image" onClick={() => openLightbox(photo)}>
                    <img src={photo.imageUrl} alt={photo.title} />
                    <div className="photo-overlay">
                      <FaExpand />
                    </div>
                  </div>
                  <div className="photo-info">
                    <h4>{photo.title}</h4>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-photos">
                <p>No photos found in this category.</p>
              </div>
            )}
          </div>
          
          {/* Pagination Navigation */}
          {filteredPhotos.length > itemsPerPage && (
            <div className="pagination-container">
              <button 
                onClick={goToPreviousPage} 
                className={`pagination-button prev ${currentPage === 1 ? 'disabled' : ''}`}
                disabled={currentPage === 1}
              >
                <FaChevronLeft /> Previous
              </button>
              
              <div className="pagination-info">
                <span>Page {currentPage} of {totalPages}</span>
                <span className="pagination-summary">
                  Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, filteredPhotos.length)} of {filteredPhotos.length} photos
                </span>
              </div>
              
              <button 
                onClick={goToNextPage} 
                className={`pagination-button next ${currentPage === totalPages ? 'disabled' : ''}`}
                disabled={currentPage === totalPages}
              >
                Next <FaChevronRight />
              </button>
            </div>
          )}
        </>
      )}

      {lightboxOpen && currentPhoto && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="close-lightbox" onClick={closeLightbox}>×</button>
            <img src={currentPhoto.imageUrl} alt={currentPhoto.title} />
            <div className="lightbox-details">
              <h3>{currentPhoto.title}</h3>
              <p>{currentPhoto.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Photography;