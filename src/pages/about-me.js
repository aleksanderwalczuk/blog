import React from "react"
import styles from "./about-me.module.css"
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
    <h1>About me</h1>
    <p>I’m good enough, I’m smart enough, and gosh darn it, people like me!</p>
    
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