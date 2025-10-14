import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#02226f] to-blue-950 text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiLz48L2c+PC9zdmc+')] opacity-10"></div>
      <div className="absolute right-0 top-0 -mt-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob"></div>
      <div className="absolute left-0 bottom-0 -mb-20 w-96 h-96 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-2000"></div>

      <div className="relative max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Logo and Copyright */}
          <div className="text-center lg:text-left col-span-1">
            <Link href="/" className="inline-block bg-white/90 backdrop-blur-sm rounded-xl p-4 mb-4">
              <Image
                src="https://s3.eu-west-2.amazonaws.com/mie-services.com/images/2024-05-25_68_MIE_services.svg"
                alt="MIE Services"
                width={150}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-300">
              © 2025 Matrix International Education Services.<br />All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div className="col-span-2">
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-end space-y-4 sm:space-y-0 sm:space-x-8">
              <Link 
                href="/privacy-policy" 
                className="group flex items-center text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300"
              >
                <span className="relative">
                  Privacy Policy
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </span>
                <svg 
                  className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth="1.5" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </Link>

              <Link 
                href="/terms-and-conditions" 
                className="group flex items-center text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300"
              >
                <span className="relative">
                  Terms and Conditions
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </span>
                <svg 
                  className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth="1.5" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Divider with gradient */}
        <div className="relative mt-12">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-700"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="px-4 bg-gradient-to-r from-[#02226f] to-blue-950">
              <span className="text-sm text-gray-400">Building futures together</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}