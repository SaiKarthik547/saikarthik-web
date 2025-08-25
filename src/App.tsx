import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { shouldReduceMotion, getOptimizationLevel } from './utils/deviceDetection';
import './App.css';

const App: React.FC = () => {
  const [reduceMotion, setReduceMotion] = useState(false);
  const [optimizationLevel, setOptimizationLevel] = useState<'very-low' | 'low' | 'medium' | 'high'>('high');

  useEffect(() => {
    setReduceMotion(shouldReduceMotion());
    setOptimizationLevel(getOptimizationLevel());
  }, []);

  // Simplified transitions for mobile devices or low-performance devices
  const getPageTransition = (direction: string) => {
    // No transitions for very low-end devices
    if (optimizationLevel === 'very-low') {
      return {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.1 }
      };
    }
    
    // Simplified transitions for mobile or low-performance devices
    if (reduceMotion || optimizationLevel === 'low') {
      return {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.3 }
      };
    }
    
    // Complex transitions for desktop/high-performance devices
    switch (direction) {
      case 'home':
        return {
          initial: { opacity: 0, x: -100, rotateY: -15 },
          animate: { opacity: 1, x: 0, rotateY: 0 },
          exit: { opacity: 0, x: 100, rotateY: 15 },
          transition: { duration: 0.6, ease: "easeInOut" }
        };
      case 'about':
        return {
          initial: { opacity: 0, y: -100, scale: 0.9 },
          animate: { opacity: 1, y: 0, scale: 1 },
          exit: { opacity: 0, y: 100, scale: 0.9 },
          transition: { duration: 0.6, ease: "easeInOut" }
        };
      case 'experience':
        return {
          initial: { opacity: 0, x: 100, rotateY: 15 },
          animate: { opacity: 1, x: 0, rotateY: 0 },
          exit: { opacity: 0, x: -100, rotateY: -15 },
          transition: { duration: 0.6, ease: "easeInOut" }
        };
      case 'skills':
        return {
          initial: { opacity: 0, y: 100, scale: 0.8 },
          animate: { opacity: 1, y: 0, scale: 1 },
          exit: { opacity: 0, y: -100, scale: 0.8 },
          transition: { duration: 0.6, ease: "easeInOut" }
        };
      case 'services':
        return {
          initial: { opacity: 0, x: -100, y: -50 },
          animate: { opacity: 1, x: 0, y: 0 },
          exit: { opacity: 0, x: 100, y: 50 },
          transition: { duration: 0.6, ease: "easeInOut" }
        };
      case 'projects':
        return {
          initial: { opacity: 0, scale: 0.7, rotateX: -30 },
          animate: { opacity: 1, scale: 1, rotateX: 0 },
          exit: { opacity: 0, scale: 0.7, rotateX: 30 },
          transition: { duration: 0.6, ease: "easeInOut" }
        };
      case 'contact':
        return {
          initial: { opacity: 0, x: 100, y: 100 },
          animate: { opacity: 1, x: 0, y: 0 },
          exit: { opacity: 0, x: -100, y: -100 },
          transition: { duration: 0.6, ease: "easeInOut" }
        };
      default:
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: { duration: 0.6, ease: "easeInOut" }
        };
    }
  };

  // Simplified version for very low-end devices
  if (optimizationLevel === 'very-low') {
    return (
      <Router>
        <div className="App min-h-screen bg-dark-50 text-white relative overflow-x-hidden very-low-end-optimized">
          <Navigation />
          
          <div className="pt-14">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }

  // Simplified version for low-end devices
  if (reduceMotion || optimizationLevel === 'low') {
    return (
      <Router>
        <div className="App min-h-screen bg-dark-50 text-white relative overflow-x-hidden low-end-optimized">
          <Navigation />
          
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={
                <div>
                  <Home />
                </div>
              } />
              <Route path="/about" element={
                <div>
                  <About />
                </div>
              } />
              <Route path="/experience" element={
                <div>
                  <Experience />
                </div>
              } />
              <Route path="/skills" element={
                <div>
                  <Skills />
                </div>
              } />
              <Route path="/services" element={
                <div>
                  <Services />
                </div>
              } />
              <Route path="/projects" element={
                <div>
                  <Projects />
                </div>
              } />
              <Route path="/contact" element={
                <div>
                  <Contact />
                </div>
              } />
            </Routes>
          </AnimatePresence>
        </div>
      </Router>
    );
  }

  return (
    <Router>
      <div className="App min-h-screen bg-dark-50 text-white relative overflow-x-hidden">
        <Navigation />
        
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={
              <motion.div {...getPageTransition('home')}>
                <Home />
              </motion.div>
            } />
            <Route path="/about" element={
              <motion.div {...getPageTransition('about')}>
                <About />
              </motion.div>
            } />
            <Route path="/experience" element={
              <motion.div {...getPageTransition('experience')}>
                <Experience />
              </motion.div>
            } />
            <Route path="/skills" element={
              <motion.div {...getPageTransition('skills')}>
                <Skills />
              </motion.div>
            } />
            <Route path="/services" element={
              <motion.div {...getPageTransition('services')}>
                <Services />
              </motion.div>
            } />
            <Route path="/projects" element={
              <motion.div {...getPageTransition('projects')}>
                <Projects />
              </motion.div>
            } />
            <Route path="/contact" element={
              <motion.div {...getPageTransition('contact')}>
                <Contact />
              </motion.div>
            } />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
};

export default App;