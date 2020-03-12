// import { FetchBlogPostsQuery } from "./../../types/graphql-types.d"
import path from "path"
import { GatsbyNode } from "gatsby"
// import { PageContext } from "../components/TemplateBlog/index"

export const createPages: GatsbyNode["createPages"] = async ({
  actions: { createPage },
  graphql,
  reporter,
}) => {
  // const blogPosts = await graphql<FetchBlogPostsQuery>(`
  //   query FetchBlogPosts {
  //     allContentfulBlogPost {
  //       edges {
  //         node {
  //           title
  //           body {
  //             body
  //           }
  //           createdAt
  //           slug
  //           tags {
  //             name
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)
  // if (blogPosts.errors) {
  //   reporter.panicOnBuild(`Error while running GraphQL query.`)
  //   return
  // }
  // blogPosts.data!.allContentfulBlogPost.edges.forEach(({ node }) => {
  //   createPage<PageContext>({
  //     path: node.slug!,
  //     component: path.resolve("src/components/TemplateBlog/index.tsx"),
  //     context: {
  //       title: node.title!,
  //     },
  //   })
  // })
}
