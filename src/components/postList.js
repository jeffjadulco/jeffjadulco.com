import React from "react"

const MockPosts = [
  {
    title: "Understanding SEO and why it is important",
    description: "Learn how to rank higher in search results",
    date: "June 11th, 2020",
  },
  {
    title: "Making my personal website",
    description: "From planning to deployment",
    date: "May 5th, 2020",
  },
  {
    title: "Welcome to jeffjadulco.com!",
    description: "Why I created this site and my plans for the future",
    date: "March 4, 2020",
  },
]

const PostList = () => {
  return (
    <section>
      <h2 className="font-light font-medium text-lg text-accent tracking-widest">
        LATEST WRITINGS
      </h2>
      <ul className="mt-6 divide-y-2 divide-subtle">
        {MockPosts.map(post => {
          return (
            <li className="py-4">
              <a href="#">
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
              </a>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default PostList
