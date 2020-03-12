import React from "react"
import styles from "./index.module.scss"
import { Link } from "gatsby"

export type Props = {
  linkList: {
    title: string
    path: string
  }[]
}

export const Page404: React.FC<Props> = (props: Props) => (
  <div className={styles.container}>
    <h1>404 NOT FOUND</h1>

    <nav>
      {props.linkList.map(link => (
        <Link to={link.path} className={styles.link} key={link.path}>
          {link.title}
        </Link>
      ))}
    </nav>
  </div>
)
