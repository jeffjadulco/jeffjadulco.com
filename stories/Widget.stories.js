import React from "react"
import { withA11y } from "@storybook/addon-a11y"
import Contact from "../src/components/contact"
import Header from "../src/components/header"
import Footer from "../src/components/footer"

export default {
  title: "Widgets",
  decorator: [withA11y],
}

export const ContactWidget = _ => <Contact />
export const HeaderWidget = _ => <Header />
export const FooterWidget = _ => <Footer />
