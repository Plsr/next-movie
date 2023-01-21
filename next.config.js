/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/top',
      },
    ]
  },
  swcMinify: true,
  experimental: {
    appDir: true, // Opt in to new app directory structure
  },
}

module.exports = nextConfig
