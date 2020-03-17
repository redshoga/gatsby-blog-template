import React from "react"
import { Footer, Props } from "./index"

export default {
  title: "Components/Footer",
  component: Footer,
}

const props: Props = {
  linkList: [
    { path: "top", title: "top" },
    { path: "blog", title: "blog" },
    { path: "portfolio", title: "portfolio" },
  ],
}

export const Default = () => <Footer {...props} />
