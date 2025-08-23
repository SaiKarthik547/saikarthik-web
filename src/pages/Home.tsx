import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import SplineBackground from '../components/SplineBackground';
import { portfolioData, splineBackgrounds } from '../data/portfolioData';

const Home: React.FC = () => {
  const { personal } = portfolioData;

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Spline 3D Background */}
      <SplineBackground 
        src={splineBackgrounds.home} 
        className="opacity-90"
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