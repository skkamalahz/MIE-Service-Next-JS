'use client';

import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-white">
      {/* Hero Banner Section */}
      <section className="relative h-[600px] lg:h-[700px] w-full overflow-hidden">
        {/* Banner Image */}
        <Image
          src="https://s3.eu-west-2.amazonaws.com/mie-services.com/content_images/2025-01-30_33_MIE-service-banner.png"
          alt="MIE Services Banner"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex flex-col justify-center h-full">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                <span className="block text-white">Welcome to</span>
                <span className="block text-blue-400 mt-2">MIE Services</span>
              </h1>
              <p className="mt-6 text-lg text-gray-100 max-w-lg">
                Your trusted partner in educational and professional development services. 
                Discover our comprehensive range of solutions tailored to your needs.
              </p>
              <div className="mt-10 flex gap-x-6">
                <Link
                  href="/services"
                  className="rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 transition-colors"
                >
                  Our Services
                </Link>
                <Link
                  href="/contact"
                  className="rounded-md bg-white/10 backdrop-blur-sm px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-white/20 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* About Section with Images */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white overflow-hidden py-16 -mt-16 px-4 sm:px-6 lg:px-8">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDYwLCA2MCwgNjAsIDAuMSkiLz48L2c+PC9zdmc+')] opacity-50"></div>
        
        <div className="relative max-w-screen-xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Images Grid */}
            <div className="w-full lg:w-6/12">
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-1/2 space-y-4 sm:space-y-6 transform translate-y-8">
                  <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 ease-in-out hover:-translate-y-1">
                    <Image
                      src="https://s3.eu-west-2.amazonaws.com/mie-services.com/content_images/2024-10-15_90_University%20of%20Hull.webp"
                      alt="University of Hull"
                      width={400}
                      height={300}
                      className="w-full transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <span className="absolute bottom-4 left-4 text-white font-medium opacity-0 group-hover:opacity-100 transition-all duration-500">University of Hull</span>
                  </div>
                  <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 ease-in-out hover:-translate-y-1">
                    <Image
                      src="https://s3.eu-west-2.amazonaws.com/mie-services.com/content_images/2024-10-15_85_Keele%20University.webp"
                      alt="Keele University"
                      width={400}
                      height={300}
                      className="w-full transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <span className="absolute bottom-4 left-4 text-white font-medium opacity-0 group-hover:opacity-100 transition-all duration-500">Keele University</span>
                  </div>
                </div>
                <div className="w-1/2 transform -translate-y-8">
                  <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 ease-in-out hover:-translate-y-1">
                    <Image
                      src="https://s3.eu-west-2.amazonaws.com/mie-services.com/content_images/2024-10-15_41_Bangor%20University%20Main%20Building.webp"
                      alt="Bangor University Main Building"
                      width={400}
                      height={600}
                      className="w-full transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <span className="absolute bottom-4 left-4 text-white font-medium opacity-0 group-hover:opacity-100 transition-all duration-500">Bangor University</span>
                  </div>
                </div>
              </div>
              {/* Decorative pattern */}
              <div className="absolute -bottom-8 -right-8 w-40 h-40">
                {Array.from({ length: 6 }).map((_, row) =>
                  Array.from({ length: 6 }).map((_, col) => (
                    <div
                      key={`${row}-${col}`}
                      className="absolute w-2 h-2 rounded-full bg-red-600/20"
                      style={{
                        top: `${row * 20}%`,
                        left: `${col * 20}%`,
                        animation: `pulse 2s infinite ${(row + col) * 0.1}s`
                      }}
                    />
                  ))
                )}
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-5/12" id="about">
              <div className="relative">
                {/* Background blobs */}
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-red-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100">
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-[#02226f] to-blue-600 bg-clip-text text-transparent mb-6">
                    Overview of MIE Services
                  </h2>
                  <p className="mb-6 text-lg text-gray-600 leading-relaxed">
                    MIE Services aims to transform the education recruitment industry, working with our partners to develop and implement creative, forward-thinking strategies that are tailored to key local markets.
                  </p>
                  <p className="mb-8 text-lg text-gray-600 leading-relaxed">
                    Our goal is to establish a sustainable model that drastically improves the speed and efficiency of the student recruitment process, and by doing so, driving institutional growth.
                  </p>
                  <div className="relative">
                    <h3 className="font-semibold text-xl text-gray-800 mb-4">As a company, our key focuses are:</h3>
                    <ul className="space-y-4">
                      {[
                        'Providing comprehensive support',
                        'Helping organisations to improve their branding',
                        { text: 'Promoting Transnational Education (TNE) on a global scale', link: '/services/tne' },
                        'Recruiting students through both direct (B2C) and institutional (B2B) channels'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-600 mt-2"></span>
                          {typeof item === 'string' ? (
                            <span className="text-gray-600">{item}</span>
                          ) : (
                            <Link
                              href={item.link}
                              className="text-blue-600 hover:text-blue-800 font-medium transition duration-300"
                            >
                              {item.text}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-8">
                    <Link
                      href="/about"
                      className="group inline-flex items-center justify-center py-3 px-6 rounded-lg bg-gradient-to-r from-red-700 to-red-600 text-white font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                    >
                      Learn More
                      <svg
                        className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDYwLCA2MCwgNjAsIDAuMSkiLz48L2c+PC9zdmc+')] opacity-30"></div>
            <div className="absolute right-0 top-0 -mt-20 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute left-0 bottom-0 -mb-20 w-96 h-96 bg-red-50 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

            <div className="relative bg-gray-900/95 rounded-2xl shadow-xl border border-gray-800 backdrop-blur-sm overflow-hidden">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                {/* Image Section */}
            <div className="lg:w-1/3 h-[300px] lg:h-auto relative overflow-hidden">
              <Image
                src="https://s3.eu-west-2.amazonaws.com/mie-services.com/content_images/2024-11-10_25_PTAIT202011046203.webp"
                alt="What We Do"
                fill
                className="object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent"></div>
            </div>

            {/* Content Section */}
            <div className="lg:w-2/3 p-8 lg:p-12">
              <div className="flex items-center gap-4 mb-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-10 h-10 text-red-400"
                >
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <h2 className="text-3xl font-bold text-white">What we do:</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Staff Recruitment & Local Management',
                  'Comprehensive Reporting',
                  'Branding & Promotions',
                  'Lead Generation & Marketing Support',
                  'Partnerships with Local Institutions',
                  'Advisory Board Engagement',
                  'Offline Marketing Initiatives',
                  'Student Recruitment & Counselling',
                  'Efficient Offer Processing',
                  'Market Targeting & Achievement',
                  'Regulatory & Visa Support'
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 group p-3 rounded-lg hover:bg-white/10 transition-colors duration-300"
                  >
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-400 mt-2 group-hover:scale-125 transition-transform duration-300"></span>
                    <span className="text-gray-200 group-hover:text-white transition-colors duration-300">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href="/services"
                  className="group relative inline-flex items-center justify-center px-8 py-3 font-medium text-white bg-gradient-to-r from-red-600 to-red-500 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-red-500/30"
                >
                  <span className="relative z-10">Explore Our Services</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </Link>
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Universities Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDYwLCA2MCwgNjAsIDAuMSkiLz48L2c+PC9zdmc+')] opacity-30"></div>
        <div className="absolute right-0 top-0 -mt-20 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute left-0 bottom-0 -mb-20 w-96 h-96 bg-red-50 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-[#02226f] to-blue-600 bg-clip-text text-transparent mb-6">
                Our Partner Universities
              </h2>
              <div className="h-1 w-1/2 mx-auto bg-gradient-to-r from-red-600 to-blue-600 rounded-full"></div>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
              Together with our trusted Partners, we navigate challenges, innovate solutions, and forge paths towards success.
            </p>
          </div>

          {/* Partner Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Bangor University Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-red-500 rounded-2xl blur opacity-20 transition-opacity duration-300 group-hover:opacity-30"></div>
              <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="relative h-56 overflow-hidden bg-white p-8 flex items-center justify-center">
                  <Image
                    src="https://s3.eu-west-2.amazonaws.com/mie-services.com/images/2024-10-09_39_Bangor%20University.jpeg"
                    alt="Bangor University"
                    fill
                    className="object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: 'center' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#02226f] transition-colors duration-300">Bangor University</h3>
                  <p className="text-gray-600 mb-8 line-clamp-4">
                    Bangor University is a public research university in Bangor, Wales. It received its Royal Charter in 1885 and was one of the founding institutions of the federal University of Wales.
                  </p>
                  <a
                    href="https://mie-services.com/bangor-university"
                    target="_blank"
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-red-700 to-red-600 rounded-lg group-hover:from-[#02226f] group-hover:to-blue-600 transition-all duration-300 shadow-md hover:shadow-xl"
                  >
                    Explore Us
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* University of Hull Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-red-500 rounded-2xl blur opacity-20 transition-opacity duration-300 group-hover:opacity-30"></div>
              <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="relative h-56 overflow-hidden bg-white p-8 flex items-center justify-center">
                  <Image
                    src="https://s3.eu-west-2.amazonaws.com/mie-services.com/images/2024-10-09_75_University%20of%20Hull.jpeg"
                    alt="University of Hull"
                    fill
                    className="object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: 'center' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#02226f] transition-colors duration-300">University of Hull</h3>
                  <p className="text-gray-600 mb-8 line-clamp-4">
                    Welcome to the University of Hull London Study Centre. Our London campus is a new way to access our career-focused postgraduate courses, expert academics, leading research programmes, and personal study environments.
                  </p>
                  <a
                    href="https://mie-services.com/university-of-hull"
                    target="_blank"
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-red-700 to-red-600 rounded-lg group-hover:from-[#02226f] group-hover:to-blue-600 transition-all duration-300 shadow-md hover:shadow-xl"
                  >
                    Explore Us
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Keele University Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-red-500 rounded-2xl blur opacity-20 transition-opacity duration-300 group-hover:opacity-30"></div>
              <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="relative h-56 overflow-hidden bg-white p-8 flex items-center justify-center">
                  <Image
                    src="https://s3.eu-west-2.amazonaws.com/mie-services.com/images/2024-10-09_74_Keele%20University.jpeg"
                    alt="Keele University"
                    fill
                    className="object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: 'center' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#02226f] transition-colors duration-300">Keele University</h3>
                  <p className="text-gray-600 mb-8 line-clamp-4">
                    Keele University is a public research university in Keele, approximately three miles from Newcastle-under-Lyme, Staffordshire, England. Founded in 1949 as the University College of North Staffordshire.
                  </p>
                  <a
                    href="https://mie-services.com/keele-university"
                    target="_blank"
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-red-700 to-red-600 rounded-lg group-hover:from-[#02226f] group-hover:to-blue-600 transition-all duration-300 shadow-md hover:shadow-xl"
                  >
                    Explore Us
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
