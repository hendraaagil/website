import React from 'react'

import { PageContainer } from '@/components/layout'
import { Heading } from '@/components/ui'
import {
  CodingHours,
  DashboardCardSkeleton,
  GithubStars,
  WebsiteViews,
  WebsiteVisitors,
  YoutubeVideos,
  YoutubeViews,
} from '@/components/dashboard'
import {
  NowPlaying,
  NowPlayingSkeleton,
  TopTracks,
  TopTracksSkeleton,
} from '@/components/dashboard/spotify'

const statistics = [
  GithubStars,
  WebsiteViews,
  WebsiteVisitors,
  CodingHours,
  YoutubeViews,
  YoutubeVideos,
]

const SectionContainer = ({ children }: { children?: React.ReactNode }) => (
  <section className="space-y-4 border-t pt-4 border-color">{children}</section>
)

export const dynamic = 'force-dynamic'

export default async function Page() {
  return (
    <PageContainer
      title="Dashboard"
      description="My personal dashboard."
      withHeader
    >
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {statistics.map((Item, index) => (
          <React.Suspense key={index} fallback={<DashboardCardSkeleton />}>
            <Item />
          </React.Suspense>
        ))}
      </section>
      <SectionContainer>
        <Heading variant="h2">Music</Heading>
        <React.Suspense fallback={<NowPlayingSkeleton />}>
          <NowPlaying />
        </React.Suspense>
      </SectionContainer>
      <SectionContainer>
        <Heading variant="h3">Top tracks</Heading>
        <React.Suspense fallback={<TopTracksSkeleton />}>
          <TopTracks />
        </React.Suspense>
      </SectionContainer>
    </PageContainer>
  )
}
