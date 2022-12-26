/* eslint-disable @next/next/no-img-element */
import { imageUrl } from '@/constants/url'

export type ImgProps = {
  src: string
  alt: string
}

export const Img = ({ src, alt }: ImgProps) => {
  let imageSource = src
  if (src.startsWith('/assets/blog')) {
    imageSource = imageUrl + src
  }

  return (
    <>
      <img src={imageSource} alt={alt} className="w-full" />
      <figcaption className="py-2 text-xs">{alt}</figcaption>
    </>
  )
}
