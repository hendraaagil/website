import React from 'react'

export type RootContainerProps = {
  children: React.ReactNode
}

export const RootContainer = ({ children }: RootContainerProps) => (
  <div className="m-auto flex h-full min-h-screen w-full flex-col bg-brand-light text-brand-dark transition-colors dark:bg-brand-dark dark:text-brand-light">
    {children}
  </div>
)
