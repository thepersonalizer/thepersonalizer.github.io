const withImages = require('next-images');

/** @type {import('next').NextConfig} */
module.exports = withImages({
  reactStrictMode: true,
  devIndicators: {
    buildActivityPosition: 'bottom-right',
  },
  webpack: (config) => config,
});
