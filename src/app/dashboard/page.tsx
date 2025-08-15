import type { Metadata } from 'next'
import React from 'react'

import { env } from '@/lib/constants'
import { generateSeoMeta } from '@/lib/seo'
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

const statistics = [
  GithubStars,
  WebsiteViews,
  WebsiteVisitors,
  CodingHours,
  YoutubeViews,
  YoutubeVideos,
]

const SectionContainer = ({ children }: { children?: React.ReactNode }) => (
  <section className="space-y-4 border-color border-t pt-4">{children}</section>
)

export const generateMetadata = async (): Promise<Metadata> => {
  const url = new URL(env.url.website + '/dashboard')

  return {
    ...generateSeoMeta({
      title: 'Dashboard',
      alternates: { canonical: url.toString() },
      newOg: { url: url },
    }),
  }
}

export const dynamic = 'force-dynamic'

export default async function Page() {
  return (
    <PageContainer
      title="Dashboard"
      description="My personal dashboard."
      withHeader
      withFooter
    >
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {statistics.map((Item, index) => (
          <React.Suspense key={index} fallback={<DashboardCardSkeleton />}>
            <Item />
          </React.Suspense>
        ))}
      </section>
    </PageContainer>
  )
}
