import React, { ReactNode } from "react"
import styles from "./index.module.scss"
import { StaticFooter } from "../Footer/index.static"
import { StaticHeader } from "../Header/index.static"

export type Props = {
  children: ReactNode
}

export const LayoutBlog: React.FC<Props> = (props: Props) => (
  <>
    <StaticHeader />
    <main className={styles.container}>{props.children}</main>
    <StaticFooter />
  </>
)
