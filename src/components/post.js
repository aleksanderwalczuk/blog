import React from "react"

const time = new Date().toLocaleDateString()
const imgSrc = "https://picsum.photos/700/450"

export const Post = props => (
  <section className="post">
    <div className="post-heading-container">
      <h3 className="heading post-heading">{props.postHeading}</h3>
      <span>{time}</span>
    </div>
    <figure className="post-img-container">
      <img src={props.imgSrc} alt="blog post img" className="post-img" />
    </figure>
    <div>
      {children || null}
      <p className="post-paragraph">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis,
        aliquam.
      </p>
      <p className="post-paragraph">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis,
        aliquam.
      </p>
      <p className="post-paragraph">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis,
        aliquam.
      </p>
    </div>
  </section>
)