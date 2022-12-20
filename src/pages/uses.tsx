import Image from 'next/image'
import clsx from 'clsx'

import { Hr, PageContainer, PageHeader } from '@/components'
import { imageUrl, siteUrl } from '@/constants/url'
import { Hardware, Software } from '@/modules/uses'

export default function Uses() {
  return (
    <PageContainer seoProps={{ title: 'Uses', canonical: siteUrl + '/uses' }}>
      <PageHeader title="Uses" />
      <figure
        className={clsx(
          'overflow-hidden rounded bg-gray-200 text-center',
          'transition-[background-color] duration-300',
          'dark:bg-gray-700'
        )}
      >
        <Image
          src={`${imageUrl}/main/uses-thumb.png`}
          alt="A personal computer setup on the table"
          width={1200}
          height={630}
        />
        <figcaption className="py-2 text-xs">Photo by Fotis Fotopoulos on Unsplash</figcaption>
      </figure>
      <section>
        <Software />
        <Hr className="mt-4 border-gray-200 transition-[border-color] duration-300 dark:border-gray-700" />
        <Hardware />
      </section>
    </PageContainer>
  )
}
