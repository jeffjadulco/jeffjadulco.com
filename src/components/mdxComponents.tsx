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
          className="underline text-fore-subtle hover:text-accent focus-visible:outline-accent focus-visible:text-accent"
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
          className="ml-1 transition-transform duration-75 ease-out origin-left transform scale-0 opacity-0 text-fore-subtle hover:text-accent group-hover:scale-100 group-hover:opacity-100 focus-visible:outline-accent focus-visible:text-accent"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
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

    return (
      <Link href={href}>
        <a
          {...props}
          className="underline text-fore-subtle hover:text-accent focus-visible:outline-accent focus-visible:text-accent"
        />
      </Link>
    )
  },
  strong: ({ ...props }) => <strong {...props} className="font-semibold" />,
  h2: ({ ...props }) => {
    return (
      <h2
        {...props}
        data-heading
        className="flex items-baseline mb-8 text-2xl font-bold leading-10 group mt-14 lg:text-3xl text-accent"
      />
    )
  },
  h3: ({ ...props }) => {
    return (
      <h3
        {...props}
        data-heading
        className="flex items-baseline mb-4 text-2xl font-bold leading-tight group mt-14 text-accent"
      />
    )
  },
  p: ({ ...props }) => {
    return <p {...props} className="my-6 leading-7 lg:leading-8" />
  },
  code: ({ children, showLineNumbers, fileName, id }) => {
    return (
      <React.Fragment>
        {fileName && <div className="w-full code-filename">{fileName}</div>}
        <code
          className={classNames('', {
            'line-numbers': showLineNumbers !== undefined,
          })}
          id={id}
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
        className="px-5 py-2 my-6 text-base border-l-2 lg:-ml-6 bg-back-secondary border-accent"
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
  CodeLink: ({ id, index, href, children, ...props }) => {
    const isExternal = href.startsWith('http')
    React.useEffect(() => {
      const codeblock = document.getElementById(id)
      if (!codeblock) return

      const allHighlightWords = codeblock.querySelectorAll('.highlight-word')
      const target = allHighlightWords[index - 1]
      if (!target) return

      target.replaceWith(
        Object.assign(document.createElement('a'), {
          href,
          innerHTML: target.innerHTML,
          className: target.className,
          ...(isExternal ? { target: '_blank', rel: 'noopener' } : {}),
        })
      )
    }, [])

    return null
  },
}
