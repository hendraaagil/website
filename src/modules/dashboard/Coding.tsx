import type { CodingStatsApiResponse } from '@/types/coding'

import useSWR from 'swr'
import fetcher from '@/libs/fetcher'
import { Card } from './layouts'

export const Coding = () => {
  const { data, isLoading } = useSWR<CodingStatsApiResponse>('/api/coding/stats', fetcher)
  const link = 'https://wakatime.com/@hendraaagil'

  return (
    <>
      <Card count={isLoading ? 0 : data?.codingHours} link={link} title="Coding Hours" />
    </>
  )
}
