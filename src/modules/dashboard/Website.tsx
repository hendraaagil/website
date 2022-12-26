import type { WebsiteApiResponse } from '@/types/website'

import useSWR from 'swr'
import fetcher from '@/libs/fetcher'
import { siteUrl } from '@/constants/url'
import { Card } from './layouts'

export const Website = () => {
  const { data, isLoading } = useSWR<WebsiteApiResponse>('/api/website/stats', fetcher)
  const link = siteUrl

  return (
    <>
      <Card count={isLoading ? '...' : data?.viewCount.toLocaleString()} link={link} title="All-Time Views" />
      <Card count={isLoading ? '...' : data?.visitorCount.toLocaleString()} link={link} title="All-Time Visitors" />
    </>
  )
}
