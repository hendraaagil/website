import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'
import { generateProjectOgImage } from '@/lib/open-graph'

export async function getStaticPaths() {
	const projects = await getCollection('project')
	return projects.map((project) => ({
		params: { slug: project.id },
	}))
}

export const GET: APIRoute = async ({ params, request }) => {
	const buffer = await generateProjectOgImage(params?.slug ?? '', request.url)

	return new Response(buffer, {
		headers: { 'Content-Type': 'image/png' },
	})
}
