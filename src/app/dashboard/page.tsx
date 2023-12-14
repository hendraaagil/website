import { Suspense } from 'react'

import { PageContainer } from '@/components/layout'
import {
  CodingHours,
  DashboardCardSkeleton,
  GithubStars,
  WebsiteViews,
  WebsiteVisitors,
  YoutubeVideos,
  YoutubeViews,
} from '@/components/dashboard'

export const dynamic = 'force-dynamic'

const items = [
  GithubStars,
  WebsiteViews,
  WebsiteVisitors,
  CodingHours,
  YoutubeViews,
  YoutubeVideos,
]

export default async function Page() {
  return (
    <PageContainer
      title="Dashboard"
      description="My personal dashboard."
      withHeader
    >
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {items.map((Item, index) => (
          <Suspense key={index} fallback={<DashboardCardSkeleton />}>
            <Item />
          </Suspense>
        ))}
      </section>
    </PageContainer>
  )
}
