import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'
import classNames from 'classnames'
import Link from 'next/link'

export const NavLink = ({ to, title = 'Link', selected = false, ...props }) => {
  return (
    <Link {...props} href={to}>
      <a
        className={classNames(
          'font-semibold tracking-wide text-sm hover:text-accent transition duration-150',
          {
            'text-accent': selected,
            'text-secondary': !selected,
          }
        )}
      >
        {title}
      </a>
    </Link>
  )
}

export const Heading = ({ children }) => {
  return (
    <h2 className="relative mt-12 mb-3 text-3xl font-bold text-accent">
      {children}
    </h2>
  )
}

export const InlinePageLink = ({ to, children, title = 'Link' }) => {
  return (
    <Link href={to}>
      <a className="text-base font-medium text-accent hover:text-accent hover:underline">
        {children}
      </a>
    </Link>
  )
}

export const Strong = ({ children }) => {
  return <strong className="font-semibold text-accent">{children}</strong>
}

export const ExtLink = ({
  children,
  link,
  newTab = false,
}: {
  children: React.ReactNode
  link: string
  newTab?: boolean
}) => {
  if (newTab) {
    return (
      <a
        href={link}
        className="font-medium text-accent hover:text-accent hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    )
  } else {
    return (
      <a
        href={link}
        className="font-medium text-accent hover:text-accent hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    )
  }
}

export const ProjectLink = ({ label, url }) => {
  return (
    <span className="font-medium text-tertiary hover:text-accent">
      <a href={url} target="_blank" rel="noopener noreferrer">
        {label}
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          className="inline-block w-4 h-4 mb-1"
        >
          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
        </svg>
      </a>
    </span>
  )
}

export const Button = ({ children, link, width, ...props }) => {
  let padding = 'px-4 py-2'

  if (width === 'wide') {
    padding = 'px-8 py-2'
  } else if (width === 'wider') {
    padding = 'px-16 py-2'
  } else if (width === 'widest') {
    padding = 'px-20 py-2'
  }

  const className = `${padding} rounded accent-gradient text-on-accent`

  return (
    <a
      {...props}
      className={className}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

export const Blob = () => {
  return (
    <div aria-hidden="true">
      <div className="relative h-48 blob md:h-56 lg:h-64">
        <svg
          className="h-full fill-current blob-rotate-faster text-fill-primary"
          viewBox="0 0 278 279"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M137.896 0.127761C167.59 -0.638578 198.383 1.62824 222.877 18.4301C247.738 35.4836 263.129 63.014 271.706 91.9151C280.118 120.258 280.513 150.661 270.364 178.43C260.457 205.538 239.342 225.92 216.353 243.372C192.903 261.174 167.336 278.631 137.896 278.994C108.28 279.358 81.0666 263.928 58.0226 245.322C35.8955 227.455 20.5343 203.415 11.0775 176.594C1.41508 149.191 -4.23875 119.749 3.91245 91.8587C12.2111 63.4638 31.6331 39.4483 56.0438 22.7357C79.9856 6.34414 108.89 0.876363 137.896 0.127761Z" />
        </svg>
      </div>
    </div>
  )
}

export const BlobHeader = () => {
  return (
    <div aria-hidden="true">
      <div className="absolute blob-bg">
        <svg
          className="block h-64 m-auto fill-current blob-rotate text-fill-secondary"
          viewBox="0 0 715 693"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M359.408 0.499261C434.083 0.69572 509.059 15.4608 570.136 58.4268C631.828 101.825 675.247 166.543 697.772 238.528C720.119 309.946 720.46 387.141 695.015 457.515C670.121 526.365 618.875 581.064 558.794 622.901C499.694 664.055 431.329 687.499 359.408 691.212C284.339 695.087 205.553 688.115 144.481 644.291C83.2293 600.338 54.1113 526.936 30.6392 455.293C7.11277 383.484 -10.9409 307.559 10.4113 235.074C32.1072 161.421 84.1477 100.148 147.872 57.3159C209.988 15.5657 284.566 0.302364 359.408 0.499261Z" />
        </svg>
      </div>
    </div>
  )
}

export const Input = ({
  labelText,
  name,
  ...props
}: { labelText: string } & InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className="group">
      <label
        className="text-sm font-medium transition-colors duration-200 text-secondary group-hover:text-accent"
        htmlFor={name}
      >
        {labelText}
      </label>
      <input
        className="block w-full p-3 mt-1 border outline-none border-subtle bg-primary focus:border-accent text-primary disabled:opacity-50"
        name={name}
        {...props}
      />
    </div>
  )
}

export const TextArea = ({
  labelText,
  name,
  ...props
}: { labelText: string } & TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <div className="group">
      <label
        className="text-sm font-medium transition-colors duration-200 text-secondary group-hover:text-accent"
        htmlFor={name}
      >
        {labelText}
      </label>
      <textarea
        className="block w-full p-3 mt-1 border outline-none border-subtle bg-primary focus:border-accent text-primary disabled:opacity-50"
        style={{ minHeight: '80px' }}
        name={name}
        {...props}
      />
    </div>
  )
}
