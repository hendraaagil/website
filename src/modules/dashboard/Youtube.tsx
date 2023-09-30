import type { YoutubeApiResponse } from '@/types/youtube'

import useSWR from 'swr'
import fetcher from '@/libs/fetcher'
import { Card } from './layouts'

export const Youtube = () => {
  const { data, isLoading } = useSWR<YoutubeApiResponse>('/api/youtube/stats', fetcher)
  const link = 'https://youtube.com/@hendraaagil'

  return (
    <>
      <Card count={isLoading ? 0 : data?.videoCount} link={link} title="YouTube Videos" />
      <Card count={isLoading ? 0 : data?.viewCount} link={link} title="YouTube Views" />
    </>
  )
}
