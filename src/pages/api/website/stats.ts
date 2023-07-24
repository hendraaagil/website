import type { NextApiHandler } from 'next'
import type { WebsiteStatsResponse } from '@/types/website'

import { set } from 'date-fns'
import { websiteStatsEndpoint, websiteStatsToken } from '@/constants/website'

const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'GET') {
    const today = set(new Date(), { hours: 23, minutes: 59, seconds: 59, milliseconds: 999 })
    const url = new URL(websiteStatsEndpoint)

    url.searchParams.append('startAt', '1657645200000')
    url.searchParams.append('endAt', new Date(today).valueOf().toString())

    const response = await fetch(url, { headers: { Authorization: `Bearer ${websiteStatsToken}` } })
    const {
      pageviews: { value: viewCount },
      uniques: { value: visitorCount },
    }: WebsiteStatsResponse = await response.json()

    return res.status(200).json({
      viewCount: viewCount,
      visitorCount: visitorCount,
    })
  }

  return res.status(404).json({ message: 'Not found' })
}

export default handler
