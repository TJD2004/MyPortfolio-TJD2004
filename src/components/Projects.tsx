import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Cloud, DollarSign, FileText, Tv, ShoppingCart } from 'lucide-react';
import toast from 'react-hot-toast';

interface ProjectsProps {
  isDark: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isDark }) => {
  const projects = [
    {
      title: 'Forecast.web',
      description: 'A responsive weather application built with vanilla JavaScript, HTML, and CSS. Features real-time weather data, location-based forecasts, and clean UI design.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Weather API', 'Responsive Design'],
      icon: <Cloud className="w-8 h-8" />,
      gradient: isDark ? 'from-blue-500 to-cyan-600' : 'from-blue-600 to-cyan-700',
      category: 'Frontend',
      repo_link:'https://github.com/TJD2004/Weather-App-using-HTML-CSS-JSS.git',
      website_link:'https://forecastweb.vercel.app'
    },
    {
      title: 'Currency Converter',
      description: 'Real-time currency conversion application with live exchange rates. Built with vanilla JavaScript for fast performance and responsive design.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Exchange Rate API'],
      icon: <DollarSign className="w-8 h-8" />,
      gradient: isDark ? 'from-green-500 to-emerald-600' : 'from-green-600 to-emerald-700',
      category: 'Frontend',
      repo_link:'https://github.com/TJD2004/Currency-Converter-Web-Using-HTML-CSS-JS.git',
      website_link:'https://currency-converter-using-html-css-js.vercel.app'
    },
    {
      title: 'Note.app',
      description: 'Full-stack note-taking application with Google authentication, real-time sync, and rich text editing. Built with MERN stack and Redux for state management.',
      technologies: ['React', 'TypeScript', 'Redux Toolkit', 'Node.js', 'MongoDB', 'Google Auth', 'Express', 'Google Auth'],
      icon: <FileText className="w-8 h-8" />,
      gradient: isDark ? 'from-purple-500 to-pink-600' : 'from-purple-600 to-pink-700',
      category: 'Full Stack',
      repo_link:'https://github.com/TJD2004/Note-Saver-Mern-Stack-Web-Application.git',
      website_link:'https://note-saver-mern-stack-web.vercel.app'
    },
    {
      title: 'Disney+ Clone',
      description: 'Complete Disney+ streaming platform clone with user authentication, video streaming, and responsive design. Features Google sign-in and comprehensive user management.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Google Auth', 'REST API', 'Mongoose'],
      icon: <Tv className="w-8 h-8" />,
      gradient: isDark ? 'from-indigo-500 to-purple-600' : 'from-indigo-600 to-purple-700',
      category: 'Full Stack',
      repo_link:'https://github.com/TJD2004/Disney-Plus-Clone-Full-Stack-Website',
      website_link:'https://disney-plus-clone-full-stack-web.vercel.app'
    },
    {
      title: 'ShopCart.com - Ecommerce Website',
      description: 'Complete Disney+ streaming platform clone with user authentication, video streaming, and responsive design. Features Google sign-in and comprehensive user management.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API', 'Mongoose', 'Material UI'],
      icon: <ShoppingCart className="w-8 h-8" />,
      gradient: isDark ? 'from-indigo-500 to-purple-600' : 'from-indigo-600 to-purple-700',
      category: 'Full Stack',
      repo_link:'https://github.com/TJD2004/ShopCart_com_E-commerce-web',
      website_link:'https://shopcart-e-commerce-web.netlify.app'
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.3 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: 180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.8, delay: 0.2, type: "spring", bounce: 0.8 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <motion.span 
              animate={{ 
                rotateY: [0, 360],
                scale: [1, 1.1, 1],
                x: [0, 5, -5, 0]
              }}
              transition={{ 
                rotateY: { duration: 8, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                x: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              className="text-6xl inline-block"
            >
              💼
            </motion.span>
          </motion.div>
          <h2 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${
            isDark 
              ? 'from-purple-400 to-pink-400' 
              : 'from-purple-600 to-pink-600'
          } bg-clip-text text-transparent mb-4`}>
            Featured Projects
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

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2, type: "spring", bounce: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -15,
                rotateY: 5,
                scale: 1.02,
                boxShadow: isDark 
                  ? "0 30px 60px rgba(139, 92, 246, 0.3)" 
                  : "0 30px 60px rgba(168, 85, 247, 0.2)"
              }}
              className="group"
            >
              <div className={`backdrop-blur-md rounded-2xl p-6 border transition-all duration-500 h-full transform-gpu ${
                isDark 
                  ? 'bg-gray-800/50 border-purple-500/20 hover:border-purple-400/40' 
                  : 'bg-white/50 border-purple-300/20 hover:border-purple-400/40'
              }`}>
                <div className="flex items-start justify-between mb-4">
                  <motion.div 
                    whileHover={{ 
                      scale: 1.2,
                      rotate: [0, -10, 10, 0],
                      boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
                    }}
                    transition={{ duration: 0.3 }}
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${project.gradient} flex items-center justify-center transition-all duration-300`}
                  >
                    <div className="text-white">
                      {project.icon}
                    </div>
                  </motion.div>
                  <motion.span 
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                    isDark 
                      ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' 
                      : 'bg-purple-100 text-purple-700 border border-purple-300'
                  } cursor-pointer transition-all duration-300`}>
                    {project.category}
                  </motion.span>
                </div>
                
                <motion.h3 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                  className={`text-xl font-semibold mb-3 transition-colors ${
                  isDark 
                    ? 'text-white group-hover:text-purple-300' 
                    : 'text-gray-800 group-hover:text-purple-600'
                }`}>
                  {project.title}
                </motion.h3>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                  className={`leading-relaxed mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
                >
                  {project.description}
                </motion.p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: index * 0.1 + techIndex * 0.05 + 0.6,
                        type: "spring",
                        bounce: 0.5
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className={`px-3 py-1 rounded-full text-sm border ${
                        isDark 
                          ? 'bg-purple-500/20 text-purple-300 border-purple-500/30' 
                          : 'bg-purple-100 text-purple-700 border-purple-300'
                      } cursor-pointer transition-all duration-300`}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <motion.a
                    href={project.website_link}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.8 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: isDark 
                        ? "0 15px 30px rgba(139, 92, 246, 0.4)" 
                        : "0 15px 30px rgba(168, 85, 247, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                      isDark 
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600' 
                        : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                    }`}
                    // onClick={() => {
                    //   toast.success('Demo link will be available soon!');
                    // }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </motion.a>
                  <motion.a
                  href={project.repo_link}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.9 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: isDark 
                        ? "0 15px 30px rgba(75, 85, 99, 0.4)" 
                        : "0 15px 30px rgba(156, 163, 175, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 border ${
                      isDark 
                        ? 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 border-gray-600' 
                        : 'bg-white/50 text-gray-700 hover:bg-gray-100/50 border-gray-300'
                    }`}
                    // onClick={() => {
                    //   toast.success('GitHub repository will be available soon!');
                    // }}
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                   
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;