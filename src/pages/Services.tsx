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
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold gradient-text mb-6">
            Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transforming ideas into digital reality with cutting-edge technology and creative solutions.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className={`glass rounded-2xl p-8 ${colors.shadow} h-full group hover:shadow-2xl transition-all duration-500`}
              >
                {/* Service Icon */}
                <div className={`text-5xl mb-6 text-center group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                {/* Service Title */}
                <h3 className={`text-2xl font-bold ${colors.text} mb-4 text-center group-hover:scale-105 transition-transform duration-300`}>
                  {service.title}
                </h3>
                
                {/* Service Description */}
                <p className="text-gray-300 mb-8 leading-relaxed text-center">
                  {service.description}
                </p>
                
                {/* Service Features */}
                <div className="space-y-4">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <CheckCircle className={`w-5 h-5 ${colors.text} mr-3 flex-shrink-0 mt-0.5`} />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Decorative Border */}
                <div className={`mt-8 h-1 w-full bg-gradient-to-r ${colors.bg} rounded-full`} />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass rounded-2xl p-12 shadow-neon text-center mt-20"
        >
          <h2 className="text-3xl font-bold gradient-text mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-300 mb-10 text-xl max-w-3xl mx-auto">
            Let's collaborate to bring your vision to life. I'm excited to work with you on creating something amazing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl font-bold text-white hover:shadow-neon transition-all duration-300 hover:scale-105 text-lg"
            >
              Get Started
            </a>
            <a
              href="/projects"
              className="inline-flex items-center px-8 py-4 border border-white/20 rounded-xl font-bold text-white hover:bg-white/10 transition-all duration-300 hover:scale-105 text-lg"
            >
              View Projects
            </a>
          </div>
        </motion.div>

        {/* Process Overview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass rounded-2xl p-12 shadow-neon mt-20"
        >
          <h3 className="text-3xl font-bold gradient-text mb-12 text-center">
            My Development Process
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-primary-400/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-bold text-primary-400">1</span>
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Discovery</h4>
              <p className="text-gray-400 text-lg">Understanding your needs and project requirements</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-secondary-400/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-bold text-secondary-400">2</span>
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Planning</h4>
              <p className="text-gray-400 text-lg">Creating a detailed roadmap and timeline</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-accent-400/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-bold text-accent-400">3</span>
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Development</h4>
              <p className="text-gray-400 text-lg">Building with care and attention to detail</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-pink-400/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-bold text-pink-400">4</span>
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Delivery</h4>
              <p className="text-gray-400 text-lg">Launching to success and ongoing support</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;