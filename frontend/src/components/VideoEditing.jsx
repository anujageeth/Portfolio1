import React, { useState, useEffect } from 'react';
import { FaYoutube, FaPlay, FaExternalLinkAlt, FaCut } from 'react-icons/fa';
import { SiAdobepremierepro, SiDavinciresolve, SiTiktok } from 'react-icons/si';
import '../styles/VideoEditing.css';

const VideoEditing = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeVideo, setActiveVideo] = useState(null);

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Videos' },
    { id: 'short', name: 'Short Films' },
    { id: 'cinematic', name: 'Cinematics' },
    { id: 'vlog', name: 'Vlogs' },
    { id: 'event', name: 'Event Coverage' }
  ];

  // Sample videos data
  const sampleVideos = [
    {
      id: 1,
      title: 'Sri Lanka Travel Cinematic',
      description: 'A cinematic journey through the beautiful landscapes of Sri Lanka',
      thumbnailUrl: 'https://images.unsplash.com/photo-1586016413664-864c0dd76f53?q=80&w=1000',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      category: 'cinematic',
      platform: 'youtube',
      views: '5.2K',
      duration: '3:45',
      tool: 'premiere',
      toolName: 'Adobe Premiere Pro'
    },
    {
      id: 2,
      title: 'Tech Unboxing & Review',
      description: 'Unboxing and hands-on review of the latest smartphone',
      thumbnailUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      category: 'vlog',
      platform: 'youtube',
      views: '3.7K',
      duration: '8:12',
      tool: 'resolve',
      toolName: 'DaVinci Resolve'
    },
    {
      id: 3,
      title: 'University Event Highlights',
      description: 'Highlights from the annual university tech festival',
      thumbnailUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      category: 'event',
      platform: 'youtube',
      views: '2.1K',
      duration: '5:30',
      tool: 'premiere',
      toolName: 'Adobe Premiere Pro'
    },
    {
      id: 4,
      title: 'Short Film: Reconnection',
      description: 'A short film about finding connections in a digital world',
      thumbnailUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1000',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      category: 'short',
      platform: 'youtube',
      views: '8.9K',
      duration: '12:45',
      tool: 'resolve',
      toolName: 'DaVinci Resolve'
    },
    {
      id: 5,
      title: 'Sunset Time-lapse',
      description: '60-second compilation of beautiful sunset time-lapses',
      thumbnailUrl: 'https://images.unsplash.com/photo-1517639493569-5666a7b2f494?q=80&w=1000',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      category: 'cinematic',
      platform: 'tiktok',
      views: '15.4K',
      duration: '0:60',
      tool: 'capcut',
      toolName: 'CapCut'
    },
    {
      id: 6,
      title: 'Day in My Life: Student Edition',
      description: 'Follow me through a typical day as a computer engineering student',
      thumbnailUrl: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1000',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      category: 'vlog',
      platform: 'youtube',
      views: '4.3K',
      duration: '10:23',
      tool: 'premiere',
      toolName: 'Adobe Premiere Pro'
    }
  ];

  useEffect(() => {
    // Simulate loading data from API
    setTimeout(() => {
      setVideos(sampleVideos);
      setLoading(false);
    }, 1000);
  }, []);

  const playVideo = (video) => {
    setActiveVideo(video);
    window.scrollTo({
      top: document.querySelector('.video-player-container').offsetTop - 100,
      behavior: 'smooth'
    });
  };

  const getToolIcon = (tool) => {
    switch(tool) {
      case 'premiere':
        return <SiAdobepremierepro />;
      case 'resolve':
        return <SiDavinciresolve />;
      case 'capcut':
        return <FaCut />;
      default:
        return null;
    }
  };

  const getPlatformIcon = (platform) => {
    switch(platform) {
      case 'youtube':
        return <FaYoutube className="platform-icon youtube" />;
      case 'tiktok':
        return <SiTiktok className="platform-icon tiktok" />;
      default:
        return null;
    }
  };

  const filteredVideos = selectedCategory === 'all' 
    ? videos 
    : videos.filter(video => video.category === selectedCategory);

  return (
    <div className="video-editing-container">
      <div className="video-intro">
        <h3>Video Production Portfolio</h3>
        <p>A showcase of my videography and editing work across different styles and topics</p>
        
        <div className="channel-link">
          <a href="https://youtube.com/@AnujaVideos" target="_blank" rel="noopener noreferrer">
            <FaYoutube /> Visit my YouTube Channel
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

      {activeVideo && (
        <div className="video-player-container">
          <div className="video-player">
            <iframe
              src={activeVideo.videoUrl}
              title={activeVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video-details">
            <h3>{activeVideo.title}</h3>
            <p>{activeVideo.description}</p>
            <div className="video-meta">
              <span className="views">{activeVideo.views} views</span>
              <span className="tool">
                {getToolIcon(activeVideo.tool)}
                Edited with {activeVideo.toolName}
              </span>
              {getPlatformIcon(activeVideo.platform)}
            </div>
          </div>
        </div>
      )}

      {loading ? (
        <div className="loading-grid">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="video-skeleton"></div>
          ))}
        </div>
      ) : (
        <div className="video-grid">
          {filteredVideos.length > 0 ? (
            filteredVideos.map(video => (
              <div key={video.id} className="video-item" onClick={() => playVideo(video)}>
                <div className="video-thumbnail">
                  <img src={video.thumbnailUrl} alt={video.title} />
                  <div className="play-overlay">
                    <FaPlay />
                    <span className="duration">{video.duration}</span>
                  </div>
                  {getPlatformIcon(video.platform)}
                </div>
                <div className="video-info">
                  <h4>{video.title}</h4>
                  <p>{video.description}</p>
                  <div className="video-stats">
                    <span className="views">{video.views} views</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-videos">
              <p>No videos found in this category.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default VideoEditing;