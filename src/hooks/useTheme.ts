import { useTheme as useNextTheme } from 'next-themes'

export const useTheme = () => {
  const { theme, systemTheme, setTheme } = useNextTheme()
  const isLight = (theme === 'system' && systemTheme === 'light') || theme === 'light'
  return { isLight, setTheme }
}
