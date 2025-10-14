import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.eu-west-2.amazonaws.com',
        pathname: '/mie-services.com/**',
      },
    ],
  },
};

export default nextConfig;
