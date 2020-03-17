import React from "react"
import { PageIndex, Props } from "./index"
import { mocks } from "../../mocks"

export default {
  title: "Pages/PageIndex",
  component: PageIndex,
}

const props: Props = {
  icon100px: mocks.fixedIcon100px(),
  linkList: [
    { path: "sample1", title: "sample1" },
    { path: "sample2", title: "sample2" },
  ],
}

export const Default = () => <PageIndex {...props} />
