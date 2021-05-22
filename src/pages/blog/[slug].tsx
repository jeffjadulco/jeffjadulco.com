import { GetStaticPaths, InferGetStaticPropsType } from 'next'
import { getMDXComponent } from 'mdx-bundler/client'
import Layout from '@/components/layout'
import SEO from '@/components/seo'
import { BlogTitle, BlogTitleInfo, ExtLink } from '@/components/atoms'
import Newsletter from '@/components/newsletter'
import { getAllFrontMatters, getMdxBySlug } from '@/lib/mdx'
import type { Frontmatter } from '@/types/frontmatter'
import { useMemo } from 'react'
import { format, parseISO } from 'date-fns'
import { components } from '@/components/mdxComponents'
import { QuickNav } from '@/components/quickNav'

type Post = {
  frontmatter: Frontmatter
  code: string
}

export default function BlogPost({
  post: { code, frontmatter },
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const Component = useMemo(() => getMDXComponent(code), [code])
  return (
    <Layout>
      <SEO
        blog
        title={frontmatter.title}
        description={frontmatter.description}
        ogImage={frontmatter.seoImage}
      />
      <div className="flex justify-between mt-12 mb-12 relative">
        <article className="prose md:prose-lg min-w-0">
          <div className="">
            <BlogTitleInfo
              date={format(parseISO(frontmatter.publishedAt), 'MMMM dd yyyy')}
              datetime={parseISO(frontmatter.publishedAt)}
              timeToRead={frontmatter.readingTime.text}
            />
            <BlogTitle>{frontmatter.title}</BlogTitle>
          </div>
          <Component components={components} />
          {/* <Component /> */}
        </article>
        {frontmatter.toc && (
          <aside className="sticky hidden lg:block max-w-xs ml-6 mt-8 h-screen">
            <QuickNav />
            {/* <TOC items={mdx.tableOfContents.items} /> */}
          </aside>
        )}
      </div>
      <Newsletter />
    </Layout>
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
