/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title, blog, ogImage }) {
  const { site, image, blogImage } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle: title
            defaultDescription: description
            author
            siteUrl
            twitterUsername
          }
        }
        image: file(relativePath: { eq: "og-card.png" }) {
          childImageSharp {
            fixed(width: 1280) {
              src
            }
          }
        }
        blogImage: file(relativePath: { eq: "og-card-blog.png" }) {
          childImageSharp {
            fixed(width: 1280) {
              src
            }
          }
        }
      }
    `
  )

  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    twitterUsername,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    titleTemplate: title
      ? `%s | ${defaultTitle}`
      : `${defaultTitle} | Game and Javascript Developer`,
    description: description || defaultDescription,
    image: `${siteUrl}${
      blog
        ? ogImage || blogImage.childImageSharp.fixed.src
        : image.childImageSharp.fixed.src
    }`,
    url: `${siteUrl}`,
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={seo.title}
      titleTemplate={seo.titleTemplate}
      meta={[
        {
          name: `description`,
          content: seo.description,
        },
        {
          name: `image`,
          content: seo.image,
        },
        {
          property: `og:title`,
          content: seo.title,
        },
        {
          property: `og:url`,
          content: seo.url,
        },
        {
          property: `og:description`,
          content: seo.description,
        },
        {
          property: `og:image`,
          content: seo.image,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:image`,
          content: seo.image,
        },
        {
          name: `twitter:creator`,
          content: twitterUsername,
        },
        {
          name: `twitter:title`,
          content: seo.title,
        },
        {
          name: `twitter:description`,
          content: seo.description,
        },
      ].concat(meta)}
    >
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Website",
          url: seo.url,
          name: seo.title,
        })}
      </script>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export default SEO
