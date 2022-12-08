import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

import navs from '@/_data/navs.json'

export const Navbar = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, systemTheme, setTheme } = useTheme()

  // Theme will available after first render
  useEffect(() => {
    setMounted(true)
  }, [])

  const handleToggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <header className="sticky top-0 shadow-sm">
      <nav className="mx-auto flex w-full max-w-5xl justify-between py-4">
        <ul className="flex space-x-2">
          {navs.map((nav) => (
            <Link
              key={nav.name}
              href={nav.path}
              className="rounded-md py-2 px-4 font-medium transition-all hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {nav.name}
            </Link>
          ))}
        </ul>
        {mounted && (
          <button
            className="rounded-md p-2 px-4 transition-all  hover:bg-gray-200 dark:hover:bg-gray-700"
            onClick={handleToggleTheme}
          >
            {(theme === 'system' && systemTheme === 'light') || theme === 'light' ? <FiMoon /> : <FiSun />}
          </button>
        )}
      </nav>
    </header>
  )
}
