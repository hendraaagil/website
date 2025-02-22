'use client'

import { usePathname } from 'next/navigation'
import { ChevronsLeft, ChevronsRight, PanelTopOpen } from 'lucide-react'
import { about } from '@/.velite'

import { cn } from '@/lib/utils'
import { useNavigationState } from '@/hooks'
import {
  Button,
  Heading,
  ImageBlur,
  Sheet,
  SheetContent,
  SheetTrigger,
  TooltipProvider,
} from '@/components/ui'
import { ThemeToggle } from '@/components/theme'
import {
  navigationItems as navigations,
  NavigationLink,
} from '@/components/layout'

const MobileNavigation = ({
  pathname,
  isOpen,
  setIsOpen,
}: {
  pathname: string
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}) => (
  <>
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="fixed right-0 bottom-0 z-20 m-2 inline-flex shadow-sm sm:hidden"
        >
          <PanelTopOpen className="-rotate-90 h-[1.2rem] w-[1.2rem] scale-100" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-4">
        <ul className="space-y-4 py-4">
          {navigations.map(({ name, href, Icon }) => (
            <li key={name}>
              <NavigationLink
                href={href}
                name={name}
                currentPath={pathname}
                onClick={() => setIsOpen(false)}
              >
                <Icon className="h-5 w-5" />
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

export const Navigation = () => {
  const { avatar, name, username } = about
  const { isCollapse, isOpen, setIsCollapse, setIsOpen } = useNavigationState()
  const pathname = usePathname()

  return (
    <TooltipProvider>
      <nav
        className={cn(
          'sticky top-0 hidden min-h-screen w-48 flex-col items-center self-start px-4 py-8 sm:flex',
          'translate-y-0 transition-[width,transform] duration-300 motion-reduce:transition-none',
          { '-translate-y-[14.75rem] w-[5.25rem] delay-150': isCollapse },
        )}
      >
        <div
          className={cn('w-full overflow-hidden pb-4', {
            'space-y-2': !isCollapse,
          })}
        >
          <div
            className={cn(
              'h-36 w-36 overflow-hidden border-4 border-color',
              'translate-x-0 transition-transform duration-300 motion-reduce:transition-none',
              { '-translate-x-48': isCollapse, 'delay-150': !isCollapse },
            )}
          >
            <ImageBlur
              src={avatar}
              blurDataURL={avatar.blurDataURL}
              width={avatar.width}
              height={avatar.height}
              alt="Avatar"
            />
          </div>
          <Heading
            variant="h2"
            className={cn(
              'translate-x-0 transition-transform duration-300 motion-reduce:transition-none',
              { '-translate-x-48': isCollapse, 'delay-150': !isCollapse },
            )}
          >
            {name}
          </Heading>
          <p
            className={cn(
              'translate-x-0 transition-transform duration-300 motion-reduce:transition-none',
              { '-translate-x-48': isCollapse, 'delay-150': !isCollapse },
            )}
          >
            @{username}
          </p>
          <ThemeToggle isCollapse={isCollapse} />
        </div>
        <ul className="w-full space-y-4 border-color border-y py-4">
          {navigations.map(({ name, href, Icon }) => (
            <li key={name}>
              <NavigationLink
                href={href}
                name={name}
                currentPath={pathname}
                isCollapse={isCollapse}
              >
                <Icon className="h-5 w-5" />
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
            <ChevronsRight className="h-5 w-5" />
          ) : (
            <ChevronsLeft className="h-5 w-5" />
          )}
          <span className="sr-only">Collapse sidebar</span>
        </Button>
      </nav>

      <MobileNavigation
        pathname={pathname}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </TooltipProvider>
  )
}
