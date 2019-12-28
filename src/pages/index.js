import React from "react"
import Layout from "../components/layout"

const time = new Date().toLocaleDateString()

export default () => (
  <Layout>
    <h1 className="heading">Witaj świecie,</h1>
    <p>W tym miejscu znajdą się moje zapiski, początkującego frontend deva!</p>
    <article className="article">
      <section className="post">
        <div className="post-heading-container">
          <h3 className="heading post-heading">Dupa 1</h3>
          <span>{time}</span>
        </div>
        <figure className="post-img-container">
          <img
            src="https://picsum.photos/700/450"
            alt=""
            className="post-img"
          />
        </figure>
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
      </section>
    </article>
  </Layout>
)
