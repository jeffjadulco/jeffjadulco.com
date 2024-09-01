// Thanks to https://ped.ro/blog/code-blocks-but-better

import { toHtml } from 'hast-util-to-html'
import { unified } from 'unified'
import rehypeParse from 'rehype-parse'

const CALLOUT = /__(.*?)__/g

function highlight(code) {
  const html = toHtml(code)
  const result = html.replace(
    CALLOUT,
    (_, text) => `<span class="highlight-word">${text}</span>`,
  )
  const hast = unified()
    .use(rehypeParse, { emitParseErrors: true, fragment: true })
    .parse(result)
  return hast.children
}

export default highlight
