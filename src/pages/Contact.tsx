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
        className="opacity-80"
      />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Let's collaborate and bring your ideas to life. I'm always excited to work on new projects and challenges.
            </p>
          </motion.div>

          <div className="flex justify-center">
            {/* Contact Information - Centered */}
            <motion.div variants={itemVariants} className="max-w-2xl w-full">
              <div className="glass rounded-2xl p-8 shadow-neon backdrop-blur-md">
                <h2 className="text-2xl font-bold gradient-text mb-6 text-center">
                  Contact Information
                </h2>
                <p className="text-gray-300 mb-8 text-center">
                  Ready to start your next project or have a question? Feel free to reach out through any of the channels below. I'll get back to you as soon as possible!
                </p>
                
                <div className="space-y-6">
                  {contactItems.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : '_self'}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      whileHover={{ x: 10, scale: 1.02 }}
                      className="flex items-center p-4 glass rounded-lg hover:shadow-neon transition-all duration-300 group"
                    >
                      <div className={`p-3 rounded-lg ${item.color} bg-white/10 mr-4`}>
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className={`font-medium ${item.color}`}>{item.label}</p>
                        <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                          {item.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
                
                {/* Availability Status */}
                <div className="mt-8 text-center">
                  <div className="inline-flex items-center px-4 py-2 bg-secondary-400/20 text-secondary-400 rounded-lg">
                    <div className="w-2 h-2 bg-secondary-400 rounded-full mr-2 animate-pulse"></div>
                    Available for new projects
                  </div>
                  <p className="text-gray-400 text-sm mt-2">
                    Currently based in Chennai, India (UTC+05:30) • Remote collaboration worldwide
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default Contact;