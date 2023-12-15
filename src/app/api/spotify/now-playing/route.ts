import { fetchNowPlaying } from '@/lib/server/stats'

export async function GET() {
  try {
    const nowPlaying = await fetchNowPlaying()
    return Response.json(nowPlaying)
  } catch (error) {
    console.error(error)
    return Response.json({ isPlaying: false })
  }
}
