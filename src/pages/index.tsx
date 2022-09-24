import { Fragment } from 'react'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import { Blob } from '@/components/atoms'
import { SEO } from '@/components/seo'
import { Blog24, Project24 } from '@/components/icons'
import { PostList } from '@/components/postList'
import { ProjectList } from '@/components/projectList'
import { Contact } from '@/components/contact'
import { getAllFrontMatters } from '@/lib/mdx'
import { getProjects } from '@/lib/notion'
import avatar from '../../public/images/the-avatar.png'

import type { Frontmatter } from '@/types/frontmatter'
import type { Project } from '@/types/project'

interface IndexPageProps {
  posts: Frontmatter[]
  projects: Project[]
}

export default function IndexPage({ posts, projects }: IndexPageProps) {
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
                width={256}
                height={256}
                quality={100}
                priority={true}
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center mt-64 mb-8 space-x-3">
        <span className="p-3 rounded-full bg-back-subtle">
          <Blog24 />
        </span>
        <span className="mt-3 mb-2 uppercase tracking-widestest text-accent">
          WRITINGS
        </span>
      </div>
      <PostList posts={posts} />
      <div className="flex items-center mt-24 mb-8 space-x-3">
        <span className="p-3 rounded-full bg-back-subtle">
          <Project24 />
        </span>
        <span className="mt-3 mb-2 uppercase tracking-widestest text-accent">
          PROJECTS
        </span>
      </div>
      <ProjectList projects={projects} />
      <Contact />
    </Fragment>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllFrontMatters()
  const projects = await getProjects()

  return {
    props: { posts, projects: projects.filter(p => p.type === 'Open Source') },
  }
}
