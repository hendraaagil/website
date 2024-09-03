import { Home, Keyboard, LineChart, PenLine, User, Wrench } from 'lucide-react'

export const navigationItems = [
	{
		name: 'Home',
		href: '/',
		Icon: Home,
	},
	{
		name: 'About',
		href: '/about',
		Icon: User,
	},
	{
		name: 'Blog',
		href: '/blog',
		Icon: PenLine,
	},
	{
		name: 'Projects',
		href: '/projects',
		Icon: Wrench,
	},
	{
		name: 'Equipments',
		href: '/equipments',
		Icon: Keyboard,
	},
	{
		name: 'Dashboard',
		href: '/dashboard',
		Icon: LineChart,
	},
]
