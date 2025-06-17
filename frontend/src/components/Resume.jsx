import React from 'react';
import { FaDownload } from 'react-icons/fa';
import '../styles/Resume.css';

const Resume = () => {
  // Google Drive PDF URL
  const googleDrivePdfId = "1zHxQZ0glWc5uAt30hAglvvU3BvtllUA2";
  
  // Use Google Docs viewer instead which has better width handling
  const pdfViewerUrl = `https://docs.google.com/viewer?embedded=true&url=https://drive.google.com/uc?export=view&id=${googleDrivePdfId}`;
  
  // Alternative approach using direct embed
  const directEmbedUrl = `https://drive.google.com/file/d/${googleDrivePdfId}/preview`;
  
  // Direct download link
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${googleDrivePdfId}`;

  return (
    <div className="resume-container">
      <div className="resume-header">
        <h2>My Resume
            <a 
                href={downloadUrl}
                className="download-btn"
                title="Download Resume"
                target="_blank"
                rel="noopener noreferrer"
                >
                <FaDownload /> Download
            </a>
        </h2>
      </div>

      <div className="pdf-container">
        <iframe
          src={directEmbedUrl}
          title="Anuja Geeth - Resume"
          className="resume-iframe"
          frameBorder="0"
          allowFullScreen
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </div>
  );
};

export default Resume;