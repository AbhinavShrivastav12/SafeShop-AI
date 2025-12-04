/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.flixcart.com',
        port: '',
        pathname: '/**',
      },
      // add other hosts if needed
    ],
  },
};

module.exports = nextConfig;
