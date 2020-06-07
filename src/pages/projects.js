import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectList = [
  {
    icon: "📝",
    title: "To do app",
    path: "https://jeffjads-todo-app-react.netlify.app/",
    source: "https://github.com/jeffjadulco/training-react-todo-app",
    description: "A simple to do app made with React.",
    year: "2020",
    tags: ["reactjs", "tailwindcss"],
  },
  {
    icon: "🆔",
    title: "Unity GUID Regenerator",
    source: "https://github.com/jeffjadulco/unity-guid-regenerator",
    description: "GUID regenerator for Unity assets",
    year: "2020",
    tags: ["unity", "gamedev"],
  },
]

const ProjectCard = ({ project }) => {
  return (
    <div className="mb-6 px-6 py-4 rounded-sm bg-tertiary">
      <div className=" mb-1 space-x-2">
        <span className="text-xl">{project.icon}</span>
        <span className="text-lg font-sans font-medium text-primary">
          <a href={project.source}>{project.title}</a>
        </span>
      </div>
      <div className=" mb-4 text-secondary text-sm">{project.description}</div>
      <div className="flex justify-between">
        {project.source && (
          <span>
            <a href={project.source} className="text-sm">
              View Source
            </a>
          </span>
        )}
        <div className="space-x-1">
          {project.tags.map(tag => {
            return (
              <span className=" px-2 py-1 rounded-sm bg-primary text-xs">
                {tag}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}

const Projects = () => {
  return (
    <Layout>
      <SEO title="Projects" />
      <h1 className="mt-12 mb-2 text-2xl font-serif font-medium text-primary">
        Projects
      </h1>
      <h2 className="mb-4 text-secondary">
        Combination of game and web development side-projects.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
        {ProjectList.map(project => {
          console.log(project)
          return <ProjectCard key={project.title} project={project} />
        })}
      </div>
    </Layout>
  )
}

export default Projects
