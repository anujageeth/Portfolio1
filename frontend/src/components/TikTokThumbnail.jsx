import React from 'react';
import { SiTiktok } from 'react-icons/si';
import '../styles/TikTokThumbnail.css';

const TikTokThumbnail = ({ video, className }) => {
  // Extract username from the video data or use a default
  const username = video.author || 'anuja_geeth';
  
  // Create a gradient background based on the video ID for variety
  const getGradientFromVideoId = (id) => {
    // Generate a pseudo-random color from video ID
    const hash = id.split('').reduce((acc, char) => {
      return char.charCodeAt(0) + ((acc << 5) - acc);
    }, 0);
    
    const h1 = Math.abs(hash % 360);
    const h2 = (h1 + 180) % 360; // Complementary color
    
    return `linear-gradient(45deg, hsl(${h1}, 80%, 60%), hsl(${h2}, 80%, 60%))`;
  };
  
  return (
    <div 
      className={`tiktok-thumbnail ${className || ''}`}
      style={{ background: getGradientFromVideoId(video.videoId) }}
    >
      <div className="tiktok-overlay">
        {/* <div className="tiktok-logo">
          <SiTiktok />
        </div> */}

        <div className="tiktok-caption">
          {video.title.substring(0, 20)}{video.title.length > 30 ? '...' : ''}
        </div>

        <div className="tiktok-user">@{username}</div>
        
        
        
        <div className="tiktok-music-note">♪</div>
      </div>
    </div>
  );
};

export default TikTokThumbnail;