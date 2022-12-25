import React from 'react'
import { Heading, Hr } from '@/components'

export type PageHeaderProps = {
  title: string
}

export const PageHeader = ({ title }: PageHeaderProps) => (
  <>
    <Heading variant="h1">{title}</Heading>
    <Hr className="my-4" />
  </>
)
