import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostList from "../components/postList"
import { Heading } from "../components/atoms"
import Newsletter from "../components/newsletter"

const Blog = () => {
  return (
    <Layout activePage="blog">
      <SEO title="Blog" />
      <Heading>Blog</Heading>
      <p className="mb-12 text-secondary">
        I write about things I learn in web development and also stuff that I
        find interesting.
      </p>
      <PostList />
      <Newsletter />
    </Layout>
  )
}

export default Blog
