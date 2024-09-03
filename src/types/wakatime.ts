export type WakatimeStats = {
	data: {
		best_day: {
			date: string
			text: string
			total_seconds: number
		}
		grand_total: {
			daily_average: number
			daily_average_including_other_language: number
			human_readable_daily_average: string
			human_readable_daily_average_including_other_language: string
			human_readable_total: string
			human_readable_total_including_other_language: string
			total_seconds: number
			total_seconds_including_other_language: number
		}
		range: {
			days_including_holidays: number
			days_minus_holidays: number
			end: string
			holidays: number
			range: string
			start: string
		}
	}
}
