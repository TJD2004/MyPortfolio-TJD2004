import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';

interface HeroProps {
  isDark: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDark }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${
              isDark ? 'bg-purple-400/30' : 'bg-purple-600/20'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            {/* Animated Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 w-48 h-48 md:w-56 md:h-56"
            >
              <div className={`w-full h-full rounded-full border-2 border-dashed ${
                isDark ? 'border-purple-400/30' : 'border-purple-600/30'
              }`}></div>
            </motion.div>
            
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-2 w-44 h-44 md:w-52 md:h-52"
            >
              <div className={`w-full h-full rounded-full border border-dotted ${
                isDark ? 'border-pink-400/40' : 'border-pink-600/40'
              }`}></div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                boxShadow: [
                  '0 0 20px rgba(139, 92, 246, 0.3)',
                  '0 0 40px rgba(139, 92, 246, 0.6)',
                  '0 0 20px rgba(139, 92, 246, 0.3)'
                ]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              whileHover={{ scale: 1.1 }}
              className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-gradient-to-r from-purple-400 to-pink-400 mx-auto"
              style={{
                background: `linear-gradient(45deg, ${isDark ? '#8b5cf6' : '#a855f7'}, ${isDark ? '#ec4899' : '#d946ef'})`,
                padding: '4px'
              }}
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-200">
                <img 
                  src="/tushar.jpg" 
                  alt="Dharmik Tushar"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Floating Sparkles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${20 + Math.cos(i * Math.PI / 4) * 120}px`,
                  top: `${20 + Math.sin(i * Math.PI / 4) * 120}px`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.4, 1, 0.4],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 2 + Math.random(),
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              >
                <Sparkles className={`w-4 h-4 ${isDark ? 'text-yellow-400' : 'text-yellow-500'}`} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="space-y-6"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className={`relative z-10 text-5xl md:text-7xl font-bold bg-gradient-to-r ${
            isDark 
              ? 'from-purple-400 via-pink-400 to-cyan-400' 
              : 'from-purple-600 via-pink-600 to-cyan-600'
          } animate-gradient gradient-text`}

          >
            Tushar Dharmik
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="space-y-2"
          >
            <motion.p 
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className={`text-xl md:text-2xl font-medium bg-gradient-to-r ${
                isDark 
                  ? 'from-gray-300 via-purple-300 to-gray-300' 
                  : 'from-gray-700 via-purple-700 to-gray-700'
              } bg-clip-text text-transparent`}
              style={{ backgroundSize: '200% 200%' }}
            >
              Full Stack Developer
            </motion.p>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
              className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto leading-relaxed`}
            >
              Passionate about creating innovative web solutions with modern technologies. 
              Specializing in React, Node.js, and full-stack development.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: isDark 
                  ? "0 20px 40px rgba(139, 92, 246, 0.4)" 
                  : "0 20px 40px rgba(168, 85, 247, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 rounded-lg transition-all duration-300 font-medium ${
                isDark 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600' 
                  : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
              }`}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                View My Work
              </motion.span>
            </motion.button>
            
            <motion.button
              whileHover={{ 
                scale: 1.05,
                borderColor: isDark ? '#8b5cf6' : '#a855f7'
              }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 rounded-lg border-2 transition-all duration-300 font-medium ${
                isDark 
                  ? 'border-purple-400 text-purple-400 hover:bg-purple-400/10' 
                  : 'border-purple-600 text-purple-600 hover:bg-purple-600/10'
              }`}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className={`p-2 rounded-full border ${
              isDark 
                ? 'border-purple-400/50 text-purple-400' 
                : 'border-purple-600/50 text-purple-600'
            }`}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;