import React from "react"
import styles from "./index.module.scss"
import { Link } from "gatsby"

export type Props = {
  linkList: {
    title: string
    path: string
  }[]
}

export const Footer: React.FC<Props> = (props: Props) => (
  <footer className={styles.container}>
    <ul className={styles.ul}>
      {props.linkList.map(link => (
        <li className={styles.li}>
          <Link to={link.path}>{link.title}</Link>
        </li>
      ))}
    </ul>
  </footer>
)
