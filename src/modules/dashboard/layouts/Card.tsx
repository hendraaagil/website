import clsx from 'clsx'
import { FiExternalLink } from 'react-icons/fi'
import { Link } from '@/components'

export type CardProps = {
  title: string
  link: string
  count?: string
}

export const Card = ({ title, link, count }: CardProps) => (
  <div
    className={clsx(
      'rounded border border-gray-200 p-4 shadow-sm dark:border-gray-700',
      'transition-[border-color] duration-300'
    )}
  >
    <Link url={link} className="flex items-center" isExternal>
      {title} <FiExternalLink className="ml-1" />
    </Link>
    <p className="text-2xl font-bold">{count}</p>
  </div>
)
