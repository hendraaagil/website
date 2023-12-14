import React from 'react'
import Image from 'next/image'

import { fetchTopTracks } from '@/lib/server/stats'
import { ExternalLink } from '@/components/ui'

export const TopTracks = async () => {
  const tracks = await fetchTopTracks()

  return (
    <ol className="space-y-2 border-t pt-2 border-color">
      {tracks.map((track, index) => (
        <React.Fragment key={track.id}>
          <li className="px-3 py-2.5 transition-colors hover:bg-color-secondary">
            <ExternalLink
              href={track.songUrl ?? 'https://open.spotify.com'}
              className="flex items-center space-x-4 no-underline hover:underline"
            >
              <span>{index + 1}.</span>
              <Image
                src={track.albumImageUrl ?? '/assets/main/spotify.png'}
                alt="Album cover"
                width={56}
                height={56}
                className="border border-color"
              />
              <div className="space-y-0.5">
                <p className="line-clamp-1 text-lg font-semibold">
                  {track.title ?? '-'}
                </p>
                <p className="line-clamp-1 text-sm">{track.artist ?? '-'}</p>
              </div>
            </ExternalLink>
          </li>
          <hr className="border-color" />
        </React.Fragment>
      ))}
    </ol>
  )
}

export const TopTracksSkeleton = () => (
  <ol className="space-y-2 border-t pt-2 border-color">
    {Array.from({ length: 10 }).map((_, index) => (
      <React.Fragment key={index}>
        <li className="px-3 py-2.5 transition-colors hover:bg-color-secondary">
          <div className="flex items-center space-x-4">
            <span>{index + 1}.</span>
            <div className="h-14 w-14 animate-pulse bg-color-secondary" />
            <div className="space-y-1.5">
              <div className="h-7 w-40 animate-pulse bg-color-secondary" />
              <div className="h-4 w-24 animate-pulse bg-color-secondary" />
            </div>
          </div>
        </li>
        <hr className="border-color" />
      </React.Fragment>
    ))}
  </ol>
)
