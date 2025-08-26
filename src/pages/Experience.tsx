import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code, Gamepad2, TrendingUp, Users, Database } from 'lucide-react';
import SplineBackground from '../components/SplineBackground';
import { portfolioData, splineBackgrounds } from '../data/portfolioData';

const Experience: React.FC = () => {
  const { experience } = portfolioData;

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

  const projectIcons = {
    'Game Development': Gamepad2,
    'Stock Market': TrendingUp,
    'Task Management': Users,
    'Database System': Database
  };

  const getProjectIcon = (title: string) => {
    const key = Object.keys(projectIcons).find(k => title.includes(k));
    return key ? projectIcons[key as keyof typeof projectIcons] : Code;
  };

  return (
    <div className="min-h-screen pt-20 pb-16 relative">
      {/* Spline 3D Background */}
      <SplineBackground 
        src={splineBackgrounds.experience} 
        className="opacity-70"
      />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold gradient-text mb-6">
            Experience
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building expertise through continuous learning, hands-on projects, and real-world applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Certification */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Current Certification */}
            <div className="glass rounded-2xl p-8 shadow-neon-purple">
              <motion.div
                variants={itemVariants}
                className="flex items-center mb-8"
              >
                <Award className="w-8 h-8 text-accent-400 mr-4" />
                <h2 className="text-2xl font-bold text-accent-400">
                  Current Certification
                </h2>
              </motion.div>
              
              <motion.div
                variants={itemVariants}
                className="border-l-4 border-accent-400 pl-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">
                    {experience.certification.title}
                  </h3>
                  <span className="px-4 py-1.5 bg-accent-400/20 text-accent-400 rounded-full text-sm font-medium">
                    {experience.certification.status}
                  </span>
                </div>
                
                <motion.p
                  variants={itemVariants}
                  className="text-primary-400 text-lg font-medium mb-4"
                >
                  {experience.certification.organization}
                </motion.p>
                
                <motion.p
                  variants={itemVariants}
                  className="text-gray-300 text-lg mb-6 leading-relaxed"
                >
                  {experience.certification.description}
                </motion.p>
                
                <motion.div
                  variants={itemVariants}
                  className="flex flex-wrap gap-2"
                >
                  {experience.certification.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-1.5 bg-white/10 text-gray-300 rounded-full text-sm hover:bg-accent-400/20 hover:text-accent-400 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Projects & Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Personal Projects */}
            <div className="mb-12">
              <motion.h2
                variants={itemVariants}
                className="text-2xl font-bold text-secondary-400 mb-8 text-center"
              >
                Personal Projects
              </motion.h2>
              
              <motion.div
                variants={containerVariants}
                className="space-y-6"
              >
                {experience.projects.map((project, index) => {
                  const IconComponent = getProjectIcon(project.title);
                  
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ x: 10 }}
                      className="glass rounded-2xl p-6 shadow-neon-green group"
                    >
                      <div className="flex items-center mb-4">
                        <div className="p-3 bg-secondary-400/20 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-6 h-6 text-secondary-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-secondary-400 transition-colors duration-300">
                          {project.title}
                        </h3>
                      </div>
                      
                      <motion.p
                        variants={itemVariants}
                        className="text-gray-300 text-lg mb-6 leading-relaxed"
                      >
                        {project.description}
                      </motion.p>
                      
                      <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap gap-2"
                      >
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-secondary-400/20 text-secondary-400 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </motion.div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            {/* Skills Highlights */}
            <div className="glass rounded-2xl p-8 shadow-neon text-center">
              <motion.h3
                variants={itemVariants}
                className="text-2xl font-bold gradient-text mb-8"
              >
                Key Achievements
              </motion.h3>
              
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-2 md:grid-cols-4 gap-8"
              >
                <motion.div
                  variants={itemVariants}
                  className="space-y-3"
                >
                  <div className="text-4xl font-bold text-primary-400">10+</div>
                  <div className="text-gray-300">Projects Completed</div>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  className="space-y-3"
                >
                  <div className="text-4xl font-bold text-secondary-400">5+</div>
                  <div className="text-gray-300">Technologies Mastered</div>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  className="space-y-3"
                >
                  <div className="text-4xl font-bold text-accent-400">2+</div>
                  <div className="text-gray-300">Years Learning</div>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  className="space-y-3"
                >
                  <div className="text-4xl font-bold text-pink-400">100%</div>
                  <div className="text-gray-300">Passion Driven</div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Experience;