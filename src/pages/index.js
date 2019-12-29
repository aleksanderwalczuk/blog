import React from "react"
import Layout from "../components/layout"
import Post1 from "../components/post1"

export default () => (
  <Layout>
    <div className="aside">
      <h1 className="heading">Witaj świecie</h1>
      <p>To tylko kolejny blog technologiczny...</p>
    </div>
    <article className="article">
     <Post1/>
    </article>
  </Layout>
)
