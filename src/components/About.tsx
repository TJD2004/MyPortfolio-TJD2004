import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Lightbulb, Target, Heart } from 'lucide-react';

interface AboutProps {
  isDark: boolean;
}

const About: React.FC<AboutProps> = ({ isDark }) => {
  const highlights = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Full Stack Development',
      description: 'Proficient in both frontend and backend technologies with MERN stack expertise.'
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Problem Solving',
      description: 'Intermediate-level problem-solving skills with a good grasp of data structures and algorithms. Continuously improving through practice and challenges.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Goal Oriented',
      description: 'Focused on delivering high-quality solutions that meet user needs and business objectives.'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Passionate Learner',
      description: 'Continuously learning new technologies and staying updated with industry trends.'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.3 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, delay: 0.2, type: "spring", bounce: 0.7 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <motion.span 
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
                y: [0, -5, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="text-6xl inline-block"
            >
              👨‍💻
            </motion.span>
          </motion.div>
          <h2 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${
            isDark 
              ? 'from-purple-400 to-pink-400' 
              : 'from-purple-600 to-pink-600'
          } bg-clip-text text-transparent mb-4`}>
            About Me
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className={`h-1 bg-gradient-to-r ${
              isDark 
                ? 'from-purple-400 to-pink-400' 
                : 'from-purple-600 to-pink-600'
            } mx-auto rounded-full`}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className={`backdrop-blur-md rounded-2xl p-8 border ${
                isDark 
                  ? 'bg-gray-800/50 border-purple-500/20' 
                  : 'bg-white/50 border-purple-300/20'
              }`}
            >
              <motion.h3 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}
              >
                Hello! I'm Tushar Dharmik
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className={`leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
              >
                I'm an aspiring full-stack developer with a strong interest in modern web technologies. I’m currently a 2nd-year Computer Science student at Yashwantrao Chavan College of Engineering, Nagpur.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className={`leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
              >
              My expertise lies in the MERN stack, and I have creating responsive, user-friendly websites. I’m also proficient in using AI tools to streamline web development, automate workflows, and enhance user experiences.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
              >
                I enjoy turning complex problems into simple, elegant solutions and am always eager to explore new technologies, contribute to open-source projects, and stay up to date with the latest trends in web development.
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  boxShadow: isDark 
                    ? "0 20px 40px rgba(139, 92, 246, 0.2)" 
                    : "0 20px 40px rgba(168, 85, 247, 0.15)"
                }}
                className={`backdrop-blur-md rounded-xl p-6 border transition-all duration-300 ${
                  isDark 
                    ? 'bg-gray-800/30 border-purple-500/20 hover:border-purple-400/40' 
                    : 'bg-white/30 border-purple-300/20 hover:border-purple-400/40'
                }`}
              >
                <motion.div 
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, -5, 5, 0]
                  }}
                  transition={{ duration: 0.3 }}
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${
                    isDark 
                      ? 'from-purple-500 to-pink-500' 
                      : 'from-purple-600 to-pink-600'
                  } flex items-center justify-center mb-4 text-white`}
                >
                  {highlight.icon}
                </motion.div>
                <h4 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                  {highlight.title}
                </h4>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;