/**
 * Device detection and performance utilities
 */

export interface DeviceInfo {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isLowEndDevice: boolean;
  performance: 'low' | 'medium' | 'high';
  screenWidth: number;
  screenHeight: number;
  pixelRatio: number;
  touchSupport: boolean;
  hasHover: boolean;
  ram?: number;
  cpuCores?: number;
}

/**
 * Detect device type and performance with enhanced accuracy
 */
export const getDeviceInfo = (): DeviceInfo => {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const pixelRatio = window.devicePixelRatio || 1;
  const touchSupport = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const hasHover = window.matchMedia('(hover: hover)').matches;
  
  // More precise device type detection
  const isMobile = screenWidth <= 768 || (touchSupport && screenWidth <= 1024);
  const isTablet = (screenWidth > 768 && screenWidth <= 1024) || (touchSupport && !isMobile && screenWidth <= 1200);
  const isDesktop = screenWidth > 1024 && !touchSupport;
  
  // Performance detection based on multiple factors
  let performance: 'low' | 'medium' | 'high' = 'high';
  let isLowEndDevice = false;
  let ram: number | undefined;
  let cpuCores: number | undefined;
  
  // Enhanced performance detection
  try {
    // @ts-ignore - navigator properties may not exist in all browsers
    if (navigator.deviceMemory) {
      // @ts-ignore
      ram = navigator.deviceMemory; // GB
    }
    
    // @ts-ignore
    if (navigator.hardwareConcurrency) {
      // @ts-ignore
      cpuCores = navigator.hardwareConcurrency;
    }
    
    // Low-end device detection based on multiple factors
    if (ram !== undefined && cpuCores !== undefined) {
      // Very low-end: <= 2GB RAM or <= 2 cores
      if (ram <= 2 || cpuCores <= 2) {
        performance = 'low';
        isLowEndDevice = true;
      } 
      // Medium performance: <= 4GB RAM or <= 4 cores
      else if (ram <= 4 || cpuCores <= 4) {
        performance = 'medium';
      } 
      // High performance: > 4GB RAM and > 4 cores
      else {
        performance = 'high';
      }
    } else {
      // Fallback detection for browsers that don't support deviceMemory/hardwareConcurrency
      if (isMobile) {
        // Additional checks for mobile devices
        if (screenWidth <= 480 && pixelRatio > 2) {
          // High pixel ratio on small screens often indicates older devices
          performance = 'low';
          isLowEndDevice = true;
        } else {
          performance = 'medium';
        }
      } else if (isTablet) {
        performance = 'medium';
      }
    }
  } catch (e) {
    // Fallback if any errors occur
    if (isMobile) {
      performance = 'medium';
    }
  }
  
  // Very old devices detection
  const isOldDevice = !window.requestAnimationFrame || !window.Promise;
  if (isOldDevice) {
    isLowEndDevice = true;
    performance = 'low';
  }
  
  // Additional low-end detection based on connection
  // @ts-ignore
  if (navigator.connection) {
    // @ts-ignore
    const connection = navigator.connection;
    // Slow connection often indicates lower-end devices or poor network
    if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
      isLowEndDevice = true;
      performance = 'low';
    } else if (connection.effectiveType === '3g') {
      performance = 'medium';
    }
  }
  
  return {
    isMobile,
    isTablet,
    isDesktop,
    isLowEndDevice,
    performance,
    screenWidth,
    screenHeight,
    pixelRatio,
    touchSupport,
    hasHover,
    ram,
    cpuCores
  };
};

/**
 * Check if device is low performance
 */
export const isLowPerformanceDevice = (): boolean => {
  // const deviceInfo = getDeviceInfo();
  return false; // Simplified for now
};

/**
 * Check if we should reduce animations/effects
 */
export const shouldReduceMotion = (): boolean => {
  const deviceInfo = getDeviceInfo();
  // Reduce motion on mobile devices, low-performance devices, or when user prefers reduced motion
  return deviceInfo.isMobile || 
         deviceInfo.performance === 'low' || 
         deviceInfo.isLowEndDevice ||
         (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) ||
         false;
};

/**
 * Get optimization level based on device capabilities
 */
export const getOptimizationLevel = (): 'very-low' | 'low' | 'medium' | 'high' => {
  const deviceInfo = getDeviceInfo();
  
  // Very low optimization for extremely constrained devices
  if (deviceInfo.isLowEndDevice || deviceInfo.performance === 'low') {
    return 'very-low';
  }
  
  // Low optimization for mobile devices or medium performance devices
  if (deviceInfo.isMobile || deviceInfo.performance === 'medium') {
    return 'low';
  }
  
  // Medium optimization for tablets or desktops with medium performance
  if (deviceInfo.isTablet) {
    return 'medium';
  }
  
  // High optimization for high-performance desktops
  return 'high';
};

/**
 * Get optimized settings based on device
 */
export const getOptimizationSettings = () => {
  const optimizationLevel = getOptimizationLevel();
  
  // Settings based on optimization level
  const settings = {
    // Very low settings for extremely constrained devices
    'very-low': {
      reduce3DBackgroundQuality: true,
      simplifyAnimations: true,
      reduceBlurEffects: true,
      reduceGradientComplexity: true,
      reduceShadowIntensity: true,
      reduceGlassEffect: true,
      animationDurationMultiplier: 2,
      reduceImageQuality: true,
      simplifyLayouts: true,
      reduceFontLoading: true,
      disableBackdropBlur: true,
      disable3DBackgrounds: true,
      simplifyNavigation: true,
      reducePadding: true,
      smallerFonts: true
    },
    
    // Low settings for mobile devices
    'low': {
      reduce3DBackgroundQuality: true,
      simplifyAnimations: true,
      reduceBlurEffects: true,
      reduceGradientComplexity: false,
      reduceShadowIntensity: true,
      reduceGlassEffect: true,
      animationDurationMultiplier: 1.5,
      reduceImageQuality: false,
      simplifyLayouts: true,
      reduceFontLoading: false,
      disableBackdropBlur: true,
      disable3DBackgrounds: false,
      simplifyNavigation: true,
      reducePadding: true,
      smallerFonts: true
    },
    
    // Medium settings for tablets
    'medium': {
      reduce3DBackgroundQuality: true,
      simplifyAnimations: false,
      reduceBlurEffects: false,
      reduceGradientComplexity: false,
      reduceShadowIntensity: false,
      reduceGlassEffect: false,
      animationDurationMultiplier: 1.2,
      reduceImageQuality: false,
      simplifyLayouts: false,
      reduceFontLoading: false,
      disableBackdropBlur: false,
      disable3DBackgrounds: false,
      simplifyNavigation: false,
      reducePadding: false,
      smallerFonts: false
    },
    
    // High settings for high-performance desktops
    'high': {
      reduce3DBackgroundQuality: false,
      simplifyAnimations: false,
      reduceBlurEffects: false,
      reduceGradientComplexity: false,
      reduceShadowIntensity: false,
      reduceGlassEffect: false,
      animationDurationMultiplier: 1,
      reduceImageQuality: false,
      simplifyLayouts: false,
      reduceFontLoading: false,
      disableBackdropBlur: false,
      disable3DBackgrounds: false,
      simplifyNavigation: false,
      reducePadding: false,
      smallerFonts: false
    }
  };
  
  return settings[optimizationLevel];
};

/**
 * Get CSS classes based on device optimization needs
 */
export const getOptimizedClasses = () => {
  const optimizationLevel = getOptimizationLevel();
  
  const classes = [];
  
  switch (optimizationLevel) {
    case 'very-low':
      classes.push('very-low-end-optimized');
      break;
    case 'low':
      classes.push('low-end-optimized');
      break;
    case 'medium':
      classes.push('medium-performance-optimized');
      break;
    default:
      // High performance - no special classes needed
      break;
  }
  
  return classes.join(' ');
};