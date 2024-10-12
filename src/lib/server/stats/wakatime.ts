import type { WakatimeStats } from '@/types/wakatime'
import { secondsToHours } from 'date-fns'

import { env } from '@/lib/constants'

export const fetchWakatimeStats = async () => {
  try {
    const response = await fetch(env.url.wakatime)
    const {
      data: { range, grand_total },
    }: WakatimeStats = await response.json()

    const startDate = range.start
    const endDate = range.end
    const codingHours = secondsToHours(
      grand_total.total_seconds_including_other_language,
    )

    return { startDate, endDate, codingHours }
  } catch (error) {
    console.error(error)
    return null
  }
}
