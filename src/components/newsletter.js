import React from "react"
import { Button } from "./atoms"

export const Newsletter = () => {
  return (
    <div className="mt-32 full-width-container bg-secondary">
      <div className="container max-w-screen-xl mx-auto pt-16 text-gray-900">
        <h1 className="px-4 text-3xl font-semibold text-center text-primary">
          Subscribe to my Newsletter{" "}
          <span role="img" aria-label="letter with love">
            💌
          </span>
        </h1>
        <p className="px-4 mx-auto mt-4 text-center text-secondary break-all">
          I post about front-end web development,
          <br className="md:hidden" />
           productivity, and other interesting things. 
        </p>
        <p className="mt-0 md:mt-1 text-center text-secondary">
          No spam and feel free to unsubscribe any time.
        </p>
        <div className="mx-auto  pt-10 flex justify-center">
          <Button
            width="widest"
            link="https://jeffjadulco.substack.com/welcome"
          >
            <span className=" text-2xl font-semibold text-on-accent">
              Subscribe{" "}
              <span
                role="img"
                aria-label="smile emoji"
                className="hover:text-opacity-0 text-opacity-100"
              >
                😀
              </span>
            </span>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
