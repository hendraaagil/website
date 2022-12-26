import type { GithubApiResponse } from '@/types/github'

import useSWR from 'swr'
import fetcher from '@/libs/fetcher'
import { Card } from './layouts'

export const Github = () => {
  const { data, isLoading } = useSWR<GithubApiResponse>('/api/github/stats', fetcher)
  const link = 'https://github.com/hendraaagil'
  return <Card count={isLoading ? '...' : data?.stars.toLocaleString()} link={link} title="GitHub Stars" />
}
