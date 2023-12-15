import withPlaiceholder from '@plaiceholder/next'
import { withContentlayer } from 'next-contentlayer'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
        pathname: '/image/**',
      },
    ],
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
      {
        source: '/analytics',
        destination: 'https://analytics.hendraaagil.dev/share/uYc4Zzl2',
        permanent: false,
      },
      {
        source: '/links',
        destination: 'https://links.hendraaagil.dev',
        permanent: false,
      },
    ]
  },
}

export default withContentlayer(withPlaiceholder(nextConfig))
