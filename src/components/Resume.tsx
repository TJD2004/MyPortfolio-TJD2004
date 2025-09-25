import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Calendar, MapPin, GraduationCap, Briefcase } from 'lucide-react';
import toast from 'react-hot-toast';

interface ResumeProps {
  isDark: boolean;
}

const Resume: React.FC<ResumeProps> = ({ isDark }) => {
  const education = [
    {
      degree: 'Bachelor of Technology',
      field: 'Computer Science & Engineering',
      institution: 'Yashwantrao Chavan College of Engineering, Nagpur',
      year: '2024 - 2028',
      location: 'Nagpur, Maharashtra',
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      field: 'Science',
      institution: 'Adarsh Sanskar Vidhyalay And Jr. College',
      year: '2022 - 2024',
      location: 'Nagpur, Maharshtra',
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      field: 'General',
      institution: 'Jawaharlal Darda Convent',
      year: '2009 - 2022',
      location: 'Nagpur, Maharshtra',
    },
  ];


  const experience = [
    {
      title: 'Fresher - Full Stack Developer',
      company: 'Seeking Opportunities',
      period: '2025 - Present',
      location: 'Open to Work From Home',
      description:
        '2nd-year Computer Science student with a solid foundation in full-stack development. Passionate about building efficient, scalable web applications using modern technologies.',
      achievements: [
        'Built multiple full-stack projects including a Disney+ clone and a Note-taking app',
        'Proficient in MERN stack with TypeScript and modern development practices',
        'Intermediate-level problem-solving skills with knowledge of data structures and algorithms',
        'Experience with authentication systems and REST API development',
      ],
    },
  ];


  return (
    <section id="resume" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${
            isDark 
              ? 'from-purple-400 to-pink-400' 
              : 'from-purple-600 to-pink-600'
          } bg-clip-text text-transparent mb-4`}>
            Resume
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r ${
            isDark 
              ? 'from-purple-400 to-pink-400' 
              : 'from-purple-600 to-pink-600'
          } mx-auto rounded-full mb-8`}></div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            onClick={() => {
              // Add your resume download link here
              toast.success('Resume download will be available soon!');
            }}
            className={`inline-flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
              isDark 
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600' 
                : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
            }`}
          >
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Download className="w-5 h-5" />
            </motion.div>
            <span>Download Resume</span>
          </motion.button>
        </motion.div>


        <div className="max-w-4xl mx-auto">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className={`backdrop-blur-md rounded-2xl p-8 border ${
              isDark 
                ? 'bg-gray-800/50 border-purple-500/20' 
                : 'bg-white/50 border-purple-300/20'
            }`}>
              <div className="flex items-center space-x-3 mb-6">
                <Briefcase className={`w-6 h-6 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
                <h3 className={`text-2xl font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                  Experience
                </h3>
              </div>
              
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-6 rounded-lg border mb-6 ${
                    isDark 
                      ? 'bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/20' 
                      : 'bg-gradient-to-r from-purple-100/50 to-pink-100/50 border-purple-300/30'
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h4 className={`text-xl font-semibold ${
                      isDark ? 'text-purple-300' : 'text-purple-700'
                    }`}>
                      {exp.title}
                    </h4>
                    <div className={`flex items-center space-x-4 text-sm ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} font-medium mb-2`}>
                    {exp.company}
                  </p>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-4 leading-relaxed`}>
                    {exp.description}
                  </p>
                  <div className="space-y-2">
                    <h5 className={`font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Key Highlights:
                    </h5>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className={`flex items-start space-x-2 ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full mt-2 ${
                            isDark ? 'bg-purple-400' : 'bg-purple-600'
                          }`}></span>
                          <span className="text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className={`backdrop-blur-md rounded-2xl p-8 border ${
              isDark 
                ? 'bg-gray-800/50 border-purple-500/20' 
                : 'bg-white/50 border-purple-300/20'
            }`}>
              <div className="flex items-center space-x-3 mb-6">
                <GraduationCap className={`w-6 h-6 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
                <h3 className={`text-2xl font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                  Education
                </h3>
              </div>
              
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-4 rounded-lg border mb-6 ${
                    isDark 
                      ? 'bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/20' 
                      : 'bg-gradient-to-r from-purple-100/50 to-pink-100/50 border-purple-300/30'
                  }`}
                >
                  <h4 className={`text-lg font-medium ${
                    isDark ? 'text-purple-300' : 'text-purple-700'
                  }`}>
                    {edu.degree}
                  </h4>
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} font-medium`}>
                    {edu.field}
                  </p>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                    {edu.institution}
                  </p>
                  <div className={`flex items-center space-x-4 mt-2 mb-3 text-sm ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.year}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;