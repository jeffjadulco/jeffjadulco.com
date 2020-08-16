import React from "react"
import { Heading } from "./atoms"

const SkillGrid = ({
  heading = "",
  description = "",
  categories = [],
  className = "",
}) => {
  return (
    <section className={`${className} mb-4`}>
      <Heading>{heading}</Heading>
      <p className="-mt-3 mb-8 text-tertiary">{description}</p>
      <ul className="mt-3 grid md:grid-cols-2 col-gap-10 row-gap-10">
        {categories.map(category => {
          return (
            <li key={category.title}>
              <div>
                <h3 className="text-xl font-semibold text-primary group-hover:text-accent">
                  {category.title}
                </h3>
                <ul className="mt-1 space-y-2">
                  {category.skills.map(skill => {
                    return <li className="text-tertiary">{skill}</li>
                  })}
                </ul>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default SkillGrid
