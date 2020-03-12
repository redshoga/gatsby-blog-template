import React from "react"
import { Page404, Props } from "./index"

export default {
  title: "components/Page404",
  component: Page404,
}

const props: Props = {
  linkList: [
    { path: "sample1", title: "sample1" },
    { path: "sample2", title: "sample2" },
  ],
}

export const Default = () => <Page404 {...props} />
