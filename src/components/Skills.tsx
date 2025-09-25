import React from 'react';
import { motion } from 'framer-motion';

interface SkillsProps {
  isDark: boolean;
}

const Skills: React.FC<SkillsProps> = ({ isDark }) => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90, color: isDark ? 'from-blue-400 to-blue-600' : 'from-blue-500 to-blue-700' },
        { name: 'TypeScript', level: 85, color: isDark ? 'from-blue-500 to-blue-700' : 'from-blue-600 to-blue-800' },
        { name: 'JavaScript', level: 95, color: isDark ? 'from-yellow-400 to-yellow-600' : 'from-yellow-500 to-yellow-700' },
        { name: 'HTML/CSS', level: 90, color: isDark ? 'from-orange-400 to-orange-600' : 'from-orange-500 to-orange-700' },
        { name: 'Tailwind CSS', level: 82, color: isDark ? 'from-cyan-400 to-cyan-600' : 'from-cyan-500 to-cyan-700' },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85, color: isDark ? 'from-green-400 to-green-600' : 'from-green-500 to-green-700' },
        { name: 'Express', level: 80, color: isDark ? 'from-gray-400 to-gray-600' : 'from-gray-500 to-gray-700' },
        { name: 'MongoDB', level: 75, color: isDark ? 'from-green-500 to-green-700' : 'from-green-600 to-green-800' },
        { name: 'Mongoose', level: 75, color: isDark ? 'from-red-400 to-red-600' : 'from-red-500 to-red-700' },
        { name: 'Python(Basic)', level: 80, color: isDark ? 'from-yellow-500 to-yellow-700' : 'from-yellow-600 to-yellow-800' },
      ]
    },
    {
      title: 'Programming',
      skills: [
        { name: 'C/C++', level: 85, color: isDark ? 'from-blue-600 to-blue-800' : 'from-blue-700 to-blue-900' },
        { name: 'Java', level: 70, color: isDark ? 'from-red-500 to-red-700' : 'from-red-600 to-red-800' },
        { name: 'Data Structures', level: 70, color: isDark ? 'from-purple-400 to-purple-600' : 'from-purple-500 to-purple-700' },
        { name: 'Algorithms', level: 70, color: isDark ? 'from-pink-400 to-pink-600' : 'from-pink-500 to-pink-700' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
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
                y: [0, -10, 0],
                rotate: [0, 10, -10, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="text-6xl inline-block"
            >
              🚀
            </motion.span>
          </motion.div>
          <h2 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${
            isDark 
              ? 'from-purple-400 to-pink-400' 
              : 'from-purple-600 to-pink-600'
          } bg-clip-text text-transparent mb-4`}>
            Skills & Expertise
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
          } mx-auto rounded-full`}></motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: categoryIndex * 0.2, type: "spring", bounce: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                rotateY: 5,
                boxShadow: isDark 
                  ? "0 25px 50px rgba(139, 92, 246, 0.3)" 
                  : "0 25px 50px rgba(168, 85, 247, 0.2)"
              }}
              className={`backdrop-blur-md rounded-2xl p-6 border transform-gpu transition-all duration-500 ${
                isDark 
                  ? 'bg-gray-800/50 border-purple-500/20' 
                  : 'bg-white/50 border-purple-300/20'
              }`}
            >
              <motion.h3 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className={`text-2xl font-semibold ${isDark ? 'text-white' : 'text-gray-800'} mb-6 text-center`}
              >
                {category.title}
              </motion.h3>
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: (categoryIndex * 0.2) + (index * 0.1) }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5, scale: 1.02 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className={`font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {skill.name}
                      </span>
                      <motion.span 
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: (categoryIndex * 0.2) + (index * 0.1) + 0.3 }}
                        viewport={{ once: true }}
                        className={`text-sm font-semibold ${isDark ? 'text-purple-400' : 'text-purple-600'}`}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className={`w-full rounded-full h-2 ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1.5, 
                          delay: (categoryIndex * 0.2) + (index * 0.1) + 0.5,
                          type: "spring",
                          bounce: 0.3
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color} relative overflow-hidden`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
