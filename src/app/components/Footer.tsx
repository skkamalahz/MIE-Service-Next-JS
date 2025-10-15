'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <footer className="bg-gradient-to-b from-[#02226f] to-blue-950 text-white pt-16 pb-8">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiLz48L2c+PC9zdmc+')] opacity-10"></div>
      <div className="absolute right-0 top-0 -mt-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob"></div>
      <div className="absolute left-0 bottom-0 -mb-20 w-96 h-96 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Logo & Description */}
          <div className={`transition-all duration-700 transform ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Link href="/" className="inline-block bg-white/90 backdrop-blur-sm rounded-xl p-4 mb-6 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
              <Image
                src="https://s3.eu-west-2.amazonaws.com/mie-services.com/images/2024-05-25_68_MIE_services.svg"
                alt="MIE Services"
                width={150}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-300 mb-6">
              Empowering students worldwide with quality education and career guidance. Your journey to academic excellence starts here.
            </p>
            <div className="flex space-x-4">
              <SocialIcon href="https://facebook.com" icon={FacebookIcon} label="Facebook" />
              <SocialIcon href="https://twitter.com" icon={TwitterIcon} label="Twitter" />
              <SocialIcon href="https://linkedin.com" icon={LinkedInIcon} label="LinkedIn" />
              <SocialIcon href="https://instagram.com" icon={InstagramIcon} label="Instagram" />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className={`transition-all duration-700 transform delay-100 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-xl font-semibold mb-6 relative after:content-[''] after:absolute after:left-0 after:bottom-[-10px] after:w-12 after:h-1 after:bg-red-500 after:rounded-full">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <FooterLink href="/about" text="About Us" />
              <FooterLink href="/services" text="Our Services" />
              <FooterLink href="/partner" text="Partners" />
              <FooterLink href="/articles" text="Articles" />
              <FooterLink href="/contact" text="Contact Us" />
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className={`transition-all duration-700 transform delay-150 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-xl font-semibold mb-6 relative after:content-[''] after:absolute after:left-0 after:bottom-[-10px] after:w-12 after:h-1 after:bg-red-500 after:rounded-full">
              Contact Us
            </h3>
            <div className="space-y-4">
              <ContactItem icon={MapPinIcon}>
                123 Education Street<br />
                Academic District, 10001<br />
                New York, USA
              </ContactItem>
              <ContactItem icon={PhoneIcon}>
                <a href="tel:+1234567890" className="hover:text-white transition-colors">+1 (234) 567-890</a>
              </ContactItem>
              <ContactItem icon={EnvelopeIcon}>
                <a href="mailto:info@mieservices.com" className="hover:text-white transition-colors">info@mieservices.com</a>
              </ContactItem>
              <ContactItem icon={ClockIcon}>
                Mon - Fri: 9:00 - 18:00
              </ContactItem>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div className={`transition-all duration-700 transform delay-200 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-xl font-semibold mb-6 relative after:content-[''] after:absolute after:left-0 after:bottom-[-10px] after:w-12 after:h-1 after:bg-red-500 after:rounded-full">
              Newsletter
            </h3>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter for the latest updates and educational resources.
            </p>
            <form className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-red-400 focus:ring-2 focus:ring-red-400/50 text-white placeholder-gray-400 outline-none transition-all duration-300"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:translate-y-[-2px] shadow-lg hover:shadow-red-500/20 flex items-center justify-center group"
              >
                <span>Subscribe</span>
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} Matrix International Education Services. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <FooterBottomLink href="/privacy-policy" text="Privacy Policy" />
              <FooterBottomLink href="/terms" text="Terms of Service" />
              <FooterBottomLink href="/cookies" text="Cookie Policy" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Reusable Components
const SocialIcon = ({ href, icon: Icon, label }: { href: string; icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; label: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
    aria-label={label}
  >
    <Icon className="w-5 h-5 text-white" />
  </a>
);

const FooterLink = ({ href, text }: { href: string; text: string }) => (
  <li>
    <Link 
      href={href}
      className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
    >
      <span className="relative">
        {text}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
      </span>
      <ArrowRightIcon className="w-4 h-4 ml-2 inline-block opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
    </Link>
  </li>
);

const ContactItem = ({ icon: Icon, children }: { icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; children: React.ReactNode }) => (
  <div className="flex items-start">
    <Icon className="w-5 h-5 text-red-400 mr-3 mt-1 flex-shrink-0" />
    <div className="text-gray-300">{children}</div>
  </div>
);

const FooterBottomLink = ({ href, text }: { href: string; text: string }) => (
  <Link 
    href={href}
    className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
  >
    {text}
  </Link>
);

// Icons
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63a9.935 9.935 0 002.46-2.548l-.047-.02z" />
  </svg>
);

const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 11-4.125-.001 2.064 2.064 0 014.125.001zM1.782 20.45h3.555V9H1.782v11.45z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const MapPinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);

const PhoneIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
  </svg>
);

const EnvelopeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const ClockIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
  </svg>
);

const ArrowRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
  </svg>
);

export default Footer;