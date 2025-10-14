'use client';

import Image from "next/image";
import Link from "next/link";

export default function Articles() {
  const articles = [
    {
      title: "Student life at Bangor University",
      image: "https://s3.eu-west-2.amazonaws.com/mie-services.com/content_images/73195146_student-bangor.webp",
      slug: "student-life-at-bangor-university"
    },
    {
      title: "Postgraduate study at Bangor University",
      image: "https://s3.eu-west-2.amazonaws.com/mie-services.com/content_images/39419689_Postgraduate%20study%20at%20Bangor%20University.webp",
      slug: "postgraduate-study-at-bangor-university"
    },
    {
      title: "Undergraduate study at Bangor University",
      image: "https://s3.eu-west-2.amazonaws.com/mie-services.com/content_images/53219336_bangor%202.webp",
      slug: "undergraduate-study-at-bangor-university"
    },
    {
      title: "Why study at Bangor University",
      image: "https://s3.eu-west-2.amazonaws.com/mie-services.com/content_images/83526309_bangor.webp",
      slug: "why-study-at-bangor-university"
    },
    {
      title: "Why choose the University of Hull London",
      image: "https://s3.eu-west-2.amazonaws.com/mie-services.com/content_images/69563148_university%20of%20hull.jpg",
      slug: "why-choose-the-university-of-hull-london"
    },
    {
      title: "What to expect: International students living at Keele University",
      image: "https://s3.eu-west-2.amazonaws.com/mie-services.com/content_images/21796061_International%20students%20living%20at%20Keele%20University.webp",
      slug: "international-students-living-at-keele-university"
    },
    {
      title: "Academic life at Keele University",
      image: "https://s3.eu-west-2.amazonaws.com/mie-services.com/content_images/35592875_Academic%20life%20at%20keele.webp",
      slug: "academic-life-at-keele-university"
    },
    {
      title: "Why choose Keele University?",
      image: "https://s3.eu-west-2.amazonaws.com/mie-services.com/content_images/68046489_keele-uni.webp",
      slug: "why-choose-keele-university"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Articles & Resources</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover insights about our partner universities, student life, and educational opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article key={index} className="group">
              <div className="relative">
                {/* Background blur effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-red-500 rounded-2xl blur opacity-20 transition-opacity duration-300 group-hover:opacity-30" />
                
                <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      <Link href={article.slug} className="hover:underline">
                        {article.title}
                      </Link>
                    </h2>
                    <Link
                      href={article.slug}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
                    >
                      Read more
                      <svg
                        className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}