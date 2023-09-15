import clsx from 'clsx'
import Image, { ImageProps } from 'next/image'
import React, { useState } from 'react'

export type ImgBlurProps = Omit<ImageProps, 'onLoadingComplete' | 'placeholder'> & {}

export const ImgBlur = ({ src, alt, blurDataURL, className, ...rest }: ImgBlurProps) => {
  const [blur, setBlur] = useState(true)
  const classNames = clsx(className, blur ? 'blur' : '')
  const onComplete = () => setBlur(false)

  if (!blurDataURL) {
    return <Image src={src} alt={alt} className={classNames} onLoadingComplete={onComplete} {...rest} />
  }

  return (
    <Image
      src={src}
      alt={alt}
      placeholder="blur"
      blurDataURL={blurDataURL}
      className={classNames}
      onLoadingComplete={onComplete}
      {...rest}
    />
  )
}
