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

const PostList = () => {
  return (
    <section className="mt-64">
      <h2 className="font-light font-medium text-lg text-accent tracking-widestest">
        LATEST WRITINGS
      </h2>
      <ul className="mt-3 divide-y-2 divide-subtle">
        {MockPosts.map(post => {
          return (
            <li className="py-3">
              <Link to={post.slug}>
                <div className="group flex justify-between items-end">
                  <div>
                    <h3 className="text-2xl font-semibold group-hover:text-accent">
                      {post.title}
                    </h3>
                    <h4 className="text-lg font-medium text-tertiary">
                      {post.description}
                    </h4>
                  </div>
                  <span className="text-tertiary">{post.date}</span>
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
