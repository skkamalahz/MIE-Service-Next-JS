'use client';

import Image from "next/image";
import Link from "next/link";

export default function Partner() {
  const partners = [
    {
      name: "Bangor University",
      logo: "https://s3.eu-west-2.amazonaws.com/mie-services.com/images/2024-10-09_39_Bangor%20University.jpeg",
      description: "Bangor University is a public research university in Bangor, Wales. Founded in 1884, it received its Royal Charter in 1885 and was one of the founding institutions of the federal University of Wales.",
      location: "Bangor, Wales",
      founded: 1884,
      keyFeatures: [
        "World-class research facilities",
        "Beautiful coastal location",
        "Excellent student satisfaction",
        "Strong international community"
      ],
      image: "https://s3.eu-west-2.amazonaws.com/mie-services.com/content_images/2024-10-15_41_Bangor%20University%20Main%20Building.webp",
      learnMoreLink: "/bangor-university"
    },
    {
      name: "University of Hull",
      logo: "https://s3.eu-west-2.amazonaws.com/mie-services.com/images/2024-10-09_75_University%20of%20Hull.jpeg",
      description: "The University of Hull London Study Centre offers career-focused postgraduate courses, expert academics, leading research programmes, and personal study environments in the heart of London.",
      location: "Hull & London, UK",
      founded: 1927,
      keyFeatures: [
        "City-centre London campus",
        "Career-focused programs",
        "Industry partnerships",
        "Modern facilities"
      ],
      image: "https://s3.eu-west-2.amazonaws.com/mie-services.com/content_images/2024-10-15_90_University%20of%20Hull.webp",
      learnMoreLink: "/university-of-hull"
    },
    {
      name: "Keele University",
      logo: "https://s3.eu-west-2.amazonaws.com/mie-services.com/images/2024-10-09_74_Keele%20University.jpeg",
      description: "Keele University is a public research university in Keele, Staffordshire. Known for its pioneering interdisciplinary education, beautiful campus, and high student satisfaction rates.",
      location: "Keele, Staffordshire, UK",
      founded: 1949,
      keyFeatures: [
        "Largest single-site campus",
        "Interdisciplinary approach",
        "Sustainability leader",
        "Outstanding research"
      ],
      image: "https://s3.eu-west-2.amazonaws.com/mie-services.com/content_images/2024-10-15_85_Keele%20University.webp",
      learnMoreLink: "/keele-university"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDYwLCA2MCwgNjAsIDAuMSkiLz48L2c+PC9zdmc+')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Our Partner
              <span className="block text-blue-600">Universities</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
              Collaborating with leading institutions to provide world-class education opportunities
            </p>
          </div>

          {/* Partner Logos */}
          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
            {partners.map((partner, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative w-64 h-32 bg-white rounded-xl shadow-lg p-4 hover:shadow-2xl transition-shadow duration-300">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain transition-transform duration-300 hover:scale-105 p-2"
                    priority
                  />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{partner.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Partners Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {partners.map((partner, index) => (
            <div key={index} className={`flex flex-col lg:flex-row gap-12 items-center ${index !== 0 ? 'mt-24' : ''}`}>
              {/* Image Section */}
              <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="group relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    width={800}
                    height={500}
                    className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Content Section */}
              <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="relative">
                  <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-red-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                  
                  <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                    <div className="mb-6">
                      <h2 className="text-4xl font-bold bg-gradient-to-r from-[#02226f] to-blue-600 bg-clip-text text-transparent">
                        {partner.name}
                      </h2>
                      <div className="h-1 w-24 bg-gradient-to-r from-red-600 to-blue-600 rounded-full mt-2"></div>
                    </div>
                    <p className="text-gray-700 mb-6 text-lg">{partner.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div>
                        <h3 className="text-sm font-semibold text-gray-500">Location</h3>
                        <p className="text-gray-900">{partner.location}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-gray-500">Founded</h3>
                        <p className="text-gray-900">{partner.founded}</p>
                      </div>
                    </div>

                    <h3 className="font-semibold text-gray-900 mb-4">Key Features</h3>
                    <ul className="space-y-3 mb-8">
                      {partner.keyFeatures.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <svg className="flex-shrink-0 w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={partner.learnMoreLink}
                      className="inline-flex items-center px-6 py-3 text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      Learn more about {partner.name}
                      <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiLz48L2c+PC9zdmc+')] opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Start Your Educational Journey?
          </h2>
          <p className="mt-4 text-lg text-blue-100">
            Contact us today to learn more about our partner universities and find the perfect program for you.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-blue-600 bg-white hover:bg-blue-50 transition-colors duration-200"
            >
              Get in Touch
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}