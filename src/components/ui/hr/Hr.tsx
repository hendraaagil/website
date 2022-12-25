import clsx from 'clsx'

export type HrProps = {
  className?: string
  variant?: 'solid' | 'subtle'
}

export const Hr = ({ className, variant }: HrProps) => {
  if (variant === 'subtle') {
    return (
      <hr
        className={clsx('border-gray-200 transition-[border-color] duration-300 dark:border-gray-700', className)}
        aria-orientation="horizontal"
      />
    )
  }

  return <hr className={className} aria-orientation="horizontal" />
}
