import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import Layout from "./layout"
import SEO from "./seo"
import {
  Heading,
  Paragraph,
  BlogTitle,
  BlogTitleInfo,
  ExtLink,
  SubHeading,
} from "./atoms"
import Newsletter from "./newsletter"

const shortcodes = {
  // h2: Heading,
  // h3: SubHeading,
  // p: Paragraph,
  ExtLink,
  Link,
}

const PostLayout = ({ data: { mdx } }) => {
  return (
    <Layout>
      <SEO blog title={mdx.frontmatter.title} description={mdx.excerpt} />
      <div className="md:grid grid-cols-4 col-gap-4 mt-12 mb-12">
        <aside className="sticky top-0 order-last">TOC</aside>
        <article className="prose col-span-3">
          <div className="">
            <BlogTitleInfo
              date={mdx.frontmatter.date}
              datetime={mdx.frontmatter.datetime}
              timeToRead={mdx.timeToRead}
            />
            <BlogTitle>{mdx.frontmatter.title}</BlogTitle>
          </div>
          <MDXProvider components={shortcodes}>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </MDXProvider>
        </article>
      </div>
      <Newsletter />
    </Layout>
  )
}

export const pageQuery = graphql`
  query blogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date(formatString: "MMMM Do YYYY")
        datetime: date
        description
      }
      excerpt(pruneLength: 140)
      timeToRead
    }
  }
`

export default PostLayout
