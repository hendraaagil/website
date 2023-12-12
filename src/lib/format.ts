import { format } from 'date-fns'

export const formatFullDate = (date: string) =>
  format(new Date(date), 'MMMM d, yyyy')

export const toTitleCase = (str: string) =>
  str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase(),
  )
