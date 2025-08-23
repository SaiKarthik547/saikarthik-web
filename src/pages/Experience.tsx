import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code, Database, Gamepad2, TrendingUp, Users } from 'lucide-react';
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
              Experience
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Building expertise through continuous learning and hands-on projects
            </p>
          </motion.div>

          {/* Current Certification */}
          <motion.div variants={itemVariants}>
            <div className="glass rounded-2xl p-8 shadow-neon-purple">
              <div className="flex items-center mb-6">
                <Award className="w-8 h-8 text-accent-400 mr-4" />
                <h2 className="text-2xl font-bold text-accent-400">
                  Current Certification
                </h2>
              </div>
              
              <div className="border-l-4 border-accent-400 pl-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">
                    {experience.certification.title}
                  </h3>
                  <span className="px-3 py-1 bg-accent-400/20 text-accent-400 rounded-full text-sm font-medium">
                    {experience.certification.status}
                  </span>
                </div>
                
                <p className="text-primary-400 font-medium mb-4">
                  {experience.certification.organization}
                </p>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {experience.certification.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {experience.certification.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/10 text-gray-300 rounded-lg text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Personal Projects */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-secondary-400 mb-8 text-center">
              Personal Projects
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {experience.projects.map((project, index) => {
                const IconComponent = getProjectIcon(project.title);
                
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="glass rounded-xl p-6 shadow-neon-green hover:shadow-neon transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-secondary-400/20 rounded-lg mr-4">
                        <IconComponent className="w-6 h-6 text-secondary-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">
                        {project.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-secondary-400/20 text-secondary-400 rounded-lg text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Skills Highlights */}
          <motion.div variants={itemVariants}>
            <div className="glass rounded-2xl p-8 shadow-neon text-center">
              <h3 className="text-2xl font-bold gradient-text mb-6">
                Key Achievements
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary-400">10+</div>
                  <div className="text-gray-300 text-sm">Projects Completed</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-secondary-400">5+</div>
                  <div className="text-gray-300 text-sm">Technologies Mastered</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-accent-400">2+</div>
                  <div className="text-gray-300 text-sm">Years Learning</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-pink-400">100%</div>
                  <div className="text-gray-300 text-sm">Passion Driven</div>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};

export default Experience;