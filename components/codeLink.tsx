'use client'

import React from 'react'

export function CodeLink({ id, index, href, children, ...props }) {
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
}
