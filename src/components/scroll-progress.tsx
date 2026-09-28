import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

import { cn } from '@/lib/utils'

export default function ScrollProgress({ targetId }: { targetId: string }) {
	const [progress, setProgress] = useState(0)
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		const target = document.getElementById(targetId)
		if (!target) return

		const update = () => {
			const { top, bottom, height } = target.getBoundingClientRect()
			const max = height - window.innerHeight
			setProgress(max > 0 ? Math.min(Math.max(-top / max, 0), 1) : 1)
			setIsVisible(window.scrollY > 200 && bottom > window.innerHeight / 2)
		}

		update()
		window.addEventListener('scroll', update, { passive: true })
		return () => window.removeEventListener('scroll', update)
	}, [targetId])

	return (
		<div className="pointer-events-none fixed inset-x-0 bottom-3 z-20 mx-auto flex max-w-5xl justify-end px-3 lg:bottom-24 lg:px-6">
			<button
				type="button"
				aria-label="Back to top"
				onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
				className={cn(
					'pointer-events-auto relative grid size-12 cursor-pointer place-items-center bg-background text-muted-foreground transition-all hover:bg-[color-mix(in_oklab,var(--color-primary)_20%,var(--color-background))] hover:text-foreground',
					isVisible ? 'visible opacity-100' : 'invisible opacity-0',
				)}
			>
				<svg viewBox="0 0 36 36" className="absolute inset-0 size-full">
					<path
						d="M18 1H35V35H1V1Z"
						fill="none"
						strokeWidth="2"
						className="stroke-border"
					/>
					<path
						d="M18 1H35V35H1V1Z"
						fill="none"
						strokeWidth="2"
						pathLength="100"
						strokeDasharray={progress < 1 ? 100 : undefined}
						strokeDashoffset={100 - progress * 100}
						className="stroke-primary"
					/>
				</svg>
				<ArrowUp className="size-5" />
			</button>
		</div>
	)
}
