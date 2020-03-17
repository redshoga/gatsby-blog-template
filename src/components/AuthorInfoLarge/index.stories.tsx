import React from "react"
import { AuthorInfoLarge, Props } from "./index"
import { mocks } from "../../mocks"

export default {
  title: "Components/AuthorInfoLarge",
  component: AuthorInfoLarge,
}

const props: Props = {
  topInfo: "WRITTEN BY",
  name: "いーふとイチオカ",
  bio: "2019年2月2日",
  author100px: mocks.fixedIcon100px(),
}

export const Default = () => <AuthorInfoLarge {...props} />
