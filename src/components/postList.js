import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const Post = ({ post }) => {
  return (
    <li className="py-3">
      <Link to={post.slug}>
        <div className="-mx-5 -my-3 px-5 py-3 group flex flex-col sm:flex-row sm:justify-between sm:items-end hover:bg-secondary">
          <div>
            <h3 className="text-xl font-semibold group-hover:text-accent">
              {post.title}
            </h3>
            <h4 className="font-medium text-tertiary">{post.description}</h4>
          </div>
          <div className="mt-2 sm:mt-0 text-sm sm:text-base text-accent sm:text-tertiary">
            {post.date}
          </div>
        </div>
      </Link>
    </li>
  )
}

const PostList = ({ showHeading }) => {
  const data = useStaticQuery(graphql`
    query PageQuery {
      allMdx(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "MMMM Do YYYY")
              published
              tags
              description
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  return (
    <section className="">
      {showHeading && (
        <h2 className="mt-64 font-normal text-accent tracking-widestest">
          LATEST WRITINGS
        </h2>
      )}
      <ul className="mt-3 divide-y divide-subtle">
        {data.allMdx.edges.map(({ node }) => {
          const post = {
            slug: node.fields.slug,
            title: node.frontmatter.title,
            date: node.frontmatter.date,
            description: node.frontmatter.description,
            tags: node.frontmatter.tags,
          }
          return <Post key={node.id} post={post} />
        })}
      </ul>
    </section>
  )
}

export default PostList
