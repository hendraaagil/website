import Link from 'next/link'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import navs from '@/_data/navs.json'

export type NavMenuProps = {
  clickAction: () => void
}

const containerVariants = {
  closed: {
    x: -768,
    transition: {
      duration: 0.25,
    },
  },
  open: {
    x: 0,
    transition: {
      duration: 0.25,
      delayChildren: 0.25,
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
}

const linkVariants = {
  closed: { opacity: 0 },
  open: { opacity: 1 },
}

export const NavMenu = ({ clickAction }: NavMenuProps) => (
  <motion.ul
    initial="closed"
    animate="open"
    exit="closed"
    variants={containerVariants}
    className={clsx(
      'absolute left-0 top-0 mt-[72px] h-screen w-full space-y-6',
      'bg-brand-light px-8 py-6',
      'transition-[background-color] duration-300',
      'dark:bg-brand-dark'
    )}
  >
    {navs.map((nav) => (
      <motion.li key={nav.name} variants={linkVariants} className="font-medium">
        <Link className="block border-b pb-4 dark:border-b-gray-700" href={nav.path} onClick={clickAction}>
          {nav.name}
        </Link>
      </motion.li>
    ))}
  </motion.ul>
)
