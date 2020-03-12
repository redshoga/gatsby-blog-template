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
          }
        }
      }
    `
  )

  return <Header title={queryResult.site?.siteMetadata?.title!} />
}
