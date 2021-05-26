import { GetStaticProps } from 'next'
import Image from 'next/image'
import { getAllFrontMatters } from '../lib/mdx'
import { Blob } from '../components/atoms'
import Layout from '../components/layout'
import SEO from '../components/seo'
import PostList from '../components/postList'
import ProjectList from '../components/projectList'
import Contact from '../components/contact'

import type { Frontmatter } from '@/types/frontmatter'

export default function IndexPage({ posts }: { posts: Frontmatter[] }) {
  return (
    <Layout>
      <SEO />
      <div className="mt-12 flex flex-col-reverse lg:flex-row items-center lg:justify-between lg:space-x-6">
        <h1 className="mt-12 lg:mt-0 max-w-3xl text-3xl sm:text-4xl text-primary font-semibold sm:text-left md:text-center lg:text-left">
          Hi, I’m Jeff.
          <br className="mb-6 lg:hidden" /> I’m an experienced game developer
          with deep interest in modern web development.
        </h1>
        <div className="relative">
          <Blob />
          <div className="absolute w-full h-full top-0 flex items-center justify-center">
            <div className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 rounded-full overflow-hidden">
              <Image
                src="/images/the-avatar.png"
                alt="My avatar"
                width={512}
                height={512}
              />
            </div>
          </div>
        </div>
      </div>
      <PostList posts={posts} showHeading />
      <ProjectList showHeading />
      <Contact />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllFrontMatters()
  return { props: { posts } }
}
