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
          hostname: 'api.blog.quannguyen.fun',
          pathname: '/uploads/**',
        },
        {
          protocol: 'http',
          hostname: '127.0.0.1',
          port: '1337',
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
