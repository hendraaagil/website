import type { WebsiteApiResponse } from '@/types/website'

import useSWR from 'swr'
import fetcher from '@/libs/fetcher'
import { Card } from './layouts'

export const Website = () => {
  const { data, isLoading } = useSWR<WebsiteApiResponse>('/api/website/stats', fetcher)
  const link = '/analytics'

  return (
    <>
      <Card count={isLoading ? 0 : data?.viewCount} link={link} title="All-Time Views" />
      <Card count={isLoading ? 0 : data?.visitorCount} link={link} title="All-Time Visitors" />
    </>
  )
}
