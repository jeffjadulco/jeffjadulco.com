import { useState, useEffect } from 'react'
import classNames from 'classnames'
import useIntersectNode from '@/hooks/useIntersectionObserver'

export function QuickNav() {
  const [headings, setHeadings] = useState<HTMLHeadingElement[]>([])

  useEffect(() => {
    const headingElements: HTMLHeadingElement[] = Array.from(
      document.querySelectorAll('[data-heading]')
    )
    setHeadings(headingElements)
  }, [])

  const [activeNode] = useIntersectNode(
    ['#introduction', ...headings.map(heading => `#${heading.id}`)],
    `0% 0% -55% 0%`,
    1
  )

  // Function to determine the Heading Level based on `nodeName` (H2, H3, etc)
  const getLevel = nodeName => {
    return Number(nodeName.replace('H', ''))
  }

  return (
    <nav className="toc text-fore-subtle">
      <h2 className="mb-2 font-normal text-accent tracking-widestest">
        TABLE OF CONTENTS
      </h2>

      {headings.map(heading => {
        return (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            className={classNames(
              'block mt-3 text-sm hover:text-accent focus-visible:outline-accent',
              {
                'text-accent': heading.id === activeNode,
                'ml-3': getLevel(heading.nodeName) === 3,
              }
            )}
          >
            {heading.innerText}
          </a>
        )
      })}
    </nav>
  )
}
