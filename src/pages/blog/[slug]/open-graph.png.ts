import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'
import { generatePostOgImage } from '@/lib/open-graph'

export async function getStaticPaths() {
	const posts = await getCollection('post')
	return posts.map((post) => ({
		params: { slug: post.id },
	}))
}

export const GET: APIRoute = async ({ params, request }) => {
	const buffer = await generatePostOgImage(params?.slug ?? '', request.url)

	return new Response(buffer, {
		headers: { 'Content-Type': 'image/png' },
	})
}
