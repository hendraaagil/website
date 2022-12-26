import { Heading } from '@/components'
import { CurrentlyPlaying, TopTracks } from './spotify'

export const Music = () => (
  <section>
    <Heading variant="h2">Music</Heading>
    <CurrentlyPlaying />
    <Heading variant="h3">Top Tracks</Heading>
    <TopTracks />
  </section>
)
