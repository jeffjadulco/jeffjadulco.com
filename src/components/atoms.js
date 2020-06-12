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

export const ExtLink = ({ children, link, newTab }) => {
  if (newTab) {
    return (
      <a
        href={link}
        className="font-bold text-secondary"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    )
  } else {
    return (
      <a href={link} className="font-bold text-secondary">
        {children}
      </a>
    )
  }
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

export const Blob = _ => {
  return (
    <div>
      <div className="blob absolute">
        <svg
          className="blob-rotate h-64 text-fill-secondary fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 412.3 354.7"
        >
          <path d="M320.8 58.4c47.1 38.8 97.8 95 90.8 143s-71.7 87.7-138.3 117.2c-66.5 29.5-134.7 48.7-186.4 26.5C35.3 322.9.3 259.3 0 203.3-.3 147.4 34.1 99.2 71 62.8 107.9 26.3 147.2 1.7 188.7.1c41.4-1.7 84.9 19.6 132.1 58.3z"></path>
        </svg>
      </div>
    </div>
  )
}

export const Blob2 = _ => {
  return (
    <div>
      <div className="blob absolute">
        <svg
          className="blob-rotate h-64 text-fill-secondary fill-current"
          viewBox="0 0 715 693"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M359.408 0.499261C434.083 0.69572 509.059 15.4608 570.136 58.4268C631.828 101.825 675.247 166.543 697.772 238.528C720.119 309.946 720.46 387.141 695.015 457.515C670.121 526.365 618.875 581.064 558.794 622.901C499.694 664.055 431.329 687.499 359.408 691.212C284.339 695.087 205.553 688.115 144.481 644.291C83.2293 600.338 54.1113 526.936 30.6392 455.293C7.11277 383.484 -10.9409 307.559 10.4113 235.074C32.1072 161.421 84.1477 100.148 147.872 57.3159C209.988 15.5657 284.566 0.302364 359.408 0.499261Z" />
        </svg>
      </div>
    </div>
  )
}
