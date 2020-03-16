import React from "react"
import { Tags, Props } from "./index"

export default {
  title: "components/Tags",
  component: Tags,
}

const props: Props = {
  tags: [
    { slug: "sample", name: "sample" },
    { slug: "sample", name: "sample" },
    { slug: "sample", name: "sample" },
  ],
}

export const Default = () => <Tags {...props} />