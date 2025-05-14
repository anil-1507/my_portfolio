import React, { useState } from 'react';
import './FloatingDownloadButton.css'; // Import external CSS

const FloatingDownloadButton = () => {
  const [isHovered, setIsHovered] = useState(false); // State to track hover

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1ep5yX9wzFVdqTT6t69Np8M2R8AWfH5eK';
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="floating-button-wrapper">
      <button
        className="floating-btn"
        onClick={handleDownload}
        onMouseEnter={() => setIsHovered(true)}  // Hover start
        onMouseLeave={() => setIsHovered(false)} // Hover end
      >
        <svg className="svg-icon" viewBox="0 0 384 512" height="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 
          0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 
          14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 
          0s-12.5 32.8 0 45.3l160 160z" />
        </svg>
        <span className="icon2" />
      </button>

      {/* Show the message on hover */}
      {isHovered && (
        <div className="download-message">
          View the resume
        </div>
      )}
    </div>
  );
};

export default FloatingDownloadButton;
