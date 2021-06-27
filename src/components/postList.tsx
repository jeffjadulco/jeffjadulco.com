import Link from 'next/link'
import { format, parseISO } from 'date-fns'
import type { Frontmatter } from '@/types/frontmatter'

function Post({ post }: { post: Frontmatter }) {
  return (
    <li className="py-5">
      <Link href={`blog/${post.slug}`}>
        <a className="flex flex-col px-8 py-5 -my-5 transition-colors ease-in-out -mx-7 group sm:flex-row sm:justify-between sm:items-end hover:bg-back-secondary focus:bg-back-secondary focus-visible:outline-accent focus:text-accent">
          <div>
            <h3 className="text-xl font-semibold group-hover:text-accent">
              {post.title}
            </h3>
            <h4 className="font-medium text-fore-subtle">{post.description}</h4>
          </div>
          <div className="mt-2 text-sm sm:mt-0 sm:text-base text-accent sm:text-fore-subtle">
            {format(parseISO(post.publishedAt), 'MMMM yyyy')}
          </div>
        </a>
      </Link>
    </li>
  )
}

export function PostList({
  posts,
  showHeading = false,
}: {
  posts: Frontmatter[]
  showHeading?: boolean
}) {
  return (
    <section>
      {showHeading && (
        <h2 className="mt-64 text-accent tracking-widestest">WRITINGS</h2>
      )}
      <ul className="mt-3 divide-y divide-back-subtle">
        {posts.map(post => (
          <Post key={post.slug} post={post} />
        ))}
      </ul>
    </section>
  )
}
