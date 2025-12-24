import { generateSiteOgImage } from '@/lib/open-graph'

export async function GET() {
	const buffer = await generateSiteOgImage('/blog')

	return new Response(buffer, {
		headers: { 'Content-Type': 'image/png' },
	})
}
