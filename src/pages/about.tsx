import { Fragment, useMemo } from 'react'
import { GetStaticProps } from 'next'
import { getMDXComponent } from 'mdx-bundler/client'
import { getMdxByPath } from '@/lib/mdx'
import { Heading } from '@/components/atoms'
import { Contact } from '@/components/contact'
import { SEO } from '@/components/seo'
import { components } from '@/components/mdxComponents'

export default function About({ code }) {
  const Component = useMemo(() => getMDXComponent(code), [code])
  return (
    <Fragment>
      <SEO title="About" />
      <div className="container">
        <Heading>About Me</Heading>
        <article className="max-w-2xl min-w-0 text-base lg:text-lg text-fore-subtle">
          <Component components={components} />
        </article>
      </div>
      <Contact />
    </Fragment>
  )
}

export const getStaticProps: GetStaticProps = async context => {
  const { code } = await getMdxByPath('/content/about.mdx')
  return {
    props: {
      code,
    },
  }
}
