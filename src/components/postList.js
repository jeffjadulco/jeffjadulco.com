import React from "react"
import { Link } from "gatsby"

const MockPosts = [
  {
    slug: "#",
    title: "Understanding SEO and why it is important",
    description: "Learn how to rank higher in search results",
    date: "Coming soon",
  },
  {
    slug: "#",
    title: "Making my personal website",
    description: "From planning to deployment",
    date: "Coming soon",
  },
  {
    slug: "#",
    title: "Welcome to jeffjadulco.com!",
    description: "Why I created this site and my plans for the future",
    date: "Coming soon",
  },
]

const PostList = ({ showHeading }) => {
  return (
    <section className="">
      {showHeading && (
        <h2 className="mt-64 font-light font-medium text-accent tracking-widestest">
          LATEST WRITINGS
        </h2>
      )}
      <ul className="mt-3 divide-y-2 divide-subtle">
        {MockPosts.map(post => {
          return (
            <li key={post.title} className="py-3">
              <Link to={post.slug}>
                <div className="group flex flex-col sm:flex-row sm:justify-between sm:items-end">
                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-accent">
                      {post.title}
                    </h3>
                    <h4 className="font-medium text-tertiary">
                      {post.description}
                    </h4>
                  </div>
                  <div className="mt-2 sm:mt-0 text-sm sm:text-base text-accent sm:text-tertiary">
                    {post.date}
                  </div>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default PostList
