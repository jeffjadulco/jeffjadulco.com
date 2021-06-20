import Head from 'next/head'
import { siteMetadata } from '@/config'

type SEOProps = {
  title?: string
  description?: string
  ogImage?: string
  blog?: boolean
}

export function SEO({ title, description, blog, ogImage }: SEOProps) {
  const {
    title: defaultTitle,
    author,
    description: defaultDescription,
    image,
    siteUrl,
    twitterUsername,
  } = siteMetadata

  const seo = {
    title: title || defaultTitle,
    titleTemplate: title
      ? `${title} | ${defaultTitle}`
      : `${defaultTitle} | Game and Web Developer`,
    description: description || defaultDescription,
    image: `${siteUrl}${blog ? ogImage : image}`,
    url: `${siteUrl}`,
  }

  return (
    <Head>
      <title>{seo.titleTemplate}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:site_name" content={seo.title} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:image" content={seo.image} />
      <meta property="twitter:creator" content={twitterUsername} />
      <meta property="twitter:title" content={seo.title} />
      <meta property="twitter:description" content={seo.description} />
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Website',
          url: seo.url,
          name: seo.title,
        })}
      </script>
    </Head>
  )
}
