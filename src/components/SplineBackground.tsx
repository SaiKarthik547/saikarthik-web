import React, { useState, useRef } from 'react';

interface SplineBackgroundProps {
  src: string;
  className?: string;
}

const SplineBackground: React.FC<SplineBackgroundProps> = ({ 
  src, 
  className = "" 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={`fixed inset-0 w-full h-full ${className}`} style={{ zIndex: 0 }}>
      {/* Loading skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 animate-pulse" />
      )}
      
      {/* Spline iframe */}
      <iframe
        ref={iframeRef}
        src={src}
        className={`w-full h-full border-0 transition-opacity duration-1000 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          pointerEvents: 'none',
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
    </div>
  );
};

export default SplineBackground;