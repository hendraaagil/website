export type HrProps = {
  className?: string
}

export const Hr = ({ className }: HrProps) => <hr className={className} aria-orientation="horizontal" />
