import { getAge } from './lib/age';

const title = 'Hendra Agil';
const description = `Hello, my name is Hendra Agil. I'm ${getAge()} years old, currently learning about web development.`;
const siteUrl = 'https://hendraaagil.space';

const SEO = {
  titleTemplate: `%s | ${title}`,
  defaultTitle: title,
  description,
  canonical: siteUrl,
  openGraph: {
    type: 'website',
    url: siteUrl,
    title,
    description,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        alt: title,
        width: 1280,
        height: 720,
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
    {
      name: 'google-site-verification',
      content: '6SMuBaTGbq2BCsaQE1DRyNo948FcJpqt9iwGibpE4e0',
    },
    { name: 'msapplication-TileColor', content: '#da532c' },
    { name: 'msapplication-config', content: '/favicon/browserconfig.xml' },
    { name: 'theme-color', content: '#ffffff' },
  ],
  additionalLinkTags: [
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/favicon/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon/favicon-16x16.png',
    },
    {
      rel: 'manifest',
      href: '/favicon/site.webmanifest',
    },
    {
      rel: 'mask-icon',
      href: '/favicon/safari-pinned-tab.svg',
      color: '#5bbad5',
    },
  ],
};

export default SEO;
