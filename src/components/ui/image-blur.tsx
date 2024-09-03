'use client'

import React from 'react'
import Image, { type ImageProps } from 'next/image'
import { cn } from '@/lib/utils'

export type ImageBlurProps = Omit<ImageProps, 'onLoad' | 'placeholder'> & {}

const ImageBlur = ({
	src,
	alt,
	blurDataURL,
	className,
	...rest
}: ImageBlurProps) => {
	const [blur, setBlur] = React.useState(true)
	const classNames = cn('transition-all duration-500', className, {
		'blur-md': blur,
	})
	const onComplete = () => setBlur(false)

	if (!blurDataURL) {
		return (
			<Image
				src={src}
				alt={alt}
				className={classNames}
				onLoad={onComplete}
				{...rest}
			/>
		)
	}

	return (
		<Image
			src={src}
			alt={alt}
			placeholder="blur"
			blurDataURL={blurDataURL}
			className={classNames}
			onLoad={onComplete}
			{...rest}
		/>
	)
}

export { ImageBlur }
