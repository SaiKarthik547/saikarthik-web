import React, { useState, useEffect, useRef } from 'react';
import { getDeviceInfo, getOptimizationLevel } from '../utils/deviceDetection';

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
  const [optimizationLevel, setOptimizationLevel] = useState<'very-low' | 'low' | 'medium' | 'high'>('high');
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const deviceInfo = getDeviceInfo();
    const optLevel = getOptimizationLevel();
    
    setIsMobile(deviceInfo.isMobile);
    setOptimizationLevel(optLevel);
  }, []);

  const handleLoad = () => {
    setIsLoading(false);
  };

  // For very low-end devices, don't show 3D background at all
  if (optimizationLevel === 'very-low') {
    return (
      <div className={`fixed inset-0 w-full h-full ${className}`} style={{ zIndex: 0 }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900" />
        
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
  }

  // For low-performance devices, show a simpler gradient background
  if (optimizationLevel === 'low' || (mobileOptimized && isMobile)) {
    return (
      <div className={`fixed inset-0 w-full h-full ${className}`} style={{ zIndex: 0 }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900" />
        
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
  }

  // Determine if we should show the 3D background based on device and performance
  const shouldShow3D = mobileOptimized ? 
    (isMobile ? optimizationLevel !== 'low' : true) : 
    true;

  return (
    <div className={`fixed inset-0 w-full h-full ${className}`} style={{ zIndex: 0 }}>
      {/* Loading skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 animate-pulse" />
      )}
      
      {/* Spline iframe with enhanced mobile optimization */}
      {shouldShow3D && (
        <iframe
          ref={iframeRef}
          src={src}
          className={`w-full h-full border-0 transition-opacity duration-1000 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            pointerEvents: 'none',
            // Enhanced optimization for mobile devices
            filter: mobileOptimized && isMobile ? 
              (optimizationLevel === 'low' ? 'blur(1px) brightness(1.1)' : 'blur(0.5px)') : 
              'none',
            // Reduce rendering quality on lower-end devices
            transform: mobileOptimized && isMobile && optimizationLevel !== 'high' ? 'translateZ(0)' : undefined,
          }}
          onLoad={handleLoad}
          loading="lazy"
          title="3D Background"
        />
      )}
      
      {/* Fallback gradient for very small screens or when 3D is disabled */}
      {(!shouldShow3D || (mobileOptimized && isMobile)) && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 opacity-50" />
      )}
      
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