'use client'

import { useEffect, useRef } from 'react'
import { useCountUp } from 'react-countup'
import { ExternalLink as ExternalLinkIcon } from 'lucide-react'

import { ExternalLink } from '@/components/ui'

export type CardProps = {
  title: string
  link: string
  count?: number
}

export const DashboardCard = ({ title, link, count }: CardProps) => {
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
    <div className="border p-4 transition-colors border-color hover:bg-color-secondary">
      <ExternalLink
        href={link}
        className="flex items-center space-x-1 no-underline hover:underline"
      >
        <span>{title}</span>
        <ExternalLinkIcon size={16} />
      </ExternalLink>
      <p className="text-3xl font-bold tracking-wide" ref={countUpRef}>
        0
      </p>
    </div>
  )
}

export const DashboardCardSkeleton = () => (
  <div className="border p-4 transition-colors border-color hover:bg-color-secondary">
    <div className="animate-pulse space-y-2">
      <div className="h-4 w-1/2 bg-color-secondary" />
      <div className="h-8 w-full bg-color-secondary" />
    </div>
  </div>
)
