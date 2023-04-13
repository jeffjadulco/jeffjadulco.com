import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis'
import rehypeHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: `**/*.mdx`,
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    publishedAt: {
      type: 'date',
      required: true,
    },
    updatedAt: {
      type: 'date',
    },
    isPublished: {
      type: 'boolean',
      required: true,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
    },
    description: {
      type: 'string',
    },
    toc: {
      type: 'boolean',
    },
    seoImage: {
      type: 'string',
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: blog => blog._raw.flattenedPath,
    },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Blog],
  mdx: {
    rehypePlugins: [
      [rehypeSlug],
      // [rehypeMetaAttribute],
      // [rehypeHighlightCode],
      [rehypeAccessibleEmojis],
      [rehypeHeadings, { behavior: 'append' }],
    ],
  },
})
