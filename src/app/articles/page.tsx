'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

// Types
type Article = {
  title: string;
  image: string;
  slug: string;
  category: string;
  date: string;
  readTime: string;
};

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: 'beforeChildren',
    },
  },
} as const;

const item = {
  hidden: { y: 20, opacity: 0 },
  show: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  }),
} as const;

export default function Articles() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  // Enhanced articles data with additional fields
  const articles: Article[] = [
    {
      title: "Student life at Bangor University",
      image: "https://s3.eu-west-2.amazonaws.com/mie-services.com/content_images/73195146_student-bangor.webp",
      slug: "student-life-at-bangor-university",
      category: "Student Life",
      date: "Oct 15, 2025",
      readTime: "5 min read"
    },
    {
      title: "Postgraduate study at Bangor University",
      image: "https://s3.eu-west-2.amazonaws.com/mie-services.com/content_images/39419689_Postgraduate%20study%20at%20Bangor%20University.webp",
      slug: "postgraduate-study-at-bangor-university",
      category: "Postgraduate",
      date: "Oct 12, 2025",
      readTime: "6 min read"
    },
    {
      title: "Undergraduate study at Bangor University",
      image: "https://s3.eu-west-2.amazonaws.com/mie-services.com/content_images/53219336_bangor%202.webp",
      slug: "undergraduate-study-at-bangor-university",
      category: "Undergraduate",
      date: "Oct 10, 2025",
      readTime: "4 min read"
    },
    {
      title: "Why study at Bangor University",
      image: "https://s3.eu-west-2.amazonaws.com/mie-services.com/content_images/83526309_bangor.webp",
      slug: "why-study-at-bangor-university",
      category: "University Guide",
      date: "Oct 8, 2025",
      readTime: "7 min read"
    },
    {
      title: "Why choose the University of Hull London",
      image: "https://s3.eu-west-2.amazonaws.com/mie-services.com/content_images/69563148_university%20of%20hull.jpg",
      slug: "why-choose-the-university-of-hull-london",
      category: "University Guide",
      date: "Oct 5, 2025",
      readTime: "5 min read"
    },
    {
      title: "What to expect: International students living at Keele University",
      image: "https://s3.eu-west-2.amazonaws.com/mie-services.com/content_images/21796061_International%20students%20living%20at%20Keele%20University.webp",
      slug: "international-students-living-at-keele-university",
      category: "Student Life",
      date: "Oct 3, 2025",
      readTime: "8 min read"
    },
    {
      title: "Academic life at Keele University",
      image: "https://s3.eu-west-2.amazonaws.com/mie-services.com/content_images/35592875_Academic%20life%20at%20keele.webp",
      slug: "academic-life-at-keele-university",
      category: "Academics",
      date: "Oct 1, 2025",
      readTime: "6 min read"
    },
    {
      title: "Why choose Keele University?",
      image: "https://s3.eu-west-2.amazonaws.com/mie-services.com/content_images/68046489_keele-uni.webp",
      slug: "why-choose-keele-university",
      category: "University Guide",
      date: "Sep 28, 2025",
      readTime: "5 min read"
    }
  ];

  // Get unique categories
  const categories = ['All', ...new Set(articles.map(article => article.category))];

  // Filter articles based on selected category
  const filteredArticles = activeCategory === 'All' 
    ? articles 
    : articles.filter(article => article.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <motion.section 
        className="relative py-24 bg-gradient-to-br from-[#02226f] to-blue-800 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Insights & Articles
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Stay updated with the latest news, tips, and guides on international education and student services.
          </motion.p>
        </div>
      </motion.section>

      {/* Articles Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-12"
          variants={container}
          initial={false}
          animate={isMounted ? "show" : "hidden"}
          key="category-tabs"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              variants={item}
              whileHover="hover"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Articles Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          key={activeCategory}
        >
          <AnimatePresence mode="wait">
            {filteredArticles.map((article, index) => (
              <motion.div
                key={article.slug}
                custom={index}
                initial="hidden"
                animate={isMounted ? "show" : "hidden"}
                exit="hidden"
                variants={item}
              >
                <motion.article
                  className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col"
                  layout
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <Link href={`/articles/${article.slug}`} className="h-full flex flex-col">
                    <div className="relative h-48 bg-gray-100 overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index < 3} // Only prioritize first 3 images for better LCP
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <div className="flex items-center">
                          <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-600 text-white rounded-full">
                            {article.category}
                          </span>
                          <span className="ml-2 text-white text-sm">{article.readTime}</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-3">
                        {article.title}
                      </h2>
                      <div className="mt-auto pt-4 border-t border-gray-100">
                        <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                          Read more
                          <svg
                            className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {filteredArticles.length > 6 && (
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Load More Articles
            </button>
          </motion.div>
        )}
      </section>
    </div>
  );
}