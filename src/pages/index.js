import React from "react"
import Layout from "../components/layout"
import { Post } from "../components/post"
import { Link } from "gatsby"

const postImgs = [
  "https://pixabay.com/get/57e0d2454f51aa14f1dc8460825668204022dfe05456744e772c78d2/code-1076536_640.jpg",
]
const extenstionsNames = [
  // { 0: "", 1: "" },
  "Auto Rename Tag",
  "Beautify",
  "Bracket Pair Colorizer",
  "Color Picker",
  "CSS Peek",
  "Debugger for Chrome",
  "docs-markdown",
  "ES7 React/Redux/GraphQL/ReactNative snippets",
  "ES Lint",
  "gi",
  "Git Blame",
  "GitLens",
  "Ignore files",
  "Image preview",
  "Indented Block Highlighting",
  "Intellisense for CSS",
  "JavaScript ES6 code snippets",
  "JetBrains IDE Keymap",
  "JS JSX Snippets",
  "Live Sass Compiler",
  "Live Server",
  "Live Share",
  "Markdown Preview Enchanced",
  "markdownlint",
  "Material Icon Theme",
  "One Dark Pro",
  "Paste and Indent",
  "Path Intellisense",
  "Preetier - Code formatter",
  "Quokka.js",
  "Sass",
  "Sass Yah",
  "SCSS Intellisense",
  "Trailing Spaces",
  "Visual Studio Intellisense",
  "VSCode Great Icons",
]
export default () => (
  <Layout>
    <h1 className="heading">Witaj świecie,</h1>
    <p>W tym miejscu znajdą się moje zapiski, początkującego frontend deva!</p>
    <article className="article">
      <Post postHeading="Dodatki do VS Code, mój config" imgSrc={postImgs[0]}>
        <p className="post-paragraph">
          Cześć i czołem! <br /> Słowem wstępu postanowiłem podzielić się z Wami
          listą dodatków do VS Code z jakich korzystam. Jeśli zupełnie
          niespodziewacie się co to mogą być za dodatki, możecie rzucić okiem na
          sekcję&nbsp;
          <Link to="about-me">O mnie</Link>. VSC to mój edytor nr. 1, chociaż
          wolę korzystać z IDE, a dokładniej Webstorma. Postaram się je
          podzielić na kategorie i posortować. Opiszę też te, które mogą być warte uwagi, a ich nazwa nie mówi sama za siebie. Nie przedłużając moje dodatki to:
          <ol>
            {extenstionsNames.map(item => (
              <li>{item}</li>
            ))}
          </ol>
        </p>
      </Post>
    </article>
  </Layout>
)
