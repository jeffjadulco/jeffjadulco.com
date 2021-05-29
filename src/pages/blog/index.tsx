import { Fragment } from 'react'
import SEO from '@/components/seo'
import PostList from '@/components/postList'
import { Heading } from '@/components/atoms'
import Newsletter from '@/components/newsletter'
import { GetStaticProps } from 'next'
import { getAllFrontMatters } from '@/lib/mdx'
import { Frontmatter } from '@/types/frontmatter'

export default function Blog({ posts }: { posts: Frontmatter[] }) {
  return (
    <Fragment>
      <SEO title="Blog" />
      <Heading>Blog</Heading>
      <p className="mb-12 text-tertiary">
        I write about things I learn in web development and also stuff that I
        find interesting.
      </p>
      <PostList posts={posts} />
      <Newsletter />
    </Fragment>
  )
}

export const getStaticProps: GetStaticProps = async context => {
  const posts = await getAllFrontMatters()
  return { props: { posts } }
}
