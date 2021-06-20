import React from 'react'
import { ProjectLink } from './atoms'
import projects from '@/data/projects'

export function ProjectGrid({
  showHeading = false,
}: {
  showHeading?: boolean
}) {
  return (
    <section className="">
      {showHeading && (
        <h2 className="mt-32 text-accent tracking-widestest">PROJECTS</h2>
      )}
      <ul className="grid gap-6 mt-3 -mx-5 md:grid-cols-2 md:gap-4">
        {projects.map(project => {
          return (
            <li
              key={project.title}
              className="relative px-6 py-5 mx-4 rounded-md group bg-back-secondary hover:bg-back-secondary"
            >
              <div className="flex justify-between pb-10 space-x-3 sm:space-x-0">
                <div>
                  <h3 className="text-xl font-semibold text-fore-primary group-hover:text-accent">
                    <a
                      href={project.slug}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-visible:outline-accent focus:text-accent"
                    >
                      {project.title}
                    </a>
                  </h3>
                  <h4 className="pr-3 mt-1 font-base text-fore-subtle">
                    {project.description}
                  </h4>
                  <div className="absolute bottom-0 flex items-center justify-start mb-5 space-x-4">
                    {project.links.map(link => {
                      return (
                        <ProjectLink
                          key={link.url}
                          label={link.label}
                          url={link.url}
                        />
                      )
                    })}
                  </div>
                </div>
                <span className="mt-1 text-xs sm:text-sm text-fore-subtle">
                  {project.year}
                </span>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
