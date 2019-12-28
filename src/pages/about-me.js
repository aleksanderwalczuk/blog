import React from "react"
import Layout from "../components/layout"

const User = props => (
  <div className={''}>
    <img src={props.avatar} alt="" />
    <div className={''}>
      <h2 className={''}>{props.username}</h2>
      <p className={''}>{props.excerpt}</p>
    </div>
  </div>
)
export default () => (
  <Layout>
      <h1>About me</h1>
      <p>
        I’m good enough, I’m smart enough, and gosh darn it, people like me!
      </p>

      <User
        username="John Doe"
        avatar="https://picsum.photos/seed/picsum/100/200"
        excerpt="Hi! My name is John Doe."
      />
      <User
        username="Jane Doe"
        avatar="https://picsum.photos/100/200?grayscale"
        excerpt="Hi! My name is Jane Doe. "
      />
  </Layout>
)
