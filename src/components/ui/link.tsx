import React from 'react'
import { cn } from '@/lib/utils'

export type ExternalLinkProps =
	React.AnchorHTMLAttributes<HTMLAnchorElement> & {}

const ExternalLink = ({
	href,
	children,
	className,
	...rest
}: ExternalLinkProps) => (
	<a
		href={href}
		className={cn(
			'underline underline-offset-2 transition-colors hover:text-blue-600 dark:hover:text-blue-500',
			className,
		)}
		target="_blank"
		rel="noopener noreferrer"
		{...rest}
	>
		{children}
	</a>
)

export { ExternalLink }
