import clsx from 'clsx'

import { Hr, ImgBlur, PageContainer, PageHeader } from '@/components'
import { siteUrl } from '@/constants/url'
import { Hardware, Software } from '@/modules/uses'
import { generateBase64Image } from '@/libs/image'

export const getStaticProps = async () => {
  const setupUrl = '/assets/main/setup-v1.2.png'
  const placeholder = await generateBase64Image(setupUrl)

  return { props: { setup: { url: setupUrl, placeholder } } }
}

export type UsesProps = {
  setup: { url: string; placeholder: string }
}

export default function Uses({ setup }: UsesProps) {
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
        <ImgBlur
          src={setup.url}
          alt="A personal computer setup on the table"
          width={2560}
          height={1632}
          blurDataURL={setup.placeholder}
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
