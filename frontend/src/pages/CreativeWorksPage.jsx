import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Photography from '../components/Photography';
import GraphicDesign from '../components/GraphicDesign';
import VideoEditing from '../components/VideoEditing';
import { FaCamera, FaPaintBrush, FaVideo } from 'react-icons/fa';
import '../styles/CreativeWorksPage.css';

const CreativeWorksPage = () => {
  const [activeTab, setActiveTab] = useState('photography');
  const [animationClass, setAnimationClass] = useState('slide-left');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if there's a tab specified in location state (from header dropdown)
    if (location.state && location.state.activeTab) {
      // Set animation class based on the new tab
      setAnimationClassForTab(location.state.activeTab);
      setActiveTab(location.state.activeTab);
    }
    
    // Check if we're on a specific path
    const path = location.pathname;
    if (path === '/creative/photography') {
      setAnimationClassForTab('photography');
      setActiveTab('photography');
    } else if (path === '/creative/graphic') {
      setAnimationClassForTab('design');
      setActiveTab('design');
    } else if (path === '/creative/video') {
      setAnimationClassForTab('video');
      setActiveTab('video');
    }
  }, [location]);

  // Set the animation class based on the tab
  const setAnimationClassForTab = (tab) => {
    switch(tab) {
      case 'photography':
        setAnimationClass('slide-left');
        break;
      case 'design':
        setAnimationClass('slide-up');
        break;
      case 'video':
        setAnimationClass('slide-right');
        break;
      default:
        setAnimationClass('slide-left');
    }
  };

  // Change tab and update URL
  const changeTab = (tab) => {
    // Set animation class based on the new tab
    setAnimationClassForTab(tab);
    setActiveTab(tab);
    
    // Update the URL with the correct path
    const paths = {
      photography: '/creative/',
      design: '/creative',
      video: '/creative'
    };
    
    navigate(paths[tab], { state: { activeTab: tab }, replace: true });
  };

  return (
    <div className="creative-works-page">
      <div className="creative-works-header">
        <h2>Creative Portfolio</h2>
        <p className="subtitle">Explore my creative side through photography, design & video work</p>
      </div>

      <div className="creative-tabs">
        <button 
          className={`tab-button ${activeTab === 'photography' ? 'active' : ''}`}
          onClick={() => changeTab('photography')}
        >
          <FaCamera className="tab-icon" />
          <span>Photography</span>
        </button>
        <button 
          className={`tab-button ${activeTab === 'design' ? 'active' : ''}`}
          onClick={() => changeTab('design')}
        >
          <FaPaintBrush className="tab-icon" />
          <span>Graphic Design</span>
        </button>
        <button 
          className={`tab-button ${activeTab === 'video' ? 'active' : ''}`}
          onClick={() => changeTab('video')}
        >
          <FaVideo className="tab-icon" />
          <span>Video Editing</span>
        </button>
      </div>

      <div className={`creative-content ${animationClass}`}>
        {activeTab === 'photography' && <Photography />}
        {activeTab === 'design' && <GraphicDesign />}
        {activeTab === 'video' && <VideoEditing />}
      </div>
    </div>
  );
};

export default CreativeWorksPage;