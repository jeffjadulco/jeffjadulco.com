import React from "react"
import { ExtLink, Button } from "./atoms"

export const Newsletter = () => {
  return (
    <div className="mt-32 full-width-container bg-tertiary">
      <div className="container max-w-screen-xl mx-auto pt-10 pb-12 text-gray-900">
        <h1 className="text-3xl font-semibold text-center text-primary">
          Subscribe to my Newsletter{" "}
          <span role="img" aria-label="wave">
            💌
          </span>
        </h1>
        <p className="mt-4 text-center text-secondary">
          I post about front-end web development, productivity, and other interesting things. 
        </p>
        <p className="mt-1 text-center text-secondary">
          No spam and feel free to unsubscribe any time.
        </p>
        <div className="mx-auto  pt-10 flex justify-center">
          <Button
            width="widest"
            link="https://jeffjadulco.substack.com/welcome"
          >
            <span className=" text-2xl font-semibold text-on-accent">
              Subscribe{" "}
              <span className="hover:text-opacity-0 text-opacity-100">😀</span>
            </span>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
