import type { NextApiHandler } from 'next'
import type { CodingStats } from '@/types/coding'
import { secondsToHours } from 'date-fns'

const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'GET') {
    const response = await fetch(process.env.WAKATIME_URL as string)
    const {
      data: { range, grand_total },
    }: CodingStats = await response.json()

    const startDate = range.start
    const endDate = range.end
    const codingHours = secondsToHours(grand_total.total_seconds_including_other_language)

    const responseJson = { startDate, endDate, codingHours }
    return res.status(200).json(responseJson)
  }

  return res.status(404).json({ message: 'Not found' })
}

export default handler
