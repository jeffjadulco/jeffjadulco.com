import { format, parseISO } from 'date-fns'
import Link from 'next/link'
import { Props } from 'next/script'
import React from 'react'
import { getAllFrontMatters } from '../lib/mdx'

export async function PostList({
  showHeading = false,
}: {
  showHeading?: boolean
}) {
  const posts = await getAllFrontMatters()

  return (
    <section>
      {showHeading && (
        <h2 className="mt-64 text-accent tracking-[.2em]">WRITINGS</h2>
      )}
      <ul className="mt-3 divide-y divide-back-subtle">
        {posts.map(post => (
          <li key={post.slug} className="py-5">
            <Link href={`blog/${post.slug}`}>
              <div className="flex flex-col px-8 py-5 -my-5 transition-colors ease-in-out -mx-7 group sm:flex-row sm:justify-between sm:items-end hover:bg-back-secondary focus:bg-back-secondary focus:text-accent">
                <div>
                  <h3 className="text-xl font-semibold group-hover:text-accent">
                    {post.title}
                  </h3>
                  <h4 className="font-medium text-fore-subtle">
                    {post.description}
                  </h4>
                </div>
                <div className="mt-2 text-sm sm:mt-0 sm:text-base text-accent sm:text-fore-subtle">
                  {format(parseISO(post.publishedAt), 'MMMM yyyy')}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

// TODO: This is just a workaround. See https://github.com/vercel/next.js/issues/42292
export default (PostList as unknown) as (props: Props) => JSX.Element
