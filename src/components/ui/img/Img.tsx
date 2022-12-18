/* eslint-disable @next/next/no-img-element */
import React from 'react'

export type ImgProps = {
  src: string
  alt: string
}

export const Img = ({ src, alt }: ImgProps) => {
  return (
    <>
      <img src={src} alt={alt} />
      <figcaption className="py-2 text-xs">{alt}</figcaption>
    </>
  )
}
