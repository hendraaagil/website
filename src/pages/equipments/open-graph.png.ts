import { generateSiteOgImage } from '@/lib/open-graph'

export async function GET() {
	return await generateSiteOgImage('/equipments')
}
