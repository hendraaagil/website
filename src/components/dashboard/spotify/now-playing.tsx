'use client'

import type { NowPlayingResponse } from '@/lib/server/stats'

import useSWR, { type Fetcher } from 'swr'
import Image from 'next/image'

import { ExternalLink } from '@/components/ui'

const fetcher: Fetcher<NowPlayingResponse, string> = (url: string) =>
  fetch(url).then((res) => res.json())

export const NowPlaying = () => {
  const { isLoading, data: nowPlaying } = useSWR(
    '/api/spotify/now-playing',
    fetcher,
    { refreshInterval: 10000 },
  )

  if (isLoading) return <NowPlayingSkeleton />

  return (
    <div className="border border-color px-3 py-2.5 transition-colors hover:bg-color-secondary">
      <ExternalLink
        href={nowPlaying?.songUrl ?? '/spotify'}
        className="flex items-center space-x-4 no-underline hover:underline"
      >
        <Image
          src={nowPlaying?.albumImageUrl ?? '/assets/main/spotify.png'}
          alt="Album cover"
          width={56}
          height={56}
          className="border border-color"
        />
        <div className="space-y-0.5">
          <p className="line-clamp-1 font-semibold text-lg">
            {nowPlaying?.title ?? 'Not playing'}
          </p>
          <p className="line-clamp-1 text-sm">
            {nowPlaying?.artist ?? 'Spotify'}
          </p>
        </div>
      </ExternalLink>
    </div>
  )
}

export const NowPlayingSkeleton = () => (
  <div className="border border-color px-3 py-2.5 transition-colors">
    <div className="flex space-x-4">
      <div className="h-14 w-14 animate-pulse bg-color-secondary" />
      <div className="space-y-1.5">
        <div className="h-7 w-40 animate-pulse bg-color-secondary" />
        <div className="h-4 w-24 animate-pulse bg-color-secondary" />
      </div>
    </div>
  </div>
)
