import React from "react"
import styles from "./about-css-modules.module.css"
import Container from "../components/container"

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)
export default () => (
  <Container>
    <h1>About CSS Modules</h1>
    <p>CSS Modules are cool</p>
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
  </Container>
)
