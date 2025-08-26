import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import SplineBackground from '../components/SplineBackground';
import { portfolioData, splineBackgrounds } from '../data/portfolioData';

const Contact: React.FC = () => {
  const { personal } = portfolioData;

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

  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: personal.contact.email,
      href: `mailto:${personal.contact.email}`,
      color: 'text-primary-400'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personal.contact.phone,
      href: `tel:${personal.contact.phone}`,
      color: 'text-secondary-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: personal.contact.linkedin,
      href: `https://${personal.contact.linkedin}`,
      color: 'text-accent-400'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: personal.contact.github,
      href: `https://${personal.contact.github}`,
      color: 'text-pink-400'
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16 relative">
      {/* Spline 3D Background */}
      <SplineBackground 
        src={splineBackgrounds.contact} 
        className="opacity-70"
      />
      
      <div className="relative z-20 max-w-4xl mx-auto px-6">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold gradient-text mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Let's collaborate and bring your ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            variants={containerVariants}
          >
            <div className="glass rounded-2xl p-8 shadow-neon">
              <motion.h2
                variants={itemVariants}
                className="text-2xl font-bold gradient-text mb-8"
              >
                Contact Information
              </motion.h2>
              
              <motion.p
                variants={itemVariants}
                className="text-gray-300 mb-10 text-lg"
              >
                Ready to start your next project? Feel free to reach out! I'm always excited 
                to discuss new opportunities and creative collaborations.
              </motion.p>
              
              <motion.div
                variants={containerVariants}
                className="space-y-6"
              >
                {contactItems.map((item, index) => (
                  <motion.a
                    key={index}
                    variants={itemVariants}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : '_self'}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="flex items-center p-4 glass rounded-xl hover:shadow-neon transition-all duration-300 group"
                  >
                    <div className={`p-3 rounded-xl ${item.color} bg-white/10 mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className={`font-bold ${item.color} text-lg`}>{item.label}</p>
                      <p className="text-gray-300">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </motion.div>
              
              {/* Availability Status */}
              <motion.div
                variants={itemVariants}
                className="mt-10"
              >
                <div className="inline-flex items-center px-4 py-2 bg-secondary-400/20 text-secondary-400 rounded-xl text-lg">
                  <div className="w-3 h-3 bg-secondary-400 rounded-full mr-3 animate-pulse"></div>
                  Available for new projects
                </div>
                <p className="text-gray-400 mt-3">
                  Currently based in Chennai, India • Remote collaboration available worldwide
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Additional Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="glass rounded-2xl p-8 shadow-neon-purple">
              <h2 className="text-2xl font-bold text-accent-400 mb-8">
                Let's Connect
              </h2>
              
              <div className="space-y-6">
                <p className="text-gray-300 text-lg leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                
                <div className="bg-gradient-to-r from-accent-500/20 to-primary-500/20 rounded-xl p-6 border border-accent-500/30">
                  <h3 className="text-xl font-bold text-white mb-3">Response Time</h3>
                  <p className="text-gray-300 mb-4">
                    I typically respond to emails and messages within 24 hours during business days.
                  </p>
                  <div className="flex items-center text-accent-400">
                    <div className="w-3 h-3 bg-accent-400 rounded-full mr-3 animate-pulse"></div>
                    <span>Usually responds within a few hours</span>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-secondary-500/20 to-pink-500/20 rounded-xl p-6 border border-secondary-500/30">
                  <h3 className="text-xl font-bold text-white mb-3">Preferred Contact</h3>
                  <p className="text-gray-300">
                    For quick responses, I recommend reaching out via email or LinkedIn. For project discussions, 
                    a quick call can be arranged after initial contact.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;