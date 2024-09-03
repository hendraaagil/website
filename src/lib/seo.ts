import type { Metadata } from 'next'
import { env } from '@/lib/constants'

type SeoProps = Metadata & {
	newOg?: { url: URL }
}

const title = 'Hendra Agil'
const description =
	'A software developer specializing in JavaScript and web development.'

const defaultMeta: Metadata = {
	metadataBase: new URL(env.url.website),
	title: {
		default: title,
		template: '%s / Hendra Agil',
	},
	description: description,
	alternates: {
		canonical: env.url.website,
	},
	openGraph: {
		title: title,
		description: description,
		url: env.url.website,
		type: 'website',
		siteName: title,
	},
	twitter: {
		creator: '@hendraaagil',
		site: '@hendraaagil',
		creatorId: '1218556081586102272',
		siteId: '1218556081586102272',
		card: 'summary_large_image',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
}

export const generateSeoMeta = (seo?: SeoProps): Metadata => {
	if (!seo) return defaultMeta

	if (seo.newOg) {
		const { url } = seo.newOg

		const newOg: Metadata['openGraph'] = {
			...defaultMeta.openGraph,
			url: url,
			images: [
				{
					url: `/og/main?title=${url.pathname}`,
					width: 1200,
					height: 630,
					alt: 'Hendra Agil',
				},
			],
		}

		return { ...defaultMeta, ...seo, openGraph: newOg }
	}

	return { ...defaultMeta, ...seo }
}
