import Link from 'next/link'
import { format, parseISO } from 'date-fns'
import type { Frontmatter } from '@/types/frontmatter'

function Post({ post }: { post: Frontmatter }) {
  return (
    <li className="py-3">
      <Link href={`blog/${post.slug}`}>
        <a className="-mx-5 -my-3 px-5 py-3 group flex flex-col sm:flex-row sm:justify-between sm:items-end hover:bg-secondary">
          <div>
            <h3 className="text-xl font-semibold group-hover:text-accent">
              {post.title}
            </h3>
            <h4 className="font-medium text-tertiary">{post.description}</h4>
          </div>
          <div className="mt-2 sm:mt-0 text-sm sm:text-base text-accent sm:text-tertiary">
            {format(parseISO(post.publishedAt), 'MMMM yyyy')}
          </div>
        </a>
      </Link>
    </li>
  )
}

export default function PostList({
  posts,
  showHeading = false,
}: {
  posts: Frontmatter[]
  showHeading?: boolean
}) {
  return (
    <section className="">
      {showHeading && (
        <h2 className="mt-64 font-normal text-accent tracking-widestest">
          WRITINGS
        </h2>
      )}
      <ul className="mt-3 divide-y divide-subtle">
        {posts.map(post => (
          <Post key={post.slug} post={post} />
        ))}
      </ul>
    </section>
  )
}
