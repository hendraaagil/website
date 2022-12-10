import Image from 'next/image'

import bio from '@/_data/bio.json'
import logo from '@/assets/img/ha-logo.png'
import { Heading } from '@/components'

export const Hero = () => {
  const { description, name, title } = bio

  return (
    <div className="flex flex-col-reverse items-start justify-between sm:flex-row sm:items-center">
      <div className="flex max-w-md flex-col">
        <Heading variant="h1">{name}</Heading>
        <p className="mt-1 text-lg font-semibold">{title}</p>
        <p className="mt-3">{description}</p>
      </div>
      <div className="w-24 pb-6 sm:mx-auto sm:w-32 sm:px-4 sm:pb-0">
        <Image src={logo} alt={`Hendra Agil's Logo`} width={128} height={128} />
      </div>
    </div>
  )
}
