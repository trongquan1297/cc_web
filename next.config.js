// ./frontend/next.config.js

/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'export', // Outputs a Single-Page Application (SPA).
    distDir: './dist', // Changes the build output directory to `./dist/`.
    experimental: {
      appDir: true,
    },
    images: {
      remotePatterns: [
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
