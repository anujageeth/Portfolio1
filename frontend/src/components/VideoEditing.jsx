import React, { useState, useEffect } from 'react';
import { FaYoutube, FaTiktok, FaPlay, FaExternalLinkAlt, FaCut } from 'react-icons/fa';
import { SiAdobepremierepro, SiDavinciresolve, SiTiktok } from 'react-icons/si';
import VideoModal from './VideoModal';
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
    { id: 'event', name: 'Event Coverage' },
    { id: 'documentry', name: 'Documentary' },
  ];

  // YouTube Video IDs instead of full URLs
  const sampleVideos = [
    {
      id: 1,
      title: 'Exploring Sri Lanka\'s Top Software Companies | 99x, Creative Software, IFS & WSO2',
      description: 'In this video, we explore how these companies operate, their software development lifecycle, work culture, and cutting-edge technologies. From AI innovations to agile methodologies, each visit gave us valuable insights into the world of software engineering.',
      videoId: 'R_i8nA9w7SA',
      category: 'documentry',
      platform: 'youtube',
      duration: '3:50',
      tool: 'premiere',
      toolName: 'Adobe Premiere Pro'
    },
    {
      id: 2,
      title: 'LabMS (Lab Management System) web application - A comprehensive demonstration',
      description: 'LabMS is a full-featured web-based system developed to efficiently manage laboratory equipment and operations in an academic environment. Built by a team of 4 for the Electrical Department, the system includes equipment tracking with CRUD operations, low stock alerts, user role management (HoD, Technical Officers, Instructors, Lecturers, Students), report generation, lab booking features, and real-time notifications.',
      videoId: '_Ip44sG_QxM',
      category: 'documentry',
      platform: 'youtube',
      duration: '8:12',
      tool: 'premiere',
      toolName: 'Adobe Premiere Pro'
    },
    {
      id: 3,
      title: 'Sanda Nena Da - Video Cover',
      description: 'Immerse yourself in the melancholic beauty of "Sanda Nena Da". This video tells the poignant story, capturing the essence of lost love through evocative visuals and soothing melodies. Let the hauntingly beautiful music and the emotional journey of our characters resonate with your heart. Don\'t forget to like, comment, and subscribe for more LoFi music and touching stories.',
      videoId: 'dQw4w9WgXcQ',
      category: 'cinematic',
      platform: 'youtube',
      tool: 'premiere',
      toolName: 'Adobe Premiere Pro'
    },
    {
      id: 4,
      title: 'Galle Fort 🏛️',
      description: 'A short video edit in Galle Fort, Sri Lanka. Capturing the beauty of this historic site.',
      videoId: '7431039318849817864',
      category: 'short',
      platform: 'tiktok',
      tool: 'resolve',
      toolName: 'DaVinci Resolve'
    },
    {
      id: 5,
      title: 'Sunset Time-lapse',
      description: '60-second compilation of beautiful sunset time-lapses',
      videoId: 'dQw4w9WgXcQ',
      category: 'cinematic',
      platform: 'tiktok',
      tool: 'capcut',
      toolName: 'CapCut'
    },
    {
      id: 6,
      title: 'Day in My Life: Student Edition',
      description: 'Follow me through a typical day as a computer engineering student',
      videoId: 'dQw4w9WgXcQ',
      category: 'vlog',
      platform: 'youtube',
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

  // Play video in modal
  const playVideo = (video) => {
    setActiveVideo(video);
  };

  // Close video modal
  const closeModal = () => {
    setActiveVideo(null);
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

  // Get high-quality YouTube thumbnails directly from the video ID
  const getYouTubeThumbnail = (videoId) => {
    // maxresdefault gives the highest quality thumbnail when available
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
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
          <a id='youtube-button' href="https://youtube.com/@AnujaVideos" target="_blank" rel="noopener noreferrer">
            <FaYoutube /> YouTube
          </a>
          <a id='tiktok-button' href="https://tiktok.com/anuja_geeth" target="_blank" rel="noopener noreferrer">
            <FaTiktok /> TikTok
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
            <div key={i} className="video-skeleton"></div>
          ))}
        </div>
      ) : (
        <div className="video-grid">
          {filteredVideos.length > 0 ? (
            filteredVideos.map(video => (
              <div key={video.id} className="video-item" onClick={() => playVideo(video)}>
                <div className="video-thumbnail">
                  {/* Use YouTube thumbnail if it's a YouTube video */}
                  <img 
                    src={video.platform === 'youtube' ? getYouTubeThumbnail(video.videoId) : video.thumbnailUrl || getYouTubeThumbnail(video.videoId)} 
                    alt={video.title} 
                    loading="lazy"
                    onError={(e) => {
                      // Fallback to medium quality thumbnail if maxresdefault fails
                      if (e.target.src.includes('maxresdefault')) {
                        e.target.src = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;
                      }
                    }}
                  />
                  <div className="play-overlay">
                    <FaPlay />
                    <span className="duration">{video.duration}</span>
                  </div>
                  {getPlatformIcon(video.platform)}
                </div>
                <div className="video-info">
                  <h4>{video.title}</h4>
                  <p>{video.description}</p>
                  {/* {video.views && (
                    <div className="video-stats">
                      <span className="views">{video.views} views</span>
                    </div>
                  )} */}
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

      {/* Video Modal */}
      {activeVideo && (
        <VideoModal video={activeVideo} onClose={closeModal} />
      )}
    </div>
  );
};

export default VideoEditing;