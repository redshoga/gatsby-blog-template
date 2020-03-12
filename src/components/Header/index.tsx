import React from "react"
import styles from "./index.module.scss"

export type Props = {
  title: string
}

export const Header: React.FC<Props> = (props: Props) => (
  <header className={styles.container}>{props.title}</header>
)
