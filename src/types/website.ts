export type WebsiteStatsResponse = {
  pageviews: { value: number; change: number }
  uniques: { value: number; change: number }
  bounces: { value: number; change: number }
  totaltime: { value: number; change: number }
}

export type WebsiteApiResponse = {
  viewCount: number
  visitorCount: number
}
