const isDev = process.argv.indexOf('dev') !== -1
const isBuild = process.argv.indexOf('build') !== -1
if (!process.env.VELITE_STARTED && (isDev || isBuild)) {
  process.env.VELITE_STARTED = '1'
  const { build } = await import('velite')
  await build({ watch: isDev, clean: !isDev })
}

/** @type {import('next').NextConfig} */
export default {
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
        source: '/spotify',
        destination:
          'https://open.spotify.com/user/31c2l7t3xscqcrmfz6nvinn645nu',
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
