import React from "react"

const MockProjects = [
  {
    slug: "https://jeffjadulco.now.sh/",
    title: "jeffjadulco.com",
    description: "My personal website made with React and Gatsby.",
    year: "2020",
  },
  {
    slug: "https://github.com/jeffjadulco/training-react-todo-app",
    title: "to do app",
    description: "My first time with React",
    year: "2020",
  },
  {
    slug: "https://github.com/jeffjadulco/unity-guid-regenerator",
    title: "unity-guid-regenerator",
    description: "An editor tool I made to regenerate GUID of Unity assets",
    year: "2020",
  },
  {
    slug: "https://globalgamejam.org/2016/games/abducktion",
    title: "Abducktion",
    description: "Global Game Jam 2016 entry. Made with friends.",
    year: "2016",
  },
]

const ProjectList = () => {
  return (
    <section className="mt-32">
      <h2 className="font-light font-medium text-lg text-accent tracking-widestest">
        PROJECTS
      </h2>
      <ul className="mt-3 divide-y-2 divide-subtle">
        {MockProjects.map(project => {
          return (
            <li key={project.title} className="py-3">
              <a href={project.slug} target="_blank" rel="noopener noreferrer">
                <div className="group flex justify-between items-end">
                  <div>
                    <h3 className="text-2xl font-semibold group-hover:text-accent">
                      {project.title}
                    </h3>
                    <h4 className="text-lg font-medium text-tertiary">
                      {project.description}
                    </h4>
                  </div>
                  <span className="text-tertiary">{project.year}</span>
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
