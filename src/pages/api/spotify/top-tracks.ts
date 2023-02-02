import type { NextApiHandler } from 'next'
import type { SpotifyTopTracks } from '@/types/spotify'
import { getTopTracks } from '@/libs/spotify'

const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'GET') {
    const response = await getTopTracks()
    const { items }: SpotifyTopTracks = await response.json()

    const tracks = items.map((track) => ({
      albumImageUrl: track.album.images[0].url,
      artist: track.artists.map((_artist) => _artist.name).join(', '),
      songUrl: track.external_urls.spotify,
      title: track.name,
      id: track.id,
    }))

    return res.status(200).json({ tracks })
  }

  return res.status(404).json({ message: 'Not found' })
}

export default handler
