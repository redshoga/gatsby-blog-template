import React from "react"
import { Header } from "./index"
import { useStaticQuery, graphql } from "gatsby"
import { ComponentsHeaderQuery } from "../../../types/graphql-types"

export const StaticHeader = () => {
  const queryResult: ComponentsHeaderQuery = useStaticQuery(
    graphql`
      query ComponentsHeader {
        site {
          siteMetadata {
            title
            author
          }
        }
      }
    `
  )

  return (
    <Header
      title={queryResult.site?.siteMetadata?.title!}
      author={queryResult.site?.siteMetadata?.author!}
    />
  )
}
