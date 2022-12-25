import { DefaultSeoProps } from 'next-seo'
import { siteUrl as webUrl } from '@/constants/url'

const title = 'Hendra Agil'
const description = `A software developer. Born and live in Karanganyar, Central Java, Indonesia.`
const siteUrl = webUrl || 'https://hendraaagil.dev'

const config: DefaultSeoProps = {
  titleTemplate: `%s | ${title}`,
  defaultTitle: title,
  description,
  canonical: siteUrl,
  openGraph: {
    type: 'website',
    site_name: title,
    url: siteUrl,
    title,
    description,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        alt: title,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    cardType: 'summary_large_image',
    handle: '@hendraaagil',
    site: '@hendraaagil',
  },
  additionalMetaTags: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    { name: 'apple-mobile-web-app-title', content: 'Hendra Agil' },
    { name: 'application-name', content: 'Hendra Agil' },
    { name: 'msapplication-TileColor', content: '#2561cd' },
    { name: 'msapplication-config', content: '/browserconfig.xml' },
    { name: 'theme-color', content: '#eff4f6' },
  ],
  additionalLinkTags: [
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
    {
      rel: 'mask-icon',
      href: '/safari-pinned-tab.svg',
      color: '#2a61cc',
    },
  ],
}

export default config
