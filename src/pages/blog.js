import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostList from "../components/postList"
import { Heading } from "../components/atoms"
import Contact from "../components/contact"

const Blog = () => {
  return (
    <Layout>
      <SEO title="Blog" />
      <Heading>Blog</Heading>
      <p className="mb-12 text-secondary">
        Coming soon.{" "}
        <span role="img" aria-label="sweat smile">
          😅
        </span>
      </p>
      <PostList />
      <Contact />
    </Layout>
  )
}

export default Blog
