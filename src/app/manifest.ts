import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Hendra Agil',
    short_name: 'Hendra Agil',
    description:
      'A frontend-focused software engineer with a full-stack mindset and a passion for crafting digital experiences that truly solve problems.',
    start_url: '/',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '16x16',
        type: 'image/x-icon',
      },
      {
        src: '/icons/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    theme_color: '#0f172a',
    background_color: '#0f172a',
    display: 'standalone',
  }
}
