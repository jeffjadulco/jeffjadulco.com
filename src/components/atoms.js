import React from "react"
import { Link } from "gatsby"

export const NavLink = ({ to, children }) => {
  return (
    <Link to={to}>
      <span className="font-normal text-base text-secondary">{children}</span>
    </Link>
  )
}

export const Heading = ({ children }) => {
  return (
    <h1 className="mt-12 mb-2 text-2xl font-semibold text-accent">
      {children}
    </h1>
  )
}

export const Paragraph = ({ children }) => {
  return (
    <p className=" max-w-screen-md mb-4 font-normal text-base leading-relaxed md:leading-normal text-secondary">
      {children}
    </p>
  )
}

export const Strong = ({ children }) => {
  return <strong className="font-bold text-secondary">{children}</strong>
}

export const ExtLink = ({ children, link }) => {
  return (
    <a href={link} className="font-bold text-secondary">
      {children}
    </a>
  )
}

export const Button = ({ children, onClick, width }) => {
  let padding = "px-4 py-2"

  if (width === "wide") {
    padding = "px-8 py-2"
  } else if (width === "wider") {
    padding = "px-16 py-2"
  } else if (width === "widest") {
    padding = "px-20 py-2"
  }

  const className = `${padding} rounded bg-accent hover:bg-hover-accent text-on-accent`

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}
