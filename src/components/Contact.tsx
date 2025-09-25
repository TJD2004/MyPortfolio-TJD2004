import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, Github, Linkedin } from 'lucide-react';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';

interface ContactProps {
  isDark: boolean;
}

const Contact: React.FC<ContactProps> = ({ isDark }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        time: new Date().toLocaleString(),
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      toast.success('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Failed to send message. Please try again or contact me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 relative">
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
            Get In Touch
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r ${
            isDark 
              ? 'from-purple-400 to-pink-400' 
              : 'from-purple-600 to-pink-600'
          } mx-auto rounded-full`}></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className={`backdrop-blur-md rounded-2xl p-8 border ${
              isDark 
                ? 'bg-gray-800/50 border-purple-500/20' 
                : 'bg-white/50 border-purple-300/20'
            }`}>
              <h3 className={`text-2xl font-semibold ${isDark ? 'text-white' : 'text-gray-800'} mb-6`}>
                Let's Connect
              </h3>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-8 leading-relaxed`}>
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              
              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center space-x-4 p-4 rounded-lg border ${
                    isDark 
                      ? 'bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/20' 
                      : 'bg-gradient-to-r from-purple-100/50 to-pink-100/50 border-purple-300/30'
                  }`}
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    <Mail className={`w-6 h-6 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
                  </motion.div>
                  <div>
                    <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-800'}`}>Email</p>
                    <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>dharmiktushar200@gmail.com</p>
                  </div>
                </motion.div>
                
                <motion.div
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center space-x-4 p-4 rounded-lg border ${
                    isDark 
                      ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20' 
                      : 'bg-gradient-to-r from-blue-100/50 to-purple-100/50 border-blue-300/30'
                  }`}
                >
                  <motion.div
                    animate={{ 
                      rotate: [0, 15, -15, 0],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                      duration: 2.5, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    <Phone className={`w-6 h-6 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                  </motion.div>
                  <div>
                    <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-800'}`}>Phone</p>
                    <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>+91 9834045650</p>
                  </div>
                </motion.div>
              </div>

              <div className="flex space-x-4 mt-8">
                <motion.a
                  href="https://github.com/TJD2004"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-full border transition-all duration-300 ${
                    isDark 
                      ? 'bg-gray-700/50 border-purple-500/30 hover:border-purple-400' 
                      : 'bg-white/50 border-purple-300/50 hover:border-purple-500'
                  }`}
                >
                  <Github className={`w-6 h-6 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/tushar-dharmik-2a03a532a"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-full border transition-all duration-300 ${
                    isDark 
                      ? 'bg-gray-700/50 border-purple-500/30 hover:border-purple-400' 
                      : 'bg-white/50 border-purple-300/50 hover:border-purple-500'
                  }`}
                >
                  <Linkedin className={`w-6 h-6 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className={`backdrop-blur-md rounded-2xl p-8 border ${
              isDark 
                ? 'bg-gray-800/50 border-purple-500/20' 
                : 'bg-white/50 border-purple-300/20'
            }`}>
              <h3 className={`text-2xl font-semibold ${isDark ? 'text-white' : 'text-gray-800'} mb-6`}>
                Send a Message
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className={`block mb-2 font-medium ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg transition-colors focus:outline-none ${
                      isDark 
                        ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-purple-400' 
                        : 'bg-white/70 border-gray-300 text-gray-800 placeholder-gray-500 focus:border-purple-500'
                    }`}
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className={`block mb-2 font-medium ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg transition-colors focus:outline-none ${
                      isDark 
                        ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-purple-400' 
                        : 'bg-white/70 border-gray-300 text-gray-800 placeholder-gray-500 focus:border-purple-500'
                    }`}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className={`block mb-2 font-medium ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 border rounded-lg transition-colors resize-none focus:outline-none ${
                      isDark 
                        ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-purple-400' 
                        : 'bg-white/70 border-gray-300 text-gray-800 placeholder-gray-500 focus:border-purple-500'
                    }`}
                    placeholder="Your message..."
                    required
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed ${
                    isDark 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600' 
                      : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;