import { Fragment, useMemo } from 'react'
import { format, parseISO } from 'date-fns'
import { GetStaticPaths, InferGetStaticPropsType } from 'next'
import { getMDXComponent } from 'mdx-bundler/client'
import SEO from '@/components/seo'
import Newsletter from '@/components/newsletter'
import Feedback from '@/components/feedback'
import { getAllFrontMatters, getMdxBySlug } from '@/lib/mdx'
import { components } from '@/components/mdxComponents'
import { QuickNav } from '@/components/quickNav'

import type { Frontmatter } from '@/types/frontmatter'

type Post = {
  frontmatter: Frontmatter
  code: string
}

export default function BlogPost({
  post: { code, frontmatter },
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const Component = useMemo(() => getMDXComponent(code), [code])

  const publishedAt = parseISO(frontmatter.publishedAt)
  const updatedAt = frontmatter.updatedAt
    ? parseISO(frontmatter.updatedAt)
    : undefined

  return (
    <Fragment>
      <SEO
        blog
        title={frontmatter.title}
        description={frontmatter.description}
        ogImage={frontmatter.seoImage}
      />
      <div className="relative flex justify-between mt-12 mb-12">
        <article className="max-w-2xl min-w-0 text-base lg:text-lg text-tertiary">
          <div className="mb-2 text-sm tracking-normal text-tertiary">
            <span>
              <time dateTime={publishedAt.toISOString()}>
                {format(publishedAt, 'MMMM dd yyyy')}
              </time>
            </span>
            <span> • </span>
            <span>{frontmatter.readingTime.text}</span>
            {updatedAt && (
              <Fragment>
                <span> • </span>
                <span className="italic">
                  Last updated:{' '}
                  <time dateTime={updatedAt.toISOString()}>
                    {format(updatedAt, 'MMMM dd yyyy')}
                  </time>
                </span>
              </Fragment>
            )}
          </div>
          <h1 className="mb-10 text-4xl font-extrabold lg:text-5xl text-primary">
            {frontmatter.title}
          </h1>
          <Component components={components} />
        </article>
        {frontmatter.toc && (
          <aside className="sticky hidden h-screen max-w-xs mt-8 ml-6 lg:block">
            <QuickNav />
          </aside>
        )}
      </div>
      <Feedback post={frontmatter} />
    </Fragment>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllFrontMatters()
  return {
    paths: posts.map(post => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps = async context => {
  const { code, frontmatter } = await getMdxBySlug(context.params.slug)
  return {
    props: {
      post: {
        code,
        frontmatter,
      } as Post,
    },
  }
}
