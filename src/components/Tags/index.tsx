import React from "react"
import { Link } from "gatsby"
import { constants } from "../../constants"
import styles from "./index.module.scss"

export type Props = {
  tags: {
    name: string
    slug: string
  }[]
}

export const Tags: React.FC<Props> = (props: Props) => (
  <div>
    <ul className={styles.tags}>
      {props.tags.map(tag => (
        <li key={tag.slug} className={styles.tag}>
          <Link to={constants.path.blogTag(tag.slug)}>{tag.name}</Link>
        </li>
      ))}
    </ul>
  </div>
)
