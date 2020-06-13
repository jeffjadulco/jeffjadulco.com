import React from "react"
import { Link } from "gatsby"

import { Blob } from "../components/atoms"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostList from "../components/postList"
import ProjectList from "../components/projectList"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="mt-12 flex flex-col-reverse lg:flex-row items-center lg:justify-between space-x-6">
      <h1 className="mt-12 lg:mt-0 max-w-3xl text-3xl sm:text-4xl text-primary font-semibold tracking-wider sm:text-left md:text-center lg:text-left">
        Hi, I’m Jeff.
        <br className="mb-6 lg:hidden" /> I’m an experienced game developer with
        deep interest in modern web development.
      </h1>
      <div className="">
        <Blob />
      </div>
    </div>
    <PostList />
    <ProjectList />
    <Contact />
  </Layout>
)

export default IndexPage
