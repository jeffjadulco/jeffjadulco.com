import React from "react"

const TocEntry = ({ items, depth = 0 }) => {
  return items.map(item => {
    const style = `block mt-3 text-sm hover:text-accent ml-${depth * 3}`
    return (
      <>
        <a key={item.url} href={item.url} className={style}>
          {item.title}
        </a>
        {item.items && <TocEntry items={item.items} depth={depth + 1} />}
      </>
    )
  })
}

const TOC = ({ items }) => {
  return (
    <nav className="toc text-tertiary">
      <h2 className="mb-2 font-normal text-accent tracking-widestest">
        TABLE OF CONTENTS
      </h2>
      <TocEntry items={items} />
    </nav>
  )
}

export default TOC
