import { FiExternalLink } from 'react-icons/fi'
import { Link } from '@/components'

export type CardProps = {
  title: string
  link: string
  count?: string
}

export const Card = ({ title, link, count }: CardProps) => (
  <div className="rounded border p-4">
    <Link url={link} className="flex items-center" isExternal>
      {title} <FiExternalLink className="ml-1" />
    </Link>
    <p className="text-2xl font-bold">{count}</p>
  </div>
)
