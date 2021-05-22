import Link from 'next/link'

export const components = {
  a: ({ href = '', ...props }) => {
    if (href.startsWith('http')) {
      return <a {...props} href={href} target="_blank" rel="noopener" />
    }

    if (href.startsWith('#')) {
      return (
        <a
          {...props}
          href={href}
          className="ml-1 transform origin-left transition-transform ease-out duration-75 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100"
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
  h2: ({ ...props }) => {
    return <h2 {...props} data-heading className="group flex items-baseline" />
  },
  h3: ({ ...props }) => {
    return <h3 {...props} data-heading className="group flex items-baseline" />
  },
}
