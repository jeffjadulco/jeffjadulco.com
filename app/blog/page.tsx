import { Metadata } from 'next'
import { Fragment } from 'react'
import { Contact } from '../../components/contact'
import { Blog24 } from '../../components/icons'
import PostList from '../../components/postList'
import { getAllFrontMatters } from '../../lib/mdx'

export const metadata: Metadata = {
  title: 'Blog',
}

export default async function Blog() {
  const posts = await getAllFrontMatters()
  return (
    <Fragment>
      <span className="inline-flex p-3 rounded-full bg-back-subtle">
        <Blog24 />
      </span>
      <h1 className="mt-3 mb-2 text-2xl font-bold tracking-tight text-accent">
        Blog
      </h1>

      <p className="max-w-md mb-12 text-fore-subtle">
        I <em className="italic">sometimes</em> write about things I learn in
        web development and also stuff that I find interesting
      </p>
      <PostList />
      <Contact />
    </Fragment>
  )
}
