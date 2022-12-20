import Giscus from '@giscus/react'
import { useTheme } from '@/hooks'

export const Comment = () => {
  const { isLight } = useTheme()

  return (
    <Giscus
      repo="hendraaagil/website"
      repoId="MDEwOlJlcG9zaXRvcnkzNjg4MDQwNDI="
      category="General"
      categoryId="DIC_kwDOFfuAys4CAJMi"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      loading="lazy"
      theme={isLight ? 'light' : 'dark_dimmed'}
    />
  )
}
