import { MetadataRoute } from 'next'
import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'

import { env } from '@/lib/constants'
import { navigationItems } from '@/components/layout'

export default function sitemap(): MetadataRoute.Sitemap {
	const websiteUrl = env.url.website

	const navigations = navigationItems.map((item) => {
		return {
			url: `${websiteUrl}${item.href}`,
			lastModified: new Date(),
			priority: item.href === '/' ? 1 : 0.7,
		}
	})

	const posts = allPosts
		.sort((a, b) => compareDesc(new Date(a.createdAt), new Date(b.createdAt)))
		.map((post) => {
			return {
				url: `${websiteUrl}/blog/${post.slug}`,
				lastModified: new Date(post.updatedAt),
				priority: 0.5,
			}
		})

	return [...navigations, ...posts]
}
