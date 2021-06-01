import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import classNames from 'classnames'

export const components = {
  Image,
  a: ({ href = '', ...props }) => {
    if (href.startsWith('http')) {
      return (
        <a
          {...props}
          className="text-tertiary hover:text-accent underline"
          href={href}
          target="_blank"
          rel="noopener"
        />
      )
    }

    if (href.startsWith('#')) {
      return (
        <a
          {...props}
          href={href}
          className="ml-1 text-tertiary hover:text-accent transform origin-left transition-transform ease-out duration-75 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      )
    }

    return <Link href={href} />
  },
  strong: ({ ...props }) => <strong {...props} className="font-semibold" />,
  h2: ({ ...props }) => {
    return (
      <h2
        {...props}
        data-heading
        className="group flex items-baseline mt-14 mb-8 text-2xl lg:text-3xl leading-10 font-bold text-accent"
      />
    )
  },
  h3: ({ ...props }) => {
    return (
      <h3
        {...props}
        data-heading
        className="group flex items-baseline mt-14 mb-4 text-2xl leading-tight font-bold text-accent"
      />
    )
  },
  p: ({ ...props }) => {
    return <p {...props} className="my-6 leading-7 lg:leading-8" />
  },
  code: ({ children, showLineNumbers, fileName }) => {
    return (
      <React.Fragment>
        {fileName && <div className="code-filename w-full">{fileName}</div>}
        <code
          className={classNames('', {
            'line-numbers': showLineNumbers !== undefined,
          })}
        >
          {children}
        </code>
      </React.Fragment>
    )
  },
  em: ({ ...props }) => {
    return <em {...props} className="italic" />
  },
  hr: ({ ...props }) => {
    return <hr {...props} className="my-10 border-accent" />
  },
  blockquote: ({ ...props }) => {
    return (
      <blockquote
        {...props}
        className="lg:-ml-6 my-6 px-5 py-2 bg-secondary border-l-2 border-accent text-base"
      />
    )
  },
  ul: (props: any) => (
    <ul className="mb-4 leading-relaxed list-disc list-inside" {...props} />
  ),
  ol: (props: any) => (
    <ol className="pl-4 my-6 leading-7 list-decimal" {...props} />
  ),
  li: (props: any) => <li className="mt-3" {...props} />,
}
