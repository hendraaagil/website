import React from 'react'
import { Heading } from '@/components'

export type PageHeaderProps = {
  title: string
}

export const PageHeader = ({ title }: PageHeaderProps) => (
  <>
    <Heading variant="h1">{title}</Heading>
    <hr className="my-5" aria-orientation="horizontal" />
  </>
)
