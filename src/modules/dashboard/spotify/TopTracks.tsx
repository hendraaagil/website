import type { SpotifyTopTrack, SpotifyTopTracksApiResponse } from '@/types/spotify'

import Image from 'next/image'
import useSWR from 'swr'
import fetcher from '@/libs/fetcher'
import { Fragment } from 'react'
import { FiRotateCw } from 'react-icons/fi'
import { Hr, Link } from '@/components'

type TrackProps = {
  track: SpotifyTopTrack
  index: number
}

const Track = ({ track, index }: TrackProps) => (
  <div className="flex items-center space-x-4 rounded px-0 py-2 xs:px-2">
    <p>{('0' + (index + 1)).slice(-2)}</p>
    <Image src={track.albumImageUrl} width={48} height={48} alt={`Album image for ${track.title} song`} />
    <Link url={track.songUrl} className="w-full" isExternal>
      <p className="font-semibold">{track.title}</p>
      <p className="text-xs font-medium">{track.artist}</p>
    </Link>
  </div>
)

export const TopTracks = () => {
  const { data, isLoading } = useSWR<SpotifyTopTracksApiResponse>('/api/spotify/top-tracks', fetcher)

  return (
    <div className="space-y-2">
      {isLoading ? (
        <FiRotateCw className="animate-spin text-xl" />
      ) : (
        data?.tracks.map((track, index) => (
          <Fragment key={track.id}>
            <Track track={track} index={index} />
            {index + 1 !== data.tracks.length && (
              <Hr className="border-gray-200 transition-[border-color] duration-300 dark:border-gray-700" />
            )}
          </Fragment>
        ))
      )}
    </div>
  )
}
