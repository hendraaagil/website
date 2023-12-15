import type { SpotifyNowPlaying, SpotifyTopTracks } from '@/types/spotify'
import qs from 'querystring'

import { env } from '@/lib/constants'

enum TimeRange {
  LastMonth = 'short_term',
  Last6Month = 'medium_term',
  AllTime = 'long_term',
}

const client_id = env.spotify.clientId
const client_secret = env.spotify.clientSecret
const refresh_token = env.spotify.refreshToken

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks?time_range=${TimeRange.LastMonth}&limit=10`
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: qs.stringify({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  })

  return response.json()
}

export type NowPlayingResponse = Awaited<ReturnType<typeof fetchNowPlaying>>

export const fetchNowPlaying = async () => {
  try {
    const { access_token } = await getAccessToken()
    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      cache: 'no-store',
    })
    if (response.status === 204 || response.status > 400) {
      return { isPlaying: false }
    }

    const song: SpotifyNowPlaying = await response.json()
    if (song.currently_playing_type === 'episode' || !song.is_playing) {
      return { isPlaying: false }
    }

    const isPlaying = song.is_playing
    const title = song.item.name
    const artist = song.item.artists.map((_artist) => _artist.name).join(', ')
    const album = song.item.album.name
    const albumImageUrl = song.item.album.images[0].url
    const songUrl = song.item.external_urls.spotify

    return { album, albumImageUrl, artist, isPlaying, songUrl, title }
  } catch (error) {
    console.error(error)
    return { isPlaying: false }
  }
}

export const fetchTopTracks = async () => {
  try {
    const { access_token } = await getAccessToken()
    const response = await fetch(TOP_TRACKS_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      cache: 'no-store',
    })

    const { items }: SpotifyTopTracks = await response.json()
    return items.map((track) => ({
      albumImageUrl: track.album.images[0].url,
      artist: track.artists.map((_artist) => _artist.name).join(', '),
      songUrl: track.external_urls.spotify,
      title: track.name,
      id: track.id,
    }))
  } catch (error) {
    console.error(error)
    return []
  }
}
