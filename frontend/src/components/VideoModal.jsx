import React, { useEffect } from 'react';
import { FaTimes, FaYoutube, FaTiktok, FaFacebook } from 'react-icons/fa';
import '../styles/VideoModal.css';

const VideoModal = ({ video, onClose }) => {
  // Create a YouTube embed URL from video ID
  const getYouTubeEmbedUrl = (videoId) => {
    return `https://www.youtube.com/embed/${videoId}?rel=0&showinfo=0&autoplay=1`;
  };

  // Create TikTok embed URL
  const getTikTokEmbedUrl = (videoId) => {
    return `https://www.tiktok.com/embed/v2/${videoId}`;
  };

  // Create Facebook embed URL
  const getFacebookEmbedUrl = (videoId) => {
    // Use the official Facebook embed URL format
    return `https://www.facebook.com/plugins/video.php?height=420&href=https%3A%2F%2Fwww.facebook.com%2FColorGcreations%2Fvideos%2F${videoId}%2F&show_text=false&width=560&t=0`;
  };

  // Get embed URL based on platform
  const getEmbedUrl = (video) => {
    if (video.platform === 'youtube') {
      return getYouTubeEmbedUrl(video.videoId);
    } else if (video.platform === 'tiktok') {
      return getTikTokEmbedUrl(video.videoId);
    } else if (video.platform === 'facebook') {
      return getFacebookEmbedUrl(video.videoId);
    }
    return '';
  };

  // Get direct view URL based on platform
  const getDirectViewUrl = (video) => {
    if (video.platform === 'youtube') {
      return `https://youtube.com/watch?v=${video.videoId}`;
    } else if (video.platform === 'tiktok') {
      return `https://tiktok.com/@anuja_geeth/video/${video.videoId}`;
    } else if (video.platform === 'facebook') {
      return `https://www.facebook.com/ColorGcreations/videos/${video.videoId}/`;
    }
    return '#';
  };

  // Get platform name for link text
  const getPlatformName = (platform) => {
    switch(platform) {
      case 'youtube': return 'YouTube';
      case 'tiktok': return 'TikTok';
      case 'facebook': return 'Facebook';
      default: return 'Original';
    }
  };

  // Get platform icon
  const getPlatformIcon = (platform) => {
    switch(platform) {
      case 'youtube': return <FaYoutube />;
      case 'tiktok': return <FaTiktok />;
      case 'facebook': return <FaFacebook />;
      default: return null;
    }
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
            
            <a 
              href={getDirectViewUrl(video)} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`video-modal-link platform-${video.platform}`}
            >
              {getPlatformIcon(video.platform)}
              Watch on {getPlatformName(video.platform)}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;