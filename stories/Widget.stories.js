import React from "react"
import { withA11y } from "@storybook/addon-a11y"
import Contact from "../src/components/contact"
import Header from "../src/components/header"
import Footer from "../src/components/footer"
import { Blob } from "../src/components/atoms"
import PostList from "../src/components/postList"
import ProjectList from "../src/components/projectList"
import Image from "../src/components/image"

export default {
  title: "Widgets",
  decorator: [withA11y],
}

export const ContactWidget = _ => <Contact />
export const HeaderWidget = _ => <Header />
export const FooterWidget = _ => <Footer />
export const BlobWidget = _ => <Blob />
export const PostListWidget = _ => <PostList />
export const ProjectListWidget = _ => <ProjectList />
export const ImageWidget = _ => <Image />
