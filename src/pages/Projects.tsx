import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Clock, CheckCircle } from 'lucide-react';
import SplineBackground from '../components/SplineBackground';
import { portfolioData, splineBackgrounds } from '../data/portfolioData';
import { getDeviceInfo, shouldReduceMotion, getOptimizationLevel } from '../utils/deviceDetection';

const Projects: React.FC = () => {
  const { portfolio } = portfolioData;
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'live':
        return <CheckCircle className="w-4 h-4 text-secondary-400" />;
      case 'coming-soon':
        return <Clock className="w-4 h-4 text-orange-400" />;
      default:
        return <Clock className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'live':
        return 'Live Project';
      case 'coming-soon':
        return 'Coming Soon';
      default:
        return 'In Development';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live':
        return 'bg-secondary-400/20 text-secondary-400 border-secondary-400/30';
      case 'coming-soon':
        return 'bg-orange-400/20 text-orange-400 border-orange-400/30';
      default:
        return 'bg-gray-400/20 text-gray-400 border-gray-400/30';
    }
  };

  // For very low-end devices, show a simplified version
  if (optimizationLevel === 'very-low') {
    return (
      <div className="min-h-screen pt-14 pb-8 relative">
        {/* Spline 3D Background */}
        <SplineBackground 
          src={splineBackgrounds.portfolio} 
          className="opacity-90"
          mobileOptimized={true}
        />
        
        <div className="relative z-20 max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-xl font-bold gradient-text mb-2">
              Projects
            </h1>
            <p className="text-sm text-gray-300">
              Explore my latest development projects and creative solutions
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-4">
            {portfolio.map((project, index) => (
              <div
                key={index}
                className={`glass rounded-lg overflow-hidden ${
                  project.status === 'live' ? 'shadow-neon-green' : 'shadow-neon'
                }`}
              >
                {/* Project Image */}
                <div className="relative h-32 bg-gradient-to-br from-dark-200 to-dark-300 overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-2xl">💻</div>
                    </div>
                  )}
                  
                  {/* Status Badge */}
                  <div className={`absolute top-1 right-1 px-1.5 py-0.5 rounded-full border text-xs font-medium flex items-center space-x-1 backdrop-blur-sm ${getStatusColor(project.status)}`}>
                    {getStatusIcon(project.status)}
                    <span>{getStatusText(project.status)}</span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-3">
                  <h3 className="text-base font-bold text-white mb-1.5">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 text-xs mb-2 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-2">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-1.5 py-0.5 bg-white/10 text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex space-x-1.5">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-2 py-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded text-white font-medium text-xs"
                      >
                        <ExternalLink className="w-2.5 h-2.5 mr-1" />
                        Demo
                      </a>
                    )}
                    
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-2 py-1 border border-white/20 rounded text-white font-medium text-xs"
                      >
                        <Github className="w-2.5 h-2.5 mr-1" />
                        Code
                      </a>
                    )}
                    
                    {project.status === 'coming-soon' && (
                      <div className="flex items-center px-2 py-1 bg-gray-600/20 rounded text-gray-400 font-medium text-xs">
                        <Clock className="w-2.5 h-2.5 mr-1" />
                        Soon
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* More Projects CTA */}
          <div className="glass rounded-lg p-3 shadow-neon text-center mt-4">
            <h2 className="text-base font-bold gradient-text mb-1.5">
              More Projects Coming Soon
            </h2>
            <p className="text-gray-300 mb-3 text-xs">
              I'm constantly working on new and exciting projects.
            </p>
            
            <div className="grid grid-cols-4 gap-2 mb-3">
              <div className="text-center">
                <div className="text-lg mb-1">🚀</div>
                <div className="text-xs text-gray-400">React Apps</div>
              </div>
              <div className="text-center">
                <div className="text-lg mb-1">🎮</div>
                <div className="text-xs text-gray-400">Games</div>
              </div>
              <div className="text-center">
                <div className="text-lg mb-1">📱</div>
                <div className="text-xs text-gray-400">Mobile Apps</div>
              </div>
              <div className="text-center">
                <div className="text-lg mb-1">🛠️</div>
                <div className="text-xs text-gray-400">Tools</div>
              </div>
            </div>
            
            <a
              href="/contact"
              className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-lg font-medium text-white hover:shadow-neon-green transition-all duration-300 text-xs"
            >
              Let's Collaborate
            </a>
          </div>
        </div>
      </div>
    );
  }

  // For low-end devices, show a simplified version
  if (reduceMotion || optimizationLevel === 'low') {
    return (
      <div className="min-h-screen pt-16 pb-12 relative">
        {/* Spline 3D Background */}
        <SplineBackground 
          src={splineBackgrounds.portfolio} 
          className="opacity-85"
          mobileOptimized={true}
        />
        
        <div className="relative z-20 max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold gradient-text mb-3">
              Projects
            </h1>
            <p className="text-base text-gray-300">
              Explore my latest development projects and creative solutions
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-6">
            {portfolio.map((project, index) => (
              <div
                key={index}
                className={`glass rounded-xl overflow-hidden ${
                  project.status === 'live' ? 'shadow-neon-green' : 'shadow-neon'
                }`}
              >
                {/* Project Image */}
                <div className="relative h-40 bg-gradient-to-br from-dark-200 to-dark-300 overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-3xl">💻</div>
                    </div>
                  )}
                  
                  {/* Status Badge */}
                  <div className={`absolute top-2 right-2 px-2 py-1 rounded-full border text-xs font-medium flex items-center space-x-1 backdrop-blur-sm ${getStatusColor(project.status)}`}>
                    {getStatusIcon(project.status)}
                    <span>{getStatusText(project.status)}</span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4">
                  <h3 className="text-base font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-0.5 bg-white/10 text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-3 py-1.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded text-white font-medium text-xs"
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Demo
                      </a>
                    )}
                    
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-3 py-1.5 border border-white/20 rounded text-white font-medium text-xs"
                      >
                        <Github className="w-3 h-3 mr-1" />
                        Code
                      </a>
                    )}
                    
                    {project.status === 'coming-soon' && (
                      <div className="flex items-center px-3 py-1.5 bg-gray-600/20 rounded text-gray-400 font-medium text-xs">
                        <Clock className="w-3 h-3 mr-1" />
                        Soon
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* More Projects CTA */}
          <div className="glass rounded-xl p-4 shadow-neon text-center mt-6">
            <h2 className="text-lg font-bold gradient-text mb-2">
              More Projects Coming Soon
            </h2>
            <p className="text-gray-300 mb-4 text-sm">
              I'm constantly working on new and exciting projects.
            </p>
            
            <div className="grid grid-cols-4 gap-3 mb-4">
              <div className="text-center">
                <div className="text-xl mb-1">🚀</div>
                <div className="text-xs text-gray-400">React Apps</div>
              </div>
              <div className="text-center">
                <div className="text-xl mb-1">🎮</div>
                <div className="text-xs text-gray-400">Games</div>
              </div>
              <div className="text-center">
                <div className="text-xl mb-1">📱</div>
                <div className="text-xs text-gray-400">Mobile Apps</div>
              </div>
              <div className="text-center">
                <div className="text-xl mb-1">🛠️</div>
                <div className="text-xs text-gray-400">Tools</div>
              </div>
            </div>
            
            <a
              href="/contact"
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-lg font-medium text-white hover:shadow-neon-green transition-all duration-300 text-sm"
            >
              Let's Collaborate
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Full animation version for desktop/high-performance devices
  return (
    <div className="min-h-screen pt-20 pb-16 relative">
      {/* Spline 3D Background */}
      <SplineBackground 
        src={splineBackgrounds.portfolio} 
        className="opacity-80"
        mobileOptimized={true}
      />
      
      <div className="relative z-20 max-w-7xl mx-auto px-6">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold gradient-text mb-6">
            Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore my latest development projects and creative solutions that demonstrate my passion for technology and design.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {portfolio.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`glass rounded-2xl overflow-hidden group ${
                project.status === 'live' ? 'shadow-neon-green' : 'shadow-neon'
              } hover:shadow-2xl transition-all duration-500`}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-dark-200 to-dark-300 overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-5xl">💻</div>
                  </div>
                )}
                
                {/* Status Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1.5 rounded-full border text-sm font-medium flex items-center space-x-2 backdrop-blur-sm ${getStatusColor(project.status)}`}>
                  {getStatusIcon(project.status)}
                  <span>{getStatusText(project.status)}</span>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm hover:bg-primary-400/20 hover:text-primary-400 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex space-x-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg font-medium text-white hover:shadow-neon transition-all duration-300 hover:scale-105"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  )}
                  
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 border border-white/20 rounded-lg font-medium text-white hover:bg-white/10 transition-all duration-300 hover:scale-105"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </a>
                  )}
                  
                  {project.status === 'coming-soon' && (
                    <div className="flex items-center px-4 py-2 bg-gray-600/20 rounded-lg font-medium text-gray-400">
                      <Clock className="w-4 h-4 mr-2" />
                      Coming Soon
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="glass rounded-2xl p-8 shadow-neon text-center mt-16"
        >
          <h2 className="text-2xl font-bold gradient-text mb-4">
            More Projects Coming Soon
          </h2>
          <p className="text-gray-300 mb-8 text-xl max-w-2xl mx-auto">
            I'm constantly working on new and exciting projects. Check back soon to see what I've been building!
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl mb-3">🚀</div>
              <div className="text-lg font-medium text-gray-300">React Apps</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl mb-3">🎮</div>
              <div className="text-lg font-medium text-gray-300">Games</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl mb-3">📱</div>
              <div className="text-lg font-medium text-gray-300">Mobile Apps</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl mb-3">🛠️</div>
              <div className="text-lg font-medium text-gray-300">Tools</div>
            </div>
          </div>
          
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-xl font-bold text-white hover:shadow-neon-green transition-all duration-300 hover:scale-105 text-lg"
          >
            Let's Collaborate
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;