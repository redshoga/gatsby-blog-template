import React from "react"
import { graphql } from "gatsby"
import { PageIndex, Props as PageProps } from "../components/PageIndex"
import { PagesIngexQuery } from "../../types/graphql-types"
import { FixedObject } from "gatsby-image"
import { constants } from "../constants"

export const query = graphql`
  query PagesIngex {
    site {
      siteMetadata {
        title
      }
    }
    file(relativePath: { eq: "author.jpg" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export type Props = {
  data: PagesIngexQuery
}

const Page: React.FC<Props> = (props: Props) => {
  const pageProps: PageProps = {
    icon100px: props.data.file?.childImageSharp?.fixed! as FixedObject,
    title: props.data.site?.siteMetadata?.title!,
    linkList: [
      { title: "Blog", path: constants.path.blogIndex() },
      { title: "Portfolio", path: constants.path.portfolioIndex() },
    ],
  }
  return (
    <>
      <PageIndex {...pageProps} />
    </>
  )
}

export default Page
