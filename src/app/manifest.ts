import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: 'Hendra Agil',
		short_name: 'Hendra Agil',
		description:
			'A software developer specializing in JavaScript and web development.',
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
