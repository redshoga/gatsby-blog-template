import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { ComponentsLinkListQuery } from "../../../types/graphql-types"

export const LinkList: React.FC = () => {
  const queryResult: ComponentsLinkListQuery = useStaticQuery(graphql`
    query ComponentsLinkList {
      allContentfulBlogPost {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  `)

  return (
    <section>
      <h2>Links</h2>

      <ul>
        <li>
          <Link to="/">Index Page</Link>
        </li>
        <li>
          <Link to="/404">404 Page</Link>
        </li>
      </ul>

      <h2>Articles</h2>

      <ul>
        {queryResult.allContentfulBlogPost.edges.map(({ node }) => (
          <li key={node.slug!}>
            <Link to={node.slug!}>{node.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
