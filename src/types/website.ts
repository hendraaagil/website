export type WebsiteStatsResponse = {
	pageviews: { value: number; change: number }
	visitors: { value: number; change: number }
	bounces: { value: number; change: number }
	totaltime: { value: number; change: number }
}
