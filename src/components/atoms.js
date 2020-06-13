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
      <div className="relative blob h-48 md:h-56 lg:h-64">
        <svg
          className="blob-rotate-faster h-full text-fill-primary fill-current"
          viewBox="0 0 278 279"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M137.896 0.127761C167.59 -0.638578 198.383 1.62824 222.877 18.4301C247.738 35.4836 263.129 63.014 271.706 91.9151C280.118 120.258 280.513 150.661 270.364 178.43C260.457 205.538 239.342 225.92 216.353 243.372C192.903 261.174 167.336 278.631 137.896 278.994C108.28 279.358 81.0666 263.928 58.0226 245.322C35.8955 227.455 20.5343 203.415 11.0775 176.594C1.41508 149.191 -4.23875 119.749 3.91245 91.8587C12.2111 63.4638 31.6331 39.4483 56.0438 22.7357C79.9856 6.34414 108.89 0.876363 137.896 0.127761Z" />
        </svg>
      </div>
    </div>
  )
}

export const Blob2 = _ => {
  return (
    <div>
      <div className="blob-bg absolute">
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
