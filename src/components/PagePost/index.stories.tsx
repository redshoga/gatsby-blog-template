import React from "react"
import { PagePost, Props } from "./index"
import { mocks } from "../../mocks"

export default {
  title: "Pages/PagePost",
  component: PagePost,
}

const baseProps = {
  title: "My first post",
  createdAt: "2019年3月12日",
  thumbnailImage600px: mocks.fluidThumbnail600px(),
  html: mocks.postHtml,
  author50px: mocks.fixedIcon50px(),
  author100px: mocks.fixedIcon100px(),
  authorName: "redshoga",
  authorBio: "This is author bio",
}

const props: Props = {
  ...baseProps,
  previous: {
    title: "散歩",
    path: "sanpo",
  },
  next: {
    title: "寝る",
    path: "neru",
  },
}

export const Default = () => <PagePost {...props} />
export const NoPreviousNext = () => <PagePost {...baseProps} />
