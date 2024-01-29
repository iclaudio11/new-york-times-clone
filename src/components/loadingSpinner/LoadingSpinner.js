import React from 'react';
import { TailSpin } from 'react-loader-spinner';
import './loadingSpinner.css';

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner-container">
      <div className="loading-spinner-overlay"></div>
      <div className="loading-spinner">
        <TailSpin color="#FFFFFF" height={80} width={80} />
      </div>
    </div>
  );
};

export default LoadingSpinner;
