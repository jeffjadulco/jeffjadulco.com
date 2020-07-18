import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import Layout from "./layout"
import SEO from "./seo"
import { BlogTitle, BlogTitleInfo, ExtLink } from "./atoms"
import Newsletter from "./newsletter"
import TOC from "./toc"

const shortcodes = {
  ExtLink,
  Link,
}

const PostLayout = ({ data: { mdx } }) => {
  return (
    <Layout activePage="blog">
      <SEO blog title={mdx.frontmatter.title} description={mdx.excerpt} />
      <div className="flex justify-between mt-12 mb-12 relative">
        <article className="prose sm:prose md:prose-lg min-w-0 max-w-none">
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
        {mdx.tableOfContents && mdx.frontmatter.toc === true && (
          <aside className="sticky hidden lg:block max-w-xs ml-6 mt-6 h-screen">
            <TOC items={mdx.tableOfContents.items} />
          </aside>
        )}
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
        toc
      }
      excerpt(pruneLength: 140)
      tableOfContents
      timeToRead
    }
  }
`

export default PostLayout
