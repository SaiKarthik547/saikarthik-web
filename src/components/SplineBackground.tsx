import React, { useState, useEffect } from 'react';

interface SplineBackgroundProps {
  src: string;
  className?: string;
  mobileOptimized?: boolean;
}

const SplineBackground: React.FC<SplineBackgroundProps> = ({ 
  src, 
  className = "", 
  mobileOptimized = true 
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={`fixed inset-0 w-full h-full ${className}`} style={{ zIndex: 0 }}>
      {/* Loading skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 animate-pulse" />
      )}
      
      {/* Spline iframe with mobile optimization */}
      <iframe
        src={src}
        className={`w-full h-full border-0 transition-opacity duration-1000 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          pointerEvents: 'none',
          // Reduce quality on mobile for better performance
          filter: mobileOptimized && isMobile ? 'blur(0.5px)' : 'none',
        }}
        onLoad={handleLoad}
        loading="lazy"
        title="3D Background"
      />
      
      {/* Subtle overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/5" />
      
      {/* Compact watermark coverage positioned above Spline watermark */}
      <div className="absolute bottom-2 right-6 w-32 h-14 pointer-events-none">
        <div className="w-full h-full bg-black rounded-xl" />
        {/* Golden SK logo */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black border-2 border-yellow-400 flex items-center justify-center shadow-lg">
          <span className="text-yellow-400 font-bold text-xs tracking-wide" style={{ textShadow: '0 0 12px rgba(255, 215, 0, 0.9), 0 0 20px rgba(255, 215, 0, 0.6)' }}>SK</span>
        </div>
      </div>
      
      {/* Fallback gradient for very small screens */}
      {mobileOptimized && isMobile && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 opacity-50 block sm:hidden" />
      )}
    </div>
  );
};

export default SplineBackground;