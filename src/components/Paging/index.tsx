import React from "react"
import styles from "./index.module.scss"
import { Link } from "gatsby"
import classnames from "classnames"

export type Props = {
  previous?: {
    title: string
    path: string
  }
  next?: {
    title: string
    path: string
  }
  className?: string
}

export const Paging = (props: Props) => (
  <div
    className={classnames(styles.container, props.className, {
      [styles.containerBoth]: props.next && props.previous,
      [styles.containerOnlyNext]: props.next && !props.previous,
      [styles.containerOnlyPrevious]: !props.next && props.previous,
    })}
  >
    {props.previous && (
      <div>
        <div>Previous</div>
        <Link to={props.previous.path}>{props.previous.title}</Link>
      </div>
    )}
    {props.next && (
      <div>
        <div>Next</div>
        <Link to={props.next.path}>{props.next.title}</Link>
      </div>
    )}
  </div>
)
