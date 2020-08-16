import React from "react"
import projects from "../data/projects"

const ProjectList = ({ showHeading }) => {
  return (
    <section className="">
      {showHeading && (
        <h2 className="mt-32 font-normal text-accent tracking-widestest">
          PROJECTS
        </h2>
      )}
      <ul className="mt-3 divide-y divide-subtle">
        {projects.map(project => {
          return (
            <li key={project.title} className="py-3">
              <a href={project.slug} target="_blank" rel="noopener noreferrer">
                <div className="-mx-5 -my-3 px-5 py-3 group flex justify-between sm:items-end space-x-3 sm:space-x-0 hover:bg-secondary">
                  <div>
                    <h3 className="text-xl font-semibold text-primary group-hover:text-accent">
                      {project.title}
                    </h3>
                    <h4 className="font-medium text-tertiary">
                      {project.description}
                    </h4>
                  </div>
                  <span className="text-sm sm:text-base text-accent sm:text-tertiary">
                    {project.year}
                  </span>
                </div>
              </a>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default ProjectList
