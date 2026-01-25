/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // Next.js 14: externalize pg (Node.js driver) to avoid Edge Runtime issues
  experimental: {
    serverComponentsExternalPackages: ['pg'],
  },
}

module.exports = nextConfig

