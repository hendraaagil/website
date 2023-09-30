import type { GithubApiResponse } from '@/types/github'

import useSWR from 'swr'
import fetcher from '@/libs/fetcher'
import { Card } from './layouts'

export const Github = () => {
  const { data, isLoading } = useSWR<GithubApiResponse>('/api/github/stats', fetcher)
  const link = 'https://github.com/hendraaagil'
  return <Card count={isLoading ? 0 : data?.stars} link={link} title="GitHub Stars" />
}
