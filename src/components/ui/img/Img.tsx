/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx'

export type ImgProps = {
  src: string
  alt: string
}

export const Img = ({ src, alt }: ImgProps) => (
  <figure
    className={clsx(
      'overflow-hidden rounded bg-gray-200 text-center',
      'transition-[background-color] duration-300',
      'dark:bg-gray-700'
    )}
  >
    <img src={src} alt={alt} className="w-full" />
    <figcaption className="py-2 text-xs">{alt}</figcaption>
  </figure>
)
