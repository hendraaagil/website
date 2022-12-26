import type { NextApiHandler } from 'next'
import type { SpotifyCurrentlyPlaying } from '@/types/spotify'
import { getNowPlaying } from '@/libs/spotify'

const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'GET') {
    const response = await getNowPlaying()

    if (response.status === 204 || response.status > 400) {
      return res.status(200).json({ isPlaying: false })
    }

    const song: SpotifyCurrentlyPlaying = await response.json()
    const isPlaying = song.is_playing
    const title = song.item.name
    const artist = song.item.artists.map((_artist) => _artist.name).join(', ')
    const album = song.item.album.name
    const albumImageUrl = song.item.album.images[0].url
    const songUrl = song.item.external_urls.spotify

    return res.status(200).json({
      album,
      albumImageUrl,
      artist,
      isPlaying,
      songUrl,
      title,
    })
  }

  return res.status(404).json({ message: 'Not found' })
}

export default handler
