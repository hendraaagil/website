import type { SpotifyTopTrack, SpotifyTopTracksApiResponse } from '@/types/spotify'

import Image from 'next/image'
import useSWR from 'swr'
import fetcher from '@/libs/fetcher'
import { Fragment } from 'react'
import { Hr, Link } from '@/components'

type TrackProps = {
  track: SpotifyTopTrack
  index: number
}

const TrackSkeleton = () => (
  <div className="flex animate-pulse items-center space-x-4 rounded px-0 py-2 xs:px-2">
    <p className="opacity-0">01</p>
    <div className="h-12 w-12 bg-gray-200 transition-[background-color] duration-300 dark:bg-gray-700"></div>
    <a className="space-y-2" href="#">
      <p className="h-4 w-48 bg-gray-200 transition-[background-color] duration-300 dark:bg-gray-700"></p>
      <p className="h-2 w-32 bg-gray-200 transition-[background-color] duration-300 dark:bg-gray-700"></p>
    </a>
  </div>
)

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
      {Array.from(Array(10).keys()).map((index) => (
        <Fragment key={index}>
          {isLoading ? <TrackSkeleton /> : <Track track={data?.tracks[index] as SpotifyTopTrack} index={index} />}
          {index !== 9 && <Hr />}
        </Fragment>
      ))}
    </div>
  )
}
