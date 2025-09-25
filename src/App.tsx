import React from 'react';
import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Background3D from './components/Background3D';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <div className={`relative min-h-screen transition-all duration-500 overflow-x-hidden ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900' 
        : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'
    }`}>
      <Background3D isDark={isDark} />
      <div className="relative z-10">
        <Navbar isDark={isDark} />
        <Hero isDark={isDark} />
        <About isDark={isDark} />
        <Skills isDark={isDark} />
        <Projects isDark={isDark} />
        <Resume isDark={isDark} />
        <Certifications isDark={isDark} />
        <Contact isDark={isDark} />
      </div>
      <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: isDark ? '#1f2937' : '#ffffff',
            color: isDark ? '#ffffff' : '#1f2937',
            border: `1px solid ${isDark ? '#8b5cf6' : '#a855f7'}`,
          },
        }}
      />
    </div>
  );
}

export default App;
