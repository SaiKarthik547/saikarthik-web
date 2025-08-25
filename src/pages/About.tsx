import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award } from 'lucide-react';
import SplineBackground from '../components/SplineBackground';
import { portfolioData, splineBackgrounds } from '../data/portfolioData';
import { getDeviceInfo, shouldReduceMotion, getOptimizationLevel } from '../utils/deviceDetection';

const About: React.FC = () => {
  const { about } = portfolioData;
  const [isMobile, ] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [optimizationLevel, setOptimizationLevel] = useState<'very-low' | 'low' | 'medium' | 'high'>('high');

  useEffect(() => {
    const deviceInfo = getDeviceInfo();
    const optLevel = getOptimizationLevel();
    
    // setIsMobile(deviceInfo.isMobile);
    setReduceMotion(shouldReduceMotion());
    setOptimizationLevel(optLevel);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  // For very low-end devices, show a simplified version
  if (optimizationLevel === 'very-low') {
    return (
      <div className="min-h-screen pt-14 pb-8 relative">
        {/* Spline 3D Background with mobile optimization */}
        <SplineBackground 
          src={splineBackgrounds.about} 
          className="opacity-90"
          mobileOptimized={true}
        />
        
        <div className="relative z-20 max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-xl font-bold gradient-text mb-3">
              About Me
            </h1>
            <p className="text-sm text-gray-300">
              Passionate about creating digital experiences that make a difference
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            
            {/* Personal Story */}
            <div className="space-y-4">
              <div className="glass rounded-lg p-3 shadow-neon">
                <h2 className="text-base font-bold text-primary-400 mb-2 flex items-center">
                  <span className="w-2 h-2 bg-primary-400 rounded-full mr-2"></span>
                  My Story
                </h2>
                <div className="space-y-2 text-gray-300 text-xs leading-relaxed">
                  <p>
                    As a software engineering student at VIT Chennai, I'm driven by an 
                    insatiable curiosity for technology and a passion for creating digital 
                    experiences that engage and inspire.
                  </p>
                  <p>
                    My journey in software development began with a fascination for how 
                    games and applications work behind the scenes. This curiosity evolved 
                    into a deep commitment to crafting innovative solutions through code.
                  </p>
                  <p>
                    I believe in the power of creative thinking and loyal creation - 
                    building projects that not only function well but also provide 
                    meaningful experiences for users.
                  </p>
                </div>
              </div>

              {/* Values & Approach */}
              <div className="glass rounded-lg p-3 shadow-neon-green">
                <h3 className="text-sm font-bold text-secondary-400 mb-2">
                  My Approach
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-center p-2 rounded bg-white/5">
                    <div className="text-base mb-1">🎯</div>
                    <div className="text-xs font-medium text-gray-300">Goal-Oriented</div>
                  </div>
                  <div className="text-center p-2 rounded bg-white/5">
                    <div className="text-base mb-1">💡</div>
                    <div className="text-xs font-medium text-gray-300">Creative</div>
                  </div>
                  <div className="text-center p-2 rounded bg-white/5">
                    <div className="text-base mb-1">🚀</div>
                    <div className="text-xs font-medium text-gray-300">Innovative</div>
                  </div>
                  <div className="text-center p-2 rounded bg-white/5">
                    <div className="text-base mb-1">🤝</div>
                    <div className="text-xs font-medium text-gray-300">Collaborative</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="glass rounded-lg p-3 shadow-neon-purple">
                <h2 className="text-base font-bold text-accent-400 mb-3 flex items-center">
                  <Award className="w-4 h-4 mr-2" />
                  Education
                </h2>
                
                <div className="space-y-3">
                  {about.education.map((edu, index) => (
                    <div
                      key={index}
                      className={`border-l-2 pl-2 pb-3 ${
                        edu.status === 'current' 
                          ? 'border-accent-400' 
                          : 'border-gray-600'
                      } ${index !== about.education.length - 1 ? 'border-b border-gray-700' : ''}`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-xs font-semibold text-white">
                          {edu.degree}
                        </h3>
                        <span className={`px-1.5 py-0.5 rounded-full text-xs font-medium ${
                          edu.status === 'current'
                            ? 'bg-accent-400/20 text-accent-400'
                            : 'bg-secondary-400/20 text-secondary-400'
                        }`}>
                          {edu.status === 'current' ? 'Current' : 'Completed'}
                        </span>
                      </div>
                      
                      <div className="flex items-center text-gray-300 mb-1">
                        <MapPin className="w-3 h-3 mr-1" />
                        <span className="text-xs">{edu.institution}</span>
                      </div>
                      
                      <div className="flex items-center text-gray-400">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span className="text-xs">{edu.year}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="text-center glass rounded-lg p-3 shadow-neon">
              <h3 className="text-base font-bold gradient-text mb-2">
                Let's Connect!
              </h3>
              <p className="text-gray-300 mb-3 text-xs">
                I'm always excited to discuss new opportunities and creative projects.
              </p>
              <a
                href={`mailto:${about.contact.email}`}
                className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-md font-medium text-white hover:shadow-neon transition-all duration-300 text-xs"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Simplified version for mobile or low-performance devices
  if (reduceMotion || optimizationLevel === 'low') {
    return (
      <div className="min-h-screen pt-16 pb-12 relative">
        {/* Spline 3D Background with mobile optimization */}
        <SplineBackground 
          src={splineBackgrounds.about} 
          className="opacity-85"
          mobileOptimized={true}
        />
        
        <div className="relative z-20 max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold gradient-text mb-4">
              About Me
            </h1>
            <p className="text-base text-gray-300">
              Passionate about creating digital experiences that make a difference
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            
            {/* Personal Story */}
            <div className="space-y-6">
              <div className="glass rounded-xl p-4 shadow-neon">
                <h2 className="text-lg font-bold text-primary-400 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-primary-400 rounded-full mr-2"></span>
                  My Story
                </h2>
                <div className="space-y-3 text-gray-300 text-sm leading-relaxed">
                  <p>
                    As a software engineering student at VIT Chennai, I'm driven by an 
                    insatiable curiosity for technology and a passion for creating digital 
                    experiences that engage and inspire.
                  </p>
                  <p>
                    My journey in software development began with a fascination for how 
                    games and applications work behind the scenes. This curiosity evolved 
                    into a deep commitment to crafting innovative solutions through code.
                  </p>
                  <p>
                    I believe in the power of creative thinking and loyal creation - 
                    building projects that not only function well but also provide 
                    meaningful experiences for users.
                  </p>
                </div>
              </div>

              {/* Values & Approach */}
              <div className="glass rounded-xl p-4 shadow-neon-green">
                <h3 className="text-base font-bold text-secondary-400 mb-3">
                  My Approach
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-3 rounded-lg bg-white/5">
                    <div className="text-lg mb-1">🎯</div>
                    <div className="text-xs font-medium text-gray-300">Goal-Oriented</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-white/5">
                    <div className="text-lg mb-1">💡</div>
                    <div className="text-xs font-medium text-gray-300">Creative</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-white/5">
                    <div className="text-lg mb-1">🚀</div>
                    <div className="text-xs font-medium text-gray-300">Innovative</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-white/5">
                    <div className="text-lg mb-1">🤝</div>
                    <div className="text-xs font-medium text-gray-300">Collaborative</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="glass rounded-xl p-4 shadow-neon-purple">
                <h2 className="text-lg font-bold text-accent-400 mb-4 flex items-center">
                  <Award className="w-4 h-4 mr-2" />
                  Education
                </h2>
                
                <div className="space-y-4">
                  {about.education.map((edu, index) => (
                    <div
                      key={index}
                      className={`border-l-2 pl-3 pb-4 ${
                        edu.status === 'current' 
                          ? 'border-accent-400' 
                          : 'border-gray-600'
                      } ${index !== about.education.length - 1 ? 'border-b border-gray-700' : ''}`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-sm font-semibold text-white">
                          {edu.degree}
                        </h3>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                          edu.status === 'current'
                            ? 'bg-accent-400/20 text-accent-400'
                            : 'bg-secondary-400/20 text-secondary-400'
                        }`}>
                          {edu.status === 'current' ? 'Current' : 'Completed'}
                        </span>
                      </div>
                      
                      <div className="flex items-center text-gray-300 mb-1">
                        <MapPin className="w-3 h-3 mr-1" />
                        <span className="text-xs">{edu.institution}</span>
                      </div>
                      
                      <div className="flex items-center text-gray-400">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span className="text-xs">{edu.year}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="text-center glass rounded-xl p-4 shadow-neon">
              <h3 className="text-lg font-bold gradient-text mb-3">
                Let's Connect!
              </h3>
              <p className="text-gray-300 mb-4 text-sm">
                I'm always excited to discuss new opportunities and creative projects.
              </p>
              <a
                href={`mailto:${about.contact.email}`}
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg font-medium text-white hover:shadow-neon transition-all duration-300 text-sm"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Full animation version for desktop/high-performance devices
  return (
    <div className="min-h-screen pt-20 pb-16 relative">
      {/* Spline 3D Background with mobile optimization */}
      <SplineBackground 
        src={splineBackgrounds.about} 
        className="opacity-80"
        mobileOptimized={true}
      />
      
      <div className="relative z-20 max-w-6xl mx-auto px-6">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold gradient-text mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Personal Story */}
            <div className="glass rounded-2xl p-8 shadow-neon">
              <motion.h2
                variants={itemVariants}
                className="text-2xl font-bold text-primary-400 mb-6 flex items-center"
              >
                <span className="w-3 h-3 bg-primary-400 rounded-full mr-3"></span>
                My Story
              </motion.h2>
              <motion.div
                variants={itemVariants}
                className="space-y-6 text-gray-300 leading-relaxed"
              >
                <p className="text-lg">
                  As a software engineering student at VIT Chennai, I'm driven by an 
                  insatiable curiosity for technology and a passion for creating digital 
                  experiences that engage and inspire.
                </p>
                <p className="text-lg">
                  My journey in software development began with a fascination for how 
                  games and applications work behind the scenes. This curiosity evolved 
                  into a deep commitment to crafting innovative solutions through code.
                </p>
                <p className="text-lg">
                  I believe in the power of creative thinking and loyal creation - 
                  building projects that not only function well but also provide 
                  meaningful experiences for users.
                </p>
              </motion.div>
            </div>

            {/* Values & Approach */}
            <div className="glass rounded-2xl p-8 shadow-neon-green">
              <motion.h3
                variants={itemVariants}
                className="text-xl font-bold text-secondary-400 mb-6"
              >
                My Approach
              </motion.h3>
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 gap-6"
              >
                <div className="text-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                  <div className="text-3xl mb-3">🎯</div>
                  <div className="text-lg font-medium text-gray-300">Goal-Oriented</div>
                </div>
                <div className="text-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                  <div className="text-3xl mb-3">💡</div>
                  <div className="text-lg font-medium text-gray-300">Creative</div>
                </div>
                <div className="text-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                  <div className="text-3xl mb-3">🚀</div>
                  <div className="text-lg font-medium text-gray-300">Innovative</div>
                </div>
                <div className="text-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                  <div className="text-3xl mb-3">🤝</div>
                  <div className="text-lg font-medium text-gray-300">Collaborative</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Education & Contact */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Education */}
            <div className="glass rounded-2xl p-8 shadow-neon-purple">
              <motion.h2
                variants={itemVariants}
                className="text-2xl font-bold text-accent-400 mb-8 flex items-center"
              >
                <Award className="w-6 h-6 mr-3" />
                Education
              </motion.h2>
              
              <motion.div
                variants={itemVariants}
                className="space-y-8"
              >
                {about.education.map((edu, index) => (
                  <div
                    key={index}
                    className={`border-l-4 pl-6 pb-8 ${
                      edu.status === 'current' 
                        ? 'border-accent-400' 
                        : 'border-gray-600'
                    } ${index !== about.education.length - 1 ? 'border-b border-gray-700' : ''}`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-white">
                        {edu.degree}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        edu.status === 'current'
                          ? 'bg-accent-400/20 text-accent-400'
                          : 'bg-secondary-400/20 text-secondary-400'
                      }`}>
                        {edu.status === 'current' ? 'Current' : 'Completed'}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-gray-300 mb-2">
                      <MapPin className="w-5 h-5 mr-2" />
                      <span className="text-lg">{edu.institution}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-400">
                      <Calendar className="w-5 h-5 mr-2" />
                      <span className="text-lg">{edu.year}</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Contact CTA */}
            <div className="text-center glass rounded-2xl p-8 shadow-neon">
              <motion.h3
                variants={itemVariants}
                className="text-2xl font-bold gradient-text mb-6"
              >
                Let's Connect!
              </motion.h3>
              <motion.p
                variants={itemVariants}
                className="text-gray-300 mb-8 text-xl"
              >
                I'm always excited to discuss new opportunities and creative projects.
              </motion.p>
              <motion.a
                variants={itemVariants}
                href={`mailto:${about.contact.email}`}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl font-bold text-white hover:shadow-neon transition-all duration-300 text-lg hover:scale-105"
              >
                Get In Touch
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;