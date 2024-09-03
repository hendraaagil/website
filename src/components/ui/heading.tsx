import * as React from 'react'
import { Link } from 'lucide-react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const headingVariants = cva('scroll-m-12 font-bold', {
	variants: {
		variant: { h1: 'text-4xl', h2: 'text-3xl', h3: 'text-2xl', h4: 'text-xl' },
	},
	defaultVariants: { variant: 'h1' },
})

export interface HeadingProps
	extends React.BaseHTMLAttributes<HTMLHeadingElement>,
		VariantProps<typeof headingVariants> {
	withLink?: boolean
}

const Heading = ({
	children,
	className,
	variant,
	withLink,
	...props
}: HeadingProps) => {
	if (withLink) {
		const id = children
			?.toString()
			.toLowerCase()
			.replace(/[^\w\s-]/g, '')
			.trim()
			.replace(/\s/g, '-')
		const Variant = variant ?? 'h1'

		return (
			<Variant
				id={id}
				className={cn(
					'group flex items-center',
					headingVariants({ variant, className }),
				)}
				{...props}
			>
				{children}
				<a href={`#${id}`}>
					<Link className="ml-2 hidden h-4 w-4 group-hover:block" />
				</a>
			</Variant>
		)
	}

	return React.createElement(
		variant ?? 'h1',
		{ className: cn(headingVariants({ variant, className })), ...props },
		children,
	)
}

export { Heading, headingVariants }
