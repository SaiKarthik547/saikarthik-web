import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import SplineBackground from '../components/SplineBackground';
import { portfolioData, splineBackgrounds } from '../data/portfolioData';
import { getDeviceInfo, shouldReduceMotion, getOptimizationLevel } from '../utils/deviceDetection';

const Home: React.FC = () => {
  const { personal } = portfolioData;
  const [isMobile, setIsMobile] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [optimizationLevel, setOptimizationLevel] = useState<'very-low' | 'low' | 'medium' | 'high'>('high');

  useEffect(() => {
    const deviceInfo = getDeviceInfo();
    const optLevel = getOptimizationLevel();
    
    setIsMobile(deviceInfo.isMobile);
    setReduceMotion(shouldReduceMotion());
    setOptimizationLevel(optLevel);
  }, []);

  // For very low-end devices, show a simplified version
  if (optimizationLevel === 'very-low') {
    return (
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Spline 3D Background with mobile optimization */}
        <SplineBackground 
          src={splineBackgrounds.home} 
          className="opacity-90"
          mobileOptimized={true}
        />
        
        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
          {/* Profile Image/Initials */}
          <div className="mb-6 mx-auto w-16 h-16 rounded-full glass flex items-center justify-center shadow-neon backdrop-blur-sm">
            <span className="text-xl font-bold gradient-text">
              {personal.initials}
            </span>
          </div>

          {/* Name */}
          <h1 className="text-2xl font-bold mb-3">
            <span className="gradient-text">{personal.name}</span>
          </h1>

          {/* Title */}
          <p className="text-base text-gray-300 mb-4 font-medium">
            {personal.title}
          </p>

          {/* Description */}
          <p className="text-sm text-gray-400 mb-6 leading-relaxed">
            {personal.description}
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-3 mb-6">
            <a
              href={`mailto:${personal.contact.email}`}
              className="p-2 rounded-full glass hover:shadow-neon transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-4 h-4 text-gray-300" />
            </a>
            <a
              href={`https://${personal.contact.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full glass hover:shadow-neon transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-gray-300" />
            </a>
            <a
              href={`https://${personal.contact.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full glass hover:shadow-neon transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4 text-gray-300" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Simplified version for mobile or low-performance devices
  if (reduceMotion || optimizationLevel === 'low') {
    return (
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Spline 3D Background with mobile optimization */}
        <SplineBackground 
          src={splineBackgrounds.home} 
          className="opacity-90"
          mobileOptimized={true}
        />
        
        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
          {/* Profile Image/Initials */}
          <div className="mb-8 mx-auto w-24 h-24 rounded-full glass flex items-center justify-center shadow-neon backdrop-blur-sm">
            <span className="text-3xl font-bold gradient-text">
              {personal.initials}
            </span>
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">{personal.name}</span>
          </h1>

          {/* Title */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 font-medium">
            {personal.title}
          </p>

          {/* Description */}
          <p className="text-base text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            {personal.description}
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            <a
              href={`mailto:${personal.contact.email}`}
              className="p-3 rounded-full glass hover:shadow-neon transition-all duration-300 hover:scale-110 group"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 text-gray-300 group-hover:text-primary-400 transition-colors duration-300" />
            </a>
            <a
              href={`https://${personal.contact.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover:shadow-neon transition-all duration-300 hover:scale-110 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-primary-400 transition-colors duration-300" />
            </a>
            <a
              href={`https://${personal.contact.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover:shadow-neon transition-all duration-300 hover:scale-110 group"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 text-gray-300 group-hover:text-primary-400 transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Full animation version for desktop/high-performance devices
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Spline 3D Background with mobile optimization */}
      <SplineBackground 
        src={splineBackgrounds.home} 
        className="opacity-90"
        mobileOptimized={true}
      />
      
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
        {/* Profile Image/Initials */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 mx-auto w-32 h-32 rounded-full glass flex items-center justify-center shadow-neon backdrop-blur-sm"
        >
          <span className="text-4xl font-bold gradient-text">
            {personal.initials}
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="gradient-text">{personal.name}</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 font-medium"
        >
          {personal.title}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          {personal.description}
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex justify-center space-x-6 mb-16"
        >
          <a
            href={`mailto:${personal.contact.email}`}
            className="p-3 rounded-full glass hover:shadow-neon transition-all duration-300 hover:scale-110 group"
            aria-label="Email"
          >
            <Mail className="w-6 h-6 text-gray-300 group-hover:text-primary-400 transition-colors duration-300" />
          </a>
          <a
            href={`https://${personal.contact.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass hover:shadow-neon transition-all duration-300 hover:scale-110 group"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-primary-400 transition-colors duration-300" />
          </a>
          <a
            href={`https://${personal.contact.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass hover:shadow-neon transition-all duration-300 hover:scale-110 group"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6 text-gray-300 group-hover:text-primary-400 transition-colors duration-300" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;