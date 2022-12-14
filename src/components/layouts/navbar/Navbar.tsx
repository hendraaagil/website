import Link from 'next/link'
import clsx from 'clsx'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { useMedia } from 'react-use'
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi'
import { AnimatePresence } from 'framer-motion'

import navs from '@/_data/navs.json'
import { IconButton } from '@/components'
import { NavMenu } from './NavMenu'

export const Navbar = () => {
  const [mounted, setMounted] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const { theme, systemTheme, setTheme } = useTheme()
  const isWide = useMedia('(min-width: 768px)', true)
  const isLight = (theme === 'system' && systemTheme === 'light') || theme === 'light'

  // Theme will available after first render
  useEffect(() => {
    setMounted(true)
  }, [])

  const handleToggleTheme = () => {
    setTheme(isLight ? 'dark' : 'light')
  }

  const handleClickMenu = () => {
    setShowMenu((prevState) => !prevState)
  }

  return (
    <header className="sticky top-0 z-10 shadow-sm">
      <nav
        className={clsx(
          'mx-auto flex w-full max-w-5xl justify-between',
          'bg-brand-light p-4',
          'transition-[background-color] duration-300',
          'dark:bg-brand-dark'
        )}
      >
        <IconButton className="visible relative md:hidden" label="Toggle menu" onClick={handleClickMenu}>
          {showMenu ? <FiX /> : <FiMenu />}
        </IconButton>
        <AnimatePresence>{showMenu && !isWide && <NavMenu clickAction={handleClickMenu} />}</AnimatePresence>
        <div className="hidden space-x-2 md:flex">
          {navs.map((nav) => (
            <Link
              key={nav.name}
              href={nav.path}
              className="rounded-md py-2 px-4 font-medium hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {nav.name}
            </Link>
          ))}
        </div>
        {mounted && (
          <IconButton label="Toggle theme" onClick={handleToggleTheme}>
            {isLight ? <FiMoon /> : <FiSun />}
          </IconButton>
        )}
      </nav>
    </header>
  )
}
