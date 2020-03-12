import React from "react"
import styles from "./index.module.scss"

export type Props = {
  createdBy: string
}

export const Footer: React.FC<Props> = (props: Props) => (
  <header className={styles.container}>created by {props.createdBy}</header>
)
