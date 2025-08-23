import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import SplineBackground from '../components/SplineBackground';
import { portfolioData, splineBackgrounds } from '../data/portfolioData';

const About: React.FC = () => {
  const { personal, education } = portfolioData;

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

  return (
    <div className="min-h-screen pt-20 pb-16 relative">
      {/* Spline 3D Background */}
      <SplineBackground 
        src={splineBackgrounds.about} 
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
              About Me
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Passionate about creating digital experiences that make a difference
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Personal Story */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="glass rounded-2xl p-8 shadow-neon">
                <h2 className="text-2xl font-bold text-primary-400 mb-6 flex items-center">
                  <span className="w-2 h-2 bg-primary-400 rounded-full mr-3"></span>
                  My Story
                </h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
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
              <motion.div 
                variants={itemVariants}
                className="glass rounded-2xl p-8 shadow-neon-green"
              >
                <h3 className="text-xl font-bold text-secondary-400 mb-4">
                  My Approach
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 rounded-lg bg-white/5">
                    <div className="text-2xl mb-2">🎯</div>
                    <div className="text-sm font-medium text-gray-300">Goal-Oriented</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-white/5">
                    <div className="text-2xl mb-2">💡</div>
                    <div className="text-sm font-medium text-gray-300">Creative</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-white/5">
                    <div className="text-2xl mb-2">🚀</div>
                    <div className="text-sm font-medium text-gray-300">Innovative</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-white/5">
                    <div className="text-2xl mb-2">🤝</div>
                    <div className="text-sm font-medium text-gray-300">Collaborative</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants}>
              <div className="glass rounded-2xl p-8 shadow-neon-purple">
                <h2 className="text-2xl font-bold text-accent-400 mb-8 flex items-center">
                  <GraduationCap className="w-6 h-6 mr-3" />
                  Education
                </h2>
                
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className={`border-l-4 pl-6 pb-6 ${
                        edu.status === 'current' 
                          ? 'border-accent-400' 
                          : 'border-gray-600'
                      } ${index !== education.length - 1 ? 'border-b border-gray-700' : ''}`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-white">
                          {edu.degree}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          edu.status === 'current'
                            ? 'bg-accent-400/20 text-accent-400'
                            : 'bg-secondary-400/20 text-secondary-400'
                        }`}>
                          {edu.status === 'current' ? 'Current' : 'Completed'}
                        </span>
                      </div>
                      
                      <div className="flex items-center text-gray-300 mb-1">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{edu.institution}</span>
                      </div>
                      
                      <div className="flex items-center text-gray-400">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{edu.year}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact CTA */}
          <motion.div 
            variants={itemVariants}
            className="text-center glass rounded-2xl p-8 shadow-neon"
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Let's Connect!
            </h3>
            <p className="text-gray-300 mb-6">
              I'm always excited to discuss new opportunities and creative projects.
            </p>
            <motion.a
              href={`mailto:${personal.contact.email}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg font-medium text-white hover:shadow-neon transition-all duration-300"
            >
              Get In Touch
            </motion.a>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};

export default About;