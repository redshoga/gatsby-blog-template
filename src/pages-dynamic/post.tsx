import React from "react"
import { graphql } from "gatsby"
import { PagesDynamicPostQuery } from "../../types/graphql-types"
import { PagePost } from "../components/PagePost"
import { FluidObject, FixedObject } from "gatsby-image"

export const pageQuery = graphql`
  query PagesDynamicPost($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    icon50px: file(relativePath: { eq: "author.jpg" }) {
      childImageSharp {
        fixed(width: 50, height: 50, quality: 90) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    icon100px: file(relativePath: { eq: "author.jpg" }) {
      childImageSharp {
        fixed(width: 100, height: 100, quality: 90) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        authorBio
      }
    }
  }
`

type Props = {
  data: PagesDynamicPostQuery
}

const Page: React.FC<Props> = (props: Props) => {
  const md = props.data.markdownRemark

  return (
    <PagePost
      title={md?.frontmatter?.title!}
      createdAt={md?.frontmatter?.date!}
      thumbnailImage600px={
        md?.frontmatter?.thumbnail?.childImageSharp?.fluid! as FluidObject
      }
      html={md?.html!}
      author50px={props.data.icon50px?.childImageSharp?.fixed as FixedObject}
      author100px={props.data.icon100px?.childImageSharp?.fixed as FixedObject}
      authorName={props.data.site?.siteMetadata?.author!}
      authorBio={props.data.site?.siteMetadata?.authorBio!}
      // previous?: {
      //   title: string
      //   path: string
      // }
      // next?: {
      //   title: string
      //   path: string
      // }
    />
  )
}

export default Page
