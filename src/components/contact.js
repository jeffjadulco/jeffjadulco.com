import React from "react"
import { ExtLink, Button } from "./atoms"

export const Contact = () => {
  return (
    <div className="full-width-container bg-tertiary">
      <div className="container max-w-screen-xl mx-auto pt-10 pb-12 text-gray-900">
        <h1 className="text-3xl font-semibold text-center text-primary">
          Get in touch 👋
        </h1>
        <p className="mt-4 text-center text-secondary">
          Feel free to email me about anything. Want some advice? Give some
          feedback?
        </p>
        <p className="mt-1 text-center text-secondary">
          You can also reach me around the web: <ExtLink>GitHub</ExtLink>,{" "}
          <ExtLink>Twitter</ExtLink>, <ExtLink>Instagram</ExtLink>
        </p>
        <div className="mx-auto  pt-10 flex justify-center">
          <Button
            width="widest"
            onClick={e =>
              (window.location = "mailto:jeffjadulco.work@gmail.com")
            }
          >
            <span className=" text-2xl font-semibold text-on-accent">
              Say hello
            </span>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Contact
