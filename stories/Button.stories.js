import React from "react"
import { action } from "@storybook/addon-actions"
import { withA11y } from "@storybook/addon-a11y"
import { select, withKnobs } from "@storybook/addon-knobs"
import { Button } from "../src/components/atoms"

export default {
  title: "Buttons",
  decorators: [withA11y, withKnobs],
}

const paddingOptions = ["normal", "wide", "wider", "widest"]

export const ButtonDefault = _ => {
  return (
    <Button
      onClick={action("onButtonClicked")}
      width={select("Padding", paddingOptions, "normal")}
    >
      <span className="text-2xl font-semibold">Say hello</span>
    </Button>
  )
}
