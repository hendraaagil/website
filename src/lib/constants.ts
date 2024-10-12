export const env = {
  url: {
    website: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    wakatime: process.env.WAKATIME_URL || '',
  },

  spotify: {
    clientId: process.env.SPOTIFY_CLIENT_ID || '',
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET || '',
    refreshToken: process.env.SPOTIFY_REFRESH_TOKEN || '',
  },

  google: {
    clientEmail: process.env.GOOGLE_CLIENT_EMAIL || '',
    privateKey: process.env.GOOGLE_PRIVATE_KEY || '',
  },

  websiteStats: {
    endpoint: process.env.WEBSITE_STATS_ENDPOINT || '',
    token: process.env.WEBSITE_STATS_TOKEN || '',
  },

  github: {
    token: process.env.GITHUB_TOKEN || '',
  },
}
