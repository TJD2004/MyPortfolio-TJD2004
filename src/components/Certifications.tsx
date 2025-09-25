import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, Building } from 'lucide-react';
import toast from 'react-hot-toast';


interface CertificationsProps {
  isDark: boolean;
}

const Certifications: React.FC<CertificationsProps> = ({ isDark }) => {
  const certifications = [
    {
      title: 'Web Development Fundamentals',
      issuer: 'IBM',
      date: '2025',
      description:'Foundational certification covering core concepts of HTML, CSS, JavaScript, and web development best practices.',
      skills: ['HTML', 'CSS', 'JavaScript', 'Web Fundamentals'],
      color: isDark ? 'from-indigo-500 to-purple-600' : 'from-indigo-600 to-purple-700',
      link: 'https://www.credly.com/badges/ea9e1ced-f196-4995-b989-3d86cc31f37e/public_url'
    },
    {
      title: 'Object-Oriented Programming in C++',
      issuer: 'Code360',
      date: '2025',
      description: 'Comprehensive certification covering advanced OOP concepts, design patterns, and C++ best practices.',
      skills: ['C++', 'OOP', 'Memory Management'],
      color: isDark ? 'from-blue-500 to-cyan-600' : 'from-blue-600 to-cyan-700',
      link:'https://image2url.com/images/1758814409788-a58e8fff-1d2e-4feb-a691-91d39e40834e.png'
    },
    {
      title: 'JavaScript Fundamentals',
      issuer: 'GeeksforGeeks',
      date: '2025',
      description: 'In-depth certification covering JavaScript ES6+, DOM manipulation, async programming, and modern development practices.',
      skills: ['JavaScript', 'ES6+', 'DOM', 'Async Programming'],
      color: isDark ? 'from-yellow-500 to-orange-600' : 'from-yellow-600 to-orange-700',
      link: 'https://media.geeksforgeeks.org/courses/certificates/44a07706735ac25707bbfc858604b832.pdf'
    },
    {
      title: 'MongoDB Developer Toolkit',
      issuer: 'GeeksforGeeks',
      date: '2025',
      description: 'Professional certification in MongoDB database design, aggregation pipelines, indexing, and performance optimization.',
      skills: ['MongoDB', 'Database Design', 'Aggregation', 'Performance'],
      color: isDark ? 'from-green-500 to-emerald-600' : 'from-green-600 to-emerald-700',
      link: 'https://media.geeksforgeeks.org/courses/certificates/9320a922496bfa50dab1070eb5b36763.pdf'
    }
  ];

  return (
    <section id="certifications" className="py-20 relative">
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
            Certifications
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r ${
            isDark 
              ? 'from-purple-400 to-pink-400' 
              : 'from-purple-600 to-pink-600'
          } mx-auto rounded-full`}></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, rotateY: 5 }}
              className="group perspective-1000"
            >
              <motion.div 
                whileHover={{ 
                  boxShadow: isDark 
                    ? "0 25px 50px rgba(139, 92, 246, 0.3)" 
                    : "0 25px 50px rgba(168, 85, 247, 0.2)"
                }}
                className={`backdrop-blur-md rounded-2xl p-6 border transition-all duration-300 h-full transform-gpu ${
                isDark 
                  ? 'bg-gray-800/50 border-purple-500/20 hover:border-purple-400/40' 
                  : 'bg-white/50 border-purple-300/20 hover:border-purple-400/40'
              }`}>
                <div className="flex items-center justify-between mb-4">
                  <motion.div 
                    whileHover={{ 
                      scale: 1.2,
                      rotate: [0, -10, 10, 0],
                      boxShadow: "0 15px 30px rgba(0,0,0,0.3)"
                    }}
                    transition={{ duration: 0.3 }}
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${cert.color} flex items-center justify-center transition-transform duration-300`}
                  >
                    <motion.div
                      animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                        scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                      }}
                    >
                      <Award className="w-8 h-8 text-white" />
                    </motion.div>
                  </motion.div>
                  <motion.a
                    href={cert.link}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    // onClick={() => {
                    //   toast.success('Certificate verification will be available soon!');
                    // }}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      isDark 
                        ? 'bg-gray-700/50 hover:bg-gray-600/50 text-gray-300' 
                        : 'bg-white/50 hover:bg-gray-100/50 text-gray-700'
                    }`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
                
                <h3 className={`text-xl font-semibold mb-2 transition-colors ${
                  isDark 
                    ? 'text-white group-hover:text-purple-300' 
                    : 'text-gray-800 group-hover:text-purple-600'
                }`}>
                  {cert.title}
                </h3>
                
                <div className={`flex items-center space-x-4 mb-4 text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  <div className="flex items-center space-x-1">
                    <Building className="w-4 h-4" />
                    <span>{cert.issuer}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                </div>
                
                <p className={`leading-relaxed mb-6 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {cert.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 rounded-full text-xs border ${
                        isDark 
                          ? 'bg-purple-500/20 text-purple-300 border-purple-500/30' 
                          : 'bg-purple-100 text-purple-700 border-purple-300'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;