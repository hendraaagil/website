import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getFilename(path: string) {
  return (
    path
      .replace(/\.mdx$/, '')
      .split(/[\\/]/)
      .at(-1) ?? ''
  )
}
