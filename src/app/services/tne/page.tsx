'use client';

import { motion, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const services = [
  {
    title: "TNE Brokering & Support",
    description: "We connect universities and education providers worldwide to establish successful TNE partnerships. From partner identification to negotiation and implementation, we provide complete brokering and operational support for sustainable collaborations.",
    icon: "🤝"
  },
  {
    title: "Branch Campus & Investment Support",
    description: "Bring your global campus vision to life with our comprehensive support for setting up international branch campuses, including feasibility studies, legal setup, and strategic planning for long-term success.",
    icon: "🌍"
  },
  {
    title: "Regional / In-Country Office Setup",
    description: "Establish a strong in-country presence with our expert guidance. We assist with every aspect of setting up local or regional offices, including staffing, operations, and compliance.",
    icon: "🏢"
  },
  {
    title: "Agent Network Development & Management",
    description: "Build a reliable, high-performing recruitment network. We develop, train, and manage agent partners to ensure they align with your goals and maintain compliance.",
    icon: "🌐"
  },
  {
    title: "Market Entry & Branding Strategy",
    description: "Launch or grow your institution in new markets with confidence. We craft data-driven market entry and branding strategies that highlight your strengths.",
    icon: "🎯"
  },
  {
    title: "Enquiry Management & Conversion",
    description: "Turn interest into enrollment with our optimised enquiry management system. We design conversion strategies and communication plans to maximize student admissions.",
    icon: "📊"
  }
];

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function TNEService() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
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
            TNE Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8"
          >
            Expert solutions for international education institutions
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            Our TNE Solutions
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isMounted ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Approach</h2>
            <div className="prose prose-lg text-gray-600 max-w-4xl">
              <p className="mb-4">
                We combine deep expertise in international education with a client-focused approach to deliver
                solutions that drive real value. Our TNE services are designed to enhance your institution's
                global presence, optimize international partnerships, and solve complex educational challenges.
              </p>
              <p className="mb-0">
                Whether you're looking to establish a new international presence or strengthen existing
                partnerships, our team provides the strategic guidance and operational support you need
                to succeed in today's competitive global education landscape.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="py-20 bg-gradient-to-br from-blue-600 to-indigo-800 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "url('/grid.svg')",
          backgroundPosition: 'center'
        }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Expand Your Global Reach?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our TNE services can help you achieve your international education goals
          </p>
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