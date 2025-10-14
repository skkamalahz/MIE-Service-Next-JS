'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isServicesOpen) setIsServicesOpen(false);
  };

  const toggleServices = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsServicesOpen(!isServicesOpen);
  };

  // Close services dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isServicesOpen) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isServicesOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="bg-white px-4 lg:px-6 py-2.5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="https://s3.eu-west-2.amazonaws.com/mie-services.com/images/2024-05-25_68_MIE_services.svg"
                alt="Logo"
                width={120}
                height={48}
                className="h-12 w-auto"
                priority
              />
            </Link>

            {/* Mobile menu button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center p-2 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`w-6 h-6 ${isMenuOpen ? 'hidden' : 'block'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  className={`w-6 h-6 ${isMenuOpen ? 'block' : 'hidden'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <div
              className={`${
                isMenuOpen ? 'block' : 'hidden'
              } w-full lg:block lg:w-auto`}
            >
              <ul className="flex flex-col lg:flex-row lg:space-x-8 lg:items-center mt-4 lg:mt-0 font-medium">
                <li>
                  <Link
                    href="/"
                    className={`block py-2 pr-4 pl-3 rounded ${
                      pathname === '/'
                        ? 'text-blue-600'
                        : 'text-gray-700 hover:text-blue-600'
                    } lg:p-0 transition-colors`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/partner"
                    className={`block py-2 pr-4 pl-3 rounded ${
                      pathname === '/partner'
                        ? 'text-blue-600'
                        : 'text-gray-700 hover:text-blue-600'
                    } lg:p-0 transition-colors`}
                  >
                    Partner
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className={`block py-2 pr-4 pl-3 rounded ${
                      pathname === '/about'
                        ? 'text-blue-600'
                        : 'text-gray-700 hover:text-blue-600'
                    } lg:p-0 transition-colors`}
                  >
                    About us
                  </Link>
                </li>
                <li className="relative">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleServices(e);
                    }}
                    className={`flex items-center w-full py-2 pr-4 pl-3 rounded ${
                      pathname.startsWith('/services')
                        ? 'text-blue-600'
                        : 'text-gray-700 hover:text-blue-600'
                    } lg:p-0 transition-colors`}
                  >
                    Services
                    <svg
                      className={`w-4 h-4 ml-1 transform transition-transform ${
                        isServicesOpen ? 'rotate-180' : ''
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {isServicesOpen && (
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 lg:shadow-xl">
                      <div className="py-1">
                        <Link
                          href="/services"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          All Services
                        </Link>
                        <Link
                          href="/services/tne"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          TNE Service
                        </Link>
                      </div>
                    </div>
                  )}
                </li>
                <li>
                  <Link
                    href="/articles"
                    className={`block py-2 pr-4 pl-3 rounded ${
                      pathname === '/articles'
                        ? 'text-blue-600'
                        : 'text-gray-700 hover:text-blue-600'
                    } lg:p-0 transition-colors`}
                  >
                    Articles
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className={`block py-2 pr-4 pl-3 rounded ${
                      pathname === '/contact'
                        ? 'text-blue-600'
                        : 'text-gray-700 hover:text-blue-600'
                    } lg:p-0 transition-colors`}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}