import React from "react"
import { Footer, Props } from "./index"
import { path } from "../../constants/path"

export const StaticFooter = () => {
  const props: Props = {
    linkList: [
      { path: path.rootIndex(), title: "top" },
      { path: path.blogIndex(), title: "blog" },
      { path: path.portfolioIndex(), title: "portfolio" },
    ],
  }

  return <Footer {...props} />
}
