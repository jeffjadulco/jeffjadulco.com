import React from "react"

const TocEntry = ({ items }) => {
  return items.map(item => {
    return (
      <>
        <a key={item.url} href={item.url} className="block text-sm">
          {item.title}
        </a>
        {item.items && <TocEntry items={item.items} />}
      </>
    )
  })
}

const TOC = ({ items }) => {
  return (
    <nav className="text-tertiary">
      <h2 className="mb-2 font-normal text-accent tracking-widestest">
        TABLE OF CONTENTS
      </h2>
      <TocEntry items={items} />
    </nav>
  )
}

export default TOC
