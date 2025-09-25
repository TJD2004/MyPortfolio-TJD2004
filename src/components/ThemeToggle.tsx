import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, setIsDark }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <motion.button
        onClick={() => setIsDark(!isDark)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`p-4 rounded-full backdrop-blur-md border transition-all duration-500 ${
          isDark 
            ? 'bg-gray-800/80 border-purple-500/30 hover:border-purple-400 text-yellow-400' 
            : 'bg-white/80 border-purple-300/50 hover:border-purple-500 text-purple-600'
        }`}
      >
        <motion.div
          initial={false}
          animate={{ rotate: isDark ? 0 : 180 }}
          transition={{ duration: 0.5 }}
        >
          {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </motion.div>
      </motion.button>
    </motion.div>
  );
};

export default ThemeToggle;