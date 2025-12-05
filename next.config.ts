// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',    // or 'https' if image URLs use https
        hostname: 'rukmini1.flixcart.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};
