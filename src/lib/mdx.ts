import fs from 'fs'
import path from 'path'
import globby from 'globby'
import readingTime from 'reading-time'
import { bundleMDX } from 'mdx-bundler'
import prism from '@mapbox/rehype-prism'
import rehypeSlug from 'rehype-slug'
import rehypeHeadings from 'rehype-autolink-headings'

import type { Frontmatter } from '@/types/frontmatter'

const MDX_PATH = 'content/blog'
const CONTENT_PATH = path.join(process.cwd(), MDX_PATH)

async function getMdxBySlug(slug) {
  const source = fs.readFileSync(path.join(CONTENT_PATH, `${slug}.mdx`), 'utf8')
  const { code, frontmatter } = await bundleMDX(source, {
    xdmOptions(options) {
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        prism,
        rehypeSlug,
        [rehypeHeadings, { behavior: 'append' }],
      ]
      return options
    },
  })
  return {
    code,
    frontmatter: {
      ...(frontmatter as Frontmatter),
      slug,
      readingTime: readingTime(code),
    } as Frontmatter,
  }
}

async function getAllFrontMatters(): Promise<Frontmatter[]> {
  const paths = await globby([`${MDX_PATH}/**/*.mdx`])
  const matters = await Promise.all(
    paths.map(async filePath => {
      const source = fs.readFileSync(filePath, 'utf8')
      const { code, frontmatter } = await bundleMDX(source)

      return {
        ...(frontmatter as Frontmatter),
        slug: path.basename(filePath).replace('.mdx', ''),
        readingTime: readingTime(code, { wordsPerMinute: 300 }),
      }
    })
  )
  return matters
    .filter(Boolean)
    .filter(post => post.isPublished)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
}

export { getAllFrontMatters, getMdxBySlug }
