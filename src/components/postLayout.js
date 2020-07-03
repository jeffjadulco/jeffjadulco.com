import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import Layout from "./layout"
import SEO from "./seo"
import { Heading, Paragraph, BlogTitle, BlogTitleInfo, ExtLink } from "./atoms"
import Newsletter from "./newsletter"

const shortcodes = {
  h2: Heading,
  p: Paragraph,
  ExtLink,
  Link,
}

const PostLayout = ({ data: { mdx } }) => {
  return (
    <Layout>
      <SEO blog title={mdx.frontmatter.title} description={mdx.excerpt} />
      <article>
        <div className="mt-12 mb-12">
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
        <Newsletter />
      </article>
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
