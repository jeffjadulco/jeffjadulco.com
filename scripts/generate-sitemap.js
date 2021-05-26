const fs = require('fs')

const globby = require('globby')
const prettier = require('prettier')

;(async () => {
  const prettierCfg = await prettier.resolveConfig('./.prettierrc')
  const pages = await globby([
    'src/pages/**/*.tsx',
    'content/**/*.mdx',
    '!src/pages/_*.tsx',
    '!src/pages/404.tsx',
    '!src/pages/blog/[slug].tsx',
  ])

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map(page => {
                const path = page
                  .replace('src/pages', '')
                  .replace('content', '')
                  .replace('.tsx', '')
                  .replace('.mdx', '')
                  .replace('/index', '')
                return `
                        <url>
                            <loc>${`https://jeffjadulco.com${path}`}</loc>
                            <changefreq>${
                              path.includes('/blog') ? 'monthly' : 'daily'
                            }</changefreq>
                            <priority>${
                              path.includes('/blog') ? 0.7 : 0.2
                            }</priority>
                        </url>
                    `
              })
              .join('')}
        </urlset>
    `

  const formatted = prettier.format(sitemap, {
    ...prettierCfg,
    parser: 'html',
  })

  fs.writeFileSync('public/sitemap.xml', formatted)
})()
