'use client'

import Giscus from '@giscus/react'
import { useTheme } from 'next-themes'

export const Comment = () => {
	const { resolvedTheme } = useTheme()

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
			theme={resolvedTheme === 'light' ? 'light' : 'dark_dimmed'}
		/>
	)
}
