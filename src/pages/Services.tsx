import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import SplineBackground from '../components/SplineBackground';
import { portfolioData, splineBackgrounds } from '../data/portfolioData';

const Services: React.FC = () => {
  const { services } = portfolioData;

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

  const getColorClasses = (color: string) => {
    const colorMap = {
      sky: {
        bg: 'from-primary-500/20 to-primary-600/20',
        border: 'border-primary-400/30',
        text: 'text-primary-400',
        shadow: 'shadow-neon',
        dot: 'bg-primary-400'
      },
      green: {
        bg: 'from-secondary-500/20 to-secondary-600/20',
        border: 'border-secondary-400/30',
        text: 'text-secondary-400',
        shadow: 'shadow-neon-green',
        dot: 'bg-secondary-400'
      },
      purple: {
        bg: 'from-accent-500/20 to-accent-600/20',
        border: 'border-accent-400/30',
        text: 'text-accent-400',
        shadow: 'shadow-neon-purple',
        dot: 'bg-accent-400'
      },
      pink: {
        bg: 'from-pink-500/20 to-pink-600/20',
        border: 'border-pink-400/30',
        text: 'text-pink-400',
        shadow: 'shadow-[0_0_20px_rgba(236,72,153,0.3)]',
        dot: 'bg-pink-400'
      },
      orange: {
        bg: 'from-orange-500/20 to-orange-600/20',
        border: 'border-orange-400/30',
        text: 'text-orange-400',
        shadow: 'shadow-[0_0_20px_rgba(251,146,60,0.3)]',
        dot: 'bg-orange-400'
      }
    };
    
    return colorMap[color as keyof typeof colorMap] || colorMap.sky;
  };

  return (
    <div className="min-h-screen pt-20 pb-16 relative">
      {/* Spline 3D Background */}
      <SplineBackground 
        src={splineBackgrounds.services} 
        className="opacity-70"
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
              Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transforming ideas into digital reality through innovative development and design
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const colors = getColorClasses(service.color);
              
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className={`glass rounded-2xl p-8 ${colors.shadow} hover:${colors.shadow} transition-all duration-300 h-full`}
                >
                  {/* Service Icon */}
                  <div className={`text-6xl mb-6 text-center`}>
                    {service.icon}
                  </div>
                  
                  {/* Service Title */}
                  <h3 className={`text-2xl font-bold ${colors.text} mb-4 text-center`}>
                    {service.title}
                  </h3>
                  
                  {/* Service Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed text-center">
                    {service.description}
                  </p>
                  
                  {/* Service Features */}
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className={`w-5 h-5 ${colors.text} mr-3 flex-shrink-0`} />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Decorative Border */}
                  <div className={`mt-6 h-1 w-full bg-gradient-to-r ${colors.bg} rounded-full`} />
                </motion.div>
              );
            })}
          </div>

          {/* Call to Action */}
          <motion.div variants={itemVariants}>
            <div className="glass rounded-2xl p-8 shadow-neon text-center">
              <h2 className="text-3xl font-bold gradient-text mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's collaborate to bring your vision to life. I'm passionate about 
                creating solutions that exceed expectations and deliver real value.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg font-medium text-white hover:shadow-neon transition-all duration-300"
                >
                  Get Started
                </motion.a>
                <motion.a
                  href="/portfolio"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-3 border border-white/20 rounded-lg font-medium text-white hover:bg-white/10 transition-all duration-300"
                >
                  View Portfolio
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Process Overview */}
          <motion.div variants={itemVariants}>
            <div className="glass rounded-2xl p-8 shadow-neon">
              <h3 className="text-2xl font-bold gradient-text mb-8 text-center">
                My Development Process
              </h3>
              
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-400">1</span>
                  </div>
                  <h4 className="font-semibold text-white mb-2">Discovery</h4>
                  <p className="text-gray-400 text-sm">Understanding your needs and goals</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-secondary-400">2</span>
                  </div>
                  <h4 className="font-semibold text-white mb-2">Planning</h4>
                  <p className="text-gray-400 text-sm">Creating a roadmap for success</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-accent-400">3</span>
                  </div>
                  <h4 className="font-semibold text-white mb-2">Development</h4>
                  <p className="text-gray-400 text-sm">Building with precision and care</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-pink-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-pink-400">4</span>
                  </div>
                  <h4 className="font-semibold text-white mb-2">Delivery</h4>
                  <p className="text-gray-400 text-sm">Launching your project to success</p>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};

export default Services;