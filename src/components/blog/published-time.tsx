'use client'

import { formatFullDate } from '@/lib/format'

export const PublishedTime = ({
	date,
	className,
	prefix,
}: { date: string; className?: string; prefix?: string }) => (
	<time
		dateTime={date}
		className={className ?? undefined}
		suppressHydrationWarning
	>
		{(prefix ?? '') + formatFullDate(date)}
	</time>
)
