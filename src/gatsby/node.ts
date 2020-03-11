import { FetchBlogPostsQuery } from "./../../types/graphql-types.d"
import path from "path"
import { GatsbyNode } from "gatsby"
import { PageContext } from "./../templates/BlogTemplate/index"

export const createPages: GatsbyNode["createPages"] = async ({
  actions: { createPage },
  graphql,
  reporter,
}) => {
  const blogPosts = await graphql<FetchBlogPostsQuery>(`
    query FetchBlogPosts {
      allContentfulBlogPost {
        edges {
          node {
            title
            body {
              body
            }
            createdAt
            slug
            tags {
              name
            }
          }
        }
      }
    }
  `)

  if (blogPosts.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  blogPosts.data!.allContentfulBlogPost.edges.forEach(({ node }) => {
    console.log(JSON.stringify(node, null, 2))
    createPage<PageContext>({
      path: node.slug!,
      component: path.resolve("src/templates/BlogTemplate/index.tsx"),
      context: {
        title: node.title!,
      },
    })
  })
}
