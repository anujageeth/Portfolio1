import React, { useState, useEffect, useRef } from 'react';
import { FaYoutube, FaTiktok, FaFacebook, FaPlay, FaSearch, FaCut, FaChevronDown, FaFilter, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { SiAdobepremierepro, SiDavinciresolve, SiTiktok } from 'react-icons/si';
import VideoModal from './VideoModal';
import TikTokThumbnail from './TikTokThumbnail';
import tikTokVidThumb from '../assets/TikTokVidThumb.png';
import FaceBookVidThumb from '../assets/FaceBookVidThumb.png';
import '../styles/VideoEditing.css';

const VideoEditing = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeVideo, setActiveVideo] = useState(null);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [platformFilters, setPlatformFilters] = useState({
    youtube: true,
    tiktok: true,
    facebook: true
  });
  const [searchQuery, setSearchQuery] = useState('');
  const categoryDropdownRef = useRef(null);
  
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Videos' },
    { id: 'short', name: 'Short Videos' },
    { id: 'cinematic', name: 'Cinematics' },
    { id: 'vlog', name: 'Vlogs' },
    { id: 'event', name: 'Event Coverage' },
    { id: 'documentry', name: 'Documentary' },
  ];

  // YouTube Video IDs instead of full URLs
  const sampleVideos = [
    {
      id: 1,
      title: 'Sanda Nena Da - Video Cover',
      description: 'Immerse yourself in the melancholic beauty of "Sanda Nena Da". This video tells the poignant story, capturing the essence of lost love through evocative visuals and soothing melodies. Let the hauntingly beautiful music and the emotional journey of our characters resonate with your heart. Don\'t forget to like, comment, and subscribe for more LoFi music and touching stories.',
      videoId: 'WNzlQCkvoZY',
      category: 'cinematic',
      platform: 'youtube',
      tool: 'premiere',
      toolName: 'Adobe Premiere Pro'
    },
    {
      id: 2,
      title: 'Lotus Tower 🗼',
      description: 'Experience the stunning Lotus Tower in Colombo, Sri Lanka, through this captivating video edit. The Lotus Tower, a symbol of modern architecture and cultural significance, stands tall against the city skyline.',
      videoId: '7516120448174755080',
      category: 'short',
      platform: 'tiktok',
      tool: 'capcut',
      toolName: 'CapCut'
    },
    {
      id: 3,
      title: 'Exploring Sri Lanka\'s Top Software Companies | 99x, Creative Software, IFS & WSO2',
      description: 'In this video, we explore how these companies operate, their software development lifecycle, work culture, and cutting-edge technologies. From AI innovations to agile methodologies, each visit gave us valuable insights into the world of software engineering.',
      videoId: 'R_i8nA9w7SA',
      category: 'documentry',
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
      tool: 'capcut',
      toolName: 'Capcut'
    },
    {
      id: 5,
      title: 'Hithawanthi - Video Cover',
      description: 'mmerse yourself in the enchanting beauty of nature as we present our heartfelt video cover of the soul-soothing song "Hithawanthi". Set against the backdrop of a tranquil and picturesque lake, our visual interpretation captures the essence of this calm and slow melody that narrates a beautiful love story.',
      videoId: '9qNBSWE9H2I',
      category: 'cinematic',
      platform: 'youtube',
      tool: 'capcut',
      toolName: 'CapCut'
    },
    {
      id: 6,
      title: 'Surfing day 🌊 ',
      description: 'Join us for an exhilarating day of surfing at Dewata, Sri Lanka! 🏄‍♂️🌊 Experience the thrill of catching waves, the beauty of the ocean, and the joy of riding with friends. Whether you\'re a seasoned surfer or just love the beach vibes, this video captures the essence of a perfect surfing day.',
      videoId: '7480915248459828488',
      category: 'short',
      platform: 'tiktok',
      tool: 'premiere',
      toolName: 'Adobe Premiere Pro'
    },
    {
      id: 7,
      title: 'Calming vibes ✨',
      description: 'Experience the serene beauty of nature with our calming video edit. This short film captures the essence of tranquility, featuring breathtaking landscapes and soothing visuals that will transport you to a peaceful state of mind.',
      videoId: '7446394469706860039',
      category: 'short',
      platform: 'tiktok',
      tool: 'capcut',
      toolName: 'CapCut'
    },
    {
      id: 8,
      title: 'Pretty Little Baby - Video Cover',
      description: 'A surreal nightmare unfolds in this short thriller where reality blurs with fear. In a dreamlike haze, I’m being followed - watched - hunted. The tension builds with every step as the line between dream and danger fades. Set to the hauntingly beautiful rhythm of "Pretty Little Baby", this cinematic piece invites you into a world of suspense, emotion, and eerie calm before chaos.',
      videoId: 'zs_0zDw-O64',
      category: 'cinematic',
      platform: 'youtube',
      tool: 'capcut',
      toolName: 'CapCut'
    },
    {
      id: 9,
      title: 'Riduman - Video Cover',
      description: 'Explore our rendition of the captivating song "Riduman" in our unique video cover. Immerse yourself in a fresh interpretation that brings a new perspective to the mesmerizing melody. 🎶',
      videoId: 'YW9FQ9s0GCw',
      category: 'cinematic',
      platform: 'youtube',
      tool: 'capcut',
      toolName: 'CapCut'
    },
    {
      id: 10,
      title: 'Gall Fort 🏛️ - A walk on streets',
      description: 'Join us for a serene walk through the historic streets of Galle Fort, Sri Lanka. Experience the charm and tranquility of Galle Fort as we stroll through its picturesque lanes.',
      videoId: '7446394469706860039',
      category: 'short',
      platform: 'tiktok',
      tool: 'capcut',
      toolName: 'CapCut'
    },
    {
      id: 11,
      title: 'Video Advertisement - Business Studies',
      description: 'This is a short video advertisement for a Business Studies private tuition class. It highlights the key features and benefits of the class, aiming to attract students who are interested in enhancing their knowledge in Business Studies.',
      videoId: '1073650260685879',
      category: 'short',
      platform: 'facebook',
      tool: 'capcut',
      toolName: 'CapCut'
    },
    {
      id: 12,
      title: 'LabMS (Lab Management System) web application - A comprehensive demonstration',
      description: 'LabMS is a full-featured web-based system developed to efficiently manage laboratory equipment and operations in an academic environment. Built by a team of 4 for the Electrical Department, the system includes equipment tracking with CRUD operations, low stock alerts, user role management (HoD, Technical Officers, Instructors, Lecturers, Students), report generation, lab booking features, and real-time notifications.',
      videoId: '_Ip44sG_QxM',
      category: 'documentry',
      platform: 'youtube',
      tool: 'premiere',
      toolName: 'Adobe Premiere Pro'
    }
  ];

  useEffect(() => {
    // Reset to first page when filters change
    setCurrentPage(1);
    
    // Simulate loading data from API
    setTimeout(() => {
      setVideos(sampleVideos);
      setLoading(false);
    }, 1000);

    // Handle clicks outside dropdown
    const handleClickOutside = (event) => {
      if (categoryDropdownRef.current && !categoryDropdownRef.current.contains(event.target)) {
        setShowCategoryDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedCategory, platformFilters, searchQuery]);

  // Play video in modal
  const playVideo = (video) => {
    setActiveVideo(video);
    document.body.setAttribute('data-platform', video.platform);
    document.body.classList.add('modal-open'); // Add class when modal opens
  };

  // Close video modal
  const closeModal = () => {
    setActiveVideo(null);
    document.body.removeAttribute('data-platform');
    document.body.classList.remove('modal-open'); // Remove class when modal closes
  };

  // Toggle platform filter
  const togglePlatformFilter = (platform) => {
    setPlatformFilters(prev => ({
      ...prev,
      [platform]: !prev[platform]
    }));
  };

  // Reset all filters and search
  const resetFilters = () => {
    setSelectedCategory('all');
    setPlatformFilters({
      youtube: true,
      tiktok: true,
      facebook: true
    });
    setSearchQuery('');
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
      case 'facebook':
        return <FaFacebook className="platform-icon facebook" />;
      default:
        return null;
    }
  };

  // Get video thumbnail based on platform
  const getVideoThumbnail = (video) => {
    if (video.platform === 'youtube') {
      return `https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`;
    } else if (video.platform === 'tiktok') {
      return tikTokVidThumb;
    } else if (video.platform === 'facebook') {
      return FaceBookVidThumb;
    }
    return 'https://via.placeholder.com/480x270?text=Video';
  };

  // Filter videos based on category, platform, and search query
  const filteredVideos = videos.filter(video => {
    // Check if video matches category filter
    const matchesCategory = selectedCategory === 'all' || video.category === selectedCategory;
    
    // Check if video matches platform filters
    const matchesPlatform = platformFilters[video.platform];
    
    // Check if video matches search query
    const matchesSearch = searchQuery === '' || 
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      video.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesPlatform && matchesSearch;
  });

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentVideos = filteredVideos.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredVideos.length / itemsPerPage);

  // Change page
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      // Scroll to top of filter container
      document.querySelector('.filter-search-container').scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      // Scroll to top of filter container
      document.querySelector('.filter-search-container').scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Get active category name
  const getActiveCategoryName = () => {
    const category = categories.find(cat => cat.id === selectedCategory);
    return category ? category.name : 'All Videos';
  };

  // Check if any filters are active
  const hasActiveFilters = () => {
    return selectedCategory !== 'all' || 
           !platformFilters.youtube || 
           !platformFilters.tiktok || 
           !platformFilters.facebook ||
           searchQuery !== '';
  };

  // Clean up on component unmount
  useEffect(() => {
    return () => {
      document.body.classList.remove('modal-open'); // Clean up class if component unmounts with modal open
      document.body.removeAttribute('data-platform');
    };
  }, []);

  return (
    <div className="video-editing-container">
      <div className="video-intro">
        {/* <h3>Video Production Portfolio</h3>
        <p>A showcase of my videography and editing work across different styles and topics</p> */}
        
        <div className="channel-link">
          <a id='youtube-button' href="https://youtube.com/@AnujaVideos" target="_blank" rel="noopener noreferrer">
            <FaYoutube /> YouTube
          </a>
          <a id='tiktok-button' href="https://tiktok.com/@anuja_geeth" target="_blank" rel="noopener noreferrer">
            <FaTiktok /> TikTok
          </a>
          <a id='facebook-button' href="https://facebook.com/ColorGcreations" target="_blank" rel="noopener noreferrer">
            <FaFacebook /> Facebook
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

      <div className="filter-search-container">
        {/* Category Dropdown */}
        {/* <div className="filter-group category-dropdown" ref={categoryDropdownRef}>
          <button 
            className="dropdown-toggle"
            onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
          >
            <FaFilter /> {getActiveCategoryName()} <FaChevronDown />
          </button>
          
          {showCategoryDropdown && (
            <div className="dropdown-menu">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`dropdown-item ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setShowCategoryDropdown(false);
                  }}
                >
                  {category.name}
                </button>
              ))}
            </div>
          )}
        </div> */}

        {/* Platform Filter Buttons */}
        <div className="filter-group platform-filters">
          <button
            className={`platform-filter-btn youtube ${platformFilters.youtube ? 'active' : ''}`}
            onClick={() => togglePlatformFilter('youtube')}
            title="Toggle YouTube videos"
          >
            <FaYoutube />
          </button>
          
          <button
            className={`platform-filter-btn tiktok ${platformFilters.tiktok ? 'active' : ''}`}
            onClick={() => togglePlatformFilter('tiktok')}
            title="Toggle TikTok videos"
          >
            <FaTiktok />
          </button>
          
          <button
            className={`platform-filter-btn facebook ${platformFilters.facebook ? 'active' : ''}`}
            onClick={() => togglePlatformFilter('facebook')}
            title="Toggle Facebook videos"
          >
            <FaFacebook />
          </button>
        </div>

        {/* Search Bar */}
        <div className="filter-group search-bar">
          <div className="search-input-wrapper">
            <FaSearch className="search-icon" />
            <input 
              type="text" 
              placeholder="Search videos..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button 
                className="clear-search"
                onClick={() => setSearchQuery('')}
              >
                <FaTimes />
              </button>
            )}
          </div>
        </div>

        {/* Reset Filters Button - shown only when filters are active */}
        {hasActiveFilters() && (
          <button className="reset-filters-btn" onClick={resetFilters}>
            Reset Filters
          </button>
        )}
      </div>

      {loading ? (
        <div className="loading-grid">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="video-skeleton"></div>
          ))}
        </div>
      ) : (
        <>
          {/* Filter Results Summary */}
          <div className="filter-results-summary">
            <span>
              {filteredVideos.length} {filteredVideos.length === 1 ? 'video' : 'videos'} found
              {filteredVideos.length > itemsPerPage && ` (Showing ${indexOfFirstItem + 1}-${Math.min(indexOfLastItem, filteredVideos.length)})`}
            </span>
          </div>

          <div className="video-grid">
            {currentVideos.length > 0 ? (
              currentVideos.map(video => (
                <div 
                  key={video.id} 
                  className={`video-item platform-${video.platform}`} 
                  onClick={() => playVideo(video)}
                >
                  <div className="video-thumbnail">
                    {video.platform === 'tiktok' ? (
                      <TikTokThumbnail video={video} />
                    ) : (
                      <img 
                        src={getVideoThumbnail(video)} 
                        alt={video.title} 
                        loading="lazy"
                        onError={(e) => {
                          // Fallback to medium quality thumbnail if maxresdefault fails
                          if (e.target.src.includes('maxresdefault')) {
                            e.target.src = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;
                          }
                        }}
                      />
                    )}
                    <div className="play-overlay">
                      <FaPlay />
                      <span className="duration">{video.duration}</span>
                    </div>
                    {getPlatformIcon(video.platform)}
                  </div>
                  <div className="video-info">
                    <h4>{video.title}</h4>
                    <p>{video.description.length > 120 ? video.description.substring(0, 120) + '...' : video.description}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-videos">
                <p>No videos found matching your filters.</p>
                <button className="btn1" onClick={resetFilters}>
                  Reset Filters
                </button>
              </div>
            )}
          </div>
          
          {/* Pagination Navigation */}
          {filteredVideos.length > itemsPerPage && (
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
                  Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, filteredVideos.length)} of {filteredVideos.length} videos
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

      {/* Video Modal */}
      {activeVideo && (
        <VideoModal video={activeVideo} onClose={closeModal} />
      )}
    </div>
  );
};

export default VideoEditing;