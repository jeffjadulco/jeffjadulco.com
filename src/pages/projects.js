import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Heading } from "../components/atoms"
import Contact from "../components/contact"
import ProjectGrid from "../components/projectGrid"
import SkillGrid from "../components/skillGrid"
import skills from "../data/skills"

const Projects = () => {
  return (
    <Layout activePage="projects">
      <SEO title="Projects" />
      <Heading>Projects</Heading>
      <p className="-mt-3 mb-8 text-tertiary">
        Collection of web and game development side projects.
      </p>
      <ProjectGrid />
      <div className="mt-12 flex flex-col space-y-0">
        {skills.map(data => {
          return (
            <SkillGrid
              key={data.label}
              heading={data.label}
              description={data.description}
              categories={data.categories}
            />
          )
        })}
      </div>
      <Contact />
    </Layout>
  )
}

export default Projects
