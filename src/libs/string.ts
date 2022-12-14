export const toLowerDashed = (string: string) => string.toString().toLowerCase().replace(/\s/g, '-')

export const toTitleCase = (str: string) =>
  str.replace(/\w\S*/g, (txt: string) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase())
