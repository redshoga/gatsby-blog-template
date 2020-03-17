import React from "react"
import styles from "./index.module.scss"
import Img, { FixedObject } from "gatsby-image"
import classnames from "classnames"

export type Props = {
  topInfo: string
  name: string
  bio: string
  author100px: FixedObject
  className?: string
}

export const AuthorInfoLarge: React.FC<Props> = (props: Props) => (
  <div className={classnames(styles.container, props.className)}>
    <div className={styles.iconContainer}>
      <Img className={styles.icon} fixed={props.author100px} />
    </div>
    <div className={styles.textContainer}>
      <div className={classnames(styles.topInfo, styles.text)}>
        {props.topInfo}
      </div>
      <div className={classnames(styles.name, styles.text)}>{props.name}</div>
      <div className={classnames(styles.bio, styles.text)}>{props.bio}</div>
    </div>
  </div>
)
