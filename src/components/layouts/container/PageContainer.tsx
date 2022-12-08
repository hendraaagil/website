import React from 'react'

export type PageContainerProps = {
  children: React.ReactNode
}

export const PageContainer = ({ children }: PageContainerProps) => (
  <main className="flex h-screen flex-col justify-center text-center">{children}</main>
)
