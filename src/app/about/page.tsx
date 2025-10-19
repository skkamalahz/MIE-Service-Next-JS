'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: 'beforeChildren',
      ease: [0.4, 0, 0.2, 1], // Standard ease-in-out curve
    },
  },
} as const;

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
} as const;

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
    },
  },
} as const;

const scaleUp = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
} as const;

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
}

function AnimatedSection({ children, className = '' }: AnimatedSectionProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={container}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section
        className="relative py-24 bg-gradient-to-b from-[#02226f] to-blue-800 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Decorative elements */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiLz48L2c+PC9zdmc+')",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        ></div>

        <div className="absolute right-0 top-0 -mt-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute left-0 bottom-0 -mb-20 w-96 h-96 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

        <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Who are we?
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            At Matrix International Education (MIE) Services, we are all
            connected by a common belief that the educational recruitment
            industry can be improved from its current iteration.
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <section className="relative py-20 overflow-hidden">
        <AnimatedSection>
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Our Story */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
              variants={container}
            >
              <motion.div
                className="relative"
                variants={item}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="absolute -inset-4">
                  <div className="w-full h-full mx-auto rotate-2 bg-gradient-to-r from-red-600 to-blue-600 opacity-30 blur-lg"></div>
                </div>
                <div className="relative">
                  <Image
                    src="https://s3.eu-west-2.amazonaws.com/mie-services.com/content_images/2024-11-10_25_PTAIT202011046203.webp"
                    alt="Educational Consulting"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-2xl"
                    priority
                  />
                </div>
              </motion.div>
              <motion.div
                variants={item}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  With many years of combined experience working in this sector,
                  we have worked with many partners to develop numerous outreach
                  strategies, all of which are based on data, analysis and our
                  unique insight into this particular sector.
                </p>
                <p className="text-lg text-gray-700">
                  By putting the right systems and frameworks in place, as well
                  as investing heavily into our partnerships, MIE Services
                  guarantees premium value to all of its partners and
                  stakeholders.
                </p>
              </motion.div>
            </motion.div>

            {/* What Makes Us Unique */}
            <motion.div
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 lg:p-12 mb-20"
              variants={scaleUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px 0px 0px 0px' }}
            >
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-[#02226f] to-blue-600 bg-clip-text text-transparent mb-8">
                  What makes us unique?
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  As a company, we have a deep understanding of the fact that
                  every institution is different, possessing various strengths
                  and unique characteristics.
                </p>
                <p className="text-lg text-gray-700">
                  As such, we make sure to adjust our approach to the needs of
                  each client, tailoring our services to meet their specific
                  requirements.
                </p>
              </div>
            </motion.div>

            {/* How Can We Help */}
            <motion.div
              className="mb-20"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px 0px 0px 0px' }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                How can we help?
              </h2>
              <p className="text-lg text-gray-700 mb-8 text-center">
                MIE Services works with institutions to help them achieve
                whatever their international student recruitment goals are.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Increase Student Cohort',
                    description:
                      'Institutions who want to increase their international student cohort.',
                  },
                  {
                    title: 'Improve Student Experience',
                    description:
                      'Institutions who want to improve the student experience in their pre-enrolment journey.',
                  },
                  {
                    title: 'Enhance Branding',
                    description:
                      'Institutions who want to improve their outreach strategies and overall branding.',
                  },
                ].map((card, index) => (
                  <motion.div
                    key={index}
                    className="group relative bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                    variants={fadeIn}
                    whileHover={{
                      y: -5,
                      scale: 1.02,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-red-500 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    <div className="relative">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        {card.title}
                      </h3>
                      <p className="text-gray-600">{card.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Vision and Location */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px 0px 0px 0px' }}
            >
              {/* Vision */}
              <motion.div
                className="bg-gradient-to-br from-[#02226f] to-blue-800 rounded-2xl p-8 text-white"
                variants={item}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
                <p className="text-lg mb-6">
                  To develop a lasting and effective service model that supports
                  both academic institutions and students, improving access to
                  higher education for students around the world.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-[#02226f] bg-white rounded-lg hover:bg-gray-50 transition-colors duration-300"
                >
                  Get in Touch
                  <svg
                    className="ml-2 -mr-1 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </motion.div>

              {/* Location */}
              <motion.div
                className="bg-gray-50 rounded-2xl p-8"
                variants={item}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Location
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Currently, we are primarily based in Bangladesh, but our
                  services are available to international students worldwide.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Primary Office
                    </h3>
                    <p className="text-gray-600">Bangladesh</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Service Area
                    </h3>
                    <p className="text-gray-600">Worldwide</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
