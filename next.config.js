/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // allowed image domains to be used in the code
    domains: [
      'raw.githubusercontent.com',
      'unpkg.com'
    ]
  },
  swcMinify: true
}

module.exports = nextConfig
