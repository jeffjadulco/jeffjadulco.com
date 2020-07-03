import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectList from "../components/projectList"
import { Heading } from "../components/atoms"
import Contact from "../components/contact"

const Projects = () => {
  return (
    <Layout>
      <SEO title="Projects" />
      <Heading>Projects</Heading>
      <p className="mb-12 text-secondary">
        Collection of web and game development side projects.
      </p>
      <ProjectList />
      <Contact />
    </Layout>
  )
}

export default Projects
