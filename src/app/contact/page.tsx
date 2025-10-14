'use client';

import { motion, Variants } from 'framer-motion';
import { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaFacebook, FaTwitter, FaLink } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: 'Our Office',
      details: [
        'Level 04, Awal Center, 34 Kamal Ataturk Avenue',
        'Banani C/A, Dhaka-1213, Bangladesh'
      ]
    },
    {
      icon: FaPhoneAlt,
      title: 'Contact',
      details: [
        'Phone: +8801322924976',
        'WhatsApp: +447310173484'
      ]
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      details: ['uhl.bd@mie-services.com']
    },
    {
      icon: FaClock,
      title: 'Working Hours',
      details: ['Monday - Friday: 9:00 - 18:00', 'Saturday: 10:00 - 14:00']
    }
  ];

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      } 
    }
  };

  const formVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.5)",
      transition: { duration: 0.2 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20"
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl max-w-2xl"
          >
            We'd love to hear from you. Contact us today and our team will get back to you as soon as possible.
          </motion.p>
        </div>
      </motion.div>

      {/* Contact Info & Form */}
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Contact Information */}
          <motion.div variants={fadeInUp} className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-800">Contact Information</h2>
            <p className="text-gray-600">
              We partner with leading institutions to ensure you find the perfect program for your academic goals.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ 
                    y: -5,
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
                    transition: { duration: 0.3 }
                  }}
                  className={`group p-6 rounded-xl transition-all duration-300 ${
                    index % 4 === 0 ? 'bg-gradient-to-br from-blue-50 to-blue-50' :
                    index % 3 === 0 ? 'bg-gradient-to-br from-cyan-50 to-cyan-50' :
                    index % 2 === 0 ? 'bg-gradient-to-br from-indigo-50 to-indigo-50' :
                    'bg-gradient-to-br from-sky-50 to-sky-50'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <motion.div 
                      className="p-3 rounded-lg"
                      whileHover={{ 
                        scale: 1.1,
                        transition: { 
                          duration: 0.4,
                          type: 'spring',
                          stiffness: 400,
                          damping: 10
                        }
                      }}
                      animate={{
                        y: [0, -5, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        ease: 'easeInOut'
                      }}
                    >
                      <div className={`p-3 rounded-lg transform transition-all duration-300 ${
                        index % 4 === 0 ? 'bg-blue-100 group-hover:bg-blue-200' :
                        index % 3 === 0 ? 'bg-cyan-100 group-hover:bg-cyan-200' :
                        index % 2 === 0 ? 'bg-indigo-100 group-hover:bg-indigo-200' :
                        'bg-sky-100 group-hover:bg-sky-200'
                      }`}>
                        <item.icon className={`text-2xl transform transition-transform duration-300 group-hover:scale-110 ${
                          index % 4 === 0 ? 'text-blue-600' :
                          index % 3 === 0 ? 'text-cyan-600' :
                          index % 2 === 0 ? 'text-indigo-600' :
                          'text-sky-600'
                        }`} />
                      </div>
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800">{item.title}</h3>
                      <div className="mt-2 space-y-1.5">
                        {item.details.map((detail, i) => (
                          <motion.p 
                            key={i}
                            className="text-gray-600 text-sm"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ 
                              opacity: 1, 
                              x: 0,
                              transition: { delay: 0.1 * (i + 1) }
                            }}
                          >
                            {detail}
                          </motion.p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Media */}
            <motion.div variants={fadeInUp} className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="font-semibold text-lg text-gray-800 mb-3">Follow Us</h3>
              <div className="flex space-x-3">
                <motion.a 
                  href="#" 
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 bg-white text-blue-600 rounded-full shadow-sm hover:shadow transition-all duration-200"
                >
                  <FaFacebook size={20} />
                </motion.a>
                <motion.a 
                  href="#" 
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 bg-white text-blue-400 rounded-full shadow-sm hover:shadow transition-all duration-200"
                >
                  <FaTwitter size={20} />
                </motion.a>
                <motion.a 
                  href="#" 
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 bg-white text-blue-500 rounded-full shadow-sm hover:shadow transition-all duration-200"
                >
                  <FaLink size={20} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            variants={fadeInUp} 
            className="relative bg-gradient-to-br from-blue-50 to-white p-6 sm:p-8 rounded-2xl shadow-xl overflow-hidden h-fit"
          >
            {/* Animated background elements */}
            <motion.div 
              className="absolute -top-24 -right-24 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"
              animate={{
                scale: [1, 1.1, 1],
                x: [0, 10, 0],
                y: [0, 10, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
            
            <div className="relative z-10">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-1">
                  Send us a Message
                </h2>
                <p className="text-gray-600">We'll get back to you as soon as possible</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    variants={formVariants}
                    whileHover={{ scale: 1.01 }}
                    whileFocus={{ scale: 1.01 }}
                    className="relative"
                  >
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-5 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-0 transition-all duration-200 peer"
                      placeholder=" "
                      required
                    />
                    <label 
                      htmlFor="name" 
                      className="absolute left-4 -top-2 px-1 bg-white text-sm text-gray-500 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600"
                    >
                      Your Name
                    </label>
                  </motion.div>

                  <motion.div
                    variants={formVariants}
                    whileHover={{ scale: 1.01 }}
                    className="relative"
                  >
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-0 transition-all duration-200 peer"
                      placeholder=" "
                      required
                    />
                    <label 
                      htmlFor="email" 
                      className="absolute left-4 -top-2 px-1 bg-white text-sm text-gray-500 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600"
                    >
                      Email Address
                    </label>
                  </motion.div>
                </div>

                <motion.div
                  variants={formVariants}
                  whileHover={{ scale: 1.01 }}
                  className="relative"
                >
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-5 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-0 transition-all duration-200 peer"
                    placeholder=" "
                    required
                  />
                  <label 
                    htmlFor="subject" 
                    className="absolute left-4 -top-2 px-1 bg-white text-sm text-gray-500 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600"
                  >
                    Subject
                  </label>
                </motion.div>

                <motion.div
                  variants={formVariants}
                  whileHover={{ scale: 1.01 }}
                  className="relative"
                >
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-5 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-0 transition-all duration-200 resize-none peer"
                    placeholder=" "
                    required
                  ></textarea>
                  <label 
                    htmlFor="message" 
                    className="absolute left-4 -top-2 px-1 bg-white text-sm text-gray-500 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600"
                  >
                    Your Message
                  </label>
                </motion.div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Send Message
                  <motion.span 
                    className="ml-2 inline-block"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "loop"
                    }}
                  >
                    →
                  </motion.span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Map */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full h-96 bg-gray-200"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.7982417386164!2d90.3991943154315!3d23.79048339317045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70c15ea1de1%3A0x97856381e88fb311!2sAwal%20Centre!5e0!3m2!1sen!2sbd!4v1620000000000!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </motion.div>
    </div>
  );
};

export default ContactPage;