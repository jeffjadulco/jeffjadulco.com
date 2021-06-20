import { Fragment } from 'react'
import { GetStaticProps } from 'next'
import { SEO } from '@/components/seo'
import { PostList } from '@/components/postList'
import { Heading } from '@/components/atoms'
import { Contact } from '@/components/contact'
import { getAllFrontMatters } from '@/lib/mdx'
import { Frontmatter } from '@/types/frontmatter'

export default function Blog({ posts }: { posts: Frontmatter[] }) {
  return (
    <Fragment>
      <SEO title="Blog" />
      <Heading>Blog</Heading>
      <p className="mb-12 text-fore-subtle">
        I write about things I learn in web development and also stuff that I
        find interesting.
      </p>
      <PostList posts={posts} />
      <Contact />
    </Fragment>
  )
}

export const getStaticProps: GetStaticProps = async context => {
  const posts = await getAllFrontMatters()
  return { props: { posts } }
}
