import React from "react"
import styles from "./index.module.scss"
import { LayoutBlog } from "../LayoutBlog"

export type Props = {}

export const Page404: React.FC<Props> = (props: Props) => (
  <LayoutBlog>
    <h1 className={styles.notFound}>404 NOT FOUND</h1>
  </LayoutBlog>
)
