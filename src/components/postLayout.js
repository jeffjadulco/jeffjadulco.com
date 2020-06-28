import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import Layout from "./layout"
import SEO from "./seo"
import Contact from "./contact"
import { Heading, Paragraph, BlogTitle, BlogTitleInfo } from "./atoms"

const shortcodes = {
  h2: Heading,
  p: Paragraph,
  Link,
}

const PostLayout = ({ data: { mdx } }) => {
  return (
    <Layout>
      <SEO />
      <article>
        <div className="mb-12">
          <BlogTitle>{mdx.frontmatter.title}</BlogTitle>
          <BlogTitleInfo date={mdx.frontmatter.date} />
        </div>
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
        <Contact />
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
      }
    }
  }
`

export default PostLayout
