import React from 'react';
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
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App min-h-screen bg-dark-50 text-white relative overflow-x-hidden">
        <Navigation />
        
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={
              <motion.div
                initial={{ opacity: 0, x: -100, rotateY: -15 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                exit={{ opacity: 0, x: 100, rotateY: 15 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <Home />
              </motion.div>
            } />
            <Route path="/about" element={
              <motion.div
                initial={{ opacity: 0, y: -100, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 100, scale: 0.9 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <About />
              </motion.div>
            } />
            <Route path="/experience" element={
              <motion.div
                initial={{ opacity: 0, x: 100, rotateY: 15 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                exit={{ opacity: 0, x: -100, rotateY: -15 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <Experience />
              </motion.div>
            } />
            <Route path="/skills" element={
              <motion.div
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -100, scale: 0.8 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <Skills />
              </motion.div>
            } />
            <Route path="/services" element={
              <motion.div
                initial={{ opacity: 0, x: -100, y: -50 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: 100, y: 50 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <Services />
              </motion.div>
            } />
            <Route path="/projects" element={
              <motion.div
                initial={{ opacity: 0, scale: 0.7, rotateX: -30 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                exit={{ opacity: 0, scale: 0.7, rotateX: 30 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <Projects />
              </motion.div>
            } />
            <Route path="/contact" element={
              <motion.div
                initial={{ opacity: 0, x: 100, y: 100 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: -100, y: -100 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
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