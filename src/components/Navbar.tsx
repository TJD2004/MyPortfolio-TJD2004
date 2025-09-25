import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isDark }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showProfileImage, setShowProfileImage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
      setShowProfileImage(scrollPosition > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '#resume' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? isDark
            ? 'bg-gray-900/90 backdrop-blur-md border-b border-purple-500/20' 
            : 'bg-white/90 backdrop-blur-md border-b border-purple-300/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <AnimatePresence>
              {showProfileImage && (
                <motion.div
                  initial={{ opacity: 0, scale: 0, x: -20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="w-10 h-10 rounded-full overflow-hidden border-2 border-purple-400"
                >
                  <img 
                    src="/tushar.jpg" 
                    alt="Dharmik Tushar"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              )}
            </AnimatePresence>
            <Code2 className={`w-8 h-8 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
            <span className={`text-xl font-bold bg-gradient-to-r ${
              isDark 
                ? 'from-purple-400 to-pink-400' 
                : 'from-purple-600 to-pink-600'
            } bg-clip-text text-transparent`}>
              Tushar Dharmik
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`${
                  isDark ? 'text-gray-300 hover:text-purple-400' : 'text-gray-700 hover:text-purple-600'
                } transition-colors duration-200 font-medium`}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${
                isDark ? 'text-gray-300 hover:text-purple-400' : 'text-gray-700 hover:text-purple-600'
              } transition-colors`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`md:hidden ${
                isDark ? 'bg-gray-800/95' : 'bg-white/95'
              } backdrop-blur-md rounded-lg mt-2 p-4 border ${
                isDark ? 'border-purple-500/20' : 'border-purple-300/20'
              }`}
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 ${
                    isDark ? 'text-gray-300 hover:text-purple-400' : 'text-gray-700 hover:text-purple-600'
                  } transition-colors`}
                >
                  {item.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;