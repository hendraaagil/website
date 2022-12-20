import React from 'react'
import clsx from 'clsx'
import { FiArrowRight } from 'react-icons/fi'
import { Heading, Link } from '@/components'

export type SectionProps = {
  title: string
  children: React.ReactNode
  containerClass?: string
  link: string
  linkTitle: string
}

export const Section = ({ title, children, containerClass, link, linkTitle }: SectionProps) => (
  <section>
    <Heading variant="h2" className="pl-4 xs:pl-0">
      {title}
    </Heading>
    <div className={clsx('my-4 grid grid-cols-1 gap-4', containerClass)}>{children}</div>
    <Link url={link} className="flex items-center pl-4 xs:pl-0">
      {linkTitle} <FiArrowRight className="ml-1" />
    </Link>
  </section>
)
