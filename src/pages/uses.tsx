import Image from 'next/image'
import clsx from 'clsx'

import { Hr, PageContainer, PageHeader } from '@/components'
import { imageUrl, siteUrl } from '@/constants/url'
import { Hardware, Software } from '@/modules/uses'

export default function Uses() {
  const title = 'Uses'
  const url = siteUrl + '/uses'

  return (
    <PageContainer seoProps={{ title, canonical: url, openGraph: { title, url } }}>
      <PageHeader title="Uses" />
      <figure
        className={clsx(
          'overflow-hidden rounded bg-gray-200 text-center',
          'transition-[background-color] duration-300',
          'dark:bg-gray-700'
        )}
      >
        <Image
          src={`${imageUrl}/main/setup-v1.1.jpg`}
          alt="A personal computer setup on the table"
          width={2016}
          height={1436}
          priority
        />
        <figcaption className="py-2 text-xs">My Setup</figcaption>
      </figure>
      <section>
        <Software />
        <Hr className="mt-4" />
        <Hardware />
      </section>
    </PageContainer>
  )
}
