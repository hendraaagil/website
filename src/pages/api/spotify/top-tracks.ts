import type { NextApiHandler } from 'next'
import type { SpotifyTopTracks } from '@/types/spotify'

import { getTopTracks } from '@/libs/spotify'
import { generateBase64Image } from '@/libs/image'

const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'GET') {
    const response = await getTopTracks()
    const { items }: SpotifyTopTracks = await response.json()

    const tracks = await Promise.all(
      items.map(async (track) => {
        const placeholder = await generateBase64Image(track.album.images[0].url, true)
        return {
          albumImageUrl: track.album.images[0].url,
          albumImagePlaceholder: placeholder,
          artist: track.artists.map((_artist) => _artist.name).join(', '),
          songUrl: track.external_urls.spotify,
          title: track.name,
          id: track.id,
        }
      })
    )

    return res.status(200).json({ tracks })
  }

  return res.status(404).json({ message: 'Not found' })
}

export default handler
