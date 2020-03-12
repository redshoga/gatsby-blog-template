import React from "react"
import styles from "./index.module.scss"
import { Link } from "gatsby"
import Img, { FixedObject } from "gatsby-image"

export type Props = {
  icon100px: FixedObject
  title: string
  linkList: {
    title: string
    path: string
  }[]
}

export const PageIndex: React.FC<Props> = (props: Props) => (
  <div className={styles.container}>
    <Img fixed={props.icon100px} className={styles.icon} />

    <h1>{props.title}</h1>

    <nav>
      {props.linkList.map(link => (
        <Link to={link.path} className={styles.link} key={link.path}>
          {link.title}
        </Link>
      ))}
    </nav>
  </div>
)
