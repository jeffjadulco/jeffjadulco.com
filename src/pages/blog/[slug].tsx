import { Fragment, useMemo } from 'react'
import { format, parseISO } from 'date-fns'
import { GetStaticPaths, InferGetStaticPropsType } from 'next'
import { getMDXComponent } from 'mdx-bundler/client'
import SEO from '@/components/seo'
import { BlogTitleInfo } from '@/components/atoms'
import Newsletter from '@/components/newsletter'
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
  return (
    <Fragment>
      <SEO
        blog
        title={frontmatter.title}
        description={frontmatter.description}
        ogImage={frontmatter.seoImage}
      />
      <div className="flex justify-between mt-12 mb-12 relative">
        <article className="min-w-0 max-w-2xl text-base lg:text-lg text-tertiary">
          <BlogTitleInfo
            date={format(parseISO(frontmatter.publishedAt), 'MMMM dd yyyy')}
            datetime={parseISO(frontmatter.publishedAt)}
            timeToRead={frontmatter.readingTime.text}
          />
          <h1 className="mb-10 text-4xl lg:text-5xl font-extrabold text-primary">
            {frontmatter.title}
          </h1>
          <Component components={components} />
        </article>
        {frontmatter.toc && (
          <aside className="sticky hidden lg:block max-w-xs ml-6 mt-8 h-screen">
            <QuickNav />
          </aside>
        )}
      </div>
      <Newsletter />
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
