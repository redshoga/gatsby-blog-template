import React from "react"
import { Tags, Props } from "./index"

export default {
  title: "Components/Tags",
  component: Tags,
}

const props: Props = {
  tags: [
    { slug: "sample", name: "sample" },
    { slug: "sample", name: "sample" },
    { slug: "sample", name: "sample" },
  ],
}

const propsManyTags: Props = {
  tags: [
    { slug: "sample", name: "sample" },
    { slug: "sample", name: "sample" },
    { slug: "sample", name: "sample" },
    { slug: "sample", name: "sample" },
    { slug: "sample", name: "sample" },
    { slug: "sample", name: "sample" },
    { slug: "sample", name: "sample" },
    { slug: "sample", name: "sample" },
  ],
}

export const Default = () => <Tags {...props} />
export const Many = () => <Tags {...propsManyTags} />
