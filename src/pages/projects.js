import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Heading } from "../components/atoms"
import Contact from "../components/contact"
import ProjectGrid from "../components/projectGrid"

const Projects = () => {
  return (
    <Layout activePage="projects">
      <SEO title="Projects" />
      <Heading>Projects</Heading>
      <p className="mb-12 text-secondary">
        Collection of web and game development side projects.
      </p>
      <ProjectGrid />
      <Contact />
    </Layout>
  )
}

export default Projects
