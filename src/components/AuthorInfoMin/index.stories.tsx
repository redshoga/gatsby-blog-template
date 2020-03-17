import React from "react"
import { AuthorInfoMin, Props } from "./index"
import { mocks } from "../../mocks"

export default {
  title: "Components/AuthorInfoMin",
  component: AuthorInfoMin,
}

const props: Props = {
  name: "いーふとイチオカ",
  subInfo: "2019年2月2日",
  author50px: mocks.fixedIcon50px(),
}

export const Default = () => <AuthorInfoMin {...props} />
