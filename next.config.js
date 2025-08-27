/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  trailingSlash: process.env.NODE_ENV === 'production',
  basePath: process.env.NODE_ENV === 'production' ? '/jack-portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/jack-portfolio/' : '',
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
}

module.exports = nextConfig 