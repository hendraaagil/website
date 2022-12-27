import type { SpotifyCurrentlyPlayingApiResponse } from '@/types/spotify'

import clsx from 'clsx'
import useSWR from 'swr'
import fetcher from '@/libs/fetcher'
import { FiExternalLink, FiPlayCircle } from 'react-icons/fi'
import { Link } from '@/components'

export const CurrentlyPlaying = () => {
  const { data } = useSWR<SpotifyCurrentlyPlayingApiResponse>('/api/spotify/currently-playing', fetcher)

  return (
    <div
      className={clsx(
        'mb-4 flex items-center space-x-1 rounded bg-gray-200 py-2 px-3',
        'transition-[background-color] duration-300',
        'dark:bg-gray-700'
      )}
    >
      <FiPlayCircle className="mr-1 w-8 text-lg xs:w-fit" />
      {!data?.isPlaying ? (
        <p>
          <strong>Not Playing</strong> - Spotify
        </p>
      ) : (
        <Link url={data?.songUrl as string} className="flex items-center space-x-1" isExternal>
          <p>
            <strong>{data.title}</strong> - {data.artist}
          </p>
          <FiExternalLink className="ml-1 w-8 text-lg xs:w-fit" />
        </Link>
      )}
    </div>
  )
}
