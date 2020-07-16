import React from "react"
import { action } from "@storybook/addon-actions"
import { withA11y } from "@storybook/addon-a11y"
import TOC from "../src/components/toc"

export default {
  title: "Blog",
  decorators: [withA11y],
}

const DataTOC = [
  {
    url: "#introduction",
    title: "Introduction",
  },
  {
    url: "#adding-our-css-variables",
    title: "Adding our CSS variables",
  },
  {
    url: "#extending-tailwindcss",
    title: "Extending TailwindCSS",
  },
  {
    url: "#adding-a-toggle",
    title: "Adding a toggle",
    items: [
      {
        url: "#getting-the-initial-theme",
        title: "Getting the initial theme",
      },
      {
        url: "#creating-our-context",
        title: "Creating our context",
      },
      {
        url: "#using-the-context-provider",
        title: "Using the context provider",
      },
      {
        url: "#adding-the-toggle-functionality",
        title: "Adding the toggle functionality",
      },
    ],
  },
]

export const TableOfContents = _ => {
  return (
    <aside className="prose">
      <TOC items={DataTOC} />
    </aside>
  )
}
