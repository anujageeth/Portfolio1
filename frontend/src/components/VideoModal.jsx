import React, { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import '../styles/VideoModal.css';

const VideoModal = ({ video, onClose }) => {
  // Create a YouTube embed URL from video ID
  const getYouTubeEmbedUrl = (videoId) => {
    return `https://www.youtube.com/embed/${videoId}?rel=0&showinfo=0&autoplay=1`;
  };

  // Create TikTok embed URL (if needed)
  const getTikTokEmbedUrl = (videoId) => {
    return `https://www.tiktok.com/embed/v2/${videoId}`;
  };

  // Get embed URL based on platform
  const getEmbedUrl = (video) => {
    if (video.platform === 'youtube') {
      return getYouTubeEmbedUrl(video.videoId);
    } else if (video.platform === 'tiktok') {
      return getTikTokEmbedUrl(video.videoId);
    }
    return '';
  };

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    // Prevent background scrolling when modal is open
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEscKey);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [onClose]);

  // Close modal when clicking outside the content
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('video-modal-overlay')) {
      onClose();
    }
  };

  return (
    <div className="video-modal-overlay" onClick={handleOverlayClick}>
      <div className="video-modal-content">
        <button className="video-modal-close" onClick={onClose}>
          <FaTimes />
        </button>
        
        <div className="video-modal-player">
          <iframe
            src={getEmbedUrl(video)}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
        
        <div className="video-modal-details">
          <h3>{video.title}</h3>
          <p>{video.description}</p>
          <div className="video-modal-meta">
            {video.views && <span className="views">{video.views} views</span>}
            {video.tool && (
              <span className="tool">
                {video.tool === 'premiere' && <i className="tool-icon premiere"></i>}
                {video.tool === 'resolve' && <i className="tool-icon resolve"></i>}
                {video.tool === 'capcut' && <i className="tool-icon capcut"></i>}
                Edited with {video.toolName}
              </span>
            )}
            {video.platform === 'youtube' && (
              <a 
                href={`https://youtube.com/watch?v=${video.videoId}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="video-modal-link"
              >
                Watch on YouTube
              </a>
            )}
            {video.platform === 'tiktok' && (
              <a 
                href={`https://tiktok.com/@anuja_geeth/video/${video.videoId}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="video-modal-link"
              >
                Watch on TikTok
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;