import React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { NavLink } from "../src/components/atoms"

export default {
  title: "Nav Link",
  component: NavLink,
  decorators: [withA11y],
}

export const Link = () => <NavLink to="/">Home</NavLink>
