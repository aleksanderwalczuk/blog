import React from "react"
import { Post, ListItem } from "./posts"
import { Link } from "gatsby"
import img1 from "../../static/code-1076536_640.jpg"

const look = [
  { name: "Material Icon Theme", description: "" },
  { name: "One Dark Pro", description: "" },
  { name: "VSCode Great Icons", description: "" },
]

const codecompletion = [
  { name: "Auto Rename Tag", description: "" },
  { name: "Color Picker", description: "" },
  { name: "Intellisense for CSS", description: "" },
  { name: "Path Intellisense", description: "" },
  { name: "docs-markdown", description: "" },
  { name: "JavaScript ES6 code snippets", description: "" },
  { name: "ES7 React/Redux/GraphQL/ReactNative snippets", description: "" },
  { name: "Visual Studio Intellisense", description: "" },
  { name: "JS JSX Snippets", description: "" },
]
const git = [
  { name: "gi", description: "" },
  { name: "Git Blame", description: "" },
  { name: "Git Graph", description: "" },
  { name: "GitLens", description: "" },
  { name: "Ignore files", description: "" },
]
const sass = [
  { name: "Live Sass Compiler", description: "" },
  { name: "Sass", description: "" },
  { name: "Sass Yah", description: "" },
  { name: "CSS Peek", description: "" },
  { name: "SCSS Intellisense", description: "" },
]

const formatters = [
  { name: "Beautify", description: "" },
  { name: "Preetier - Code formatter", description: "" },
  { name: "Trailing Spaces", description: "" },
  { name: "Paste and Indent", description: "" },
]
const preview = [
  { name: "Live Server", description: "" },
  { name: "Markdown Preview Enchanced", description: "" },
  { name: "Quokka.js", description: "" },
  { name: "Image preview", description: "" },
]
const extenstionsNames = [
  { name: "Bracket Pair Colorizer", description: "" },
  { name: "Debugger for Chrome", description: "" },
  { name: "ES Lint", description: "" },
  { name: "Indented Block Highlighting", description: "" },
  { name: "JetBrains IDE Keymap", description: "" },
  { name: "Live Share", description: "" },
  { name: "markdownlint", description: "" },
]

const postImgs = [img1]

const time = new Date("2019-12-28").toLocaleDateString()

export default () => (
  <Post
    postHeading="Dodatki do VS Code, mój config"
    imgSrc={postImgs[0]}
    time={time}
  >
    <p className="post-paragraph">
      Cześć! <br /> Słowem wstępu postanowiłem podzielić się z Wami listą
      dodatków do VS Code z jakich korzystam. Będzie to też pierwszy post z
      kategorii środowiska deweloperskiego. Jeśli zupełnie niespodziewacie się
      co to mogą być za dodatki, możecie rzucić okiem na sekcję&nbsp;
      <Link to="./about-me" className="post-link">
        O mnie
      </Link>
      . VSC to mój edytor nr. 1, chociaż wolę korzystać z IDE, a dokładniej
      Webstorma 🧐. Postaram się je podzielić na kategorie i posortować. Opiszę
      też te, które mogą być warte uwagi, a ich nazwa nie mówi sama za siebie.
      Oglądajcie, testujcie:
    </p>
    <ol>
      <ListItem category="Wygląd: " arr={look} />
      <ListItem category="Formattery: " arr={formatters} />
      <ListItem category="Code Completion: " arr={codecompletion} />
      <ListItem category="Sass/CSS: " arr={sass} />
      <ListItem category="Live preview: " arr={preview} />
      <ListItem category="Git: " arr={git} />
      <ListItem category="Pozostałe: " arr={extenstionsNames} />
    </ol>
    <p className="post-paragraph"></p>
  </Post>
)
