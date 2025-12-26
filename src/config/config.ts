import type { DefaultSeoProps } from 'next-seo'
import { i18n } from '../../next-i18next.config'

export const NAME = 'Muhammad Asim'

export const config: Config = {
  isDev: process.env.NODE_ENV === 'development',
  defaultLocale: i18n.defaultLocale,
  revalidateDelay: 30,
  copyright: `© ${new Date().getFullYear()} ${NAME}`,
  seo: {
    title: `${NAME} // Full-Stack Software Developer`,
    description:
      'I build things with my mouse and keyboard. Welcome to my software developer portfolio.',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      title: `${NAME} // Full-Stack Software Developer`,
      description:
        'I build things with my mouse and keyboard. Welcome to my software developer portfolio.',
      site_name: `${NAME} // Full-Stack Software Developer`,
      images: [
        {
          url: '/img/banner.png',
          width: 1200,
          height: 630,
          alt: 'portfolio banner',
        },
      ],
    },
    twitter: {
      cardType: 'summary',
    },
    additionalMetaTags: [
      { httpEquiv: 'x-ua-compatible', content: 'IE=edge; chrome=1' },
      { property: 'msapplication-TileColor', content: '#000000' },
      { property: 'msapplication-config', content: '/icons/browserconfig.xml' },
      { property: 'theme-color', content: '#ffffff' },
    ],
    additionalLinkTags: [
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/icons/favicon.svg',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/icons/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/icons/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/icons/favicon-16x16.png',
      },
      { rel: 'manifest', href: 'site.webmanifest' },
      {
        rel: 'mask-icon',
        href: '/icons/safari-pinned-tab.svg',
        color: '#000000',
      },
      { rel: 'shortcut icon', href: '/icons/favicon.ico' },
    ],
  },
  email: 'asimshahid.rauf@gmail.com',
  email_link: 'mailto:asimshahid.rauf@gmail.com',
  github: 'https://github.com/asim-shahid',
}

interface Config {
  isDev: boolean
  defaultLocale: string
  revalidateDelay: number
  copyright: string
  seo: DefaultSeoProps
  email: string
  email_link: string
  github: string
}
