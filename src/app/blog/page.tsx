import type { Metadata } from 'next'

import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'

import { env } from '@/lib/constants'
import { generateSeoMeta } from '@/lib/seo'
import { PageContainer } from '@/components/layout'
import { PostCard } from '@/components/blog'

export const generateMetadata = async (): Promise<Metadata> => {
	const url = new URL(env.url.website + '/blog')

	return {
		...generateSeoMeta({
			title: 'Blog',
			alternates: { canonical: url.toString() },
			newOg: { url: url },
		}),
	}
}

export default function Page() {
	const posts = allPosts.sort((a, b) =>
		compareDesc(new Date(a.createdAt), new Date(b.createdAt)),
	)

	return (
		<PageContainer
			title="Blog"
			description="Some of the posts that I've written, not only about code."
			withHeader
			withFooter
		>
			<div className="flex flex-col space-y-4">
				{posts.map((post) => (
					<PostCard key={post._id} post={post} />
				))}
			</div>
		</PageContainer>
	)
}
