import React from 'react';
import './UnderConstruction.css';
import construction from '../../assets/construction.jpeg';
import companyProfilePDF from '../../assets/hemllin_custom.pdf';

const UnderConstruction = () => {
  const downloadProfile = () => {
    // Use the imported file path for the company profile PDF
    window.open(companyProfilePDF, '_blank');
  };

  return (
    <>
    <div className="under-construction-container">
      <div className="under-construction-intro">
        <h1>Website is Under Construction</h1>
        <p>We are working on something awesome! Stay tuned...</p>
        {/* download profile document button */}
        <button className="download-button" onClick={downloadProfile}>
          Download Company Profile
        </button>
      </div>
      <div className="under-construction-image">
        <img src={construction} alt="Under Construction"/>
      </div>
      </div>
    <div class="custom-shape-divider-bottom-1690816741">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
        <div className="custom-shape-divider-bottom"></div>
    </div>
    </>
  );
};

export default UnderConstruction;