import Image from 'next/image'
import { useState } from 'react'

import bio from '@/_data/bio.json'
import { Heading } from '@/components'
import { imageUrl } from '@/constants/url'

export const Hero = () => {
  const { description, name, title } = bio
  const [blur, setBlur] = useState(true)

  return (
    <div className="flex flex-col-reverse items-start justify-between px-4 xs:px-0 sm:flex-row sm:items-center">
      <div className="flex max-w-md flex-col">
        <Heading variant="h1">{name}</Heading>
        <p className="mt-1 text-lg font-semibold">{title}</p>
        <p className="mt-3">{description}</p>
      </div>
      <div className="w-24 pb-6 sm:mx-auto sm:w-32 sm:px-4 sm:pb-0">
        <Image
          src={`${imageUrl}/main/ha-logo.png`}
          alt={`Hendra Agil's Logo`}
          width={128}
          height={128}
          className={blur ? 'blur' : ''}
          onLoadingComplete={() => setBlur(false)}
        />
      </div>
    </div>
  )
}
