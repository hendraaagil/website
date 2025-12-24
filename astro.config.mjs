// @ts-check
import { defineConfig, fontProviders } from 'astro/config'
import { transformerMetaHighlight } from '@shikijs/transformers'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import yeskunallumami from '@yeskunall/astro-umami'

// https://astro.build/config
export default defineConfig({
	site: 'https://ctros.aglabs.id',
	experimental: {
		fonts: [
			{
				provider: fontProviders.fontsource(),
				name: 'Gabarito',
				cssVariable: '--font-gabarito',
				weights: ['400 900'],
			},
			{
				provider: fontProviders.fontsource(),
				name: 'Google Sans Code',
				cssVariable: '--font-google-sans-code',
				weights: ['400 900'],
				display: 'swap',
				fallbacks: ['monospace'],
			},
		],
	},
	markdown: {
		shikiConfig: {
			theme: 'github-dark-dimmed',
			transformers: [transformerMetaHighlight()],
		},
	},
	integrations: [
		mdx(),
		react(),
		sitemap(),
		yeskunallumami({
			id: 'ef49fad8-8804-4c69-b639-a4f7aace59eb',
			hostUrl: 'https://analytics.hendraaagil.dev',
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
})
