'use client'

import React from 'react'
import Link, { type LinkProps } from 'next/link'

import { usePathname } from 'next/navigation'
import {
  History,
  Home,
  Keyboard,
  LineChart,
  PanelTopOpen,
  PenLine,
  User,
  Wrench,
} from 'lucide-react'
import { allAbouts } from 'contentlayer/generated'

import { cn } from '@/lib/utils'
import {
  Button,
  Heading,
  ImageBlur,
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui'
import { ThemeToggle } from '@/components/theme'

const navigations = [
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
    name: 'Resume',
    href: '/resume',
    Icon: History,
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

const NavigationLink = ({
  href,
  currentPath,
  children,
  ...rest
}: {
  href: string
  currentPath: string
  children: React.ReactNode
} & LinkProps) => (
  <Link
    href={href}
    className={cn(
      'flex items-center space-x-2 border-b-2 border-l-2 border-transparent bg-slate-200 bg-opacity-25 py-2 pl-3 pr-8 font-medium tracking-wide transition-colors hover:border-color',
      'dark:bg-slate-800 dark:bg-opacity-25',
      {
        'bg-opacity-50 border-color dark:bg-opacity-50': currentPath === href,
      },
    )}
    {...rest}
  >
    {children}
  </Link>
)

const MobileNavigation = ({ pathname }: { pathname: string }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="fixed bottom-0 left-0 z-20 m-2 inline-flex shadow-sm sm:hidden"
        >
          <PanelTopOpen className="h-[1.2rem] w-[1.2rem] -rotate-90 scale-100" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-4">
        <ul className="space-y-4 overflow-scroll py-4">
          {navigations.map(({ name, href, Icon }) => (
            <li key={name}>
              <NavigationLink
                href={href}
                currentPath={pathname}
                onClick={() => setIsOpen(false)}
              >
                <Icon size={20} />
                <span>{name}</span>
              </NavigationLink>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  )
}

export function Navigation() {
  const { avatar, avatarPlaceholder, name, username } = allAbouts[0]
  const pathname = usePathname()

  return (
    <>
      <MobileNavigation pathname={pathname} />
      <ThemeToggle isMobile />
      <nav className="sticky top-0 hidden min-h-screen max-w-fit flex-col items-center self-start border-r py-8 pr-2 border-color sm:flex md:pr-4">
        <div className="w-full space-y-2 pb-4">
          <div className="h-36 w-36 overflow-hidden border-4 border-color">
            <ImageBlur
              blurDataURL={avatarPlaceholder}
              src={avatar}
              width={256}
              height={256}
              alt="Avatar"
            />
          </div>
          <Heading variant="h2">{name}</Heading>
          <p>@{username}</p>
          <ThemeToggle />
        </div>
        <ul className="space-y-4 border-t py-4 border-color">
          {navigations.map(({ name, href, Icon }) => (
            <li key={name}>
              <NavigationLink href={href} currentPath={pathname}>
                <Icon size={20} />
                <span>{name}</span>
              </NavigationLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
