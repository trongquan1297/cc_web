// ./frontend/next.config.js

/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
      appDir: true,
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'blog.quannguyen.fun',
          pathname: '/uploads/**',
        },
        {
          protocol: 'https',
          hostname: 'images.pexels.com',
        }
      ],
    },
  }
  
  module.exports = nextConfig
