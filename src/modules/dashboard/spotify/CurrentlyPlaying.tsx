import type { SpotifyCurrentlyPlayingApiResponse } from '@/types/spotify'

import clsx from 'clsx'
import useSWR from 'swr'
import fetcher from '@/libs/fetcher'

export const CurrentlyPlaying = () => {
  const { data } = useSWR<SpotifyCurrentlyPlayingApiResponse>('/api/spotify/currently-playing', fetcher)

  return (
    <div
      className={clsx(
        'mb-4 flex items-center space-x-1 rounded bg-gray-200 p-3',
        'transition-[background-color] duration-300',
        'dark:bg-gray-700'
      )}
    >
      {!data?.isPlaying ? (
        <p>
          <strong>Not Playing</strong> - Spotify
        </p>
      ) : (
        <iframe
          style={{ borderRadius: '12px' }}
          src={data?.embedUrl}
          width="100%"
          height="80"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      )}
    </div>
  )
}
