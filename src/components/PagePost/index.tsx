import React from "react"
import styles from "./index.module.scss"
import { Link } from "gatsby"
import Img, { FixedObject, FluidObject } from "gatsby-image"
import { LayoutBlog } from "../LayoutBlog"
import { AuthorInfoMin } from "../AuthorInfoMin"
import { AuthorInfoLarge } from "../AuthorInfoLarge"
import { Paging } from "../Paging"

export type Props = {
  title: string
  createdAt: string
  thumbnailImage600px: FluidObject
  html: string
  author50px: FixedObject
  author100px: FixedObject
  authorName: string
  authorBio: string
  previous?: {
    title: string
    path: string
  }
  next?: {
    title: string
    path: string
  }
}

export const PagePost: React.FC<Props> = (props: Props) => {
  const TitlePart = () => <h1 className={styles.title}>{props.title}</h1>

  const ArticlePart = () => (
    <div dangerouslySetInnerHTML={{ __html: props.html }} />
  )

  const ThumbnailPart = () => (
    <Img fluid={props.thumbnailImage600px} className={styles.thumbnailImage} />
  )

  return (
    <LayoutBlog>
      <TitlePart />
      <AuthorInfoMin
        className={styles.author}
        name={props.authorName}
        subInfo={props.createdAt}
        author50px={props.author50px}
      />
      <ThumbnailPart />
      <ArticlePart />
      <AuthorInfoLarge
        topInfo={"Writtern by"}
        name={props.authorName}
        bio={props.authorBio}
        author100px={props.author100px}
        className={styles.writternBy}
      />
      {(props.previous || props.next) && (
        <Paging
          className={styles.paging}
          previous={props.previous}
          next={props.next}
        />
      )}
    </LayoutBlog>
  )
}
