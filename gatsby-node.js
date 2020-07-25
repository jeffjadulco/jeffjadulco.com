const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: "slug",
      node,
      value: `/blog${value}`,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              seoImage
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('😱😱😱 ERROR: Loading "createPages" query')
  }

  const posts = result.data.allMdx.edges

  posts.forEach(({ node }, index) => {
    console.log(
      `🍕 Dynamically creating page for ${node.fields.slug} with og-image ${node.frontmatter.seoImage}`
    )

    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/components/postLayout.js`),
      context: { id: node.id, ogImageSlug: node.frontmatter.seoImage },
    })
  })
}
