import { cn } from '@/lib/utils'

export default function Badge({
	children,
	as,
	className,
}: {
	children: React.ReactNode
	as?: React.ElementType
	className?: string
}) {
	const Component = as || 'span'

	return (
		<Component className={cn('bg-muted px-2.5 py-1 text-sm', className)}>
			{children}
		</Component>
	)
}
