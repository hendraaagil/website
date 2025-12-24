import { generateSiteOgImage } from '@/lib/open-graph'

export async function GET() {
	const buffer = await generateSiteOgImage('/works')

	return new Response(buffer, {
		headers: { 'Content-Type': 'image/png' },
	})
}
