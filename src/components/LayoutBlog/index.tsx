import React from "react"
import { StaticFooter } from "../Footer/index.static"
import { StaticHeader } from "../Header/index.static"

export type Props = {}

export const LayoutBlog: React.FC<Props> = (props: Props) => (
  <>
    <StaticHeader />
    <h1>sample</h1>
    <StaticFooter />
  </>
)
