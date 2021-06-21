import projects from '@/data/projects'

function Project({ project }) {
  return (
    <li className="py-5">
      <a
        href={project.slug}
        target="_blank"
        rel="noopener noreferrer"
        className="focus-visible:outline-accent group"
      >
        <div className="flex justify-between px-5 py-5 -mx-6 -my-5 transition-colors ease-in-out sm:items-end hover:bg-back-secondary group-focus:bg-back-secondary">
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

export function ProjectList({ showHeading }: { showHeading: boolean }) {
  return (
    <section>
      {showHeading && (
        <h2 className="mt-32 text-accent tracking-widestest">PROJECTS</h2>
      )}
      <ul className="mt-3 divide-y divide-back-subtle">
        {projects.map(project => {
          return <Project key={project.title} project={project} />
        })}
      </ul>
    </section>
  )
}
