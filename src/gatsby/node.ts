import path from "path"
import { GatsbyNode } from "gatsby"
import { GatsbyNodeQuery } from "../../types/graphql-types"
// import { PageContext } from "../pages-dynamic/post"

export const createPages: GatsbyNode["createPages"] = async ({
  actions: { createPage },
  graphql,
  reporter,
}) => {
  const allPosts = await graphql<GatsbyNodeQuery>(`
    query GatsbyNode {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  if (allPosts.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  allPosts.data!.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter!.path!,
      component: path.resolve("src/pages-dynamic/post.tsx"),
      context: {},
    })
  })
}
