import React from 'react'

export type PageContainerProps = {
  children: React.ReactNode
}

export const PageContainer = ({ children }: PageContainerProps) => (
  <main className="mx-auto flex w-full max-w-5xl flex-col justify-center py-8 px-4 xs:p-9">{children}</main>
)
