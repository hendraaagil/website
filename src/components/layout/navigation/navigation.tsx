'use client'

import React from 'react'

import { usePathname } from 'next/navigation'
import { ChevronsLeft, ChevronsRight, PanelTopOpen } from 'lucide-react'
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
import {
  navigationItems as navigations,
  NavigationLink,
} from '@/components/layout'

const MobileNavigation = ({ pathname }: { pathname: string }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
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

      <ThemeToggle isMobile />
    </>
  )
}

export const Navigation = () => {
  const [isCollapse, setIsCollapse] = React.useState(false)
  const { avatar, avatarPlaceholder, name, username } = allAbouts[0]
  const pathname = usePathname()

  return (
    <>
      <nav className="sticky top-0 hidden min-h-screen max-w-fit flex-col items-center self-start border-r px-4 py-8 border-color sm:flex">
        <div className={cn('w-full pb-4', { 'space-y-2': !isCollapse })}>
          <div
            className={cn('h-36 w-36 overflow-hidden border-4 border-color', {
              hidden: isCollapse,
            })}
          >
            <ImageBlur
              blurDataURL={avatarPlaceholder}
              src={avatar}
              width={256}
              height={256}
              alt="Avatar"
            />
          </div>
          <Heading variant="h2" className={cn({ hidden: isCollapse })}>
            {name}
          </Heading>
          <p className={cn({ hidden: isCollapse })}>@{username}</p>
          <ThemeToggle isCollapse={isCollapse} />
        </div>
        <ul className="space-y-4 border-y py-4 border-color">
          {navigations.map(({ name, href, Icon }) => (
            <li key={name}>
              <NavigationLink
                href={href}
                currentPath={pathname}
                isCollapse={isCollapse}
              >
                <Icon size={20} />
                <span className={cn({ 'sr-only': isCollapse })}>{name}</span>
              </NavigationLink>
            </li>
          ))}
        </ul>
        <Button
          size="icon"
          variant="outline"
          className="mt-4 w-full"
          onClick={() => setIsCollapse((prev) => !prev)}
        >
          {isCollapse ? (
            <ChevronsRight size={20} />
          ) : (
            <ChevronsLeft size={20} />
          )}
          <span className="sr-only">Collapse sidebar</span>
        </Button>
      </nav>

      <MobileNavigation pathname={pathname} />
    </>
  )
}
