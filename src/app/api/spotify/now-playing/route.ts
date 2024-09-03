import { fetchNowPlaying } from '@/lib/server/stats'

export const dynamic = 'force-dynamic'
export async function GET() {
	try {
		const nowPlaying = await fetchNowPlaying()
		return Response.json(nowPlaying)
	} catch (error) {
		console.error(error)
		return Response.json({ isPlaying: false })
	}
}
