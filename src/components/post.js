import React from "react"

const time = new Date(2019,12,28).toLocaleDateString('pl_PL')

export const Post = (props) => (
  <section className="post">
    <div className="post-heading-container">
      <h3 className="heading post-heading">{props.postHeading}</h3>
      <span>{time}</span>
    </div>
    <figure className="post-img-container">
      <img src={props.imgSrc} alt="blog post img" className="post-img" />
    </figure>
    <div>
      {props.children}
    </div>
  </section>
)