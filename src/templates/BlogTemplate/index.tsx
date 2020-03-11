import React from "react"
import styles from "./styles.module.scss"
import { graphql } from "gatsby"
import { DefaultLayout } from "../../components/DefaultLayout"

export type PageContext = {
  title: string
}

export type Props = {
  path: string
  pageContext: PageContext
}

const BlogTemplate: React.FC<Props> = (props: Props) => (
  <DefaultLayout>
    <article className={styles.container}>
      <h2>{props.pageContext.title}</h2>
      {/* <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark?.html! }}
      /> */}
    </article>
  </DefaultLayout>
)

export default BlogTemplate
