'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AllServices() {
  const services = [
    {
      title: "MIE Services for International Education Institutions",
      description: "Expand your global footprint with MIE Services' expertise in overseas campus development and international degree collaborations. We help institutions design and manage joint or dual degree programmes, franchise models, and validation partnerships that meet both academic and market standards with TNE.",
      icon: "🏛️"
    },
    {
      title: "Managing Staff Recruitment and Local Management",
      description: "We have a thorough recruitment process that is combined with continuous training as well as comprehensive support for our local staff. This helps us to consistently improve overall performance and efficiency.",
      icon: "👥"
    },
    {
      title: "Comprehensive Reporting Systems",
      description: "We use detailed reporting systems (daily, weekly and monthly metrics) to track progress and successes through clearly defined key performance indicators (KPIs).",
      icon: "📊"
    },
    {
      title: "Direct Branding and Promotions",
      description: "We work with our partners to align their branding with their image and values, organising social media, events and local partnerships to create effective promotions.",
      icon: "🎯"
    },
    {
      title: "Lead Generation and Marketing Contributions",
      description: "Our targeted marketing campaigns are designed to generate high-quality leads, with ongoing analysis to refine and optimise strategies for maximum effectiveness.",
      icon: "📈"
    },
    {
      title: "Collaboration with Local Institutions",
      description: "We invest in strong relationships with local universities and educational institutions to explore collaborative programs and initiatives.",
      icon: "🤝"
    },
    {
      title: "Local Advisory Board Support",
      description: "Our dedicated advisory board, composed of local academic experts, provides strategic insights and guidance to support effective decision-making.",
      icon: "👨‍💼"
    },
    {
      title: "Offline Promotion Initiatives",
      description: "We are firm believers in also investing in traditional marketing methods, such as print media, local events, and community engagement, to enhance our partners' offline presence and visibility.",
      icon: "📢"
    },
    {
      title: "Direct Student Recruitment Counseling",
      description: "Our counseling team makes sure that prospective students receive comprehensive guidance and information about university courses, fees, entry requirements, locations, and career prospects.",
      icon: "🎓"
    },
    {
      title: "Efficient Offer Issuance",
      description: "MIE Services is often able to streamline the offer issuance process, providing prospective students with clear, timely communication regarding their applications and acceptance conditions.",
      icon: "✉️"
    },
    {
      title: "Target Setting and Market Achievement",
      description: "Realistic target setting and strategic market planning, informed by our team of experts and years of experience, help us to consistently achieve our recruitment goals.",
      icon: "🎯"
    },
    {
      title: "Compliance, Application, Visa Guidance Teams",
      description: "Our dedicated compliance and interview team ensures that regulations and quality standards are being adhered to, while efficiently assessing the suitability of prospective students.",
      icon: "✅"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const iconVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.1,
      rotate: [0, 10, -10, 0],
      transition: { 
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800"
        >
          <div className="absolute inset-0 opacity-20" style={{ 
            backgroundImage: "url('/grid.svg')",
            backgroundPosition: 'center'
          }}></div>
        </motion.div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8"
          >
            Redefining education recruitment through innovative strategies and localized approaches
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link href="/contact" 
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-blue-600 bg-white rounded-full hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Started
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative bg-white rounded-2xl p-8 shadow-lg group overflow-hidden"
              >
                {/* Animated border gradient */}
                <motion.div 
                  className="absolute inset-0 rounded-2xl p-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                >
                  <div className="w-full h-full bg-white rounded-xl"></div>
                </motion.div>
                
                <div className="relative z-10">
                <div className="flex items-center mb-4 space-x-3">
                  <motion.div 
                    className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-lg bg-blue-50"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, 10, -10, 0],
                      transition: { 
                        duration: 0.6,
                        ease: "easeInOut"
                      }
                    }}
                  >
                    <span className="text-2xl flex items-center justify-center w-full h-full">{service.icon}</span>
                  </motion.div>
                  <h3 className="text-lg font-bold text-gray-900 leading-tight">{service.title}</h3>
                </div>
                <p className="text-gray-600 text-justify">
                  {service.description}
                </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="py-20 bg-gradient-to-br from-blue-600 to-indigo-800 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20" style={{ 
          backgroundImage: "url('/grid.svg')",
          backgroundPosition: 'center'
        }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to Transform Your Education Services?
          </h2>
          <p className="text-white mb-8">Discover our comprehensive range of services designed to support you at every step of your educational journey. We&apos;re here to help you achieve your academic and career goals.</p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 text-lg font-medium text-blue-600 bg-white rounded-full hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Contact Us
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </motion.section>
    </div>
  );
}