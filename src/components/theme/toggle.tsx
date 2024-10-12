'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui'
import { cn } from '@/lib/utils'

export function ThemeToggle({
  isCollapse,
  isMobile,
}: {
  isCollapse?: boolean
  isMobile?: boolean
}) {
  const { theme, themes, setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className={cn({
            'fixed top-0 right-0 z-20 m-2 inline-flex shadow-sm sm:hidden':
              isMobile,
            'w-full': isCollapse && !isMobile,
          })}
        >
          <Sun className="dark:-rotate-90 h-5 w-5 rotate-0 scale-100 transition-all dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={isMobile ? 'end' : 'start'}>
        <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
          {themes.map((theme) => (
            <DropdownMenuRadioItem
              key={theme}
              value={theme}
              className="capitalize"
            >
              {theme}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
