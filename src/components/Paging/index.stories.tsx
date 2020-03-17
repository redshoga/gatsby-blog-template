import React from "react"
import { Paging, Props } from "./index"

export default {
  title: "Components/Paging",
  component: Paging,
}

const previous = {
  previous: {
    title: "散歩",
    path: "sanpo",
  },
}

const next = {
  next: {
    title: "寝る",
    path: "neru",
  },
}

export const Both = () => <Paging {...{ ...next, ...previous }} />
export const OnlyNext = () => <Paging {...{ ...next }} />
export const OnlyPrevious = () => <Paging {...{ ...previous }} />
