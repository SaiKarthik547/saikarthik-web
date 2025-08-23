import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Terminal } from 'lucide-react';
import SplineBackground from '../components/SplineBackground';
import { portfolioData, splineBackgrounds } from '../data/portfolioData';

const Skills: React.FC = () => {
  const { skills, competencies } = portfolioData;
  const [animateSkills, setAnimateSkills] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateSkills(true);
    }, 1000);
    return () => clearTimeout(timer);
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

  const SkillBar: React.FC<{ skill: { name: string; level: number }; color: string }> = ({ skill, color }) => (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-medium">{skill.name}</span>
        <span className="text-gray-400 text-sm">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <motion.div
          className={`h-2 rounded-full bg-gradient-to-r ${color}`}
          initial={{ width: 0 }}
          animate={animateSkills ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pt-20 pb-16 relative">
      {/* Spline 3D Background */}
      <SplineBackground 
        src={splineBackgrounds.skills} 
        className="opacity-90"
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
              Skills & Expertise
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Continuously expanding my technical toolkit to create better digital experiences
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Frontend Development */}
            <motion.div variants={itemVariants}>
              <div className="glass rounded-2xl p-8 shadow-neon h-full backdrop-blur-md">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-primary-400/30 rounded-lg mr-4">
                    <Code className="w-6 h-6 text-primary-400" />
                  </div>
                  <h2 className="text-xl font-bold text-primary-400">
                    Frontend Development
                  </h2>
                </div>
                
                <div className="space-y-4">
                  {skills.frontend.map((skill, index) => (
                    <SkillBar
                      key={index}
                      skill={skill}
                      color="from-primary-400 to-primary-600"
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Programming Languages */}
            <motion.div variants={itemVariants}>
              <div className="glass rounded-2xl p-8 shadow-neon-green h-full backdrop-blur-md">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-secondary-400/30 rounded-lg mr-4">
                    <Terminal className="w-6 h-6 text-secondary-400" />
                  </div>
                  <h2 className="text-xl font-bold text-secondary-400">
                    Programming Languages
                  </h2>
                </div>
                
                <div className="space-y-4">
                  {skills.programming.map((skill, index) => (
                    <SkillBar
                      key={index}
                      skill={skill}
                      color="from-secondary-400 to-secondary-600"
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Design & Tools */}
            <motion.div variants={itemVariants}>
              <div className="glass rounded-2xl p-8 shadow-neon-purple h-full backdrop-blur-md">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-accent-400/30 rounded-lg mr-4">
                    <Palette className="w-6 h-6 text-accent-400" />
                  </div>
                  <h2 className="text-xl font-bold text-accent-400">
                    Design & Tools
                  </h2>
                </div>
                
                <div className="space-y-4">
                  {skills.design.map((skill, index) => (
                    <SkillBar
                      key={index}
                      skill={skill}
                      color="from-accent-400 to-accent-600"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Core Competencies */}
          <motion.div variants={itemVariants}>
            <div className="glass rounded-2xl p-8 shadow-neon text-center backdrop-blur-md">
              <h2 className="text-3xl font-bold gradient-text mb-8">
                Core Competencies
              </h2>
              
              <div className="flex flex-wrap justify-center gap-4">
                {competencies.map((competency, index) => (
                  <motion.span
                    key={index}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 bg-gradient-to-r from-primary-500/20 to-accent-500/20 border border-white/20 rounded-full text-white font-medium hover:shadow-neon transition-all duration-300 cursor-default"
                  >
                    {competency}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Learning Philosophy */}
          <motion.div variants={itemVariants}>
            <div className="glass rounded-2xl p-8 shadow-neon text-center backdrop-blur-md">
              <h3 className="text-2xl font-bold gradient-text mb-4">
                Learning Philosophy
              </h3>
              <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
                I believe in continuous learning and staying updated with the latest technologies. 
                Every project is an opportunity to learn something new and improve existing skills. 
                My approach combines theoretical knowledge with practical application, ensuring 
                that I can deliver both innovative and reliable solutions.
              </p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};

export default Skills;