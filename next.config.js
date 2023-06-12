/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // allowed image domains to be used in the code
    domains: [
      'raw.githubusercontent.com',
      'unpkg.com',
      'lh3.googleusercontent.com',
      'www.jamtangan.com'
    ]
  },
  swcMinify: true
}

module.exports = nextConfig
