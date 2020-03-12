import React from "react"
import { Page404, Props as PageProps } from "../components/Page404"
import { constants } from "../constants"

export type Props = {}

const Page: React.FC<Props> = (props: Props) => {
  const pageProps: PageProps = {
    linkList: [
      { title: "Blog", path: constants.path.blogIndex() },
      { title: "Portfolio", path: constants.path.portfolioIndex() },
    ],
  }
  return (
    <>
      <Page404 {...pageProps} />
    </>
  )
}

export default Page
