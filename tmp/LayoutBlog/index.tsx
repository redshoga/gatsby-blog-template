import React from "react"
import styles from "./styles.module.scss"
import { useStaticQuery, graphql } from "gatsby"
import { ComponentsDefaultLayoutQuery } from "../../../types/graphql-types"
import { FluidObject } from "gatsby-image"

export type Props = {
  children: React.ReactNode
}

export const DefaultLayout = (props: Props) => {
  const data: ComponentsDefaultLayoutQuery = useStaticQuery(graphql`
    query ComponentsDefaultLayout {
      site {
        siteMetadata {
          title
        }
      }
      placeholderImage: file(relativePath: { eq: "author.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 60) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className={styles.container}>
      <main>{props.children}</main>

      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://github.com/redshoga/gatsby-ts-boilerplate">
          redshoga/gatsby-ts-boilerplate
        </a>
      </footer>
    </div>
  )
}
