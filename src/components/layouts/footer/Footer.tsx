import type { SpotifyCurrentlyPlayingApiResponse } from '@/types/spotify'

import { CardContainer, Hr, Link } from '@/components'
import { getCurrentYear } from '@/libs/math'

import Image from 'next/image'
import useSWR from 'swr'
import fetcher from '@/libs/fetcher'

const Spotify = () => {
  const { data } = useSWR<SpotifyCurrentlyPlayingApiResponse>('/api/spotify/currently-playing', fetcher)

  const Card = () => (
    <CardContainer className="flex items-center space-x-3 px-3 py-2">
      <Image src="/spotify.png" width={20} height={20} alt={`Spotify's icon`} />
      {!data?.isPlaying ? (
        <p className="font-medium">Not Playing</p>
      ) : (
        <div>
          <p className="line-clamp-1 font-semibold">{data.title}</p>
          <p className="line-clamp-1 text-xs font-medium">{data.artist}</p>
        </div>
      )}
    </CardContainer>
  )

  if (!data?.isPlaying) {
    return <Card />
  }

  return (
    <Link url={data.songUrl} isExternal>
      <Card />
    </Link>
  )
}

export const Footer = () => (
  <footer className="mx-auto flex w-full max-w-5xl flex-col px-4 pb-6 text-sm xs:px-8">
    <Hr className="mb-6" />
    <div className="flex justify-between">
      <div className="flex flex-col space-y-2">
        <p className="font-bold">Shortlinks</p>
        <ul className="space-y-1">
          {['/me', '/links', '/source'].map((link) => (
            <li key={link}>
              <Link url={link}>{link}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col items-end justify-between pl-4">
        <Spotify />
        <p className="font-medium">
          &copy;{getCurrentYear()} by <span className="font-semibold">Hendra Agil</span>
        </p>
      </div>
    </div>
  </footer>
)
