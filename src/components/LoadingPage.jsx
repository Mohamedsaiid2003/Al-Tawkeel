import React, { useState, useEffect } from 'react';

const LoadingPage = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onLoadingComplete, 800);
          return 100;
        }
        return prev + 1.5;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Animated Gradient Text */}
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-wider bg-gradient-to-r from-pink-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
          Al-Tawkeel
        </h1>
        <p className="text-slate-300 mt-6 text-lg font-medium animate-fadeInUp">
          Expert Home Appliance Repair
        </p>
        <div className="w-96 h-1.5 bg-slate-700 rounded-full overflow-hidden mt-8 mx-auto">
          <div
            className="h-full bg-gradient-to-r from-pink-500 to-blue-500 rounded-full transition-all duration-300 shadow-glow"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;