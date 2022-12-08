import React from 'react'

export type ContainerProps = {
  children: React.ReactNode
}

export const Container = ({ children }: ContainerProps) => (
  <div className="m-auto flex h-full min-h-screen w-full flex-col bg-brand-light text-brand-dark dark:bg-brand-dark dark:text-brand-light">
    {children}
  </div>
)
