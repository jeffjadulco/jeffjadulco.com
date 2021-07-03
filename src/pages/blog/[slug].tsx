import { Fragment, useMemo } from 'react'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import classNames from 'classnames'
import { format, parseISO } from 'date-fns'
import { getMDXComponent } from 'mdx-bundler/client'
import { getAllFrontMatters, getMdxBySlug } from '@/lib/mdx'
import { SEO } from '@/components/seo'
import { Feedback } from '@/components/feedback'
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
      <div
        className={classNames(
          'relative flex justify-between mt-12 mb-12 xl:-mr-52',
          {
            'flex-row-reverse': Boolean(frontmatter.toc),
          }
        )}
      >
        {frontmatter.toc && (
          <aside className="sticky hidden h-screen max-w-xs mt-8 ml-6 top-16 xl:block">
            <QuickNav />
          </aside>
        )}
        <article className="max-w-3xl min-w-0 text-base lg:text-lg text-fore-subtle">
          <div className="mb-2 text-sm tracking-normal text-fore-subtle">
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
          <h1 className="mb-10 text-4xl font-extrabold lg:text-5xl text-fore-primary">
            {frontmatter.title}
          </h1>
          <Component components={components} />
        </article>
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

export const getStaticProps: GetStaticProps = async context => {
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
