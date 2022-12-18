import { format } from 'date-fns'

export const formatDate = (date: string) => format(new Date(date), 'dd MMMM yyyy')

export const toLowerDashed = (str: string) => str.toString().toLowerCase().replace(/\s/g, '-')

export const toTitleCase = (str: string) =>
  str.replace(/\w\S*/g, (txt: string) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase())
