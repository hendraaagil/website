import { useState } from 'react'
import { Menu, X } from 'lucide-react'

import { navigations } from '@/lib/constants'
import { cn } from '@/lib/utils'

export default function MobileNav({ pathname }: { pathname: string }) {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<nav className="sticky top-0 z-50 w-full border-b bg-background sm:hidden">
				<div className="flex items-center justify-between px-3 py-2">
					<a href="/" className="px-2 py-1 text-xl font-bold">
						Ctros
					</a>
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="p-2 transition-colors hover:bg-muted/50"
						aria-label={isOpen ? 'Close menu' : 'Open menu'}
					>
						{isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
					</button>
				</div>
			</nav>

			{/* Overlay */}
			{isOpen && (
				<div
					className="fixed inset-0 z-10 bg-background/80 backdrop-blur-sm sm:hidden"
					onClick={() => setIsOpen(false)}
				/>
			)}

			{/* Menu */}
			<div
				className={cn(
					'fixed top-14 right-0 z-20 h-[calc(100vh-56px)] w-52 border-l bg-background transition-transform sm:hidden',
					{
						'translate-x-0': isOpen,
						'translate-x-full': !isOpen,
					},
				)}
			>
				<ul className="flex flex-col">
					{navigations.map((item) => (
						<li key={item.href}>
							<a
								href={item.href}
								className={cn(
									'block border-b px-6 py-4 transition-colors hover:bg-muted/50',
									{
										'bg-muted/50':
											(pathname === item.href && item.isExact) ||
											(pathname.startsWith(item.href) && !item.isExact),
									},
								)}
								onClick={() => setIsOpen(false)}
							>
								{item.title}
							</a>
						</li>
					))}
				</ul>
			</div>
		</>
	)
}
