import { Project } from '@/types/project'

function ProjectCard({ project }: { project: Project }) {
  return (
    <li className="py-5">
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="focus-visible:outline-accent group"
      >
        <div className="flex justify-between px-8 py-5 -my-5 transition-colors ease-in-out -mx-7 sm:items-end hover:bg-back-secondary group-focus:bg-back-secondary">
          <div>
            <h3 className="text-xl font-semibold group-hover:text-accent">
              {project.title}
            </h3>
            <h4 className="font-medium text-fore-subtle">
              {project.description}
            </h4>
          </div>
          <span className="text-sm sm:text-base text-accent sm:text-fore-subtle">
            {project.year}
          </span>
        </div>
      </a>
    </li>
  )
}

export function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <section>
      <ul className="mt-3 divide-y divide-back-subtle">
        {projects.map(project => {
          return <ProjectCard key={project.title} project={project} />
        })}
      </ul>
    </section>
  )
}
