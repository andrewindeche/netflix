import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  const handleTryAgain = () => {
    navigate(0); 
  };

  return (
    <div className="error-page">
      <div className="error-content">
        <h1 className="error-title">Oops! Something went wrong.</h1>
        <p className="error-message">
          It looks like an error occurred. We're sorry for the inconvenience.
        </p>
        <div className="error-actions">
          <button onClick={handleGoHome} className="btn-primary">Go to Home</button>
          <button onClick={handleTryAgain} className="btn-secondary">Try Again</button>
        </div>
      </div>
      <div className="error-image">
        <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="Error Illustration" />
      </div>
    </div>
  );
};

export default ErrorPage;
