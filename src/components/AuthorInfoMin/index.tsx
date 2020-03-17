import React from "react"
import styles from "./index.module.scss"
import Img, { FixedObject } from "gatsby-image"
import classnames from "classnames"

export type Props = {
  name: string
  subInfo: string
  author50px: FixedObject
  className?: string
}

export const AuthorInfoMin: React.FC<Props> = (props: Props) => (
  <div className={classnames(styles.container, props.className)}>
    <div className={styles.iconContainer}>
      <Img className={styles.icon} fixed={props.author50px} />
    </div>
    <div className={styles.textContainer}>
      <div className={styles.text}>{props.name}</div>
      <div className={styles.text}>{props.subInfo}</div>
    </div>
  </div>
)
