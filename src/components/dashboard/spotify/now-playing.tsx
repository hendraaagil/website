import Image from 'next/image'

import { fetchNowPlaying } from '@/lib/server/stats'
import { ExternalLink } from '@/components/ui'

export const dynamic = 'force-dynamic'

export const NowPlaying = async () => {
  const nowPlaying = await fetchNowPlaying()

  return (
    <div className="border px-3 py-2.5 transition-colors border-color hover:bg-color-secondary">
      <ExternalLink
        href={nowPlaying.songUrl ?? 'https://open.spotify.com'}
        className="flex items-center space-x-4 no-underline hover:underline"
      >
        <Image
          src={nowPlaying.albumImageUrl ?? '/assets/main/spotify.png'}
          alt="Album cover"
          width={56}
          height={56}
          className="border border-color"
        />
        <div className="space-y-0.5">
          <p className="line-clamp-1 text-lg font-semibold">
            {nowPlaying.title ?? 'Not playing'}
          </p>
          <p className="line-clamp-1 text-sm">
            {nowPlaying.artist ?? 'Spotify'}
          </p>
        </div>
      </ExternalLink>
    </div>
  )
}

export const NowPlayingSkeleton = () => (
  <div className="border px-3 py-2.5 transition-colors border-color hover:bg-color-secondary">
    <div className="flex space-x-4">
      <div className="h-14 w-14 animate-pulse bg-color-secondary" />
      <div className="space-y-1.5">
        <div className="h-7 w-40 animate-pulse bg-color-secondary" />
        <div className="h-4 w-24 animate-pulse bg-color-secondary" />
      </div>
    </div>
  </div>
)
