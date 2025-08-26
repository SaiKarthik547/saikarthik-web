import React from 'react';
import { motion } from 'framer-motion';
import { Code, Terminal, Palette } from 'lucide-react';
import SplineBackground from '../components/SplineBackground';
import { portfolioData, splineBackgrounds } from '../data/portfolioData';

const Skills: React.FC = () => {
  const { skills, competencies } = portfolioData;

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
        <span className="text-gray-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-3">
        <motion.div
          className={`h-3 rounded-full bg-gradient-to-r ${color}`}
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
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
        className="opacity-80"
      />
      
      <div className="relative z-20 max-w-6xl mx-auto px-6">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold gradient-text mb-6">
            Skills & Expertise
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Continuously expanding my technical toolkit and staying updated with the latest industry trends.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Frontend Development */}
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-8 shadow-neon"
          >
            <div className="flex items-center mb-8">
              <div className="p-4 bg-primary-400/30 rounded-xl mr-4">
                <Code className="w-8 h-8 text-primary-400" />
              </div>
              <h2 className="text-2xl font-bold text-primary-400">
                Frontend Development
              </h2>
            </div>
            
            <div className="space-y-6">
              {skills.frontend.map((skill, index) => (
                <SkillBar
                  key={index}
                  skill={skill}
                  color="from-primary-400 to-primary-600"
                />
              ))}
            </div>
          </motion.div>

          {/* Programming Languages */}
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-8 shadow-neon-green"
          >
            <div className="flex items-center mb-8">
              <div className="p-4 bg-secondary-400/30 rounded-xl mr-4">
                <Terminal className="w-8 h-8 text-secondary-400" />
              </div>
              <h2 className="text-2xl font-bold text-secondary-400">
                Programming Languages
              </h2>
            </div>
            
            <div className="space-y-6">
              {skills.programming.map((skill, index) => (
                <SkillBar
                  key={index}
                  skill={skill}
                  color="from-secondary-400 to-secondary-600"
                />
              ))}
            </div>
          </motion.div>

          {/* Design & Tools */}
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-8 shadow-neon-purple"
          >
            <div className="flex items-center mb-8">
              <div className="p-4 bg-accent-400/30 rounded-xl mr-4">
                <Palette className="w-8 h-8 text-accent-400" />
              </div>
              <h2 className="text-2xl font-bold text-accent-400">
                Design & Tools
              </h2>
            </div>
            
            <div className="space-y-6">
              {skills.design.map((skill, index) => (
                <SkillBar
                  key={index}
                  skill={skill}
                  color="from-accent-400 to-accent-600"
                />
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Core Competencies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass rounded-2xl p-8 shadow-neon text-center mt-16"
        >
          <h2 className="text-2xl font-bold gradient-text mb-8">
            Core Competencies
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {competencies.map((competency, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.1 }}
                className="px-6 py-3 bg-gradient-to-r from-primary-500/20 to-accent-500/20 border border-white/20 rounded-full text-white font-bold text-lg hover:shadow-neon transition-all duration-300 cursor-default"
              >
                {competency}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Learning Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass rounded-2xl p-8 shadow-neon text-center mt-16"
        >
          <h3 className="text-2xl font-bold gradient-text mb-6">
            Learning Philosophy
          </h3>
          <p className="text-gray-300 text-xl max-w-4xl mx-auto leading-relaxed">
            I believe in continuous learning and staying updated with the latest technologies. 
            Every project is an opportunity to learn something new and improve existing skills.
            The tech landscape evolves rapidly, and I'm committed to growing alongside it.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;