/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['ik.imagekit.io'],
  },
}

module.exports = nextConfig
