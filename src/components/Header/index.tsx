import React from "react"
import styles from "./index.module.scss"
import { Link } from "gatsby"
import { path } from "../../constants/path"

export type Props = {
  title: string
  author: string
}

export const Header: React.FC<Props> = (props: Props) => (
  <header className={styles.container}>
    <div className={styles.contents}>
      <div className={styles.title}>{props.title}</div>
      <div>
        created by <Link to={path.portfolioIndex()}>{props.author}</Link>
      </div>
    </div>
  </header>
)
