import clsx from 'clsx'

import { useEffect, useRef } from 'react'
import { useCountUp } from 'react-countup'
import { FiExternalLink } from 'react-icons/fi'
import { Link } from '@/components'

export type CardProps = {
  title: string
  link: string
  count?: number
}

export const Card = ({ title, link, count }: CardProps) => {
  const countUpRef = useRef<HTMLParagraphElement>(null)
  const { update } = useCountUp({
    start: 0,
    end: count as number,
    ref: countUpRef,
    duration: 4,
  })

  useEffect(() => {
    update(count as number)
  }, [count, update])

  return (
    <div
      className={clsx(
        'rounded border border-gray-200 p-4 shadow-sm dark:border-gray-700',
        'transition-[border-color] duration-300'
      )}
    >
      <Link url={link} className="flex items-center" isExternal>
        {title} <FiExternalLink className="ml-1" />
      </Link>
      <p className="text-2xl font-bold" ref={countUpRef} />
    </div>
  )
}
