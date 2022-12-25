/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['ik.imagekit.io', 'i.scdn.co'],
  },
  redirects: async () => {
    // https://twitter.com/LiamHammett/status/1260984553570570240
    return [
      {
        source: '/.env',
        destination: 'https://www.youtube.com/watch?v=V4MF2s6MLxY',
        permanent: false,
      },
      {
        source: '/wp-login.php',
        destination: 'https://www.youtube.com/watch?v=V4MF2s6MLxY',
        permanent: false,
      },
      {
        source: '/wp-admin',
        destination: 'https://www.youtube.com/watch?v=V4MF2s6MLxY',
        permanent: false,
      },
      {
        source: '/me',
        destination: '/about',
        permanent: false,
      },
      {
        source: '/github',
        destination: 'https://github.com/hendraaagil',
        permanent: false,
      },
      {
        source: '/linkedin',
        destination: 'https://linkedin.com/in/hendraaagil',
        permanent: false,
      },
      {
        source: '/source',
        destination: 'https://github.com/hendraaagil/website',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
