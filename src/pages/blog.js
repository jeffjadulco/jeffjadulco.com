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
        I write about things I learn in web development and also stuff that I
        find interesting that you might enjoy.
      </p>
      <PostList />
      <Contact />
    </Layout>
  )
}

export default Blog
