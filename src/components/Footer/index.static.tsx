import React from "react"
import { Footer } from "./index"
import { useStaticQuery, graphql } from "gatsby"
import { ComponentsFooterQuery } from "../../../types/graphql-types"

export const StaticFooter = () => {
  const queryResult: ComponentsFooterQuery = useStaticQuery(
    graphql`
      query ComponentsFooter {
        site {
          siteMetadata {
            author
          }
        }
      }
    `
  )

  return <Footer createdBy={queryResult.site?.siteMetadata?.author!} />
}
