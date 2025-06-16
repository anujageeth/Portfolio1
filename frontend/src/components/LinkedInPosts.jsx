import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { FaLinkedinIn } from 'react-icons/fa';
import '../styles/LinkedInPosts.css';

const LinkedInPosts = () => {
  const [loading, setLoading] = useState(true);
  const [postsLoaded, setPostsLoaded] = useState(0);
  const navigate = useNavigate();

  // LinkedIn post URLs
  const linkedInPosts = [
    "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7336277283126595584?collapsed=1",
    "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7337791637944705024?collapsed=1",
    "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7196296814348664832?collapsed=1"
  ];

  // Function to handle iframe load events
  const handleIframeLoad = () => {
    setPostsLoaded(prev => prev + 1);
    if (postsLoaded === linkedInPosts.length - 1) {
      setLoading(false);
    }
  };

    const handleLinkedInClick = () => {
        window.open('https://www.linkedin.com/in/anujageeth', '_blank');
    };

  // Track loading state
  useEffect(() => {
    // Set a timeout to hide loader even if iframes fail to trigger onLoad
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="linkedin-posts">
      <div className="container">
        <h2>Recent LinkedIn Activities</h2>
        <p className="section-intro">
          Check out my latest articles, updates, and thoughts on LinkedIn
        </p>
        
        {loading && (
          <div className="posts-loading">
            <div className="loading-spinner"></div>
            <p>Loading LinkedIn posts...</p>
          </div>
        )}
        
        <div className={`linkedin-posts-container ${loading ? 'loading' : 'loaded'}`}>
          {linkedInPosts.map((postUrl, index) => (
            <div key={index} className="linkedin-post-wrapper">
              <div className="linkedin-post">
                <iframe 
                  src={postUrl} 
                  height="542" 
                  width="504" 
                  frameBorder="0" 
                  allowFullScreen={true} 
                  title={`LinkedIn Embedded Post ${index + 1}`}
                  onLoad={handleIframeLoad}
                ></iframe>
              </div>
            </div>
          ))}
        </div>

        <div className="linkedin-cta">
          <p>Want to see more?</p>
          <button onClick={handleLinkedInClick} className="btn1">Connect with me on LinkedIn!</button>
          {/* <a 
            href="https://www.linkedin.com/in/your-linkedin-profile/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn linkedin-btn"
          >
            Visit My LinkedIn Profile
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default LinkedInPosts;