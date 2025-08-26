import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Clock, CheckCircle } from 'lucide-react';
import SplineBackground from '../components/SplineBackground';
import { portfolioData, splineBackgrounds } from '../data/portfolioData';

const Projects: React.FC = () => {
  const { portfolio } = portfolioData;

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
        return <CheckCircle className="w-5 h-5 text-secondary-400" />;
      case 'coming-soon':
        return <Clock className="w-5 h-5 text-orange-400" />;
      default:
        return <Clock className="w-5 h-5 text-gray-400" />;
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

  return (
    <div className="min-h-screen pt-20 pb-16 relative">
      {/* Spline 3D Background */}
      <SplineBackground 
        src={splineBackgrounds.portfolio} 
        className="opacity-85"
      />
      
      <div className="relative z-20 max-w-6xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
              Projects
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Showcasing creative solutions and innovative projects that demonstrate technical expertise
            </p>
          </motion.div>

          {/* Portfolio Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {portfolio.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className={`glass rounded-2xl overflow-hidden backdrop-blur-md ${
                  project.status === 'live' ? 'shadow-neon-green' : 'shadow-neon'
                } hover:shadow-neon transition-all duration-300`}
              >
                {/* Project Image */}
                <div className="relative h-64 bg-gradient-to-br from-dark-200 to-dark-300 overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-6xl">💻</div>
                    </div>
                  )}
                  
                  {/* Status Badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full border text-sm font-medium flex items-center space-x-2 backdrop-blur-sm ${getStatusColor(project.status)}`}>
                    {getStatusIcon(project.status)}
                    <span>{getStatusText(project.status)}</span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white/10 text-gray-300 rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center px-6 py-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg text-white font-medium hover:shadow-neon transition-all duration-300"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </motion.a>
                    )}
                    
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center px-6 py-2 border border-white/20 rounded-lg text-white font-medium hover:bg-white/10 transition-all duration-300"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </motion.a>
                    )}
                    
                    {project.status === 'coming-soon' && (
                      <div className="flex items-center px-6 py-2 bg-gray-600/20 rounded-lg text-gray-400 font-medium cursor-not-allowed">
                        <Clock className="w-4 h-4 mr-2" />
                        Coming Soon
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* More Projects CTA */}
          <motion.div variants={itemVariants}>
            <div className="glass rounded-2xl p-8 shadow-neon text-center backdrop-blur-md">
              <h2 className="text-3xl font-bold gradient-text mb-4">
                More Projects Coming Soon
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                I'm constantly working on new and exciting projects. This space will be 
                updated with detailed case studies, live demos, and the latest work 
                showcasing innovation in web development, game creation, and app design.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl mb-2">🚀</div>
                  <div className="text-sm text-gray-400">React Apps</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🎮</div>
                  <div className="text-sm text-gray-400">Games</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">📱</div>
                  <div className="text-sm text-gray-400">Mobile Apps</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🛠️</div>
                  <div className="text-sm text-gray-400">Tools</div>
                </div>
              </div>
              
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-lg font-medium text-white hover:shadow-neon-green transition-all duration-300"
              >
                Let's Collaborate
              </motion.a>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};

export default Projects;