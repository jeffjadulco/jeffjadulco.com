import { Fragment } from 'react'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import { Blob } from '@/components/atoms'
import { SEO } from '@/components/seo'
import { PostList } from '@/components/postList'
import { ProjectList } from '@/components/projectList'
import { Contact } from '@/components/contact'
import { getAllFrontMatters } from '@/lib/mdx'
import avatar from '../../public/images/the-avatar.png'

import type { Frontmatter } from '@/types/frontmatter'

interface IndexPageProps {
  posts: Frontmatter[]
}

export default function IndexPage({ posts }: IndexPageProps) {
  return (
    <Fragment>
      <SEO />
      <div className="flex flex-col-reverse items-center mt-12 lg:flex-row lg:justify-between lg:space-x-6">
        <p className="max-w-3xl mt-12 text-3xl font-semibold lg:mt-0 sm:text-4xl sm:text-left md:text-center lg:text-left">
          Hi, I’m Jeff. I’m an experienced game developer with deep interest in
          modern web development.
        </p>
        <div className="relative">
          <Blob />
          <div className="absolute top-0 flex items-center justify-center w-full h-full">
            <div className="w-32 h-32 overflow-hidden rounded-full md:h-40 md:w-40 lg:h-48 lg:w-48">
              <Image
                src={avatar}
                alt="My avatar"
                width={512}
                height={512}
                quality={100}
                priority={true}
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </div>
      <PostList posts={posts} showHeading />
      <ProjectList showHeading />
      <Contact />
    </Fragment>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllFrontMatters()

  return {
    props: { posts },
  }
}
