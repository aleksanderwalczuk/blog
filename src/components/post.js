import React from "react"

const Post = props => (
  <div className={''}>
    <img src={props.avatar} alt="" />
    <div className={''}>
      <h2 className={'post-title'}>{props.postHeading}</h2>
      <p className={'post-paragraph'}>{props.excerpt}</p>
    </div>
  </div>
)

export default ({ children }) => (
  <div className={''}>{children}</div>
)