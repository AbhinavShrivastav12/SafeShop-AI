/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https', // must be https, not http
        hostname: 'rukmini1.flixcart.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'rukmini2.flixcart.com',
        port: '',
        pathname: '/**',
      },
      // add other hosts if needed
    ],
  },
};

module.exports = nextConfig;
