import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Loading = () => {
  const [progress, setProgress] = useState(0);
  const [textDropped, setTextDropped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 50); // 50ms interval for smooth progress (100*50ms = 5000ms = 5s)

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        setTextDropped(true);
      }, 500); // Small delay after completion before dropping text
      return () => clearTimeout(timer);
    }
  }, [progress]);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 bg-light">
      <div className="text-center mb-4" style={{ 
        transform: textDropped ? 'translateY(50px)' : 'translateY(0)',
        transition: 'transform 0.5s ease-out'
      }}>
        <h1 className="display-4 mb-3">Loading</h1>
        <div 
          className="border-bottom border-3 border-primary" 
          style={{
            width: `${progress}%`,
            transition: 'width 0.05s linear',
            height: '4px'
          }}
        ></div>
      </div>
      
      {progress === 100 && (
        <div className="mt-5 text-center animate__animated animate__fadeIn">
          <h2 className="text-success">Complete!</h2>
        </div>
      )}
    </div>
  );
};

export default Loading;