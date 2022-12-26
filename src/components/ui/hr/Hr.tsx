import clsx from 'clsx'

export type HrProps = {
  className?: string
}

export const Hr = ({ className }: HrProps) => (
  <hr
    className={clsx('border-gray-200 transition-[border-color] duration-300 dark:border-gray-700', className)}
    aria-orientation="horizontal"
  />
)
