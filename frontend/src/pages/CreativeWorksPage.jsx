import React, { useState } from 'react';
import Photography from '../components/Photography';
import GraphicDesign from '../components/GraphicDesign';
import VideoEditing from '../components/VideoEditing';
import { FaCamera, FaPaintBrush, FaVideo } from 'react-icons/fa';
import '../styles/CreativeWorksPage.css';

const CreativeWorksPage = () => {
  const [activeTab, setActiveTab] = useState('photography');

  return (
    <div className="creative-works-page">
      <div className="creative-works-header">
        <h2>Creative Portfolio</h2>
        <p className="subtitle">Explore my creative side through photography, design & video work</p>
      </div>

      <div className="creative-tabs">
        <button 
          className={`tab-button ${activeTab === 'photography' ? 'active' : ''}`}
          onClick={() => setActiveTab('photography')}
        >
          <FaCamera className="tab-icon" />
          <span>Photography</span>
        </button>
        <button 
          className={`tab-button ${activeTab === 'design' ? 'active' : ''}`}
          onClick={() => setActiveTab('design')}
        >
          <FaPaintBrush className="tab-icon" />
          <span>Graphic Design</span>
        </button>
        <button 
          className={`tab-button ${activeTab === 'video' ? 'active' : ''}`}
          onClick={() => setActiveTab('video')}
        >
          <FaVideo className="tab-icon" />
          <span>Video Editing</span>
        </button>
      </div>

      <div className="creative-content">
        {activeTab === 'photography' && <Photography />}
        {activeTab === 'design' && <GraphicDesign />}
        {activeTab === 'video' && <VideoEditing />}
      </div>
    </div>
  );
};

export default CreativeWorksPage;