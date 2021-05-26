import Layout from '@/components/layout'
import SEO from '@/components/seo'
import PostList from '@/components/postList'
import { Heading } from '@/components/atoms'
import Newsletter from '@/components/newsletter'
import { GetStaticProps } from 'next'
import { getAllFrontMatters } from '@/lib/mdx'
import { Frontmatter } from '@/types/frontmatter'

export default function Blog({ posts }: { posts: Frontmatter[] }) {
  return (
    <Layout>
      <SEO title="Blog" />
      <Heading>Blog</Heading>
      <p className="-mt-3 mb-12 text-tertiary">
        I write about things I learn in web development and also stuff that I
        find interesting.
      </p>
      <PostList posts={posts} />
      <Newsletter />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async context => {
  const posts = await getAllFrontMatters()
  return { props: { posts } }
}
