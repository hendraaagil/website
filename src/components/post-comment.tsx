import Giscus from '@giscus/react'

export default function PostComment() {
	return (
		<Giscus
			repo={
				import.meta.env.PUBLIC_GISCUS_REPOSITORY_NAME as `${string}/${string}`
			}
			repoId={import.meta.env.PUBLIC_GISCUS_REPOSITORY_ID}
			category={import.meta.env.PUBLIC_GISCUS_CATEGORY_NAME}
			categoryId={import.meta.env.PUBLIC_GISCUS_CATEGORY_ID}
			mapping="pathname"
			reactionsEnabled="1"
			emitMetadata="0"
			inputPosition="top"
			loading="lazy"
			theme="transparent_dark"
		/>
	)
}
